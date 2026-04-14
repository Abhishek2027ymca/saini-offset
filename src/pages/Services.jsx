
import React from 'react'
import ServicesSection from '../components/sections/ServicesSection';
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";


function Services() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <div>
                <Navigation />
        
      <ServicesSection />
            <Footer />
      
    </div>
  )
}

export default Services
