"use client";
import { motion } from "framer-motion";

/* ══════════════════════════════════════════════════════
   SVG DESIGN MOCKUPS — each looks like real design work
══════════════════════════════════════════════════════ */

/* 1. Event Flyer — large card */
function EventFlyerSVG() {
  return (
    <svg viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", position:"absolute", inset:0 }}>
      {/* Background */}
      <rect width="520" height="220" fill="#0a0614"/>
      {/* Gradient orb top-left */}
      <radialGradient id="orb1" cx="20%" cy="20%" r="50%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="#0a0614" stopOpacity="0"/>
      </radialGradient>
      <rect width="520" height="220" fill="url(#orb1)"/>
      {/* Gradient orb bottom-right */}
      <radialGradient id="orb2" cx="80%" cy="80%" r="50%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#0a0614" stopOpacity="0"/>
      </radialGradient>
      <rect width="520" height="220" fill="url(#orb2)"/>
      {/* Grid lines */}
      {[0,1,2,3,4,5,6,7,8,9].map(i=>(
        <line key={`v${i}`} x1={i*58} y1="0" x2={i*58} y2="220" stroke="#ffffff" strokeWidth="0.3" opacity="0.06"/>
      ))}
      {[0,1,2,3,4].map(i=>(
        <line key={`h${i}`} x1="0" y1={i*55} x2="520" y2={i*55} stroke="#ffffff" strokeWidth="0.3" opacity="0.06"/>
      ))}
      {/* Diamond shapes */}
      <motion.polygon points="260,18 278,36 260,54 242,36"
        fill="none" stroke="#a855f7" strokeWidth="1.2"
        animate={{ opacity:[0.4,1,0.4], scale:[1,1.08,1] }}
        transition={{ duration:3, repeat:Infinity }} style={{ transformOrigin:"260px 36px" }}/>
      <motion.polygon points="260,22 272,34 260,46 248,34"
        fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeWidth="0.8"
        animate={{ rotate:[0,45,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
        style={{ transformOrigin:"260px 34px" }}/>
      {/* Event name */}
      <text x="260" y="108" textAnchor="middle" fill="white"
        style={{ fontFamily:"'Syne',sans-serif", fontSize:38, fontWeight:800, letterSpacing:-1 }}>
        THE REFUEL
      </text>
      <text x="260" y="138" textAnchor="middle" fill="white"
        style={{ fontFamily:"'Syne',sans-serif", fontSize:28, fontWeight:800, letterSpacing:6 }}>
        EXPERIENCE
      </text>
      {/* Horizontal rule with stars */}
      <line x1="80" y1="152" x2="200" y2="152" stroke="#a855f7" strokeWidth="1" opacity="0.7"/>
      <text x="260" y="157" textAnchor="middle" fill="#a855f7" fontSize="12">✦</text>
      <line x1="320" y1="152" x2="440" y2="152" stroke="#a855f7" strokeWidth="1" opacity="0.7"/>
      {/* Date / venue line */}
      <text x="260" y="175" textAnchor="middle" fill="#94a3b8"
        style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:3 }}>
        LAGOS · NIGERIA · 2025
      </text>
      {/* Bottom tag */}
      <rect x="205" y="190" width="110" height="20" rx="10"
        fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="0.8"/>
      <text x="260" y="204" textAnchor="middle" fill="#a855f7"
        style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:2 }}>
        REGISTER NOW
      </text>
      {/* Decorative circles */}
      <motion.circle cx="40" cy="190" r="22" fill="none" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4"
        animate={{ scale:[1,1.2,1] }} transition={{ duration:3, repeat:Infinity }}
        style={{ transformOrigin:"40px 190px" }}/>
      <circle cx="40" cy="190" r="12" fill="rgba(6,182,212,0.12)" stroke="#06b6d4" strokeWidth="0.8" opacity="0.5"/>
      <motion.circle cx="480" cy="40" r="28" fill="none" stroke="#7c3aed" strokeWidth="0.8" opacity="0.3"
        animate={{ scale:[1,1.15,1] }} transition={{ duration:4, repeat:Infinity, delay:1 }}
        style={{ transformOrigin:"480px 40px" }}/>
    </svg>
  );
}

