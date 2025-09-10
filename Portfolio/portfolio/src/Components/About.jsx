import React, { useEffect, useRef } from 'react'
import { FaReact, FaGitAlt, FaBootstrap, FaCss3Alt, FaServer } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiRedux, SiPostman } from "react-icons/si";
import { BsPersonVideo3 } from "react-icons/bs";
import Lottie from "lottie-react";
import animationdata from '../image/developer.json'
import './About.css'

const About = () => {


  return (
    <div className="container" id="about">
      <div className="mid-row">
        <div className="mid-about">
          <h1>About me</h1>
          <p>
            I’m Vijay a passionate Frontend Developer with expertise in React.js, Next.js, JavaScript, Tailwind CSS, and RESTful APIs.
            I focus on building visually stunning, highly responsive, and performance-driven web applications that bring ideas to life.
            <br /><br />
            I enjoy converting designs into clean, functional code that works smoothly on any device or browser.
            My main focus is making interfaces that look good, feel natural to use, and don’t break when it matters.
            <br /><br />
            I like experimenting with new tools, solving tricky problems, and building things that actually help people and businesses.
          </p>
        </div>

        <div className="mid-exp-skills">
          <div className='mid-exp-animation'>
            <div className="mid-exp">
              <div className='explogo'><BsPersonVideo3 color="#1E90FF" size={50} style={{ marginBottom: '12px' }} /></div>
              <h3 className='divider'>Frontend Developer - HCL tech (2022 - Present)</h3>
              <p>
                Worked on multiple web applications using modern frontend frameworks,
                delivering responsive designs and optimized user experiences.
              </p>
            </div>
            <div className='animate'><Lottie animationData={animationdata} loop={true} /></div>
          </div>
          <div className="mid-skills-tools" id='skills'>
            <h2>Skills</h2>
            <div className="skills-icons">
              <div className="skills-icon"><FaReact size={40} color="#61DAFB" /></div>
              <div className="skills-icon"><SiJavascript size={40} color="#F7DF1E" /></div>
              <div className="skills-icon"><FaGitAlt size={40} color="#F05032" /></div>
              <div className="skills-icon"><FaBootstrap size={40} color="#7952B3" /></div>
              <div className="skills-icon"><SiTailwindcss size={40} color="#38B2AC" /></div>
              <div className="skills-icon"><SiRedux size={40} color="#764ABC" /></div>
              <div className="skills-icon"><FaServer size={40} color="#4CAF50" /></div>
              <div className="skills-icon"><SiPostman size={40} color="#FF6C37" /></div>
              <div className="skills-icon"><FaCss3Alt size={40} color="#1572B6" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
