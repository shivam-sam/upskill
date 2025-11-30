
import React, { useState } from 'react';

interface RobotParts {
  head: string;
  torso: string;
  arms: string;
  legs: string;
}

const BuilderDemo: React.FC = () => {
  const [robot, setRobot] = useState<RobotParts>({
    head: 'basic',
    torso: 'basic',
    arms: 'basic',
    legs: 'basic',
  });

  const getEmoji = (part: string, type: 'head' | 'torso' | 'arms' | 'legs') => {
    const map: any = {
      head: { basic: '😐', warrior: '😠', alien: '👽', tech: '🤖' },
      torso: { basic: '👕', warrior: '🛡️', alien: '🟢', tech: '🎛️' },
      arms: { basic: '💪', warrior: '🗡️', alien: '🛸', tech: '🔧' },
      legs: { basic: '👖', warrior: '🦵', alien: '🐙', tech: '⚙️' },
    };
    return map[type][part];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-6">🛠️ Robot Builder</h3>
        
        <div className="space-y-6">
          {(Object.keys(robot) as Array<keyof RobotParts>).map((part) => (
            <div key={part} className="space-y-2">
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{part}</label>
              <div className="flex gap-2">
                {['basic', 'warrior', 'alien', 'tech'].map((style) => (
                  <button
                    key={style}
                    onClick={() => setRobot(prev => ({ ...prev, [part]: style }))}
                    className={`flex-1 py-2 text-2xl rounded-lg border transition-all hover:-translate-y-1
                      ${robot[part] === style ? 'bg-indigo-50 border-indigo-500 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50'}
                    `}
                    title={style}
                  >
                    {getEmoji(style, part)}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-100">
           <button 
             onClick={() => setRobot({ head: 'basic', torso: 'basic', arms: 'basic', legs: 'basic' })}
             className="text-sm text-slate-400 hover:text-red-500 transition-colors"
           >
             Reset Builder
           </button>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950"></div>
         
         <div className="relative z-10 flex flex-col items-center animate-[bounce_2s_infinite]">
            <div className="text-6xl mb-[-10px] z-20 transition-all duration-300 transform hover:scale-110">{getEmoji(robot.head, 'head')}</div>
            <div className="flex items-center justify-center -space-x-4 z-10">
               <div className="text-5xl transform -rotate-12 origin-top-right transition-all duration-300 hover:rotate-0">{getEmoji(robot.arms, 'arms')}</div>
               <div className="text-7xl z-10 transition-all duration-300 hover:scale-105">{getEmoji(robot.torso, 'torso')}</div>
               <div className="text-5xl transform rotate-12 origin-top-left transition-all duration-300 hover:rotate-0">{getEmoji(robot.arms, 'arms')}</div>
            </div>
            <div className="text-6xl mt-[-15px] z-0 transition-all duration-300 transform hover:scale-110">{getEmoji(robot.legs, 'legs')}</div>
         </div>

         <div className="mt-12 text-center relative z-10">
           <div className="inline-block px-4 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">
             Product Ready
           </div>
           <h2 className="text-2xl font-bold text-white mt-2 capitalize">
             {robot.head === robot.torso && robot.torso === robot.arms ? `Full ${robot.head} Bot` : 'Custom Hybrid Bot'}
           </h2>
         </div>
      </div>
    </div>
  );
};

export default BuilderDemo;
