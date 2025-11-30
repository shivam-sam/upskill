
import React, { useState } from 'react';

const AdapterDemo: React.FC = () => {
  const [hasAdapter, setHasAdapter] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'failed'>('idle');

  const handleConnect = () => {
    if (hasAdapter) {
      setConnectionStatus('success');
    } else {
      setConnectionStatus('failed');
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* TARGET: LAPTOP */}
          <div className="bg-slate-800 p-6 rounded-xl border-4 border-slate-600 shadow-xl flex flex-col items-center relative h-64 justify-center">
             <div className="absolute top-2 left-4 text-xs font-bold text-slate-400 uppercase">Target (System)</div>
             <div className="text-6xl mb-4">💻</div>
             <div className="text-white font-bold mb-2">Modern Laptop</div>
             
             {/* Port */}
             <div className="bg-black px-4 py-2 rounded-lg border border-slate-600 flex flex-col items-center mt-2 group relative">
                <div className="w-12 h-4 bg-slate-900 rounded-full border border-slate-700 mb-1"></div>
                <div className="text-[10px] text-slate-400 font-mono">USB-C Port</div>
                
                {/* Connection Indicator */}
                <div className={`absolute -right-3 top-2 w-2 h-2 rounded-full ${connectionStatus === 'success' ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-red-500'} ${connectionStatus === 'idle' ? 'opacity-0' : 'opacity-100'}`}></div>
             </div>
          </div>

          {/* THE CONNECTION ZONE */}
          <div className="flex flex-col items-center justify-center gap-4">
             {/* Adapter Toggle */}
             <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 w-full text-center">
                <h4 className="font-bold text-slate-700 mb-3 text-sm">Select Equipment</h4>
                <button 
                  onClick={() => { setHasAdapter(!hasAdapter); setConnectionStatus('idle'); }}
                  className={`w-full py-2 rounded-lg border-2 transition-all font-bold text-sm flex items-center justify-center gap-2
                    ${hasAdapter ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'bg-slate-50 border-slate-200 text-slate-400'}
                  `}
                >
                  {hasAdapter ? '✅ Adapter Equipped' : '⬜ No Adapter'}
                </button>
             </div>

             {/* Connection Line */}
             <div className="relative w-full h-12 flex items-center justify-center">
                {/* Visualizing the Adapter if present */}
                {hasAdapter ? (
                  <div className="w-32 h-10 bg-indigo-600 rounded flex items-center justify-between px-2 text-white shadow-lg animate-[fadeIn_0.3s]">
                     <div className="w-4 h-2 bg-slate-300 rounded-sm"></div> {/* USB-C Male */}
                     <span className="text-[10px] font-bold tracking-tighter">DONGLE</span>
                     <div className="w-6 h-3 bg-black rounded-sm border border-slate-500"></div> {/* USB-A Female */}
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 italic">Direct Connection...</div>
                )}
             </div>

             <button 
               onClick={handleConnect}
               className={`px-8 py-3 rounded-full font-bold text-white shadow-lg transition-transform active:scale-95
                 ${hasAdapter ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-700 hover:bg-slate-800'}
               `}
             >
               Attempt Connection
             </button>
          </div>

          {/* ADAPTEE: FLASH DRIVE */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center h-64 justify-center">
             <div className="absolute top-2 right-4 text-xs font-bold text-slate-400 uppercase">Adaptee (Legacy)</div>
             <div className="text-5xl mb-4 text-blue-600">💾</div>
             <div className="text-slate-800 font-bold mb-2">Old Flash Drive</div>
             
             {/* Connector */}
             <div className="bg-slate-300 w-16 h-8 rounded-sm border-2 border-slate-400 mt-2 flex items-center justify-center shadow-inner">
                <div className="w-12 h-4 bg-white border border-slate-300"></div>
             </div>
             <div className="text-[10px] text-slate-400 font-mono mt-1">USB-A Connector</div>
          </div>

       </div>

       {/* RESULT MESSAGE */}
       <div className={`p-4 rounded-xl text-center font-bold text-lg transition-all
          ${connectionStatus === 'idle' ? 'opacity-0' : 'opacity-100'}
          ${connectionStatus === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}
       `}>
          {connectionStatus === 'success' 
            ? "✅ SUCCESS: Adapter converted USB-A interface to USB-C!" 
            : "❌ FAILED: Incompatible Interfaces. Cannot plug USB-A into USB-C."}
       </div>
    </div>
  );
};

export default AdapterDemo;
