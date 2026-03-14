"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  { num: "01", cat: "Engineering", title: "QuickBites", desc: "Microservices food delivery platform with full observability stack, Kubernetes orchestration, and automated CI/CD via GitHub Actions.", tags: ["Node.js", "PostgreSQL", "Kubernetes", "Prometheus", "Grafana", "GitHub Actions"], link: "https://github.com/Johnprexy" },
  { num: "02", cat: "DevOps Capstone", title: "AfriMart", desc: "Full-stack e-commerce platform designed as a 4-week DevOps capstone covering Terraform, Ansible, Docker, Jenkins, Kubernetes, and monitoring.", tags: ["Terraform", "Ansible", "Docker", "Jenkins", "Kubernetes"], link: "https://github.com/Johnprexy" },
  { num: "03", cat: "Security", title: "PaySecure Bank", desc: "Deliberately vulnerable Nigerian banking application with 20+ documented vulnerabilities, built for ethical hacking capstone assessment and training.", tags: ["Ethical Hacking", "Pen Testing", "OWASP", "Training"], link: "https://github.com/Johnprexy" },
  { num: "04", cat: "AI Platform", title: "AssetGPT — Dubai Edge", desc: "Middleware intelligence platform for Dubai's licensed real estate brokers and institutional investors. AI-powered property advisory via SZElite.", tags: ["AI/ML", "Middleware", "Real Estate", "Dubai"], link: "#contact" },
  { num: "05", cat: "E-commerce", title: "Mojis Mattel", desc: "Amsterdam-based sustainable jewelry social enterprise e-commerce site. Built in React and deployed on Vercel for a European client.", tags: ["React", "Vercel", "E-commerce", "Amsterdam"], link: "#contact" },
  { num: "06", cat: "Social Network", title: "My Africa Family", desc: "Social networking platform for Africans in the diaspora featuring authentication, profiles, posts, messaging, stories, and notifications.", tags: ["React", "Supabase", "Realtime", "Diaspora"], link: "https://github.com/Johnprexy" },
  { num: "07", cat: "Ministry", title: "The Refuel Experience", desc: "Ministry conference website with seamless registration flow powered by Web3Forms and Google Apps Script backend integration.", tags: ["React", "Tailwind", "Web3Forms", "Google Apps Script"], link: "#contact" },
  { num: "08", cat: "EdTech", title: "PrexyLab", desc: "Collaborative coding lab web app used in DevOps and cloud classes. Features real-time code editing with Monaco Editor and Firebase sync.", tags: ["React", "Vite", "Monaco Editor", "Firebase"], link: "https://github.com/Johnprexy" },
  { num: "09", cat: "Diaspora", title: "Cedar Africa", desc: "Property investment landing page for the African diaspora market — connecting overseas Africans with real estate opportunities back home.", tags: ["React", "Landing Page", "Property", "Diaspora"], link: "#contact" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-[5%]" style={{ background: "var(--bg2)" }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Engineering Projects"
          title="Built. Shipped.<br/>Production-grade."
          subtitle="Real platforms, real architecture, real impact — from microservices to social networks to real estate intelligence platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(0,200,255,0.25)" }}
              className="p-6 rounded-2xl relative overflow-hidden group transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,200,255,0.1), transparent 70%)", transform: "translate(30%, -30%)" }}
              />

              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.12em", marginBottom: "0.8rem" }}>
                {p.num} / {p.cat}
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.6rem", position: "relative", zIndex: 1 }}>
                {p.title}
              </h3>

              <p style={{ fontSize: "0.84rem", color: "var(--text2)", lineHeight: 1.75, fontWeight: 300, marginBottom: "1.2rem" }}>
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--cyan)", background: "rgba(0,200,255,0.06)", border: "1px solid var(--border)", borderRadius: "4px", padding: "0.2rem 0.5rem" }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--text3)] hover:text-[var(--cyan)] transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.05em" }}
              >
                {p.link.startsWith("http") ? <><Github size={13} /> View on GitHub</> : <><ExternalLink size={13} /> Enquire →</>}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
