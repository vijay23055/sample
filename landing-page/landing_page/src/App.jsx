import React from "react";
import HeroSection from "./components/HeroSection";
import 'bootstrap/dist/css/bootstrap.min.css';

import ValueProp from "./components/ValueProp";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Overview from "./components/Overview";

const App = () => {
  return (
    <div>
      <HeroSection />
       <ValueProp />
       <Overview/>
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer /> 
    </div>
  );
};

export default App;
