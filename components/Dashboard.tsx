import React, { useState } from 'react';
import { AuditItem, AuditResponse, SectionScore } from '../types';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { BrainCircuit, Loader2, CheckCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface DashboardProps {
  scores: SectionScore[];
  responses: Record<string, AuditResponse>;
  items: AuditItem[];
}

const Dashboard: React.FC<DashboardProps> = ({ scores, responses, items }) => {
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Filter high priority items (Priority 3 = High) with low scores (< 2)
  const sprintCandidates = items
    .filter(item => {
      const resp = responses[item.id];
      // Priority 3 is High. State 0 (None) or 1 (Partial) are gaps.
      return resp && resp.priority === 3 && resp.currentState < 2;
    })
    .sort((a, b) => {
      // Sort by lowest current state first
      const valA = responses[a.id]?.currentState ?? 0;
      const valB = responses[b.id]?.currentState ?? 0;
      return valA - valB;
    });

  const handleGenerateInsight = async () => {
    setIsLoading(true);
    try {
      const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const summaryData = {
        scores: scores.map(s => `${s.category}: ${s.score}%`),
        criticalGaps: sprintCandidates.slice(0, 10).map(i => `${i.category} - ${i.question} (State: ${responses[i.id].currentState}/2)`),
      };

      const prompt = `
        Act as a Senior Revenue Operations Consultant for "Revenue Reimagined", using the proprietary GTM Gap™ Framework.
        The framework phases are:
        1. Stabilization (Pipeline Integrity, Team Alignment, Process Consistency)
        2. Foundation (Vision, Strategy, Tech Stack)
        3. Repeatability (Documented Playbooks, Training, Consistent Messaging)
        4. Scalability (Market Expansion, Operational Efficiency)

        Analyze the following GTM Audit results:
        Maturity Scores: ${JSON.stringify(summaryData.scores)}
        Top Critical Gaps (High Priority, Low Maturity): ${JSON.stringify(summaryData.criticalGaps)}
        
        Task:
        1. Identify which Phase (Stabilization, Foundation, Repeatability, or Scalability) the company is likely stuck in.
        2. Provide a 4-week sprint recommendation summary to bridge this specific GTM Gap.
        3. Focus on "Low Hanging Fruit" vs "Structural Fixes".
        
        Keep it under 250 words. Format as clear HTML paragraphs with bolding for key terms. No markdown blocks.
      `;

      const response = await genAI.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setAiAnalysis(response.text);
    } catch (error) {
      console.error("AI Error", error);
      setAiAnalysis("Unable to generate analysis at this time. Please check API configuration.");
    } finally {
      setIsLoading(false);
    }
  };

  const getOverallScore = () => {
    const totalPossible = items.length * 2;
    const actual = items.reduce((sum, item) => sum + (responses[item.id]?.currentState || 0), 0);
    return Math.round((actual / totalPossible) * 100);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-20">
      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold">GTM Gap™ Analysis</h2>
        <p className="text-blue-200 mt-2">Executive summary of maturity across the GTM Gap™ Framework.</p>
      </div>

      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-slate-500 font-medium uppercase text-xs tracking-wider">Overall Maturity</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className={`text-4xl font-bold ${
              getOverallScore() > 70 ? 'text-green-600' : getOverallScore() > 40 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {getOverallScore()}%
            </span>
            <span className="text-sm text-slate-500">
              {getOverallScore() > 70 ? 'Strong' : getOverallScore() > 40 ? 'Developing' : 'Needs Attention'}
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-slate-500 font-medium uppercase text-xs tracking-wider">Critical Priorities</h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-red-600">
              {sprintCandidates.length}
            </span>
            <span className="text-sm text-slate-500">Items flagged High Priority</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-slate-500 font-medium uppercase text-xs tracking-wider">Strongest Area</h3>
          <div className="mt-2">
            <span className="text-lg font-bold text-green-700">
              {scores.length > 0 ? scores.reduce((prev, current) => (prev.score > current.score) ? prev : current).category : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 min-h-[400px]">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Maturity Profile</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={scores}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" tick={{ fill: '#475569', fontSize: 11 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Score" dataKey="score" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* AI Analysis */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BrainCircuit size={120} />
          </div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BrainCircuit className="text-purple-400" />
            Revenue Reimagined AI Consultant
          </h3>
          
          {!aiAnalysis ? (
            <div className="h-64 flex flex-col items-center justify-center text-center">
              <p className="text-slate-400 mb-6 max-w-xs">
                Generate a custom 4-week sprint recommendation based on the GTM Gap™ Framework.
              </p>
              <button 
                onClick={handleGenerateInsight}
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : 'Generate Executive Summary'}
              </button>
            </div>
          ) : (
            <div className="animate-fadeIn relative z-10">
               <div 
                  className="prose prose-invert prose-sm max-w-none text-slate-300"
                  dangerouslySetInnerHTML={{ __html: aiAnalysis }} 
               />
               <button 
                onClick={() => setAiAnalysis(null)}
                className="mt-6 text-xs text-purple-300 hover:text-white underline"
              >
                Regenerate Analysis
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sprint Candidates Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">Top Priorities (High Importance / Low Maturity)</h3>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-red-100 text-red-800">
            Review & Complete
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Sub-Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Current State</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {sprintCandidates.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    <div className="flex flex-col items-center">
                      <CheckCircle className="text-green-500 mb-2" size={32} />
                      <p>No critical gaps identified.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                sprintCandidates.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-500 uppercase">
                      {item.subCategory}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium max-w-md">
                      {item.question}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                           responses[item.id].currentState === 0 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {responses[item.id].currentState === 0 ? "Doesn't Exist" : "Partially There"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 italic">
                      {responses[item.id].notes || '-'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;