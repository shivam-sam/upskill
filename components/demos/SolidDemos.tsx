
import React, { useState } from 'react';

// ==================== SRP DEMO ====================
export const SrpDemo: React.FC = () => {
  const [mode, setMode] = useState<'messy' | 'clean'>('messy');
  
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-4 mb-4 justify-center">
        <button onClick={() => setMode('messy')} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'messy' ? 'bg-red-50 border-red-500 text-red-700' : 'border-slate-200'}`}>Messy (God Class)</button>
        <button onClick={() => setMode('clean')} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'clean' ? 'bg-green-50 border-green-500 text-green-700' : 'border-slate-200'}`}>Clean (SRP)</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`p-6 rounded-xl border-2 transition-all ${mode === 'messy' ? 'border-red-400 bg-red-50' : 'border-slate-200 opacity-50'}`}>
          <h4 className="font-bold text-lg mb-2">🚫 UserManager (God Class)</h4>
          <div className="space-y-2 font-mono text-sm">
            <div className="bg-white p-2 rounded border border-red-200">authenticateUser()</div>
            <div className="bg-white p-2 rounded border border-red-200">validateEmail()</div>
            <div className="bg-white p-2 rounded border border-red-200">sendWelcomeEmail()</div>
            <div className="bg-white p-2 rounded border border-red-200">logLoginAttempt()</div>
            <div className="bg-white p-2 rounded border border-red-200">renderUserProfileHTML()</div>
          </div>
          <div className="mt-4 text-xs text-red-700 font-bold">⚠️ Logic for Auth, Email, Logging, and UI all mixed!</div>
        </div>

        <div className={`p-6 rounded-xl border-2 transition-all ${mode === 'clean' ? 'border-green-400 bg-green-50' : 'border-slate-200 opacity-50'}`}>
           <h4 className="font-bold text-lg mb-2">✅ Separated Classes</h4>
           <div className="flex flex-col gap-3">
             <div className="p-3 bg-white rounded border border-green-200 shadow-sm">
               <div className="font-bold text-xs text-green-800 uppercase">AuthService</div>
               <div className="font-mono text-xs mt-1">authenticateUser()</div>
             </div>
             <div className="p-3 bg-white rounded border border-green-200 shadow-sm">
               <div className="font-bold text-xs text-green-800 uppercase">EmailSender</div>
               <div className="font-mono text-xs mt-1">sendWelcomeEmail()</div>
             </div>
             <div className="p-3 bg-white rounded border border-green-200 shadow-sm">
               <div className="font-bold text-xs text-green-800 uppercase">Logger</div>
               <div className="font-mono text-xs mt-1">logActivity()</div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// ==================== OCP DEMO ====================
