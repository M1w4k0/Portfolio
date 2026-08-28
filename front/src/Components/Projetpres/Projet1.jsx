import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet1() {

  const skills = [
    "SQL Database Design",
    "Data Modelling",
    "React Front-End",
    "Authentication Flows",
    "REST API Integration",
    "UX Writing"
  ];

  return (
    <div className="project-page">

      {/* ===================================================
          COVER
      =================================================== */}
      <section className="project-cover project-dark">

        <div className="project-cover__top">

          <span className="project-number">
            01
          </span>

          <div className="project-cover__meta">
            <span>FULL-STACK PRODUCT</span>
            <span>DATA / UX / AUTOMATION</span>
            <span>PERSONAL PROJECT</span>
          </div>

        </div>

        <div className="project-cover__main">
          <p className="project-kicker">
            User-generated review platform
          </p>

          <h1 className="project-display">
            YOWL
          </h1>
        </div>

        <div className="project-cover__image">
          <img
            src="/assets/broxw.png"
            alt="Yowl review platform"
          />
        </div>

      </section>


      {/* ===================================================
          THE IDEA
      =================================================== */}
      <section className="project-section project-light">

        <div className="project-divider" />

        <div className="project-split">

          <div className="project-split__label">
            <span className="project-label">
              The idea
            </span>
          </div>

          <div>
            <h2 className="project-statement">
              A review platform where every interaction can enrich the dataset.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              Yowl is a review platform I designed and built around a complex
              database. Users can create an account, log in, search for
              companies or articles, publish reviews, and interact with other
              users.
            </p>

            <p
              className="project-body"
              style={{ marginTop: "1.5rem" }}
            >
              If a company or article does not exist yet, it can be created
              directly from the interface, allowing the dataset to continuously
              grow with user activity.
            </p>

          </div>

        </div>


        <div className="yowl-flow">
          <div>SEARCH</div>
          <div>DISCOVER</div>
          <div>CREATE</div>
          <div>REVIEW</div>
          <div>INTERACT</div>
        </div>

      </section>


      {/* ===================================================
          ACCOUNT
      =================================================== */}
      <section className="project-showcase project-soft">

        <div className="project-showcase__media">
          <img
            src="/assets/account.png"
            alt="Yowl account creation"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            01 / Account
          </span>

          <h3>
            Entering the platform.
          </h3>

          <p className="project-body">
            The authentication flow allows users to create an account and
            access the platform through a structured user system connected to
            the database.
          </p>

        </div>

      </section>


      {/* ===================================================
          CATEGORIES
      =================================================== */}
      <section className="project-showcase project-showcase--reverse project-light">

        <div className="project-showcase__copy">

          <span className="project-label">
            02 / Discover
          </span>

          <h3>
            Finding what matters.
          </h3>

          <p className="project-body">
            Users can navigate through categories, companies and articles to
            find existing content before contributing their own review.
          </p>

        </div>

        <div className="project-showcase__media">
          <img
            src="/assets/catégories.png"
            alt="Yowl categories"
          />
        </div>

      </section>


      {/* ===================================================
          REVIEWS
      =================================================== */}
      <section className="project-showcase project-dark">

        <div className="project-showcase__media">
          <img
            src="/assets/review.png"
            alt="Yowl review interface"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            03 / Reviews
          </span>

          <h3>
            Where the data starts becoming useful.
          </h3>

          <p className="project-body">
            Reviews and user activity form the foundation of a dataset that
            could later support scoring systems, dashboards and recommendation
            models.
          </p>

        </div>

      </section>


      {/* ===================================================
          DATA
      =================================================== */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            Behind the interface
          </span>

          <div>

            <h2 className="project-statement">
              The interface is only half the story.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              Behind Yowl, I focused on modelling entities such as users,
              companies, articles and reviews, while also structuring activity
              tracking so the platform could eventually feed analytical and
              recommendation systems.
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          SKILLS
      =================================================== */}
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








// import React from "react";
// import "./Projet1.css";

// export default function Projet1() {

//   const skills = [
//     "SQL database design",
//     "Data modelling",
//     "React front-end",
//     "Authentication flows",
//     "REST API integration",
//     "UX writing"
//   ];

//   return (
//     <>
//       <section id="project-1" className="hero">
//         {/* IMAGE À GAUCHE */}
//         <div className="hero-left">
//           <img
//             src="./assets/broxw.png"   // maquette Yowl
//             alt="Yowl UGC platform"
//             className="hero-img1"
//           />
//         </div>

//         {/* TEXTE À DROITE */}
//         <div className="hero-right">
//           <div className="hero-main-text">
//             <h1>
//               YOWL, A USER-GENERATED<br />
//               REVIEW PLATFORM
//             </h1>
//             <h2>
//               A full-stack product built to explore<br />
//               data, UX and automation.
//             </h2>
//           </div>

//           <p className="hero-description">
//             Yowl is a review platform I designed and built around a complex
//             database. Users can create an account, log in, search for
//             companies or articles, publish reviews, and interact with other
//             users. If a company or article doesn’t exist yet, it can be
//             created directly from the interface, which enriches the dataset
//             over time.
//             <br /><br />
//             Behind the interface, I focused on data structure and analysis:
//             modelling entities (users, companies, reviews), tracking activity,
//             and preparing the project so it could later feed scoring models,
//             dashboards, or recommendation systems for business use. the website is not online for now.
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
//               src="./assets/account.png"
//               alt="Account creation – Yowl"
//               className="imageee"
//             />
//           </div>
//           <div className="hero-gallery-item">
//             <img
//               src="./assets/catégories.png"
//               alt="Categories and navigation – Yowl"
//               className="imageee"
//             />
//           </div>
//           <div className="hero-gallery-item">
//             <img
//               src="./assets/review.png"
//               alt="Review page – Yowl"
//               className="imageee"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
