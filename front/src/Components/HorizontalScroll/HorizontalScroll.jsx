// src/components/HorizontalGallery.jsx
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  {
    key: "p1",
    title: "Yowl – UGC review platform",
    intro:
      " Yowl is a UGC review platform built on top of a custom relational database. Users can create accounts, browse companies or articles, and share reviews in a way that keeps the information structured, searchable, and useful over time.",
    detail:
      " I designed and built Yowl as a full UGC review platform backed by a complex database.Users can create an account, log in securely, and keep a full history of what they’ve read or reviewed. The system lets them search for companies or articles, publish reviews, and interact with other users through feedback.On the data side, I built a flexible schema that automatically creates a company or article entry if it doesn’t exist yet, so the platform can grow organically with user activity. The goal was to keep the UX simple while making sure every interaction is stored in a way that can be analysed later: who reviews what, when, and how.",
    images: [
      {
        src: "./assets/yowl.png",
        alt: "Landscape hero"
      },
      {
        src: "./assets/yowl2.png",
        alt: "Landscape thumbnail"
      }
    ],
    skills: ["Relational database design", "SQL & data modeling", "authentication", "UGC & review workflows", "Backend–frontend integration"],
    variant: "is-yowl"
  },



  
  {
    key: "p2",
    title: "Business Data Analysis Report",
    text:
      "I analysed a full business dataset to extract key insights, build predictive models, and turn the results into concrete recommendations. The goal was to move from raw data to clear actions that could drive better decisions.",
    detail:
      "This report started from a raw dataset that mixed operational and business variables.I used Python in Jupyter Notebook to clean the data, explore patterns, and visualise the main trends. From there, I combined linear regression, Random Forest models, and K-means clustering to answer three questions:– What explains the current performance?– How can we predict future behaviour?– How can we segment the portfolio into meaningful groups?The final deliverable was a structured set of insights and recommendations: which segments to prioritise, which levers have the most impact, and where optimisation efforts would bring the highest return.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1400&auto=format&fit=crop",
        alt: "Oiseau"
      }
    ],
    skills: ["Jupyter Notebook & Python", "K-means clustering", "Exploratory data analysis (EDA)", "Business insight generation", "Data viz", "Linear regression"],
    variant: "is-2"
  },
  {
    key: "p3",
    title: "Suspendisse",
    text:
      "Mollis et elit eget, venenatis dictum nisl. In vel sagittis velit.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
        alt: "Montagne/lac"
      },
      {
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=700&auto=format&fit=crop",
        alt: "Lune"
      }
    ],
    variant: "is-3"
  }
];

export default function HorizontalGallery() {
  const wrapperRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [isYowlOpen, setIsYowlOpen] = useState(false);
  const [isP2Open, setIsP2Open] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
          const panels = gsap.utils.toArray(".cc-hs-panel");
          if (!panels.length || !trackRef.current || !viewportRef.current)
            return;

          const endDistance = () => window.innerWidth * (panels.length - 1);

          const scrollTween = gsap.to(trackRef.current, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: viewportRef.current,
              pin: true,
              scrub: 1,
              end: () => `+=${endDistance()}`
            }
          });

          gsap.utils.toArray(".cc-hs-img").forEach((el) => {
            gsap.fromTo(
              el,
              { yPercent: -3, scale: 1 },
              {
                yPercent: 3,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: el.closest(".cc-hs-panel"),
                  containerAnimation: scrollTween,
                  start: "left right",
                  end: "right left",
                  scrub: true
                }
              }
            );
          });
        },
        all: () => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            ScrollTrigger.getAll().forEach((st) => st.disable());
            if (trackRef.current) {
              gsap.set(trackRef.current, { clearProps: "all" });
            }
          }
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const toggleYowlOverlay = () => {
    setIsYowlOpen((prev) => !prev);
  };

  const toggleP2Overlay = () => {
    setIsP2Open((prev) => !prev);
  };

  return (
    <section className="cc-hs" ref={wrapperRef}>
      <div className="cc-hs-viewport" ref={viewportRef}>
        <div className="cc-hs-track" ref={trackRef}>
          {PANELS.map((p) => {
            // 🔹 PANEL 1 : layout spécial Yowl
            if (p.key === "p1") {
              const heroImg = p.images[0];
              const thumbImg = p.images[1] || p.images[0];

              return (
                <article
                  key={p.key}
                  className="cc-hs-panel cc-hs-panel--yowl"
                >
                  <div className="yowl-top">
                    <h1 className="yowl-title">{p.title}</h1>
                    <p className="yowl-intro">{p.intro}</p>
                  </div>

                  <div className="yowl-layout">
                    <figure
                      className="yowl-hero"
                      onClick={toggleYowlOverlay}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isYowlOpen}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleYowlOverlay();
                        }
                      }}
                    >
                      <img
                        className="cc-hs-img"
                        src={heroImg.src}
                        alt={heroImg.alt}
                        loading="lazy"
                      />

                      <div
                        className={
                          "yowl-hero-overlay" +
                          (isYowlOpen ? " is-visible" : "")
                        }
                      >
                        <div className="yowl-hero-overlay-inner">
                          <h3>About this project</h3>
                          <p>{p.detail}</p>
                        </div>
                      </div>
                    </figure>

                    <aside className="yowl-aside">
                      <figure className="yowl-thumb">
                        <img
                          className="cc-hs-img"
                          src={thumbImg.src}
                          alt={thumbImg.alt}
                          loading="lazy"
                        />
                      </figure>

                      <div className="yowl-skills">
                        <h3 className="yowl-skills-title">Skills acquired</h3>
                        <div className="yowl-skill-chips">
                          {p.skills.map((skill) => (
                            <span key={skill} className="yowl-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </aside>
                  </div>
                </article>
              );
            }

            // 🔹 PANELS CLASSIQUES (dont le 2e avec skills + overlay)
            return (
              <article
                key={p.key}
                className={`cc-hs-panel ${p.variant || ""} ${
                  p.skills ? "has-skills" : ""
                }`}
              >
                <header className="cc-hs-header">
                  <h2 className="cc-hs-title">{p.title}</h2>
                  <p className="cc-hs-text">{p.text}</p>
                </header>

                {p.skills && (
                  <div className="hs-skills">
                    <h3 className="hs-skills-title">Skills acquired</h3>
                    <div className="hs-skill-chips">
                      {p.skills.map((s) => (
                        <span key={s} className="hs-chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="cc-hs-media">
                  {p.images.map((img, i) => {
                    // Panel 2 : grande image avec overlay
                    if (p.key === "p2" && i === 0) {
                      return (
                        <figure
                          key={i}
                          className={`cc-hs-figure i-${i + 1} p2-hero`}
                          onClick={toggleP2Overlay}
                          role="button"
                          tabIndex={0}
                          aria-pressed={isP2Open}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleP2Overlay();
                            }
                          }}
                        >
                          <img
                            className="cc-hs-img"
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                          />

                          <div
                            className={
                              "p2-hero-overlay" +
                              (isP2Open ? " is-visible" : "")
                            }
                          >
                            <div className="p2-hero-overlay-inner">
                              <h3>About this project</h3>
                              <p>{p.detail}</p>
                            </div>
                          </div>
                        </figure>
                      );
                    }

                    // Panel classique
                    return (
                      <figure
                        key={i}
                        className={`cc-hs-figure i-${i + 1}`}
                      >
                        <img
                          className="cc-hs-img"
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                        />
                      </figure>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
