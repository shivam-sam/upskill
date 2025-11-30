
import React, { useState, useEffect } from 'react';

// ==================== MVC DEMO ====================
export const MvcDemo: React.FC = () => {
  const [model, setModel] = useState(0);
  const [highlight, setHighlight] = useState<'view' | 'controller' | 'model' | null>(null);

  const handleUserAction = (action: 'increment' | 'reset') => {
    // 1. Controller receives input
    setHighlight('controller');
    setTimeout(() => {
        // 2. Controller updates Model
        if (action === 'increment') setModel(m => m + 1);
        if (action === 'reset') setModel(0);
        setHighlight('model');
        
        // 3. Model updates View
        setTimeout(() => {
            setHighlight('view');
            setTimeout(() => setHighlight(null), 500);
        }, 500);
    }, 500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-center">
       {/* View */}
       <div className={`p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center
         ${highlight === 'view' ? 'border-green-500 bg-green-50 scale-105 shadow-lg' : 'border-slate-200 bg-white'}
       `}>
          <div className="text-4xl mb-2">👁️</div>
          <h4 className="font-bold">View</h4>
          <div className="text-3xl font-bold mt-4 text-slate-800">{model}</div>
          <p className="text-xs text-slate-400 mt-2">Displays Data</p>
       </div>

       {/* Controller */}
       <div className={`p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center
         ${highlight === 'controller' ? 'border-blue-500 bg-blue-50 scale-105 shadow-lg' : 'border-slate-200 bg-white'}
       `}>
          <div className="text-4xl mb-2">🎮</div>
          <h4 className="font-bold">Controller</h4>
          <div className="flex gap-2 mt-4">
             <button onClick={() => handleUserAction('increment')} className="px-3 py-1 bg-slate-800 text-white rounded text-sm hover:bg-slate-700">+1</button>
             <button onClick={() => handleUserAction('reset')} className="px-3 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200">Reset</button>
          </div>
          <p className="text-xs text-slate-400 mt-2">Handles Input</p>
       </div>

       {/* Model */}
       <div className={`p-6 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center
         ${highlight === 'model' ? 'border-purple-500 bg-purple-50 scale-105 shadow-lg' : 'border-slate-200 bg-white'}
       `}>
          <div className="text-4xl mb-2">💾</div>
          <h4 className="font-bold">Model</h4>
          <div className="font-mono bg-slate-100 p-2 rounded mt-2 text-xs">
             data: {'{ value: ' + model + ' }'}
          </div>
          <p className="text-xs text-slate-400 mt-2">Manages Logic</p>
       </div>
    </div>
  );
};

// ==================== MVVM DEMO ====================
export const MvvmDemo: React.FC = () => {
  // Model: The raw state
  const [temperature, setTemperature] = useState(20);

  // ViewModel logic: Transformations
  const fahrenheit = Math.round((temperature * 9/5) + 32);
  const color = temperature < 15 ? 'text-blue-500' : temperature > 30 ? 'text-red-500' : 'text-green-500';
  const status = temperature < 15 ? 'Freezing' : temperature > 30 ? 'Hot' : 'Pleasant';

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-sm text-slate-600 mb-2">
          <strong>Key Difference:</strong> In MVVM, multiple Views can bind to the same ViewModel. When the ViewModel state changes, ALL Views update automatically (Data Binding). No controller manually updating each one.
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* MODEL */}
          <div className="border-2 border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center bg-slate-100 opacity-70">
             <h4 className="font-bold text-slate-600 mb-2">Model (Raw Data)</h4>
             <div className="font-mono bg-white p-2 border rounded">
                {"{ temp: " + temperature + " }"}
             </div>
          </div>

          {/* VIEWMODEL */}
          <div className="border-4 border-indigo-500 rounded-xl p-4 flex flex-col items-center justify-center bg-indigo-50 relative">
             <div className="absolute -top-3 bg-indigo-500 text-white px-2 py-0.5 rounded text-xs font-bold">ViewModel</div>
             <p className="text-xs text-center text-indigo-800 mb-2">Exposes bindable properties</p>
             <ul className="text-sm font-mono text-indigo-900 text-left space-y-1">
                <li>temp: {temperature}</li>
                <li>tempF: {fahrenheit}</li>
                <li>color: '{color}'</li>
                <li>text: '{status}'</li>
             </ul>
          </div>

          {/* VIEWS */}
          <div className="flex flex-col gap-4">
             {/* View 1: Slider */}
             <div className="bg-white p-4 border-2 border-green-400 rounded-xl shadow-sm relative">
                <div className="absolute -top-3 right-4 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">View 1: Slider</div>
                <input 
                  type="range" min="0" max="50" 
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full accent-green-600"
                />
                <div className="text-xs text-slate-400 mt-1">Binds to 'temp' (Two-way)</div>
             </div>

             {/* View 2: Dashboard */}
             <div className="bg-white p-4 border-2 border-green-400 rounded-xl shadow-sm relative text-center">
                <div className="absolute -top-3 right-4 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">View 2: Gauge</div>
                <div className={`text-3xl font-bold transition-colors ${color}`}>
                   {temperature}°C
                </div>
                <div className="text-sm text-slate-500">({fahrenheit}°F) - {status}</div>
             </div>
          </div>
       </div>
    </div>
  );
};

