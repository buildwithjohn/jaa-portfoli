"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const services = [
  { icon: "☁️", bg: "rgba(0,200,255,0.1)", title: "Cloud & DevOps Engineering", desc: "AWS and Azure infrastructure setup, Kubernetes orchestration, CI/CD pipelines, Terraform IaC, Docker containerization, and production monitoring." },
  { icon: "💻", bg: "rgba(124,111,205,0.15)", title: "Web Development", desc: "Full-stack web applications — from React/Next.js frontends to Node.js/PostgreSQL backends. Clean code, modern design, deployed and production-ready." },
  { icon: "🔐", bg: "rgba(240,100,100,0.1)", title: "Cybersecurity Assessment", desc: "Penetration testing, vulnerability assessments, ethical hacking engagements, and security training for teams and organisations." },
  { icon: "🎨", bg: "rgba(240,180,40,0.1)", title: "Graphic Design & Brand Identity", desc: "Event flyers, brand identity systems, social media graphics, print materials — designed in Photoshop and CorelDraw with precision and creativity." },
  { icon: "📚", bg: "rgba(0,208,132,0.1)", title: "Tech Training & Curriculum", desc: "Custom DevOps, Cloud, and Cybersecurity training programs. Hands-on, scenario-based learning that actually sticks — not death by PowerPoint." },
  { icon: "🤖", bg: "rgba(0,200,255,0.08)", title: "AI & Prompt Engineering", desc: "Building AI-powered workflows, LLM integrations, and intelligent automation tools that give your product or business a genuine edge." },
  { icon: "🏢", bg: "rgba(100,160,255,0.1)", title: "Cloud Consulting — Swelerion", desc: "Strategic cloud advisory through Swelerion Global Ltd. Architecture reviews, migration planning, cost optimisation, and infrastructure governance." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-[5%]" style={{ background: "var(--bg2)" }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Services"
          title="How I can<br/>help you."
          subtitle="Whether you need infrastructure built, a website shipped, your team trained, or your brand visualized — I've got you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(0,200,255,0.3)" }}
              className="p-7 rounded-2xl transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: s.bg }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.6rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.84rem", color: "var(--text2)", lineHeight: 1.75, fontWeight: 300 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
