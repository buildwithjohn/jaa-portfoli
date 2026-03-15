"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { icon:"☁️", title:"DevOps & Cloud", color:"rgba(0,200,255,0.1)", tags:["AWS","Azure","Kubernetes","Terraform","Docker","Jenkins","GitHub Actions","CI/CD","Ansible","Prometheus"] },
  { icon:"⚛️", title:"Frontend Engineering", color:"rgba(124,111,205,0.15)", tags:["React","Next.js","Tailwind CSS","HTML5","CSS3","Vite","TypeScript","Framer Motion"] },
  { icon:"🖥️", title:"Backend Engineering", color:"rgba(0,208,132,0.1)", tags:["Node.js","PostgreSQL","REST APIs","Supabase","Firebase","Microservices"] },
  { icon:"🛡️", title:"Cybersecurity", color:"rgba(240,100,100,0.1)", tags:["Ethical Hacking","Penetration Testing","Vulnerability Assessment","Network Security","Malware Analysis"] },
  { icon:"🎨", title:"Graphic Design", color:"rgba(240,180,40,0.1)", tags:["Adobe Photoshop","CorelDraw","Brand Identity","Event Graphics","Social Media Design","Print Design"] },
  { icon:"🤖", title:"Prompt Engineering", color:"rgba(0,200,255,0.08)", tags:["LLM Prompting","AI Workflow Design","AI-powered Tools","Claude API","GPT Integration"] },
  { icon:"📚", title:"Curriculum Development", color:"rgba(100,180,255,0.1)", tags:["DevOps Curriculum","Cloud Training","Cybersecurity Modules","Data Analytics","TRCN Certified"] },
  { icon:"🏢", title:"Tech Consulting", color:"rgba(0,208,132,0.1)", tags:["Cloud Strategy","Infrastructure Advisory","Swelerion Global Ltd","Client Delivery"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="Skills & Expertise" title="Eight domains.<br/>One engineer."
          subtitle="Depth across cloud infrastructure, software engineering, security, design, and education — not a jack of all trades, but a master of each." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1.1rem" }}>
          {skills.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45, delay:(i%4)*0.08 }}
              whileHover={{ y:-4, borderColor:"rgba(0,200,255,0.35)" }}
              style={{ padding:"1.4rem", borderRadius:"12px", background:"var(--surface)", border:"1px solid var(--border)", position:"relative", overflow:"hidden", transition:"all 0.3s" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"1rem" }}>
                <div style={{ width:40, height:40, borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", background:s.color, flexShrink:0 }}>{s.icon}</div>
                <div style={{ fontFamily:"'Syne', sans-serif", fontWeight:700, fontSize:"0.9rem", color:"var(--text)" }}>{s.title}</div>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                {s.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.64rem", padding:"0.2rem 0.55rem", background:"rgba(0,200,255,0.05)", border:"1px solid rgba(0,200,255,0.1)", borderRadius:"4px", color:"var(--text2)", letterSpacing:"0.03em" }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
