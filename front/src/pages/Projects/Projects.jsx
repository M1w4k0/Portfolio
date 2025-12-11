import React from 'react';
import './Projects.css';
// import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import Skillsmenu from "../../Components/Skillsmenu/Skillsmenu";
import Projet1 from "../../Components/Projetpres/Projet1";
import Projet2 from "../../Components/Projetpres/Projet2";
import Projet3 from "../../Components/Projetpres/Projet3";
import Projet4 from "../../Components/Projetpres/Projet4";
import Projet5 from "../../Components/Projetpres/Projet5";



export default function Projectsoff() {
  
 const signs = [
  "Building a modern UGC review platform with custom UI and routing.",
  "Turning raw business data into clean insights and detailed visuals.",
  "Developing a full dynamic e-commerce site with secure features.",
  "Deploying an efficient CRM workflow for a Scandinavian product launch.",
];

  const projects = [
  {
    title1: "YOWL UGC",
    title2: "Plateform",
    src: "../assets/broxw.png",
    anchor: "#project-1"
  },
  {
    title1: "Business data",
    title2: "analyse report",
    src: "../assets/ndata.png",
    anchor: "#project-2"
  },
  {
    title1: "Myshop e-commerce",
    title2: "website",
    src: "../assets/myshop2.png",
    anchor: "#project-3"
  },
  {
    title1: "CRM ",
    title2: "scandinavian launch",
    src: "../assets/scandinaves2.png",
    anchor: "#project-4"
  }
];



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

  <section className='Fondmain'>
    <main className="main">
      <div className="gallery">
        <p className='gallerytitle'>Table of content</p>
          {projects.map((project, index) => (
            <Skillsmenu project={project} key={index} />
            ))}

      </div>
    </main>
    </section>

    <Projet1 />
    {/* <div className='fond'></div> */}
    <Projet2/>
     {/* <div className='fond'></div> */}
    <Projet3 />
     {/* <div className='fond'></div> */}
    <Projet4 />
    <Projet5 />


    <div className="projects" id="projects">
      {/* <HorizontalScroll /> */}
    
    </div>


  <section className="skills-test">
      <h1 className="skills-big">SKILLS</h1>
       <h1 className="skills-title">& tools I master</h1>
      <div className="skills-questions">
        <p>Data Analysis & Insight Generation</p>
        <p>Applied Machine Learning</p>
        <p>Advanced Python & SQL Manipulation</p>
        <p>Full-Stack Web Development</p>
        <p>Web Scraping & Data Automation</p>
        <p>Data Visualization & Storytelling</p>
        <p>Project Management & A/B Testing</p>
        <p>UX-Driven Product Thinking</p>
      </div>
    </section>

    <section className="press-logos">
      <div className="press-grid">

      <a href="https://emarsys.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/emarsyslogo.png" alt="Emarsys Marketing Platform" />
      </a>

      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/GitHublogo.png" alt="GitHub" />
      </a>

      <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/sqllogo.png" alt="MySQL Database" />
      </a>

      <a href="https://jupyter.org" target="_blank" rel="noopener noreferrer">
        <img src="/assets/jupyterlogo.png" alt="Jupyter Notebook" />
      </a>

      <a href="https://www.eulerian.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/eulerienlogo.png" alt="Eulerian Analytics" />
      </a>

      <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
        <img src="/assets/pythonlogo.jpg" alt="Python Programming Language" />
      </a>

      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src="/assets/reactlogo.png" alt="React JavaScript Library" />
      </a>

      <a href="https://powerbi.microsoft.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/powerbilogo.png" alt="Microsoft Power BI" />
      </a>

      <a href="https://www.php.net" target="_blank" rel="noopener noreferrer">
        <img src="/assets/phplogo.png" alt="PHP Backend Language" />
      </a>

      <a href="https://www.thankyouanalytics.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/tyalogo.png" alt="Thank You Analytics" />
      </a>

      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
        <img src="/assets/jslogo.png" alt="JavaScript Programming Language" />
      </a>

      <a href="https://www.dartagnan.io" target="_blank" rel="noopener noreferrer">
        <img src="/assets/dartagnanlogo.png" alt="Dartagnan Email Builder" />
      </a>

    </div>

</section>


    
    </>
  );
}
