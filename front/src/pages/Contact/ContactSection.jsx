import React, { useState, useEffect } from "react";
import "./ContactSection.css";
import { Mail, Linkedin } from "lucide-react";
import DotGrid from "../../Components/BackDot/BackDot";
import { getApiBase } from "../../lib/apiBase";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("");
  const [startTs, setStartTs] = useState(Date.now());

  useEffect(() => setStartTs(Date.now()), []);

  const API = getApiBase();
  console.log("API base =", API);

  const handleChange = (e) =>
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, t: startTs }),
      });
      if (!res.ok) {
        let msg = "Error";
        try { const j = await res.json(); msg = j.error || JSON.stringify(j); } catch {}
        throw new Error(msg);
      }
      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
      setStartTs(Date.now());
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="all">
      {/* === BACKGROUND DOT GRID === */}
      <div className="dotgrid-background">
        <DotGrid
          dotSize={6}
          gap={20}
          baseColor="#281e38"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="connect-section" id="contact">
        <div className="connect-container">
          <p className="availability">- Available to work -</p>
          <h1 className="connect-title">
            Let’s <span>Connect</span>
          </h1>
          <p className="connect-subtext">
            Feel free to contact me if you have any questions.
            <br />
            I’m available for new projects — I’ll get back to you soon.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          {/* honeypot */}
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            className="hp-field"
            value={formData.website}
            onChange={handleChange}
            aria-hidden="true"
          />

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />

          <button type="submit" className="contactbtn">
            {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send"}
          </button>

          {status === "error" && <p className="error-msg">❌ Error — please try again later.</p>}
        </form>
      </div>

      <div className="footer-content">
        <div className="footer-column1">
          <p>
            <a className="lien" href="mailto:zoe.charrier@email.com">
              zoe.charrier.23@neoma-bs.com
            </a>
          </p>
          <p className="rights">© 2025. All rights reserved.</p>
        </div>
        <div className="footer-column">
          <div className="social-icons">
            <a href="mailto:zm.charrier@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" rel="noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
