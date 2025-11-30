

import React, { useState } from 'react';
import { PATTERNS } from './data';
import { PatternType, PatternCategory, SectionType } from './types';
import CodeViewer from './components/CodeViewer';

// Demos
import ObserverDemo from './components/demos/ObserverDemo';
import StrategyDemo from './components/demos/StrategyDemo';
import FactoryDemo from './components/demos/FactoryDemo';
import AbstractFactoryDemo from './components/demos/AbstractFactoryDemo';
import BuilderDemo from './components/demos/BuilderDemo';
import PrototypeDemo from './components/demos/PrototypeDemo';
import SingletonDemo from './components/demos/SingletonDemo';
import AdapterDemo from './components/demos/AdapterDemo';
import BridgeDemo from './components/demos/BridgeDemo';
import CompositeDemo from './components/demos/CompositeDemo';
import DecoratorDemo from './components/demos/DecoratorDemo';
import FacadeDemo from './components/demos/FacadeDemo';
import FlyweightDemo from './components/demos/FlyweightDemo';
import ProxyDemo from './components/demos/ProxyDemo';
import ChainOfResponsibilityDemo from './components/demos/ChainOfResponsibilityDemo';
import CommandDemo from './components/demos/CommandDemo';
import InterpreterDemo from './components/demos/InterpreterDemo';
import IteratorDemo from './components/demos/IteratorDemo';
import MediatorDemo from './components/demos/MediatorDemo';
import MementoDemo from './components/demos/MementoDemo';
import StateDemo from './components/demos/StateDemo';
import TemplateMethodDemo from './components/demos/TemplateMethodDemo';
import VisitorDemo from './components/demos/VisitorDemo';

// SOLID Demos
import { SrpDemo, OcpDemo, LspDemo, IspDemo, DipDemo } from './components/demos/SolidDemos';

// Architecture Demos
import { 
  MvcDemo, 
  MvvmDemo, 
  MonolithMicroservicesDemo, 
  LayeredDemo, 
  EventDrivenDemo,
  ClientServerDemo,
  ServerlessDemo,
  SagaDemo,
  DddDemo
} from './components/demos/ArchitectureDemos';


