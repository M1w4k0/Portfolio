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
      threshold: 0.2,
      rootMargin: "-20% 0px -70% 0px"
    });
  
    cards.forEach(card => observer.observe(card));
  
    return () => observer.disconnect();
  }, []); // ✅ la parenthèse et l'accolade fermante manquaient ici

  return (
    <>
      <section className="whoami-section" data-theme="light">
        <div className="container">

          <div className="sticky-frame">

            <div className="sticky-card sticky-card1">
              <div className="card-text1">
                <div className="left-column">
                  <h2 className="nb-title">01 </h2>
                  <h2 className="main-title">Who am I ? </h2>
                  <p className="texte">
                    Um zu verstehen, muss man begreifen. Deshalb beginnt unser Prozess mit einer individuellen Discovery-Phase,
                    bei der wir tief in deine Situation eintauchen. Wir erörtern Ziele und Herausforderungen, erkennen Chancen,
                    legen die strategische Basis für unser gemeinsames Vorhaben – und machen uns mit guten Antworten auf den Weg
                    zur besseren Lösung.
                  </p>
                  <div className="shape-separator"></div>
                  <div className="skills-container">
                    <div className="skills-column">
                      <p className="skill">HTML / CSS</p>
                      <p className="skill">JavaScript</p>
                      <p className="skill">React</p>
                      <p className="skill">Node.js</p>
                    </div>
                    <div className="skills-column">
                      <p className="skill">Python</p>
                      <p className="skill">SQL</p>
                      <p className="skill">Git / GitHub</p>
                      <p className="skill">UX / UI Design</p>
                    </div>
                  </div>
                </div>
                <div className="right-column">
                  {/* <img className="img-who-am-I" src="/assets/Thales.jpg" /> */}
                </div>
            </div>
          </div>

            <div className="sticky-card sticky-card2">
              <div className="card-text2">
                <div className="left-column">
                  <h2 className="nb-title">02 </h2>
                  <h2 className="main-title">Interests </h2>
                  <p className="texte">
                    Um zu verstehen, muss man begreifen. Deshalb beginnt unser Prozess mit einer individuellen Discovery-Phase,
                    bei der wir tief in deine Situation eintauchen. Wir erörtern Ziele und Herausforderungen, erkennen Chancen,
                    legen die strategische Basis für unser gemeinsames Vorhaben – und machen uns mit guten Antworten auf den Weg
                    zur besseren Lösung.
                  </p>
                  <div className="shape-separator"></div>
                </div>
                <div className="right-column">
                  {/* <img className="img-who-am-I" src="/assets/Thales.jpg" /> */}
                </div>
            </div>
            </div>

            <div className="sticky-card sticky-card3">
              <div className="card-text3">
                <div className="left-column">
                  <h2 className="nb-title">03 </h2>
                  <h2 className="main-title">Where I aspire to go </h2>
                  <p className="texte">
                    Um zu verstehen, muss man begreifen. Deshalb beginnt unser Prozess mit einer individuellen Discovery-Phase,
                    bei der wir tief in deine Situation eintauchen. Wir erörtern Ziele und Herausforderungen, erkennen Chancen,
                    legen die strategische Basis für unser gemeinsames Vorhaben – und machen uns mit guten Antworten auf den Weg
                    zur besseren Lösung.
                  </p>
                  <div className="shape-separator"></div>
                  <div className="skills-container">
                    <div className="skills-column">
                      <p className="skill">HTML / CSS</p>
                      <p className="skill">JavaScript</p>
                      <p className="skill">React</p>
                      <p className="skill">Node.js</p>
                    </div>
                    <div className="skills-column">
                      <p className="skill">Python</p>
                      <p className="skill">SQL</p>
                      <p className="skill">Git / GitHub</p>
                      <p className="skill">UX / UI Design</p>
                    </div>
                  </div>
                </div>
                <div className="right-column">
                  {/* <img className="img-who-am-I" src="/assets/Thales.jpg" /> */}
                </div>
            </div>
            </div>

            {/* <img src="./assets/fusee.png" alt="fusée" className="fusee" /> */}

          </div>
        </div>
      </section>
    </>
  );
}








// << Version Simple >>

// export default function WhoAmI() {
//   useEffect(() => {
//     const items = document.querySelectorAll('.item');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add('visible');
//         });
//       },
//       { threshold: 0.1 }
//     );

//     items.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="whoami-section">
//       <div className="container">
//           <div className="intro">
//             <h2 className="section-title">What’s important to me</h2>
//             <p className="intro-text">
//               I believe that design should be more than aesthetics; it should effectively communicate
//               and engage the audience. My goal is to create designs that resonate and leave a lasting impact.
//             </p>
//           </div>
//           <div className="points-grid">
//             <div className="item">
//               <span className="number">01</span>
//               <h3>Team culture</h3>
//               <p>
//                 Building strong teams across various industries around the business ensures I can deliver
//                 creative solutions that align with the vision. Whether working with developers, marketers,
//                 or business teams, collaboration drives success in each design project.
//               </p>
//             </div>

//             <div className="item">
//               <span className="number">02</span>
//               <h3>User-centered design</h3>
//               <p>
//                 Designing with the end-user in mind is key. Every decision is focused on creating intuitive
//                 and visually appealing designs that provide users with the best experience, ensuring their
//                 voice is reflected in every project.
//               </p>
//             </div>

//             <div className="item">
//               <span className="number">03</span>
//               <h3>Design excellence</h3>
//               <p>
//                 Achieving exceptional design comes from pushing creative boundaries. I aim to foster an
//                 environment where experimentation and innovation are encouraged, ensuring that every project
//                 is visually appealing, distinctive, and tailored to business needs.
//               </p>
//             </div>

//             <div className="item">
//               <span className="number">04</span>
//               <h3>Continuous learning</h3>
//               <p>
//                 I constantly strive to learn new skills and stay ahead of the game. I enjoy tackling complex
//                 challenges and exploring new trends, and I thrive on creating innovative designs that make
//                 a lasting impression.
//               </p>
//             </div>
//           </div>
//         </div>
//     </section>
//   );
// }




