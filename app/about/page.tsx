"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const timeline = [
  { year: "2016–2021", icon: "📚", color: "#7c3aed", title: "Undergraduate", desc: "Studied Chemistry Education at university. Earned his B.Sc and went on to obtain TRCN certification — a qualified, registered teacher of chemistry." },
  { year: "2018", icon: "✝️", color: "#9f1239", title: "Ministry Calling", desc: "Began serving as a teaching minister. A mandate emerged: raise believers rooted in truth, mature in character, and effective in kingdom service. House of Joy Ministries was born." },
  { year: "2019", icon: "🎨", color: "#d97706", title: "Designer by Curiosity", desc: "Stumbled onto CorelDraw tutorials on YouTube out of boredom. That curiosity never stopped — it grew into a full design practice spanning brand identity, event graphics, and print materials." },
  { year: "2023", icon: "💻", color: "#059669", title: "Building — Web & Infrastructure", desc: "Began building production-grade platforms: web applications in React, Next.js, and Vue 3, combined with backend systems and cloud infrastructure for real clients across Nigeria and internationally." },
  { year: "2024–2026", icon: "🎓", color: "#2563eb", title: "M.Sc in Information Technology", desc: "Enrolled at ESCT University pursuing a Master's in IT. Research focus: AI-Driven Multi-Cloud Networking — the AMON framework. Thesis in progress." },
  { year: "2025", icon: "🏫", color: "#7c3aed", title: "Tech Instructor", desc: "Became a tech instructor — teaching DevOps, Cloud Engineering, Linux, Cybersecurity, and Data Analytics. The teacher never left; he just changed classrooms from chemistry to cloud." },
  { year: "2026", icon: "🚀", color: "#06b6d4", title: "Build With JAA — YouTube & Portfolio", desc: "Launched johnakinola.com and the Build With JAA YouTube channel. Teaching what he builds. Building what he teaches. Sharing everything openly." },
];

const dimensions = [
  {
    icon: "☁️", world: "Tech World", title: "Platform Engineer",
    color: "#2563eb", href: "/tech",
    desc: "AWS · Kubernetes · Terraform · Docker · CI/CD · 16 shipped platforms",
  },
  {
    icon: "🎨", world: "Design World", title: "Graphic Designer",
    color: "#d97706", href: "/design",
    desc: "Photoshop · CorelDraw · Brand Identity · Print · Social Media",
  },
  {
    icon: "✍️", world: "Writing World", title: "Writer & Blogger",
    color: "#059669", href: "/writing",
    desc: "Tech articles · Career insights · Engineering deep-dives",
  },
  {
    icon: "✝️", world: "Ministerial World", title: "Teaching Minister",
    color: "#9f1239", href: "/ministry",
    desc: "House of Joy Ministries · The Refuel Experience · Campus Discipleship Network",
  },
  {
    icon: "🎙️", world: "YouTube · Build With JAA", title: "Content Creator",
    color: "#ff0000", href: "https://www.youtube.com/@buildwithjaa",
    desc: "Platform engineering, cloud engineering, DevOps, and career content",
  },
  {
    icon: "🏫", world: "Tech Instructor", title: "Educator",
    color: "#7c3aed", href: "https://www.youtube.com/@buildwithjaa",
    desc: "Teaching DevOps · Cloud · Linux · Cybersecurity · Data Analytics",
  },
];

