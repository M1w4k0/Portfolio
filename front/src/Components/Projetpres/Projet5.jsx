import React from "react";
import "./Projet1.css";

export default function Projet1() {

  const skills = [
    "Linear algebra & systems",
    "Vectors & matrices",
    "Eigenvalues & eigenvectors",
    "Dimensionality reduction (PCA)",
    "Calculations & optimization",
    "Applied mathematics",
    "Probability & statistics"
  ];

  return (
    <>
      <section id="project-1" className="hero">
        {/* IMAGE À GAUCHE */}
        <div className="hero-left">
          <img
            src="./assets/ML.jpeg"   // <-- remplace par ton visuel
            alt="Linear Algebra for Machine Learning"
            className="hero-img1"
          />
        </div>

        {/* TEXTE À DROITE */}
        <div className="hero-right">
          <div className="hero-main-text">
            <h1>
              LINEAR ALGEBRA FOR MACHINE LEARNING - CERTIFICATION
            </h1>
            <h2>
              Currently following a certified program from Imperial College London via Coursera. 
            </h2>
          </div>

          <p className="hero-description">
            Alongside my internship, I am completing a training program
            in linear algebra and applied mathematics for machine learning, to provide
            me the mathematical tools that power modern AI:
            vectors, matrices, systems of equations, eigenvalues, eigenvectors,
            and dimensionality reduction techniques such as PCA.
            <br /><br />
            The program bridges theory and practice: each concept is applied to
            real machine learning problems including data transformations,
            PageRank, image rotations, and feature extraction. It reinforces the
            intuition needed to understand how ML models behave, learn, and generalize.
            <br /><br />
            I wanted to complete this certification to prepare myself for deeper studies 
            in data science, which rely on strong mathematical foundations.
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
              src="./assets/ML.jpg"   // <-- illustration conceptuelle
              alt="Vectors and matrices"
              className="imageee"
            />
          </div>
          <div className="hero-gallery-item">
            <img
              src="./assets/ML2.webp"   // <-- PCA / transformations
              alt="Dimensionality reduction PCA"
              className="imageee"
            />
          </div>
          <div className="hero-gallery-item">
            <img
              src="./assets/coursera3.webp"   // <-- PageRank / image rotation
              alt="Machine learning applications"
              className="imageee"
            />
          </div>
        </div>
      </section>
    </>
  );
}
