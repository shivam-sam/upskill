
import React, { useState, useEffect } from 'react';

type MessageType = 'request' | 'approval' | 'denial' | 'info';

interface Log {
  id: number;
  source: 'Tower' | 'Flight 101' | 'Flight 202';
  message: string;
  type: MessageType;
}

const MediatorDemo: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [runwayClear, setRunwayClear] = useState(true);
  const [flight1State, setFlight1State] = useState<'Flying' | 'Landed'>('Flying');
  const [flight2State, setFlight2State] = useState<'Grounded' | 'Flying'>('Grounded');

  const addLog = (source: 'Tower' | 'Flight 101' | 'Flight 202', message: string, type: MessageType = 'info') => {
    setLogs(prev => [...prev, { id: Date.now() + Math.random(), source, message, type }]);
  };

  const handleReset = () => {
    setLogs([]);
    setRunwayClear(true);
    setFlight1State('Flying');
    setFlight2State('Grounded');
  };

  // MEDIATOR LOGIC (The Tower)
  const handleCommunication = (sender: 'Flight 101' | 'Flight 202', action: 'land' | 'takeoff') => {
    // 1. Log the incoming request
    addLog(sender, `Requesting to ${action}`, 'request');

    // 2. Mediator Logic
    setTimeout(() => {
      if (!runwayClear) {
        addLog('Tower', `Negative ${sender}. Runway is occupied. Hold position.`, 'denial');
        return;
      }

      // If runway is clear, grant permission and update state
      addLog('Tower', `Permission granted to ${action}, ${sender}.`, 'approval');
      setRunwayClear(false);
      
      // Simulate action duration
      setTimeout(() => {
        if (sender === 'Flight 101' && action === 'land') {
           setFlight1State('Landed');
           addLog(sender, "Landed safely. Runway vacated.", 'info');
        } else if (sender === 'Flight 202' && action === 'takeoff') {
           setFlight2State('Flying');
           addLog(sender, "Airborne. Runway vacated.", 'info');
        }
        setRunwayClear(true);
        addLog('Tower', "Runway is now clear.", 'info');
      }, 2000);

    }, 800);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-900 mb-2 flex justify-between items-center">
         <div>
            <strong>Analogy:</strong> Pilots (Colleagues) do not talk to each other to decide who lands. They talk to the ATC Tower (Mediator). The Tower enforces the rules (only one plane on runway) and coordinates the actions.
         </div>
         <button 
           onClick={handleReset}
           className="px-3 py-1 bg-white border border-indigo-200 text-indigo-700 rounded text-xs font-bold hover:bg-indigo-100 whitespace-nowrap ml-4"
         >
           ↺ Reset Demo
         </button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end min-h-[300px]">
          
          {/* FLIGHT 101 */}
          <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm flex flex-col items-center gap-4 relative">
             <div className="text-4xl">{flight1State === 'Flying' ? '✈️' : '🛬'}</div>
             <div className="font-bold text-slate-700">Flight 101</div>
             <div className={`text-xs px-2 py-1 rounded font-mono ${flight1State === 'Flying' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                Status: {flight1State}
             </div>
             
             {flight1State === 'Flying' && (
                <button 
                  onClick={() => handleCommunication('Flight 101', 'land')}
                  disabled={!runwayClear} 
                  className="w-full py-2 bg-blue-600 text-white rounded text-xs font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Request Landing
                </button>
             )}
          </div>

          {/* ATC TOWER (MEDIATOR) */}
          <div className="flex flex-col items-center justify-end h-full">
             <div className="bg-slate-800 text-white p-6 rounded-t-2xl w-full text-center border-b-4 border-slate-600 relative shadow-2xl z-10">
                <div className="text-5xl mb-2">🗼</div>
                <div className="font-bold text-lg">ATC Tower</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-4">Mediator</div>
                
                <div className={`inline-block px-3 py-1 rounded text-xs font-bold transition-colors
                   ${runwayClear ? 'bg-green-500 text-white' : 'bg-red-500 text-white animate-pulse'}
                `}>
                   RUNWAY: {runwayClear ? 'CLEAR' : 'OCCUPIED'}
                </div>
             </div>
             {/* Visual "Ground" */}
             <div className="w-full h-4 bg-slate-400"></div>
          </div>

          {/* FLIGHT 202 */}
          <div className="bg-white p-4 rounded-xl border border-orange-200 shadow-sm flex flex-col items-center gap-4 relative">
             <div className="text-4xl">{flight2State === 'Grounded' ? '🛫' : '✈️'}</div>
             <div className="font-bold text-slate-700">Flight 202</div>
             <div className={`text-xs px-2 py-1 rounded font-mono ${flight2State === 'Flying' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                Status: {flight2State}
             </div>
             
             {flight2State === 'Grounded' && (
                <button 
                  onClick={() => handleCommunication('Flight 202', 'takeoff')}
                  disabled={!runwayClear}
                  className="w-full py-2 bg-orange-600 text-white rounded text-xs font-bold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Request Takeoff
                </button>
             )}
          </div>

       </div>

       {/* COMMS LOG */}
       <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 h-48 overflow-y-auto custom-scrollbar flex flex-col-reverse">
          {logs.length === 0 && <div className="text-slate-500 text-center text-sm mt-4">Radio silence...</div>}
          {logs.map((log) => (
             <div key={log.id} className={`mb-2 text-xs font-mono p-2 rounded border-l-4 animate-[slideIn_0.2s]
                ${log.source === 'Tower' ? 'bg-slate-800 border-yellow-500 text-yellow-100' : 'bg-slate-800 border-blue-500 text-blue-100'}
             `}>
                <span className="font-bold opacity-50 mr-2">[{log.source}]:</span>
                <span className={log.type === 'denial' ? 'text-red-400' : log.type === 'approval' ? 'text-green-400' : ''}>
                  {log.message}
                </span>
             </div>
          ))}
       </div>
    </div>
  );
};

export default MediatorDemo;
