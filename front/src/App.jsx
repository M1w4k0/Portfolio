import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
// import About from './pages/About/About';
import Experiences from './pages/Experiences/Experiences';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/footer/Footer';


function App() {
  return (
    <Router>
       <Navbar />
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
