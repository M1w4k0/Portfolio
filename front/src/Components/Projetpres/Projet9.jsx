import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet9() {

  const skills = [
    "KNIME",
    "Classification",
    "Random Forest",
    "Gradient Boosting",
    "Predictive Analytics",
    "Model Evaluation",
    "Fraud Detection",
    "Business Interpretation"
  ];

  const process = [
    "Claims Dataset",
    "Data Preparation",
    "Feature Analysis",
    "Classification Models",
    "Model Comparison",
    "Risk Scoring",
    "Business Interpretation"
  ];

  return (
    <div className="project-page">

      {/* ===================================================
          COVER
      =================================================== */}
      <section className="project-cover project-light">

        <div className="project-cover__top">

          <span className="project-number">
            09
          </span>

          <div className="project-cover__meta">
            <span>PREDICTIVE ANALYTICS</span>
            <span>KNIME</span>
            <span>FRAUD DETECTION</span>
          </div>

        </div>

        <div className="project-cover__main">

          <p className="project-kicker">
            Automobile insurance claims
          </p>

          <h1 className="project-display">
            FIND THE
            <br />
            RISK.
          </h1>

        </div>

        <div className="project-cover__image">
          <img
            src="/assets/workflowknime.png"
            alt="Fraud detection KNIME workflow"
          />
        </div>

      </section>


      {/* ===================================================
          QUESTION
      =================================================== */}
      <section className="project-section project-dark">

        <span className="project-label">
          The question
        </span>

        <h2
          className="project-statement"
          style={{ marginTop: "5rem" }}
        >
          Which insurance claims should investigators look at first?
        </h2>

      </section>


      {/* ===================================================
          DATA
      =================================================== */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            The dataset
          </span>

          <div>

            <h2 className="project-statement">
              20,000 claims.
              <br />
              Four models.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              We developed and compared four classification models on a dataset
              of 20,000 automobile insurance claims to identify potentially
              fraudulent cases.
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          PROCESS
      =================================================== */}
      <section className="project-section project-soft">

        <span className="project-label">
          Predictive pipeline
        </span>

        <div className="project-workflow">

          {process.map((item, index) => (
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

      </section>


      {/* ===================================================
          MODELS
      =================================================== */}
      <section className="project-section project-light">

        <span className="project-label">
          Model comparison
        </span>

        <div
          className="project-columns"
          style={{ marginTop: "4rem" }}
        >

          <div className="project-column">
            <h3>
              RANDOM
              <br />
              FOREST
            </h3>

            <p>
              Ensemble classification for nonlinear fraud patterns.
            </p>
          </div>

          <div className="project-column">
            <h3>
              GRADIENT
              <br />
              BOOSTING
            </h3>

            <p>
              Sequential learning focused on improving difficult predictions.
            </p>
          </div>

          <div className="project-column">
            <h3>
              MODEL
              <br />
              SELECTION
            </h3>

            <p>
              Models were compared using metrics adapted to fraud detection.
            </p>
          </div>

        </div>

      </section>


      {/* ===================================================
          WINNING MODEL
      =================================================== */}
      <section className="project-section project-dark">

        <span className="project-label">
          Selected model
        </span>

        <h2
          className="project-statement"
          style={{ marginTop: "4rem" }}
        >
          Gradient Boosting.
        </h2>

        <div className="project-metrics">

          <div className="project-metric">
            <span className="project-metric__value">
              0.77
            </span>

            <span className="project-metric__label">
              F2-score
            </span>
          </div>

          <div className="project-metric">
            <span className="project-metric__value">
              82%
            </span>

            <span className="project-metric__label">
              Recall
            </span>
          </div>

          <div className="project-metric">
            <span className="project-metric__value">
              86%
            </span>

            <span className="project-metric__label">
              Accuracy
            </span>
          </div>

        </div>

      </section>


      {/* ===================================================
          KNIME
      =================================================== */}
      <section className="project-showcase project-light">

        <div className="project-showcase__media">
          <img
            src="/assets/perfknime.png"
            alt="KNIME fraud detection workflow"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            KNIME
          </span>

          <h3>
            A visual predictive pipeline.
          </h3>

          <p className="project-body">
            KNIME was used to structure the analytical workflow, train several
            classification models and compare their performance.
          </p>

        </div>

      </section>


      {/* ===================================================
          BUSINESS
      =================================================== */}
      <section className="project-section project-soft">

        <div className="project-split">

          <span className="project-label">
            Business translation
          </span>

          <div>

            <h2 className="project-statement">
              Predicting fraud is not enough.
              <br />
              You have to prioritise it.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              The model identified the 25% of claims presenting the highest
              fraud risk, achieving a lift of 1.26.
            </p>

            <p
              className="project-body"
              style={{ marginTop: "1.5rem" }}
            >
              The predictions were then translated into an investigation
              strategy designed to help operational teams prioritise the cases
              most worth reviewing.
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          RISK
      =================================================== */}
      {/* <section className="project-result project-dark">

        <span className="project-label">
          Investigation focus
        </span>

        <div
          className="project-result__number"
          style={{ marginTop: "4rem" }}
        >
          25%
        </div>

        <h2
          className="project-title"
          style={{ marginTop: "4rem" }}
        >
          HIGHEST-RISK CLAIMS
        </h2>

        <p
          className="project-body"
          style={{ marginTop: "2rem" }}
        >
          Lift: 1.26
        </p>

      </section> */}


      {/* ===================================================
          SKILLS
      =================================================== */}
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

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}

        </div>

      </section>


     
    </div>
  );
}