export const OcpDemo: React.FC = () => {
  const [mode, setMode] = useState<'without' | 'with'>('without');
  const [shapes, setShapes] = useState<string[]>(['Rectangle', 'Circle']);
  
  const addTriangle = () => {
    if (!shapes.includes('Triangle')) {
      setShapes(prev => [...prev, 'Triangle']);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="bg-indigo-50 p-4 rounded-xl text-indigo-900 text-sm mb-4">
         <strong>Scenario:</strong> We want to add a <code>Triangle</code> to our Area Calculator.
       </div>

       <div className="flex gap-4 mb-4 justify-center">
          <button onClick={() => { setMode('without'); setShapes(['Rectangle', 'Circle']); }} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'without' ? 'bg-red-50 border-red-500 text-red-700' : 'border-slate-200'}`}>Without OCP</button>
          <button onClick={() => { setMode('with'); setShapes(['Rectangle', 'Circle']); }} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'with' ? 'bg-green-50 border-green-500 text-green-700' : 'border-slate-200'}`}>With OCP</button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISUALIZATION */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <h4 className="font-bold mb-4">Supported Shapes</h4>
             <div className="flex gap-2 flex-wrap mb-6">
                {shapes.map(s => (
                  <span key={s} className="px-3 py-1 bg-slate-100 rounded-full text-sm border border-slate-300">{s}</span>
                ))}
             </div>
             <button 
               onClick={addTriangle}
               disabled={shapes.includes('Triangle')}
               className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
             >
               + Add Triangle Feature
             </button>
          </div>

          {/* CODE STRUCTURE */}
          <div className={`p-6 rounded-xl border-2 transition-all ${mode === 'without' ? 'border-red-400 bg-red-50' : 'border-green-400 bg-green-50'}`}>
             <h4 className="font-bold mb-2">{mode === 'without' ? '🚫 AreaCalculator.ts' : '✅ AreaCalculator.ts'}</h4>
             
             {mode === 'without' ? (
               <div className="font-mono text-xs bg-white p-3 rounded border border-red-200 overflow-x-auto">
                 <div className="text-slate-400">// We have to MODIFY this class to add Triangle</div>
                 <div>class AreaCalculator {'{'}</div>
                 <div className="pl-4">calculate(shape) {'{'}</div>
                 <div className="pl-8">if (shape.type == 'Rect') return w * h;</div>
                 <div className="pl-8">else if (shape.type == 'Circle') return πr²;</div>
                 {shapes.includes('Triangle') && (
                   <div className="pl-8 text-red-600 font-bold bg-red-100 animate-[pulse_1s_infinite]">// MODIFIED HERE!</div>
                 )}
                 {shapes.includes('Triangle') && (
                   <div className="pl-8 text-red-600 font-bold">else if (shape.type == 'Triangle') ...</div>
                 )}
                 <div className="pl-4">{'}'}</div>
                 <div>{'}'}</div>
               </div>
             ) : (
                <div className="font-mono text-xs bg-white p-3 rounded border border-green-200 overflow-x-auto">
                 <div className="text-slate-400">// This class is CLOSED for modification</div>
                 <div>class AreaCalculator {'{'}</div>
                 <div className="pl-4">calculate(shape: Shape) {'{'}</div>
                 <div className="pl-8 text-green-700 font-bold">return shape.area();</div>
                 <div className="pl-4">{'}'}</div>
                 <div>{'}'}</div>
                 <br/>
                 <div className="text-slate-400">// We just EXTEND by adding a new file</div>
                 {shapes.includes('Triangle') && (
                   <div className="mt-2 text-green-700 font-bold animate-[fadeIn_0.5s]">
                     class Triangle implements Shape...
                   </div>
                 )}
               </div>
             )}
          </div>
       </div>
    </div>
  );
};

