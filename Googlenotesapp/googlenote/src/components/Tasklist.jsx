import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Tasklist({ title, content, onDelete, id }) {

    const handleDelete =()=>{
        onDelete(id)
    }
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Tasklist;
