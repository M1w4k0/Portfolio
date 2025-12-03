import React from 'react';
import './Projects.css';
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import Skillsmenu from "../../Components/Skillsmenu/Skillsmenu";


export default function Projectsoff() {

   const signs = [
    "Building tools that scrape, clean, and structure real-world data from scratch.",
    "Designing full-stack features — from database logic to interactive front-end interfaces.",
    "Exploring machine learning through prediction models, recommendation systems, and analytics.",
    "Creating projects that blend data, UX, and automation to solve practical, real problems.",
  ];

  const projects = [

    {
      title1: "Data Analysis &",
      title2: "Insight Generation",
      src: "../assets/data.png"
    },

    {
      title1: "Applied",
      title2: "Machine Learning",
      src: "../assets/ML.jpg"
    },

    {
      title1: "Advanced Python",
      title2: "& SQL Manipulation",
      src: "../assets/sql.png"
    },

    {
      title1: "Full-Stack Web",
      title2: "Development",
      src: "../assets/react.jpg"
    },

    {
      title1: "Web Scraping",
      title2: "& Automation",
      src: "../assets/automation.gif"
    },
    {
      title1: "Data Visualization",
      title2: "& UX design",
      src: "../assets/viz.jpg"
    },
    {
      title1: "Project Management &",
      title2: "A/B Testing",
      src: "../assets/pro.png"
    }

  ]


  return (
    <>
    <section className="ready">
      <div className="cc-case__num">( 03 )</div>

      <header className="ready__header">
        <h2 className="ready__title">
          A preview of what<br />I’ve been building:
        </h2>
      </header>

      <div className="ready__items">
        {signs.map((s, i) => (
          <div className={`ready__item ready__item--${i + 1}`} key={i}>
            <span className="ready__brace">{'{'}</span>
            <p className="ready__text">{s}</p>
          </div>
        ))}
      </div>

      <div className="ready__sideword">
        <span>Get things built.</span>
      </div>
    </section>
    
    
    <div className="projects" id="projects">
      <HorizontalScroll />
      <div className="cc-slice">
  <div className="cc-slice-media">
    <img
      src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1600&auto=format&fit=crop"
      alt="Visuel"
      loading="lazy"
      className="cc-slice-img"
    />
  </div>

  <div className="cc-slice-copy">
    <h2 className="cc-slice-title">Scandinavian launch</h2>
    <p className="cc-slice-text">
      Aliquam metus lacus, efficitur sit amet ligula a, vehicula eleifend dolor. Pellentesque vulputate
      consectetur lectus, sit amet pellentesque leo congue ut. Vivamus turpis est, mollis et elit eget,
      venenatis dictum nisl. Suspendisse sit amet erat vel ipsum elementum mattis. In vel sagittis velit.
    </p>
  </div>
</div>
    </div>


  <section className="skills-test">
      <h1 className="skills-big">SKILLS</h1>
      <main className="main">
      <div className="gallery">
        <p>What I gained</p>
          {projects.map((project, index) => (
            <Skillsmenu project={project} key={index} />
            ))}

      </div>
    </main>
{/* 
      <div className="skills-questions">
        <p>Data Analysis & Insight Generation</p>
        <p>Applied Machine Learning</p>
        <p>Advanced Python & SQL Manipulation</p>
        <p>Full-Stack Web Development</p>
        <p>Web Scraping & Data Automation</p>
        <p>Data Visualization & Storytelling</p>
        <p>Project Management & A/B Testing</p>
        <p>UX-Driven Product Thinking</p>
      </div> */}
    </section>

    
    </>
  );
}
