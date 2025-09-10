import React from 'react';
import Lottie from "lottie-react";
import devanimation from '../image/DeveloperFrontEnd.json';
import codinganime from '../image/CodingTime.json'
import ecomanime from '../image/eCommerce.json';
import OTPAnime from '../image/otpmessage.json';
import notesanime from '../image/Notebook.json';
import landpage from '../image/bg-masthead.jpg';
import './Works.css';

const Works = () => {

  const projects = [
    {
      title: "Landing Page",
      description: "A responsive landing page built with React and Tailwind CSS, featuring smooth scrolling and animations.",
      link: "https://66980bdf9a25f5164d3d1f1c--shimmering-pie-a6671f.netlify.app/",
      image: landpage
    },
    {
      title: "E-Commerce Website",
      description: "An e-commerce platform with product listings, cart functionality, and payment integration.",
      link: "https://incomparable-biscotti-806d1d.netlify.app/",
      animateScroll: ecomanime
    },
    {
      title: "OTP Verification",
      description: "A web application that allows users to verify their identity using OTP (One-Time Password) sent to their email or phone.",
      link: "https://curious-scone-f6c9c3.netlify.app/",
      animateScroll: OTPAnime
    },
    {
      title: "Google Notes",
      description: "A note-taking app inspired by Google Keep, allowing users to create, edit, and organize notes.",
      link: "https://startling-cranachan-f8255c.netlify.app/",
      animateScroll: notesanime
    },
    
  ];

  return (
    <div className="work-container" id='Works'>
      <div className="work-inner">

        {/* Left animation */}
        <div className='work-left'>
          <Lottie animationData={devanimation} loop={true} />
          <Lottie animationData={codinganime} loop={true} />
        </div>

        {/* Right project cards */}
        <div className="work-right">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <div className="project-animation">
                  {project.animateScroll ? (
                    <Lottie animationData={project.animateScroll} loop={true} />
                  ) : (
                    <img src={project.image} alt={project.title} className='project-media' />
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </div>
          ))}

          {/* Get more button */}
          {/* <button className='work-button'>Get More</button> */}
        </div>
   
      </div>
    </div>
  );
};

export default Works;
