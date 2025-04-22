import React from "react";
import "./Home.css";
import WhoAmI from "./WhoAmI";

export default function Home() {
  return (
    <><section className="home-hero">
      <div className="spline-background">
        {/* <iframe
          src="https://my.spline.design/animatedshapeblend-nn1FHRKGdTZGxH850fuT9lNb/"
          frameBorder="0"
          width="100%"
          height="100%" /> */}
      </div>
      <div className="home-content">
        <div className="hero-tags">
          <div className="tag tag-role">
            <span>Your new <strong>intern</strong></span>
          </div>
          <a
            className="tag tag-linkedin"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            className="tag tag-github"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/github.png" alt="Github" />
          </a>
        </div>
        <h1>Zoé Charrier </h1>
        <p>
          For me, it’s all about coding with purpose, thinking like a product designer, and creating real, meaningful value.
        </p>
      </div>
    </section>
    <WhoAmI /></>
  );
}