"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const services = [
  { icon:"☁️", bg:"rgba(37,99,235,0.08)", title:"Cloud & DevOps Engineering", desc:"AWS and Azure infrastructure setup, Kubernetes orchestration, CI/CD pipelines, Terraform IaC, Docker containerization, and production monitoring." },
  { icon:"💻", bg:"rgba(124,111,205,0.1)", title:"Web Development", desc:"Full-stack web applications — from React/Next.js frontends to Node.js/PostgreSQL backends. Clean code, modern design, deployed and production-ready." },
  { icon:"🔐", bg:"rgba(220,38,38,0.07)", title:"Cybersecurity Assessment", desc:"Penetration testing, vulnerability assessments, ethical hacking engagements, and security training for teams and organisations." },
  { icon:"🎨", bg:"rgba(217,119,6,0.08)", title:"Graphic Design & Brand Identity", desc:"Event flyers, brand identity systems, social media graphics, print materials — designed in Photoshop and CorelDraw with precision and creativity." },
  { icon:"📚", bg:"rgba(5,150,105,0.08)", title:"Tech Training & Curriculum", desc:"Custom DevOps, Cloud, and Cybersecurity training programs. Hands-on, scenario-based learning that actually sticks — not death by PowerPoint." },
  { icon:"🤖", bg:"rgba(37,99,235,0.06)", title:"AI & Prompt Engineering", desc:"Building AI-powered workflows, LLM integrations, and intelligent automation tools that give your product or business a genuine edge." },
  { icon:"🏢", bg:"rgba(100,116,139,0.07)", title:"Cloud Consulting — Swelerion", desc:"Strategic cloud advisory through Swelerion Global Ltd. Architecture reviews, migration planning, cost optimisation, and infrastructure governance." },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "6rem 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Services" title="How I can<br/>help you."
          subtitle="Whether you need infrastructure built, a website shipped, your team trained, or your brand visualised — I've got you." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.42, delay: (i % 3) * 0.09 }}
              whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
              style={{
                padding: "1.8rem", borderRadius: "14px",
                background: "var(--surface)", border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)", transition: "all 0.28s",
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", background: s.bg, marginBottom: "1.2rem" }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "0.6rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text2)", lineHeight: 1.78, fontWeight: 300 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
