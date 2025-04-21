import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import './Footer.css';

export default function Footer() {
  const words = [
    { text: "Take a coffee & chat with me !" },
  ];

  return (
    <section className="contact-section">
      <img src="/assets/cafe.png" className="cafe"/>
      {/* Typewriter effect */}
      <TypewriterEffect words={words} />
 

      <div className="contact-infos">
        <div className="contact-box email">
          <img src="/assets/email.png" alt="email icon" />
          <span>zm.charrier@gmail.com</span>
        </div>
        <div className="contact-box phone">
          <img src="/assets/mobile.png" alt="phone icon" />
          <span>07.87.80.46.53</span>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
