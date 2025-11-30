
import React, { useState } from 'react';

// Component
interface FileSystemNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  size?: number; // Files have size
  children?: FileSystemNode[]; // Folders have children
}

const initialData: FileSystemNode = {
  id: 'root',
  name: 'Root',
  type: 'folder',
  children: [
    {
      id: 'f1',
      name: 'Documents',
      type: 'folder',
      children: [
        { id: 'fi1', name: 'Resume.pdf', type: 'file', size: 450 },
        { id: 'fi2', name: 'Notes.txt', type: 'file', size: 12 },
      ]
    },
    {
      id: 'f2',
      name: 'Images',
      type: 'folder',
      children: [
        { id: 'fi3', name: 'Vacation.png', type: 'file', size: 2500 },
        { id: 'fi4', name: 'Profile.jpg', type: 'file', size: 1200 },
      ]
    },
    { id: 'fi5', name: 'config.json', type: 'file', size: 5 },
  ]
};

// The Composite Operation: Recursive Size Calculation
const calculateSize = (node: FileSystemNode): number => {
  if (node.type === 'file') {
    return node.size || 0;
  }
  return node.children?.reduce((acc, child) => acc + calculateSize(child), 0) || 0;
};

const CompositeDemo: React.FC = () => {
  const [data] = useState<FileSystemNode>(initialData);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({'root': true, 'f1': true, 'f2': true});

  const toggle = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderNode = (node: FileSystemNode, depth = 0) => {
    const isFolder = node.type === 'folder';
    const totalSize = calculateSize(node);
    const isExpanded = expanded[node.id];

    return (
      <div key={node.id} style={{ marginLeft: `${depth * 24}px` }} className="mb-2">
         <div 
           className={`flex items-center gap-2 p-2 rounded-lg border transition-colors cursor-pointer hover:bg-slate-50
             ${isFolder ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent'}
           `}
           onClick={() => isFolder && toggle(node.id)}
         >
            <span className="text-lg w-6 text-center">
              {isFolder ? (isExpanded ? '📂' : '📁') : '📄'}
            </span>
            <span className="font-medium text-slate-700">{node.name}</span>
            <div className="ml-auto flex items-center gap-2">
               <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">
                 {totalSize > 1000 ? `${(totalSize/1024).toFixed(1)} MB` : `${totalSize} KB`}
               </span>
            </div>
         </div>
         
         {isFolder && isExpanded && node.children && (
           <div className="border-l-2 border-slate-100 ml-4 mt-1">
             {node.children.map(child => renderNode(child, depth))}
           </div>
         )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full">
       <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-indigo-800 text-sm mb-2">
         <strong>Composite Pattern Logic:</strong> The client asks the root folder for its size. The folder asks its children. Files return their size, folders recurse. The client treats both uniformly.
       </div>
       <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {renderNode(data)}
       </div>
    </div>
  );
};

export default CompositeDemo;
