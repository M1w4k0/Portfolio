import React from "react";
import "./Intro.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Character from '../../Components/BlurText/Character';

const paragraph = "For me, it’s all about creating with purpose, blending product thinking, business understanding, and technology to deliver real value."


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
            href="www.linkedin.com/in/zoe-charrier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            className="tag tag-github"
            href="https://github.com/M1w4k0"
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