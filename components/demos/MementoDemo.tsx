
import React, { useState } from 'react';

// Originator state
interface EditorState {
  content: string;
  timestamp: number;
}

const MementoDemo: React.FC = () => {
  const [content, setContent] = useState("");
  const [history, setHistory] = useState<EditorState[]>([]);

  const save = () => {
    // Create Memento
    const memento: EditorState = { content, timestamp: Date.now() };
    setHistory(prev => [...prev, memento]);
  };

  const restore = (state: EditorState) => {
    setContent(state.content);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px]">
         {/* Editor */}
         <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
               <h3 className="font-bold text-slate-800">Editor (Originator)</h3>
               <button onClick={save} className="text-xs bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 shadow-sm transition-all active:scale-95">
                 Create Snapshot
               </button>
            </div>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start typing..."
              className="flex-1 w-full p-4 border border-slate-300 rounded-xl resize-none focus:ring-2 focus:ring-indigo-500 outline-none shadow-inner bg-white text-slate-900 transition-all focus:border-indigo-500"
            />
         </div>

         {/* History (Caretaker) */}
         <div className="flex flex-col gap-2">
            <h3 className="font-bold text-slate-800">History (Caretaker)</h3>
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl overflow-y-auto p-2 custom-scrollbar space-y-2">
               {history.length === 0 && <div className="text-slate-400 text-sm text-center mt-10">No saved states.</div>}
               {history.map((state, i) => (
                 <div key={state.timestamp} className="bg-white p-3 rounded shadow-sm border border-slate-200 flex justify-between items-center group animate-[fadeIn_0.3s]">
                    <div>
                      <div className="text-xs font-bold text-slate-600">Snapshot #{i + 1}</div>
                      <div className="text-[10px] text-slate-400">{new Date(state.timestamp).toLocaleTimeString()}</div>
                      <div className="text-xs text-slate-500 truncate w-32 opacity-70 italic">"{state.content}"</div>
                    </div>
                    <button 
                      onClick={() => restore(state)}
                      className="text-xs bg-white border border-slate-300 text-slate-600 px-3 py-1.5 rounded hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-300 transition-all font-medium"
                    >
                      Restore
                    </button>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default MementoDemo;
