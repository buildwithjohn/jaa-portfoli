"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";

const DRIVE_URL = "https://drive.google.com/drive/folders/1nAI1xbZwf0QlrbdKGzuhc-yDB6aligYM?usp=sharing";

/* ── Preview SVG illustrations (same as before, condensed) ── */
function EventFlyerSVG() {
  return (
    <svg viewBox="0 0 260 160" fill="none" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
      <rect width="260" height="160" fill="#0a0614"/>
      <radialGradient id="o1" cx="20%" cy="20%" r="60%"><stop offset="0%" stopColor="#7c3aed" stopOpacity="0.7"/><stop offset="100%" stopColor="#0a0614" stopOpacity="0"/></radialGradient>
      <rect width="260" height="160" fill="url(#o1)"/>
      <radialGradient id="o2" cx="80%" cy="80%" r="60%"><stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5"/><stop offset="100%" stopColor="#0a0614" stopOpacity="0"/></radialGradient>
      <rect width="260" height="160" fill="url(#o2)"/>
      {[0,1,2,3,4,5,6,7,8,9].map(i=><line key={`v${i}`} x1={i*29} y1="0" x2={i*29} y2="160" stroke="#fff" strokeWidth="0.25" opacity="0.05"/>)}
      <motion.polygon points="130,12 143,25 130,38 117,25" fill="none" stroke="#a855f7" strokeWidth="1.2"
        animate={{opacity:[0.4,1,0.4],scale:[1,1.08,1]}} transition={{duration:3,repeat:Infinity}} style={{transformOrigin:"130px 25px"}}/>
      <text x="130" y="78" textAnchor="middle" fill="white" style={{fontFamily:"'Syne',sans-serif",fontSize:22,fontWeight:800,letterSpacing:-0.5}}>THE REFUEL</text>
      <text x="130" y="98" textAnchor="middle" fill="white" style={{fontFamily:"'Syne',sans-serif",fontSize:16,fontWeight:800,letterSpacing:4}}>EXPERIENCE</text>
      <line x1="44" y1="110" x2="110" y2="110" stroke="#a855f7" strokeWidth="1" opacity="0.7"/>
      <text x="130" y="115" textAnchor="middle" fill="#a855f7" fontSize="8">✦</text>
      <line x1="150" y1="110" x2="216" y2="110" stroke="#a855f7" strokeWidth="1" opacity="0.7"/>
      <text x="130" y="130" textAnchor="middle" fill="#94a3b8" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:7,letterSpacing:2}}>LAGOS · NIGERIA · 2025</text>
      <rect x="100" y="140" width="60" height="14" rx="7" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="0.8"/>
      <text x="130" y="151" textAnchor="middle" fill="#a855f7" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:6,letterSpacing:2}}>REGISTER NOW</text>
    </svg>
  );
}
function BrandSVG() {
  return (
    <svg viewBox="0 0 260 160" fill="none" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
      <rect width="260" height="160" fill="#0f0a1e"/>
      <motion.g animate={{rotate:[0,3,-3,0]}} transition={{duration:6,repeat:Infinity}} style={{transformOrigin:"130px 68px"}}>
        <polygon points="130,30 158,46 158,78 130,94 102,78 102,46" fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth="1.5"/>
        <polygon points="130,42 148,52 148,72 130,82 112,72 112,52" fill="rgba(99,102,241,0.2)" stroke="#6366f1" strokeWidth="1"/>
        <path d="M121 56 Q121 50 130 50 Q140 50 140 57 Q140 64 130 66 Q120 68 120 75 Q120 82 130 82 Q140 82 140 76" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </motion.g>
      <text x="130" y="114" textAnchor="middle" fill="white" style={{fontFamily:"'Syne',sans-serif",fontSize:12,fontWeight:800,letterSpacing:3}}>SWELERION</text>
      <text x="130" y="126" textAnchor="middle" fill="#6366f1" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:6,letterSpacing:4}}>GLOBAL · CLOUD</text>
      {["#6366f1","#8b5cf6","#06b6d4","#f59e0b","#1e293b"].map((c,i)=>(
        <motion.rect key={c} x={28+i*42} y="140" width="36" height="12" rx="4" fill={c} animate={{opacity:[0.7,1,0.7]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
      ))}
    </svg>
  );
}
function SocialSVG() {
  return (
    <svg viewBox="0 0 260 160" fill="none" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
      <rect width="260" height="160" fill="#050a12"/>
      <rect x="70" y="8" width="120" height="144" rx="14" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5"/>
      <rect x="70" y="8" width="120" height="12" rx="14" fill="rgba(236,72,153,0.2)"/>
      <motion.rect x="70" y="8" width="50" height="3" rx="1.5" fill="#ec4899" animate={{width:[0,120,0]}} transition={{duration:5,repeat:Infinity,ease:"linear"}}/>
      <circle cx="84" cy="27" r="6" fill="rgba(236,72,153,0.3)" stroke="#ec4899" strokeWidth="1"/>
      <text x="84" y="31" textAnchor="middle" fill="white" fontSize="7">J</text>
      <text x="95" y="28" fill="white" style={{fontFamily:"'Syne',sans-serif",fontSize:7,fontWeight:700}}>johnprexy</text>
      <rect x="76" y="38" width="108" height="68" fill="#0d1b2e"/>
      <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8"/><stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8"/></linearGradient></defs>
      <rect x="76" y="38" width="108" height="68" fill="url(#pg)" opacity="0.2"/>
      <text x="130" y="68" textAnchor="middle" fill="white" style={{fontFamily:"'Syne',sans-serif",fontSize:11,fontWeight:800}}>CLOUD</text>
      <text x="130" y="82" textAnchor="middle" fill="white" style={{fontFamily:"'Syne',sans-serif",fontSize:11,fontWeight:800}}>ENGINEER</text>
      <text x="130" y="96" textAnchor="middle" fill="#06b6d4" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:6,letterSpacing:2}}>BLOOMY TECH</text>
      <text x="80" y="120" fill="white" fontSize="9">❤️</text><text x="92" y="121" fill="#94a3b8" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:6}}>2.4k</text>
      <text x="106" y="120" fill="white" fontSize="8">💬</text><text x="116" y="121" fill="#94a3b8" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:6}}>138</text>
      <text x="80" y="140" fill="#94a3b8" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:5.5}}>Designed in Photoshop ✦</text>
    </svg>
  );
}
function PrintSVG() {
  return (
    <svg viewBox="0 0 260 160" fill="none" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
      <rect width="260" height="160" fill="#0c0a08"/>
      <rect x="78" y="13" width="110" height="136" rx="4" fill="#0a0908" opacity="0.6"/>
      <motion.rect x="74" y="9" width="110" height="136" rx="4" fill="#fef9f0" animate={{rotate:[-0.5,0.5,-0.5]}} transition={{duration:5,repeat:Infinity}} style={{transformOrigin:"129px 77px"}}/>
      <motion.g animate={{rotate:[-0.5,0.5,-0.5]}} transition={{duration:5,repeat:Infinity}} style={{transformOrigin:"129px 77px"}}>
        <rect x="74" y="9" width="110" height="32" rx="4" fill="#d97706"/>
        <rect x="74" y="28" width="110" height="13" fill="#d97706"/>
        <text x="129" y="26" textAnchor="middle" fill="white" style={{fontFamily:"'Syne',sans-serif",fontSize:9,fontWeight:800,letterSpacing:2}}>TECH SUMMIT</text>
        <text x="129" y="37" textAnchor="middle" fill="rgba(255,255,255,0.8)" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:5,letterSpacing:3}}>LAGOS 2025</text>
        {[0,1,2].map(i=><rect key={i} x="86" y={52+i*12} width={[76,58,68][i]} height="4" rx="2" fill="#d97706" opacity="0.25"/>)}
        <text x="129" y="103" textAnchor="middle" fill="#1e293b" style={{fontFamily:"'Syne',sans-serif",fontSize:22,fontWeight:800}}>OCT 25</text>
        <line x1="90" y1="108" x2="168" y2="108" stroke="#d97706" strokeWidth="1.5"/>
        <text x="129" y="118" textAnchor="middle" fill="#64748b" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:5.5,letterSpacing:1}}>FEDERAL PALACE HOTEL</text>
        <rect x="74" y="131" width="110" height="14" fill="#1e293b"/>
        <text x="129" y="142" textAnchor="middle" fill="#d97706" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:5,letterSpacing:2}}>REGISTER · NETWORK · GROW</text>
      </motion.g>
    </svg>
  );
}

