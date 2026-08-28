import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet8() {

  const skills = [
    "Python",
    "Scikit-learn",
    "PCA",
    "K-Means Clustering",
    "AWS SageMaker",
    "Customer Segmentation",
    "Business Analytics",
    "Business Case Design"
  ];

  const workflow = [
    "Customer Data",
    "Data Preparation",
    "Feature Selection",
    "PCA",
    "K-Means",
    "Segment Interpretation",
    "Business Opportunities",
    "AWS SageMaker POC"
  ];

  return (
    <div className="project-page">

      {/* ===================================================
          COVER
      =================================================== */}
      <section className="project-cover project-dark">

        <div className="project-cover__top">

          <span className="project-number">
            08
          </span>

          <div className="project-cover__meta">
            <span>MACHINE LEARNING</span>
            <span>PYTHON / AWS SAGEMAKER</span>
            <span>BUSINESS POC</span>
          </div>

        </div>

        <div className="project-cover__main">

          <p className="project-kicker">
            Customer behaviour segmentation
          </p>

          <h1 className="project-display">
            A $10K
            <br />
            POC.
          </h1>

        </div>

        <div className="project-cover__image">
          <img
            src="/assets/mockupPOC.png"
            alt="Machine Learning customer segmentation POC"
          />
        </div>

      </section>


      {/* ===================================================
          QUESTION
      =================================================== */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            The business question
          </span>

          <div>

            <h2 className="project-statement">
              Can purchase behaviour reveal who customers really are?
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              Using purchasing data from more than 30,000 Queen's University
              students, I developed a machine-learning segmentation model to
              identify distinct behavioural groups.
            </p>

            <p
              className="project-body"
              style={{ marginTop: "1.5rem" }}
            >
              The goal was not simply to create clusters, but to understand
              how those segments could support targeting, cross-selling and
              promotion optimisation.
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          WORKFLOW
      =================================================== */}
      <section className="project-section project-soft">

        <span className="project-label">
          From transactions to segments
        </span>

        <div className="project-workflow">

          {workflow.map((item, index) => (
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
          PCA
      =================================================== */}
      <section className="project-showcase project-light">

        <div className="project-showcase__media">
          <img
            src="/assets/screeplotPOC.png"
            alt="PCA dimensionality reduction"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            PCA
          </span>

          <h3>
            Reduce complexity without losing the signal.
          </h3>

          <p className="project-body">
            Principal Component Analysis helped reduce the dimensionality of
            the behavioural dataset before clustering, making the structure
            easier to analyse and interpret.
          </p>

        </div>

      </section>


      {/* ===================================================
          KMEANS
      =================================================== */}
      <section className="project-showcase project-showcase--reverse project-dark">

        <div className="project-showcase__copy">

          <span className="project-label">
            K-Means
          </span>

          <h3>
            Patterns become customer segments.
          </h3>

          <p className="project-body">
            K-Means was used to identify behavioural clusters based on
            purchasing patterns and turn thousands of individual transactions
            into interpretable customer profiles.
          </p>

        </div>

        <div className="project-showcase__media">
          <img
            src="/assets/codePOC.png"
            alt="K-Means customer segmentation"
          />
        </div>

      </section>


      {/* ===================================================
          BUSINESS RESULTS
      =================================================== */}
      <section className="project-section project-light">

        <span className="project-label">
          Business potential
        </span>

        <div className="project-metrics">

          <div className="project-metric">
            <span className="project-metric__value">
              +2–5%
            </span>

            <span className="project-metric__label">
              Estimated revenue potential
            </span>
          </div>

          <div className="project-metric">
            <span className="project-metric__value">
              +5%
            </span>

            <span className="project-metric__label">
              Potential average basket uplift
            </span>
          </div>

          <div className="project-metric">
            <span className="project-metric__value">
              30K+
            </span>

            <span className="project-metric__label">
              Students analysed
            </span>
          </div>

        </div>

      </section>


      {/* ===================================================
          BUSINESS INTERPRETATION
      =================================================== */}
      <section className="project-section project-soft">

        <div className="project-split">

          <span className="project-label">
            From ML to business
          </span>

          <div>

            <h2 className="project-statement">
              A cluster only matters if someone knows what to do with it.
            </h2>

            <div className="project-workflow">

              {[
                "Targeting opportunities",
                "Cross-selling strategies",
                "Promotion optimisation",
                "Customer-specific recommendations"
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


      {/* ===================================================
          AWS
      =================================================== */}
      <section className="project-section project-dark">

        <div className="project-split">

          <span className="project-label">
            The POC
          </span>

          <div>

            <h2 className="project-statement">
              8 weeks.
              <br />
              $10K.
              <br />
              One business case.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              We designed an eight-week, $10K proof of concept including an AWS
              SageMaker deployment strategy and presented the final business
              recommendations to a jury.
            </p>

          </div>

        </div>

      </section>


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