import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet7() {

  const skills = [
    "Power BI",
    "Power Query",
    "DAX",
    "HR Data Analysis",
    "Dashboard Design",
    "Business Intelligence",
    "KPI Analysis",
    "Data Storytelling"
  ];

  const dimensions = [
    "Salaries",
    "Budgets",
    "Training",
    "Career Progression",
    "Mobility",
    "Diversity",
    "Demographics"
  ];

  return (
    <div className="project-page">

      {/* ===================================================
          COVER
      =================================================== */}
      <section className="project-cover project-light">

        <div className="project-cover__top">

          <span className="project-number">
            07
          </span>

          <div className="project-cover__meta">
            <span>BUSINESS INTELLIGENCE</span>
            <span>POWER BI / DAX</span>
            <span>HR ANALYTICS</span>
          </div>

        </div>

        <div className="project-cover__main">

          <p className="project-kicker">
            HR Data Analysis
          </p>

          <h1 className="project-display">
            70 YEARS
            <br />
            OF DATA.
          </h1>

        </div>

        <div className="project-cover__image">
          <img
            src="/assets/dashboardPBI.png"
            alt="HR Power BI dashboard"
          />
        </div>

      </section>


      {/* ===================================================
          SCALE
      =================================================== */}
      <section className="project-section project-dark">

        <span className="project-label">
          The dataset
        </span>

        <div className="project-metrics">

          <div className="project-metric">
            <span className="project-metric__value">
              70+
            </span>

            <span className="project-metric__label">
              Years of HR data
            </span>
          </div>

          <div className="project-metric">
            <span className="project-metric__value">
              11K+
            </span>

            <span className="project-metric__label">
              Employees
            </span>
          </div>

          <div className="project-metric">
            <span className="project-metric__value">
              07
            </span>

            <span className="project-metric__label">
              Business dimensions
            </span>
          </div>

        </div>

      </section>


      {/* ===================================================
          QUESTION
      =================================================== */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            The challenge
          </span>

          <div>

            <h2 className="project-statement">
              How do you make decades of HR data understandable in a few seconds?
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              I worked on a multidimensional HR dataset covering more than
              70 years and over 11,000 employees.
            </p>

            <p
              className="project-body"
              style={{ marginTop: "1.5rem" }}
            >
              The objective was to transform historical workforce data into a
              clear analytical environment where users could identify trends,
              performance gaps and structural differences.
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          DIMENSIONS
      =================================================== */}
      <section className="project-section project-soft">

        <span className="project-label">
          What I analysed
        </span>

        <div className="project-workflow">

          {dimensions.map((item, index) => (
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
          POWER BI
      =================================================== */}
      <section className="project-showcase project-dark">

        <div className="project-showcase__media">
          <img
            src="/assets/dataPBI.png"
            alt="Interactive HR Power BI dashboard"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Power BI
          </span>

          <h3>
            From rows to decisions.
          </h3>

          <p className="project-body">
            I designed an interactive Power BI dashboard to explore budgets,
            salaries, career progression, diversity, training and workforce
            mobility through a single analytical interface.
          </p>

        </div>

      </section>


      {/* ===================================================
          STACK
      =================================================== */}
      <section className="project-two-sides project-light">

        <div className="project-side">

          <span className="project-label">
            Data preparation
          </span>

          <h3>
            BUILD
          </h3>

          <ul>
            <li>Power Query</li>
            <li>Data cleaning</li>
            <li>Transformation</li>
            <li>Data modelling</li>
            <li>Calculated columns</li>
          </ul>

        </div>

        <div className="project-side">

          <span className="project-label">
            Analysis
          </span>

          <h3>
            READ
          </h3>

          <ul>
            <li>DAX measures</li>
            <li>KPIs</li>
            <li>Trend analysis</li>
            <li>Performance gaps</li>
            <li>Interactive reporting</li>
          </ul>

        </div>

      </section>


      {/* ===================================================
          TAKEAWAY
      =================================================== */}
      <section className="project-result project-dark">

        <span className="project-label">
          The goal
        </span>

        <h2
          className="project-statement"
          style={{ marginTop: "4rem" }}
        >
          Make complex workforce data useful to the people making decisions.
        </h2>

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