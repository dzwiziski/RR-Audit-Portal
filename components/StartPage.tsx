import React, { useState } from 'react';
import { ClientInfo, Participant } from '../types';
import { Users, Building, Calendar, UserPlus, Trash2, ArrowRight } from 'lucide-react';

interface StartPageProps {
  onStart: (info: ClientInfo) => void;
  initialData?: ClientInfo;
}

const StartPage: React.FC<StartPageProps> = ({ onStart, initialData }) => {
  const [info, setInfo] = useState<ClientInfo>(initialData || {
    companyName: '',
    partners: '',
    participants: [{ name: '', title: '' }],
    date: new Date().toISOString().split('T')[0]
  });

  const updateField = (field: keyof ClientInfo, value: any) => {
    setInfo(prev => ({ ...prev, [field]: value }));
  };

  const updateParticipant = (index: number, field: keyof Participant, value: string) => {
    const newParticipants = [...info.participants];
    newParticipants[index] = { ...newParticipants[index], [field]: value };
    setInfo(prev => ({ ...prev, participants: newParticipants }));
  };

  const addParticipant = () => {
    setInfo(prev => ({
      ...prev,
      participants: [...prev.participants, { name: '', title: '' }]
    }));
  };

  const removeParticipant = (index: number) => {
    if (info.participants.length > 1) {
      setInfo(prev => ({
        ...prev,
        participants: prev.participants.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (info.companyName) {
      onStart(info);
    } else {
      alert("Please enter a company name to proceed.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn pb-12">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-8 text-white text-center">
          <h1 className="text-3xl font-bold mb-2">GTM Gap™ Auditor</h1>
          <p className="text-blue-200">Revenue Reimagined Engagement Setup</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Company Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b pb-2">
              <Building className="text-blue-600" size={20} />
              Engagement Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  value={info.companyName}
                  onChange={e => updateField('companyName', e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Audit Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input
                    type="date"
                    value={info.date}
                    onChange={e => updateField('date', e.target.value)}
                    className="w-full pl-10 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Revenue Reimagined Partner(s)</label>
              <input
                type="text"
                value={info.partners}
                onChange={e => updateField('partners', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Adam, Dale, Jake"
              />
            </div>
          </div>

          {/* Participants */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Users className="text-blue-600" size={20} />
                Client Participants
              </h3>
              <button
                type="button"
                onClick={addParticipant}
                className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1"
              >
                <UserPlus size={16} /> Add Person
              </button>
            </div>
            
            <div className="space-y-3">
              {info.participants.map((p, idx) => (
                <div key={idx} className="flex gap-4 items-start animate-fadeIn">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={p.name}
                      onChange={e => updateParticipant(idx, 'name', e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={p.title}
                      onChange={e => updateParticipant(idx, 'title', e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                      placeholder="Title"
                    />
                  </div>
                  {info.participants.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeParticipant(idx)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                      title="Remove"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.99] flex items-center justify-center gap-3 text-lg"
            >
              Start Audit <ArrowRight size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartPage;