
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ParallaxPage.css";



function BreakthroughBlock1() {
  return (
    <section className="cc-par-quote">
      <div className="dot">
       <span className="cc-par-quote-dot" />
       <p className="cc-little">Orange Internship</p>

      </div>
      <div className="cc-rightside">
      <h2 className="cc-par-quote-title">
        <strong>2020.</strong> For the first time, I got to see how a major tech company really worked:
        the networks, the systems, big data and the hidden logic that keeps everything running.
      </h2>

      <p className="cc-par-quote-top">
          I didn’t understand much yet, but I was fascinated by the invisible structure behind it all. That’s when I first felt my curiosity 
          spark for technology and innovation.
      </p>
      </div>
      </section>
  );
}


function BreakthroughBlock2() {
  return (
    <section className="cc-par-quote">
      <div className="dot">
       <span className="cc-par-quote-dot" />
       <p className="cc-little">NEOMA Student</p>

      </div>
      <div className="cc-rightside">
      <h2 className="cc-par-quote-title">
        <strong>2023.</strong> Half technical, half creative, where you learn to think like a manager but act like an engineer.

      </h2>

      <p className="cc-par-quote-top">
          Through courses in information systems, CRM, strategy, and even design, I discovered the opportunities linked with the world of data,
          the way numbers can explain, predict, and inspire, throught all types of fields. So I recently joined the new Digital & Tech Association, 
          where I could share this passion with people as ambitious as me.
      </p>
      </div>
      </section>
  );
}

function BreakthroughBlock3() {
  return (
    <section className="cc-par-quote">
      <div className="dot">
       <span className="cc-par-quote-dot" />
       <p className="cc-little">EPITECH exchange</p>

      </div>
      <div className="cc-rightside">
      <h2 className="cc-par-quote-title">
        <strong>2024.</strong> Here, everything was practical — no theory, just creation.

      </h2>

      <p className="cc-par-quote-top">
           Within months, I followed an intensive program, during which I had to build a data analysis web platform and a personalized recommendation system for e-commerce.
           It was the first time I truly saw how code and data could work together to bring ideas to life.
           That’s when I realized I wanted to make my career in data science.    
      </p>
      </div>
      </section>
  );
}



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
      
      {/* Section 1 */}
      <Section
        image="/assets/orange.jpg"
        title=" My First Step into Tech: Orange"
        copy="It all started with my middle school internship at Orange."
   
      />

      {/* Description intégrée */}
      <BreakthroughBlock1 />

      {/* Section 2 */}
      <Section
        image="/assets/neoma5.jpg"
        title="Starting at NEOMA Business School"
        copy="When I joined NEOMA’s TEMA program, I found an environment that finally felt like me"
   
      />
      <BreakthroughBlock2 />

     

      {/* Section 3 */}
      <Section
        image="/assets/barcelone3.jpg"
        title="Epitech Barcelona: Learning by Building"
        copy="My semester at Epitech Barcelona was a turning point."
 
      />
      <BreakthroughBlock3 />


      {/* Fin de page */}
    </main>
  );
}
