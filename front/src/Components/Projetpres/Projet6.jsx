import React from "react";
import "./Projet1.css";

export default function Projet1() {

  const skills = [
    "Product ideation & concept development",
    "Market & competitor analysis",
    "Brand identity & visual design",
    "UX/UI prototyping",
    "Pitching & storytelling",
    "Business model design",
    "User research",
    "Team collaboration"
  ];

  return (
    <>
      <section id="project-6" className="hero2">
        
        {/* IMAGE LEFT */}
        <div className="hero-left">
          <img
            src="./assets/snack1.png"   // Replace with your Snack’Up mockup
            alt="Snack'Up healthy snack startup project"
            className="hero-img1"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="hero-right">
          <div className="hero-main-text">
            <h1>
              SNACK’UP, A PERSONALISED<br />
              HEALTHY SNACK EXPERIENCE
            </h1>
            <h2>
              A full startup project created for the NEOMA<br />
              Startup Challenge 2025 which we ultimately won, ranking 1st.
            </h2>
          </div>

          <p className="hero-description">
            Snack’Up was created from a simple insight: students, young professionals, 
            and athletes struggle to find healthy, natural snacks that truly match their needs. 
            Most options are ultra-processed, high in sugar, or not adapted to personal goals.
            <br /><br />
            Our answer: a personalised snack-box service paired with a mobile app. 
            Users build their own box of healthy snacks tailored to focus, energy, performance, or reducing processed food.
            <br /><br />
            As a team, we designed everything end-to-end: brand, product offering, business model, 
            app concept, market analysis, and pitch deck. This challenge taught 
            us to turn an idea into a coherent, user-centred startup.
          </p>

          {/* SKILLS */}
          <div className="hero-skills">
            <h3>Skills acquired</h3>
            <div className="hero-skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="hero-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button className="hero-about">
          <span className="hero-dot">●</span>
          <span>More about this project</span>
        </button>
      </section>

      {/* GALLERY */}
      <section className="hero-gallery2">
        <div className="hero-gallery-inner">
          <div className="hero-gallery-item2">
            <img
              src="./assets/snack2.png"
              alt="Snack'Up product concept"
              className="imageee"
            />
          </div>

          <div className="hero-gallery-item2">
            <img
              src="./assets/snack3.png"
              alt="Snack'Up visual identity"
              className="imageee"
            />
          </div>

          <div className="hero-gallery-item2">
            <img
              src="./assets/snack4.png"
              alt="Snack'Up mobile app concept"
              className="imageee"
            />
          </div>
        </div>
      </section>
    </>
  );
}
