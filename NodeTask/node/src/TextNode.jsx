import React from 'react';
import { Handle, Position } from 'reactflow';
import './TextNode.css';

const TextNode = ({ id, data, selected }) => {
  const onChange = (e) => {
    if (data.onChange) {
      data.onChange(id, e.target.value);
    }
  };

  return (
    <div className={`text-node ${selected ? 'selected' : ''}`}>
      <Handle type="target" position={Position.Top} />
      <input
        value={data.label || ''}
        onChange={onChange}
        className="node-input"
        placeholder="Type here..."
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default TextNode;
