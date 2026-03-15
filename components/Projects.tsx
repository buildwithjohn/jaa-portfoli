"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  { num:"01", cat:"Engineering", title:"QuickBites", desc:"Microservices food delivery platform with full observability stack, Kubernetes orchestration, and automated CI/CD via GitHub Actions.", tags:["Node.js","PostgreSQL","Kubernetes","Prometheus","Grafana","GitHub Actions"], link:"https://github.com/Johnprexy" },
  { num:"02", cat:"DevOps Capstone", title:"AfriMart", desc:"Full-stack e-commerce platform designed as a 4-week DevOps capstone covering Terraform, Ansible, Docker, Jenkins, Kubernetes, and monitoring.", tags:["Terraform","Ansible","Docker","Jenkins","Kubernetes"], link:"https://github.com/Johnprexy" },
  { num:"03", cat:"Security", title:"PaySecure Bank", desc:"Deliberately vulnerable Nigerian banking application with 20+ documented vulnerabilities, built for ethical hacking assessment and training.", tags:["Ethical Hacking","Pen Testing","OWASP","Vulnerability Research"], link:"https://github.com/Johnprexy" },
  { num:"04", cat:"AI Platform", title:"AssetGPT — Dubai Edge", desc:"Middleware intelligence platform for Dubai's licensed real estate brokers and institutional investors. AI-powered advisory via SZElite.", tags:["AI/ML","Middleware","Real Estate","Dubai"], link:"#contact" },
  { num:"05", cat:"E-commerce", title:"Mojis Mattel", desc:"Amsterdam-based sustainable jewelry social enterprise e-commerce site. Built in React and deployed on Vercel for a European client.", tags:["React","Vercel","E-commerce","Amsterdam"], link:"#contact" },
  { num:"06", cat:"Social Network", title:"My Africa Family", desc:"Social networking platform for Africans in the diaspora featuring authentication, profiles, posts, messaging, stories, and notifications.", tags:["React","Supabase","Realtime","Diaspora"], link:"https://github.com/Johnprexy" },
  { num:"07", cat:"Ministry", title:"The Refuel Experience", desc:"Ministry conference website with seamless registration flow powered by Web3Forms and Google Apps Script backend integration.", tags:["React","Tailwind","Web3Forms","Google Apps Script"], link:"#contact" },
  { num:"08", cat:"EdTech", title:"PrexyLab", desc:"Collaborative coding lab web app used in DevOps and cloud classes. Features real-time code editing with Monaco Editor and Firebase sync.", tags:["React","Vite","Monaco Editor","Firebase"], link:"https://github.com/Johnprexy" },
  { num:"09", cat:"Diaspora", title:"Cedar Africa", desc:"Property investment landing page for the African diaspora market — connecting overseas Africans with real estate opportunities back home.", tags:["React","Landing Page","Property","Diaspora"], link:"#contact" },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 5%", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Engineering Projects" title="Built. Shipped.<br/>Production-grade."
          subtitle="Real platforms, real architecture, real impact — from microservices to social networks to real estate intelligence platforms." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.3rem" }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.48, delay: (i % 3) * 0.09 }}
              whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
              style={{
                padding: "1.8rem", borderRadius: "16px",
                background: "var(--surface)", border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)", transition: "all 0.28s",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Number accent */}
              <div style={{ position: "absolute", top: "1.2rem", right: "1.4rem", fontFamily: "'Syne', sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "var(--border)", lineHeight: 1 }}>
                {p.num}
              </div>

              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "var(--cyan)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.7rem", fontWeight: 500 }}>
                {p.cat}
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.12rem", color: "var(--text)", marginBottom: "0.65rem" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.84rem", color: "var(--text2)", lineHeight: 1.78, fontWeight: 300, marginBottom: "1.2rem" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem", marginBottom: "1.3rem" }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "0.63rem",
                    color: "var(--cyan)", background: "var(--cyan-dim)",
                    border: "1px solid var(--border)", borderRadius: "5px",
                    padding: "0.2rem 0.55rem",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={p.link} target={p.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem",
                  color: "var(--text3)", textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}
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
