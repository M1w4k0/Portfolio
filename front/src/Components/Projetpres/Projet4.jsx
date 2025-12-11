import React from "react";
import "./Projet3.css";

export default function Projet2() {

  const skills = [
  "End-to-end project management",
  "CRM Automation (Emarsys)",
  "Dartagnan HTML templating",
  "Stakeholder coordination",
  "Email UX & localization",
];

  return (
    <>
      <section id="project-4" className="hero2">

        {/* IMAGE À GAUCHE */}
        <div className="hero-left">
          <img
            src="./assets/scandinaves.png"
            alt="Nordic countries CRM launch"
            className="hero-img4"
          />
        </div>

        {/* TEXTE À DROITE */}
        <div className="hero-right">
          <div className="hero-main-text">
            <h1>
              CRM PROJECT, <br />
             SCANDINAVIAN LAUNCH
            </h1>
            <h2>
              End-to-end management of all CRM communications,<br />
              from translations to automation deployment.
            </h2>
          </div>

          <p className="hero-description">
            For the Scandinavian expansion of Vente-Unique, I was in part, responsible 
            for the full rollout of CRM communications across three new markets: 
            Sweden, Denmark and Norway.  
            <br /><br />
            I helped to coordinate the creation of all email and push assets, to manage the 
            translation workflows, to built templates in Dartagnan, and to deploy
            their automated versions in Emarsys—from abandoned carts to 
            welcome flows, loyalty programs, and reactivation journeys.
            <br /><br />
            This project required strong cross-team collaboration (studio design, 
            translators, product, CRM, tech), precise planning, and technical rigor 
            on HTML templates, segmentation rules, tracking, and automation logic.
          </p>

          {/* SKILLS */}
          <div className="hero-skills">
            <h3>Skills developed</h3>
            <div className="hero-skills-list">
              {skills.map((skill, i) => (
                <span key={i} className="hero-skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT BTN */}
        <button className="hero-about">
          <span className="hero-dot">●</span>
          <span>More about this project :</span>
        </button>

      </section>

      <section className="hero-gallery2">
        <div className="hero-gallery-inner">

          <div className="hero-gallery-item2">
            <img src="./assets/jira.png" 
            alt="Jira workflow"
            className="imageee" />
          </div>

          <div className="hero-gallery-item2">
            <img src="./assets/campagne.png"
            alt="Email campaign translations"
            className="imageee" />
          </div>

          <div className="hero-gallery-item2">
            <img src="./assets/automation.png"
            alt="Emarsys automations"
            className="imageee" />
          </div>

        </div>
      </section>
    </>
  );
}
