
import React, { useState } from 'react';

const FacadeDemo: React.FC = () => {
  // Complex Subsystem State
  const [lights, setLights] = useState(false);
  const [tv, setTv] = useState(false);
  const [sound, setSound] = useState(false);
  const [blinds, setBlinds] = useState(true); // true = open
  const [ac, setAc] = useState(false);

  // Facade Methods
  const activateMovieMode = () => {
    setLights(false);
    setTv(true);
    setSound(true);
    setBlinds(false); // close
    setAc(true);
  };

  const activateReadingMode = () => {
    setLights(true);
    setTv(false);
    setSound(false);
    setBlinds(true);
    setAc(false);
  };

  const turnOffAll = () => {
    setLights(false);
    setTv(false);
    setSound(false);
    setBlinds(true);
    setAc(false);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Facade Interface */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
           <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
             📱 Smart Home App (Facade)
           </h3>
           <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={activateMovieMode}
                className="p-4 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition-all text-left group"
              >
                <div className="font-bold text-lg">🎬 Movie Mode</div>
                <div className="text-indigo-200 text-sm opacity-80 group-hover:opacity-100">Dims lights, TV on, Sound on, Blinds closed.</div>
              </button>
              
              <button 
                onClick={activateReadingMode}
                className="p-4 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition-all text-left group"
              >
                <div className="font-bold text-lg">📖 Reading Mode</div>
                <div className="text-amber-100 text-sm opacity-80 group-hover:opacity-100">Lights bright, TV off, Quiet.</div>
              </button>

              <button 
                onClick={turnOffAll}
                className="p-4 bg-slate-700 text-white rounded-xl shadow hover:bg-slate-800 transition-all text-left"
              >
                <div className="font-bold text-lg">🏠 Leaving Home</div>
                <div className="text-slate-300 text-sm">Shut down everything.</div>
              </button>
           </div>
        </div>

        {/* Complex Subsystem Visualization */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
           <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Complex Subsystem State</h3>
           <div className="grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg border-2 transition-all ${lights ? 'bg-yellow-100 border-yellow-400 text-yellow-700' : 'bg-slate-200 border-transparent text-slate-400'}`}>
                 <div className="text-2xl mb-1">💡</div>
                 <div className="font-bold">Lights {lights ? 'ON' : 'OFF'}</div>
              </div>
              <div className={`p-4 rounded-lg border-2 transition-all ${tv ? 'bg-blue-100 border-blue-400 text-blue-700' : 'bg-slate-200 border-transparent text-slate-400'}`}>
                 <div className="text-2xl mb-1">📺</div>
                 <div className="font-bold">TV {tv ? 'ON' : 'OFF'}</div>
              </div>
              <div className={`p-4 rounded-lg border-2 transition-all ${sound ? 'bg-purple-100 border-purple-400 text-purple-700' : 'bg-slate-200 border-transparent text-slate-400'}`}>
                 <div className="text-2xl mb-1">🔊</div>
                 <div className="font-bold">Sound {sound ? 'ON' : 'OFF'}</div>
              </div>
              <div className={`p-4 rounded-lg border-2 transition-all ${!blinds ? 'bg-slate-800 text-white' : 'bg-sky-100 border-sky-400 text-sky-700'}`}>
                 <div className="text-2xl mb-1">🪟</div>
                 <div className="font-bold">Blinds {blinds ? 'OPEN' : 'CLOSED'}</div>
              </div>
              <div className={`p-4 rounded-lg border-2 transition-all ${ac ? 'bg-cyan-100 border-cyan-400 text-cyan-700' : 'bg-slate-200 border-transparent text-slate-400'}`}>
                 <div className="text-2xl mb-1">❄️</div>
                 <div className="font-bold">AC {ac ? 'ON' : 'OFF'}</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FacadeDemo;
