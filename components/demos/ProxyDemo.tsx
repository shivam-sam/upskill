
import React, { useState } from 'react';

// Subject Interface
interface VideoPlayer {
  play(): void;
  getDisplay(): React.ReactNode;
}

// 1. Real Subject (Expensive)
class RealVideoDownloader implements VideoPlayer {
  constructor() {
    // Simulating expensive initialization (downloading)
    console.log("Initializing RealVideoDownloader: Connecting to server...");
  }

  play() {
    console.log("Playing video stream...");
  }

  getDisplay() {
    return (
      <div className="w-full h-full bg-black flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80')] bg-cover opacity-50"></div>
         <div className="z-10 text-white flex flex-col items-center animate-[fadeIn_1s]">
            <span className="text-5xl animate-pulse">▶</span>
            <span className="mt-2 font-mono">Playing 4K Stream...</span>
         </div>
      </div>
    );
  }
}

// 2. Proxy (Cheap)
class CachedVideoProxy implements VideoPlayer {
  private realVideo: RealVideoDownloader | null = null;
  private onStatusChange: (status: string) => void;

  constructor(updateStatus: (s: string) => void) {
    this.onStatusChange = updateStatus;
  }

  play() {
    if (this.realVideo === null) {
      this.onStatusChange("downloading");
      // Simulate network delay
      setTimeout(() => {
        this.realVideo = new RealVideoDownloader();
        this.realVideo.play();
        this.onStatusChange("playing");
      }, 1500);
    } else {
      // If already exists, play immediately
      this.realVideo.play();
      this.onStatusChange("playing");
    }
  }

  getDisplay() {
    // If real video isn't created yet, show cheap placeholder
    if (!this.realVideo) {
      return (
        <div className="w-full h-full bg-slate-800 flex items-center justify-center relative group cursor-pointer" onClick={() => this.play()}>
           <div className="text-slate-500 flex flex-col items-center group-hover:scale-110 transition-transform">
              <span className="text-4xl text-white opacity-80">Thumbnail</span>
              <span className="text-xs mt-2 text-slate-400">Click to Load (Proxy)</span>
           </div>
        </div>
      );
    }
    // Delegate to real object
    return this.realVideo.getDisplay();
  }
}

const ProxyDemo: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'downloading' | 'playing'>('idle');
  
  // We recreate the proxy logic inside the component to bind it to React state for the demo
  const handlePlayClick = () => {
    if (status === 'playing') return;
    
    if (status === 'idle') {
      setStatus('downloading');
      // Simulate the Lazy Loading Logic of a Proxy
      setTimeout(() => {
        setStatus('playing');
      }, 2000);
    }
  };

  const reset = () => {
    setStatus('idle');
  };

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-900">
         <strong>Why use a Proxy?</strong> Imagine a webpage with 10 videos. Loading all 10 heavy video files immediately would crash the browser. A <strong>Virtual Proxy</strong> loads a lightweight "Thumbnail" first. The heavy "Real Video" object is only created/downloaded when you actually click play. This saves massive amounts of memory and bandwidth.
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* THE VIDEO PLAYER (Proxy visual) */}
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl aspect-video relative border-4 border-slate-700">
             {status === 'idle' && (
               <div 
                 onClick={handlePlayClick}
                 className="w-full h-full bg-slate-800 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-750 transition-colors group"
               >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent"></div>
                  </div>
                  <div className="font-bold text-white">Watch 4K Video</div>
                  <div className="text-xs text-slate-400 mt-1">Filesize: 500MB</div>
               </div>
             )}

             {status === 'downloading' && (
               <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <div className="text-indigo-400 font-mono text-sm">Proxy: Initializing Real Object...</div>
                  <div className="text-slate-500 text-xs mt-1">Downloading 500MB...</div>
               </div>
             )}

             {status === 'playing' && (
               <div className="w-full h-full bg-slate-900 relative">
                  {/* Abstract representation of video content */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-indigo-900 to-slate-900 animate-[pulse_3s_infinite]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                       <span className="text-4xl">🍿</span>
                       <div className="text-white font-bold mt-2 text-shadow">Playing Content</div>
                    </div>
                  </div>
                  {/* Fake controls */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/50 flex items-center px-4 gap-2">
                     <div className="text-white">❚❚</div>
                     <div className="h-1 bg-slate-500 flex-1 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-1/3 animate-[loading_10s_linear]"></div>
                     </div>
                  </div>
               </div>
             )}
          </div>

          {/* METRICS PANEL */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full flex flex-col justify-center">
             <h3 className="font-bold text-slate-800 mb-6">Performance Monitor</h3>
             
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-500">Bandwidth Used</span>
                      <span className={`font-bold ${status === 'idle' ? 'text-green-600' : 'text-red-600'}`}>
                        {status === 'idle' ? '50 KB' : '500 MB'}
                      </span>
                   </div>
                   <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full transition-all duration-1000 ${status === 'idle' ? 'w-[1%] bg-green-500' : 'w-full bg-red-500'}`}></div>
                   </div>
                </div>

                <div>
                   <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-500">Memory Allocation</span>
                      <span className={`font-bold ${status === 'idle' ? 'text-green-600' : 'text-red-600'}`}>
                        {status === 'idle' ? 'Low' : 'High'}
                      </span>
                   </div>
                   <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full transition-all duration-1000 ${status === 'idle' ? 'w-[5%] bg-green-500' : 'w-[90%] bg-red-500'}`}></div>
                   </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 leading-relaxed">
                   {status === 'idle' 
                     ? "✅ PROXY ACTIVE: The expensive 'RealVideo' object has NOT been created yet. We are showing a cheap placeholder. No heavy data has been fetched."
                     : "⚠️ REAL OBJECT ACTIVE: The user requested the video. The Proxy has initialized the heavy object and downloaded the data."}
                </div>
                
                {status !== 'idle' && (
                  <button onClick={reset} className="w-full py-2 border border-slate-300 rounded text-slate-500 hover:bg-slate-50 text-sm">
                    Reset Demo
                  </button>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};

export default ProxyDemo;
