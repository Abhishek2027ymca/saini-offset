
import React from 'react'
import ContactSection from '../components/sections/ContactSection';

import Navigation from "../components/layout/Navigation";
import HeroSection from "../components/sections/HeroSection";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";



function Contact() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    
  return (
    <div>
      <Navigation />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Contact
