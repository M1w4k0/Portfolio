// src/components/HorizontalGallery.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  {
    key: "p1",
    title: "Lorem ipsum",
    text:
      "Sed neque purus, imperdiet eu purus sit amet, hendrerit semper quam. Praesent elementum, nisl sit amet tincidunt.",
    images: [
      { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop", alt: "Forêt brumeuse" },
      { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop", alt: "Océan" }
    ],
    variant: "is-1"
  },
  {
    key: "p2",
    title: "Vivamus turpis",
    text:
      "Aliquam metus lacus, efficitur sit amet ligula a, vehicula eleifend dolor. Pellentesque vulputate consectetur lectus.",
    images: [
      { src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1400&auto=format&fit=crop", alt: "Oiseau" }
    ],
    variant: "is-2"
  },
  {
    key: "p3",
    title: "Suspendisse",
    text:
      "Mollis et elit eget, venenatis dictum nisl. In vel sagittis velit.",
    images: [
      { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop", alt: "Montagne/lac" },
      { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=700&auto=format&fit=crop", alt: "Lune" }
    ],
    variant: "is-3"
  }
];

export default function HorizontalGallery() {
  const wrapperRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".cc-hs-panel");
      if (!panels.length) return;

      const endDistance = () => window.innerWidth * (panels.length - 1); // why: durée de scroll proportionnelle

      const scrollTween = gsap.to(trackRef.current, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: viewportRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${endDistance()}`
        }
      });

      gsap.utils.toArray(".cc-hs-img").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -3, scale: 1 },
          {
            yPercent: 3,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest(".cc-hs-panel"),
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true
            }
          }
        );
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        ScrollTrigger.getAll().forEach((st) => st.disable());
        gsap.set(trackRef.current, { clearProps: "all" });
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cc-hs" ref={wrapperRef}>
      <div className="cc-hs-viewport" ref={viewportRef}>
        <div className="cc-hs-track" ref={trackRef}>
          {PANELS.map((p) => (
            <article key={p.key} className={`cc-hs-panel ${p.variant}`}>
              <header className="cc-hs-header">
                <h2 className="cc-hs-title">{p.title}</h2>
                <p className="cc-hs-text">{p.text}</p>
              </header>

              <div className="cc-hs-media">
                {p.images.map((img, i) => (
                  <figure key={i} className={`cc-hs-figure i-${i + 1}`}>
                    <img className="cc-hs-img" src={img.src} alt={img.alt} loading="lazy" />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
