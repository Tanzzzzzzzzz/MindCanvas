import React from 'react';

function Node({ id, x, y, content, onDrag }) {
  return (
    <div
      className="absolute p-4 bg-yellow-200 rounded shadow cursor-move"
      style={{ left: x, top: y }}
      draggable
      onDragEnd={(e) => onDrag(id, e)}
    >
      {content}
    </div>
  );
}

export default Node;
