
import "./Experiences.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ParallaxPage from "../../Components/ParallaxPage/ParallaxDemo.jsx";

export default function Experiences() {

  const [openIndex, setOpenIndex] = useState(null);

  
const panels = [
  {
    num: "01",
    title: "ORANGE - APR 2020",
    desc:
      "This first experience gave me my initial exposure to Profesional wordl and real responsibilities — enough to spark my interest in tech & innovation.",
    content:
       "- First look inside a major tech company\n" +
      "- Discovery of networks, systems and behind-the-scenes operations\n" +
      "- Observation of how data, people and technology connect\n\n" +
      "**This experience sparked my curiosity for the hidden logic of tech and the world of innovation.**",

    img: "./assets/orange.jpg",
    alt: "Intro message",
  },
  {
    num: "02",
    title: "NEOMA - SEPT 2023 to JUN 2028",
    desc:
      "Joining NEOMA pushed me to connect creativity and technology every day. I learned to build ideas that actually work — not just concepts on paper.",
    content:
      "- Courses in information systems, CRM, design and strategy\n" +
      "- Specialisation in Consulting, SQL and Database Management\n" +
      "- Double degree with CentraleSupélec\n" +
      "- Involvement in a digital & tech association\n\n" +
      "**NEOMA strengthened my analytical thinking and my ability to bridge business and technology.**",
    img: "./assets/neoma.webp",
    alt: "Preparation questions",
  },
  {
    num: "03",
    title: "DSD - JAN 2024 to NOW",
    desc:
      "At DSD, I learned to manage teams, handle fast-paced situations, and keep a professional mindset even under pressure.",
    content:
      "- Management of hostess teams\n" +
      "- Coordination of premium events\n" +
      "- Adaptation to last-minute client needs\n\n" +
      "**This role sharpened my communication, leadership and adaptability.**",
    img: "./assets/fashion.jpg",
    alt: "Strategic discussion",
  },
  {
    num: "04",
    title: "MALAKOFF HUMANIS - APR to JUN 2024",
    desc:
      "This internship taught me how data and marketing work together — from benchmarking competitors to improving visibility and content.",
    content:
      "- Benchmarking of insurance and health competitors\n" +
      "- SEO and visibility optimisation\n" +
      "- Creation of marketing materials for internal teams and partners\n\n" +
      "**This internship improved my strategic mindset and my ability to use data for marketing decisions.**",
    img: "./assets/Malak.jpg",
    alt: "Strategic discussion",
  },
  {
    num: "05",
    title: "EPITECH - OCT 2024 to FEB 2025",
    desc:
      "Epitech boosted my technical skills fast — coding, data, SQL, and real projects like analytics tools and recommendation systems.",
    content:
      "- Training in Python, SQL, databases and web development\n" +
      "- Development of an open-data analysis platform\n" +
      "- Creation of a personalised recommendation system\n\n" +
      "**Epitech strengthened my practical technical skills and my full-stack data approach.**",
    img: "./assets/epi.png",
    alt: "Strategic discussion",
  },
  {
    num: "06",
    title: "VENTE UNIQUE - JUNE to DEC 2025",
    desc:
      "I worked on CRM and customer data, automating dashboards and supporting teams to optimize campaigns and product decisions.",
    content:
      "- Customer data segmentation\n" +
      "- Automation of dashboards and reports\n" +
      "- A/B testing and campaign optimisation\n" +
      "- Collaboration with tech and product teams\n\n" +
      "**This role strengthened my data-driven decision making and my ability to automate processes.**",
    img: "./assets/ventes.webp",
    alt: "Strategic discussion",
  },
  {
    num: "07",
    title: "QUEENS - JAN to MAY 2026",
    desc:
      "My exchange at Queen’s will deepen my skills in data science and AI — helping me grow technically and approach problems with a more global mindset.",
    content:
      "- AI coding for business\n" +
      "- Data management and analytics\n" +
      "- Data science fundamentals\n" +
      "- Negotiation and behavioural sciences\n\n" +
      "**This exchange will enhance my data science skills and my ability to work in an international context.**",
    img: "./assets/queens.webp",
    alt: "Strategic discussion",
  },
];


  return (
    <>
      <div className="experiences">
        <section className="cc-case">
          <div className="cc-case__num">( 02 )</div>

          <div className="cc-case__tag">
            <span className="cc-dot" /> Cut Through. Move Forward.
          </div>

          <h2 className="cc-case__title">Discover my <br/>journey</h2>

          <div className="cc-case__body">
            <p className="cc-lead">
              I used to think my experiences in companies, projects, and travels had nothing to do with each other — 
              just separate chapters I was collecting along the way.
            </p>
            <p>
              What surprised me later was how much each of them shaped me, sharpened my curiosity, 
              and clarified what I wanted to do.
            </p>

            <a href="#stories" className="cc-button cc-button--ghost">
              Explore projects
            </a>
          </div>
        </section>
        <ParallaxPage />

        <section className="cc-fullstory">
          <p className="cc-fullstory-kicker">
            To understand why I code the way I do, you need to know where it all began.
          </p>

          <h2 className="cc-fullstory-title">
            <span>WANT THE FULL</span>
            <span>STORY ?</span>
          </h2>

          <p className="cc-fullstory-cta"><em>Keep reading.</em></p>
        </section>

        <section className="tp-process" aria-labelledby="tp-title">

          <div className="cc-pointtxt">
            <div className="tp-left">
              <div className="tp-kicker">
                <span className="tp-bullet" aria-hidden="true" /> The Process
              </div>
            </div>

            <div className="tp-right">
              <p className="tp-intro-italic">
                To make it clearer, here’s a short recap of the key experiences that built my skills, my goals, and the way I work today.
              </p>
            </div>
          </div>
          <div className="tp-grid">

            {/* Lignes/volets */}
            <div className="tp-rows">
              {panels.map((p, i) => {
                const isOpen = openIndex === i;
                return (
                  <article
                    key={p.num}
                    className={`tp-row ${isOpen ? "is-open" : ""}`}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    {/* Ligne séparatrice */}
                    <div className="tp-divider" />

                    {/* Colonne gauche: N° géant gris clair */}
                    <div className="tp-left">
                      <div className="tp-num" aria-hidden="true">{p.num}</div>
                    </div>

                    {/* Colonne droite: Titre + desc (affiché en compact) */}
                    <div className="tp-right">
                      <button
                        type="button"
                        className="tp-head"
                        aria-expanded={isOpen}
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                      >
                        <h3 className="tp-title">{p.title}</h3>
                        <p className="tp-desc">{p.desc}</p>
                      </button>

                      {/* Zone extensible (pousse vers le bas) */}
                      <div className="tp-body" role="region" aria-label={p.title}>
                        <div className="tp-body-grid">
                          <p
                          className="tp-body-text"
                          dangerouslySetInnerHTML={{
                            __html: p.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          }}
                        ></p>
                          <figure className="tp-figure">
                            <img src={p.img} alt={p.alt} loading="lazy" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="cc-cta-wrap">
            <h2 id="cta-title" className="cc-cta-title">
              Today, I use what I learned almost every day — working, studying, and making 
              decisions with a sense of purpose that grew from all those moments, even the unexpected ones.
            </h2>

            <NavLink to="/contact"><button className="cc-cta-btn" href="#book">
              Contact me
            </button></NavLink>
          </div>
        </section>

      </div>
    </>
  );
}

