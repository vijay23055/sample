import React, { useState,createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from './compoenets/Dashboard'
import OrderDetails from './compoenets/Orderdetails';
import Men from './compoenets/MensClothing';
import UserProvider from './context/Userprovide';
export const UserContext = createContext();

function App() {


  return <>
     <UserProvider>
      <Summary />
    </UserProvider>
  </>
}

export default App
