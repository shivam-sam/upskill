
import React, { useState } from 'react';

// Implementation Interface
interface Device {
  isEnabled: boolean;
  enable(): void;
  disable(): void;
  setVolume(percent: number): void;
  getVolume(): number;
  getName(): string;
}

// Concrete Implementations
const createDevice = (name: string): Device => {
  let enabled = false;
  let volume = 30;
  return {
    isEnabled: enabled,
    enable: () => { enabled = true; },
    disable: () => { enabled = false; },
    setVolume: (v) => { volume = Math.max(0, Math.min(100, v)); },
    getVolume: () => volume,
    getName: () => name
  };
};

const BridgeDemo: React.FC = () => {
  // We manage state in React, but conceptually simulate the objects
  const [tvState, setTvState] = useState({ enabled: false, volume: 30 });
  const [radioState, setRadioState] = useState({ enabled: false, volume: 50 });
  
  const [selectedDevice, setSelectedDevice] = useState<'tv' | 'radio'>('tv');
  const [remoteType, setRemoteType] = useState<'basic' | 'advanced'>('basic');

  // Actions (The Abstraction Layer)
  const togglePower = () => {
    if (selectedDevice === 'tv') setTvState(s => ({ ...s, enabled: !s.enabled }));
    else setRadioState(s => ({ ...s, enabled: !s.enabled }));
  };

  const volumeDown = () => {
    if (selectedDevice === 'tv') setTvState(s => ({ ...s, volume: Math.max(0, s.volume - 10) }));
    else setRadioState(s => ({ ...s, volume: Math.max(0, s.volume - 10) }));
  };

  const volumeUp = () => {
    if (selectedDevice === 'tv') setTvState(s => ({ ...s, volume: Math.min(100, s.volume + 10) }));
    else setRadioState(s => ({ ...s, volume: Math.min(100, s.volume + 10) }));
  };

  const mute = () => {
    if (selectedDevice === 'tv') setTvState(s => ({ ...s, volume: 0 }));
    else setRadioState(s => ({ ...s, volume: 0 }));
  };

  const currentState = selectedDevice === 'tv' ? tvState : radioState;

  return (
    <div className="flex flex-col gap-8 w-full">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Abstraction: Remote Control */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 flex flex-col items-center">
             <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Abstraction Layer</div>
             <div className="bg-slate-700 p-1 rounded-lg mb-6 flex gap-2">
                <button onClick={() => setRemoteType('basic')} className={`px-3 py-1 rounded text-sm ${remoteType === 'basic' ? 'bg-white text-slate-900' : 'text-slate-300'}`}>Basic Remote</button>
                <button onClick={() => setRemoteType('advanced')} className={`px-3 py-1 rounded text-sm ${remoteType === 'advanced' ? 'bg-white text-slate-900' : 'text-slate-300'}`}>Advanced Remote</button>
             </div>

             <div className="bg-slate-900 p-6 rounded-xl border border-slate-600 w-48 shadow-2xl flex flex-col gap-4">
                <button 
                  onClick={togglePower}
                  className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 self-center shadow-lg active:scale-95 transition-transform"
                >
                  ⏻
                </button>
                <div className="flex justify-between mt-2">
                   <button onClick={volumeDown} className="w-10 h-10 bg-slate-700 rounded text-white hover:bg-slate-600">-</button>
                   <button onClick={volumeUp} className="w-10 h-10 bg-slate-700 rounded text-white hover:bg-slate-600">+</button>
                </div>
                {remoteType === 'advanced' && (
                  <button 
                    onClick={mute}
                    className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-xs font-bold uppercase tracking-wider"
                  >
                    Mute (Adv)
                  </button>
                )}
             </div>
             <p className="text-slate-500 text-sm mt-4 text-center">
               The remote works with ANY device. <br/>It doesn't care if it's a TV or Radio.
             </p>
          </div>

          {/* Implementation: Devices */}
          <div className="flex flex-col gap-4">
             <div className="text-slate-400 text-xs font-bold uppercase tracking-widest text-center">Implementation Layer</div>
             
             {/* Device Selector */}
             <div className="flex gap-4 mb-2 justify-center">
                <button 
                  onClick={() => setSelectedDevice('tv')}
                  className={`px-4 py-2 rounded-lg border-2 font-bold ${selectedDevice === 'tv' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-400'}`}
                >
                  Television
                </button>
                <button 
                  onClick={() => setSelectedDevice('radio')}
                  className={`px-4 py-2 rounded-lg border-2 font-bold ${selectedDevice === 'radio' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-slate-200 bg-white text-slate-400'}`}
                >
                  Radio
                </button>
             </div>

             {/* Device Display */}
             <div className={`flex-1 rounded-xl border-2 transition-all duration-500 flex items-center justify-center relative overflow-hidden shadow-sm
               ${selectedDevice === 'tv' ? 'bg-black border-slate-800' : 'bg-orange-100 border-orange-200'}
             `}>
               {selectedDevice === 'tv' ? (
                 <div className={`w-full h-full flex items-center justify-center flex-col transition-opacity duration-500 ${tvState.enabled ? 'opacity-100' : 'opacity-10'}`}>
                    <div className="w-48 h-32 bg-gradient-to-tr from-blue-600 to-purple-600 rounded shadow-lg animate-pulse"></div>
                    <div className="mt-4 text-white font-mono">Volume: {tvState.volume}%</div>
                 </div>
               ) : (
                 <div className={`w-full h-full flex items-center justify-center flex-col transition-opacity duration-500 ${radioState.enabled ? 'opacity-100' : 'opacity-40'}`}>
                    <div className="w-32 h-32 rounded-full border-8 border-orange-400 bg-orange-200 flex items-center justify-center shadow-inner">
                       <div className="w-24 h-1 bg-slate-800 animate-spin" style={{ animationDuration: '3s' }}></div>
                    </div>
                    <div className="mt-4 text-orange-800 font-mono font-bold">Volume: {radioState.volume}%</div>
                 </div>
               )}
               
               {!currentState.enabled && (
                 <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white font-bold text-xl">
                   OFF
                 </div>
               )}
             </div>
          </div>
       </div>
    </div>
  );
};

export default BridgeDemo;
