import React from 'react'
import Dashboard from './Compoent/Dashboard'
import Card1 from './Compoent/Card1'
import Card2 from './Compoent/Card2'
import Card3 from './Compoent/Card3'
import Card4 from './Compoent/Card4'
import Card5 from './Compoent/Card5'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes,Navigate } from 'react-router-dom'

function App() {
  return <>
  <BrowserRouter>
  <Dashboard/>
    <Routes>
      {/* <Route path='/' element={<Dashboard/>}/>  */}
      <Route path='/all' element={<Card1/>}/>
      <Route path='/all-1' element={<Card2/>}/>
      <Route path='/all-2' element={<Card3/>}/>
      <Route path='/all-3' element={<Card4/>}/>
      <Route path='/all-4' element={<Card5/>}/>
      <Route path='*' element={<Navigate to='/all'/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App
