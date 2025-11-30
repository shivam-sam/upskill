
import React from 'react';
import { UMLNode, UMLEdge } from '../types';

interface UMLDiagramProps {
  nodes: UMLNode[];
  edges: UMLEdge[];
}

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;
const NODE_WIDTH = 160;
const NODE_HEIGHT = 100;

// Helper to calculate the intersection point between a line and a rectangle
// Used to make arrows stop exactly at the box edge
const getIntersection = (p1: {x: number, y: number}, p2: {x: number, y: number}, rect: {x: number, y: number, w: number, h: number}) => {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  
  // Potential t values for intersection with left, right, top, bottom
  const tLeft = (rect.x - NODE_WIDTH/2 - p1.x) / dx;
  const tRight = (rect.x + NODE_WIDTH/2 - p1.x) / dx;
  const tTop = (rect.y - NODE_HEIGHT/2 - p1.y) / dy;
  const tBottom = (rect.y + NODE_HEIGHT/2 - p1.y) / dy;

  const tValues = [tLeft, tRight, tTop, tBottom].filter(t => t >= 0 && t <= 1);
  const t = Math.min(...tValues);

  if (isFinite(t)) {
    return { x: p1.x + dx * t, y: p1.y + dy * t };
  }
  return p2; // Fallback
};

