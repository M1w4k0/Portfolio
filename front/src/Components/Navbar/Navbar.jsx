import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/experiences">Expériences</Link></li>
        <li><Link to="/skills">Compétences</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  );
}
