import React, { useEffect, useMemo, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: ""
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [startTs, setStartTs] = useState(Date.now());
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => setStartTs(Date.now()), []);
  const API = useMemo(
    () =>
      import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ||
      "https://portfolio-blu2.onrender.com",
    []
  );

  const onChange = (e) =>
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrMsg("");

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, t: startTs })
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
      setTimeout(() => setStatus("idle"), 2200);
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
    <>
      {/* SECTION CONTACT */}
      <section className="contact-section" data-theme="light" id="contact">
        <div className="cc-case__num">( 05 )</div>
        <div className="contact-container">
          {/* Colonne gauche : titre + texte */}
          <div className="contact-left">
            <h1 className="contact-title">
              DON’T WAIT FOR THE
              <br />
              <span className="contact-title-quote">“PERFECT TIME”</span>
            </h1>

            <div className="contact-left-body">
              <p className="contact-lead">
                <em>The best conversations start with a simple hello.</em>
              </p>

              <p className="contact-text">
                If something sparked your interest, let’s talk. You never know
                where one message can lead ! 
              </p>

            </div>
          </div>

          {/* Colonne droite : formulaire */}
          <div className="contact-right">
            <form
              className="contact-form"
              onSubmit={onSubmit}
              autoComplete="off"
              noValidate
            >
              <div className="contact-row contact-row-two">
                <div className="contact-field">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name*"
                    required
                    value={formData.name}
                    onChange={onChange}
                  />
                </div>
                <div className="contact-field">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email*"
                    required
                    value={formData.email}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-field">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={onChange}
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="contact-error">Something went wrong: {errMsg}</p>
              )}

              <div className="contact-row contact-row-action">
                <button type="submit" className="ctct" disabled={disabled}>
                  {status === "sending"
                    ? "Sending…"
                    : status === "success"
                    ? "Sent!"
                    : "Send request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION "THE RULES" */}
      <section className="rules-section">
        <div className="rules-inner">
          <header className="rules-header">
            <h2 className="rules-title">The rules</h2>
            <p className="rules-sub">(if you want to work together)</p>
          </header>

          <div className="rules-grid">
            {/* Rule 1 */}
            <article className="rule-card">
              <div className="rule-number">1</div>
              <h3 className="rule-title">6-month internship</h3>
              <p className="rule-subtitle">Starting September 2027</p>
              <div className="rule-divider" />
              <p className="rule-text">
                I’m looking for a 6-month internship where I can work at the crossroads of data, product and strategy. 
                Ideally: a team that ships, cares about craft, and gives real responsibility — from analysis and dashboards to experiments 
                and product decisions. If you need someone curious, structured and hungry to learn fast, this is where I fit best.
              </p>
            </article>

            {/* Rule 2 */}
            <article className="rule-card">
              <div className="rule-number">2</div>
              <h3 className="rule-title">Freelance missions</h3>
              <p className="rule-subtitle">When you need extra brains on data</p>
              <div className="rule-divider" />
              <p className="rule-text">
                I’m also open to freelance work when my experience can unlock something concrete: 
                cleaning and structuring data, building dashboards, analysing user or business performance, 
                or designing small tools that make teams faster. Short, focused missions with a clear problem and a 
                measurable outcome are my favourite format.
              </p>
            </article>

            {/* Rule 3 */}
            <article className="rule-card">
              <div className="rule-number">3</div>
              <h3 className="rule-title">Collabs & conversations</h3>
              <p className="rule-subtitle">For ambitious, curious people</p>
              <div className="rule-divider" />
              <p className="rule-text">
                Not every message has to be a job offer. I’m always up for collaborations, side projects, 
                or simply exchanging ideas with people who care about data, product, or creative tech. 
                If you’re building something, exploring a new idea, or just want to compare notes, I’d be happy to connect.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
