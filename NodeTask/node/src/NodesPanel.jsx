// components/NodesPanel.jsx
import React from 'react';

function NodesPanel({ onAddTextNode }) {
  return (
    <div className="nodes-panel">
      <h4>Node Types</h4>
      <button onClick={onAddTextNode}>+ Text Node</button>
    </div>
  );
}

export default NodesPanel;
