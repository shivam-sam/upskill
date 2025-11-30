
import React, { useState } from 'react';

const TemplateMethodDemo: React.FC = () => {
  const [beverage, setBeverage] = useState<'tea' | 'coffee'>('tea');
  const [logs, setLogs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // The Template Method Structure
  const prepareRecipe = async () => {
    setIsProcessing(true);
    setLogs([]);
    
    const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

    // Step 1: Boil Water (Common)
    addLog("🔥 Boiling water...");
    await new Promise(r => setTimeout(r, 800));

    // Step 2: Brew (Abstract - varies by subclass)
    if (beverage === 'tea') {
       addLog("🍵 Steeping the tea bag...");
    } else {
       addLog("☕ Dripping coffee through filter...");
    }
    await new Promise(r => setTimeout(r, 800));

    // Step 3: Pour in Cup (Common)
    addLog("🍶 Pouring into cup...");
    await new Promise(r => setTimeout(r, 800));

    // Step 4: Add Condiments (Abstract - varies by subclass)
    if (beverage === 'tea') {
       addLog("🍋 Adding lemon...");
    } else {
       addLog("🥛 Adding sugar and milk...");
    }
    await new Promise(r => setTimeout(r, 800));

    addLog("✅ Enjoy your beverage!");
    setIsProcessing(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-900">
         <strong>Analogy:</strong> Making Tea and Coffee follows the same recipe structure (Boil -> Brew -> Pour -> Condiments). The <strong>Template Method</strong> defines this flow in a base class, while subclasses provide specific implementations for brewing and condiments.
       </div>

       <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-6">🥤 Beverage Machine</h3>
          
          <div className="flex gap-4 mb-8">
             <button 
               onClick={() => setBeverage('tea')}
               disabled={isProcessing}
               className={`flex-1 p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-3
                 ${beverage === 'tea' ? 'border-green-500 bg-green-50 text-green-800 shadow-md' : 'border-slate-200 text-slate-400 hover:border-green-200'}
               `}
             >
               <span className="text-4xl">🍵</span>
               <span className="font-bold">Tea</span>
             </button>
             
             <button 
               onClick={() => setBeverage('coffee')}
               disabled={isProcessing}
               className={`flex-1 p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-3
                 ${beverage === 'coffee' ? 'border-amber-700 bg-amber-50 text-amber-900 shadow-md' : 'border-slate-200 text-slate-400 hover:border-amber-200'}
               `}
             >
               <span className="text-4xl">☕</span>
               <span className="font-bold">Coffee</span>
             </button>
          </div>
          
          <button 
            onClick={prepareRecipe}
            disabled={isProcessing}
            className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-900 disabled:opacity-50 shadow-lg active:scale-95 transition-all"
          >
            {isProcessing ? 'Preparing...' : `Prepare ${beverage === 'tea' ? 'Tea' : 'Coffee'}`}
          </button>
       </div>

       <div className="bg-slate-900 p-6 rounded-xl shadow-inner font-mono text-sm min-h-[240px] border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl pointer-events-none">
            {beverage === 'tea' ? '🍵' : '☕'}
          </div>
          
          <div className="space-y-3 relative z-10">
            {logs.map((log, i) => (
              <div key={i} className="text-green-400 animate-[slideRight_0.3s]">
                <span className="text-slate-500 mr-3">Step {i + 1}:</span>
                {log}
              </div>
            ))}
            {logs.length === 0 && <div className="text-slate-600 italic mt-8 text-center">Select a beverage and start...</div>}
          </div>
       </div>
       
       <style>{`
         @keyframes slideRight {
           from { opacity: 0; transform: translateX(-10px); }
           to { opacity: 1; transform: translateX(0); }
         }
       `}</style>
    </div>
  );
};

export default TemplateMethodDemo;