// ==================== LSP DEMO ====================
export const LspDemo: React.FC = () => {
  const [mode, setMode] = useState<'without' | 'with'>('without');
  const [testWidth, setTestWidth] = useState(4);
  const [testHeight, setTestHeight] = useState(5);

  const rectArea = testWidth * testHeight;
  
  // In "Without" mode, Square inherits Rectangle, so setting width sets height too (properties coupled)
  // In "With" mode, they are independent Shapes
  const squareSide = testWidth; // Square uses the first param usually
  const squareArea = mode === 'without' ? (testWidth * testWidth) : (testWidth * testWidth);

  // The "Bug" simulation:
  // User INTENDS to set W=4, H=5. Expected Area = 20.
  // If Square extends Rectangle, setting H=5 might overwrite W=5 if implemented poorly (or vice versa).
  // For visual clarity: In "Without" mode, we simulate the Square forcing H to match W immediately.

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-4 mb-4 justify-center">
        <button onClick={() => setMode('without')} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'without' ? 'bg-red-50 border-red-500 text-red-700' : 'border-slate-200'}`}>Without LSP</button>
        <button onClick={() => setMode('with')} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'with' ? 'bg-green-50 border-green-500 text-green-700' : 'border-slate-200'}`}>With LSP</button>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 mb-4">
         <p className="text-sm text-slate-600 mb-2"><strong>Test Case:</strong> Create shape, set width to {testWidth}, set height to {testHeight}.</p>
         <div className="flex gap-4">
            <label className="text-xs font-bold uppercase text-slate-500">
               Test Width: <input type="number" value={testWidth} onChange={e => setTestWidth(Number(e.target.value))} className="border rounded p-1 w-12 ml-2 bg-white shadow-sm"/>
            </label>
            <label className="text-xs font-bold uppercase text-slate-500">
               Test Height: <input type="number" value={testHeight} onChange={e => setTestHeight(Number(e.target.value))} className="border rounded p-1 w-12 ml-2 bg-white shadow-sm"/>
            </label>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* RECTANGLE VISUAL */}
        <div className="p-6 rounded-xl border-2 border-slate-200 bg-slate-50 flex flex-col items-center">
           <h4 className="font-bold text-slate-700 mb-2">Object A: Rectangle</h4>
           {mode === 'without' ? <div className="text-xs font-mono text-slate-500 mb-4">class Rectangle</div> : <div className="text-xs font-mono text-slate-500 mb-4">class Rectangle implements Shape</div>}
           
           <div className="w-32 h-20 bg-blue-500 flex items-center justify-center text-white font-bold transition-all"
             style={{ width: testWidth * 10, height: testHeight * 10 }}
           >
             {rectArea}
           </div>
           <div className="mt-2 text-xs text-slate-500">W: {testWidth}, H: {testHeight}</div>
           <div className="mt-2 text-green-600 font-bold text-sm">✅ Behaved as expected</div>
        </div>

        {/* SQUARE VISUAL */}
        <div className={`p-6 rounded-xl border-2 flex flex-col items-center transition-all ${mode === 'without' ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`}>
           <h4 className="font-bold text-slate-700 mb-2">Object B: Square</h4>
           {mode === 'without' ? (
             <div className="text-xs font-mono text-red-600 mb-4">class Square extends Rectangle</div>
           ) : (
             <div className="text-xs font-mono text-green-600 mb-4">class Square implements Shape</div>
           )}

           <div className={`flex items-center justify-center text-white font-bold transition-all ${mode === 'without' ? 'bg-red-500' : 'bg-green-500'}`}
             style={{ 
               width: mode === 'without' ? testHeight * 10 : testWidth * 10, // In without mode, setting height forces width to match
               height: testHeight * 10 
             }}
           >
             {mode === 'without' ? testHeight * testHeight : testWidth * testWidth}
           </div>
           
           {mode === 'without' ? (
              <div className="mt-4 text-center">
                 <div className="text-xs text-red-700 font-bold mb-1">❌ Violation!</div>
                 <div className="text-xs text-slate-600 max-w-[200px]">
                   Code set Height={testHeight}, but Square forced Width to match ({testHeight}). 
                   Area is {testHeight*testHeight}, expected {testWidth*testHeight}.
                 </div>
              </div>
           ) : (
              <div className="mt-4 text-center">
                 <div className="text-xs text-green-700 font-bold mb-1">✅ Correct</div>
                 <div className="text-xs text-slate-600 max-w-[200px]">
                   Square is independent. It ignores the "Set Height" meant for rectangles or treats it as "Set Side". No broken inheritance contract.
                 </div>
              </div>
           )}
        </div>
      </div>
    </div>
  );
};

