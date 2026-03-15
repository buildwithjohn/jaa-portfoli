"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  { icon:<Mail size={16}/>, label:"Email", value:"akinolajohnayomide@gmail.com", href:"mailto:akinolajohnayomide@gmail.com" },
  { icon:<Github size={16}/>, label:"GitHub", value:"github.com/Johnprexy", href:"https://github.com/Johnprexy" },
  { icon:<Linkedin size={16}/>, label:"LinkedIn", value:"john-ayomide-akinola", href:"http://linkedin.com/in/john-ayomide-akinola" },
  { icon:<MapPin size={16}/>, label:"Location", value:"Lagos, Nigeria — Available Remotely", href:"#" },
];

const field = (label: string, type: string, placeholder: string, extraStyle = {}) => ({ label, type, placeholder, extraStyle });

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const inputBase: React.CSSProperties = {
    width: "100%", padding: "0.85rem 1rem", borderRadius: "10px",
    border: "1.5px solid var(--border)",
    background: "var(--bg2)", color: "var(--text)",
    fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif",
    outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "6rem 5%", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Get in Touch" title="Let's build<br/>something great." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }} className="contact-grid">

          {/* Info */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <h3 style={{ fontFamily:"'Syne', sans-serif", fontWeight:700, fontSize:"1.2rem", color:"var(--text)", marginBottom:"0.5rem" }}>Open to opportunities</h3>
            <p style={{ fontSize:"0.9rem", color:"var(--text2)", fontWeight:300, marginBottom:"2rem", lineHeight:1.82 }}>
              Remote DevOps/Cloud roles, freelance web and design projects, consulting engagements, or just a good conversation about tech. Reach out.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.8rem" }}>
              {contactLinks.map((c) => (
                <motion.a key={c.label} href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  whileHover={{ x:4, borderColor:"var(--cyan)" }}
                  style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"1rem 1.1rem", background:"var(--surface)", border:"1.5px solid var(--border)", borderRadius:"12px", textDecoration:"none", boxShadow:"var(--shadow-sm)", transition:"all 0.2s" }}>
                  <div style={{ width:36, height:36, borderRadius:"9px", display:"flex", alignItems:"center", justifyContent:"center", background:"var(--cyan-dim)", color:"var(--cyan)", flexShrink:0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:"0.8rem", color:"var(--text3)", marginBottom:"0.1rem" }}>{c.label}</div>
                    <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.76rem", color:"var(--text2)", fontWeight:500 }}>{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.15 }}
            onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            {[
              field("Your Name", "text", "John Doe"),
              field("Email Address", "email", "john@company.com"),
              field("Subject", "text", "DevOps contract · Design project · Let's talk"),
            ].map((f) => (
              <div key={f.label} style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
                <label style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.67rem", color:"var(--text3)", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:500 }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} required style={inputBase}
                  onFocus={e => { e.target.style.borderColor="var(--cyan)"; e.target.style.boxShadow="0 0 0 3px var(--cyan-dim)"; }}
                  onBlur={e => { e.target.style.borderColor="var(--border)"; e.target.style.boxShadow="none"; }} />
              </div>
            ))}
            <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
              <label style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.67rem", color:"var(--text3)", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:500 }}>Message</label>
              <textarea rows={5} placeholder="Tell me about your project, role, or idea..." required style={{ ...inputBase, resize:"none" }}
                onFocus={e => { e.target.style.borderColor="var(--cyan)"; e.target.style.boxShadow="0 0 0 3px var(--cyan-dim)"; }}
                onBlur={e => { e.target.style.borderColor="var(--border)"; e.target.style.boxShadow="none"; }} />
            </div>
            <motion.button type="submit" whileHover={{ y:-2, boxShadow:"var(--shadow-cyan)" }} whileTap={{ scale:0.96 }}
              style={{ alignSelf:"flex-start", display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.88rem 2rem", background:sent?"var(--green)":"var(--cyan)", color:"#fff", border:"none", borderRadius:"10px", fontFamily:"'Syne', sans-serif", fontWeight:700, fontSize:"0.92rem", cursor:"pointer", boxShadow:"var(--shadow-cyan)", transition:"background 0.3s" }}>
              {sent ? <><Check size={16}/> Message Sent!</> : <><Send size={16}/> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
