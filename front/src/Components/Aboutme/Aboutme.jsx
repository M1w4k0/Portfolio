import React, { useEffect } from 'react';
import Word from '../BlurText/Word';
import GlassIcons from '../GlassIcons/GlassIcons'; // adapte le chemin si besoin
import './Aboutme.css';
import { IoIosDownload } from "react-icons/io";


const paragraph = "Now, I want to put it into practice with you.";

const items = [
  { icon: <IoIosDownload />, color: 'blue', language: "French", file: '/assets/CVZoeCharrierFR.pdf'   },
  { icon: <IoIosDownload />, color: 'purple', language: "English", file: '/assets/CVZoeCharrierENG.pdf'   },
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
                <h2 className="sc-head"> WHERE IT STARTED<br />SMALL</h2>
                <div className="sc-body">
                  <p>
                    I grew up near Angers, in a small town where school, sports and creative
                    hobbies took up most of my time.
                  </p>
                  <p>
                   It was a fairly simple environment, but it gave me a lot of independence
                    and time to explore things on my own. I became curious, resourceful, and
                   used to learning by trying.
                  </p>
                  <p>
                    In middle school, I moved to Paris to live with my dad. Changing
                    environments exposed me to new schools, people and opportunities, and
                    gradually broadened what I imagined doing later.
                  </p>
                </div>

                <div className="sc-foot">
                  <span className="sc-dot" />
                  <em>What I kept from it:</em>
                </div>

                <blockquote className="sc-quote">
                  Curiosity and independence have always been a big part of how I learn.
                </blockquote>
              </div>
            </div>

            {/* Card 2 */}
            <div className="sticky-card sticky-card2">
              <div className="sc-grid">
                <div className="sc-num">02</div>
                <div className="sc-rule" />
                <h2 className="sc-head">FINDING MY DIRECTION</h2>
                <div className="sc-body">
                  <p>
                     In Paris, athletics became an important part of my routine and taught me
                    consistency, discipline and how to keep working toward long-term goals.
                  </p>
                  <p>
                     After high school, I joined NEOMA's TEMA program because I wanted a
                    degree that combined business with technology rather than choosing only
                    one of the two.
                  </p>
                  <p>
                     Through classes, projects, internships and exchanges, I progressively
                    became more interested in data, AI and the way technical tools can help
                    solve business problems.
                  </p>
                </div>

                <div className="sc-foot">
                  <span className="sc-dot" />
                  <em>What I kept from it:</em>
                </div>

                <blockquote className="sc-quote">
                  I like working where business questions and technical solutions meet.
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
                    Today, I’m growing into roles that mix strategy, data, and AI, exactly where my
                    curiosity naturally led me.
                  </p>
                  <p>
                   I enjoy understanding a problem, working with data, and turning the
                    analysis into something useful for a team or a business decision.
                  </p>
                  <p>
                    That’s why I plan to follow a specialization in IS Consulting / Database Management & SQL at NEOMA, and obtain 
                    the double degree *MSc & Technology for Business* with CentraleSupélec (my current major goal).
                  </p>
                  <p>
                    I also joined NEOMA’s Data & Tech association to stay immersed in a community
                    that learns, experiments, and share same ambitions.
                  </p>
                </div>

                <div className="sc-foot">
                  <span className="sc-dot" />
                  <em>What I'm looking for:</em>
                </div>

                <blockquote className="sc-quote">
                  Projects where I can keep learning while working on real data and business
                  problems.
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
            DOWNLOAD
            <br />
            MY CV
          </h1>

          <p className="fc-sub">
            Everything you need to know is inside
          </p>

          {/* <div className="fc-copy">
            <p className="fc-text">
              If you’re looking to understand the progression behind my skills, or remember my journey: my CV tells the entire story with clarity.
            </p>
          </div> */}
        </div>

        {/* Colonne droite : visuel 3D */}
        <div className="fc-right">
          
          <div style={{ height: '250px', position: 'relative' }}>
            <GlassIcons items={items} className="custom-class"/>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
