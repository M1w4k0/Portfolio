import React from "react";
import "./Projet1.css";

export default function Projet1() {

  const skills = [
    "SQL database design",
    "Data modelling",
    "React front-end",
    "Authentication flows",
    "REST API integration",
    "UX writing"
  ];

  return (
    <>
      <section className="hero">
        {/* IMAGE À GAUCHE */}
        <div className="hero-left">
          <img
            src="./assets/broxw.png"   // maquette Yowl
            alt="Yowl UGC platform"
            className="hero-img1"
          />
        </div>

        {/* TEXTE À DROITE */}
        <div className="hero-right">
          <div className="hero-main-text">
            <h1>
              YOWL — A USER-GENERATED<br />
              REVIEW PLATFORM
            </h1>
            <h2>
              A full-stack product built to explore<br />
              data, UX and automation.
            </h2>
          </div>

          <p className="hero-description">
            Yowl is a review platform I designed and built around a complex
            database. Users can create an account, log in, search for
            companies or articles, publish reviews, and interact with other
            users. If a company or article doesn’t exist yet, it can be
            created directly from the interface, which enriches the dataset
            over time.
            <br /><br />
            Behind the interface, I focused on data structure and analysis:
            modelling entities (users, companies, reviews), tracking activity,
            and preparing the project so it can later feed scoring models,
            dashboards, or recommendation systems for business use.
          </p>

          {/* SKILLS ACQUIRED EN BAS À DROITE */}
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

        {/* BOUTON EN BAS À GAUCHE */}
        <button className="hero-about">
          <span className="hero-dot">●</span>
          <span>More about this project</span>
        </button>
      </section>

      <section className="hero-gallery">
        <div className="hero-gallery-inner">
          <div className="hero-gallery-item">
            <img
              src="./assets/account.png"
              alt="Account creation – Yowl"
              className="imageee"
            />
          </div>
          <div className="hero-gallery-item">
            <img
              src="./assets/catégories.png"
              alt="Categories and navigation – Yowl"
              className="imageee"
            />
          </div>
          <div className="hero-gallery-item">
            <img
              src="./assets/review.png"
              alt="Review page – Yowl"
              className="imageee"
            />
          </div>
        </div>
      </section>
    </>
  );
}
