import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet4() {

  const skills = [
    "End-to-End Project Management",
    "CRM Automation / Emarsys",
    "Dartagnan HTML Templating",
    "Stakeholder Coordination",
    "Email UX & Localization"
  ];

  const workflow = [
    "Translation",
    "Design",
    "HTML Template",
    "Segmentation",
    "Tracking",
    "Automation",
    "Deployment"
  ];

  return (
    <div className="project-page">

      <section className="project-cover project-dark">

        <div className="project-cover__top">

          <span className="project-number">
            04
          </span>

          <div className="project-cover__meta">
            <span>VENTE-UNIQUE</span>
            <span>CRM</span>
            <span>SCANDINAVIAN LAUNCH</span>
          </div>

        </div>

        <div className="project-cover__main">

          <p className="project-kicker">
            CRM expansion project
          </p>

          <h1 className="project-display">
            3 COUNTRIES.
            <br />
            1 LAUNCH.
          </h1>

        </div>

      </section>


      {/* COUNTRIES */}
      <section className="project-section project-light">

        <span className="project-label">
          Markets
        </span>

        <div className="crm-countries">
          <div className="crm-country">SWEDEN</div>
          <div className="crm-country">DENMARK</div>
          <div className="crm-country">NORWAY</div>
        </div>

      </section>


      {/* IMAGE */}
      <section className="project-big-image">
        <img
          src="/assets/scandinaves.png"
          alt="CRM Scandinavian launch"
        />
      </section>


      {/* MISSION */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            The mission
          </span>

          <div>

            <h2 className="project-statement">
              From translation to automation.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              For Vente-Unique's Scandinavian expansion, I was partly
              responsible for the rollout of CRM communications across Sweden,
              Denmark and Norway.
            </p>

            <p
              className="project-body"
              style={{ marginTop: "1.5rem" }}
            >
              I helped coordinate email and push assets, manage translation
              workflows, build templates in Dartagnan and deploy automated
              communications in Emarsys.
            </p>

          </div>

        </div>

      </section>


      {/* WORKFLOW */}
      <section className="project-section project-dark">

        <span className="project-label">
          One launch, many moving parts
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


      {/* EXCEL */}
      <section className="project-showcase project-soft">

        <div className="project-showcase__media">
          <img
            src="/assets/excel1.png"
            alt="CRM coordination workflow"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Coordination
          </span>

          <h3>
            Keeping every asset aligned.
          </h3>

          <p className="project-body">
            Planning and coordination became essential when multiple countries,
            languages and teams had to move at the same pace.
          </p>

        </div>

      </section>


      {/* CAMPAIGN */}
      <section className="project-showcase project-showcase--reverse project-light">

        <div className="project-showcase__copy">

          <span className="project-label">
            Localization
          </span>

          <h3>
            One brand.
            <br />
            Three markets.
          </h3>

          <p className="project-body">
            Email UX, translations and campaign templates had to stay
            consistent while adapting to local markets.
          </p>

        </div>

        <div className="project-showcase__media">
          <img
            src="/assets/campagne.png"
            alt="Scandinavian CRM campaigns"
          />
        </div>

      </section>


      {/* AUTOMATION */}
      <section className="project-section project-dark">

        <span className="project-label">
          Automation
        </span>

        <h2
          className="project-statement"
          style={{ marginTop: "5rem" }}
        >
          Automation never means automatic.
        </h2>

        <div className="project-workflow">

          {[
            "Welcome flows",
            "Abandoned carts",
            "Loyalty programs",
            "Reactivation journeys"
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

      </section>


      {/* TEAMS */}
      <section className="project-section project-light">

        <div className="project-split">

          <div>
            <span className="project-label">
              Cross-team
            </span>

            <div
              className="project-big-words"
              style={{ marginTop: "4rem" }}
            >
              <span className="project-big-word">STUDIO</span>
              <span className="project-big-word">PRODUCT</span>
              <span className="project-big-word">CRM</span>
              <span className="project-big-word">TECH</span>
            </div>
          </div>

          <div>

            <h2 className="project-statement">
              The challenge was aligning people, timing and systems.
            </h2>

          </div>

        </div>

      </section>


      <section className="project-disciplines project-soft">

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
// import "./Projet3.css";

// export default function Projet2() {

//   const skills = [
//   "End-to-end project management",
//   "CRM Automation (Emarsys)",
//   "Dartagnan HTML templating",
//   "Stakeholder coordination",
//   "Email UX & localization",
// ];

//   return (
//     <>
//       <section id="project-4" className="hero2">

//         {/* IMAGE À GAUCHE */}
//         <div className="hero-left">
//           <img
//             src="./assets/scandinaves.png"
//             alt="Nordic countries CRM launch"
//             className="hero-img4"
//           />
//         </div>

//         {/* TEXTE À DROITE */}
//         <div className="hero-right">
//           <div className="hero-main-text">
//             <h1>
//               CRM PROJECT, <br />
//              SCANDINAVIAN LAUNCH
//             </h1>
//             <h2>
//               End-to-end management of all CRM communications,<br />
//               from translations to automation deployment.
//             </h2>
//           </div>

//           <p className="hero-description">
//             For the Scandinavian expansion of Vente-Unique, I was partly responsible
//             for the full rollout of CRM communications across three new markets: 
//             Sweden, Denmark and Norway.  
//             <br /><br />
//             I helped coordinate the creation of all email and push assets, manage translation workflows, 
//             build templates in Dartagnan, and deploy their automated versions in Emarsy (from abandoned carts to 
//             welcome flows, loyalty programs, and reactivation journeys).
//             <br /><br />
//             This project required strong cross-team collaboration (studio design, 
//             translators, product, CRM, tech), precise planning, and technical rigor 
//             on HTML templates, segmentation rules, tracking, and automation logic.
//           </p>

//           {/* SKILLS */}
//           <div className="hero-skills">
//             <h3>Skills developed</h3>
//             <div className="hero-skills-list">
//               {skills.map((skill, i) => (
//                 <span key={i} className="hero-skill-pill">{skill}</span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ABOUT BTN */}
//         <button className="hero-about">
//           <span className="hero-dot">●</span>
//           <span>More about this project :</span>
//         </button>

//       </section>

//       <section className="hero-gallery2">
//         <div className="hero-gallery-inner">

//           <div className="hero-gallery-item2">
//             <img src="./assets/excel1.png" 
//             alt="Jira workflow"
//             className="imageee" />
//           </div>

//           <div className="hero-gallery-item2">
//             <img src="./assets/campagne.png"
//             alt="Email campaign translations"
//             className="imageee" />
//           </div>

//           <div className="hero-gallery-item2">
//             <img src="./assets/automation.png"
//             alt="Emarsys automations"
//             className="imageee" />
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
