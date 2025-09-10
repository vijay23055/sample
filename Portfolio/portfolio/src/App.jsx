import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HeroPage from './Components/HeroPage'  
import useIsLoaded from './utili/Load.js'
import About from './Components/About.jsx';
import Works from './Components/Works.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  const isLoaded = useIsLoaded();
  return <>
    <div className={isLoaded ? 'is-loaded' : ''}>
      <Header />
      <HeroPage />
      <About />
      <Works />
      <Footer />
      {/* Later add Skills, Portfolio, Contact here as components */}
    </div>
  </>
}

export default App
