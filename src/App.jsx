// import { useState } from 'react'
// import Home from './pages/Home';

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//          <div> 
// <Home />;
//          </div>
//     </>
//   )
// }

//export default App

//------------------------

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;