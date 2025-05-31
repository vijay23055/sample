import React, { useState } from 'react'
import Header from './components/Header'
import Createarea from './components/Createarea'
import "./App.css"
import Tasklist from './components/Tasklist'
function App() {
  const [storeNote, setStorenote] = useState([])

  const addnote = (newnote)=>{
    setStorenote((prevnote)=>{
      return[...prevnote, newnote]
    })
  }

  const deletenote = (id)=>{
    setStorenote((prevnote)=>{
      return prevnote.filter((_, index)=>{
        return index !== id
      })
    })
  }

  console.log(storeNote)
  return (
    <div>
      <Header />
      <Createarea addnote={addnote}/>
      {
        storeNote.map((data,index)=>{
          console.log(data)
          return(
          <Tasklist key={index} title={data.Title} content={data.Content} id={index} onDelete={deletenote} />)
        })
      }
    </div>
  )
}

export default App
