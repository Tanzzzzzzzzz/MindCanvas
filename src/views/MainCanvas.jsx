import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';
import Node from '../components/Node';

function MainCanvas() {
  const [nodes, setNodes] = useState([]);

  const handleAddNode = () => {
    const newNode = {
      id: Date.now(),
      x: 100,
      y: 100,
      content: 'New Node'
    };
    setNodes([...nodes, newNode]);
  };

  const handleNodeDrag = (id, e) => {
    const updatedNodes = nodes.map(node =>
      node.id === id
        ? { ...node, x: e.clientX, y: e.clientY }
        : node
    );
    setNodes(updatedNodes);
  };

  return (
    <div className="h-screen w-full relative bg-gray-50">
      <div className="absolute top-4 left-4 z-10">
        <Toolbar onAddNode={handleAddNode} />
      </div>
      {nodes.map(node => (
        <Node key={node.id} {...node} onDrag={handleNodeDrag} />
      ))}
    </div>
  );
}

export default MainCanvas;
