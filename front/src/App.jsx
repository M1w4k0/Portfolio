import React, {useEffect, useState, useRef} from "react";
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
import Footer from "./Components/footer/Footer";
import ClickSpark from "./Components/ClickSpark/ClickSpark";

import Projet1 from "./Components/Projetpres/Projet1";
import Projet2 from "./Components/Projetpres/Projet2";
import Projet3 from "./Components/Projetpres/Projet3";
import Projet4 from "./Components/Projetpres/Projet4";
import Projet5 from "./Components/Projetpres/Projet5";
import Projet6 from "./Components/Projetpres/Projet6";
import Projet7 from "./Components/Projetpres/Projet7";
import Projet8 from "./Components/Projetpres/Projet8";
import Projet9 from "./Components/Projetpres/Projet9";

import "./App.css";

import { AnimatePresence } from "framer-motion";
import Preloader from "./Components/Preloader/Preloader";

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   React.useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//   }, [pathname]);
//   return null;
// }

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

  const location = useLocation();  
  const lenisRef = useRef(null);    
  const [isLoading, setIsLoading] = useState(location.pathname === "/");
  const [hasVisitedHome, setHasVisitedHome] = useState(false);

  // Smooth scroll Lenis
  useEffect(() => {
    const lenis = new Lenis();

    lenisRef.current = lenis;

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

//   useLayoutEffect(() => {
//   if ("scrollRestoration" in window.history) {
//     window.history.scrollRestoration = "manual";
//   }

//   if (lenisRef.current) {
//     lenisRef.current.scrollTo(0, {
//       immediate: true
//     });
//   }

//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "auto"
//   });

// }, [location.pathname]);

useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const resetScroll = () => {
    // 1. Reset Lenis
    if (lenisRef.current) {
      lenisRef.current.stop();

      lenisRef.current.scrollTo(0, {
        immediate: true,
        force: true,
      });

      lenisRef.current.resize();
      lenisRef.current.start();
    }

    // 2. Reset navigateur
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Attendre que React ait réellement rendu la nouvelle page
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      resetScroll();
    });
  });

  // Sécurité supplémentaire après le layout/images
  const timeout = setTimeout(resetScroll, 100);

  return () => clearTimeout(timeout);

}, [location.pathname]);

  // PRELOADER LOGIC — plays ONLY on first visit to "/"
  useEffect(() => {
    // Si on n'est PAS sur "/", on ne montre jamais le preloader
    if (location.pathname !== "/") {
      setIsLoading(false);
      return;
    }

    // Si on a déjà visité la home, on ne rejoue pas le preloader
    if (hasVisitedHome) {
      setIsLoading(false);
      return;
    }

    // Première visite sur "/"
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasVisitedHome(true); // flag "home déjà vue"
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname, hasVisitedHome]);


  return (
    <>
      <main>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        {!isLoading && (
          <>
            {/* <ScrollToTop /> */}
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

              {/* PROJECT 1 : YOWL */}
              <Route
                path="/projects/yowl"
                element={
                  <Layout>
                    <Projet1 />
                  </Layout>
                }
              />

              {/* PROJECT 2 : BUSINESS DATA */}

              <Route
                path="/projects/business-data"
                element={
                  <Layout>
                    <Projet2 />
                  </Layout>
                }
              />

              {/* PROJECT 3 : MYSHOP */}
              <Route
                path="/projects/myshop"
                element={
                  <Layout>
                    <Projet3 />
                  </Layout>
                }
              />

              {/* PROJECT 4 : CRM SCANDINAVIA */}
              <Route
                path="/projects/crm-scandinavia"
                element={
                  <Layout>
                    <Projet4 />
                  </Layout>
                }
              />

              {/* PROJECT 5 : MACHINE LEARNING

              <Route
                path="/projects/machine-learning"
                element={
                  <Layout>
                    <Projet5 />
                  </Layout>
                }
              /> */}

              {/* PROJECT 6 : SNACKUP */}
              <Route
                path="/projects/snackup"
                element={
                  <Layout>
                    <Projet6 />
                  </Layout>
                }
              />

              {/* PROJECT 7 : HR ANALYTICS */}
            <Route
              path="/projects/hr-analytics"
              element={
                <Layout>
                  <Projet7 />
                </Layout>
              }
            />

            {/* PROJECT 8 : ML BUSINESS POC */}
            <Route
              path="/projects/ml-business-poc"
              element={
                <Layout>
                  <Projet8 />
                </Layout>
              }
            />

            {/* PROJECT 9 : FRAUD DETECTION */}
            <Route
              path="/projects/fraud-detection"
              element={
                <Layout>
                  <Projet9 />
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