const previews = [
  { id:"event",  title:"Event & Conference",  type:"Event · Print · Digital",  large:true,  Visual:EventFlyerSVG },
  { id:"brand",  title:"Brand Identity",       type:"Branding · Logos",          large:false, Visual:BrandSVG      },
  { id:"social", title:"Social Media",         type:"Digital · Social",          large:false, Visual:SocialSVG     },
  { id:"print",  title:"Print Design",         type:"Posters · Flyers",          large:false, Visual:PrintSVG      },
];

export default function Design() {
  return (
    <section id="design" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>

        {/* Header */}
        <div className="design-header" style={{ marginBottom:"1rem" }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"0.8rem" }}>
              <span style={{ width:20, height:2, background:"var(--cyan)", display:"inline-block", borderRadius:2 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"var(--cyan)", letterSpacing:"0.15em", textTransform:"uppercase" }}>Design Portfolio</span>
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
          From boredom and YouTube tutorials to designing every week — event flyers, brand identities, social media creatives and print materials using Photoshop &amp; CorelDraw.
        </p>

        {/* Preview grid */}
        <div className="design-grid" style={{ marginBottom:"2rem" }}>
          {previews.map((d, i) => (
            <motion.div key={d.id}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.45, delay:i*0.08 }}
              whileHover={{ scale:1.02 }}
              className={d.large ? "design-large" : ""}
              style={{ aspectRatio: d.large ? undefined : "4/3", position:"relative", overflow:"hidden", borderRadius:"14px", border:"1px solid var(--border)", cursor:"pointer", transition:"all 0.3s", boxShadow:"var(--shadow-sm)" }}
            >
              <d.Visual />
              {/* Always-visible bottom strip */}
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"0.6rem 1rem", background:"linear-gradient(to top,rgba(5,10,18,0.88),transparent)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.76rem", color:"rgba(255,255,255,0.9)" }}>{d.title}</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--cyan)", opacity:0.8 }}>{d.type.split("·")[0].trim()}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.3 }}
          style={{ padding:"1.4rem 1.8rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"16px", boxShadow:"var(--shadow-sm)", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}
        >
          <div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", color:"var(--text)", marginBottom:"0.2rem" }}>
              Want to see the full story + all the work?
            </div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--text3)" }}>
              Read the design journey & browse the portfolio on Google Drive
            </div>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.8rem" }}>
            <Link href="/design">
              <motion.span whileHover={{ y:-2 }}
                style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.7rem 1.5rem", background:"var(--cyan)", color:"#fff", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.85rem", textDecoration:"none", borderRadius:"8px", boxShadow:"var(--shadow-cyan)", cursor:"pointer" }}>
                Read the Story <ArrowRight size={15}/>
              </motion.span>
            </Link>
            <motion.a whileHover={{ y:-2 }} href={DRIVE_URL} target="_blank" rel="noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.7rem 1.5rem", border:"1.5px solid var(--border)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.85rem", textDecoration:"none", borderRadius:"8px", background:"transparent", transition:"all 0.2s" }}>
              <FolderOpen size={15}/> View on Drive
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
