
import React, { useState, useEffect } from 'react';

type TransportStrategy = 'car' | 'walking' | 'public_transport';

const StrategyDemo: React.FC = () => {
  const [strategy, setStrategy] = useState<TransportStrategy>('car');
  const [startPoint, setStartPoint] = useState('Home');
  const [endPoint, setEndPoint] = useState('Airport');
  const [status, setStatus] = useState<'idle' | 'calculating' | 'success'>('idle');
  const [routeInfo, setRouteInfo] = useState<{ time: string, cost: string, path: string } | null>(null);

  const selectStrategy = (newStrategy: TransportStrategy) => {
    setStrategy(newStrategy);
    // Clear previous result immediately
    setRouteInfo(null);
    setStatus('idle');
    
    // Auto-calculate for better interactivity
    calculateRoute(newStrategy);
  };

  const calculateRoute = (activeStrategy: TransportStrategy = strategy) => {
    setStatus('calculating');
    setRouteInfo(null);
    
    // Simulate API delay / Algorithm calculation
    setTimeout(() => {
      let result = { time: '', cost: '', path: '' };
      
      switch (activeStrategy) {
        case 'car':
          result = { 
            time: '25 mins', 
            cost: '$15 (Fuel + Parking)', 
            path: 'Takes highway, fastest route but risk of traffic.' 
          };
          break;
        case 'walking':
          result = { 
            time: '4 hours', 
            cost: '$0', 
            path: 'Scenic route through park. Free but exhausting.' 
          };
          break;
        case 'public_transport':
          result = { 
            time: '45 mins', 
            cost: '$3 (Bus Ticket)', 
            path: 'Bus Line 42 -> Train Line B. Economical balance.' 
          };
          break;
      }
      setRouteInfo(result);
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CONTEXT (Navigation App) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>
           <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">🗺️ Route Planner</h3>
              <p className="text-sm text-slate-500 mb-6">
                Select a transport mode (Strategy). The app (Context) will use the corresponding algorithm to calculate the route.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex flex-col gap-1">
                   <label className="text-xs font-bold text-slate-400 uppercase">Start Point (A)</label>
                   <input 
                     type="text" 
                     value={startPoint}
                     onChange={(e) => setStartPoint(e.target.value)}
                     className="bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
                   />
                </div>
                <div className="flex flex-col gap-1">
                   <label className="text-xs font-bold text-slate-400 uppercase">Destination (B)</label>
                   <input 
                     type="text" 
                     value={endPoint}
                     onChange={(e) => setEndPoint(e.target.value)}
                     className="bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-700 font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
                   />
                </div>
              </div>

              <div className="mb-6">
                 <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Choose Strategy</label>
                 <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => selectStrategy('car')}
                      className={`p-3 rounded-lg border-2 flex flex-col items-center justify-center gap-1 transition-all
                        ${strategy === 'car' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}
                      `}
                    >
                       <span className="text-2xl">🚗</span>
                       <span className="text-[10px] font-bold">Driving</span>
                    </button>
                    <button 
                      onClick={() => selectStrategy('public_transport')}
                      className={`p-3 rounded-lg border-2 flex flex-col items-center justify-center gap-1 transition-all
                        ${strategy === 'public_transport' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}
                      `}
                    >
                       <span className="text-2xl">🚌</span>
                       <span className="text-[10px] font-bold">Transit</span>
                    </button>
                    <button 
                      onClick={() => selectStrategy('walking')}
                      className={`p-3 rounded-lg border-2 flex flex-col items-center justify-center gap-1 transition-all
                        ${strategy === 'walking' ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'}
                      `}
                    >
                       <span className="text-2xl">🚶</span>
                       <span className="text-[10px] font-bold">Walking</span>
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* VISUALIZATION */}
        <div className="bg-slate-100 rounded-xl p-0 relative overflow-hidden shadow-inner border border-slate-200 flex flex-col h-[400px]">
           {/* Map Background Pattern */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#64748b_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
           <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-slate-500 border border-slate-200">
             Map View
           </div>
           
           {/* SVG Container */}
           <svg className="w-full h-full relative z-10" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">
              <defs>
                 <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
                    markerWidth="6" markerHeight="6"
                    orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={strategy === 'car' ? '#6366f1' : strategy === 'public_transport' ? '#e11d48' : '#10b981'} />
                 </marker>
                 <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                   <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
                 </filter>
              </defs>

              {/* Route Path */}
              {status === 'success' && (
                 <path 
                   d={
                     strategy === 'car' ? "M 60 60 Q 300 10 540 240" : // Smooth curve for car
                     strategy === 'public_transport' ? "M 60 60 L 60 240 L 540 240" : // Right angle for transit
                     "M 60 60 L 540 240" // Straight line for walking
                   }
                   fill="none"
                   stroke={strategy === 'car' ? '#6366f1' : strategy === 'public_transport' ? '#e11d48' : '#10b981'}
                   strokeWidth="6"
                   strokeLinecap="round"
                   strokeDasharray={strategy === 'walking' ? '12,8' : '0'}
                   markerEnd="url(#arrow)"
                   className="animate-[dash_1s_ease-out_forwards]"
                   pathLength="1"
                   filter="url(#shadow)"
                 />
              )}

              {/* Point A Marker */}
              <g transform="translate(60, 60)">
                <circle r="18" fill="#3b82f6" stroke="white" strokeWidth="4" filter="url(#shadow)" />
                <text y="5" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">A</text>
                <foreignObject x="-50" y="-45" width="100" height="30" style={{ overflow: 'visible' }}>
                  <div className="flex justify-center">
                    <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md border border-blue-400 whitespace-nowrap">
                      {startPoint || 'Start'}
                    </div>
                  </div>
                </foreignObject>
              </g>

              {/* Point B Marker */}
              <g transform="translate(540, 240)">
                <circle r="18" fill="#ef4444" stroke="white" strokeWidth="4" filter="url(#shadow)" />
                <text y="5" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">B</text>
                <foreignObject x="-50" y="25" width="100" height="30" style={{ overflow: 'visible' }}>
                  <div className="flex justify-center">
                    <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-md border border-red-400 whitespace-nowrap">
                      {endPoint || 'Destination'}
                    </div>
                  </div>
                </foreignObject>
              </g>
           </svg>

           {/* Result Overlay */}
           {status === 'success' && routeInfo && (
             <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg shadow-xl border border-slate-200 animate-[slideUp_0.3s] z-20">
                <div className="flex justify-between items-start mb-2">
                   <div>
                      <div className="text-2xl font-black text-slate-800">{routeInfo.time}</div>
                      <div className="text-sm font-bold text-green-600">{routeInfo.cost}</div>
                   </div>
                   <div className="text-4xl bg-slate-100 p-2 rounded-lg">
                      {strategy === 'car' ? '🚗' : strategy === 'public_transport' ? '🚌' : '🚶'}
                   </div>
                </div>
                <div className="text-xs text-slate-500 border-t pt-2 mt-2 font-medium">
                   {routeInfo.path}
                </div>
             </div>
           )}

           {status === 'calculating' && (
             <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[2px] z-30 transition-all">
                <div className="flex flex-col items-center bg-white px-6 py-4 rounded-xl shadow-2xl border border-slate-100 animate-[pop_0.2s]">
                   <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                   <div className="text-xs font-bold text-indigo-800 mt-3">Calculating Route...</div>
                   <div className="text-[10px] text-slate-400 mt-1">Applying {strategy} algorithm</div>
                </div>
             </div>
           )}
        </div>
      </div>
      <style>{`
        @keyframes dash {
          from { stroke-dashoffset: 1; stroke-dasharray: 1; }
          to { stroke-dashoffset: 0; stroke-dasharray: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pop {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default StrategyDemo;
