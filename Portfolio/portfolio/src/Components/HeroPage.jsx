import React from 'react'
import './HeroPage.css'
import { Link } from 'react-scroll'
import heroImage from '../image/Profile.jpg'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const HeroPage = () => {
  return <>
    <div className="container" id="intro">
      <section className='hero-section'>
        <div className='hero-left'>
          <div className='hero-eyebrow'>
            <h2>Hello,</h2>
            <h1>I'm Vijay a Frontend Developer</h1>
            <p>I’m a passionate Frontend Developer specializing in building interactive, user-friendly, and responsive web applications. I love turning creative ideas into clean, modern interfaces using technologies like React,
              JavaScript, HTML, and CSS.</p>
          </div>
          <div className='hero-cta-row'>
            <Link className='hero-btn' to="contact" smooth={true} duration={500}>Contact</Link>
            <Link className='hero-btn' to="about" smooth={true} duration={500}>About Me</Link>
            <a
              href="https://drive.google.com/drive/u/0/folders/1Auj6Fc3tvWf6p71s6EbvXoQo8g-RDJk-"
              className='hero-button'
              target="_blank"
              rel="noopener noreferrer"
            >
              Get CV
            </a>
          </div>
        </div>
        <div className='hero-right'>
          <img className='hero-image' src={heroImage} alt="potrait-image" />
          <div className='hero-social'>
            <a className="icon" href='https://github.com/vijay23055'><FaGithub /></a>
            <a className="icon" href='https://www.linkedin.com/in/vijay-e-27a1b7226/'><FaLinkedin /></a>
            <a className="icon" href='https://www.instagram.com/itsmevijay_23/'><FaInstagram /></a>
          </div>
        </div>
      </section>
    </div>
  </>
}

export default HeroPage
