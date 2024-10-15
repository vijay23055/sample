import React from "react";
import { Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Revolutionize Biopharma with HCLTech's Digital Solutions</h1>
        <p>
          Accelerate drug development, optimize operations, and ensure regulatory compliance.
        </p>
        <Button variant="primary" className="hero-button" href="#contact">
          Get in Touch 
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
