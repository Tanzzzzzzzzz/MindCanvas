import React from 'react';

function Toolbar({ onAddNode, onZoomIn, onZoomOut, onSave, onLoad }) {
  return (
    <div className="flex gap-2 p-2 bg-white shadow-md rounded-md">
      <button onClick={onAddNode} className="btn">Add Node</button>
      <button onClick={onZoomIn} className="btn">Zoom In</button>
      <button onClick={onZoomOut} className="btn">Zoom Out</button>
      <button onClick={onSave} className="btn">Save</button>
      <button onClick={onLoad} className="btn">Load</button>
    </div>
  );
}

export default Toolbar;
