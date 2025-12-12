// src/sections/ContactSection.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./Content.css";
import { Mail, Linkedin, Github } from "lucide-react";
import DotGrid from "../BackDot/BackDot";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [startTs, setStartTs] = useState(Date.now());
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => setStartTs(Date.now()), []);
  const API = useMemo(
    () => (import.meta.env.VITE_API_URL?.replace(/\/+$/, "") || "https://portfolio-blu2.onrender.com"),
    []
  );

  const onChange = (e) => setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrMsg("");

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, t: startTs }),
      });
      if (!res.ok) {
        let msg = `HTTP ${res.status}`;
        try {
          const j = await res.json();
          msg = j?.error || msg;
        } catch {}
        throw new Error(msg);
      }
      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
      setStartTs(Date.now());
      setTimeout(() => setStatus("idle"), 7500);
    } catch (err) {
      setErrMsg(err?.message || "Unexpected error");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  const disabled =
    status === "sending" ||
    !formData.name.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
    !formData.message.trim();

  return (
    <section className="cc-foot" id="contact">
      {/* BG */}
      <div className="cc-foot-bg">
        <DotGrid
          dotSize={6}
          gap={20}
          baseColor="#161616"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="cc-foot-inner">
        {/* LEFT — mini form */}
        <div className="cc-foot-left">
          <h3 className="cc-foot-cta">Feel free to contact me, I’ll get back to you soon.</h3>

          <form className="cc-miniform" onSubmit={onSubmit} autoComplete="off" noValidate>
            {/* honeypot */}
            <input
              type="text"
              name="website"
              className="cc-hp"
              tabIndex="-1"
              autoComplete="off"
              value={formData.website}
              onChange={onChange}
              aria-hidden="true"
            />

            <div className="cc-row">
              <input
                type="text"
                name="name"
                placeholder="Your name *"
                value={formData.name}
                onChange={onChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address *"
                value={formData.email}
                onChange={onChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message…"
              rows="3"
              value={formData.message}
              onChange={onChange}
              required
            />

            <div className="cc-actions">
              <button className="cc-btn" type="submit" disabled={disabled}>
                {status === "sending" ? "Sending…" : status === "success" ? "Message Sent!" : "Email me"}
              </button>

              <a className="cc-btn ghost" href="https://wa.me/33787804653" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>

          </form>
        </div>

        {/* right — quick links x social media */}
        <div className="cc-foot-links">
                  <div className="cc-foot-mid">
                    <h4>Quick links:</h4>
                    <ul>
                      <li><NavLink to="/experience">Experiences</NavLink></li>
                      <li><NavLink to="/projects">Projects</NavLink></li>
                      <li><NavLink to="/contact">Get in touch</NavLink></li>
                      <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                  </div>

                  <div className="cc-foot-right">
                    <h4>Social media:</h4>
                    <ul className="cc-social">
                      <li>
                        <a href="https://www.linkedin.com/in/zoe-charrier/" target="_blank" rel="noreferrer">
                          <Linkedin size={16} /> LinkedIn
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/M1w4k0" target="_blank" rel="noreferrer">
                          <Github size={16} /> Github
                        </a>
                      </li>
                      <li>
                        <a href="mailto:zm.charrier@gmail.com">
                          <Mail size={16} /> Email
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>
        </div>
        
{/* Bottom strip */}
      <div className="cc-foot-bottom">
        <span> © 2025 – All rights reserved</span>
        <span className="by">Built by Zoé</span>
      </div>
      {/* Big name */}
      <div className="cc-brand">Zoé Charrier</div>
    </section>
  );
}
