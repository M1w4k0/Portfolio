import React from "react";
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/footer/Footer";
import Intro from "./Intro";
import About from '../About /About';
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import ContactSection from "../Contact/ContactSection";
import ClickSpark from '../../Components/ClickSpark/ClickSpark';
import Scrollzoom from '../../Components/Scrollzoom/Scrollzoom';
import './Home.css';


export default function Home() {

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
    <div id="home" className="home-section">
      <ClickSpark
      sparkColor='#8162f4'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
      >
        <Navbar />
        <Intro />
        <About/>
        <Scrollzoom/>
        <Experiences/>
        <Projects/>
        {/* <Skills /> */}
        <ContactSection />
        </ClickSpark>
    </div></>
  );
}