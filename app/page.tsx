"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

const worlds = [
  {
    id:"tech", href:"/tech", icon:"☁️", label:"Tech World",
    sub:"Platform Engineering · Cloud · DevOps · AI",
    color:"#2563eb", glow:"rgba(37,99,235,0.35)", bg:"rgba(37,99,235,0.06)", border:"rgba(37,99,235,0.25)",
    desc:"16 production platforms. AWS, Kubernetes, Terraform, Docker, CI/CD pipelines. Cloud infrastructure built for the real world.",
  },
  {
    id:"design", href:"/design", icon:"🎨", label:"Design World",
    sub:"Photoshop · CorelDraw · Brand Identity",
    color:"#d97706", glow:"rgba(217,119,6,0.35)", bg:"rgba(217,119,6,0.06)", border:"rgba(217,119,6,0.25)",
    desc:"From curiosity to craft. Event graphics, brand identities, and visual work produced every single week.",
  },
  {
    id:"writing", href:"/writing", icon:"✍️", label:"Writing World",
    sub:"Articles · Blog · Thoughts",
    color:"#059669", glow:"rgba(5,150,105,0.35)", bg:"rgba(5,150,105,0.06)", border:"rgba(5,150,105,0.25)",
    desc:"Tech articles, career insights, and long-form writing on engineering, education, and life.",
  },
  {
    id:"ministry", href:"/ministry", icon:"✝️", label:"Ministerial World",
    sub:"House of Joy · Teaching · The Refuel Experience",
    color:"#9f1239", glow:"rgba(159,18,57,0.4)", bg:"rgba(159,18,57,0.06)", border:"rgba(159,18,57,0.28)",
    desc:"Teaching minister. Convener of The Refuel Experience. Raising believers in truth, purpose, and kingdom service.",
  },
  {
    id:"about", href:"/about", icon:"👤", label:"The Full Story",
    sub:"Who is John Ayomide Akinola?",
    color:"#7c3aed", glow:"rgba(124,58,237,0.35)", bg:"rgba(124,58,237,0.06)", border:"rgba(124,58,237,0.25)",
    desc:"Chemistry graduate. Cloud Engineer. Teacher. Designer. Writer. Pastor. The complete picture of one man.",
  },
];

const taglineWords = ["Engineer","Teacher","Designer","Writer","Pastor"];

function RotatingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i+1) % taglineWords.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span key={idx}
        initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
        exit={{ opacity:0, y:-10 }} transition={{ duration:0.35 }}
        style={{ display:"inline-block", color:"var(--cyan)", fontStyle:"italic" }}>
        {taglineWords[idx]}
      </motion.span>
    </AnimatePresence>
  );
}