// ==================== ISP DEMO ====================
export const IspDemo: React.FC = () => {
  const [mode, setMode] = useState<'without' | 'with'>('without');
  const [selectedPrinter, setSelectedPrinter] = useState<'modern' | 'old'>('modern');

  const capabilities = {
    modern: ['Print', 'Scan', 'Fax'],
    old: ['Print']
  };

  const interfaces = mode === 'without' 
    ? [{ name: 'IMachine', methods: ['Print', 'Scan', 'Fax'] }]
    : [
        { name: 'IPrinter', methods: ['Print'] }, 
        { name: 'IScanner', methods: ['Scan'] }, 
        { name: 'IFax', methods: ['Fax'] }
      ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-4 mb-4 justify-center">
        <button onClick={() => setMode('without')} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'without' ? 'bg-red-50 border-red-500 text-red-700' : 'border-slate-200'}`}>Without ISP</button>
        <button onClick={() => setMode('with')} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'with' ? 'bg-green-50 border-green-500 text-green-700' : 'border-slate-200'}`}>With ISP</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* INTERFACE DEFINITION */}
         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-4">Interface Definitions</h4>
            <div className="space-y-4">
               {interfaces.map(inf => (
                 <div key={inf.name} className="border border-indigo-200 rounded bg-indigo-50 p-3">
                    <div className="font-mono text-xs font-bold text-indigo-700 mb-2">interface {inf.name}</div>
                    <div className="space-y-1 pl-2">
                       {inf.methods.map(m => (
                         <div key={m} className="text-xs text-slate-600 font-mono flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            {m}()
                         </div>
                       ))}
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* IMPLEMENTATION */}
         <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4">Implementation</h4>
            <div className="flex gap-2 mb-6">
               <button onClick={() => setSelectedPrinter('modern')} className={`flex-1 py-2 text-sm rounded ${selectedPrinter === 'modern' ? 'bg-slate-800 text-white' : 'bg-white border'}`}>Modern Printer</button>
               <button onClick={() => setSelectedPrinter('old')} className={`flex-1 py-2 text-sm rounded ${selectedPrinter === 'old' ? 'bg-slate-800 text-white' : 'bg-white border'}`}>Old Printer</button>
            </div>

            <div className="space-y-2">
               {['Print', 'Scan', 'Fax'].map(method => {
                  const isSupported = capabilities[selectedPrinter].includes(method);
                  const isForced = mode === 'without'; // In without mode, generic interface forces all methods
                  
                  // Visual Logic
                  // Without ISP: Old Printer is FORCED to have Scan/Fax but they crash.
                  // With ISP: Old Printer only implements Print. Scan/Fax don't exist on it.
                  
                  if (mode === 'with' && !isSupported) {
                    return null; // Don't show unsupported methods in correct implementation
                  }

                  return (
                    <div key={method} className={`p-3 rounded border flex items-center justify-between
                      ${isSupported ? 'bg-white border-green-200' : 'bg-red-50 border-red-200'}
                    `}>
                       <span className="text-sm font-mono">{method}()</span>
                       {isSupported ? (
                         <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Implemented</span>
                       ) : (
                         <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-bold">
                           {mode === 'without' ? 'Exception: Not Supported!' : ''}
                         </span>
                       )}
                    </div>
                  );
               })}
               
               {mode === 'without' && selectedPrinter === 'old' && (
                  <div className="mt-4 text-xs text-red-600 bg-red-100 p-2 rounded">
                     <strong>Violation:</strong> OldPrinter implements IMachine, so it must define Scan() and Fax() even if they just throw errors. Client code might crash calling them.
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

// ==================== DIP DEMO ====================
export const DipDemo: React.FC = () => {
  const [mode, setMode] = useState<'without' | 'with'>('without');
  const [db, setDb] = useState<'postgres' | 'mongo' | null>(null);

  const handleConnect = (selectedDb: 'postgres' | 'mongo') => {
    if (mode === 'without' && selectedDb === 'mongo') {
      alert("Compilation Error: UserService class is tightly coupled to PostgresDB. Cannot pass MongoDB instance.");
      return;
    }
    setDb(selectedDb);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="flex gap-4 mb-4 justify-center">
        <button onClick={() => { setMode('without'); setDb(null); }} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'without' ? 'bg-red-50 border-red-500 text-red-700' : 'border-slate-200'}`}>Without DIP</button>
        <button onClick={() => { setMode('with'); setDb(null); }} className={`px-4 py-2 rounded-lg font-bold border-2 ${mode === 'with' ? 'bg-green-50 border-green-500 text-green-700' : 'border-slate-200'}`}>With DIP</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
         {/* DATABASE OPTIONS (Low Level Modules) */}
         <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-800 text-center">Available Databases</h4>
            
            <button 
               onClick={() => handleConnect('postgres')}
               className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 shadow-sm
                 ${db === 'postgres' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'bg-white border-slate-200 hover:border-blue-300'}
               `}
            >
               <div className="text-3xl">🐘</div>
               <div className="text-left">
                 <div className="font-bold text-slate-700">PostgresDB</div>
                 <div className="text-xs text-slate-400">SQL Database</div>
               </div>
            </button>

            <button 
               onClick={() => handleConnect('mongo')}
               className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 shadow-sm group
                 ${db === 'mongo' ? 'border-green-500 bg-green-50 ring-2 ring-green-200' : 'bg-white border-slate-200 hover:border-green-300'}
                 ${mode === 'without' ? 'opacity-60' : ''}
               `}
            >
               <div className="text-3xl">🍃</div>
               <div className="text-left">
                 <div className="font-bold text-slate-700">MongoDB</div>
                 <div className="text-xs text-slate-400">NoSQL Database</div>
               </div>
               {mode === 'without' && <div className="ml-auto text-xl text-red-500 group-hover:scale-110 transition-transform" title="Incompatible">🚫</div>}
            </button>
         </div>

         {/* CONNECTION VISUALIZATION */}
         <div className="flex flex-col items-center justify-center h-full">
            <div className={`w-full h-2 rounded-full mb-2 relative overflow-hidden bg-slate-200`}>
                {db && (
                  <div className={`absolute inset-0 animate-[loading_1s_infinite] 
                    ${db === 'postgres' ? 'bg-blue-400' : 'bg-green-400'}
                  `}></div>
                )}
            </div>
            <div className="text-3xl transform rotate-90 lg:rotate-0">
               {mode === 'with' ? '🔌' : '🔗'}
            </div>
            <div className="text-xs font-mono mt-2 text-slate-400">
              {mode === 'with' ? 'Injecting via IDatabase' : 'Direct Instantiation'}
            </div>
         </div>

         {/* SERVICE (High Level Module) */}
         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10 text-6xl">⚙️</div>
            <h4 className="font-bold text-lg mb-4 text-white">UserService</h4>
            
            <div className="font-mono text-xs bg-slate-900 p-3 rounded border border-slate-600 mb-4">
               {mode === 'without' ? (
                 <>
                   <span className="text-pink-400">class</span> UserService {'{'}<br/>
                   &nbsp;&nbsp;db: <span className="text-blue-300">PostgresDB</span>;<br/>
                   &nbsp;&nbsp;constructor() {'{'}<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// TIGHT COUPLING!</span><br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;this.db = <span className="text-pink-400">new</span> PostgresDB();<br/>
                   &nbsp;&nbsp;{'}'}<br/>
                   {'}'}
                 </>
               ) : (
                 <>
                   <span className="text-pink-400">class</span> UserService {'{'}<br/>
                   &nbsp;&nbsp;db: <span className="text-yellow-300">IDatabase</span>;<br/>
                   &nbsp;&nbsp;constructor(db: <span className="text-yellow-300">IDatabase</span>) {'{'}<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// LOOSE COUPLING</span><br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;this.db = db;<br/>
                   &nbsp;&nbsp;{'}'}<br/>
                   {'}'}
                 </>
               )}
            </div>

            <div className={`p-3 rounded text-center text-sm font-bold transition-all
               ${!db ? 'bg-slate-700 text-slate-400' : 'bg-white text-slate-900'}
            `}>
               {db ? (
                 <span>
                    Fetching Data from <span className={db==='postgres'?'text-blue-600':'text-green-600'}>
                      {db === 'postgres' ? 'Postgres' : 'Mongo'}
                    </span>...
                 </span>
               ) : 'Waiting for DB...'}
            </div>
         </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
