import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRuter from './utils/AppRuter'
function App() {
  const router = createBrowserRouter(AppRuter)
  return <>
    <RouterProvider router={router}/>
   
  </>
}

export default App
