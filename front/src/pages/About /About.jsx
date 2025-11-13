import React, { useState } from "react";
import './About.css';
import WhoAmI from "../../Components/WhoamI/WhoAmI";
// import MagicBento from "../../Components/Bento/Magicbento";

export default function About() {

  const [active, setActive] = useState("Myself"); // ✅ clé existante

  const data = {
  
    Myself: {
      img: "/assets/PhotoCV.jpeg",
      text: (<>
        <div className="about-header">
          <strong className="about-name">Zoé Charrier, 19 ans</strong>
          <span className="about-location">Based in France</span>
        </div>
        <br />
        Currently studying at <strong>NEOMA Business School</strong> in the TEMA program,  
        where management meets technology.<br />
        I’m a curious and analytical person who loves understanding systems and improving them.
        My journey allows me to combine <strong>data analysis</strong>, creativity, and strategic thinking.
        I value <em>autonomy</em>, adaptability, and long-term vision — always driven by continuous learning.
      </>)},

    Interests: {
      img: "/assets/interests.png",
      text:(
        <>
          <div className="about-header">
            <strong className="about-title">Curiosity at the Core</strong>
            <span className="about-subtitle">What inspires me every day</span>
          </div>
          <br />
          I’m fascinated by how <strong>art, people, and technology</strong> connect and influence each other.<br />
          I love <strong>design, music, psychology, and travel</strong> — everything that opens new ways of seeing the world.<br />
          Whether I’m running, reading, or creating, I’m happiest when I’m <strong>learning and sharing ideas</strong> with others.
        </>
      )
    },

    Aspirations: {
      img: "/assets/cible.png",
      text: (
      <>
        <div className="about-header">
          <strong className="about-title">Building Meaningful Paths</strong>
          <span className="about-subtitle">Where I want to grow</span>
        </div>
        <br />
        I aspire to work on <strong>creative and data-driven projects</strong> that bring real impact.<br />
        What drives me most is <strong>meeting people worldwide</strong> and creating strong bonds through collaboration.<br />
        I want to keep <strong>learning, exploring, and inspiring</strong> — turning ideas into actions that connect people.
      </>
    )
    }
  };

  return (
    <section className="expertise-section" id="about">
      <hr className="expertise-separator" />

      <div className="expertise-content">
        {/* LEFT SIDE - IMAGE + TEXT */}
        <div className="expertise-left">
          <div className="expertise-image-wrapper">
            <img
              src={data[active].img}
              alt={active}
              className={`expertise-image-wrapper ${active === "Myself" ? "round" : ""}`}
            />
          </div>
          <div className="expertise-description">{data[active].text}</div>
        </div>

        {/* RIGHT SIDE - MENU */}
        <div className="expertise-menu">
          {Object.keys(data).map((key) => (
            <div
              key={key}
              className={`expertise-item ${active === key ? "active" : ""}`}
              onMouseEnter={() => setActive(key)}
            >
              <h2>{key}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