export default function AboutPage() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* Nav */}
      <nav className="jaa-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "0 5%", height: 68, display: "flex", alignItems: "center",
        justifyContent: "space-between", background: "rgba(245,247,255,0.92)",
        backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", cursor: "pointer", padding: "4px 0" }}>
          <span style={{ pointerEvents: "none", display: "flex" }}>
            <Image src={logoSrc} alt="JAA" width={64} height={30} style={{ objectFit: "contain", height: 30, width: "auto" }} priority />
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← All Worlds</Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "120px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <motion.div animate={{ scale:[1,1.08,1], opacity:[0.3,0.15,0.3] }} transition={{ duration:12, repeat:Infinity }}
          style={{ position:"absolute", top:-150, right:-150, width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(124,58,237,0.1),transparent 70%)", filter:"blur(100px)", pointerEvents:"none" }}/>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }} className="hero-grid">
            <div>
              <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
                style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"1rem" }}>
                <span style={{ width:24, height:2, background:"var(--cyan)", display:"inline-block", borderRadius:2 }}/>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--cyan)", letterSpacing:"0.18em", textTransform:"uppercase" }}>The Full Story</span>
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.8 }}
                style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2.2rem,5vw,4rem)", fontWeight:800, color:"var(--text)", lineHeight:1.06, letterSpacing:"-0.035em", marginBottom:"1rem" }}>
                Many dimensions.<br/><span className="text-gradient">One man.</span>
              </motion.h1>
              <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }}
                style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.05rem", color:"var(--text2)", lineHeight:1.85, fontWeight:300, marginBottom:"1.5rem", maxWidth:580, fontStyle:"italic" }}>
                "Engineer by skill. Teacher by calling. Designer by curiosity. Writer by conviction. Pastor by grace."
              </motion.p>
              <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }}
                style={{ fontSize:"0.95rem", color:"var(--text2)", lineHeight:1.85, fontWeight:300, maxWidth:580, marginBottom:"2rem" }}>
                John Ayomide Akinola is a Platform Engineer, Tech Instructor, Graphics Designer, Author, and Teaching Minister. What makes him unusual is not any one of these things — it is the combination of all of them, lived simultaneously, with excellence in each.
              </motion.p>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }}
                style={{ display:"flex", flexWrap:"wrap", gap:"1.5rem" }}>
                {[{ num:"16+", label:"Projects Shipped" },{ num:"6", label:"Dimensions" },{ num:"3", label:"Continents Served" },{ num:"2026", label:"M.Sc in Progress" }].map(s=>(
                  <div key={s.label}>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.8rem", color:"var(--cyan)", lineHeight:1 }}>{s.num}</div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"var(--text3)", letterSpacing:"0.06em", marginTop:"0.2rem" }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div className="hero-photo-col" initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.9, delay:0.3 }}
              style={{ position:"relative", display:"flex", justifyContent:"center" }}>
              <motion.div animate={{ rotate:360 }} transition={{ duration:30, repeat:Infinity, ease:"linear" }}
                style={{ position:"absolute", inset:-18, borderRadius:"50%", border:"1px dashed var(--border)" }}>
                <span style={{ position:"absolute", top:-4, left:"50%", transform:"translateX(-50%)", width:8, height:8, borderRadius:"50%", background:"var(--cyan)", boxShadow:"0 0 12px var(--cyan-glow)", display:"inline-block" }}/>
              </motion.div>
              <div style={{ width:280, height:280, borderRadius:"50%", overflow:"hidden", border:"3px solid var(--surface2)", boxShadow:"var(--shadow-lg), 0 0 0 8px var(--surface)" }}>
                <Image src="/john.jpg" alt="John Ayomide Akinola" width={280} height={280} style={{ objectFit:"cover", objectPosition:"center 18%", width:"100%", height:"100%" }}/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIX DIMENSIONS */}
      <section style={{ padding:"5rem 5%", background:"var(--bg2)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <motion.div {...fadeUp(0)} style={{ marginBottom:"3rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"0.7rem" }}>
              <span style={{ width:24, height:2, background:"var(--cyan)", display:"inline-block", borderRadius:2 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--cyan)", letterSpacing:"0.18em", textTransform:"uppercase" }}>Six Dimensions</span>
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em" }}>
              Which world do you want<br/>to explore?
            </h2>
          </motion.div>
          <div className="skills-grid">
            {dimensions.map((d,i)=>(
              <motion.div key={d.title}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.45, delay:i*0.07 }}>
                <Link href={d.href} target={d.href.startsWith("http")?"_blank":undefined} style={{ textDecoration:"none", display:"block" }}>
                  <motion.div whileHover={{ y:-5, boxShadow:`0 20px 60px ${d.color}22` }}
                    style={{ padding:"1.6rem", borderRadius:"16px", background:"var(--surface)", border:"1.5px solid var(--border)", boxShadow:"var(--shadow-sm)", transition:"all 0.28s", cursor:"pointer" }}>
                    <div style={{ fontSize:"2rem", marginBottom:"0.7rem" }}>{d.icon}</div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:d.color, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.3rem" }}>{d.world}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1rem", color:"var(--text)", marginBottom:"0.5rem" }}>{d.title}</div>
                    <div style={{ fontSize:"0.8rem", color:"var(--text2)", lineHeight:1.7, fontWeight:300 }}>{d.desc}</div>
                    <div style={{ marginTop:"1rem", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:d.color }}>Explore →</div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding:"5rem 5%", background:"var(--bg)" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <motion.div {...fadeUp(0)} style={{ marginBottom:"3.5rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"0.7rem" }}>
              <span style={{ width:24, height:2, background:"var(--cyan)", display:"inline-block", borderRadius:2 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--cyan)", letterSpacing:"0.18em", textTransform:"uppercase" }}>Life Timeline</span>
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em" }}>
              How it all unfolded.
            </h2>
          </motion.div>
          <div style={{ position:"relative" }}>
            <div style={{ position:"absolute", left:27, top:0, bottom:0, width:2, background:"linear-gradient(to bottom,var(--cyan),transparent)", opacity:0.3 }}/>
            <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
              {timeline.map((t,i)=>(
                <motion.div key={t.year}
                  initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.07 }}
                  style={{ display:"flex", gap:"1.5rem", alignItems:"flex-start" }}>
                  <div style={{ flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center", gap:"0.35rem" }}>
                    <div style={{ width:56, height:56, borderRadius:"14px", background:`${t.color}15`, border:`1.5px solid ${t.color}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.5rem", position:"relative", zIndex:1 }}>{t.icon}</div>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:t.color, fontWeight:700, letterSpacing:"0.04em", textAlign:"center", lineHeight:1.3 }}>{t.year}</span>
                  </div>
                  <div style={{ flex:1, padding:"1.3rem 1.5rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"14px", boxShadow:"var(--shadow-sm)" }}>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1rem", color:"var(--text)", marginBottom:"0.5rem" }}>{t.title}</h3>
                    <p style={{ fontSize:"0.87rem", color:"var(--text2)", lineHeight:1.8, fontWeight:300 }}>{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL */}
      <section style={{ padding:"5rem 5%", background:"var(--bg2)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"start" }} className="about-grid">
            <motion.div {...fadeUp(0)}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"0.7rem" }}>
                <span style={{ width:24, height:2, background:"var(--cyan)", display:"inline-block", borderRadius:2 }}/>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--cyan)", letterSpacing:"0.18em", textTransform:"uppercase" }}>Personal</span>
              </div>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"1.5rem" }}>Beyond the work.</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {[
                  { label:"Married to", value:"Omotola — a Data Analyst. His anchor, his partner, his person." },
                  { label:"Faith", value:"Personal faith in Jesus Christ is not peripheral to his life — it is the foundation of everything." },
                  { label:"Pursuing", value:"M.Sc in Information Technology at ESCT University (2024–2026). Research: AI-Driven Multi-Cloud Networking." },
                  { label:"Certified", value:"AWS Certified Cloud Practitioner · TRCN Registered Teacher · B.Sc Chemistry Education." },
                  { label:"YouTube", value:"Build With JAA — teaching platform engineering, cloud, and DevOps." },
                ].map(item=>(
                  <div key={item.label} style={{ padding:"1rem 1.2rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"12px", boxShadow:"var(--shadow-sm)" }}>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:"var(--cyan)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.3rem" }}>{item.label}</div>
                    <div style={{ fontSize:"0.88rem", color:"var(--text2)", lineHeight:1.7, fontWeight:300 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"0.7rem" }}>
                <span style={{ width:24, height:2, background:"var(--cyan)", display:"inline-block", borderRadius:2 }}/>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--cyan)", letterSpacing:"0.18em", textTransform:"uppercase" }}>The Philosophy</span>
              </div>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"1.5rem" }}>What drives everything.</h2>
              {[
                { icon:"🔧", title:"Build things that work", desc:"Not demos. Not prototypes. Production-grade systems that real people rely on." },
                { icon:"🎓", title:"Teach what you know", desc:"The best teachers are still practitioners. Theory without practice is noise." },
                { icon:"✝️", title:"Faith as foundation", desc:"Every dimension of life — engineering, ministry, design, family — is held together by faith in Jesus Christ." },
                { icon:"🌍", title:"Africa to the world", desc:"Built without borders. The geographical location is a starting point, never a ceiling." },
              ].map((p,i)=>(
                <motion.div key={p.title} initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.1 }}
                  style={{ display:"flex", gap:"1rem", alignItems:"flex-start", padding:"1.2rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"12px", marginBottom:"0.9rem", boxShadow:"var(--shadow-sm)" }}>
                  <span style={{ fontSize:"1.4rem", flexShrink:0 }}>{p.icon}</span>
                  <div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9rem", color:"var(--text)", marginBottom:"0.3rem" }}>{p.title}</div>
                    <div style={{ fontSize:"0.82rem", color:"var(--text2)", lineHeight:1.7, fontWeight:300 }}>{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ padding:"5rem 5%", background:"var(--bg)" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <motion.div {...fadeUp(0)}>
            <p style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.1rem,2.5vw,1.4rem)", color:"var(--text)", lineHeight:1.85, fontWeight:600, fontStyle:"italic", marginBottom:"2rem" }}>
              "Whatever brought you here — welcome. There is more to discover."
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.8rem" }}>
              <Link href="/tech" style={{ padding:"0.8rem 1.8rem", background:"var(--cyan)", color:"#fff", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9rem", textDecoration:"none", borderRadius:"10px", boxShadow:"var(--shadow-cyan)" }}>Explore Tech World</Link>
              <Link href="/ministry" style={{ padding:"0.8rem 1.8rem", background:"rgba(159,18,57,0.1)", color:"#9f1239", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9rem", textDecoration:"none", borderRadius:"10px", border:"1.5px solid rgba(159,18,57,0.3)" }}>Ministerial World</Link>
              <Link href="/" style={{ padding:"0.8rem 1.8rem", background:"var(--surface)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.9rem", textDecoration:"none", borderRadius:"10px", border:"1.5px solid var(--border)" }}>← All Worlds</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer style={{ padding:"2rem 5%", background:"var(--bg2)", borderTop:"1px solid var(--border)", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
        <Link href="/" style={{ textDecoration:"none" }}><Image src={logoSrc} alt="JAA" width={48} height={22} style={{ objectFit:"contain", height:22, width:"auto", opacity:0.7 }}/></Link>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--text3)" }}>© 2026 · John Ayomide Akinola</span>
        <Link href="/" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--text3)", textDecoration:"none" }}>← All Worlds</Link>
      </footer>
    </main>
  );
}
