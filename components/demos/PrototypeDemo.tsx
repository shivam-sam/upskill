
import React, { useState } from 'react';

// The Prototype Interface
interface SmartPhone {
  model: string;
  color: string;
  storage: number;
  battery: number;
}

const PrototypeDemo: React.FC = () => {
  // The "Master Prototype" configuration
  const [prototype, setPrototype] = useState<SmartPhone>({
    model: 'Galaxy X',
    color: 'Phantom Black',
    storage: 256,
    battery: 100
  });

  // The inventory of cloned objects
  const [inventory, setInventory] = useState<SmartPhone[]>([]);

  // The Logic: CLONE instead of new SmartPhone()
  const clonePrototype = () => {
    // Deep copy simulation
    const newPhone: SmartPhone = { ...prototype }; 
    setInventory(prev => [...prev, newPhone]);
  };

  const updatePrototype = (key: keyof SmartPhone, value: any) => {
    setPrototype(prev => ({ ...prev, [key]: value }));
  };

  const updateClone = (index: number, key: keyof SmartPhone, value: any) => {
    setInventory(prev => 
      prev.map((phone, i) => i === index ? { ...phone, [key]: value } : phone)
    );
  };

  return (
    <div className="flex flex-col gap-8 w-full">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* PROTOTYPE CONFIGURATOR */}
          <div className="lg:col-span-4 bg-white p-6 rounded-xl shadow-lg border border-indigo-100 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
             <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
               <span className="text-2xl">📐</span> Master Prototype
             </h3>

             <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase">Model Name</label>
                  <input 
                    type="text" 
                    value={prototype.model}
                    onChange={(e) => updatePrototype('model', e.target.value)}
                    className="w-full border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-1 font-semibold text-slate-700 bg-transparent"
                  />
                </div>

                <div>
                   <label className="text-xs font-bold text-slate-400 uppercase">Color Finish</label>
                   <div className="flex gap-2 mt-2">
                      {['Phantom Black', 'Glacial Silver', 'Rose Gold'].map(c => (
                        <button 
                          key={c}
                          onClick={() => updatePrototype('color', c)}
                          className={`w-8 h-8 rounded-full border-2 shadow-sm transition-transform hover:scale-110
                            ${c === 'Phantom Black' ? 'bg-slate-900' : c === 'Glacial Silver' ? 'bg-slate-200' : 'bg-rose-300'}
                            ${prototype.color === c ? 'border-indigo-500 scale-110' : 'border-transparent'}
                          `}
                          title={c}
                        />
                      ))}
                   </div>
                </div>

                <div>
                   <label className="text-xs font-bold text-slate-400 uppercase">Storage: {prototype.storage} GB</label>
                   <input 
                     type="range" min="64" max="1024" step="64"
                     value={prototype.storage}
                     onChange={(e) => updatePrototype('storage', Number(e.target.value))}
                     className="w-full accent-indigo-600 mt-2"
                   />
                </div>
             </div>

             <div className="mt-8 pt-6 border-t border-slate-100">
                <button 
                  onClick={clonePrototype}
                  className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 active:scale-95 transition-all font-bold flex items-center justify-center gap-2"
                >
                  <span>📠</span> Clone to Inventory
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  Creates an exact copy without re-running initialization logic.
                </p>
             </div>
          </div>

          {/* INVENTORY DISPLAY */}
          <div className="lg:col-span-8 bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-300 min-h-[400px]">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-600">Inventory ({inventory.length} items)</h3>
                {inventory.length > 0 && (
                  <button onClick={() => setInventory([])} className="text-xs text-red-500 hover:text-red-700">Clear All</button>
                )}
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {inventory.map((phone, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 animate-[fadeIn_0.3s] group relative">
                     <div className="absolute top-2 right-2 text-[10px] bg-slate-100 text-slate-500 px-1.5 rounded">
                       #{idx + 1}
                     </div>
                     
                     <div className="flex justify-center mb-4">
                        <div className={`w-16 h-28 rounded-2xl border-4 border-slate-300 shadow-inner flex items-center justify-center
                          ${phone.color === 'Phantom Black' ? 'bg-slate-800' : phone.color === 'Glacial Silver' ? 'bg-slate-100' : 'bg-rose-200'}
                        `}>
                          <span className="text-2xl">📱</span>
                        </div>
                     </div>
                     
                     <div className="space-y-1">
                        <div className="font-bold text-slate-800 text-sm truncate">{phone.model}</div>
                        <div className="text-xs text-slate-500">{phone.color}</div>
                        <div className="text-xs text-slate-500">{phone.storage} GB</div>
                     </div>

                     {/* Demonstrate Independence */}
                     <div className="mt-3 pt-3 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                        <label className="text-[10px] font-bold text-slate-400">Customize Clone</label>
                        <select 
                          className="w-full text-xs border rounded mt-1 bg-slate-50"
                          onChange={(e) => updateClone(idx, 'color', e.target.value)}
                          value={phone.color}
                        >
                           <option value="Phantom Black">Black</option>
                           <option value="Glacial Silver">Silver</option>
                           <option value="Rose Gold">Gold</option>
                        </select>
                     </div>
                  </div>
                ))}
                {inventory.length === 0 && (
                   <div className="col-span-full flex flex-col items-center justify-center text-slate-300 mt-10">
                      <div className="text-4xl mb-2">📦</div>
                      <p>Inventory is empty.</p>
                      <p className="text-sm">Configure the prototype and click Clone.</p>
                   </div>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};

export default PrototypeDemo;
