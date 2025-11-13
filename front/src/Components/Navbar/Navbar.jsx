import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {


  return (
    <nav className="navbar">
      <div className='vide'></div>
      <ul className='barretransparente'>
        <li><a href="#home">Home</a></li>
        <li className="nav-item dropdown">
          <a href="#experiences"><span className="dropdown-trigger">
            Experiences
            {/* <img src="./assets/flechebas.png" className="arrow" alt="arrow" /> */}
          </span></a>
          {/* <div className="dropdown-panel">
            <div className="dropdown-column">
              <div className="dropdown-item clickable">
                <span className="icon editor" />
                <div className='projects-link'>
                  <strong>Web Projects</strong>
                  <p>Frontend & backend builds</p>
                </div>
              </div>
              <div className="dropdown-item clickable">
                <span className="icon layout" />
                <div className='projects-link'>
                  <strong>Design Systems</strong>
                  <p>Reusable components & styles</p>
                </div>
              </div>
            </div>
            <div className="dropdown-column">
              <div className="dropdown-item clickable">
                <span className="icon interaction" />
                <div className='projects-link'>
                  <strong>Interactive Apps</strong>
                  <p>React, animations, and more</p>
                </div>
              </div>
              <div className="dropdown-item clickable">
                <span className="icon mobile" />
                <div className='projects-link'>
                  <strong>Mobile</strong>
                  <p>Responsive & native</p>
                </div>
              </div>
            </div>
          </div> */}
        </li>

        <li className="nav-item dropdown">
          <a href="#projects"><span className="dropdown-trigger">
            Projects
            {/* <img src="./assets/flechebas.png" className="arrow" alt="arrow" /> */}
          </span></a>
          {/* <div className="dropdown-panel">
            <div className="dropdown-column">
              <div className="dropdown-item clickable">
                <span className="icon" />
                <div className='projects-link'>
                  <strong>Internships</strong>
                  <p>Real-world experience</p>
                </div>
              </div>
              <div className="dropdown-item clickable">
                <span className="icon" />
                <div className='projects-link'>
                  <strong>Freelance</strong>
                  <p>Client-driven work</p>
                </div>
              </div>
            </div>
          </div> */}
        </li>

        <li className="nav-item dropdown">
          <a href="#skills"><span className="dropdown-trigger">
            Skills
            {/* <img src="./assets/flechebas.png" className="arrow" alt="arrow" /> */}
          </span></a>
          {/* <div className="dropdown-panel">
            <div className="dropdown-column">
              <div className="dropdown-item clickable">
                <span className="icon" />
                <div className='projects-link'>
                  <strong>Frontend</strong>
                  <p>React, HTML, CSS</p>
                </div>
              </div>
              <div className="dropdown-item clickable">
                <span className="icon" />
                <div className='projects-link'>
                  <strong>Backend</strong>
                  <p>Node.js, Express, APIs</p>
                </div>
              </div>
            </div>
          </div> */}
        </li>

        <li><a href="#about">About</a></li>
        <a href="#contact"><button className="contact-button">Get in touch</button></a>

      </ul>
    </nav>
  );
}