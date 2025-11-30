

import React, { useState } from 'react';

// Command Interface
interface Command {
  execute(): void;
  undo(): void;
  label: string; // Description for the history stack
}

const CommandDemo: React.FC = () => {
  const [content, setContent] = useState("");
  const [history, setHistory] = useState<Command[]>([]);

  // Helper to push command to stack
  const execute = (cmd: Command) => {
    cmd.execute();
    setHistory(prev => [...prev, cmd]);
  };

  // Helper to pop command from stack
  const undo = () => {
    if (history.length === 0) return;
    const lastCmd = history[history.length - 1];
    lastCmd.undo();
    setHistory(prev => prev.slice(0, -1));
  };

  // Concrete Commands
  const createTypeCommand = (text: string) => ({
    label: `Typed "${text}"`,
    execute: () => setContent(prev => prev + text),
    undo: () => setContent(prev => prev.slice(0, -text.length))
  });

  const createClearCommand = () => {
    const previousContent = content; // Closure captures current state
    return {
      label: "Cleared Text",
      execute: () => setContent(""),
      undo: () => setContent(previousContent)
    };
  };

  const createAppendEmojiCommand = (emoji: string) => ({
    label: `Added ${emoji}`,
    execute: () => setContent(prev => prev + emoji),
    undo: () => setContent(prev => prev.slice(0, -2)) // Emojis are often 2 chars length in simple slice, or just 1 spread
  });

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          📝 Text Editor (Invoker)
        </h3>
        
        {/* Toolbar */}
        <div className="flex gap-2 mb-4 flex-wrap">
           <button 
             onClick={() => execute(createTypeCommand("Hello "))}
             className="px-3 py-2 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 text-sm font-medium"
           >
             Type "Hello "
           </button>
           <button 
             onClick={() => execute(createTypeCommand("World "))}
             className="px-3 py-2 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 text-sm font-medium"
           >
             Type "World "
           </button>
           <button 
             onClick={() => execute(createAppendEmojiCommand("👋"))}
             className="px-3 py-2 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 text-sm font-medium"
           >
             Add 👋
           </button>
           <button 
             onClick={() => execute(createAppendEmojiCommand("🚀"))}
             className="px-3 py-2 bg-slate-100 border border-slate-300 rounded hover:bg-slate-200 text-sm font-medium"
           >
             Add 🚀
           </button>
           <button 
             onClick={() => execute(createClearCommand())}
             className="px-3 py-2 bg-red-50 border border-red-200 text-red-600 rounded hover:bg-red-100 text-sm font-medium ml-auto"
           >
             Clear All
           </button>
        </div>

        {/* Editor Area */}
        <div className="w-full h-32 p-4 bg-slate-50 border-2 border-slate-300 rounded-lg font-mono text-lg text-slate-800 shadow-inner flex items-start">
           {content}<span className="animate-pulse border-r-2 border-slate-800 h-6 ml-1"></span>
        </div>

        {/* Undo Control */}
        <div className="mt-4 flex justify-end">
           <button 
             onClick={undo}
             disabled={history.length === 0}
             className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
           >
             <span>↩</span> Undo Last Command
           </button>
        </div>
      </div>

      {/* History Stack Visualization */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
         <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Command History Stack</h4>
         <div className="space-y-2 flex flex-col-reverse">
            {history.map((cmd, i) => (
              <div key={i} className="bg-slate-700 text-slate-200 p-3 rounded flex justify-between items-center border-l-4 border-indigo-500 animate-[slideIn_0.3s]">
                 <span className="font-mono text-sm">{i + 1}. {cmd.label}</span>
                 <span className="text-[10px] bg-slate-900 px-2 py-1 rounded text-slate-400">Stored Object</span>
              </div>
            ))}
            {history.length === 0 && (
              <div className="text-slate-500 text-sm italic text-center py-4">History is empty. Perform actions above.</div>
            )}
         </div>
      </div>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CommandDemo;
