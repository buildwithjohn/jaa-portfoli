"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { icon:"☁️", title:"DevOps & Cloud", bg:"rgba(37,99,235,0.08)", tags:["AWS","Azure","Kubernetes","Terraform","Docker","Jenkins","GitHub Actions","CI/CD","Ansible","Prometheus"] },
  { icon:"⚛️", title:"Frontend Engineering", bg:"rgba(124,111,205,0.1)", tags:["React","Next.js","Tailwind CSS","HTML5","CSS3","Vite","TypeScript","Framer Motion"] },
  { icon:"🖥️", title:"Backend Engineering", bg:"rgba(5,150,105,0.08)", tags:["Node.js","PostgreSQL","REST APIs","Supabase","Firebase","Microservices"] },
  { icon:"🛡️", title:"Cybersecurity", bg:"rgba(220,38,38,0.07)", tags:["Ethical Hacking","Penetration Testing","Vulnerability Assessment","Network Security","Malware Analysis"] },
  { icon:"🎨", title:"Graphic Design", bg:"rgba(217,119,6,0.08)", tags:["Adobe Photoshop","CorelDraw","Brand Identity","Event Graphics","Social Media Design","Print Design"] },
  { icon:"🤖", title:"Prompt Engineering", bg:"rgba(37,99,235,0.06)", tags:["LLM Prompting","AI Workflow Design","AI-powered Tools","Claude API","GPT Integration"] },
  { icon:"📚", title:"Curriculum Development", bg:"rgba(100,116,139,0.08)", tags:["DevOps Curriculum","Cloud Training","Cybersecurity Modules","Data Analytics","TRCN Certified"] },
  { icon:"🏢", title:"Tech Consulting", bg:"rgba(5,150,105,0.07)", tags:["Cloud Strategy","Infrastructure Advisory","Swelerion Global Ltd","Client Delivery"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Skills & Expertise" title="Eight domains.<br/>One engineer."
          subtitle="Depth across cloud infrastructure, software engineering, security, design, and education — not a jack of all trades, but a master of each." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(265px, 1fr))", gap: "1.1rem" }}>
          {skills.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.42, delay: (i % 4) * 0.07 }}
              whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
              style={{
                padding: "1.4rem", borderRadius: "14px",
                background: "var(--surface)", border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)", transition: "all 0.28s",
              }}
            >
              {/* Top accent */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", background: s.bg, flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text)" }}>
                  {s.title}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem" }}>
                {s.tags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem",
                    padding: "0.22rem 0.55rem",
                    background: "var(--bg2)", border: "1px solid var(--border)",
                    borderRadius: "5px", color: "var(--text3)",
                    letterSpacing: "0.02em",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
