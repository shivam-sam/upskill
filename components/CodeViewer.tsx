
import React, { useState } from 'react';

interface CodeViewerProps {
  code: {
    typescript: string;
    python: string;
    cpp: string;
  };
}

type Language = 'typescript' | 'python' | 'cpp';

const CodeViewer: React.FC<CodeViewerProps> = ({ code }) => {
  const [language, setLanguage] = useState<Language>('typescript');

  const getLanguageName = (lang: Language) => {
    switch (lang) {
      case 'typescript': return 'TypeScript / JS';
      case 'python': return 'Python';
      case 'cpp': return 'C++';
    }
  };

  return (
    <div className="flex flex-col border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-slate-900 text-slate-200">
      <div className="flex items-center bg-slate-800 border-b border-slate-700">
        <div className="px-4 py-3 font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
          Implementation
        </div>
        <div className="flex">
          {(['typescript', 'python', 'cpp'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-4 py-3 text-xs font-bold transition-colors border-r border-slate-700
                ${language === lang 
                  ? 'bg-slate-900 text-indigo-400 border-t-2 border-t-indigo-500' 
                  : 'bg-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-700 border-t-2 border-t-transparent'}
              `}
            >
              {getLanguageName(lang)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-0 overflow-x-auto relative group">
        <pre className="p-6 text-sm font-mono leading-relaxed tab-4">
          <code className="language-typescript">
            {code[language]}
          </code>
        </pre>
        <button 
          onClick={() => navigator.clipboard.writeText(code[language])}
          className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default CodeViewer;
