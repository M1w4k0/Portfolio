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
          <div className="sticky-card1">
            <div className="card-text">
              <h3>My life</h3>
              <p>Handle dynamic data with the built-in content manager. Link data dynamically to any part of your website.</p>
              <a href="#" className="link">View Details</a>
            </div>
            <img src="https://droip.com/wp-content/uploads/2025/03/CMS1.webp" alt="Content Manager" className="card-img" />
          </div>

          <div className="sticky-card2">
            <div className="card-text">
              <h3>Some Hobbies</h3>
              <p>Organize and edit all media assets, including SVGs, Lottie, and icons, with the built-in image and shape editor.</p>
              <a href="#" className="link">View Details</a>
            </div>
            <img src="https://droip.com/wp-content/uploads/2025/03/Media-Manager.webp" alt="Media Manager" className="card-img" />
          </div>

          <div className="sticky-card3">
            <div className="card-text">
              <h3>Where I aspire to go </h3>
              <p>Dynamically update SEO content across pages to optimize your website's search performance.</p>
              <a href="#" className="link">View Details</a>
            </div>
            <img src="https://droip.com/wp-content/uploads/2025/03/dymanic-seo2-1.webp" alt="SEO" className="card-img" />
          </div>
        </div>
      </div>
    </section>
  );
}