/* 2. Brand Identity card */
function BrandIdentitySVG() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", position:"absolute", inset:0 }}>
      <rect width="240" height="180" fill="#0f0a1e"/>
      {/* Brand mark — stylised S for Swelerion */}
      <motion.g animate={{ rotate:[0,3,-3,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
        style={{ transformOrigin:"120px 70px" }}>
        {/* Outer hexagon */}
        <polygon points="120,28 148,44 148,76 120,92 92,76 92,44"
          fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth="1.5"/>
        {/* Inner hexagon */}
        <polygon points="120,40 138,50 138,70 120,80 102,70 102,50"
          fill="rgba(99,102,241,0.2)" stroke="#6366f1" strokeWidth="1"/>
        {/* S letterform */}
        <path d="M111 54 Q111 48 120 48 Q130 48 130 55 Q130 62 120 64 Q110 66 110 73 Q110 80 120 80 Q130 80 130 74"
          stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </motion.g>
      {/* Brand name */}
      <text x="120" y="112" textAnchor="middle" fill="white"
        style={{ fontFamily:"'Syne',sans-serif", fontSize:16, fontWeight:800, letterSpacing:4 }}>
        SWELERION
      </text>
      <text x="120" y="126" textAnchor="middle" fill="#6366f1"
        style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:7, letterSpacing:5 }}>
        GLOBAL · CLOUD · TECH
      </text>
      {/* Color palette */}
      <text x="28" y="150" fill="#94a3b8" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:7 }}>PALETTE</text>
      {["#6366f1","#8b5cf6","#06b6d4","#f59e0b","#1e293b"].map((c,i)=>(
        <motion.rect key={c} x={28+i*38} y="156" width="32" height="14" rx="4" fill={c}
          animate={{ opacity:[0.7,1,0.7] }} transition={{ duration:2, repeat:Infinity, delay:i*0.3 }}/>
      ))}
      {/* Typography specimen */}
      <line x1="28" y1="145" x2="212" y2="145" stroke="#1e293b" strokeWidth="1"/>
    </svg>
  );
}

/* 3. Social Media Post */
function SocialMediaSVG() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", position:"absolute", inset:0 }}>
      {/* Phone frame */}
      <rect width="240" height="180" fill="#050a12"/>
      {/* Instagram-style post frame */}
      <rect x="45" y="10" width="150" height="160" rx="16" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5"/>
      {/* Story bar */}
      <rect x="52" y="17" width="136" height="3" rx="1.5" fill="#334155"/>
      <motion.rect x="52" y="17" width="60" height="3" rx="1.5" fill="#ec4899"
        animate={{ width:[0,136,0] }} transition={{ duration:5, repeat:Infinity, ease:"linear" }}/>
      {/* Profile row */}
      <circle cx="64" cy="32" r="7" fill="rgba(236,72,153,0.3)" stroke="#ec4899" strokeWidth="1"/>
      <text x="64" y="36" textAnchor="middle" fill="white" fontSize="8">J</text>
      <text x="76" y="34" fill="white" style={{ fontFamily:"'Syne',sans-serif", fontSize:8, fontWeight:700 }}>johnprexy</text>
      <text x="76" y="43" fill="#64748b" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:6 }}>Lagos, Nigeria</text>
      {/* Post graphic area */}
      <rect x="52" y="51" width="136" height="82" fill="#0d1b2e"/>
      {/* Gradient bg in post */}
      <defs>
        <linearGradient id="postGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect x="52" y="51" width="136" height="82" fill="url(#postGrad)" opacity="0.25"/>
      {/* Post text content */}
      <text x="120" y="82" textAnchor="middle" fill="white"
        style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:800 }}>CLOUD</text>
      <text x="120" y="98" textAnchor="middle" fill="white"
        style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:800 }}>ENGINEER</text>
      <text x="120" y="114" textAnchor="middle" fill="#06b6d4"
        style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:7, letterSpacing:3 }}>
        BLOOMY TECHNOLOGIES
      </text>
      {/* Post bottom — likes/comments */}
      <text x="57" y="144" fill="white" fontSize="11">❤️</text>
      <text x="70" y="145" fill="#94a3b8" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:7 }}>2.4k</text>
      <text x="85" y="144" fill="white" fontSize="10">💬</text>
      <text x="97" y="145" fill="#94a3b8" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:7 }}>138</text>
      <motion.text x="162" y="145" fill="#ec4899" fontSize="11"
        animate={{ scale:[1,1.3,1] }} transition={{ duration:1.5, repeat:Infinity }}
        style={{ transformOrigin:"167px 140px" }}>🔖</motion.text>
      {/* Caption */}
      <text x="57" y="158" fill="#94a3b8" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:6 }}>
        Designed in Photoshop ✦
      </text>
    </svg>
  );
}

