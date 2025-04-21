import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-hero">
     <div className="spline-background">
        <iframe
          src="https://my.spline.design/animatedshapeblend-nn1FHRKGdTZGxH850fuT9lNb/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      {/* Contenu texte au-dessus */}
      <div className="home-content">
        <h1>Tech meets Business.</h1>
        <p>
          Double compétence Epitech x NEOMA : je code, je pense produit, je crée de la valeur.
        </p>
      </div>
    </section>
  );
}
