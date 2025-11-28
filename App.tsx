
import React, { useState, useMemo, useEffect } from 'react';
import { AUDIT_DATA } from './constants';
import { AuditResponse, SectionScore, AuditItem, ClientInfo } from './types';
import AuditForm from './components/AuditForm';
import Dashboard from './components/Dashboard';
import FrameworkGuide from './components/FrameworkGuide';
import StartPage from './components/StartPage';
import { BarChart3, LayoutDashboard, ChevronRight, Menu, BookOpen, Plus, Trash2, CheckCircle2, User, Home } from 'lucide-react';

const STORAGE_KEY_ITEMS = 'gtm_audit_items';
const STORAGE_KEY_RESPONSES = 'gtm_audit_responses';
const STORAGE_KEY_CLIENT = 'gtm_audit_client';

const App: React.FC = () => {
  // Active view: 'start', 'dashboard', 'framework', or category name
  const [activeView, setActiveView] = useState<string>('start');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Client Info State - with LocalStorage persistence
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CLIENT);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error("Failed to load client info from storage", e);
      return null;
    }
  });

  // State for dynamic items and responses - with LocalStorage persistence
  const [auditItems, setAuditItems] = useState<AuditItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ITEMS);
      return saved ? JSON.parse(saved) : AUDIT_DATA;
    } catch (e) {
      console.error("Failed to load audit items from storage", e);
      return AUDIT_DATA;
    }
  });
  
  const [responses, setResponses] = useState<Record<string, AuditResponse>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESPONSES);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to load responses from storage", e);
      return {};
    }
  });

  // Persist state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CLIENT, JSON.stringify(clientInfo));
  }, [clientInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(auditItems));
  }, [auditItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RESPONSES, JSON.stringify(responses));
  }, [responses]);

  // Derive categories from current items
  const categories = useMemo(() => {
    return Array.from(new Set(auditItems.map(item => item.category)));
  }, [auditItems]);

  const updateResponse = (id: string, field: keyof AuditResponse, value: any) => {
    setResponses(prev => ({
      ...prev,
      [id]: {
        ...prev[id] || { currentState: 0, priority: 0, notes: '' },
        [field]: value
      }
    }));
  };

  const calculateScores = (): SectionScore[] => {
    return categories.map(cat => {
      const catItems = auditItems.filter(i => i.category === cat);
      // Max score per item is 2 (Fully Deployed)
      const totalPossible = catItems.length * 2;
      const actual = catItems.reduce((sum, item) => sum + (responses[item.id]?.currentState || 0), 0);
      return {
        category: cat,
        totalPossible,
        actual,
        score: totalPossible > 0 ? Math.round((actual / totalPossible) * 100) : 0
      };
    });
  };

  const currentItems = useMemo(() => 
    auditItems.filter(item => item.category === activeView), 
  [activeView, auditItems]);

  // Calculate completion percentage for sidebar indicators
  const getCategoryCompletion = (cat: string) => {
    const catItems = auditItems.filter(i => i.category === cat);
    if (catItems.length === 0) return 0;
    const answeredCount = catItems.filter(i => responses[i.id]).length;
    return Math.round((answeredCount / catItems.length) * 100);
  };

  // Calculate global completion
  const totalProgress = useMemo(() => {
    if (auditItems.length === 0) return 0;
    const answeredCount = auditItems.filter(item => responses[item.id]).length;
    return Math.round((answeredCount / auditItems.length) * 100);
  }, [auditItems, responses]);

  // --- CRUD Operations ---

  const handleAddCategory = () => {
    const name = window.prompt("Enter new category name:");
    if (!name) return;
    if (categories.includes(name)) {
      alert("Category already exists.");
      return;
    }
    
    // Add a default item to establish the category
    const newItem: AuditItem = {
      id: `custom_${Date.now()}`,
      category: name,
      subCategory: 'General',
      question: 'New Audit Question'
    };
    
    setAuditItems([...auditItems, newItem]);
    setActiveView(name);
  };

  const handleDeleteCategory = (cat: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete the entire category "${cat}" and all its questions?`)) {
      const newItems = auditItems.filter(i => i.category !== cat);
      setAuditItems(newItems);
      if (activeView === cat) setActiveView('dashboard');
    }
  };

  const handleAddSubCategory = (category: string) => {
    const name = window.prompt("Enter new sub-category name:");
    if (!name) return;

    const newItem: AuditItem = {
      id: `custom_${Date.now()}`,
      category: category,
      subCategory: name,
      question: 'New Question'
    };
    setAuditItems([...auditItems, newItem]);
  };

  const handleDeleteSubCategory = (category: string, subCategory: string) => {
    if (window.confirm(`Delete sub-category "${subCategory}" and all its questions?`)) {
      setAuditItems(auditItems.filter(i => !(i.category === category && i.subCategory === subCategory)));
    }
  };

  const handleAddQuestion = (category: string, subCategory: string) => {
    const newItem: AuditItem = {
      id: `custom_${Date.now()}`,
      category,
      subCategory,
      question: 'New Question'
    };
    setAuditItems([...auditItems, newItem]);
  };

  const handleDeleteQuestion = (id: string) => {
    if (window.confirm("Delete this question?")) {
      setAuditItems(auditItems.filter(i => i.id !== id));
      // Cleanup response
      const newResponses = { ...responses };
      delete newResponses[id];
      setResponses(newResponses);
    }
  };

  const handleUpdateQuestion = (id: string, newText: string) => {
    setAuditItems(auditItems.map(i => i.id === id ? { ...i, question: newText } : i));
  };

  const handleStartAudit = (info: ClientInfo) => {
    setClientInfo(info);
    setActiveView('dashboard');
  };

  // Render view content based on activeView state
  const renderContent = () => {
    if (activeView === 'start') {
      return <StartPage onStart={handleStartAudit} initialData={clientInfo || undefined} />;
    }
    if (activeView === 'dashboard') {
      return <Dashboard scores={calculateScores()} responses={responses} items={auditItems} />;
    }
    if (activeView === 'framework') {
      return <FrameworkGuide />;
    }
    return (
      <AuditForm 
        category={activeView} 
        items={currentItems}
        responses={responses}
        onUpdate={updateResponse}
        onAddQuestion={handleAddQuestion}
        onDeleteQuestion={handleDeleteQuestion}
        onUpdateQuestionText={handleUpdateQuestion}
        onAddSubCategory={handleAddSubCategory}
        onDeleteSubCategory={handleDeleteSubCategory}
      />
    );
  };

  // If viewing start page, show a simplified layout (no sidebar)
  if (activeView === 'start') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4">
        {renderContent()}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-slate-900 text-white border-r border-slate-800 transition-all duration-300">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-1">
            <div className="bg-blue-600 p-2 rounded-lg">
              <BarChart3 size={24} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Revenue Reimagined</h1>
            </div>
          </div>
          {clientInfo && (
            <div className="mt-2 text-sm text-slate-400 border-t border-slate-800 pt-2">
               <div className="font-medium text-white">{clientInfo.companyName}</div>
               <div className="text-xs">{clientInfo.date}</div>
            </div>
          )}
        </div>

        {/* Global Progress */}
        <div className="px-6 pt-6 pb-2">
            <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Audit Progress</span>
                <span className={`text-xs font-bold ${totalProgress === 100 ? 'text-green-400' : 'text-blue-400'}`}>{totalProgress}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                    className={`h-full rounded-full transition-all duration-500 ease-out ${totalProgress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                    style={{ width: `${totalProgress}%` }}
                ></div>
            </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          <button
            onClick={() => setActiveView('start')}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all mb-1 ${
              activeView === 'start' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Home size={20} />
            <span className="font-medium">Engagement Details</span>
          </button>

          <button
            onClick={() => setActiveView('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all mb-1 ${
              activeView === 'dashboard' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard Summary</span>
          </button>

          <button
            onClick={() => setActiveView('framework')}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all mb-6 ${
              activeView === 'framework' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <BookOpen size={20} />
            <span className="font-medium">The GTM Gap™</span>
          </button>

          <div className="px-3 mb-2 flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Audit Categories</span>
            <button 
              onClick={handleAddCategory}
              className="text-blue-400 hover:text-blue-300 transition-colors"
              title="Add Category"
            >
              <Plus size={16} />
            </button>
          </div>

          {categories.map((cat) => {
             const completion = getCategoryCompletion(cat);
             return (
              <div key={cat} className="group relative">
                <button
                  onClick={() => setActiveView(cat)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                    activeView === cat
                      ? 'bg-slate-800 text-white border-l-4 border-blue-500'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex flex-col items-start text-left w-full pr-6">
                    <span className="text-sm font-medium truncate w-full">{cat}</span>
                    {completion > 0 && completion < 100 && (
                       <span className="text-[10px] text-slate-500 group-hover:text-slate-400">{completion}% Complete</span>
                    )}
                    {completion === 100 && (
                        <div className="flex items-center gap-1 text-[10px] text-green-500">
                            <CheckCircle2 size={10} />
                            <span>Complete</span>
                        </div>
                    )}
                  </div>
                  {activeView === cat && <ChevronRight size={16} className="text-blue-500" />}
                </button>
                <button
                  onClick={(e) => handleDeleteCategory(cat, e)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-600 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Delete Category"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            );
          })}
        </nav>
        
        <div className="p-4 pt-2 text-xs text-slate-600 text-center">
          v1.5.0 • GTM Gap™ Framework
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white flex items-center justify-between px-4 z-50">
         <div className="flex items-center gap-2">
            <BarChart3 size={20} className="text-blue-400" />
            <div className="flex flex-col">
              <span className="font-bold text-sm">Revenue Reimagined</span>
              {clientInfo && <span className="text-[10px] text-slate-400">{clientInfo.companyName}</span>}
            </div>
         </div>
         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
           <Menu size={24} />
         </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 z-40 pt-20 px-4 md:hidden overflow-y-auto">
           {/* Mobile Progress */}
            <div className="mb-6 bg-slate-800 p-4 rounded-lg">
                <div className="flex justify-between items-end mb-2 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider">Total Progress</span>
                    <span className="text-xs font-bold text-blue-400">{totalProgress}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                    <div 
                        className="bg-blue-500 h-full rounded-full"
                        style={{ width: `${totalProgress}%` }}
                    ></div>
                </div>
            </div>

          <nav className="space-y-2">
            <button
              onClick={() => { setActiveView('start'); setIsMobileMenuOpen(false); }}
              className="w-full text-left p-4 rounded-lg bg-blue-900 text-white"
            >
              Engagement Details
            </button>
            <button
              onClick={() => { setActiveView('dashboard'); setIsMobileMenuOpen(false); }}
              className="w-full text-left p-4 rounded-lg bg-blue-900 text-white"
            >
              Dashboard Summary
            </button>
            <button
              onClick={() => { setActiveView('framework'); setIsMobileMenuOpen(false); }}
              className="w-full text-left p-4 rounded-lg bg-blue-900 text-white mb-4"
            >
              The GTM Gap™
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveView(cat); setIsMobileMenuOpen(false); }}
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
                  activeView === cat ? 'bg-slate-800 text-white' : 'text-slate-400 border border-slate-800'
                }`}
              >
                <span>{cat}</span>
                {getCategoryCompletion(cat) === 100 && <CheckCircle2 size={16} className="text-green-500" />}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-12">
           {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
    