/* 4. Print Design — Poster mockup */
function PrintDesignSVG() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", position:"absolute", inset:0 }}>
      <rect width="240" height="180" fill="#0c0a08"/>
      {/* Paper shadow */}
      <rect x="58" y="16" width="130" height="155" rx="4" fill="#0a0908" opacity="0.6"/>
      {/* Paper */}
      <motion.rect x="54" y="12" width="130" height="155" rx="4" fill="#fef9f0"
        animate={{ rotate:[-0.5,0.5,-0.5] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
        style={{ transformOrigin:"119px 89px" }}/>
      {/* Poster content on paper */}
      <motion.g animate={{ rotate:[-0.5,0.5,-0.5] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
        style={{ transformOrigin:"119px 89px" }}>
        {/* Top color band */}
        <rect x="54" y="12" width="130" height="38" rx="4" fill="#d97706"/>
        <rect x="54" y="36" width="130" height="14" fill="#d97706"/>
        {/* Title area */}
        <text x="119" y="34" textAnchor="middle" fill="white"
          style={{ fontFamily:"'Syne',sans-serif", fontSize:11, fontWeight:800, letterSpacing:2 }}>
          TECH SUMMIT
        </text>
        <text x="119" y="46" textAnchor="middle" fill="rgba(255,255,255,0.8)"
          style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:6, letterSpacing:3 }}>
          LAGOS 2025
        </text>
        {/* Body content */}
        {[0,1,2].map(i=>(
          <rect key={i} x="66" y={62+i*14} width={[90,70,80][i]} height="5" rx="2" fill="#d97706" opacity="0.25"/>
        ))}
        {/* Big date */}
        <text x="119" y="118" textAnchor="middle" fill="#1e293b"
          style={{ fontFamily:"'Syne',sans-serif", fontSize:26, fontWeight:800 }}>
          OCT 25
        </text>
        <line x1="74" y1="124" x2="164" y2="124" stroke="#d97706" strokeWidth="1.5"/>
        {/* Venue */}
        <text x="119" y="135" textAnchor="middle" fill="#64748b"
          style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:6.5, letterSpacing:1 }}>
          FEDERAL PALACE HOTEL
        </text>
        {/* Bottom bar */}
        <rect x="54" y="152" width="130" height="15" fill="#1e293b"/>
        <text x="119" y="163" textAnchor="middle" fill="#d97706"
          style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:6, letterSpacing:2 }}>
          REGISTER · NETWORK · GROW
        </text>
      </motion.g>
    </svg>
  );
}

