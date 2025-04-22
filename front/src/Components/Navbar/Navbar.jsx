import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./assets/logo.png" alt="Logo" className="logo bounce-in" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>

        <li className="nav-item dropdown">
          <span className="dropdown-trigger">
            Projects
            <img src="./assets/flechebas.png" className="arrow" alt="arrow" />
          </span>
          <div className="dropdown-panel">
            <div className="dropdown-column">
              <div className="dropdown-item clickable">
                <span className="icon editor" />
                <div>
                  <strong>Web Projects</strong>
                  <p>Frontend & backend builds</p>
                </div>
              </div>
              <div className="dropdown-item clickable">
                <span className="icon layout" />
                <div>
                  <strong>Design Systems</strong>
                  <p>Reusable components & styles</p>
                </div>
              </div>
            </div>
            <div className="dropdown-column">
              <div className="dropdown-item clickable">
                <span className="icon interaction" />
                <div>
                  <strong>Interactive Apps</strong>
                  <p>React, animations, and more</p>
                </div>
              </div>
              <div className="dropdown-item clickable">
                <span className="icon mobile" />
                <div>
                  <strong>Mobile</strong>
                  <p>Responsive & native</p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown">
          <span className="dropdown-trigger">
            Experiences
            <img src="./assets/flechebas.png" className="arrow" alt="arrow" />
          </span>
          <div className="dropdown-panel">
            <div className="dropdown-column">
              <div className="dropdown-item clickable">
                <span className="icon" />
                <div>
                  <strong>Internships</strong>
                  <p>Real-world experience</p>
                </div>
              </div>
              <div className="dropdown-item clickable">
                <span className="icon" />
                <div>
                  <strong>Freelance</strong>
                  <p>Client-driven work</p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="nav-item dropdown">
          <span className="dropdown-trigger">
            Skills
            <img src="./assets/flechebas.png" className="arrow" alt="arrow" />
          </span>
          <div className="dropdown-panel">
            <div className="dropdown-column">
              <div className="dropdown-item clickable">
                <span className="icon" />
                <div>
                  <strong>Frontend</strong>
                  <p>React, HTML, CSS</p>
                </div>
              </div>
              <div className="dropdown-item clickable">
                <span className="icon" />
                <div>
                  <strong>Backend</strong>
                  <p>Node.js, Express, APIs</p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li><Link to="/about">About</Link></li>
      </ul>
      <button className="contact-button">Get in touch</button>
    </nav>
  );
}