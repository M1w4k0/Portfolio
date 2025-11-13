import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Mail, MessageSquare, Linkedin, Instagram, ArrowRight } from "lucide-react";


export default function Footer() {
  

  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" }); 
    const [status, setStatus] = useState("");
    const [startTs, setStartTs] = useState(Date.now());
  
    useEffect(() => setStartTs(Date.now()), []);
  
    const handleChange = (e) => setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("sending");
      try {
        const res = await fetch("http://localhost:5050/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, t: startTs }),
        });
        if (!res.ok) throw new Error(await res.text());
        setStatus("success");
        setFormData({ name: "", email: "", message: "", website: "" });
        setStartTs(Date.now());
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

  return (
    <>

      <footer className="footer">

        <hr /> 

        <div className="footer-content">
          <div className="footer-column">
            <h4>Email me</h4>
            <p>
              <a className="lien" href="mailto:zoe.charrier@email.com">
                zoe.charrier.23@neoma-bs.com
              </a>
            </p>
            <p className="rights">© 2025. All rights reserved.</p>
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <p><a className="lien" href="#home">Home</a></p>
            <p><a className="lien" href="#projects">Projects</a></p>
            <p><a className="lien" href="#experiences">Experiences</a></p>
            <p><a className="lien" href="#skills">Skills</a></p>
          </div>

          <div className="footer-column">
            <h4>Social</h4>
             <div className="social-icons">
                      <a href="mailto:zm.charrier@gmail.com" aria-label="Email"><Mail size={20} /></a>
                      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
          </div>
        </div>
      </footer>
    </>
  );
}
