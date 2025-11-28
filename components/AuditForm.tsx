
import React from 'react';
import { AuditItem, AuditResponse, PriorityLevel } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface AuditFormProps {
  category: string;
  items: AuditItem[];
  responses: Record<string, AuditResponse>;
  onUpdate: (id: string, field: keyof AuditResponse, value: any) => void;
  onAddQuestion?: (category: string, subCategory: string) => void;
  onDeleteQuestion?: (id: string) => void;
  onUpdateQuestionText?: (id: string, text: string) => void;
  onAddSubCategory?: (category: string) => void;
  onDeleteSubCategory?: (category: string, subCategory: string) => void;
}

const AuditForm: React.FC<AuditFormProps> = ({ 
  category, 
  items, 
  responses, 
  onUpdate,
  onAddQuestion,
  onDeleteQuestion,
  onUpdateQuestionText,
  onAddSubCategory,
  onDeleteSubCategory
}) => {
  // Group items by subcategory
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.subCategory]) acc[item.subCategory] = [];
    acc[item.subCategory].push(item);
    return acc;
  }, {} as Record<string, AuditItem[]>);

  const PRIORITY_OPTIONS: { value: PriorityLevel; label: string; color: string }[] = [
    { value: 0, label: 'N/A', color: 'bg-slate-200 text-slate-600' },
    { value: 1, label: 'Low', color: 'bg-blue-100 text-blue-800' },
    { value: 2, label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 3, label: 'High', color: 'bg-red-100 text-red-800' },
  ];

  const STATE_OPTIONS = [
    { value: 0, label: "Doesn't Exist", color: 'bg-red-50 border-red-200 text-red-700' },
    { value: 1, label: "Partially There", color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
    { value: 2, label: "Fully Deployed", color: 'bg-green-50 border-green-200 text-green-700' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md mb-6 transition-colors">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              {category}
            </h2>
            <p className="text-blue-200 mt-2">
              Assess the current maturity and priority for each item below. 
              <span className="text-blue-300 text-xs ml-2">(Click text to edit)</span>
            </p>
          </div>
        </div>
      </div>

      {Object.entries(groupedItems).map(([subCategory, subItems]) => (
        <div key={subCategory} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center group/header">
            <h3 className="font-semibold text-slate-800 text-lg">{subCategory}</h3>
            {onDeleteSubCategory && (
              <button 
                onClick={() => onDeleteSubCategory(category, subCategory)}
                className="text-slate-400 hover:text-red-600 p-1 opacity-0 group-hover/header:opacity-100 transition-opacity"
                title="Delete Section"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
          
          <div className="divide-y divide-slate-100">
            {(subItems as AuditItem[]).map((item) => {
              const response = responses[item.id] || { currentState: 0, priority: 0, notes: '' };
              
              return (
                <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors group relative">
                  {onDeleteQuestion ? (
                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button 
                        onClick={() => onDeleteQuestion(item.id)}
                        className="p-2 text-slate-400 hover:text-red-600 bg-white rounded shadow border border-slate-200 hover:border-red-200"
                        title="Delete Question"
                      >
                         <Trash2 size={16} />
                      </button>
                    </div>
                  ) : null}

                  <div className="mb-4 pr-8">
                    {onUpdateQuestionText ? (
                      <input 
                        type="text"
                        value={item.question}
                        onChange={(e) => onUpdateQuestionText(item.id, e.target.value)}
                        className="w-full font-medium text-slate-900 border-b border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none bg-transparent py-1 transition-colors"
                        placeholder="Enter question text..."
                      />
                    ) : (
                      <p className="font-medium text-slate-900 text-base">{item.question}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Current State Selection */}
                    <div className="lg:col-span-5">
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Current State
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {STATE_OPTIONS.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => onUpdate(item.id, 'currentState', option.value)}
                            className={`px-1 py-2 rounded border text-xs sm:text-sm font-medium transition-all ${
                              response.currentState === option.value
                                ? `${option.color} ring-2 ring-offset-1 ring-blue-500 border-transparent shadow-sm`
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Priority Selection */}
                    <div className="lg:col-span-3">
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Priority
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                          {PRIORITY_OPTIONS.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => onUpdate(item.id, 'priority', option.value)}
                              className={`px-1 py-2 rounded border text-xs sm:text-sm font-medium transition-all ${
                                response.priority === option.value
                                  ? `${option.color} ring-2 ring-offset-1 ring-blue-500 border-transparent shadow-sm`
                                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="lg:col-span-4">
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Notes
                      </label>
                      <textarea
                        value={response.notes}
                        onChange={(e) => onUpdate(item.id, 'notes', e.target.value)}
                        placeholder="Gap analysis..."
                        rows={2}
                        className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 text-slate-700 bg-slate-50 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Add Question Button */}
            {onAddQuestion && (
              <div className="p-4 bg-slate-50 flex justify-center border-t border-slate-100">
                <button
                  onClick={() => onAddQuestion(category, subCategory)}
                  className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-600 transition-colors px-4 py-2 rounded-md hover:bg-white border border-transparent hover:border-slate-200"
                >
                  <Plus size={16} /> Add Question
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Add SubCategory Button */}
      {onAddSubCategory && (
        <button
          onClick={() => onAddSubCategory(category)}
          className="w-full py-4 border-2 border-dashed border-slate-300 rounded-lg text-slate-400 font-medium hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
        >
          <Plus size={20} /> Add New Section
        </button>
      )}
    </div>
  );
};

export default AuditForm;