const UMLDiagram: React.FC<UMLDiagramProps> = ({ nodes, edges }) => {
  
  const getNodePos = (id: string) => {
    const node = nodes.find(n => n.id === id);
    if (!node) return { x: 0, y: 0 };
    return { 
      x: (node.x / 100) * CANVAS_WIDTH, 
      y: (node.y / 100) * CANVAS_HEIGHT 
    };
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* Diagram Canvas */}
      <div className="flex-1 overflow-x-auto bg-slate-50 rounded-xl border border-slate-200 shadow-inner">
        <div className="min-w-[600px] w-full relative" style={{ aspectRatio: `${CANVAS_WIDTH}/${CANVAS_HEIGHT}` }}>
          <svg 
            viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`} 
            className="w-full h-full pointer-events-none"
          >
            <defs>
              <marker id="arrow-solid" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#475569" />
              </marker>
              <marker id="arrow-open" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L9,3 L0,6" fill="none" stroke="#475569" strokeWidth="1.5" />
              </marker>
              <marker id="arrow-diamond" markerWidth="12" markerHeight="10" refX="12" refY="5" orient="auto">
                <path d="M0,5 L6,0 L12,5 L6,10 z" fill="white" stroke="#475569" strokeWidth="1.5" />
              </marker>
              <marker id="arrow-triangle-empty" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto">
                <path d="M0,10 L11,5 L0,0 z" fill="white" stroke="#475569" strokeWidth="1.5" />
              </marker>
            </defs>

            {edges.map((edge, i) => {
              const start = getNodePos(edge.from);
              const target = getNodePos(edge.to);
              
              // Calculate intersection to clip the line at the target box
              const end = getIntersection(start, target, { ...target, w: NODE_WIDTH, h: NODE_HEIGHT });

              let strokeDasharray = "0";
              let markerEnd = "url(#arrow-open)";
              
              if (edge.type === 'implements' || edge.type === 'dependency') {
                strokeDasharray = "5,5";
              }
              
              if (edge.type === 'implements' || edge.type === 'extends') {
                markerEnd = "url(#arrow-triangle-empty)";
              } else if (edge.type === 'creates') {
                strokeDasharray = "5,5";
                markerEnd = "url(#arrow-open)";
              } else if (edge.type === 'association') {
                markerEnd = "url(#arrow-open)";
              }

              return (
                <g key={i}>
                  <line 
                    x1={start.x} y1={start.y} 
                    x2={end.x} y2={end.y} 
                    stroke="#475569" 
                    strokeWidth="1.5"
                    strokeDasharray={strokeDasharray}
                    markerEnd={markerEnd}
                  />
                  {edge.label && (
                    <g transform={`translate(${(start.x + end.x) / 2}, ${(start.y + end.y) / 2})`}>
                      <rect x="-20" y="-8" width="40" height="16" fill="white" rx="4" opacity="0.9" />
                      <text 
                        y="3" 
                        textAnchor="middle" 
                        className="text-[10px] fill-slate-600 font-mono font-bold"
                      >
                        {edge.label}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            {nodes.map((node) => {
              const pos = getNodePos(node.id);
              const isInterface = node.type === 'interface';
              const isAbstract = node.type === 'abstract';
              
              return (
                <foreignObject 
                  key={node.id} 
                  x={pos.x - NODE_WIDTH/2} 
                  y={pos.y - NODE_HEIGHT/2} 
                  width={NODE_WIDTH} 
                  height={NODE_HEIGHT}
                  className="overflow-visible"
                >
                  <div className={`
                    w-full h-full bg-white rounded-md flex flex-col shadow-lg transition-transform hover:scale-105
                    ${isInterface ? 'border-2 border-indigo-400 border-dashed' : isAbstract ? 'border-2 border-slate-600 italic' : 'border-2 border-slate-700'}
                  `}>
                    <div className={`
                      px-2 py-1.5 text-center border-b text-sm
                      ${isInterface ? 'bg-indigo-50 border-indigo-200 text-indigo-800' : 'bg-slate-100 border-slate-300 text-slate-800'}
                    `}>
                      {isInterface && <div className="text-[9px] leading-none mb-0.5 opacity-70">&lt;&lt;interface&gt;&gt;</div>}
                      {isAbstract && <div className="text-[9px] leading-none mb-0.5 opacity-70">&lt;&lt;abstract&gt;&gt;</div>}
                      <div className="font-bold truncate">{node.label}</div>
                    </div>
                    <div className="p-2 flex-1 bg-white text-xs font-mono text-slate-600 overflow-hidden">
                      {node.methods.map((m, idx) => (
                        <div key={idx} className="truncate mb-0.5" title={m}>
                          {isInterface || isAbstract ? '' : '+ '}{m}
                        </div>
                      ))}
                    </div>
                  </div>
                </foreignObject>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Legend & Explanation Sidebar */}
      <div className="w-full xl:w-64 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-3 text-sm flex items-center gap-2">
            <span>🔍</span> Legend
          </h4>
          <div className="space-y-3 text-xs">
             <div className="flex items-center gap-2">
                <div className="w-6 h-0 border-t-2 border-slate-500 border-dashed relative">
                   <div className="absolute right-[-1px] top-[-4px] border-l-[5px] border-l-slate-500 border-y-[3px] border-y-transparent w-0 h-0 border-solid"></div>
                </div>
                <span className="text-slate-600">Implements / Dependency</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-6 h-0 border-t-2 border-slate-500 relative">
                   <div className="absolute right-0 top-[-4px] w-2 h-2 border border-slate-500 bg-white rotate-45 transform translate-x-1"></div>
                </div>
                <span className="text-slate-600">Extends (Inheritance)</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-6 h-0 border-t-2 border-slate-500 relative">
                   <div className="absolute right-0 top-[-3px] w-0 h-0 border-l-[6px] border-l-slate-500 border-y-[3px] border-y-transparent"></div>
                </div>
                <span className="text-slate-600">Association (Has-a)</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-dashed border-indigo-400 bg-indigo-50 rounded text-[8px] flex items-center justify-center text-indigo-700 font-bold">I</div>
                <span className="text-slate-600">Interface (Contract)</span>
             </div>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex-1">
          <h4 className="font-bold text-slate-800 mb-3 text-sm">Relationships</h4>
          <div className="space-y-3">
            {edges.map((edge, i) => (
              <div key={i} className="text-xs border-l-2 border-slate-300 pl-2">
                 <div className="font-semibold text-slate-700 mb-0.5">
                   {nodes.find(n => n.id === edge.from)?.label} 
                   <span className="text-slate-400 mx-1">→</span> 
                   {nodes.find(n => n.id === edge.to)?.label}
                 </div>
                 <div className="text-slate-500 leading-tight">
                   {edge.description || 'Associated with'}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMLDiagram;
