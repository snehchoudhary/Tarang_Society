import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AutoSlider from "./Components/AutoSlider";
import About from "./Components/About";
import Team from "./Components/Team";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

import TechClub from "./Components/TechClub";
import CulturalClub from "./Components/CulturalClub";
import LiteraryClub from "./Components/LiteraryClub";
import PhotographyClub from "./Components/PhotgraphyClub";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={
            <>
              <HomePage/>
              <About/>
              <AutoSlider/>
              <Team/>
              <Gallery/>
              <Footer/>
            </>
          } />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/tech-club" element={<TechClub/>}/>
          <Route path="/cultural-club" element= {<CulturalClub/>}/>
          <Route path="/literary-club" element= {<LiteraryClub/>}/>
           <Route path="/photography-club" element= {<PhotographyClub/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
