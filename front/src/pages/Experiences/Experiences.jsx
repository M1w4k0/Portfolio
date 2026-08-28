
import "./Experiences.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ParallaxPage from "../../Components/ParallaxPage/ParallaxDemo.jsx";
import Character from '../../Components/BlurText/Character2';


const paragraph =
  "Today, I use what I learned across these experiences almost every day: combining business thinking, data, technology and an international perspective to solve problems with more clarity and purpose.";

export default function Experiences() {

  const [openIndex, setOpenIndex] = useState(null);

  
const panels = [
  {
    num: "01",
    title: "ORANGE - APR 2020",
    logo: "./assets/Orangelogo.png",
    url: "https://www.orange.com",          // 👈 NEW
    desc:
     "This first internship gave me a glimpse into the professional world and sparked my interest in tech & innovation.",
    content:
      "- Research project in IA and Bigdata \n" +
      "- Introduction to the LPWA & LoRa technologies\n" +
      "- Foundations of telecommunication networks\n\n" +
      "",
    img: "./assets/orange.jpg",
    alt: "Intro message",
  },
  {
    num: "02",
    title: "NEOMA - SEPT 2023 to JUN 2028",
    logo: "./assets/NEOMAlogo.png",
    url: "https://neoma-bs.com",            // 👈 NEW
    desc:
      "Joining NEOMA Business School pushed me to connect creativity and technology every day. I learned to build ideas that actually work, not just concepts on paper.",
    content:
      "- Courses in information systems, CRM, design and strategy\n" +
      "- A future Specialisation in consulting, SQL and database management\n" +
      "- A future double degree with CentraleSupélec\n" +
      "- Involvement in a digital & tech association\n\n" +
      "**NEOMA strengthened my analytical thinking and my ability to bridge business and technology.**",
    img: "./assets/neoma.webp",
    alt: "Preparation questions",
  },
  {
    num: "03",
    title: "DSD - JAN 2024 to NOW",
    logo: "./assets/dsdlogo.png",
    url: "https://www.dsdorganisation.com/",                  // 👈 à ajuster si besoin
    desc:
      "I work part-time in this event staffing agency, I learned to manage teams, handle fast-paced situations, and keep a professional mindset even under pressure.",
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
    logo: "./assets/Malakofflogo.jpg",
    url: "https://www.malakoffhumanis.com", // 👈 NEW
    desc:
      "I completed a 2-month internship at this social protection and insurance group, learning how data and marketing work together.",
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
    logo: "./assets/Epitechlogo.png",
    url: "https://www.epitech.eu",          // 👈 NEW
    desc:
      "Epitech boosted my technical skills fast : coding, data, SQL, and real projects like analytics tools and recommendation systems.",
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
    logo: "./assets/venteuniquelogo.png",
    url: "https://www.vente-unique.com",    // 👈 NEW
    desc:
      "I worked for 6 months on CRM and customer data, focusing on dashboard automation and campaign optimisation.",
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
    title: "QUEEN'S UNIVERSITY - JAN to MAY 2026",
    logo: "./assets/Queenslogo.avif",
    url: "https://www.queensu.ca",
    desc:
      "I completed an exchange semester at Queen’s University in Canada, deepening my skills in data science, AI and business analytics.",
    content:
      "- International Track exchange semester\n" +
      "- Coding AI for Business\n" +
      "- Data Management & Analytics\n" +
      "- Data Science\n" +
      "- Final GPA: 4.08 / 4.30\n\n" +
      "**Queen’s University strengthened my ability to connect technical data skills with real business problems, while also giving me a more international perspective.**",
    img: "./assets/queens.webp",
    alt: "Queen's University exchange in Kingston, Canada",
  },
];


  return (
    <>
      <div className="experiences" id="journey">
        <section className="cc-case">
          <div className="cc-case__num">( 02 )</div>

          <h2 className="cc-case__title">Discover my <br/>journey</h2>

          <div className="cc-case__body">
            <p className="cc-lead">
              I used to think my experiences in companies, projects, and travels had nothing to do with each other :
              just separate chapters I was collecting along the way.
            </p>
            <p>
              What surprised me later was how much each of them shaped me, sharpened my curiosity, 
              and clarified what I wanted to do.
            </p>

            <NavLink to="/projects"><button className="cc-button cc-button--ghost">
               Explore projects
            </button></NavLink>
          </div>
        </section>
        <ParallaxPage />

        <section className="cc-fullstory" id="Jobs">
          <p className="cc-fullstory-kicker">
           Here is the complete journey I've lived to this day through educational, proffessional and international experiences.
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
               A short recap of all my experiences. Hover the items to fetch details...
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
                       <div className="tp-title-row">
                          <h3 className="tp-title">{p.title}</h3>

                              {p.url ? (
                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="tp-logo-link"
                                  aria-label={`Visit ${p.title} website`}
                                  onClick={(e) => e.stopPropagation()} // évite de toggler le panel au clic sur le logo
                                >
                                  <img src={p.logo} alt="" className="tp-logo" />
                                </a>
                              ) : (
                                <img src={p.logo} alt="" className="tp-logo" />
                              )}
                            </div>
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
              <Character paragraph={paragraph}/>
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