const PlaceholderDemo: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-[300px] bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 p-8 text-center">
    <div className="text-5xl mb-4 opacity-50">🚧</div>
    <h3 className="text-lg font-semibold text-slate-600 mb-2">Simulation Under Construction</h3>
    <p className="max-w-md">The interactive demo for <strong>{title}</strong> is currently being built. You can still learn the concepts and key takeaways above!</p>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType | null>(null);
  const [activeTopic, setActiveTopic] = useState<PatternType | null>(null);

  const getSidebarData = () => {
    if (activeSection === SectionType.DESIGN_PATTERNS) {
      return [
        {
          category: PatternCategory.CREATIONAL,
          items: [
            { name: 'Factory Method', id: PatternType.FACTORY },
            { name: 'Abstract Factory', id: PatternType.ABSTRACT_FACTORY },
            { name: 'Builder', id: PatternType.BUILDER },
            { name: 'Prototype', id: PatternType.PROTOTYPE },
            { name: 'Singleton', id: PatternType.SINGLETON },
          ]
        },
        {
          category: PatternCategory.STRUCTURAL,
          items: [
            { name: 'Adapter', id: PatternType.ADAPTER },
            { name: 'Bridge', id: PatternType.BRIDGE },
            { name: 'Composite', id: PatternType.COMPOSITE },
            { name: 'Decorator', id: PatternType.DECORATOR },
            { name: 'Facade', id: PatternType.FACADE },
            { name: 'Flyweight', id: PatternType.FLYWEIGHT },
            { name: 'Proxy', id: PatternType.PROXY },
          ]
        },
        {
          category: PatternCategory.BEHAVIORAL,
          items: [
            { name: 'Chain of Responsibility', id: PatternType.CHAIN_OF_RESPONSIBILITY },
            { name: 'Command', id: PatternType.COMMAND },
            { name: 'Interpreter', id: PatternType.INTERPRETER },
            { name: 'Iterator', id: PatternType.ITERATOR },
            { name: 'Mediator', id: PatternType.MEDIATOR },
            { name: 'Memento', id: PatternType.MEMENTO },
            { name: 'Observer', id: PatternType.OBSERVER },
            { name: 'State', id: PatternType.STATE },
            { name: 'Strategy', id: PatternType.STRATEGY },
            { name: 'Template Method', id: PatternType.TEMPLATE_METHOD },
            { name: 'Visitor', id: PatternType.VISITOR },
          ]
        }
      ];
    }
    
    if (activeSection === SectionType.SOLID) {
      return [{
        category: PatternCategory.SOLID_PRINCIPLES,
        items: [
          { name: 'Single Responsibility', id: PatternType.SRP },
          { name: 'Open/Closed', id: PatternType.OCP },
          { name: 'Liskov Substitution', id: PatternType.LSP },
          { name: 'Interface Segregation', id: PatternType.ISP },
          { name: 'Dependency Inversion', id: PatternType.DIP },
        ]
      }];
    }

    if (activeSection === SectionType.ARCHITECTURE) {
      return [{
        category: PatternCategory.ARCHITECTURE_STYLES,
        items: [
          { name: 'MVC', id: PatternType.MVC },
          { name: 'MVVM', id: PatternType.MVVM },
          { name: 'Monolith', id: PatternType.MONOLITH },
          { name: 'Microservices', id: PatternType.MICROSERVICES },
          { name: 'Layered (N-Tier)', id: PatternType.LAYERED },
          { name: 'Event-Driven', id: PatternType.EVENT_DRIVEN },
          { name: 'Domain-Driven Design', id: PatternType.DDD },
          { name: 'Saga Pattern', id: PatternType.SAGA },
          { name: 'Serverless', id: PatternType.SERVERLESS },
          { name: 'Client-Server', id: PatternType.CLIENT_SERVER },
        ]
      }];
    }

    return [];
  };

  const renderDemo = () => {
    switch (activeTopic) {
      // Creational
      case PatternType.FACTORY: return <FactoryDemo />;
      case PatternType.ABSTRACT_FACTORY: return <AbstractFactoryDemo />;
      case PatternType.BUILDER: return <BuilderDemo />;
      case PatternType.PROTOTYPE: return <PrototypeDemo />;
      case PatternType.SINGLETON: return <SingletonDemo />;
      
      // Structural
      case PatternType.ADAPTER: return <AdapterDemo />;
      case PatternType.BRIDGE: return <BridgeDemo />;
      case PatternType.COMPOSITE: return <CompositeDemo />;
      case PatternType.DECORATOR: return <DecoratorDemo />;
      case PatternType.FACADE: return <FacadeDemo />;
      case PatternType.FLYWEIGHT: return <FlyweightDemo />;
      case PatternType.PROXY: return <ProxyDemo />;
      
      // Behavioral
      case PatternType.OBSERVER: return <ObserverDemo />;
      case PatternType.STRATEGY: return <StrategyDemo />;
      case PatternType.CHAIN_OF_RESPONSIBILITY: return <ChainOfResponsibilityDemo />;
      case PatternType.COMMAND: return <CommandDemo />;
      case PatternType.INTERPRETER: return <InterpreterDemo />;
      case PatternType.ITERATOR: return <IteratorDemo />;
      case PatternType.MEDIATOR: return <MediatorDemo />;
      case PatternType.MEMENTO: return <MementoDemo />;
      case PatternType.STATE: return <StateDemo />;
      case PatternType.TEMPLATE_METHOD: return <TemplateMethodDemo />;
      case PatternType.VISITOR: return <VisitorDemo />;

      // SOLID
      case PatternType.SRP: return <SrpDemo />;
      case PatternType.OCP: return <OcpDemo />;
      case PatternType.LSP: return <LspDemo />;
      case PatternType.ISP: return <IspDemo />;
      case PatternType.DIP: return <DipDemo />;

      // Architecture
      case PatternType.MVC: return <MvcDemo />;
      case PatternType.MVVM: return <MvvmDemo />;
      case PatternType.MONOLITH: return <MonolithMicroservicesDemo />;
      case PatternType.MICROSERVICES: return <MonolithMicroservicesDemo />;
      case PatternType.LAYERED: return <LayeredDemo />;
      case PatternType.EVENT_DRIVEN: return <EventDrivenDemo />;
      case PatternType.CLIENT_SERVER: return <ClientServerDemo />;
      case PatternType.SERVERLESS: return <ServerlessDemo />;
      case PatternType.SAGA: return <SagaDemo />;
      case PatternType.DDD: return <DddDemo />;
      
      default: return <PlaceholderDemo title={PATTERNS[activeTopic as PatternType]?.title || 'this pattern'} />;
    }
  };

  const currentData = activeTopic ? PATTERNS[activeTopic] : null;

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar - Only visible if a section is selected */}
      {activeSection && (
        <aside className="w-20 lg:w-72 bg-slate-900 text-slate-300 flex flex-col flex-shrink-0 transition-all z-20 shadow-2xl">
          <div className="p-6 font-bold text-white text-xl tracking-tight flex flex-col gap-1 border-b border-slate-800 bg-slate-900 cursor-pointer" onClick={() => { setActiveSection(null); setActiveTopic(null); }}>
             <span className="text-xs text-indigo-400 uppercase tracking-wider font-semibold hover:text-indigo-300 transition-colors">← Back to Home</span>
             <span className="truncate text-lg lg:text-xl leading-tight mt-2">
               {currentData ? currentData.title : (activeSection === SectionType.DESIGN_PATTERNS ? 'Design Patterns' : activeSection === SectionType.SOLID ? 'SOLID Principles' : 'Architecture')}
             </span>
          </div>
          
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6 custom-scrollbar">
            <div>
              <div className="space-y-6">
                {getSidebarData().map((group) => (
                  <div key={group.category}>
                    <h4 className="px-2 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2 opacity-80">
                      {group.category}
                    </h4>
                    <div className="space-y-1">
                      {group.items.map((p) => {
                        const isActive = activeTopic === p.id;
                        
                        return (
                          <button
                            key={p.name}
                            onClick={() => { if (p.id) setActiveTopic(p.id); }}
                            className={`w-full text-left px-3 py-2 rounded-md transition-all text-sm
                              ${isActive 
                                ? 'bg-slate-800 text-white font-medium border-l-2 border-indigo-500' 
                                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50' 
                              }
                            `}
                          >
                            <div className="flex justify-between items-center">
                              <span>{p.name}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative bg-slate-50">
        
        {/* VIEW 1: GLOBAL HOME (3 TILES) */}
        {!activeSection && (
          <div className="flex-1 overflow-y-auto p-6 lg:p-12 flex flex-col items-center justify-center">
             <div className="max-w-5xl w-full">
                <header className="text-center mb-16">
                   <h1 className="text-4xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                     Let's Upskill
                     <span className="block text-2xl lg:text-3xl font-normal text-indigo-600 mt-4 tracking-normal font-mono">
                        Master Software Engineering. Interactively.
                     </span>
                   </h1>
                   <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                     Select a module to begin your journey.
                   </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {/* Card 1: Design Patterns */}
                   <button 
                     onClick={() => {
                       setActiveSection(SectionType.DESIGN_PATTERNS);
                       setActiveTopic(PatternType.FACTORY);
                     }}
                     className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl hover:border-indigo-500 transition-all text-left relative overflow-hidden h-80 flex flex-col justify-end"
                   >
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                         <span className="text-9xl font-black">DP</span>
                      </div>
                      <div className="text-5xl mb-6">🧩</div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Design Patterns</h2>
                      <p className="text-slate-500 text-sm leading-relaxed">Gang of Four patterns. Reusable solutions to common software problems.</p>
                   </button>

                   {/* Card 2: SOLID */}
                   <button 
                     onClick={() => {
                        setActiveSection(SectionType.SOLID);
                        setActiveTopic(PatternType.SRP);
                     }}
                     className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl hover:border-green-500 transition-all text-left relative overflow-hidden h-80 flex flex-col justify-end"
                   >
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                         <span className="text-9xl font-black">S</span>
                      </div>
                      <div className="text-5xl mb-6">💎</div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">SOLID Principles</h2>
                      <p className="text-slate-500 text-sm leading-relaxed">Five essential principles for writing clean, maintainable, and scalable object-oriented code.</p>
                   </button>

                   {/* Card 3: Architecture */}
                   <button 
                     onClick={() => {
                        setActiveSection(SectionType.ARCHITECTURE);
                        setActiveTopic(PatternType.MVC);
                     }}
                     className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all text-left relative overflow-hidden h-80 flex flex-col justify-end"
                   >
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                         <span className="text-9xl font-black">AR</span>
                      </div>
                      <div className="text-5xl mb-6">🏛️</div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Software Architecture</h2>
                      <p className="text-slate-500 text-sm leading-relaxed">High-level structures. MVC, MVVM, Microservices, and more.</p>
                   </button>
                </div>
             </div>
          </div>
        )}

        {/* VIEW 2: SECTION OVERVIEW OR TOPIC DETAIL */}
        {activeSection && (
          <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
             <div className="max-w-6xl mx-auto p-6 lg:p-12 space-y-16">
                
                {/* SECTION HOME (If no specific topic selected) */}
                {!activeTopic && (
                  <div className="flex flex-col items-center justify-center h-full pt-20">
                     <div className="text-6xl mb-6">
                        {activeSection === SectionType.DESIGN_PATTERNS ? '🧩' : activeSection === SectionType.SOLID ? '💎' : '🏛️'}
                     </div>
                     <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center capitalize">
                       {activeSection.replace('_', ' ')}
                     </h2>
                     <p className="text-xl text-slate-500 text-center max-w-xl">
                       Select a topic from the sidebar to view its concept, explanation, and interactive demo.
                     </p>
                  </div>
                )}

                {/* TOPIC CONTENT */}
                {activeTopic && currentData && (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 border border-indigo-200">
                          {currentData.category}
                        </span>
                      </div>
                      <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                        {currentData.title}
                      </h1>
                    </div>

                    {/* CONCEPT SECTION */}
                    <section>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                          <div className="lg:col-span-8">
                              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span>💡</span> Core Concept
                              </h2>
                              <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
                                <p>{currentData.concept}</p>
                              </div>
                              
                              <div className="mt-8">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Why use it?</h3>
                                <div className="grid gap-3">
                                    {currentData.whyUseIt.map((reason, i) => (
                                      <div key={i} className="flex gap-3 items-start p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</div>
                                        <span className="text-slate-700 text-sm font-medium">{reason}</span>
                                      </div>
                                    ))}
                                </div>
                              </div>
                          </div>
                        </div>
                    </section>
                    
                    {/* ANALOGY SECTION OR USE CASE SECTION */}
                    {currentData.analogy && (
                      <section>
                         <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <span>📖</span> Real World Analogy
                         </h2>
                         <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl text-slate-700 leading-relaxed text-lg shadow-sm">
                            {currentData.analogy}
                         </div>
                      </section>
                    )}

                    {currentData.useCase && (
                      <section>
                         <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <span>🌍</span> Real World Use Case
                         </h2>
                         <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl text-slate-700 leading-relaxed text-lg shadow-sm">
                            {currentData.useCase}
                         </div>
                      </section>
                    )}

                    {/* DEMO SECTION */}
                    <section className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden ring-1 ring-slate-100">
                      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex justify-between items-center">
                          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                            <span>🎮</span> Interactive Demo
                          </h2>
                          <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Live Simulation</span>
                      </div>
                      <div className="p-6 lg:p-8">
                          {renderDemo()}
                      </div>
                    </section>

                    {/* TECHNICAL DEFINITION SECTION */}
                    {currentData.technicalDefinition && (
                      <section>
                         <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <span>🎓</span> Technical Definition
                         </h2>
                         <div className="bg-slate-100 border-l-4 border-indigo-500 p-6 rounded-r-xl italic text-slate-700 leading-relaxed font-serif text-lg">
                            "{currentData.technicalDefinition}"
                         </div>
                      </section>
                    )}

                    {/* CODE SECTION (Replaces UML) */}
                    {currentData.code && (
                      <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <span>💻</span> Code Implementation
                        </h2>
                        <CodeViewer code={currentData.code} />
                      </section>
                    )}

                    {/* KEY TAKEAWAYS */}
                    <section>
                      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                          <span>🔑</span> Key Takeaways
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentData.takeaways.map((point, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg shadow-indigo-200">
                                  {i + 1}
                                </div>
                                <span className="text-slate-700 font-medium pt-1">{point}</span>
                            </div>
                          ))}
                      </div>
                    </section>

                    <div className="h-20"></div> {/* Bottom spacer */}
                  </>
                )}
             </div>
          </div>
        )}
      </main>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </div>
  );
};

export default App;