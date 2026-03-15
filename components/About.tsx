"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const pillars = [
  { icon:"☁️", title:"Cloud Engineering", desc:"AWS · Azure · K8s" },
  { icon:"🎨", title:"Visual Design", desc:"Photoshop · CorelDraw" },
  { icon:"🏫", title:"Tech Education", desc:"TRCN Certified" },
  { icon:"🛡️", title:"Cybersecurity", desc:"Pen Testing · Ethical Hacking" },
];

const timeline = [
  { year:"2023 – Present", role:"Managing Director", company:"Swelerion Global Ltd", desc:"Leading cloud consultancy engagements, infrastructure advisory, and client delivery for organisations across Nigeria and internationally." },
  { year:"2022 – Present", role:"DevOps & Cloud Instructor", company:"Bloomy Technologies, Lagos", desc:"Designing and delivering hands-on curriculum in Linux, DevOps, Cloud, Cybersecurity, and Data Analytics to student cohorts." },
  { year:"Ongoing", role:"Freelance Engineer & Designer", company:"Independent", desc:"Delivering web platforms, cloud infrastructure, and graphic design for clients across Nigeria, Europe, and the Middle East." },
  { year:"Foundation", role:"B.Sc. Chemistry Education", company:"TRCN Certified Educator", desc:"Academic foundation that built the teaching instincts now applied to every course, workshop, and curriculum." },
];

export default function About() {
  return (
    <section id="about" style={{ padding:"6rem 5%", background:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="About Me" title="The story behind<br/>the engineer" />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem" }} className="about-grid">
          {/* Left */}
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}>
            {[
              <span key="1">I started out studying <strong style={{ color:"var(--text)", fontWeight:500 }}>Chemistry Education</strong> — which gave me something most engineers lack: the ability to break down the complex and make it genuinely understandable. That instinct now powers everything I do.</span>,
              <span key="2">Today, I&apos;m a <strong style={{ color:"var(--text)", fontWeight:500 }}>DevOps & Cloud Engineer</strong> who has shipped production-grade infrastructure on AWS and Azure, orchestrated Kubernetes clusters, and delivered real platforms for clients from Dubai&apos;s real estate market to Amsterdam&apos;s jewelry scene.</span>,
              <span key="3">As an <strong style={{ color:"var(--text)", fontWeight:500 }}>instructor at Bloomy Technologies</strong>, I teach Linux, Cloud, DevOps, Cybersecurity and Data Analytics. As <strong style={{ color:"var(--text)", fontWeight:500 }}>MD of Swelerion Global Ltd</strong>, I consult on cloud strategy. And as a <strong style={{ color:"var(--text)", fontWeight:500 }}>graphics designer</strong>, I create week in, week out.</span>,
              <span key="4">I design. I build. I teach. I consult. Not as separate things — as one cohesive approach to solving problems with craft.</span>,
            ].map((p, i) => (
              <p key={i} style={{ color:"var(--text2)", fontWeight:300, lineHeight:1.9, fontSize:"0.97rem", marginBottom:"1.2rem" }}>{p}</p>
            ))}

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.8rem", marginTop:"2rem" }}>
              {pillars.map((p, i) => (
                <motion.div key={p.title}
                  initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.08 }}
                  whileHover={{ y:-3, borderColor:"rgba(0,200,255,0.4)" }}
                  style={{ padding:"1.1rem", borderRadius:"10px", background:"var(--surface)", border:"1px solid var(--border)", transition:"all 0.3s" }}>
                  <div style={{ fontSize:"1.4rem", marginBottom:"0.4rem" }}>{p.icon}</div>
                  <div style={{ fontFamily:"'Syne', sans-serif", fontWeight:700, fontSize:"0.87rem", color:"var(--text)" }}>{p.title}</div>
                  <div style={{ fontSize:"0.76rem", color:"var(--text3)", marginTop:"0.15rem" }}>{p.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.65, delay:0.15 }}>
            <div style={{ position:"relative", paddingLeft:"1.8rem", borderLeft:"1px solid", borderImage:"linear-gradient(to bottom, var(--cyan), transparent) 1" }}>
              {timeline.map((t, i) => (
                <motion.div key={t.role}
                  initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.12 }}
                  style={{ marginBottom:"2rem", position:"relative" }}>
                  <span style={{ position:"absolute", left:"-2.12rem", top:"6px", width:12, height:12, borderRadius:"50%", background:"var(--cyan)", boxShadow:"0 0 8px var(--cyan-glow)", display:"inline-block" }} />
                  <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.7rem", color:"var(--cyan)", letterSpacing:"0.08em", marginBottom:"0.3rem" }}>{t.year}</div>
                  <div style={{ fontFamily:"'Syne', sans-serif", fontWeight:700, fontSize:"0.95rem", color:"var(--text)", marginBottom:"0.15rem" }}>{t.role}</div>
                  <div style={{ fontSize:"0.82rem", color:"var(--text2)", marginBottom:"0.4rem" }}>{t.company}</div>
                  <div style={{ fontSize:"0.82rem", color:"var(--text3)", lineHeight:1.7 }}>{t.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
