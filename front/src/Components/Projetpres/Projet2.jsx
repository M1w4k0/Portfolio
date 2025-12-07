import React from "react";
import "./Projet2.css";

export default function Projet2() {

  const skills = [
    "Exploratory data analysis",
    "Business insights",
    "Linear regression",
    "Random Forest",
    "K-Means clustering",
    "Python & Jupyter"
  ];

  return (
    <>
      <section className="hero2">
        {/* IMAGE À GAUCHE */}
        <div className="hero-left">
          <img
            src="./assets/ndata.png" // remplace par une capture de ton rapport / dashboard
            alt="Business data analysis report"
            className="hero-img2"
          />
        </div>

        {/* TEXTE À DROITE */}
        <div className="hero-right">
          <div className="hero-main-text">
            <h1>
              BUSINESS DATA ANALYSIS<br />
              FOR STRATEGIC DECISIONS
            </h1>
            <h2>
              From raw datasets to insights,<br />
              predictions and concrete actions.
            </h2>
          </div>

          <p className="hero-description">
            In this project, I worked on a real-world business dataset to extract
            strategic insights, build predictive models, and translate the results
            into clear recommendations.
            <br /><br />
            Using Python and Jupyter Notebook, I explored the data (cleaning,
            feature engineering, descriptive statistics), then tested several
            models such as linear regression, Random Forest and K-Means
            clustering. The goal was to identify patterns, segment the data,
            and simulate scenarios that help decision-makers prioritise actions
            and understand business impact.
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

        {/* ABOUT EN BAS À GAUCHE */}
        <button className="hero-about">
          <span className="hero-dot">●</span>
          <span>More about this project</span>
        </button>
      </section>

      <section className="hero-gallery2">
        <div className="hero-gallery-inner">
          <div className="hero-gallery-item2">
            <img
              src="./assets/graph.png"   // à remplacer par une capture : EDA / graphiques
              alt="Exploratory analysis"
              className="imageee"
            />
          </div>
          <div className="hero-gallery-item2">
            <img
              src="./assets/jupyter.png" // à remplacer par : modèles / matrices
              alt="Modeling & metrics"
              className="imageee"
            />
          </div>
          <div className="hero-gallery-item2">
            <img
              src="./assets/jupyter2.png" // à remplacer par : slides / recommandations
              alt="Business recommendations"
              className="imageee"
            />
          </div>
        </div>
      </section>
    </>
  );
}