/* 5. Bespoke Creative — Abstract composition */
function BespokeSVG() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", position:"absolute", inset:0 }}>
      <rect width="240" height="180" fill="#020818"/>
      {/* Rotating rings */}
      {[60,45,30,18].map((r,i)=>(
        <motion.circle key={r} cx="120" cy="90" r={r}
          fill="none"
          stroke={["#2563eb","#7c3aed","#ec4899","#06b6d4"][i]}
          strokeWidth={[1.5,1.2,1,0.8][i]}
          strokeDasharray={i%2===0 ? "4 3" : "none"}
          opacity={[0.6,0.5,0.6,0.7][i]}
          animate={{ rotate: i%2===0 ? 360 : -360 }}
          transition={{ duration:[12,9,7,5][i], repeat:Infinity, ease:"linear" }}
          style={{ transformOrigin:"120px 90px" }}/>
      ))}
      {/* Centre core */}
      <motion.circle cx="120" cy="90" r="10" fill="rgba(37,99,235,0.3)" stroke="#2563eb" strokeWidth="1.5"
        animate={{ scale:[1,1.2,1] }} transition={{ duration:2, repeat:Infinity }}
        style={{ transformOrigin:"120px 90px" }}/>
      <circle cx="120" cy="90" r="5" fill="#2563eb"/>
      {/* Floating elements */}
      {[
        {x:42,y:35,shape:"rect",c:"#ec4899",d:1.0},
        {x:188,y:42,shape:"tri",c:"#f59e0b",d:0.7},
        {x:35,y:140,shape:"tri",c:"#06b6d4",d:1.4},
        {x:192,y:138,shape:"rect",c:"#7c3aed",d:0.5},
      ].map((el,i)=>(
        <motion.g key={i}
          animate={{ y:[0,-8,0], rotate:[0,10,-10,0] }}
          transition={{ duration:3+el.d, repeat:Infinity, ease:"easeInOut", delay:el.d }}
          style={{ transformOrigin:`${el.x}px ${el.y}px` }}>
          {el.shape==="rect"
            ? <rect x={el.x-8} y={el.y-8} width="16" height="16" rx="3" fill={`${el.c}22`} stroke={el.c} strokeWidth="1.2"/>
            : <polygon points={`${el.x},${el.y-10} ${el.x+9},${el.y+6} ${el.x-9},${el.y+6}`} fill={`${el.c}22`} stroke={el.c} strokeWidth="1.2"/>}
        </motion.g>
      ))}
      {/* Scan line */}
      <motion.line x1="0" y1="90" x2="240" y2="90"
        stroke="#2563eb" strokeWidth="0.5" opacity="0.2"
        animate={{ y:[-80,80,-80] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}/>
      {/* Bottom label */}
      <text x="120" y="170" textAnchor="middle" fill="#334155"
        style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:7, letterSpacing:3 }}>
        BESPOKE · CREATIVE · DESIGN
      </text>
    </svg>
  );
}

const designCards = [
  {
    id: "event",
    title: "Event Graphics & Conference Designs",
    type: "Event · Print · Digital",
    large: true,
    Visual: EventFlyerSVG,
  },
  {
    id: "brand",
    title: "Brand Identity & Logo Design",
    type: "Branding · Identity",
    large: false,
    Visual: BrandIdentitySVG,
  },
  {
    id: "social",
    title: "Social Media Graphics & Creatives",
    type: "Social · Digital",
    large: false,
    Visual: SocialMediaSVG,
  },
  {
    id: "print",
    title: "Print Design Materials",
    type: "Print · Posters · Flyers",
    large: false,
    Visual: PrintDesignSVG,
  },
  {
    id: "bespoke",
    title: "Bespoke & Custom Graphics",
    type: "Creative · Custom",
    large: false,
    Visual: BespokeSVG,
  },
];

