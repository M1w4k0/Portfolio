import React from "react";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import Navbar from "../../Components/Navbar/Navbar";
import Intro from "./Intro";
import WhoAmISection from "../../Components/WhoAmI/WhoAmI";
import Aboutme from "../../Components/Aboutme/WhoAmI";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Footer from '../../Components/Footer/Footer';
import ClickSpark from '../../Components/ClickSpark/ClickSpark';
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
        <WhoAmISection/>
        {/* <Aboutme/> */}
        <Experiences/>
        <Projects/>
        {/* <Skills /> */}
        <Footer />
        </ClickSpark>
    </div></>
  );
}