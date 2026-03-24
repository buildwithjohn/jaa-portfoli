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
  { num: "8",  label: "Skill Domains" },
  { num: "2",  label: "Companies Led" },
  { num: "∞",  label: "Curiosity" },
];

const badges = [
  { text: "AWS Cloud Practitioner", dot: "var(--gold)", pos: { top: "2px",   right: "-52px" }, anim: -7 },
  { text: "⚡ K8s Expert",          dot: "var(--cyan)", pos: { bottom: "-4px", right: "-50px" }, anim: 7  },
  { text: "🎨 Photoshop Pro",        dot: "#a855f7",    pos: { bottom: "68px", left: "-56px"  }, anim: -6 },
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "110px 5% 80px", position: "relative", overflow: "hidden",
      background: "var(--bg)",
    }}>
      <div className="grid-bg" style={{ position:"absolute", inset:0, pointerEvents:"none" }} />
      <motion.div animate={{ scale:[1,1.08,1], opacity:[0.5,0.28,0.5] }} transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }}
        style={{ position:"absolute", top:"-120px", right:"-120px", width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle,var(--cyan-dim),transparent 70%)", filter:"blur(90px)", pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.1,1], opacity:[0.35,0.18,0.35] }} transition={{ duration:12, repeat:Infinity, ease:"easeInOut", delay:3 }}
        style={{ position:"absolute", bottom:"-80px", left:"-80px", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(124,111,205,0.1),transparent 70%)", filter:"blur(80px)", pointerEvents:"none" }}/>

      <div className="hero-grid" style={{ maxWidth:1200, margin:"0 auto", width:"100%", position:"relative", zIndex:1 }}>

        {/* LEFT */}
        <div>
          <motion.div {...fadeUp(0.1)} style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", marginBottom:"1.8rem", padding:"0.35rem 0.9rem 0.35rem 0.6rem", background:"var(--cyan-dim)", border:"1px solid var(--border)", borderRadius:"100px" }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.5, repeat:Infinity }}
              style={{ width:7, height:7, borderRadius:"50%", background:"var(--green)", display:"inline-block", flexShrink:0 }}/>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--cyan)", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:500 }}>
              Available for Remote Opportunities
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.22)} className="hero-name" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2.4rem,5.5vw,4.8rem)", fontWeight:800, lineHeight:1.06, letterSpacing:"-0.035em", color:"var(--text)", marginBottom:"0.6rem" }}>
            John Ayomide<br/>
            <span className="text-gradient">Akinola</span>
          </motion.h1>

          <motion.div {...fadeUp(0.35)} style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:"0.5rem", marginBottom:"1.4rem" }}>
            {["DevOps & Cloud Engineer","Instructor","Consultant","Graphics Designer"].map((t,i,arr)=>(
              <span key={t} style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.76rem", color:"var(--text2)" }}>{t}</span>
                {i < arr.length-1 && <span style={{ width:3, height:3, borderRadius:"50%", background:"var(--cyan)", display:"inline-block", opacity:0.6 }}/>}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.42)} style={{ display:"flex", flexWrap:"wrap", gap:"0.55rem", marginBottom:"1.6rem" }}>
            {[
              { icon:"🏅", label:"AWS Cloud Practitioner", color:"rgba(217,119,6,0.1)", border:"rgba(217,119,6,0.25)", text:"var(--gold)" },
              { icon:"🎓", label:"Master's in IT",         color:"rgba(37,99,235,0.08)", border:"rgba(37,99,235,0.2)",  text:"var(--cyan)" },
            ].map((c)=>(
              <div key={c.label} style={{ display:"inline-flex", alignItems:"center", gap:"0.45rem", padding:"0.38rem 0.85rem", background:c.color, border:`1px solid ${c.border}`, borderRadius:"8px" }}>
                <span style={{ fontSize:"0.9rem" }}>{c.icon}</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.67rem", color:c.text, letterSpacing:"0.06em", fontWeight:600 }}>{c.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p {...fadeUp(0.48)} style={{ fontSize:"1rem", color:"var(--text2)", maxWidth:540, lineHeight:1.85, fontWeight:300, marginBottom:"2.2rem" }}>
            I <strong style={{ color:"var(--text)", fontWeight:600 }}>build cloud infrastructure</strong>, design systems that scale, craft visual identities that stand out, and train the next generation of tech professionals — all from{" "}
            <strong style={{ color:"var(--text)", fontWeight:600 }}>Lagos, Nigeria</strong>, for the world.
          </motion.p>

          <motion.div {...fadeUp(0.56)} style={{ display:"flex", flexWrap:"wrap", gap:"0.9rem", marginBottom:"2.8rem" }}>
            <motion.a whileHover={{ y:-2 }} href="#projects" style={{ padding:"0.85rem 2rem", background:"var(--cyan)", color:"#fff", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.92rem", textDecoration:"none", borderRadius:"10px", boxShadow:"var(--shadow-cyan)", display:"inline-block" }}>
              View My Work →
            </motion.a>
            <motion.a whileHover={{ y:-2 }} href="#contact" style={{ padding:"0.85rem 2rem", border:"1.5px solid var(--border)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.92rem", textDecoration:"none", borderRadius:"10px", background:"var(--surface)", boxShadow:"var(--shadow-sm)", display:"inline-block", transition:"all 0.2s" }}>
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div {...fadeUp(0.66)} style={{ display:"flex", flexWrap:"wrap", gap:"2rem", paddingTop:"2rem", borderTop:"1.5px solid var(--border)" }}>
            {stats.map((s)=>(
              <div key={s.label}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.9rem", fontWeight:800, color:"var(--cyan)", lineHeight:1 }}>{s.num}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"var(--text3)", letterSpacing:"0.08em", textTransform:"uppercase", marginTop:"0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — hidden on mobile via CSS class */}
        <motion.div className="hero-photo-col"
          initial={{ opacity:0, scale:0.88 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.95, ease:"easeOut", delay:0.4 }}
          style={{ position:"relative", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <div style={{ position:"absolute", inset:-24, borderRadius:"50%", background:"radial-gradient(circle,var(--cyan-dim),transparent 65%)", filter:"blur(24px)" }}/>
          <motion.div animate={{ rotate:360 }} transition={{ duration:25, repeat:Infinity, ease:"linear" }}
            style={{ position:"absolute", inset:-20, borderRadius:"50%", border:"1.5px dashed var(--border)" }}>
            <span style={{ position:"absolute", top:-5, left:"50%", transform:"translateX(-50%)", width:10, height:10, borderRadius:"50%", background:"var(--cyan)", boxShadow:"0 0 12px var(--cyan-glow)", display:"inline-block" }}/>
          </motion.div>
          <div style={{ position:"absolute", inset:-6, borderRadius:"50%", border:"1px solid var(--border)" }}/>
          <div style={{ width:330, height:330, borderRadius:"50%", overflow:"hidden", position:"relative", flexShrink:0, border:"4px solid var(--surface)", boxShadow:"var(--shadow-lg), 0 0 0 8px var(--surface2)" }}>
            <Image src="/john.jpg" alt="John Ayomide Akinola" fill sizes="330px"
              style={{ objectFit:"cover", objectPosition:"center 18%" }} priority/>
          </div>
          {badges.map((b,i)=>(
            <motion.div key={b.text} animate={{ y:[0,b.anim,0] }} transition={{ duration:3.5+i*0.8, repeat:Infinity, ease:"easeInOut" }}
              style={{ position:"absolute", ...b.pos, padding:"0.5rem 0.9rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"10px", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"var(--text2)", whiteSpace:"nowrap", boxShadow:"var(--shadow-md)" }}>
              <span style={{ display:"inline-block", width:7, height:7, borderRadius:"50%", background:b.dot, marginRight:6, verticalAlign:"middle" }}/>
              {b.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
