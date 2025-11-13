
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ParallaxPage.css";

function Description1() {
  return (
    <div className="cc-par-desc1">
      <h1 className="cc-par-desc1-h1">
        2020.
      </h1>
      <p className="cc-par-desc1-text">
        For the first time, I got to see how a major tech company really worked — the networks, the systems, the hidden logic that keeps everything running.
      </p>
      <p className="cc-par-desc1-text">
        I didn’t understand much yet, but I was fascinated by the invisible structure behind it all: how data, cables, and people came together to make things possible.
      </p>
      <p className="cc-par-desc1-text">
        That’s when I first felt my curiosity spark for technology and innovation.
      </p>
    </div>
  );
}

function Description2() {
  return (
    <div className="cc-par-desc1">
      <h1 className="cc-par-desc1-h1">
        2023.
      </h1>
      <p className="cc-par-desc1-text">
          Half technical, half creative, where you learn to think like a manager but act like an engineer.
      </p>
      <p className="cc-par-desc1-text">
          Through courses in information systems, CRM, strategy, and design, I discovered what really fascinated me: data — the way numbers can explain, predict, and inspire.
      </p>
      <p className="cc-par-desc1-text">
          I also joined the Digital & Tech Association, where I started coding out of curiosity... and ended up finding a passion.
      </p>
    </div>
  );
}

function Description3() {
  return (
    <div className="cc-par-desc1">
      <h1 className="cc-par-desc1-h1">
        2024.
      </h1>
      <p className="cc-par-desc1-text">
           Here, everything was practical — no theory, just creation.      </p>
      <p className="cc-par-desc1-text">
            Within months, I built a data analysis web platform and a personalized recommendation system for e-commerce.
      </p>
      <p className="cc-par-desc1-text">
            It was the first time I truly saw how code and data could work together to bring ideas to life.
            That’s when I realized I wanted to work in data, but always with purpose and meaning behind the numbers.      </p>
    </div>
  );
}
// function Description4() {
//   return (
//     <div className="cc-par-desc">
//       <p className="cc-par-descText">
//         For the first time, I got to see how a major tech company really worked — the networks, the systems, the hidden logic that keeps everything running.
//         I didn’t understand much yet, but I was fascinated by the invisible structure behind it all: how data, cables, and people came together to make things possible.
//         That’s when I first felt my curiosity spark for technology and innovation.
//       </p>
//     </div>
//   );
// }
// function Description5() {
//   return (
//     <div className="cc-par-desc">
//       <p className="cc-par-descText">
//         For the first time, I got to see how a major tech company really worked — the networks, the systems, the hidden logic that keeps everything running.
//         I didn’t understand much yet, but I was fascinated by the invisible structure behind it all: how data, cables, and people came together to make things possible.
//         That’s when I first felt my curiosity spark for technology and innovation.
//       </p>
//     </div>
//   );
// }
// function Description6() {
//   return (
//     <div className="cc-par-desc">
//       <p className="cc-par-descText">
//         For the first time, I got to see how a major tech company really worked — the networks, the systems, the hidden logic that keeps everything running.
//         I didn’t understand much yet, but I was fascinated by the invisible structure behind it all: how data, cables, and people came together to make things possible.
//         That’s when I first felt my curiosity spark for technology and innovation.
//       </p>
//     </div>
//   );
// }


function Section({ image, title, copy }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <section
      ref={containerRef}
      className="cc-par-section"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Texte centré au-dessus */}
      <div className="cc-par-text">
        {title ? <h2>{title}</h2> : null}
        {copy ? <p>{copy}</p> : null}
      </div>

      {/* Image fixée derrière + motion y */}
      <div className="cc-par-fixedBg">
        <motion.div style={{ y }} className="cc-par-bgWrap">
          <img
            src={image}
            alt={title || "Background"}
            className="cc-par-bgImg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}


export default function ParallaxPage() {

  return (
    <main className="cc-par-page">
      <div className="cc-par-spacer" />
      
      {/* Section 1 */}
      <Section
        image="/assets/orange.jpg"
        title=" My First Step into Tech: Orange"
        copy="It all started with my middle school internship at Orange."
   
      />

      {/* Description intégrée */}
      <Description1 />

      {/* Section 2 */}
      <Section
        image="/assets/neoma5.jpg"
        title="Starting at NEOMA Business School"
        copy="When I joined NEOMA’s TEMA program, I found an environment that finally felt like me"
   
      />
      <Description2 />

      {/* Section 3 */}
      <Section
        image="/assets/barcelone3.jpg"
        title="Epitech Barcelona: Learning by Building"
        copy="My semester at Epitech Barcelona was a turning point."
 
      />
      <Description3 />
    

      {/* Fin de page */}
      <div className="cc-par-outro" />
    </main>
  );
}
