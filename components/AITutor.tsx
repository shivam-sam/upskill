import React, { useState, useRef, useEffect } from 'react';
import { askDesignPatternTutor } from '../services/geminiService';
import { Message } from '../types';

interface AITutorProps {
  currentPatternName: string;
}

const AITutor: React.FC<AITutorProps> = ({ currentPatternName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I'm your AI Design Tutor. I can explain the ${currentPatternName} pattern or generate code examples. What would you like to know?` }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset chat when pattern changes
    setMessages([{ role: 'model', text: `Hi! I'm your AI Design Tutor. Ask me anything about the ${currentPatternName} pattern!` }]);
  }, [currentPatternName]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await askDesignPatternTutor(currentPatternName, userMsg.text, messages);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed right-6 bottom-6 flex flex-col items-end z-50 pointer-events-none`}>
      {/* Chat Window */}
      <div 
        className={`bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto
        ${isOpen ? 'opacity-100 scale-100 mb-4 h-[500px]' : 'opacity-0 scale-90 h-0 mb-0'}`}
      >
        <div className="bg-indigo-600 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm">🤖</div>
            <h3 className="font-bold text-white">Design Tutor</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-indigo-200 hover:text-white">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
           {messages.map((msg, idx) => (
             <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
               <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm
                  ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'}
               `}>
                 {msg.role === 'model' ? (
                   <div className="prose prose-sm max-w-none text-slate-700" dangerouslySetInnerHTML={{ 
                     __html: msg.text.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') 
                   }} />
                 ) : (
                   msg.text
                 )}
               </div>
             </div>
           ))}
           {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                 <div className="flex gap-1">
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                   <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                 </div>
               </div>
             </div>
           )}
           <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-white border-t border-slate-100">
           <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2"
           >
             <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about this pattern..."
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
             />
             <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-indigo-600 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 transition-colors"
             >
               ➤
             </button>
           </form>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 pointer-events-auto
          ${isOpen ? 'bg-slate-700 rotate-90 text-slate-300' : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-110 text-white'}
        `}
      >
        {isOpen ? '✕' : <span className="text-2xl">✨</span>}
      </button>
    </div>
  );
};

export default AITutor;