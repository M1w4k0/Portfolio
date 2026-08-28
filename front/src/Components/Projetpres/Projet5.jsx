import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet5() {

  const skills = [
    "Linear Algebra & Systems",
    "Vectors & Matrices",
    "Eigenvalues & Eigenvectors",
    "Dimensionality Reduction / PCA",
    "Calculations & Optimization",
    "Applied Mathematics",
    "Probability & Statistics"
  ];

  return (
    <div className="project-page">

      <section className="project-cover project-light">

        <div className="project-cover__top">

          <span className="project-number">
            05
          </span>

          <div className="project-cover__meta">
            <span>IMPERIAL COLLEGE LONDON</span>
            <span>COURSERA</span>
            <span>MACHINE LEARNING</span>
          </div>

        </div>

        <div className="project-cover__main">

          <p className="project-kicker">
            Learning chapter
          </p>

          <h1 className="project-display">
            THE MATH
            <br />
            BEHIND ML
          </h1>

        </div>

        <div className="project-cover__image">
          <img
            src="/assets/ML.jpeg"
            alt="Machine learning mathematics"
          />
        </div>

      </section>


      {/* WHY */}
      <section className="project-section project-dark">

        <span className="project-label">
          Why
        </span>

        <h2
          className="project-statement"
          style={{ marginTop: "5rem" }}
        >
          I did not want to only use machine learning.
          <br />
          I wanted to understand it.
        </h2>

      </section>


      {/* CONTEXT */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            Context
          </span>

          <div>

            <p className="project-body">
              Alongside my internship, I am completing a certified program in
              linear algebra and applied mathematics for machine learning from
              Imperial College London via Coursera.
            </p>

            <p
              className="project-body"
              style={{ marginTop: "1.5rem" }}
            >
              The goal is to strengthen the mathematical foundations required
              to understand how machine-learning models behave, learn and
              generalize.
            </p>

          </div>

        </div>

      </section>


      {/* MAP */}
      <section className="project-section project-soft">

        <span className="project-label">
          Learning map
        </span>

        <div className="learning-map">

          {[
            "VECTORS",
            "MATRICES",
            "SYSTEMS",
            "EIGENVALUES",
            "EIGENVECTORS",
            "PCA"
          ].map((item) => (
            <div
              key={item}
              className="learning-map__item"
            >
              {item}
            </div>
          ))}

        </div>

      </section>


      {/* APPLICATION */}
      <section className="project-two-sides project-light">

        <div className="project-side">

          <span className="project-label">
            Theory
          </span>

          <h3>
            LEARN
          </h3>

          <ul>
            <li>Vectors</li>
            <li>Matrices</li>
            <li>Linear systems</li>
            <li>Eigenvalues</li>
            <li>Eigenvectors</li>
            <li>Probability</li>
          </ul>

        </div>

        <div className="project-side">

          <span className="project-label">
            Application
          </span>

          <h3>
            APPLY
          </h3>

          <ul>
            <li>Data transformations</li>
            <li>PageRank</li>
            <li>Image rotations</li>
            <li>Feature extraction</li>
            <li>Dimensionality reduction</li>
          </ul>

        </div>

      </section>


      {/* VISUAL */}
      <section className="project-showcase project-dark">

        <div className="project-showcase__media">
          <img
            src="/assets/ML2.webp"
            alt="Machine learning mathematics"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Dimensionality
          </span>

          <h3>
            From abstraction to intuition.
          </h3>

        </div>

      </section>


      <section className="project-showcase project-showcase--reverse project-light">

        <div className="project-showcase__copy">

          <span className="project-label">
            Practice
          </span>

          <h3>
            Connecting theory to real ML problems.
          </h3>

        </div>

        <div className="project-showcase__media">
          <img
            src="/assets/coursera3.webp"
            alt="Machine learning applications"
          />
        </div>

      </section>


      {/* GOAL */}
      <section className="project-result project-dark">

        <span className="project-label">
          The goal
        </span>

        <h2
          className="project-statement"
          style={{ marginTop: "4rem" }}
        >
          Build the mathematical intuition behind machine learning.
        </h2>

      </section>


      <section className="project-disciplines project-light">

        <span className="project-label">
          Disciplines
        </span>

        <div className="project-disciplines__list">

          {skills.map((skill, index) => (
            <div
              className="project-discipline"
              key={skill}
            >
              <span>{skill}</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}

        </div>

      </section>


    </div>
  );
}



// import React from "react";
// import "./Projet1.css";

// export default function Projet1() {

//   const skills = [
//     "Linear algebra & systems",
//     "Vectors & matrices",
//     "Eigenvalues & eigenvectors",
//     "Dimensionality reduction (PCA)",
//     "Calculations & optimization",
//     "Applied mathematics",
//     "Probability & statistics"
//   ];

//   return (
//     <>
//       <section id="project-5" className="hero">
//         {/* IMAGE À GAUCHE */}
//         <div className="hero-left">
//           <img
//             src="./assets/ML.jpeg"   // <-- remplace par ton visuel
//             alt="Linear Algebra for Machine Learning"
//             className="hero-img1"
//           />
//         </div>

//         {/* TEXTE À DROITE */}
//         <div className="hero-right">
//           <div className="hero-main-text">
//             <h1>
//               LINEAR ALGEBRA FOR MACHINE LEARNING - CERTIFICATION
//             </h1>
//             <h2>
//               Currently following a certified program from Imperial College London via Coursera. 
//             </h2>
//           </div>

//           <p className="hero-description">
//             Alongside my internship, I am completing a training program
//             in linear algebra and applied mathematics for machine learning, to provide
//             me the mathematical tools that power modern AI:
//             vectors, matrices, systems of equations, eigenvalues, eigenvectors,
//             and dimensionality reduction techniques such as PCA.
//             <br /><br />
//             The program bridges theory and practice: each concept is applied to
//             real machine learning problems including data transformations,
//             PageRank, image rotations, and feature extraction. It reinforces the
//             intuition needed to understand how ML models behave, learn, and generalize.
//             <br /><br />
//             I wanted to complete this certification to prepare myself for deeper studies 
//             in data science, which rely on strong mathematical foundations.
//           </p>

//           {/* SKILLS ACQUIRED EN BAS À DROITE */}
//           <div className="hero-skills">
//             <h3>Skills acquired</h3>
//             <div className="hero-skills-list">
//               {skills.map((skill, index) => (
//                 <span key={index} className="hero-skill-pill">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* BOUTON EN BAS À GAUCHE */}
//         <button className="hero-about">
//           <span className="hero-dot">●</span>
//           <span>More about this project</span>
//         </button>
//       </section>

//       <section className="hero-gallery">
//         <div className="hero-gallery-inner">
//           <div className="hero-gallery-item">
//             <img
//               src="./assets/ML.jpg"   // <-- illustration conceptuelle
//               alt="Vectors and matrices"
//               className="imageee"
//             />
//           </div>
//           <div className="hero-gallery-item">
//             <img
//               src="./assets/ML2.webp"   // <-- PCA / transformations
//               alt="Dimensionality reduction PCA"
//               className="imageee"
//             />
//           </div>
//           <div className="hero-gallery-item">
//             <img
//               src="./assets/coursera3.webp"   // <-- PageRank / image rotation
//               alt="Machine learning applications"
//               className="imageee"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
