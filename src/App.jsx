import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AutoSlider from "./Components/AutoSlider";
import About from "./Components/About";
import Team from "./Components/Team";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>

      <HomePage/>
      <AutoSlider/>
      <About/>
      <Team/>
      <Gallery/>
    </Router>

  );
}

export default App;
