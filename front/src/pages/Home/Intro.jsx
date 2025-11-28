import React from "react";
import "./Intro.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Character from '../../Components/BlurText/Character';

const paragraph = "For me, it’s all about coding with purpose, thinking like a product designer, and creating real, meaningful value."


export default function Intro() {

const words = paragraph.split(" ")

  return (
    <>
    <section className="intro-section" data-theme="dark">
      
      <div className="home-content">
        <div className="hero-tags">
          <div className="tag tag-role">
            <span>Your new <strong>intern</strong></span>
          </div>
          <a
            className="tag tag-linkedin"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            className="tag tag-github"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/github.png" alt="Github" />
          </a>
        </div>
        <h1>Zoé Charrier </h1>
      </div>
    </section>
    <section className="scroll-section">
       <p className="subtitle">My vision</p>
       <div className='catchphrase'><Character paragraph={paragraph}/></div>
          
      </section>
    </>
  );
}