import React, { useEffect, useRef } from 'react';
import './WhoAmI.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhoAmI() {
  const frame1Ref = useRef(null);
  const frame2Ref = useRef(null);

  useEffect(() => {
    // Frame 1 animation (inchangée)
    gsap.fromTo(
      frame1Ref.current,
      {
        y: 100,
        width: '94%',
        height: '80vh',
      },
      {
        y: 40,
        width: '70%',
        height: '55vh',
        ease: 'power4.out',
        scrollTrigger: {
          trigger: frame1Ref.current,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1.5,
          onEnter: () => {},
        },
      }
    );
  
  }, []);
  

  return (
    <section className="whoami-stage">
      <div className="whoami-header">
        <h1 className="whotext">Who Am I?</h1>
      </div>

      <div className="whoami-stack">
        <div className="whoami-frame frame1" ref={frame1Ref}>
          <p>Step 1: Discover who I am</p>
        </div>

        <div className="whoami-frame frame2" ref={frame2Ref}>
          <p>Step 2: My goals</p>
        </div>
      </div>
    </section>
  );
}
