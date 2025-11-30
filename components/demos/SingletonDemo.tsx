
import React, { useState, useEffect } from 'react';

// The Singleton Class
class GameLeaderboard {
  private static instance: GameLeaderboard;
  
  // Shared State
  public scores: { id: string, name: string, score: number }[] = [];

  private constructor() {
    // Initialize with some dummy data
    this.scores = [
      { id: 'p1', name: 'Player 1', score: 0 },
      { id: 'p2', name: 'Player 2', score: 0 }
    ];
  }

  public static getInstance(): GameLeaderboard {
    if (!GameLeaderboard.instance) {
      GameLeaderboard.instance = new GameLeaderboard();
    }
    return GameLeaderboard.instance;
  }

  public updateScore(playerId: string, points: number) {
    const player = this.scores.find(p => p.id === playerId);
    if (player) {
      player.score += points;
      // Keep sorted
      this.scores.sort((a, b) => b.score - a.score);
    }
  }

  public reset() {
    this.scores.forEach(p => p.score = 0);
  }
}

const SingletonDemo: React.FC = () => {
  // We use a dummy state to force React to re-render when the Singleton changes
  const [, setTick] = useState(0);
  const leaderboard = GameLeaderboard.getInstance();

  const handleScore = (playerId: string, points: number) => {
    leaderboard.updateScore(playerId, points);
    setTick(t => t + 1); // Force update UI
  };

  const resetGame = () => {
    leaderboard.reset();
    setTick(t => t + 1);
  };

  // Get rank for display
  const p1Rank = leaderboard.scores.findIndex(p => p.id === 'p1') + 1;
  const p2Rank = leaderboard.scores.findIndex(p => p.id === 'p2') + 1;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* PLAYER 1 DEVICE */}
        <div className="flex-1 bg-white p-6 rounded-xl border-b-4 border-red-500 shadow-sm relative">
           <div className="absolute -top-3 left-4 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">Device A</div>
           <h3 className="font-bold text-slate-800 text-lg mb-1">Player 1</h3>
           <div className="text-xs text-slate-400 mb-6">Connected to Global Leaderboard</div>

           <div className="flex gap-2 mb-4">
              <button 
                onClick={() => handleScore('p1', 100)}
                className="flex-1 py-2 bg-red-50 text-red-700 font-bold rounded hover:bg-red-100 border border-red-200"
              >
                Win Match (+100)
              </button>
              <button 
                onClick={() => handleScore('p1', 50)}
                className="flex-1 py-2 bg-red-50 text-red-700 font-bold rounded hover:bg-red-100 border border-red-200"
              >
                Bonus (+50)
              </button>
           </div>
           
           <div className="bg-slate-100 p-3 rounded text-center">
              <div className="text-xs text-slate-500 uppercase">My Rank</div>
              <div className="text-2xl font-black text-slate-700">#{p1Rank}</div>
           </div>
        </div>

        {/* SHARED SINGLETON (LEADERBOARD) */}
        <div className="w-full md:w-80 bg-slate-900 rounded-2xl p-6 text-white shadow-2xl border-4 border-yellow-400 relative overflow-hidden flex flex-col">
           <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
           <div className="text-center mb-6">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="font-bold text-yellow-400 tracking-widest uppercase text-sm">Global Leaderboard</h3>
              <div className="text-[10px] text-slate-400">(Singleton Instance)</div>
           </div>

           <div className="space-y-2 flex-1">
              {leaderboard.scores.map((p, i) => (
                <div key={p.id} className={`flex justify-between items-center p-3 rounded bg-white/10 border transition-all duration-500
                   ${i === 0 ? 'border-yellow-500/50 bg-yellow-500/10' : 'border-transparent'}
                `}>
                   <div className="flex items-center gap-3">
                      <div className={`font-mono font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs
                        ${i === 0 ? 'bg-yellow-400 text-black' : 'bg-slate-700 text-slate-400'}
                      `}>
                        {i + 1}
                      </div>
                      <span className="font-bold text-sm">{p.name}</span>
                   </div>
                   <div className="font-mono text-green-400">{p.score}</div>
                </div>
              ))}
           </div>
           
           <button onClick={resetGame} className="mt-6 text-xs text-slate-600 hover:text-slate-400 underline self-center">Reset Season</button>
        </div>

        {/* PLAYER 2 DEVICE */}
        <div className="flex-1 bg-white p-6 rounded-xl border-b-4 border-blue-500 shadow-sm relative">
           <div className="absolute -top-3 left-4 bg-blue-500 text-white px-2 py-0.5 rounded text-xs font-bold">Device B</div>
           <h3 className="font-bold text-slate-800 text-lg mb-1">Player 2</h3>
           <div className="text-xs text-slate-400 mb-6">Connected to Global Leaderboard</div>

           <div className="flex gap-2 mb-4">
              <button 
                onClick={() => handleScore('p2', 100)}
                className="flex-1 py-2 bg-blue-50 text-blue-700 font-bold rounded hover:bg-blue-100 border border-blue-200"
              >
                Win Match (+100)
              </button>
              <button 
                onClick={() => handleScore('p2', 50)}
                className="flex-1 py-2 bg-blue-50 text-blue-700 font-bold rounded hover:bg-blue-100 border border-blue-200"
              >
                Bonus (+50)
              </button>
           </div>
           
           <div className="bg-slate-100 p-3 rounded text-center">
              <div className="text-xs text-slate-500 uppercase">My Rank</div>
              <div className="text-2xl font-black text-slate-700">#{p2Rank}</div>
           </div>
        </div>

      </div>
      
      <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl text-center text-sm text-indigo-800">
         <strong>Key Concept:</strong> Even though Player 1 and Player 2 are on different "devices", they both reference the exact same <code>Leaderboard.instance</code>. There is no synchronization logic needed between them because the object itself is shared memory.
      </div>
    </div>
  );
};

export default SingletonDemo;
