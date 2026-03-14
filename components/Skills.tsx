"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { icon: "☁️", title: "DevOps & Cloud", color: "rgba(0,200,255,0.1)", tags: ["AWS", "Azure", "Kubernetes", "Terraform", "Docker", "Jenkins", "GitHub Actions", "CI/CD", "Ansible", "Prometheus"] },
  { icon: "⚛️", title: "Frontend Engineering", color: "rgba(124,111,205,0.15)", tags: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Vite", "TypeScript", "Framer Motion"] },
  { icon: "🖥️", title: "Backend Engineering", color: "rgba(0,208,132,0.1)", tags: ["Node.js", "PostgreSQL", "REST APIs", "Supabase", "Firebase", "Microservices"] },
  { icon: "🛡️", title: "Cybersecurity", color: "rgba(240,100,100,0.1)", tags: ["Ethical Hacking", "Penetration Testing", "Vulnerability Assessment", "Network Security", "Malware Analysis"] },
  { icon: "🎨", title: "Graphic Design", color: "rgba(240,180,40,0.1)", tags: ["Adobe Photoshop", "CorelDraw", "Brand Identity", "Event Graphics", "Social Media Design", "Print Design"] },
  { icon: "🤖", title: "Prompt Engineering", color: "rgba(0,200,255,0.08)", tags: ["LLM Prompting", "AI Workflow Design", "AI-powered Tools", "Claude API", "GPT Integration"] },
  { icon: "📚", title: "Curriculum Development", color: "rgba(100,180,255,0.1)", tags: ["DevOps Curriculum", "Cloud Training", "Cybersecurity Modules", "Data Analytics", "TRCN Certified"] },
  { icon: "🏢", title: "Tech Consulting", color: "rgba(0,208,132,0.1)", tags: ["Cloud Strategy", "Infrastructure Advisory", "Swelerion Global Ltd", "Client Delivery"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-[5%]" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Skills & Expertise"
          title="Eight domains.<br/>One engineer."
          subtitle="Depth across cloud infrastructure, software engineering, security, design, and education — not a jack of all trades, but a master of each."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(0,200,255,0.35)" }}
              className="p-5 rounded-xl relative overflow-hidden group transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {/* Top accent line on hover */}
              <span className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }}
              />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: s.color }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "white" }}>
                  {s.title}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.03em", color: "var(--text2)", background: "rgba(0,200,255,0.05)", border: "1px solid rgba(0,200,255,0.1)", borderRadius: "4px", padding: "0.2rem 0.55rem" }}
                  >
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
