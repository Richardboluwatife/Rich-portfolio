import React from 'react'
import Navbar from './Navbar'
import My_Portfolio from './My_Portfolio'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<My_Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App