import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet6() {

  const skills = [
    "Product Ideation",
    "Market & Competitor Analysis",
    "Brand Identity & Visual Design",
    "UX/UI Prototyping",
    "Pitching & Storytelling",
    "Business Model Design",
    "User Research",
    "Team Collaboration"
  ];

  const process = [
    "User Insight",
    "Market Analysis",
    "Brand Identity",
    "Product",
    "Business Model",
    "App Prototype",
    "Pitch",
    "1st Place"
  ];

  return (
    <div className="project-page">

      {/* COVER */}
      <section className="project-cover project-dark">

        <div className="project-cover__top">

          <span className="project-number">
            06
          </span>

          <div className="project-cover__meta">
            <span>NEOMA STARTUP CHALLENGE</span>
            <span>2025</span>
            <span className="project-lime">
              1ST PLACE
            </span>
          </div>

        </div>

        <div className="project-cover__main">

          <p className="project-kicker">
            Personalised healthy snack experience
          </p>

          <h1 className="project-display">
            SNACK'
            <br />
            UP
          </h1>

        </div>

        <div className="project-cover__image">
          <img
            src="/assets/snack1.png"
            alt="SnackUp startup"
          />
        </div>

      </section>


      {/* RESULT */}
      <section className="project-result project-light">

        <span className="project-label">
          NEOMA Startup Challenge 2025
        </span>

        <div
          className="project-result__number"
          style={{ marginTop: "5rem" }}
        >
          1ST
        </div>

        <h2
          className="project-title"
          style={{ marginTop: "3rem" }}
        >
          PLACE
        </h2>

      </section>


      {/* PROBLEM */}
      <section className="project-section project-soft">

        <div className="project-split">

          <span className="project-label">
            The problem
          </span>

          <div>

            <h2 className="project-statement">
              Healthy does not always mean personal.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              Students, young professionals and athletes often struggle to find
              healthy, natural snacks adapted to their actual needs.
            </p>

            <p
              className="project-body"
              style={{ marginTop: "1.5rem" }}
            >
              Many existing options are ultra-processed, high in sugar or simply
              disconnected from individual goals.
            </p>

          </div>

        </div>

      </section>


      {/* USERS */}
      <section className="project-section project-dark">

        <span className="project-label">
          Who
        </span>

        <div
          className="project-big-words"
          style={{ marginTop: "5rem" }}
        >
          <span className="project-big-word">
            STUDENTS
          </span>

          <span className="project-big-word">
            PROFESSIONALS
          </span>

          <span className="project-big-word">
            ATHLETES
          </span>
        </div>

      </section>


      {/* ANSWER */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            The answer
          </span>

          <div>

            <h2 className="project-statement">
              A box built around you.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              Snack'Up combines a personalised healthy snack-box service with a
              mobile application.
            </p>

            <p
              className="project-body"
              style={{ marginTop: "1.5rem" }}
            >
              Users build boxes tailored to goals such as focus, energy,
              performance or reducing processed food.
            </p>

          </div>

        </div>

      </section>


      {/* VISUAL */}
      <section className="project-showcase project-soft">

        <div className="project-showcase__media">
          <img
            src="/assets/snack2.png"
            alt="SnackUp product concept"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Product
          </span>

          <h3>
            The physical experience.
          </h3>

        </div>

      </section>


      {/* APP */}
      <section className="project-showcase project-showcase--reverse project-dark">

        <div className="project-showcase__copy">

          <span className="project-label">
            Digital
          </span>

          <h3>
            The box meets the app.
          </h3>

          <p className="project-body">
            The mobile concept connects personal goals with a curated snack
            experience.
          </p>

        </div>

        <div className="project-showcase__media">
          <img
            src="/assets/snack4.png"
            alt="SnackUp mobile app"
          />
        </div>

      </section>


      {/* BRAND */}
      <section className="project-showcase project-light">

        <div className="project-showcase__media">
          <img
            src="/assets/snack3.png"
            alt="SnackUp visual identity"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Brand
          </span>

          <h3>
            From idea to identity.
          </h3>

          <p className="project-body">
            The team developed the visual identity, product offering, market
            positioning and overall startup narrative.
          </p>

        </div>

      </section>


      {/* PROCESS */}
      <section className="project-section project-soft">

        <span className="project-label">
          From idea to startup
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
// import "./Projet1.css";

// export default function Projet1() {

//   const skills = [
//     "Product ideation & concept development",
//     "Market & competitor analysis",
//     "Brand identity & visual design",
//     "UX/UI prototyping",
//     "Pitching & storytelling",
//     "Business model design",
//     "User research",
//     "Team collaboration"
//   ];

//   return (
//     <>
//       <section id="project-6" className="hero2">
        
//         {/* IMAGE LEFT */}
//         <div className="hero-left">
//           <img
//             src="./assets/snack1.png"   // Replace with your Snack’Up mockup
//             alt="Snack'Up healthy snack startup project"
//             className="hero-img1"
//           />
//         </div>

//         {/* TEXT RIGHT */}
//         <div className="hero-right">
//           <div className="hero-main-text">
//             <h1>
//               SNACK’UP, A PERSONALISED<br />
//               HEALTHY SNACK EXPERIENCE
//             </h1>
//             <h2>
//               A full startup project created for the NEOMA<br />
//               Startup Challenge 2025 which we ultimately won, ranking 1st.
//             </h2>
//           </div>

//           <p className="hero-description">
//             Snack’Up was created from a simple insight: students, young professionals, 
//             and athletes struggle to find healthy, natural snacks that truly match their needs. 
//             Most options are ultra-processed, high in sugar, or not adapted to personal goals.
//             <br /><br />
//             Our answer: a personalised snack-box service paired with a mobile app. 
//             Users build their own box of healthy snacks tailored to focus, energy, performance, or reducing processed food.
//             <br /><br />
//             As a team, we designed everything end-to-end: brand, product offering, business model, 
//             app concept, market analysis, and pitch deck. This challenge taught 
//             us to turn an idea into a coherent, user-centred startup.
//           </p>

//           {/* SKILLS */}
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

//         {/* BUTTON */}
//         <button className="hero-about">
//           <span className="hero-dot">●</span>
//           <span>More about this project</span>
//         </button>
//       </section>

//       {/* GALLERY */}
//       <section className="hero-gallery2">
//         <div className="hero-gallery-inner">
//           <div className="hero-gallery-item2">
//             <img
//               src="./assets/snack2.png"
//               alt="Snack'Up product concept"
//               className="imageee"
//             />
//           </div>

//           <div className="hero-gallery-item2">
//             <img
//               src="./assets/snack3.png"
//               alt="Snack'Up visual identity"
//               className="imageee"
//             />
//           </div>

//           <div className="hero-gallery-item2">
//             <img
//               src="./assets/snack4.png"
//               alt="Snack'Up mobile app concept"
//               className="imageee"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
