"use client";
import { motion, Easing } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as Easing, delay },
});

const stats = [
  { num: "16+", label: "Projects Shipped" },
  { num: "5+",  label: "Years Engineering" },
  { num: "AWS", label: "Certified" },
  { num: "∞",   label: "Curiosity" },
];

const skills = [
  "Kubernetes","Terraform","Docker","AWS","CI/CD","Linux","Python","Ansible",
];

const socials = [
  { label: "YouTube", href: "https://www.youtube.com/@buildwithjaa", icon: "▶", color: "#ff0000", bg: "rgba(255,0,0,0.08)", border: "rgba(255,0,0,0.2)" },
  { label: "Instagram (Tech)", href: "https://www.instagram.com/build_with_john/", icon: "📸", color: "#e1306c", bg: "rgba(225,48,108,0.08)", border: "rgba(225,48,108,0.2)" },
  { label: "LinkedIn", href: "https://linkedin.com/in/john-ayomide-akinola", icon: "in", color: "#0077b5", bg: "rgba(0,119,181,0.08)", border: "rgba(0,119,181,0.2)" },
  { label: "GitHub", href: "https://github.com/buildwithjohn", icon: "</>", color: "var(--cyan)", bg: "var(--cyan-dim)", border: "var(--border)" },
  { label: "Facebook", href: "https://web.facebook.com/johnayomide.akinola", icon: "f", color: "#1877f2", bg: "rgba(24,119,242,0.08)", border: "rgba(24,119,242,0.2)" },
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "110px 5% 80px", position: "relative", overflow: "hidden",
      background: "var(--bg)",
    }}>
      <div className="grid-bg" style={{ position:"absolute", inset:0, pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1], opacity:[0.5,0.28,0.5] }} transition={{ duration:9, repeat:Infinity }}
        style={{ position:"absolute", top:"-120px", right:"-120px", width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,var(--cyan-dim),transparent 70%)", filter:"blur(90px)", pointerEvents:"none" }}/>

      <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", position:"relative", zIndex:1,
        display:"grid", gridTemplateColumns:"1fr auto", gap:"4rem", alignItems:"center" }}
        className="hero-grid">

        {/* LEFT */}
        <div>
          {/* Available badge */}
          <motion.div {...fadeUp(0.1)} style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", marginBottom:"1.8rem", padding:"0.35rem 0.9rem 0.35rem 0.6rem", background:"var(--cyan-dim)", border:"1px solid var(--border)", borderRadius:"100px" }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.5, repeat:Infinity }}
              style={{ width:7, height:7, borderRadius:"50%", background:"var(--green)", display:"inline-block", flexShrink:0 }}/>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--cyan)", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:500 }}>
              Available for Remote Opportunities
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.22)} style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2.4rem,5.5vw,4.8rem)", fontWeight:800, lineHeight:1.06, letterSpacing:"-0.035em", color:"var(--text)", marginBottom:"0.6rem" }}>
            John Ayomide<br/>
            <span className="text-gradient">Akinola</span>
          </motion.h1>

          <motion.div {...fadeUp(0.35)} style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:"0.5rem", marginBottom:"1.4rem" }}>
            {["Platform Engineer","Cloud Architect","DevOps Instructor","Prompt Engineer"].map((t,i,arr)=>(
              <span key={t} style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.76rem", color:"var(--text2)" }}>{t}</span>
                {i<arr.length-1&&<span style={{ width:3, height:3, borderRadius:"50%", background:"var(--cyan)", display:"inline-block", opacity:0.6 }}/>}
              </span>
            ))}
          </motion.div>

          <motion.p {...fadeUp(0.45)} style={{ fontSize:"1rem", color:"var(--text2)", maxWidth:540, lineHeight:1.85, fontWeight:300, marginBottom:"1.8rem" }}>
            I <strong style={{ color:"var(--text)", fontWeight:600 }}>architect cloud infrastructure</strong>, build CI/CD pipelines, orchestrate Kubernetes clusters, and train engineers who build production systems — sharing everything on{" "}
            <a href="https://www.youtube.com/@buildwithjaa" target="_blank" rel="noreferrer" style={{ color:"var(--cyan)", fontWeight:600, textDecoration:"none" }}>Build With JAA</a>.
          </motion.p>

          {/* Skill pills */}
          <motion.div {...fadeUp(0.52)} style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"1.8rem" }}>
            {skills.map(s=>(
              <span key={s} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", padding:"0.28rem 0.75rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"6px", color:"var(--text2)", letterSpacing:"0.05em" }}>{s}</span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.58)} style={{ display:"flex", flexWrap:"wrap", gap:"0.9rem", marginBottom:"2rem" }}>
            <motion.a whileHover={{ y:-2 }} href="#projects"
              style={{ padding:"0.85rem 2rem", background:"var(--cyan)", color:"#fff", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.92rem", textDecoration:"none", borderRadius:"10px", boxShadow:"var(--shadow-cyan)", display:"inline-block" }}>
              View My Work →
            </motion.a>
            <motion.a whileHover={{ y:-2 }} href="https://www.youtube.com/@buildwithjaa" target="_blank" rel="noreferrer"
              style={{ padding:"0.85rem 2rem", background:"rgba(255,0,0,0.08)", border:"1.5px solid rgba(255,0,0,0.25)", color:"#ff4444", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.92rem", textDecoration:"none", borderRadius:"10px", display:"inline-block", transition:"all 0.2s" }}>
              ▶ Build With JAA
            </motion.a>
            <motion.a whileHover={{ y:-2 }} href="#contact"
              style={{ padding:"0.85rem 2rem", border:"1.5px solid var(--border)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.92rem", textDecoration:"none", borderRadius:"10px", background:"var(--surface)", display:"inline-block", transition:"all 0.2s" }}>
              Hire Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.65)} style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem", marginBottom:"2.4rem" }}>
            {socials.map(s=>(
              <motion.a key={s.label} whileHover={{ y:-2, boxShadow:"var(--shadow-md)" }} href={s.href} target="_blank" rel="noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", padding:"0.38rem 0.85rem", background:s.bg, border:`1px solid ${s.border}`, borderRadius:"8px", textDecoration:"none", transition:"all 0.2s" }}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", fontWeight:700, color:s.color }}>{s.icon}</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:"var(--text2)", letterSpacing:"0.04em" }}>{s.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.72)} style={{ display:"flex", flexWrap:"wrap", gap:"2rem", paddingTop:"2rem", borderTop:"1.5px solid var(--border)" }}>
            {stats.map(s=>(
              <div key={s.label}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.9rem", fontWeight:800, color:"var(--cyan)", lineHeight:1 }}>{s.num}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"var(--text3)", letterSpacing:"0.08em", textTransform:"uppercase", marginTop:"0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo, hidden on mobile */}
        <motion.div className="hero-photo-col"
          initial={{ opacity:0, scale:0.88 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.95, ease:"easeOut", delay:0.4 }}
          style={{ position:"relative", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <div style={{ position:"absolute", inset:-24, borderRadius:"50%", background:"radial-gradient(circle,var(--cyan-dim),transparent 65%)", filter:"blur(24px)" }}/>
          <motion.div animate={{ rotate:360 }} transition={{ duration:25, repeat:Infinity, ease:"linear" }}
            style={{ position:"absolute", inset:-20, borderRadius:"50%", border:"1.5px dashed var(--border)" }}>
            <span style={{ position:"absolute", top:-5, left:"50%", transform:"translateX(-50%)", width:10, height:10, borderRadius:"50%", background:"var(--cyan)", boxShadow:"0 0 12px var(--cyan-glow)", display:"inline-block" }}/>
          </motion.div>
          <div style={{ width:330, height:330, borderRadius:"50%", overflow:"hidden", position:"relative", flexShrink:0, border:"4px solid var(--surface)", boxShadow:"var(--shadow-lg), 0 0 0 8px var(--surface2)" }}>
            <Image src="/john.jpg" alt="John Ayomide Akinola" fill sizes="330px"
              style={{ objectFit:"cover", objectPosition:"center 18%" }} priority/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
