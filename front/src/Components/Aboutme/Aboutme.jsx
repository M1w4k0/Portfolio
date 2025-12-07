import React, { useEffect } from 'react';
import Word from '../BlurText/Word';
import GlassIcons from '../GlassIcons/GlassIcons'; // adapte le chemin si besoin
import './Aboutme.css';
import { IoIosDownload } from "react-icons/io";


const paragraph = "So I do what I always do when direction isn’t given : I build it.";

const items = [
  { icon: <IoIosDownload />, color: 'blue', label: 'French', file: '/cv-fr.pdf'   },
  { icon: <IoIosDownload />, color: 'purple', label: 'English', file: '/cv-eng.pdf'   },
];

export default function Aboutme() {
  useEffect(() => {
    const isNarrow = window.matchMedia('(max-width: 1024px)').matches;
    const cards = document.querySelectorAll('.sticky-card');

    if (isNarrow) {
      cards.forEach((el) => {
        el.classList.add('no-sticky');
        el.classList.add('in-view');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('in-view', entry.isIntersecting);
        });
      },
      { threshold: 0.2, rootMargin: '-20% 0px -70% 0px' }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ======= TES 3 CARTES STICKY ======= */}
      <section className="whoami-section" data-theme="light">
        <div className="container">
          <div className="sticky-frame">
            {/* Card 1 */}
            <div className="sticky-card sticky-card1">
              <div className="sc-grid">
                <div className="sc-num">01</div>
                <div className="sc-rule" />
                <h2 className="sc-head">WHEN DREAMS START<br />SMALL</h2>
                <div className="sc-body">
                  <p>
                    I grew up near Angers, in a small town where life was mostly nature,
                    school, and sports. I didn’t have access to many activities, but I learned
                    to keep myself busy and creative.
                  </p>
                  <p>
                    Spending a lot of time on my own pushed me to work independently,
                    dive deep into what I was curious about, and constantly find new ideas
                    so I’d never get bored.
                  </p>
                  <p>
                    In 3ème, everything changed when I moved to Paris to live with my dad.
                    New city, no real landmarks, and suddenly a world full of opportunities
                    I had never seen before.
                  </p>
                </div>

                <div className="sc-foot">
                  <span className="sc-dot" />
                  <em>Lesson carried forward:</em>
                </div>

                <blockquote className="sc-quote">
                  I know what it feels like to start small, feel limited, and still decide to build
                  something bigger for myself.
                </blockquote>
              </div>
            </div>

            {/* Card 2 */}
            <div className="sticky-card sticky-card2">
              <div className="sc-grid">
                <div className="sc-num">02</div>
                <div className="sc-rule" />
                <h2 className="sc-head">A NEW GAP</h2>
                <div className="sc-body">
                  <p>
                    In Paris, I joined a strong athletics club, and learned real discipline. I also had the chance to study at EPIN, one of the top high schools in France 
                    — a place that pushed me to aim higher.
                  </p>
                  <p>
                    After graduating with honors, I choosed to study at NEOMA BS: a business program with a strong tech focus.
                     Through projects and internships, I discovered data, code, and product thinking as ways to understand how things work.
                  </p>
                  <p>
                    My interests became clearer: I like connecting strategy,
                    numbers, and human behavior — using data and AI to make better decisions
                    and build useful systems.
                  </p>
                </div>

                <div className="sc-foot">
                  <span className="sc-dot" />
                  <em>Lesson carried forward:</em>
                </div>

                <blockquote className="sc-quote">
                  Discipline builds performance. Insights build direction.
                </blockquote>
              </div>
            </div>

            {/* Card 3 */}
            <div className="sticky-card sticky-card3" id="mygoals">
              <div className="sc-grid">
                <div className="sc-num">03</div>
                <div className="sc-rule" />
                <h2 className="sc-head">WHERE I’M HEADING</h2>
                <div className="sc-body">
                  <p>
                    Today, I’m growing into roles that mix strategy, data, and AI — exactly where my
                    curiosity naturally led me.
                  </p>
                  <p>
                    I want to work on thoughtful, data-driven problems with teams that care
                    about craft and clarity. Learn fast, ship well, keep improving.
                  </p>
                  <p>
                    My focus: analytics, product insights, and beautiful ways to communicate
                    what matters.
                  </p>
                </div>

                <div className="sc-foot">
                  <span className="sc-dot" />
                  <em>Lesson carried forward:</em>
                </div>

                <blockquote className="sc-quote">
                  Understanding what matters is the foundation of everything else.
                </blockquote>
              </div>
              <div className="separateur-sticky3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= SECTION QUOTE ======= */}
      <section className="cc-epi">
        <img src="/assets/quote.png" className="quote-img" />
        <div className="char">
          <Word paragraph={paragraph} />
        </div>
      </section>

      <section className="firstclimb-section">
      <div className="firstclimb-inner">
        {/* Colonne gauche : textes */}
        <div className="fc-left">

          <h1 className="fc-title">
            THE NEXT
            <br />
            STEP
          </h1>

          <p className="fc-sub">
            Everything you need to know is inside
          </p>

          <div className="fc-copy">
            <p className="fc-text">
              If you’re looking to understand the progression behind my skills, the roles I’ve taken, the challenges I’ve solved, 
              and the direction I’m heading next: my CV tells the entire story with clarity.
            </p>
          </div>
        </div>

        {/* Colonne droite : visuel 3D */}
        <div className="fc-right">

          <div className="fc-lang-label">
            <strong>Click here to download my CV :</strong>
          </div>
          
          <div style={{ height: '250px', position: 'relative' }}>
            <GlassIcons items={items} className="custom-class"/>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
