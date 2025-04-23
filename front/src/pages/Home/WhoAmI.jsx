import React, { useEffect } from 'react';
import './WhoAmI.css';

export default function WhoAmI() {
  useEffect(() => {
    const cards = document.querySelectorAll('.sticky-card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.2 // déclenchement plus tôt
    });
  
    cards.forEach(card => observer.observe(card));
  
    return () => observer.disconnect();
  }, []);

  return (
    <section className="custom-section">
      <div className="container">
        <div className="intro">
          <h2 className="main-title">Who am I ? </h2>
        </div>

        <div className="sticky-frame">
          <div className="sticky-card sticky-card1">
            <div className="card-text">
              <h3>Zoé Charrier</h3>
              <p  className='texte1'>19 years</p>
              <p  className='texte2'>
               I'm a business student at Neoma Business School in Paris. Passionate about the world of data, I chose to complete my course with an immersion at EPITECH's Coding Academy, to develop my web development skills.
              </p>
            </div>
            <img src="./assets/PhotoCV.jpeg" alt="Photo CV" className="card-img" />
          </div>

          <div className="sticky-card sticky-card2">
            <div className="card-text">
              <h3>Some Hobbies</h3>
            </div>
          </div>

          <div className="sticky-card sticky-card3">
            <div className="card-text3">
              <h3>Where I aspire to go </h3>
              <p  className='texte3'>My ambition is to build a hybrid profile — someone who can understand both the technical foundations and the strategic needs of a business. I’m driven by the idea of launching my own startup, and I want to be able to take ownership of the entire process: from designing solutions and managing projects, to shaping business models and making data-informed decisions. To me, tech is not just a skillset — it’s a way to bring ideas to life, solve real challenges, and build something meaningful.</p>
            </div>

          </div>
          {/* <img src="./assets/fusee.png" alt="fusée" className='fusee'/> */}
        </div>
      </div>
    </section>
  );
}