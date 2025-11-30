
import React, { useState } from 'react';

type ProductType = 'circle' | 'square' | 'triangle';

interface Product {
  id: number;
  type: ProductType;
  color: string;
  createdAt: number;
}

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

const FactoryDemo: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedFactory, setSelectedFactory] = useState<ProductType>('circle');
  
  const createProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      type: selectedFactory,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      createdAt: Date.now()
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const clearProducts = () => setProducts([]);

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">🏭 Shape Factory</h3>
          <p className="text-slate-500 text-sm">Client code asks the factory for a shape, not knowing the specific class implementation.</p>
        </div>
        
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-lg border border-slate-200">
           <div className="flex gap-2 flex-wrap">
             <button 
                onClick={() => setSelectedFactory('circle')}
                className={`px-4 py-2 rounded font-medium transition-colors ${selectedFactory === 'circle' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
             >Circle Factory</button>
             <button 
                onClick={() => setSelectedFactory('square')}
                className={`px-4 py-2 rounded font-medium transition-colors ${selectedFactory === 'square' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
             >Square Factory</button>
             <button 
                onClick={() => setSelectedFactory('triangle')}
                className={`px-4 py-2 rounded font-medium transition-colors ${selectedFactory === 'triangle' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
             >Triangle Factory</button>
           </div>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={createProduct}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 font-medium"
          >
            Produce Shape
          </button>
          <button 
            onClick={clearProducts}
            className="px-4 py-2.5 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 min-h-[300px] relative">
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.map((p) => (
              <div key={p.id} className="aspect-square flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm animate-[pop_0.4s_ease-out]">
                <div 
                  className="w-16 h-16 transition-all"
                  style={{
                    backgroundColor: p.color,
                    borderRadius: p.type === 'circle' ? '50%' : p.type === 'square' ? '8px' : '0',
                    clipPath: p.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
                  }}
                />
                <span className="mt-3 text-xs font-mono text-slate-400 uppercase tracking-wide">{p.type}</span>
              </div>
            ))}
            {products.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                <span className="text-4xl mb-4">📦</span>
                <p>Factory floor is empty. Start production!</p>
              </div>
            )}
         </div>
      </div>
      <style>{`
        @keyframes pop {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FactoryDemo;
