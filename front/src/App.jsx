import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Navbar from "./Components/Navbar/Navbar";
import NavbarDemo from "./Components/Navbar/NavbarDemo";
import Intro from "./pages/Home/Intro";
import WhoAmISection from "./Components/WhoamI/WhoAmI";
import Aboutme from "./Components/Aboutme/Aboutme";
import Experiences from "./pages/Experiences/Experiences";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
import Footer from "./Components/footer/Footer";
import ClickSpark from "./Components/ClickSpark/ClickSpark";

import "./App.css";

import { AnimatePresence } from "framer-motion";
import Preloader from "./Components/Preloader/Preloader";

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
        {/* <Navbar /> */}
        <NavbarDemo />
        <main>{children}</main>
        <Footer />
      </ClickSpark>
    </div>
  );
}

function App() {
  // Smooth scroll Lenis
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Preloader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <>
      <main>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <ScrollToTop />
            <Routes>
              {/* HOME : / */}
              <Route
                path="/"
                element={
                  <Layout>
                    <Intro />
                    <WhoAmISection />
                    <Aboutme />
                  </Layout>
                }
              />

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

              {/* CONTACTS : /contact */}
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
                      <NavbarDemo />
                      <Contact />
                    </ClickSpark>
                  </div>
                }
              />

              {/* Fallback */}
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
        )}
      </main>
    </>
  );
}

export default App;
