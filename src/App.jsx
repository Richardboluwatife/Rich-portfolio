import React from 'react'
import Navbar from './Navbar'
import My_Portfolio from './My_Portfolio'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<My_Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Works" element={< Works/>} />
          <Route path="/Contact" element={< Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App