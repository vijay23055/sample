// components/SettingsPanel.jsx
import React from 'react';

function SettingsPanel({ label, onTextChange }) {
  return (
    <div className="settings-panel">
      <h4>Edit Text</h4>
      <input
        type="text"
        value={label}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Enter node text"
      />
    </div>
  );
}

export default SettingsPanel;