export default function UniversePage() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";
  const [hovered, setHovered] = useState<string|null>(null);

  return (
    <main style={{ minHeight:"100vh", background:"var(--bg)", position:"relative", overflow:"hidden" }}>

      {/* Ambient bg */}
      <div className="grid-bg" style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }}/>
      <motion.div animate={{ scale:[1,1.1,1], opacity:[0.4,0.2,0.4] }} transition={{ duration:12, repeat:Infinity }}
        style={{ position:"fixed", top:-200, right:-200, width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%)", filter:"blur(100px)", pointerEvents:"none", zIndex:0 }}/>
      <motion.div animate={{ scale:[1,1.08,1], opacity:[0.3,0.15,0.3] }} transition={{ duration:15, repeat:Infinity, delay:4 }}
        style={{ position:"fixed", bottom:-200, left:-200, width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(159,18,57,0.1),transparent 70%)", filter:"blur(100px)", pointerEvents:"none", zIndex:0 }}/>

      {/* Nav */}
      <nav className="jaa-nav" style={{
        position:"fixed", top:0, left:0, right:0, zIndex:50, padding:"0 5%", height:68,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        background:"rgba(245,247,255,0.88)", backdropFilter:"blur(20px)",
        borderBottom:"1px solid var(--border)", transition:"background 0.3s",
      }}>
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", cursor:"pointer", padding:"4px 0" }}>
          <span style={{ pointerEvents:"none", display:"flex" }}>
            <Image src={logoSrc} alt="JAA" width={64} height={30} style={{ objectFit:"contain", height:30, width:"auto" }} priority/>
          </span>
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
          {[{href:"/tech",label:"Portfolio"},{href:"/writing",label:"Blog"},{href:"/about",label:"About"}].map(l=>(
            <Link key={l.href} href={l.href} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"var(--text3)", textDecoration:"none", letterSpacing:"0.08em", textTransform:"uppercase", transition:"color 0.2s", padding:"0.3rem 0.5rem" }}
              onMouseEnter={e=>(e.currentTarget.style.color="var(--cyan)")}
              onMouseLeave={e=>(e.currentTarget.style.color="var(--text3)")}>
              {l.label}
            </Link>
          ))}
          <ThemeToggle/>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"100px 5% 60px", position:"relative", zIndex:1 }}>

        {/* Photo + identity */}
        <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", marginBottom:"3.5rem" }}>

          {/* Photo ring */}
          <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.9, delay:0.1 }}
            style={{ position:"relative", marginBottom:"2rem" }}>
            <motion.div animate={{ rotate:360 }} transition={{ duration:30, repeat:Infinity, ease:"linear" }}
              style={{ position:"absolute", inset:-16, borderRadius:"50%", border:"1px dashed var(--border)" }}>
              <span style={{ position:"absolute", top:-4, left:"50%", transform:"translateX(-50%)", width:8, height:8, borderRadius:"50%", background:"var(--cyan)", boxShadow:"0 0 12px var(--cyan-glow)", display:"inline-block" }}/>
            </motion.div>
            <div style={{ width:160, height:160, borderRadius:"50%", overflow:"hidden", border:"3px solid var(--surface2)", boxShadow:"var(--shadow-lg), 0 0 0 8px var(--surface)" }}>
              <Image src="/john.jpg" alt="John Ayomide Akinola" width={160} height={160}
                style={{ objectFit:"cover", objectPosition:"center 18%", width:"100%", height:"100%" }} priority/>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:0.7 }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.9rem,5vw,3.6rem)", fontWeight:800, color:"var(--text)", lineHeight:1.08, letterSpacing:"-0.035em", marginBottom:"0.7rem" }}>
            John Ayomide Akinola
          </motion.h1>

          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
            style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"clamp(0.82rem,2vw,1rem)", color:"var(--text2)", marginBottom:"1rem", letterSpacing:"0.02em" }}>
            Engineer by skill.{" "}<span style={{ display:"inline-block", minWidth:90 }}><RotatingWord/></span>{" "}by calling.
          </motion.p>

          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.65 }}
            style={{ fontSize:"0.9rem", color:"var(--text3)", maxWidth:440, lineHeight:1.78, fontWeight:300, fontStyle:"italic" }}>
            There are many dimensions to this man.<br/>Choose a world to enter.
          </motion.p>
        </motion.div>

        {/* WORLD PORTALS */}
        <div className="worlds-grid" style={{ maxWidth:1100, width:"100%" }}>
          {worlds.map((w,i)=>(
            <motion.div key={w.id}
              initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:0.5, delay:0.7+i*0.1 }}
              onHoverStart={()=>setHovered(w.id)} onHoverEnd={()=>setHovered(null)}>
              <Link href={w.href} style={{ textDecoration:"none", display:"block" }}>
                <motion.div
                  whileHover={{ y:-6, boxShadow:`0 24px 70px ${w.glow}` }}
                  transition={{ duration:0.22 }}
                  style={{
                    padding:"1.8rem", borderRadius:"20px",
                    background:hovered===w.id ? w.bg : "var(--surface)",
                    border:`1.5px solid ${hovered===w.id ? w.border : "var(--border)"}`,
                    boxShadow:"var(--shadow-sm)", cursor:"pointer",
                    transition:"background 0.3s, border-color 0.3s",
                    position:"relative", overflow:"hidden",
                  }}>
                  <motion.div animate={{ opacity:hovered===w.id ? 1 : 0 }}
                    style={{ position:"absolute", top:-40, right:-40, width:160, height:160, borderRadius:"50%", background:`radial-gradient(circle,${w.glow},transparent 70%)`, filter:"blur(30px)", pointerEvents:"none" }}/>
                  <div style={{ position:"relative", zIndex:1 }}>
                    <div style={{ fontSize:"2rem", marginBottom:"0.7rem" }}>{w.icon}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.08rem", color:"var(--text)", marginBottom:"0.25rem" }}>{w.label}</div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:w.color, letterSpacing:"0.08em", marginBottom:"0.8rem", textTransform:"uppercase" }}>{w.sub}</div>
                    <p style={{ fontSize:"0.82rem", color:"var(--text2)", lineHeight:1.75, fontWeight:300 }}>{w.desc}</p>
                    <motion.div animate={{ x:hovered===w.id ? 6 : 0 }} transition={{ duration:0.2 }}
                      style={{ marginTop:"1.2rem", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:w.color, letterSpacing:"0.06em" }}>
                      Enter →
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>


      {/* ── FREE BOOK ── */}
      <section style={{ padding:"4rem 5%", background:"var(--bg2)", position:"relative", overflow:"hidden" }}>
        <motion.div animate={{ scale:[1,1.06,1], opacity:[0.3,0.15,0.3] }} transition={{ duration:10, repeat:Infinity }}
          style={{ position:"absolute", top:-100, left:-100, width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(217,119,6,0.12),transparent 70%)", filter:"blur(80px)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"auto 1fr", gap:"3.5rem", alignItems:"center", position:"relative", zIndex:1 }} className="hero-grid">

          {/* Book image */}
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
            whileHover={{ y:-8, rotate:2 }} style={{ flexShrink:0 }}>
            <div style={{ position:"relative", width:180, height:260, filter:"drop-shadow(0 24px 48px rgba(0,0,0,0.4))" }}>
              <img src="/book-stand.png" alt="From Chemistry Class to Cloud" style={{ width:180, height:260, objectFit:"cover", borderRadius:6 }}/>
            </div>
          </motion.div>

          {/* Book info */}
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.15 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.3rem 0.9rem", background:"rgba(217,119,6,0.12)", border:"1px solid rgba(217,119,6,0.3)", borderRadius:"100px", marginBottom:"1rem" }}>
              <motion.span animate={{ scale:[1,1.2,1] }} transition={{ duration:1.5, repeat:Infinity }}
                style={{ fontSize:"0.75rem" }}>🎁</motion.span>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"#d97706", letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:600 }}>FREE DOWNLOAD — Limited Time</span>
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.5rem,3.5vw,2.4rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"0.8rem" }}>
              From Chemistry Class<br/>
              <span style={{ background:"linear-gradient(135deg,#d97706,#f59e0b)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>to Cloud</span>
            </h2>
            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", color:"var(--text3)", marginBottom:"1rem", letterSpacing:"0.04em" }}>
              By John Ayomide Akinola
            </p>
            <p style={{ fontSize:"0.92rem", color:"var(--text2)", lineHeight:1.82, fontWeight:300, maxWidth:480, marginBottom:"1.8rem" }}>
              A Chemistry Education graduate&apos;s honest roadmap to becoming a Cloud Engineer. No fluff — just the real path, the real tools, and the real mindset shifts that made the transition possible. Now free for every aspiring engineer.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.8rem", alignItems:"center" }}>
              <motion.a whileHover={{ y:-2, boxShadow:"0 12px 40px rgba(217,119,6,0.4)" }}
                href="https://selar.com/7zl4237770" target="_blank" rel="noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:"0.55rem", padding:"0.9rem 2rem", background:"linear-gradient(135deg,#d97706,#f59e0b)", color:"#fff", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.92rem", textDecoration:"none", borderRadius:"10px", boxShadow:"0 4px 20px rgba(217,119,6,0.35)" }}>
                📥 Download Free
              </motion.a>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--text3)", letterSpacing:"0.06em" }}>
                ~~₦2,500~~ FREE · Instant Download
              </span>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Bottom quote */}
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4, duration:1 }}
          style={{ marginTop:"3.5rem", fontFamily:"'Syne',sans-serif", fontSize:"0.82rem", color:"var(--text3)", textAlign:"center", fontStyle:"italic" }}>
          "Whatever brought you here — welcome. There is more to discover."
        </motion.p>
      </section>
    </main>
  );
}
