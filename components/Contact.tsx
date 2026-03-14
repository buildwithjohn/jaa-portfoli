"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, Check } from "lucide-react";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  { icon: <Mail size={16} />, label: "Email", value: "akinolajohnayomide@gmail.com", href: "mailto:akinolajohnayomide@gmail.com" },
  { icon: <Github size={16} />, label: "GitHub", value: "github.com/Johnprexy", href: "https://github.com/Johnprexy" },
  { icon: <Linkedin size={16} />, label: "LinkedIn", value: "Connect with me", href: "http://linkedin.com/in/john-ayomide-akinola" },
  { icon: <MapPin size={16} />, label: "Location", value: "Lagos, Nigeria — Available Remotely", href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="py-24 px-[5%]" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader label="Get in Touch" title="Let's build<br/>something great." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "white", marginBottom: "0.5rem" }}>
              Open to opportunities
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text2)", fontWeight: 300, marginBottom: "2rem", lineHeight: 1.75 }}>
              Remote DevOps/Cloud roles, freelance web and design projects, consulting engagements, or just a good conversation about tech. Reach out.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ x: 5, borderColor: "rgba(0,200,255,0.3)" }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 no-underline"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--cyan)]"
                    style={{ background: "rgba(0,200,255,0.1)" }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.84rem", color: "var(--text2)" }}>{c.label}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--text3)" }}>{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {[
              { label: "Your Name", type: "text", placeholder: "John Doe" },
              { label: "Email Address", type: "email", placeholder: "john@company.com" },
              { label: "Subject", type: "text", placeholder: "DevOps contract · Design project · Let's talk" },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="px-4 py-3 rounded-lg outline-none transition-all duration-200 text-[var(--text)] placeholder:text-[var(--text3)] text-[0.9rem]"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project, role, or idea..."
                required
                className="px-4 py-3 rounded-lg outline-none transition-all duration-200 text-[var(--text)] placeholder:text-[var(--text3)] text-[0.9rem] resize-none"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--cyan)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <motion.button
              whileHover={{ translateY: -2, boxShadow: "0 0 50px rgba(0,200,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="self-start flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-[0.92rem] transition-all"
              style={{
                background: sent ? "var(--green)" : "var(--cyan)",
                color: "var(--bg)",
                boxShadow: "0 0 30px rgba(0,200,255,0.25)",
              }}
            >
              {sent ? <><Check size={16} /> Message Sent!</> : <><Send size={16} /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
