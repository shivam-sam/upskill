
import React, { useState } from 'react';

// Handler Interface
abstract class Approver {
  protected next: Approver | null = null;
  setNext(next: Approver): Approver {
    this.next = next;
    return next;
  }
  abstract handle(amount: number): string;
}

// Concrete Handlers
class TeamLead extends Approver {
  handle(amount: number) {
    if (amount <= 100) return "✅ Approved by Team Lead";
    return this.next ? this.next.handle(amount) : "❌ Request too large for everyone.";
  }
}

class Manager extends Approver {
  handle(amount: number) {
    if (amount <= 1000) return "✅ Approved by Manager";
    return this.next ? this.next.handle(amount) : "❌ Request too large for everyone.";
  }
}

class CEO extends Approver {
  handle(amount: number) {
    if (amount <= 5000) return "✅ Approved by CEO";
    return "❌ Denied by CEO (Too expensive!)";
  }
}

// Build Chain
const lead = new TeamLead();
const manager = new Manager();
const ceo = new CEO();
lead.setNext(manager).setNext(ceo);

const ChainOfResponsibilityDemo: React.FC = () => {
  const [amount, setAmount] = useState(50);
  const [result, setResult] = useState<string | null>(null);
  const [activeHandler, setActiveHandler] = useState<string | null>(null);

  const handleSubmit = () => {
    setResult(null);
    setActiveHandler(null);
    
    // Simulate visual delay for chain traversal
    const steps = [
      { handler: 'Lead', limit: 100 },
      { handler: 'Manager', limit: 1000 },
      { handler: 'CEO', limit: 5000 }
    ];

    let currentStep = 0;
    
    const tick = () => {
      if (currentStep >= steps.length) {
        setResult(lead.handle(amount));
        return;
      }
      
      setActiveHandler(steps[currentStep].handler);
      
      if (amount <= steps[currentStep].limit) {
        setTimeout(() => {
          setResult(`${steps[currentStep].handler} approved it!`);
        }, 600);
      } else {
        currentStep++;
        setTimeout(tick, 600);
      }
    };
    
    tick();
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
         <h3 className="font-bold text-slate-800 mb-4">💰 Expense Approval System</h3>
         <div className="flex items-center justify-center gap-4">
            <input 
              type="range" min="10" max="6000" step="10"
              value={amount} onChange={(e) => setAmount(Number(e.target.value))}
              className="w-64 accent-indigo-600"
            />
            <span className="font-mono text-xl font-bold text-indigo-700 w-24">${amount}</span>
         </div>
         <button 
           onClick={handleSubmit}
           className="mt-4 px-8 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 active:scale-95 transition-all"
         >
           Submit Request
         </button>
      </div>

      <div className="flex justify-between items-center relative py-8 px-4 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
         {/* Connector Line */}
         <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-0"></div>

         {['Lead', 'Manager', 'CEO'].map((role) => (
           <div key={role} className={`relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center border-4 shadow-sm bg-white transition-all duration-300
             ${activeHandler === role ? 'border-yellow-400 scale-110 ring-4 ring-yellow-100' : 'border-slate-300'}
             ${result && result.includes(role) ? 'border-green-500 bg-green-50' : ''}
           `}>
             <span className="text-2xl">{role === 'Lead' ? '🧑‍💻' : role === 'Manager' ? '👔' : '🎩'}</span>
             <span className="text-xs font-bold mt-1 text-slate-600">{role}</span>
             <span className="text-[10px] text-slate-400">
               {role === 'Lead' ? '< $100' : role === 'Manager' ? '< $1k' : '< $5k'}
             </span>
           </div>
         ))}
      </div>

      {result && (
        <div className={`p-4 text-center rounded-lg font-bold text-lg animate-[fadeIn_0.5s]
          ${result.includes('Approved') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
        `}>
          {result}
        </div>
      )}
    </div>
  );
};

export default ChainOfResponsibilityDemo;
