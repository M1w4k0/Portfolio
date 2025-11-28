import React from 'react';
import { useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./pages/Home/Intro";
import WhoAmISection from "./Components/WhoAmI/WhoAmI";
import Aboutme from "./Components/Aboutme/Aboutme";
import Experiences from "./pages/Experiences/Experiences";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import Footer from './Components/Footer/Footer';
import ClickSpark from './Components/ClickSpark/ClickSpark';
import './App.css';



function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div id="app-root">
      <ClickSpark
        sparkColor="#8162f4"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ClickSpark>
    </div>
  );
}

function App() {

  useEffect( () => {
      const lenis = new Lenis()
     
      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
  
      requestAnimationFrame(raf)
  },[])
  
  return (
    <>
       <ScrollToTop />
        <Routes>

          {/* HOME : / */}
          <Route path="/" element={
            <Layout>
              <Intro />
              <WhoAmISection />
              <Aboutme />
            </Layout>
          } />

          {/* EXPERIENCE : /experience */}
          <Route
            path="/experience"
            element={
              <Layout>
                <Experiences />
              </Layout>
            }
          />

          {/* PROJECTS : /projects */}
          <Route
            path="/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />

          {/* SKILLS : /skills */}
          <Route
            path="/skills"
            element={
              <Layout>
                <Skills />
              </Layout>
            }
          />

          {/* CONTACTS : /contacts */}
          <Route
            path="/contact"
            element={

              <div id="app-root">
                <ClickSpark
                  sparkColor="#8162f4"
                  sparkSize={10}
                  sparkRadius={15}
                  sparkCount={8}
                  duration={400}
                >
                  <Navbar />
                  <Contact/>
                </ClickSpark>
              </div>
              
              
            }
          />

          {/* Route fallback : si l’URL n’existe pas, on renvoie vers la home */}
          <Route
            path="*"
            element={
              <Layout>
                <Intro />
              </Layout>
            }
          />
        </Routes>
</>
   
  );
}

export default App;
