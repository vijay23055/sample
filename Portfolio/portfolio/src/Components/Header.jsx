import React from 'react'
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return <>
    <header className='Header-section'>
      <div className='row-inner'>
        <div className='head-logo'>
          <Link to="home" smooth={true} duration={500}>Vijay</Link>
        </div>

        <nav className="head-nav">
          <ul>
            <li><Link to="intro" smooth={true} duration={500}>Intro</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="Works" smooth={true} duration={500}>Works</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  </>
}

export default Header
