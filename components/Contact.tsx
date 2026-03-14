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

const inputStyle = {
  width:"100%", padding:"0.85rem 1rem", borderRadius:"8px", outline:"none",
  background:"var(--surface)", border:"1px solid var(--border)",
  color:"var(--text)", fontSize:"0.9rem", fontFamily:"inherit",
  transition:"border-color 0.2s",
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="Get in Touch" title="Let's build<br/>something great." />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem" }} className="contact-grid">
          {/* Info */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <h3 style={{ fontFamily:"'Syne', sans-serif", fontWeight:700, fontSize:"1.2rem", color:"white", marginBottom:"0.5rem" }}>Open to opportunities</h3>
            <p style={{ fontSize:"0.9rem", color:"var(--text2)", fontWeight:300, marginBottom:"2rem", lineHeight:1.8 }}>Remote DevOps/Cloud roles, freelance web and design projects, consulting engagements, or just a good conversation about tech. Reach out.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.85rem" }}>
              {contactLinks.map((c) => (
                <motion.a key={c.label} href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  whileHover={{ x:5, borderColor:"rgba(0,200,255,0.3)" }}
                  style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"1rem 1.1rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"10px", textDecoration:"none", transition:"all 0.2s" }}>
                  <div style={{ width:36, height:36, borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,200,255,0.1)", color:"var(--cyan)", flexShrink:0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:"0.83rem", color:"var(--text2)" }}>{c.label}</div>
                    <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.74rem", color:"var(--text3)" }}>{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.15 }}
            onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            {[
              { label:"Your Name", type:"text", placeholder:"John Doe" },
              { label:"Email Address", type:"email", placeholder:"john@company.com" },
              { label:"Subject", type:"text", placeholder:"DevOps contract · Design project · Let's talk" },
            ].map((f) => (
              <div key={f.label} style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
                <label style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.67rem", color:"var(--text3)", letterSpacing:"0.1em", textTransform:"uppercase" }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} required style={inputStyle}
                  onFocus={e => (e.target.style.borderColor="var(--cyan)")}
                  onBlur={e => (e.target.style.borderColor="var(--border)")} />
              </div>
            ))}
            <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem" }}>
              <label style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.67rem", color:"var(--text3)", letterSpacing:"0.1em", textTransform:"uppercase" }}>Message</label>
              <textarea rows={5} placeholder="Tell me about your project, role, or idea..." required style={{ ...inputStyle, resize:"none" }}
                onFocus={e => (e.target.style.borderColor="var(--cyan)")}
                onBlur={e => (e.target.style.borderColor="var(--border)")} />
            </div>
            <motion.button type="submit" whileHover={{ y:-2, boxShadow:"0 0 50px rgba(0,200,255,0.4)" }} whileTap={{ scale:0.97 }}
              style={{ alignSelf:"flex-start", display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.85rem 2rem", background:sent?"var(--green)":"var(--cyan)", color:"var(--bg)", border:"none", borderRadius:"8px", fontWeight:600, fontSize:"0.92rem", cursor:"pointer", boxShadow:"0 0 30px rgba(0,200,255,0.25)", transition:"background 0.3s" }}>
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
