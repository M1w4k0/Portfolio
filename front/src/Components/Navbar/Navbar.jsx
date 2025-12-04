import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {


  return (
    <nav className="navbar">
      <div className='vide'></div>
      <ul className='barretransparente'>
        <li><NavLink to="/">Home</NavLink></li>
        <li className="nav-item dropdown">
          <NavLink to="/experience"><span className="dropdown-trigger">
            Experiences
          </span></NavLink>
          
        </li>

        <li className="nav-item dropdown">
          <NavLink to="/projects"><span className="dropdown-trigger">
            Projects
          </span></NavLink>
      
        </li>


        <NavLink to="/contact"><button className="contact-button">Get in touch</button></NavLink>

      </ul>
    </nav>
  );
}