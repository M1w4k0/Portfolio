// src/components/AboutWhoAmI.jsx
import React, { useEffect } from "react";
import Word from "../BlurText/Word";
import "../Aboutme/Aboutme.css";
import "./WhoAmI.css";

/* === WhoAmISection (structure inchangée) === */
export default function WhoAmISection() {
  return (
    <section className="cc-who-wrap">
      <div className="cc-case2__num">( 01 )</div>
      {/* Layer 1: pinned background + image (ne bouge pas) */}
      <div className="cc-who-pin">
        <div className="cc-who-bg" />
        <figure className="cc-who-figure">
          <img src="/assets/PhotoCVnoir.png" alt="Portrait" className="cc-who-img" />
        </figure>
      </div>

      {/* Layer 2: content that scrolls au-dessus */}
      <div className="cc-who-scroll">
        <div className="cc-who-1">
          <aside className="cc-who-col cc-who-left">
            <ul>
              <li>BUSINESS TECH STUDENT</li>
              <li>FORMER AN ATHLETE</li>
              <li>NEOMA × CENTRALSUPELEC</li>
            </ul>
          </aside>
          <aside className="cc-who-col cc-who-right">
            <ul>
              <li>ENTREPRENEUR</li>
              <li>LUXURY HOSTESS</li>
              <li>DATA ENTHUSIAST</li>
            </ul>
          </aside>
        </div>
        <h1 className="cc-who-title">WHO AM I?</h1>
      </div>
    </section>
  );
}


