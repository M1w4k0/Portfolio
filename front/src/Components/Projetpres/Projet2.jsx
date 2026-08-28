import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet2() {

  const skills = [
    "Exploratory Data Analysis",
    "Business Insights",
    "Linear Regression",
    "Random Forest",
    "K-Means Clustering",
    "Python & Jupyter"
  ];

  return (
    <div className="project-page">

      <section className="project-cover project-light">

        <div className="project-cover__top">

          <span className="project-number">
            02
          </span>

          <div className="project-cover__meta">
            <span>DATA ANALYSIS</span>
            <span>MACHINE LEARNING</span>
            <span>BUSINESS INSIGHTS</span>
          </div>

        </div>

        <div className="project-cover__main">

          <p className="project-kicker">
            From raw datasets to decisions
          </p>

          <h1 className="project-display">
            RAW DATA
            <br />
            TO INSIGHT
          </h1>

        </div>

        <div className="project-cover__image">
          <img
            src="/assets/ndata.png"
            alt="Business data analysis report"
          />
        </div>

      </section>


      {/* QUESTION */}
      <section className="project-section project-dark">

        <span className="project-label">
          The question
        </span>

        <h2
          className="project-statement"
          style={{ marginTop: "5rem" }}
        >
          How do customers behave toward organic products?
        </h2>

      </section>


      {/* PROCESS */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            Method
          </span>

          <div>

            <p className="project-body">
              I worked on a real-world business dataset to extract strategic
              insights, build predictive models and turn technical results into
              clear recommendations.
            </p>

            <div className="project-workflow">

              {[
                "Raw dataset",
                "Data cleaning",
                "Feature engineering",
                "Descriptive statistics",
                "Machine learning",
                "Business recommendations"
              ].map((item, index) => (
                <div
                  className="project-workflow__item"
                  key={item}
                >
                  <span className="project-workflow__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-workflow__title">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* GRAPH */}
      <section className="project-showcase project-soft">

        <div className="project-showcase__media">
          <img
            src="/assets/graph.png"
            alt="Exploratory data analysis"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Exploration
          </span>

          <h3>
            Before modelling, understand.
          </h3>

          <p className="project-body">
            Cleaning, exploratory analysis and descriptive statistics were used
            to understand patterns in customer behaviour before introducing
            predictive models.
          </p>

        </div>

      </section>


      {/* MODELS */}
      <section className="project-section project-light">

        <span className="project-label">
          Three ways of looking at the data
        </span>

        <div
          className="project-columns"
          style={{ marginTop: "4rem" }}
        >

          <div className="project-column">
            <h3>
              LINEAR
              <br />
              REGRESSION
            </h3>

            <p>
              Explore relationships between variables and estimate trends.
            </p>
          </div>

          <div className="project-column">
            <h3>
              RANDOM
              <br />
              FOREST
            </h3>

            <p>
              Capture nonlinear patterns and test predictive behaviour.
            </p>
          </div>

          <div className="project-column">
            <h3>
              K-MEANS
            </h3>

            <p>
              Segment observations and uncover meaningful behavioural groups.
            </p>
          </div>

        </div>

      </section>


      {/* JUPYTER */}
      <section className="project-showcase project-showcase--reverse project-dark">

        <div className="project-showcase__copy">

          <span className="project-label">
            Modelling
          </span>

          <h3>
            Python became the laboratory.
          </h3>

          <p className="project-body">
            Jupyter Notebook allowed me to iterate quickly between data
            exploration, model testing and interpretation.
          </p>

        </div>

        <div className="project-showcase__media">
          <img
            src="/assets/jupyter.png"
            alt="Jupyter modelling"
          />
        </div>

      </section>


      {/* BUSINESS */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            Business impact
          </span>

          <div>

            <h2 className="project-statement">
              A model is useless if it does not help make a decision.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              The final objective was to identify patterns, segment the data
              and simulate scenarios that could help decision-makers prioritise
              actions and understand potential business impact.
            </p>

          </div>

        </div>

      </section>


      {/* FINAL VISUAL */}
      <section className="project-showcase project-soft">

        <div className="project-showcase__media">
          <img
            src="/assets/jupyter2.png"
            alt="Business data recommendations"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Recommendations
          </span>

          <h3>
            From notebook to strategy.
          </h3>

        </div>

      </section>


      {/* SKILLS */}
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
// import "./Projet2.css";

// export default function Projet2() {

//   const skills = [
//     "Exploratory data analysis",
//     "Business insights",
//     "Linear regression",
//     "Random Forest",
//     "K-Means clustering",
//     "Python & Jupyter"
//   ];

//   return (
//     <>
//       <section id="project-2" className="hero2">
//         {/* IMAGE À GAUCHE */}
//         <div className="hero-left">
//           <img
//             src="./assets/ndata.png" // remplace par une capture de ton rapport / dashboard
//             alt="Business data analysis report"
//             className="hero-img2"
//           />
//         </div>

//         {/* TEXTE À DROITE */}
//         <div className="hero-right">
//           <div className="hero-main-text">
//             <h1>
//               BUSINESS DATA ANALYSIS<br />
//               FOR STRATEGIC DECISIONS
//             </h1>
//             <h2>
//               From raw datasets to insights,<br />
//               predictions and concrete actions.
//             </h2>
//           </div>

//           <p className="hero-description">
//             In this project, I worked on a real-world business dataset to extract
//             strategic insights, build predictive models, and translate the results
//             into clear recommendations. The core question was how customers behave toward organic products.
//             <br /><br />
//             Using Python and Jupyter Notebook, I explored the data (cleaning,
//             feature engineering, descriptive statistics), then tested several
//             models such as linear regression, Random Forest and K-Means
//             clustering to make some predictions. The goal was to identify patterns, segment the data,
//             and simulate scenarios that help decision-makers prioritise actions
//             and finally understand business impact.
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

//         {/* ABOUT EN BAS À GAUCHE */}
//         <button className="hero-about">
//           <span className="hero-dot">●</span>
//           <span>More about this project</span>
//         </button>
//       </section>

//       <section className="hero-gallery2">
//         <div className="hero-gallery-inner">
//           <div className="hero-gallery-item2">
//             <img
//               src="./assets/graph.png"   // à remplacer par une capture : EDA / graphiques
//               alt="Exploratory analysis"
//               className="imageee"
//             />
//           </div>
//           <div className="hero-gallery-item2">
//             <img
//               src="./assets/jupyter.png" // à remplacer par : modèles / matrices
//               alt="Modeling & metrics"
//               className="imageee"
//             />
//           </div>
//           <div className="hero-gallery-item2">
//             <img
//               src="./assets/jupyter2.png" // à remplacer par : slides / recommandations
//               alt="Business recommendations"
//               className="imageee"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
