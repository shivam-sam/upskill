
import React, { useState } from 'react';

const songs = [
  { title: "Bohemian Rhapsody", artist: "Queen" },
  { title: "Imagine", artist: "John Lennon" },
  { title: "Hotel California", artist: "Eagles" },
  { title: "Billie Jean", artist: "Michael Jackson" }
];

const IteratorDemo: React.FC = () => {
  // The Iterator encapsulates the cursor position
  const [cursor, setCursor] = useState(0);

  const currentSong = songs[cursor];

  const hasNext = cursor < songs.length - 1;
  const hasPrev = cursor > 0;

  const next = () => { if (hasNext) setCursor(c => c + 1); };
  const prev = () => { if (hasPrev) setCursor(c => c - 1); };
  const first = () => setCursor(0);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
       <div className="w-full max-w-sm bg-slate-900 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-indigo-500/30 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center mt-4">
             <div className="w-40 h-40 bg-slate-800 rounded-lg shadow-lg mb-6 flex items-center justify-center text-4xl border border-slate-700">
                🎵
             </div>
             <h3 className="text-xl font-bold mb-1">{currentSong.title}</h3>
             <p className="text-slate-400 text-sm mb-8">{currentSong.artist}</p>

             <div className="flex items-center gap-6 w-full justify-center">
               <button 
                 onClick={prev} 
                 disabled={!hasPrev}
                 className="text-2xl hover:text-indigo-400 disabled:opacity-20 disabled:hover:text-white transition-colors"
               >
                 ⏮
               </button>
               <button className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-xl shadow-lg hover:scale-105 transition-transform">
                 ▶
               </button>
               <button 
                 onClick={next} 
                 disabled={!hasNext}
                 className="text-2xl hover:text-indigo-400 disabled:opacity-20 disabled:hover:text-white transition-colors"
               >
                 ⏭
               </button>
             </div>
          </div>
       </div>

       <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm text-slate-600 max-w-md text-center">
          The UI doesn't know the underlying array structure. It just uses <code>next()</code> and <code>hasNext()</code> provided by the iterator logic.
       </div>
    </div>
  );
};

export default IteratorDemo;