export default function Design() {
  return (
    <section id="design" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>

        {/* Header */}
        <div className="design-header">
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"0.8rem" }}>
              <span style={{ width:20, height:2, background:"var(--cyan)", display:"inline-block", borderRadius:2 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"var(--cyan)", letterSpacing:"0.15em", textTransform:"uppercase" }}>
                Design Portfolio
              </span>
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.9rem,3.8vw,2.9rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em" }}>
              The visual side<br/>of John.
            </h2>
          </div>
          <motion.div className="design-badge"
            initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", color:"var(--cyan)", border:"1px solid var(--border)", background:"var(--cyan-dim)", borderRadius:"6px", padding:"0.5rem 0.9rem", maxWidth:"100%", wordBreak:"break-word", lineHeight:1.5 }}>
            ✦ Available for design projects — let&apos;s create something great
          </motion.div>
        </div>

        <p style={{ fontSize:"0.95rem", color:"var(--text2)", fontWeight:300, marginBottom:"2.5rem" }}>
          Week in, week out — event flyers, brand identities, social posts, and print materials crafted in Photoshop &amp; CorelDraw.
        </p>

        {/* Cards grid */}
        <div className="design-grid">
          {designCards.map((d, i) => (
            <motion.div key={d.id}
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:i*0.1 }}
              whileHover={{ y:-5, boxShadow:"0 20px 60px rgba(0,0,0,0.35)" }}
              className={d.large ? "design-large" : ""}
              style={{
                aspectRatio: d.large ? undefined : "4/3",
                position:"relative", overflow:"hidden",
                borderRadius:"16px",
                border:"1px solid var(--border)",
                cursor:"pointer",
                transition:"all 0.3s",
                boxShadow:"var(--shadow-md)",
              }}
            >
              {/* The animated SVG illustration */}
              <d.Visual />

              {/* Hover overlay with title */}
              <motion.div
                initial={{ opacity:0 }}
                whileHover={{ opacity:1 }}
                transition={{ duration:0.22 }}
                style={{
                  position:"absolute", inset:0,
                  background:"linear-gradient(to top, rgba(5,10,18,0.96) 0%, rgba(5,10,18,0.5) 55%, transparent 100%)",
                  display:"flex", flexDirection:"column",
                  justifyContent:"flex-end", padding:"1.4rem",
                }}
              >
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.95rem", color:"white", marginBottom:"0.3rem" }}>
                  {d.title}
                </div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"var(--cyan)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
                  {d.type}
                </div>
              </motion.div>

              {/* Always-visible bottom label strip */}
              <div style={{
                position:"absolute", bottom:0, left:0, right:0,
                padding:"0.6rem 1rem",
                background:"linear-gradient(to top, rgba(5,10,18,0.85), transparent)",
                display:"flex", alignItems:"center", justifyContent:"space-between",
              }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.78rem", color:"rgba(255,255,255,0.9)" }}>
                  {d.title.split(" ").slice(0,2).join(" ")}
                </span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:"var(--cyan)", opacity:0.8 }}>
                  {d.type.split("·")[0].trim()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.5 }}
          style={{
            marginTop:"2rem", padding:"1.2rem 1.6rem",
            background:"var(--surface)", border:"1px solid var(--border)",
            borderRadius:"14px", boxShadow:"var(--shadow-sm)",
            display:"flex", flexWrap:"wrap",
            alignItems:"center", justifyContent:"space-between", gap:"1rem",
          }}
        >
          <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
            <span style={{ fontSize:"1.3rem" }}>🎨</span>
            <div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.95rem", color:"var(--text)" }}>
                Need a graphic designer?
              </div>
              <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"var(--text3)", marginTop:"0.15rem" }}>
                Flyers · Brand Identity · Social Media · Print · Event Graphics
              </div>
            </div>
          </div>
          <motion.a href="#contact"
            whileHover={{ y:-2, boxShadow:"var(--shadow-cyan)" }}
            style={{ padding:"0.65rem 1.5rem", background:"var(--cyan)", color:"#fff", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.85rem", textDecoration:"none", borderRadius:"8px", boxShadow:"var(--shadow-cyan)", whiteSpace:"nowrap" }}>
            Let&apos;s Create Together →
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
