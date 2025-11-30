

import React, { useState } from 'react';

interface Expression {
  interpret(context: Record<string, number>): number;
}

class NumberExpression implements Expression {
  constructor(private value: number) {}
  interpret() { return this.value; }
}

class PlusExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(context: Record<string, number>) {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

class MinusExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(context: Record<string, number>) {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}

const InterpreterDemo: React.FC = () => {
  const [input, setInput] = useState("5 10 +");
  const [result, setResult] = useState<number | null>(null);

  // Simple RPN Parser (Reverse Polish Notation) for demo
  // "5 10 +" -> 15
  const parseAndInterpret = () => {
    const stack: Expression[] = [];
    const tokens = input.split(' ');

    tokens.forEach(token => {
      if (token === '+') {
        const right = stack.pop()!;
        const left = stack.pop()!;
        stack.push(new PlusExpression(left, right));
      } else if (token === '-') {
        const right = stack.pop()!;
        const left = stack.pop()!;
        stack.push(new MinusExpression(left, right));
      } else {
        stack.push(new NumberExpression(parseInt(token)));
      }
    });

    if (stack.length === 1) {
      setResult(stack[0].interpret({}));
    } else {
      setResult(NaN); // Error
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-800 mb-2">RPN Math Interpreter</h3>
        <p className="text-sm text-slate-500 mb-4">Enter numbers and operators (+, -) in postfix notation.</p>
        
        <div className="flex gap-4">
           <input 
             type="text" 
             value={input} 
             onChange={(e) => setInput(e.target.value)}
             className="flex-1 border border-slate-300 rounded-lg px-4 py-2 font-mono text-lg bg-white text-slate-900 shadow-sm"
             placeholder="e.g. 10 5 +"
           />
           <button 
             onClick={parseAndInterpret}
             className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700"
           >
             Interpret
           </button>
        </div>
      </div>

      <div className="bg-slate-900 text-green-400 p-8 rounded-xl font-mono text-3xl text-center shadow-inner">
         {result !== null ? (
           isNaN(result) ? <span className="text-red-400">Syntax Error</span> : result
         ) : (
           <span className="opacity-30 text-xl">Waiting...</span>
         )}
      </div>
      
      <div className="bg-amber-50 p-4 rounded text-sm text-amber-800 border border-amber-100">
         <strong>Example:</strong> "10 5 -" means (10 - 5). "5 5 + 2 -" means (5 + 5 - 2).
         The Interpreter builds an expression tree object structure to evaluate this string.
      </div>
    </div>
  );
};

export default InterpreterDemo;
