// Timeline.jsx
"use client";

import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-wrapper" ref={containerRef}>
      <div className="timeline-header">
        <h3>Few experiences</h3>
        <p>
          I’ve been working on projects and building myself. Here’s a timeline
          of my journey so far.
        </p>
      </div>

      <div ref={ref} className="timeline-container">
        {data.map((item, index) => {
          const itemRef = useRef(null);
          const isInView = useInView(itemRef, { once: true, margin: "-100px" });

          return (
            <div key={index} className="timeline-row">
              <div className="timeline-sticky">
                <div className="timeline-point">
                  <div className="timeline-point-inner" />
                </div>
                <motion.h3 className="timeline-year">{item.date}</motion.h3>
              </div>

              <div className="timeline-content">
                <motion.div
                  ref={itemRef}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {item.content}
                </motion.div>
              </div>
            </div>
          );
        })}

        <div style={{ height: height + "px" }} className="timeline-line">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="timeline-line-fill"
          />
        </div>
      </div>
    </div>
  );
};
