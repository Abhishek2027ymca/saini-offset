
import React from 'react'
import ContactSection from '../components/sections/ContactSection';

import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import About from "../components/sections/AboutSection";
import { useEffect } from "react";



function AboutPage() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    
  return (
    <div>
      <Navigation />
      <About />
      <Footer />
    </div>
  )
}

export default AboutPage