// ==================== LAYERED DEMO ====================
export const LayeredDemo: React.FC = () => {
  const [step, setStep] = useState(0); // 0: Idle, 1: UI->Biz, 2: Biz->DB, 3: DB Processing, 4: DB->Biz, 5: Biz->UI
  
  const startRequest = () => {
    if (step !== 0) return;
    setStep(1);
    setTimeout(() => setStep(2), 600);
    setTimeout(() => setStep(3), 1200);
    setTimeout(() => setStep(4), 2200);
    setTimeout(() => setStep(5), 2800);
    setTimeout(() => setStep(0), 3400);
  };

  return (
    <div className="w-full flex flex-col gap-2">
       {/* UI Layer */}
       <div className={`p-4 rounded-xl border-2 transition-all relative
         ${step === 1 || step === 5 ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-slate-200 bg-white'}
       `}>
          <div className="font-bold text-slate-800">Presentation Layer (UI)</div>
          <div className="text-xs text-slate-500">Handles user interaction.</div>
          <button 
             onClick={startRequest}
             disabled={step !== 0}
             className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-1 bg-indigo-600 text-white rounded text-sm disabled:opacity-0 transition-opacity"
          >
            Send Request
          </button>
       </div>
       
       {/* Arrow 1 */}
       <div className="h-6 flex justify-center">
          <div className={`w-1 h-full transition-colors ${step === 1 ? 'bg-blue-500' : step === 5 ? 'bg-green-500' : 'bg-slate-200'}`}></div>
       </div>

       {/* Business Layer */}
       <div className={`p-4 rounded-xl border-2 transition-all
         ${step === 2 || step === 4 ? 'border-purple-500 bg-purple-50 shadow-lg' : 'border-slate-200 bg-white'}
       `}>
          <div className="font-bold text-slate-800">Business Logic Layer</div>
          <div className="text-xs text-slate-500">Validates rules, processes calculations.</div>
       </div>

       {/* Arrow 2 */}
       <div className="h-6 flex justify-center">
          <div className={`w-1 h-full transition-colors ${step === 2 ? 'bg-purple-500' : step === 4 ? 'bg-green-500' : 'bg-slate-200'}`}></div>
       </div>

       {/* Data Layer */}
       <div className={`p-4 rounded-xl border-2 transition-all
         ${step === 3 ? 'border-green-500 bg-green-50 shadow-lg' : 'border-slate-200 bg-white'}
       `}>
          <div className="font-bold text-slate-800">Data Access Layer</div>
          <div className="text-xs text-slate-500">Communicates with Database/Files.</div>
          {step === 3 && <div className="mt-2 text-xs font-bold text-green-700 animate-pulse">Running SQL Query...</div>}
       </div>
    </div>
  );
};

