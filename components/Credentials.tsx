"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const credentials = [
  {
    type: "certification",
    icon: "☁️",
    badge: "AWS",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    desc: "Foundational certification validating understanding of AWS Cloud concepts, services, security, architecture, pricing, and support. The entry point to the AWS certification pathway.",
    color: "rgba(217,119,6,0.1)",
    border: "rgba(217,119,6,0.28)",
    accent: "var(--gold)",
    tag: "Cloud Certification",
  },
  {
    type: "degree",
    icon: "🎓",
    badge: "M.Sc",
    title: "Master's Degree in Information Technology",
    issuer: "University · Graduate Level",
    year: "Postgraduate",
    desc: "Advanced academic training in information technology systems, network architecture, software engineering principles, and emerging technologies — forming the theoretical backbone behind hands-on engineering practice.",
    color: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.22)",
    accent: "var(--cyan)",
    tag: "Postgraduate Degree",
  },
  {
    type: "certification",
    icon: "🏫",
    badge: "TRCN",
    title: "TRCN Professional Teaching Certification",
    issuer: "Teachers Registration Council of Nigeria",
    year: "Active",
    desc: "Nationally recognised professional educator certification from the Teachers Registration Council of Nigeria, validating John's formal qualification to teach and design curriculum at professional level.",
    color: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.22)",
    accent: "var(--green)",
    tag: "Professional Certification",
  },
  {
    type: "degree",
    icon: "⚗️",
    badge: "B.Sc",
    title: "B.Sc. Chemistry Education",
    issuer: "Undergraduate — Science & Education",
    year: "Foundation",
    desc: "Bachelor's degree combining rigorous science training with pedagogy — the origin of John's ability to break down complex technical concepts and make them genuinely accessible to learners at every level.",
    color: "rgba(124,111,205,0.1)",
    border: "rgba(124,111,205,0.25)",
    accent: "#7c6fcd",
    tag: "Undergraduate Degree",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader
          label="Degrees & Certifications"
          title="Credentials that<br/>back the work."
          subtitle="Academic depth meets industry certification. Every qualification here reflects a deliberate investment in excellence."
        />

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(520px, 1fr))", gap:"1.3rem" }}>
          {credentials.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}
              whileHover={{ y:-4, boxShadow:"var(--shadow-md)" }}
              style={{ padding:"1.8rem", borderRadius:"16px", background:"var(--surface)", border:`1.5px solid ${c.border}`, boxShadow:"var(--shadow-sm)", display:"flex", gap:"1.4rem", alignItems:"flex-start", transition:"all 0.28s" }}
            >
              {/* Badge */}
              <div style={{ flexShrink:0 }}>
                <div style={{ width:56, height:56, borderRadius:"14px", background:c.color, border:`1.5px solid ${c.border}`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"1px" }}>
                  <span style={{ fontSize:"1.4rem", lineHeight:1 }}>{c.icon}</span>
                  <span style={{ fontFamily:"'Syne', sans-serif", fontSize:"0.58rem", fontWeight:800, color:c.accent, letterSpacing:"0.05em" }}>{c.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"0.5rem", marginBottom:"0.4rem", flexWrap:"wrap" }}>
                  <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.65rem", color:c.accent, letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:600 }}>{c.tag}</span>
                  <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.64rem", color:"var(--text3)", background:"var(--bg2)", padding:"0.2rem 0.6rem", borderRadius:"6px", border:"1px solid var(--border)" }}>{c.year}</span>
                </div>
                <h3 style={{ fontFamily:"'Syne', sans-serif", fontWeight:800, fontSize:"1.02rem", color:"var(--text)", marginBottom:"0.25rem", lineHeight:1.3 }}>{c.title}</h3>
                <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.7rem", color:"var(--text3)", marginBottom:"0.75rem", letterSpacing:"0.03em" }}>{c.issuer}</div>
                <p style={{ fontSize:"0.84rem", color:"var(--text2)", lineHeight:1.78, fontWeight:300 }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.4 }}
          style={{ marginTop:"2.5rem", padding:"1.2rem 1.6rem", background:"var(--cyan-dim)", border:"1px solid var(--border)", borderRadius:"12px", display:"flex", alignItems:"center", gap:"1rem" }}
        >
          <span style={{ fontSize:"1.2rem" }}>🚀</span>
          <p style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.76rem", color:"var(--cyan)", lineHeight:1.7 }}>
            Currently pursuing additional AWS certifications (Solutions Architect, DevOps Professional) and expanding the cloud engineering credential stack.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
