
import React, { useState } from 'react';

interface Animal {
  id: number;
  species: 'Lion' | 'Dolphin' | 'Monkey';
  icon: string;
}

const VisitorDemo: React.FC = () => {
  const [zoo] = useState<Animal[]>([
    { id: 1, species: 'Lion', icon: '🦁' },
    { id: 2, species: 'Dolphin', icon: '🐬' },
    { id: 3, species: 'Monkey', icon: '🐒' },
  ]);
  
  const [visitorType, setVisitorType] = useState<'vet' | 'feeder' | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const performVisit = (type: 'vet' | 'feeder') => {
    setVisitorType(type);
    setLogs([]);
    
    // Simulate visiting each element
    const newLogs: string[] = [];
    zoo.forEach(animal => {
      if (type === 'vet') {
        if (animal.species === 'Lion') newLogs.push(`🦁 Lion: Vet checking teeth and claws.`);
        if (animal.species === 'Dolphin') newLogs.push(`🐬 Dolphin: Vet checking fins and blowhole.`);
        if (animal.species === 'Monkey') newLogs.push(`🐒 Monkey: Vet checking temperature.`);
      } else {
        if (animal.species === 'Lion') newLogs.push(`🦁 Lion: Feeder gave steak.`);
        if (animal.species === 'Dolphin') newLogs.push(`🐬 Dolphin: Feeder gave fish.`);
        if (animal.species === 'Monkey') newLogs.push(`🐒 Monkey: Feeder gave banana.`);
      }
    });
    setLogs(newLogs);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-900">
         <strong>Analogy:</strong> The animals (Lion, Dolphin) don't know how to treat illnesses or feed themselves. A <strong>Visitor</strong> (Vet or Feeder) comes to them. The logic for treating/feeding is in the Visitor, not the Animal class. This lets you add new operations (e.g., "Trainer") without changing the Animal classes.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* ZOO STRUCTURE */}
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-4">🌳 City Zoo (Object Structure)</h3>
            <div className="grid grid-cols-1 gap-3">
               {zoo.map((animal) => (
                 <div key={animal.id} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="text-3xl">{animal.icon}</div>
                    <div>
                      <div className="font-bold text-slate-700">{animal.species}</div>
                      <div className="text-xs text-slate-400">Concrete Element</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* VISITOR SELECTION */}
         <div className="flex flex-col gap-4">
            <h3 className="font-bold text-slate-800">Select a Visitor</h3>
            
            <button 
              onClick={() => performVisit('vet')}
              className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3
                ${visitorType === 'vet' ? 'bg-red-50 border-red-400 shadow-md' : 'bg-white border-slate-200 hover:border-red-200'}
              `}
            >
              <div className="text-3xl bg-white p-2 rounded-full shadow-sm border">👨‍⚕️</div>
              <div>
                <div className="font-bold text-red-900">Veterinarian Visitor</div>
                <div className="text-xs text-red-700">Performs health checks specific to each animal.</div>
              </div>
            </button>

            <button 
              onClick={() => performVisit('feeder')}
              className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3
                ${visitorType === 'feeder' ? 'bg-green-50 border-green-400 shadow-md' : 'bg-white border-slate-200 hover:border-green-200'}
              `}
            >
              <div className="text-3xl bg-white p-2 rounded-full shadow-sm border">🥕</div>
              <div>
                <div className="font-bold text-green-900">Zookeeper (Feeder) Visitor</div>
                <div className="text-xs text-green-700">Provides specific food for each animal.</div>
              </div>
            </button>
         </div>
      </div>

      {/* RESULTS LOG */}
      {logs.length > 0 && (
        <div className="bg-slate-900 p-6 rounded-xl shadow-inner border border-slate-700">
           <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
             {visitorType === 'vet' ? '🏥 Medical Report' : '🍽️ Feeding Report'}
           </h4>
           <div className="space-y-2">
             {logs.map((log, i) => (
               <div key={i} className="text-white font-mono text-sm animate-[fadeIn_0.3s]" style={{ animationDelay: `${i * 0.1}s` }}>
                 <span className="text-green-500 mr-2">✓</span> {log}
               </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default VisitorDemo;
