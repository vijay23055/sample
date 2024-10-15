import React from 'react'
import Sidebar from './Compoent/Sidebar'
import AddUser from './Compoent/AddUser'
import Dashboard from './Compoent/Dashboard'
import Profile from './Compoent/Profile'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'


function App() {
  return <div id="wrapper">
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/add-user' element ={<AddUser/>}></Route>
        <Route path='/edit-user' element={<Profile/>}></Route>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  </div>

}

export default App
