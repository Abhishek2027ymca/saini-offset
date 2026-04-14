
import React from 'react';
import PortfolioSection from '../components/sections/PortfolioSection';
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";


function Portfolio() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Navigation />
        <PortfolioSection />
      <Footer />
    </div>
  )
}

export default Portfolio
