
import React, { useState } from 'react';

// 1. Component Interface
interface Character {
  getDescription(): string;
  getAttack(): number;
  getDefense(): number;
}

// 2. Concrete Component
class BaseCharacter implements Character {
  getDescription() { return "Novice Adventurer"; }
  getAttack() { return 10; }
  getDefense() { return 5; }
}

// 3. Decorators
abstract class CharacterDecorator implements Character {
  constructor(protected character: Character) {}
  abstract getDescription(): string;
  abstract getAttack(): number;
  abstract getDefense(): number;
}

class Sword extends CharacterDecorator {
  getDescription() { return this.character.getDescription() + " with Sword"; }
  getAttack() { return this.character.getAttack() + 15; }
  getDefense() { return this.character.getDefense() + 2; }
}

class IronArmor extends CharacterDecorator {
  getDescription() { return this.character.getDescription() + " in Iron Armor"; }
  getAttack() { return this.character.getAttack(); } // No attack boost
  getDefense() { return this.character.getDefense() + 20; }
}

class MagicAura extends CharacterDecorator {
  getDescription() { return "Enchanted " + this.character.getDescription(); }
  getAttack() { return this.character.getAttack() + 10; }
  getDefense() { return this.character.getDefense() + 10; }
}

const DecoratorDemo: React.FC = () => {
  const [equipment, setEquipment] = useState<string[]>([]);

  // Re-compose the object on every render based on state
  let hero: Character = new BaseCharacter();
  
  // Apply decorators in order
  equipment.forEach(item => {
    if (item === 'sword') hero = new Sword(hero);
    if (item === 'armor') hero = new IronArmor(hero);
    if (item === 'aura') hero = new MagicAura(hero);
  });

  const toggleItem = (item: string) => {
    if (equipment.includes(item)) {
      setEquipment(prev => prev.filter(i => i !== item));
    } else {
      setEquipment(prev => [...prev, item]);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
       <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-800">
         <strong>Analogy:</strong> In an RPG, equipping items wraps the character in new layers. The character object itself remains the same, but the "Decorators" (Armor, Weapon) intercept calls to calculate stats, adding their own values to the result.
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CONTROL PANEL */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <h3 className="font-bold text-slate-800 mb-6">🎒 Equipment Inventory</h3>
             
             <div className="space-y-4">
                <button 
                  onClick={() => toggleItem('sword')}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl border-2 transition-all group
                    ${equipment.includes('sword') ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-red-300'}
                  `}
                >
                  <div className="text-2xl">⚔️</div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-slate-700">Rusty Broadsword</div>
                    <div className="text-xs text-slate-500">+15 Atk, +2 Def</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${equipment.includes('sword') ? 'bg-red-500 border-red-500 text-white' : 'border-slate-300'}`}>
                    {equipment.includes('sword') && '✓'}
                  </div>
                </button>

                <button 
                  onClick={() => toggleItem('armor')}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl border-2 transition-all group
                    ${equipment.includes('armor') ? 'border-slate-600 bg-slate-100' : 'border-slate-200 hover:border-slate-400'}
                  `}
                >
                  <div className="text-2xl">🛡️</div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-slate-700">Iron Plate Body</div>
                    <div className="text-xs text-slate-500">+0 Atk, +20 Def</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${equipment.includes('armor') ? 'bg-slate-600 border-slate-600 text-white' : 'border-slate-300'}`}>
                    {equipment.includes('armor') && '✓'}
                  </div>
                </button>

                <button 
                  onClick={() => toggleItem('aura')}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl border-2 transition-all group
                    ${equipment.includes('aura') ? 'border-purple-500 bg-purple-50' : 'border-slate-200 hover:border-purple-300'}
                  `}
                >
                  <div className="text-2xl">✨</div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-slate-700">Magic Aura</div>
                    <div className="text-xs text-slate-500">+10 Atk, +10 Def</div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${equipment.includes('aura') ? 'bg-purple-500 border-purple-500 text-white' : 'border-slate-300'}`}>
                    {equipment.includes('aura') && '✓'}
                  </div>
                </button>
             </div>
          </div>

          {/* VISUALIZATION */}
          <div className="bg-slate-900 rounded-xl p-8 flex flex-col items-center justify-between relative overflow-hidden shadow-inner">
             {/* Character Visual Stack */}
             <div className="relative w-40 h-40 flex items-center justify-center mt-4">
                {/* Base */}
                <div className="text-[100px] absolute z-10 transition-transform hover:scale-105 cursor-default" title="Base Character">
                  🧍
                </div>
                
                {/* Decorators Layered visually */}
                {equipment.includes('armor') && (
                  <div className="text-[60px] absolute z-20 top-10 left-8 animate-[pop_0.3s]">🛡️</div>
                )}
                {equipment.includes('sword') && (
                  <div className="text-[60px] absolute z-20 top-8 right-0 rotate-12 animate-[pop_0.3s]">⚔️</div>
                )}
                {equipment.includes('aura') && (
                  <div className="absolute inset-0 z-0 bg-purple-500/30 blur-xl rounded-full animate-pulse"></div>
                )}
             </div>

             {/* Stats Panel */}
             <div className="w-full bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-600 mt-8">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-600 pb-2">
                  Stats Calculator
                </div>
                
                <div className="flex justify-between items-center mb-2">
                   <span className="text-red-400 font-bold">Attack Power</span>
                   <div className="flex items-center gap-2">
                      <div className="h-2 w-32 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 transition-all duration-500" style={{ width: `${(hero.getAttack() / 50) * 100}%` }}></div>
                      </div>
                      <span className="text-white font-mono w-6 text-right">{hero.getAttack()}</span>
                   </div>
                </div>

                <div className="flex justify-between items-center">
                   <span className="text-blue-400 font-bold">Defense Power</span>
                   <div className="flex items-center gap-2">
                      <div className="h-2 w-32 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${(hero.getDefense() / 50) * 100}%` }}></div>
                      </div>
                      <span className="text-white font-mono w-6 text-right">{hero.getDefense()}</span>
                   </div>
                </div>
                
                <div className="mt-4 text-xs text-slate-400 italic text-center">
                   "{hero.getDescription()}"
                </div>
             </div>
          </div>
       </div>
       <style>{`
        @keyframes pop {
          0% { transform: scale(0); opacity: 0; }
          80% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
       `}</style>
    </div>
  );
};

export default DecoratorDemo;
