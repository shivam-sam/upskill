
import React, { useState, useEffect } from 'react';

// Intrinsic State (Shared)
class TreeType {
  constructor(public name: string, public color: string, public icon: string) {}
  draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.font = '20px serif';
    ctx.fillStyle = this.color;
    ctx.fillText(this.icon, x, y);
  }
}

// Factory
class TreeFactory {
  static types: Record<string, TreeType> = {};
  static getTreeType(name: string, color: string, icon: string) {
    const key = name + color;
    if (!this.types[key]) {
      this.types[key] = new TreeType(name, color, icon);
    }
    return this.types[key];
  }
}

// Extrinsic State (Unique)
interface Tree {
  x: number;
  y: number;
  type: TreeType;
}

const FlyweightDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const treesRef = React.useRef<Tree[]>([]);

  const addTrees = (amount: number) => {
    // Only 2 tree types (objects) are created in memory, but referenced thousands of times
    const oak = TreeFactory.getTreeType('Oak', 'green', '🌳');
    const pine = TreeFactory.getTreeType('Pine', 'darkgreen', '🌲');

    for (let i = 0; i < amount; i++) {
      const type = Math.random() > 0.5 ? oak : pine;
      treesRef.current.push({
        x: Math.random() * 600,
        y: Math.random() * 300,
        type: type
      });
    }
    setCount(prev => prev + amount);
    draw();
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    treesRef.current.forEach(tree => {
      tree.type.draw(ctx, tree.x, tree.y);
    });
  };

  useEffect(() => { draw(); }, []);

  const memoryUsage = Object.keys(TreeFactory.types).length; // Only 2 objects!

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
         <div>
            <h3 className="font-bold text-slate-800">🌲 Forest Renderer</h3>
            <p className="text-sm text-slate-500 mt-1">
              Total Trees: <strong className="text-slate-900">{count}</strong>
              <span className="mx-2">|</span> 
              Tree Objects in Memory: <strong className="text-green-600">{memoryUsage}</strong> (Flyweights)
            </p>
         </div>
         <div className="flex gap-2">
            <button 
              onClick={() => addTrees(100)}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Plant 100
            </button>
            <button 
              onClick={() => addTrees(1000)}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Plant 1000
            </button>
            <button 
              onClick={() => { treesRef.current = []; setCount(0); draw(); }}
              className="px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
            >
              Clear
            </button>
         </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-inner relative h-[300px]">
        <canvas 
          ref={canvasRef}
          width={600}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 text-xs text-slate-400">
          *Canvas render simulates game engine
        </div>
      </div>
    </div>
  );
};

export default FlyweightDemo;
