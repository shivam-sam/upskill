
import React, { useState, useEffect } from 'react';

type AudioState = 'playing' | 'paused' | 'stopped';

const StateDemo: React.FC = () => {
  const [state, setState] = useState<AudioState>('stopped');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: number;
    if (state === 'playing') {
      interval = window.setInterval(() => {
        setProgress(p => (p >= 100 ? 0 : p + 1));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [state]);

  // Context behavior depends on state
  const handlePlay = () => {
    // Valid transition: Stopped -> Playing, Paused -> Playing
    if (state === 'stopped' || state === 'paused') setState('playing');
  };

  const handlePause = () => {
    // Valid transition: Playing -> Paused
    if (state === 'playing') setState('paused');
  };

  const handleStop = () => {
    // Valid transition: Playing -> Stopped, Paused -> Stopped
    if (state === 'playing' || state === 'paused') {
      setState('stopped');
      setProgress(0);
    }
  };

  // Helper to determine button style based on valid transitions
  const getButtonStyle = (action: 'play' | 'pause' | 'stop') => {
    let isActionValid = false;
    
    if (action === 'play') {
       isActionValid = state === 'stopped' || state === 'paused';
    } else if (action === 'pause') {
       isActionValid = state === 'playing';
    } else if (action === 'stop') {
       isActionValid = state === 'playing' || state === 'paused';
    }

    if (isActionValid) {
       // Highlight recommended actions
       return "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg scale-105 cursor-pointer";
    } else {
       // Dim invalid/irrelevant actions
       return "bg-slate-800 text-slate-600 cursor-not-allowed opacity-50";
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full">
       <div className="bg-slate-900 rounded-2xl p-8 w-full max-w-md shadow-2xl relative overflow-hidden">
          {/* Visualization */}
          <div className="flex items-center justify-center h-32 mb-6">
             {state === 'stopped' && <div className="text-slate-600 text-6xl">⏹</div>}
             {state === 'paused' && <div className="text-yellow-500 text-6xl animate-pulse">⏸</div>}
             {state === 'playing' && (
                <div className="flex gap-1 items-end h-16">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-4 bg-green-500 animate-[bounce_0.5s_infinite]" style={{ height: '100%', animationDelay: `${i*0.1}s` }}></div>
                  ))}
                </div>
             )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-700 h-2 rounded-full mb-8 overflow-hidden">
             <div className="h-full bg-indigo-500 transition-all duration-75" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
             <button 
               onClick={handleStop}
               disabled={state === 'stopped'}
               className={`p-4 rounded-full transition-all duration-300 font-bold ${getButtonStyle('stop')}`}
               title="Stop"
             >
               ⏹
             </button>
             <button 
               onClick={handlePlay}
               disabled={state === 'playing'}
               className={`p-4 rounded-full transition-all duration-300 font-bold ${getButtonStyle('play')}`}
               title="Play"
             >
               ▶
             </button>
             <button 
               onClick={handlePause}
               disabled={state !== 'playing'}
               className={`p-4 rounded-full transition-all duration-300 font-bold ${getButtonStyle('pause')}`}
               title="Pause"
             >
               ⏸
             </button>
          </div>
          
          <div className="text-center mt-6 text-slate-500 text-sm font-mono">
             Current State: <span className="text-white uppercase font-bold">{state}</span>
          </div>
          <div className="text-center mt-2 text-xs text-slate-600">
             Buttons highlight only if the transition is valid from the current state.
          </div>
       </div>
    </div>
  );
};

export default StateDemo;