// ==================== EVENT DRIVEN DEMO ====================
export const EventDrivenDemo: React.FC = () => {
  const [events, setEvents] = useState<string[]>([]);
  const [activePacket, setActivePacket] = useState<{ id: string, type: string, stage: 'producer' | 'transit-to-bus' | 'bus' | 'transit-to-consumer' | 'consumer' } | null>(null);
  
  const publishEvent = (type: 'ORDER_PLACED' | 'USER_SIGNED_UP') => {
    if (activePacket) return; 
    
    const id = Math.floor(Math.random() * 1000).toString();
    const packet = { id, type, stage: 'producer' as const };
    
    // Start Animation Flow
    setActivePacket(packet);

    // 1. Transit to Bus
    setTimeout(() => {
      setActivePacket({ ...packet, stage: 'transit-to-bus' });
    }, 100);

    // 2. Arrive at Bus (Add to list)
    setTimeout(() => {
      setEvents(prev => [`${type} #${id}`, ...prev].slice(0, 5));
      setActivePacket({ ...packet, stage: 'bus' });
    }, 800);

    // 3. Transit to Consumer (Trigger Split)
    setTimeout(() => {
      setActivePacket({ ...packet, stage: 'transit-to-consumer' });
    }, 1300);

    // 4. Arrive at Consumer
    setTimeout(() => {
      setActivePacket({ ...packet, stage: 'consumer' });
    }, 2000);

    // 5. Reset
    setTimeout(() => {
      setActivePacket(null);
    }, 2500);
  };

  return (
    <div className="flex flex-col gap-6 w-full relative min-h-[400px]">
       
       <div className="grid grid-cols-1 gap-12 items-center relative z-10">
          {/* PRODUCER (Top) */}
          <div className="flex justify-center">
             <div className="border-2 border-slate-300 rounded-xl p-6 bg-slate-50 text-center w-80 relative z-20">
                <div className="text-2xl mb-2">📢</div>
                <div className="font-bold text-slate-700 mb-4">Producer Service</div>
                
                <div className="flex gap-2 justify-center">
                    <button 
                      onClick={() => publishEvent('ORDER_PLACED')} 
                      disabled={!!activePacket}
                      className="bg-indigo-600 text-white px-3 py-1.5 text-xs font-bold rounded shadow hover:bg-indigo-700 disabled:opacity-50"
                    >
                      Publish Order
                    </button>
                    <button 
                      onClick={() => publishEvent('USER_SIGNED_UP')} 
                      disabled={!!activePacket}
                      className="bg-pink-600 text-white px-3 py-1.5 text-xs font-bold rounded shadow hover:bg-pink-700 disabled:opacity-50"
                    >
                      Publish Signup
                    </button>
                </div>
             </div>
          </div>

          {/* EVENT BUS (Middle) */}
          <div className="flex justify-center">
             <div className="border-2 border-indigo-200 bg-indigo-50 rounded-xl w-full max-w-lg h-32 flex flex-col items-center relative overflow-hidden shadow-inner z-10">
                <div className="w-full bg-indigo-200 text-indigo-800 text-xs font-bold text-center py-1">EVENT BUS / BROKER</div>
                <div className="flex-1 w-full p-2 space-y-1 overflow-y-auto flex flex-col items-center">
                    {events.map((e, i) => (
                      <div key={i} className="px-3 py-1 bg-white rounded shadow-sm text-xs font-mono w-64 text-center animate-[slideDown_0.3s_ease-out]">
                         {e}
                      </div>
                    ))}
                    {events.length === 0 && <span className="text-indigo-300 text-xs italic mt-4">No events in queue</span>}
                </div>
             </div>
          </div>

          {/* CONSUMERS (Bottom) */}
          <div className="grid grid-cols-3 gap-4">
             <div className={`border-2 rounded-xl p-4 text-center transition-all duration-300 ${activePacket?.stage === 'consumer' && activePacket.type === 'ORDER_PLACED' ? 'border-green-500 bg-green-50 scale-105' : 'border-slate-200'}`}>
                <div className="text-2xl mb-1">📦</div>
                <div className="text-xs font-bold">Inventory Service</div>
                <div className="text-[10px] text-slate-500">Handles Orders</div>
             </div>
             
             <div className={`border-2 rounded-xl p-4 text-center transition-all duration-300 ${activePacket?.stage === 'consumer' && activePacket.type === 'USER_SIGNED_UP' ? 'border-pink-500 bg-pink-50 scale-105' : 'border-slate-200'}`}>
                <div className="text-2xl mb-1">📧</div>
                <div className="text-xs font-bold">Email Service</div>
                <div className="text-[10px] text-slate-500">Handles Signups</div>
             </div>
             
             <div className={`border-2 rounded-xl p-4 text-center transition-all duration-300 ${activePacket?.stage === 'consumer' ? 'border-blue-500 bg-blue-50 scale-105' : 'border-slate-200'}`}>
                <div className="text-2xl mb-1">📊</div>
                <div className="text-xs font-bold">Analytics Service</div>
                <div className="text-[10px] text-slate-500">Logs Everything</div>
             </div>
          </div>
       </div>

       {/* ANIMATING PACKETS */}
       {activePacket && (
         <>
           {/* Primary Packet: Producer -> Bus -> Specific Consumer */}
           <div 
             className={`absolute w-4 h-4 rounded-full shadow-lg z-50 transition-all duration-[700ms] ease-in-out
               ${activePacket.type === 'ORDER_PLACED' ? 'bg-indigo-600' : 'bg-pink-600'}
               ${activePacket.stage === 'producer' ? 'opacity-100 top-[15%] left-[50%]' : ''}
               ${activePacket.stage === 'transit-to-bus' ? 'top-[40%] left-[50%]' : ''}
               ${activePacket.stage === 'bus' ? 'opacity-0 top-[40%] left-[50%]' : ''}
               ${/* Starting from Bus position when entering transit-to-consumer */ ''}
               ${activePacket.stage === 'transit-to-consumer' ? 
                   (activePacket.type === 'ORDER_PLACED' ? 'top-[85%] left-[16%]' : 'top-[85%] left-[50%]') 
                   : ''}
               ${activePacket.stage === 'consumer' ? 'opacity-0 top-[85%] left-[50%]' : ''}
             `}
             style={activePacket.stage === 'transit-to-consumer' ? {} : { transform: 'translate(-50%, -50%)' }}
           ></div>

           {/* Ghost Packet: Splits from Bus -> Analytics */}
           {/* Only rendered during consumer transit to show splitting from center */}
           {(activePacket.stage === 'transit-to-consumer' || activePacket.stage === 'consumer') && (
              <div 
              className={`absolute w-4 h-4 rounded-full shadow-lg z-50 transition-all duration-[700ms] ease-in-out
                ${activePacket.type === 'ORDER_PLACED' ? 'bg-indigo-400' : 'bg-pink-400'}
                ${/* Start at Bus Position (40%, 50%) then move to Analytics (85%, 84%) */ ''}
                ${activePacket.stage === 'transit-to-consumer' ? 'top-[85%] left-[84%] opacity-100' : 'top-[40%] left-[50%] opacity-0'}
                ${activePacket.stage === 'consumer' ? 'opacity-0 top-[85%] left-[84%]' : ''}
              `}
              // We force the starting position via style if it wasn't mounted, but since it mounts on state change, 
              // we rely on CSS keyframes or just ensuring it starts at center. 
              // To fix the "jumping" issue, we'll use a specific keyframe animation for the split.
              style={{ 
                  animation: 'splitToAnalytics 0.7s forwards'
              }}
            ></div>
           )}
         </>
       )}

       <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splitToAnalytics {
          0% { top: 40%; left: 50%; opacity: 1; }
          100% { top: 85%; left: 84%; opacity: 1; }
        }
       `}</style>
    </div>
  );
};


// ==================== MONOLITH VS MICROSERVICES DEMO ====================
export const MonolithMicroservicesDemo: React.FC = () => {
  const [arch, setArch] = useState<'monolith' | 'micro'>('monolith');
  const [status, setStatus] = useState<Record<string, boolean>>({ auth: true, pay: true, product: true });

  const toggleService = (svc: string) => {
    setStatus(prev => ({ ...prev, [svc]: !prev[svc] }));
  };

  const isSystemDown = arch === 'monolith' && (!status.auth || !status.pay || !status.product);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex justify-center gap-4 mb-4">
         <button onClick={() => setArch('monolith')} className={`px-4 py-2 rounded font-bold ${arch === 'monolith' ? 'bg-slate-800 text-white' : 'bg-slate-200'}`}>Monolith</button>
         <button onClick={() => setArch('micro')} className={`px-4 py-2 rounded font-bold ${arch === 'micro' ? 'bg-indigo-600 text-white' : 'bg-slate-200'}`}>Microservices</button>
      </div>

      <div className="min-h-[250px] bg-slate-50 border border-slate-200 rounded-xl p-8 flex items-center justify-center">
         {arch === 'monolith' ? (
           <div className={`p-8 rounded-2xl border-4 transition-all duration-500 text-center
             ${isSystemDown ? 'bg-red-100 border-red-500' : 'bg-white border-slate-400'}
           `}>
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Monolith App</h3>
              <div className="flex gap-2 justify-center">
                 <button onClick={() => toggleService('auth')} className={`px-2 py-1 rounded text-xs ${status.auth ? 'bg-green-200 text-green-800' : 'bg-red-500 text-white'}`}>Auth</button>
                 <button onClick={() => toggleService('pay')} className={`px-2 py-1 rounded text-xs ${status.pay ? 'bg-green-200 text-green-800' : 'bg-red-500 text-white'}`}>Payments</button>
                 <button onClick={() => toggleService('product')} className={`px-2 py-1 rounded text-xs ${status.product ? 'bg-green-200 text-green-800' : 'bg-red-500 text-white'}`}>Products</button>
              </div>
              <div className={`mt-4 font-bold ${isSystemDown ? 'text-red-600' : 'text-green-600'}`}>
                 {isSystemDown ? "SYSTEM CRASHED! (One bug kills all)" : "System Operational"}
              </div>
           </div>
         ) : (
           <div className="flex flex-wrap gap-8 justify-center">
              {[
                { id: 'auth', icon: '🔐', label: 'Auth Service' },
                { id: 'pay', icon: '💳', label: 'Payment Service' },
                { id: 'product', icon: '📦', label: 'Product Service' }
              ].map(svc => (
                <div key={svc.id} className={`p-4 w-32 rounded-xl border-2 transition-all duration-300 text-center
                  ${status[svc.id] ? 'bg-white border-green-400 shadow-md' : 'bg-red-50 border-red-400 opacity-70'}
                `}>
                   <div className="text-4xl mb-2">{svc.icon}</div>
                   <div className="font-bold text-xs mb-2">{svc.label}</div>
                   <button 
                     onClick={() => toggleService(svc.id)}
                     className={`w-full py-1 rounded text-[10px] font-bold ${status[svc.id] ? 'bg-green-100 text-green-700' : 'bg-red-500 text-white'}`}
                   >
                     {status[svc.id] ? 'Online' : 'CRASHED'}
                   </button>
                </div>
              ))}
              <div className="w-full text-center text-slate-500 text-sm mt-4">
                 If one service crashes, the others stay online!
              </div>
           </div>
         )}
      </div>
    </div>
  );
};

// ==================== CLIENT SERVER DEMO ====================
export const ClientServerDemo: React.FC = () => {
  const [state, setState] = useState<'idle' | 'requesting' | 'processing' | 'responding'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const fetchData = () => {
    if (state !== 'idle') return;
    setState('requesting');
    setLogs(prev => [...prev, 'REQ: GET /api/data']);
    
    setTimeout(() => {
      setState('processing');
      setTimeout(() => {
        setState('responding');
        setLogs(prev => [...prev, 'RES: 200 OK { data: ... }']);
        setTimeout(() => setState('idle'), 800);
      }, 1000);
    }, 800);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
       <div className="flex items-center justify-between px-4 md:px-12 py-8 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
          
          {/* CLIENT */}
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-24 h-20 bg-white border-2 border-slate-300 rounded-lg flex items-center justify-center shadow-md">
               <span className="text-4xl">💻</span>
             </div>
             <span className="font-bold text-slate-700 mt-2">Client</span>
             <button 
               onClick={fetchData}
               disabled={state !== 'idle'}
               className="mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
             >
               Send Request
             </button>
          </div>

          {/* SERVER */}
          <div className="relative z-10 flex flex-col items-center">
             <div className={`w-24 h-24 bg-slate-800 border-4 border-slate-600 rounded-lg flex flex-col items-center justify-center shadow-xl transition-all
               ${state === 'processing' ? 'scale-105 shadow-blue-500/50' : ''}
             `}>
               <span className="text-4xl">🗄️</span>
               {state === 'processing' && <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>}
             </div>
             <span className="font-bold text-slate-700 mt-2">Server</span>
          </div>

          {/* PACKET */}
          {(state === 'requesting' || state === 'responding') && (
            <div className={`absolute top-1/2 w-8 h-6 bg-yellow-400 rounded border border-yellow-600 flex items-center justify-center text-[10px] font-bold shadow-md z-20
              ${state === 'requesting' ? 'animate-[moveRight_0.8s_linear]' : 'animate-[moveLeft_0.8s_linear]'}
            `}>
              {state === 'requesting' ? 'REQ' : 'RES'}
            </div>
          )}

          {/* CONNECTION LINE */}
          <div className="absolute top-[40%] left-20 right-20 h-1 bg-slate-200 -z-0"></div>
       </div>

       <div className="bg-slate-900 text-green-400 p-4 rounded-xl font-mono text-xs h-32 overflow-y-auto">
          {logs.map((l, i) => <div key={i}>{l}</div>)}
          {logs.length === 0 && <span className="opacity-50">Console idle...</span>}
       </div>
       <style>{`
         @keyframes moveRight { from { left: 20%; } to { left: 80%; } }
         @keyframes moveLeft { from { left: 80%; } to { left: 20%; } }
       `}</style>
    </div>
  );
};

// ==================== SERVERLESS DEMO ====================
export const ServerlessDemo: React.FC = () => {
  const [instances, setInstances] = useState<number[]>([]);
  const [cost, setCost] = useState(0);

  const triggerFunction = () => {
    const id = Date.now();
    // Cold start
    setInstances(prev => [...prev, id]);
    
    // Execute then die
    setTimeout(() => {
       setCost(c => c + 0.0002); // Increment cost
       setInstances(prev => prev.filter(i => i !== id));
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
          <div>
            <h3 className="font-bold text-slate-800">Cloud Provider (AWS Lambda / Azure Functions)</h3>
            <p className="text-xs text-slate-500">Functions spin up on demand and vanish when done.</p>
          </div>
          <div className="text-right">
             <div className="text-xs font-bold text-slate-400 uppercase">Total Bill</div>
             <div className="text-2xl font-mono text-green-600">${cost.toFixed(5)}</div>
          </div>
       </div>

       <div className="bg-slate-50 min-h-[250px] rounded-xl border-2 border-dashed border-slate-300 p-8 flex flex-col items-center justify-center relative">
          {instances.length === 0 && (
             <div className="text-slate-400 text-sm mb-4">No active servers. Paying $0.</div>
          )}
          
          <div className="flex flex-wrap gap-4 justify-center">
             {instances.map(id => (
               <div key={id} className="w-24 h-24 bg-orange-50 border-2 border-orange-400 rounded-xl flex flex-col items-center justify-center animate-[pop_0.3s_ease-out] shadow-md">
                  <span className="text-3xl animate-spin">⚙️</span>
                  <span className="text-[10px] font-bold text-orange-800 mt-2">Processing...</span>
               </div>
             ))}
          </div>

          <button 
            onClick={triggerFunction}
            className="absolute bottom-6 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 active:scale-95 transition-all"
          >
            Trigger Event ⚡
          </button>
       </div>
    </div>
  );
};

// ==================== SAGA DEMO ====================
export const SagaDemo: React.FC = () => {
  const [steps, setSteps] = useState<{name: string, status: 'pending'|'success'|'failed'|'compensating'|'compensated'}[]>([
    { name: 'Order Service', status: 'pending' },
    { name: 'Inventory Service', status: 'pending' },
    { name: 'Payment Service', status: 'pending' }
  ]);
  const [isRunning, setIsRunning] = useState(false);

  const reset = () => {
    setSteps([
      { name: 'Order Service', status: 'pending' },
      { name: 'Inventory Service', status: 'pending' },
      { name: 'Payment Service', status: 'pending' }
    ]);
  };

  const updateStep = (idx: number, status: any) => {
    setSteps(prev => prev.map((s, i) => i === idx ? { ...s, status } : s));
  };

  const runSaga = async (shouldFail: boolean) => {
    if (isRunning) return;
    setIsRunning(true);
    reset();
    
    // Step 1: Order
    await new Promise(r => setTimeout(r, 600));
    updateStep(0, 'success');
    
    // Step 2: Inventory
    await new Promise(r => setTimeout(r, 600));
    updateStep(1, 'success');

    // Step 3: Payment
    await new Promise(r => setTimeout(r, 600));
    if (shouldFail) {
       updateStep(2, 'failed');
       
       // TRIGGER COMPENSATION
       await new Promise(r => setTimeout(r, 800));
       updateStep(1, 'compensating'); // Inventory
       await new Promise(r => setTimeout(r, 600));
       updateStep(1, 'compensated');
       
       await new Promise(r => setTimeout(r, 600));
       updateStep(0, 'compensating'); // Order
       await new Promise(r => setTimeout(r, 600));
       updateStep(0, 'compensated');

    } else {
       updateStep(2, 'success');
    }
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="flex justify-center gap-4">
          <button onClick={() => runSaga(false)} disabled={isRunning} className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 disabled:opacity-50">
             Book Trip (Success)
          </button>
          <button onClick={() => runSaga(true)} disabled={isRunning} className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 disabled:opacity-50">
             Book Trip (Payment Fail)
          </button>
       </div>

       <div className="flex justify-between items-center relative px-8 py-12 bg-slate-50 border border-slate-200 rounded-xl">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-12 right-12 h-1 bg-slate-200 -z-0"></div>

          {steps.map((step, i) => (
             <div key={i} className={`relative z-10 w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center bg-white shadow-sm transition-all duration-500
                ${step.status === 'pending' ? 'border-slate-300' : ''}
                ${step.status === 'success' ? 'border-green-500 bg-green-50 scale-110' : ''}
                ${step.status === 'failed' ? 'border-red-500 bg-red-50' : ''}
                ${step.status === 'compensating' ? 'border-yellow-400 bg-yellow-50 animate-pulse' : ''}
                ${step.status === 'compensated' ? 'border-orange-500 bg-orange-100 opacity-60' : ''}
             `}>
                <div className="text-2xl mb-1">
                   {i === 0 ? '📝' : i === 1 ? '📦' : '💳'}
                </div>
                <div className="text-[10px] font-bold text-center leading-tight">{step.name}</div>
                <div className={`text-[10px] font-bold uppercase mt-1
                   ${step.status === 'success' ? 'text-green-600' : ''}
                   ${step.status === 'failed' ? 'text-red-600' : ''}
                   ${step.status === 'compensated' ? 'text-orange-600' : ''}
                `}>{step.status}</div>
             </div>
          ))}
       </div>
       <div className="text-center text-sm text-slate-500">
          {steps[2].status === 'failed' ? 'Payment Failed! Rolling back transactions...' : 'Process Flow'}
       </div>
    </div>
  );
};

// ==================== DDD DEMO ====================
export const DddDemo: React.FC = () => {
  const [context, setContext] = useState<'sales' | 'shipping'>('sales');

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
          <h3 className="font-bold text-slate-800 mb-2">Bounded Contexts</h3>
          <p className="text-sm text-slate-500 max-w-lg mx-auto mb-6">
            In DDD, the same entity (e.g., "Product") means different things in different contexts. 
            We don't create one giant "God Class" for Product.
          </p>
          
          <div className="flex justify-center gap-0 border rounded-lg overflow-hidden w-fit mx-auto">
             <button 
               onClick={() => setContext('sales')}
               className={`px-6 py-2 font-bold transition-all ${context === 'sales' ? 'bg-indigo-600 text-white' : 'bg-slate-100 hover:bg-slate-200'}`}
             >
               Sales Context
             </button>
             <button 
               onClick={() => setContext('shipping')}
               className={`px-6 py-2 font-bold transition-all ${context === 'shipping' ? 'bg-orange-600 text-white' : 'bg-slate-100 hover:bg-slate-200'}`}
             >
               Shipping Context
             </button>
          </div>
       </div>

       <div className={`p-8 rounded-xl border-4 transition-all duration-500 flex flex-col items-center min-h-[300px] justify-center relative overflow-hidden
          ${context === 'sales' ? 'border-indigo-200 bg-indigo-50' : 'border-orange-200 bg-orange-50'}
       `}>
          <div className="absolute top-0 left-0 bg-white/50 p-2 text-xs font-bold uppercase tracking-widest rounded-br-lg">
             {context} Domain
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg w-64 border border-slate-200 relative z-10">
             <div className="text-center border-b pb-2 mb-4">
                <div className="text-xs text-slate-400 uppercase">Entity</div>
                <div className="text-xl font-bold text-slate-800">Product (ID: 101)</div>
             </div>
             
             <div className="space-y-3">
                {context === 'sales' ? (
                  <>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Name:</span>
                        <span className="font-bold">iPhone 15</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Price:</span>
                        <span className="font-bold text-green-600">$999.00</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Discount:</span>
                        <span className="font-bold text-indigo-600">Active</span>
                     </div>
                  </>
                ) : (
                  <>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Weight:</span>
                        <span className="font-bold">171g</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Dimensions:</span>
                        <span className="font-bold">147 x 71 x 7 mm</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Shipping Class:</span>
                        <span className="font-bold text-orange-600">Fragile</span>
                     </div>
                  </>
                )}
             </div>
          </div>
          
          <div className="mt-8 text-center text-slate-500 text-sm max-w-md">
             {context === 'sales' 
               ? "Sales cares about pricing, descriptions, and marketing rules. It doesn't care about box dimensions." 
               : "Shipping cares about weight, dimensions, and handling. It doesn't care about the price or marketing."}
          </div>
       </div>
    </div>
  );
};
