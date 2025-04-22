import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./public/assets/logo.png" alt="Logo" className="logo bounce-in" />
      </div>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/experiences">Expériences</Link></li>
        <li><Link to="/skills">Compétences</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
      <button className="contact-button">Get in touch</button>
    </nav>
  );
}