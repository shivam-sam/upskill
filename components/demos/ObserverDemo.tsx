
import React, { useState } from 'react';

interface Subscriber {
  id: number;
  name: string;
  isSubscribed: boolean;
  lastNotification: string | null;
}

const ObserverDemo: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([
    { id: 1, name: "Alice", isSubscribed: true, lastNotification: null },
    { id: 2, name: "Bob", isSubscribed: false, lastNotification: null },
  ]);
  const [nextId, setNextId] = useState(3);
  const [message, setMessage] = useState('');
  const [isNotifying, setIsNotifying] = useState(false);

  const addSubscriber = () => {
    setSubscribers(prev => [
      ...prev, 
      { id: nextId, name: `User ${nextId}`, isSubscribed: true, lastNotification: null }
    ]);
    setNextId(prev => prev + 1);
  };

  const removeSubscriber = (id: number) => {
    setSubscribers(prev => prev.filter(sub => sub.id !== id));
  };

  const toggleSubscription = (id: number) => {
    setSubscribers(prev => prev.map(sub => 
      sub.id === id ? { ...sub, isSubscribed: !sub.isSubscribed } : sub
    ));
  };

  const notifyAll = () => {
    if (!message) return;
    setIsNotifying(true);
    
    // Simulate propagation delay visual
    setTimeout(() => {
      setSubscribers(prev => prev.map(sub => ({
        ...sub,
        lastNotification: sub.isSubscribed ? message : sub.lastNotification // Only update if subscribed
      })));
      setIsNotifying(false);
      setMessage('');
    }, 600);
  };

  return (
    <div className="flex flex-col gap-6 w-full min-h-[500px]">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold mb-4 text-slate-800 flex items-center gap-2">
          <span className="text-2xl">📢</span> Subject (Publisher)
        </h3>
        <div className="flex gap-4 items-center flex-wrap">
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a notification message..."
            className="flex-1 min-w-[200px] p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900"
          />
          <button 
            onClick={notifyAll}
            disabled={!message || isNotifying}
            className={`px-6 py-3 rounded-lg font-medium text-white transition-all transform active:scale-95 whitespace-nowrap
              ${!message || isNotifying ? 'bg-slate-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'}`}
          >
            {isNotifying ? 'Sending...' : 'Notify Subscribers'}
          </button>
        </div>
      </div>

      <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-6 overflow-y-auto max-h-[500px]">
         <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <h3 className="text-lg font-semibold text-slate-800">Subscriber List</h3>
            <button 
              onClick={addSubscriber} 
              className="px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 text-slate-700 text-sm font-bold flex items-center gap-2"
            >
              <span>+</span> Add Subscriber
            </button>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subscribers.map(sub => (
              <div key={sub.id} className={`p-4 rounded-lg shadow-sm border transition-all relative group
                 ${sub.isSubscribed ? 'bg-white border-slate-200' : 'bg-slate-100 border-slate-200 opacity-80'}
              `}>
                 <button 
                  onClick={() => removeSubscriber(sub.id)}
                  className="absolute top-2 right-2 text-slate-300 hover:text-red-500 transition-colors"
                  title="Remove User"
                 >✕</button>
                 
                 <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors
                      ${sub.isSubscribed ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-400'}
                    `}>
                      👤
                    </div>
                    <div>
                      <div className="font-bold text-slate-700">{sub.name}</div>
                      <button 
                        onClick={() => toggleSubscription(sub.id)}
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border transition-all
                          ${sub.isSubscribed 
                            ? 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200' 
                            : 'bg-slate-200 text-slate-500 border-slate-300 hover:bg-slate-300'}
                        `}
                      >
                        {sub.isSubscribed ? 'Subscribed' : 'Unsubscribed'}
                      </button>
                    </div>
                 </div>

                 <div className={`p-3 rounded text-sm min-h-[60px] flex items-center justify-center text-center transition-colors duration-500 border
                    ${sub.isSubscribed 
                        ? (sub.lastNotification ? 'bg-blue-50 text-blue-900 border-blue-100' : 'bg-slate-50 text-slate-400 border-slate-100 italic')
                        : 'bg-transparent border-dashed border-slate-300 text-slate-400 text-xs'
                    }
                 `}>
                    {!sub.isSubscribed 
                      ? "User is not listening." 
                      : (sub.lastNotification ? `"${sub.lastNotification}"` : 'Waiting for updates...')
                    }
                 </div>
              </div>
            ))}
            {subscribers.length === 0 && (
              <div className="col-span-full text-center py-10 text-slate-400">
                No users found. Add a subscriber to start.
              </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default ObserverDemo;
