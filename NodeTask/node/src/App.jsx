import React, { useCallback, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css';
import TextNode from './TextNode';
import { nanoid } from 'nanoid';

const nodeTypes = {
  textNode: TextNode,
};

function FlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback(
    (params) => {
      const hasOutgoing = edges.some((e) => e.source === params.source);
      if (hasOutgoing) {
        alert('Only one outgoing edge allowed per source node.');
        return;
      }
      setEdges((eds) => addEdge(params, eds));
    },
    [edges, setEdges]
  );

  const onNodeClick = (_e, node) => {
    console.log('Node clicked:', node);
    setSelectedNode(node);
  };

  const onPaneClick = () => setSelectedNode(null);

  const addTextNode = () => {
    const id = nanoid();
    const newNode = {
      id,
      type: 'textNode',
      data: { label: 'New Text Node', 
        onChange: handleNodeLabelChange},
      position: {
        x: Math.random() * 250,
        y: Math.random() * 250,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onTextChange = (text) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === selectedNode.id ? { ...n, data: { label: text } } : n
      )
    );
  };

  const handleNodeLabelChange = (id, newText) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, label: newText, onChange: handleNodeLabelChange } } : node
      )
    );
  };  

  const saveFlow = () => {
    if (nodes.length <= 1) {
      alert('Add at least 2 nodes to save.');
      return;
    }

    const disconnectedNodes = nodes.filter(
      (node) => !edges.some((e) => e.source === node.id)
    );

    if (disconnectedNodes.length > 1) {
      alert('More than one node has no outgoing edge. Please fix it.');
      return;
    }

    console.log('Flow saved:', { nodes, edges });
    alert('✅ Flow saved successfully!');
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        {selectedNode ? (
          <div className="settings-panel">
            <h4>Settings</h4>
            <input
              type="text"
              value={selectedNode.data.label}
              onChange={(e) => onTextChange(e.target.value)}
              placeholder="Edit text"
            />
          </div>
        ) : (
          <div className="nodes-panel">
            <h4>Nodes</h4>
            <button className="add-btn" onClick={addTextNode}>+ Add Text Node</button>
          </div>
        )}
      </div>

      <div className="flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>

        <button className="save-btn" onClick={saveFlow}>💾 Save</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <FlowBuilder />
    </ReactFlowProvider>
  );
}
