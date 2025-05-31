
import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function Createarea({addnote}) {
  const [isExpand, setExpand] = useState(false);
  
  const [note, setNote] = useState({
    Title:"",
    Content:""
  })
  function handleExpand() {
    setExpand(true)
  }

  const handleNote = (event)=>{
    
    const name = event.target.name
    const value = event.target.value
    setNote((e) => ({
      ...e,
      [name === 'title' ? "Title" : "Content"]:value
      
    }))
  }
  

  const handleSubmit = (event)=>{
    event.preventDefault();
    addnote(note)
    setNote({ Title: "", Content: "" });
  }

  return (
    <div>
      <form className='create-note'>
      {isExpand && <input name='title' placeholder='Title' value={note.Title} onChange={handleNote}/>}

         <textarea
          name='content'
          placeholder='take a notes...'
          rows={isExpand ? 3 : 1}
          value={note.Content}
          onClick={handleExpand}
          onChange={handleNote}
        />
        <Zoom in={isExpand}>
        <Fab onClick={handleSubmit}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Createarea;
