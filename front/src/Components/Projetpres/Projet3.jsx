import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCase.css";

export default function Projet3() {

  const skills = [
    "PHP / PDO",
    "MySQL & SQL Schema",
    "Authentication & Tokens",
    "Admin & CRUD Dashboard",
    "Cart & Checkout Logic"
  ];

  return (
    <div className="project-page">

      <section className="project-cover project-light">

        <div className="project-cover__top">

          <span className="project-number">
            03
          </span>

          <div className="project-cover__meta">
            <span>E-COMMERCE</span>
            <span>PHP / MYSQL</span>
            <span>FULL-STACK</span>
          </div>

        </div>

        <div className="project-cover__main">

          <p className="project-kicker">
            Furniture e-commerce platform
          </p>

          <h1 className="project-display">
            MYSHOP
          </h1>

        </div>

        <div className="project-cover__image">
          <img
            src="/assets/myshop.jpg"
            alt="MyShop ecommerce website"
          />
        </div>

      </section>


      {/* BRIEF */}
      <section className="project-section project-light">

        <div className="project-split">

          <span className="project-label">
            The brief
          </span>

          <div>

            <h2 className="project-statement">
              Build an e-commerce platform from scratch.
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              MyShop is an end-to-end group project combining user experience,
              backend development and relational database design.
            </p>

          </div>

        </div>

      </section>


      {/* FRONT */}
      <section className="project-showcase project-soft">

        <div className="project-showcase__media">
          <img
            src="/assets/myshop1.png"
            alt="MyShop homepage"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Storefront
          </span>

          <h3>
            What the customer sees.
          </h3>

          <p className="project-body">
            Product listings, filters, detailed product pages and a shopping
            cart form the customer-facing experience.
          </p>

        </div>

      </section>


      {/* DATABASE */}
      <section className="project-section project-dark">

        <div className="project-split">

          <span className="project-label">
            Architecture
          </span>

          <div>

            <h2 className="project-statement">
              What happens behind “Add to cart”?
            </h2>

            <p
              className="project-body"
              style={{ marginTop: "3rem" }}
            >
              We modelled users, products, categories and carts in MySQL using
              clear relational structures and foreign keys, then connected the
              database to PHP through PDO.
            </p>

          </div>

        </div>

        <div
          className="project-big-image"
          style={{ marginTop: "6rem" }}
        >
          <img
            src="/assets/database.png"
            alt="MyShop SQL database schema"
          />
        </div>

      </section>


      {/* TWO SIDES */}
      <section className="project-two-sides project-light">

        <div className="project-side">

          <span className="project-label">
            Front office
          </span>

          <h3>
            CUSTOMER
          </h3>

          <ul>
            <li>Browse products</li>
            <li>Filter categories</li>
            <li>View product details</li>
            <li>Add to cart</li>
            <li>Checkout logic</li>
          </ul>

        </div>

        <div className="project-side">

          <span className="project-label">
            Back office
          </span>

          <h3>
            ADMIN
          </h3>

          <ul>
            <li>Manage inventory</li>
            <li>Create products</li>
            <li>Edit products</li>
            <li>Manage categories</li>
            <li>CRUD operations</li>
          </ul>

        </div>

      </section>


      {/* CART */}
      <section className="project-showcase project-dark">

        <div className="project-showcase__media">
          <img
            src="/assets/cart.png"
            alt="MyShop cart"
          />
        </div>

        <div className="project-showcase__copy">

          <span className="project-label">
            Sessions
          </span>

          <h3>
            The cart lives beyond one page.
          </h3>

          <p className="project-body">
            PHP sessions were used to maintain the shopping cart while users
            navigated across the store.
          </p>

        </div>

      </section>


      <section className="project-disciplines project-soft">

        <span className="project-label">
          Disciplines
        </span>

        <div className="project-disciplines__list">

          {skills.map((skill, index) => (
            <div
              className="project-discipline"
              key={skill}
            >
              <span>{skill}</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}

        </div>

      </section>


     

    </div>
  );
}

// import React from "react";
// import "./Projet3.css";

// export default function Projet1() {

//   const skills = [
//     "PHP / PDO",
//     "MySQL & SQL schema",
//     "Authentication & tokens",
//     "Admin & CRUD dashboard",
//     "Cart & checkout logic",
//   ];

//   return (
//     <>
//       <section id="project-3" className="hero">
//         {/* IMAGE À GAUCHE */}
//         <div className="hero-left">
//           <img
//             src="./assets/myshop.jpg"
//             alt="MyShop ecommerce interface"
//             className="hero-img3"
//           />
//         </div>

//         {/* TEXTE À DROITE */}
//         <div className="hero-right">
//           <div className="hero-main-text">
//             <h1>
//               MYSHOP, <br />
//               E-COMMERCE WEBSITE
//             </h1>
//             <h2>
//               A furniture online store built from scratch,<br />
//               with a custom SQL database and secure back-office.
//             </h2>
//           </div>

//           <p className="hero-description">
//             MyShop is an end-to-end e-commerce group project where we designed both the
//             user experience and the server-side logic. we modelled the database
//             in MySQL (users, products, categories, cart) with foreign keys and
//             clean relationships, then connected it to a PHP backend using PDO.
//             <br /><br />
//             The site includes product listings with filters, a detailed product
//             page, a shopping cart managed in PHP sessions, and an admin area to
//             manage inventory and categories. This project brings together my
//             skills in web development, data structure design, and user-centric
//             interfaces, exactly in line with my “data + product” profile.
//           </p>

//           {/* SKILLS ACQUIRED EN BAS À DROITE */}
//           <div className="hero-skills">
//             <h3>Skills acquired</h3>
//             <div className="hero-skills-list">
//               {skills.map((skill, index) => (
//                 <span key={index} className="hero-skill-pill">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ABOUT ME EN BAS À GAUCHE */}
//         <button className="hero-about">
//           <span className="hero-dot">●</span>
//           <span>More about this project :</span>
//         </button>
//       </section>

//       <section className="hero-gallery">
//         <div className="hero-gallery-inner">
//           <div className="hero-gallery-item">
//             <img
//               src="./assets/myshop1.png"
//               alt="MyShop homepage"
//               className="imageee"
//             />
//           </div>
//           <div className="hero-gallery-item">
//             <img
//               src="./assets/database.png"
//               alt="MyShop SQL database schema"
//               className="imageee"
//             />
//           </div>
//           <div className="hero-gallery-item">
//             <img
//               src="./assets/cart.png"
//               alt="MyShop shopping cart"
//               className="imageee"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
