"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import "./TypewriterEffect.css";

export function TypewriterEffect({ words }) {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // déclenche à 50% visible

  return (
    <div className="typewriter-container" ref={ref}>
      <div className="typewriter-text">
        {wordsArray.map((word, idx) => (
          <span key={idx} className="typewriter-word">
            {word.text.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}} // ✅ animation que si visible
                transition={{ delay: index * 0.1 }}
                className="typewriter-char"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}

        {isInView && <span className="typewriter-cursor" />} {/* ✅ curseur affiché que si visible */}
      </div>
    </div>
  );
}

