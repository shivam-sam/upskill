
import React, { useState } from 'react';

// Abstract Product Interfaces
interface Chair {
  style: string;
  sitOn(): string;
  icon: string;
}

interface Table {
  style: string;
  putCoffee(): string;
  icon: string;
}

// Concrete Factories
const ModernFactory = {
  createChair: (): Chair => ({ style: 'Modern', icon: '🪑', sitOn: () => "Sitting on a sleek, minimalist chair." }),
  createTable: (): Table => ({ style: 'Modern', icon: '⬛', putCoffee: () => "Placing coffee on a glass table." })
};

const VictorianFactory = {
  createChair: (): Chair => ({ style: 'Victorian', icon: '🛋️', sitOn: () => "Sitting on a velvet, cushioned chair." }),
  createTable: (): Table => ({ style: 'Victorian', icon: '🪵', putCoffee: () => "Placing coffee on an ornate wooden table." })
};

const RusticFactory = {
  createChair: (): Chair => ({ style: 'Rustic', icon: '🪵', sitOn: () => "Sitting on a rough log bench." }),
  // Rustic Factory does NOT produce tables in this specific scenario (2 kinds of table constraint)
  createTable: (): Table | null => null 
};

type Style = 'Modern' | 'Victorian' | 'Rustic';

const AbstractFactoryDemo: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<Style>('Modern');
  const [inventory, setInventory] = useState<(Chair | Table)[]>([]);

  const handleCreateChair = () => {
    let product;
    if (selectedStyle === 'Modern') product = ModernFactory.createChair();
    else if (selectedStyle === 'Victorian') product = VictorianFactory.createChair();
    else product = RusticFactory.createChair();
    
    setInventory(prev => [product, ...prev]);
  };

  const handleCreateTable = () => {
    let product;
    if (selectedStyle === 'Modern') product = ModernFactory.createTable();
    else if (selectedStyle === 'Victorian') product = VictorianFactory.createTable();
    else product = RusticFactory.createTable();

    if (product) {
      setInventory(prev => [product, ...prev]);
    } else {
      alert(`Sorry! The ${selectedStyle} Factory does not manufacture tables.`);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-2">🪑 Furniture Manufacturing Plant</h3>
        <p className="text-slate-500 mb-6 text-sm">
          Select a factory configuration (Style). The client code (buttons) doesn't need to know the specific class of furniture it's creating, just that it asks the selected factory for a product.
        </p>

        {/* Factory Selection */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {(['Modern', 'Victorian', 'Rustic'] as Style[]).map(style => (
             <button
               key={style}
               onClick={() => setSelectedStyle(style)}
               className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2
                 ${selectedStyle === style ? 'border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-200' : 'border-slate-200 hover:border-slate-300'}
               `}
             >
               <span className="text-2xl">{style === 'Modern' ? '🏙️' : style === 'Victorian' ? '🏰' : '⛺'}</span>
               <span className="font-bold text-sm">{style} Factory</span>
             </button>
          ))}
        </div>

        {/* Client Interface */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
           <h4 className="font-bold text-slate-700 mb-4 uppercase text-xs tracking-wider">Production Control</h4>
           <div className="flex gap-4">
              <button 
                onClick={handleCreateChair}
                className="flex-1 py-3 bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-400 transition-all font-semibold text-slate-700 flex items-center justify-center gap-2"
              >
                <span>🪑</span> Manufacture Chair
              </button>
              <button 
                onClick={handleCreateTable}
                className={`flex-1 py-3 bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow-md transition-all font-semibold text-slate-700 flex items-center justify-center gap-2
                  ${selectedStyle === 'Rustic' ? 'opacity-50 cursor-not-allowed bg-slate-100' : 'hover:border-indigo-400'}
                `}
                title={selectedStyle === 'Rustic' ? 'Not available in this factory' : ''}
              >
                <span>☕</span> Manufacture Table
              </button>
           </div>
           {selectedStyle === 'Rustic' && (
             <div className="text-center text-xs text-orange-500 mt-2 font-medium">
               * The Rustic factory currently only produces chairs (2 kinds of table limit).
             </div>
           )}
        </div>
      </div>

      {/* Showroom / Inventory */}
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-xl border border-slate-300 min-h-[200px]">
         <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-700">Showroom Inventory</h4>
            <button onClick={() => setInventory([])} className="text-xs text-slate-500 hover:text-red-500">Clear Floor</button>
         </div>
         
         <div className="flex flex-wrap gap-4">
            {inventory.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-md border border-slate-200 animate-[pop_0.3s_ease-out] flex flex-col items-center w-32">
                 <div className="text-4xl mb-2">{item.icon}</div>
                 <div className="text-xs font-bold text-slate-800">{item.style}</div>
                 <div className="text-[10px] text-slate-500 uppercase">{'sitOn' in item ? 'Chair' : 'Table'}</div>
              </div>
            ))}
            {inventory.length === 0 && (
              <div className="w-full h-32 flex items-center justify-center text-slate-400 italic">
                No furniture manufactured yet.
              </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default AbstractFactoryDemo;
