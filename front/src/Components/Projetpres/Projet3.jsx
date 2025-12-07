import React from "react";
import "./Projet3.css";

export default function Projet1() {

  const skills = [
    "PHP / PDO",
    "MySQL & SQL schema",
    "Authentication & tokens",
    "Admin & CRUD dashboard",
    "Cart & checkout logic",
  ];

  return (
    <>
      <section id="project-3" className="hero">
        {/* IMAGE À GAUCHE */}
        <div className="hero-left">
          <img
            src="./assets/myshop.jpg"
            alt="MyShop ecommerce interface"
            className="hero-img3"
          />
        </div>

        {/* TEXTE À DROITE */}
        <div className="hero-right">
          <div className="hero-main-text">
            <h1>
              MYSHOP —<br />
              E-COMMERCE WEBSITE
            </h1>
            <h2>
              A furniture online store built from scratch,<br />
              with a custom SQL database and secure back-office.
            </h2>
          </div>

          <p className="hero-description">
            MyShop is an end-to-end e-commerce project where I designed both the
            user experience and the server-side logic. I modelled the database
            in MySQL (users, products, categories, cart) with foreign keys and
            clean relationships, then connected it to a PHP backend using PDO.
            <br /><br />
            The site includes product listings with filters, a detailed product
            page, a shopping cart managed in PHP sessions, and an admin area to
            manage inventory and categories. This project brings together my
            skills in web development, data structure design, and user-centric
            interfaces, exactly in line with my “data + product” profile.
          </p>

          {/* SKILLS ACQUIRED EN BAS À DROITE */}
          <div className="hero-skills">
            <h3>Skills acquired</h3>
            <div className="hero-skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="hero-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT ME EN BAS À GAUCHE */}
        <button className="hero-about">
          <span className="hero-dot">●</span>
          <span>More about this project :</span>
        </button>
      </section>

      <section className="hero-gallery">
        <div className="hero-gallery-inner">
          <div className="hero-gallery-item">
            <img
              src="./assets/myshop1.png"
              alt="MyShop homepage"
              className="imageee"
            />
          </div>
          <div className="hero-gallery-item">
            <img
              src="./assets/database.png"
              alt="MyShop SQL database schema"
              className="imageee"
            />
          </div>
          <div className="hero-gallery-item">
            <img
              src="./assets/cart.png"
              alt="MyShop shopping cart"
              className="imageee"
            />
          </div>
        </div>
      </section>
    </>
  );
}
