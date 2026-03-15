"use client";
import { motion } from "framer-motion";

const designs = [
  { title:"Event Graphics & Conference Designs", type:"Event · Print · Digital",  emoji:"🎪", gradient:"linear-gradient(135deg,#0a1628,#0f2845,#041220)", large:true  },
  { title:"Brand Identity & Logo Design",        type:"Branding · Identity",       emoji:"🏷️", gradient:"linear-gradient(135deg,#1a0a28,#2d1060)",        large:false },
  { title:"Social Media Graphics",               type:"Social · Digital",          emoji:"📱", gradient:"linear-gradient(135deg,#001f1a,#003d2e)",         large:false },
  { title:"Print Design Materials",              type:"Print · Flyers · Banners",  emoji:"🗞️", gradient:"linear-gradient(135deg,#1f1200,#3d2000)",         large:false },
  { title:"Bespoke Custom Graphics",             type:"Custom · Creative",         emoji:"✨", gradient:"linear-gradient(135deg,#001428,#002d5a)",         large:false },
];

export default function Design() {
  return (
    <section id="design" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        {/* Header row */}
        <div className="design-header">
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"0.8rem" }}>
              <span style={{ width:20, height:2, background:"var(--cyan)", display:"inline-block", borderRadius:2 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"var(--cyan)", letterSpacing:"0.15em", textTransform:"uppercase" }}>Design Portfolio</span>
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.9rem,3.8vw,2.9rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em" }}>
              The visual side<br/>of John.
            </h2>
          </div>
          <motion.div className="design-badge" initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", color:"var(--cyan)", border:"1px solid var(--border)", background:"var(--cyan-dim)", borderRadius:"6px", padding:"0.5rem 0.9rem", maxWidth:"100%", wordBreak:"break-word", lineHeight:1.5 }}>
            ✦ Available for design projects — let&apos;s create something great
          </motion.div>
        </div>

        <p style={{ fontSize:"0.95rem", color:"var(--text2)", fontWeight:300, marginBottom:"2.5rem" }}>
          Week in, week out — flyers, brands, events, and digital creatives crafted with Photoshop &amp; CorelDraw.
        </p>

        <div className="design-grid">
          {designs.map((d,i)=>(
            <motion.div key={d.title}
              initial={{ opacity:0, scale:0.94 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }} transition={{ duration:0.45, delay:i*0.08 }}
              whileHover={{ scale:1.02 }}
              className={d.large ? "design-large" : ""}
              style={{ aspectRatio: d.large ? undefined : "4/3", position:"relative", overflow:"hidden", borderRadius:"14px", background:"var(--surface)", border:"1px solid var(--border)", cursor:"pointer" }}
            >
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:d.gradient }}>
                {d.large ? (
                  <div style={{ textAlign:"center", padding:"2rem" }}>
                    <div style={{ fontSize:"3.5rem", marginBottom:"0.8rem" }}>{d.emoji}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1rem,3vw,1.7rem)", fontWeight:800, color:"white", letterSpacing:"-0.02em" }}>Event Graphics</div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--cyan)", marginTop:"0.4rem", letterSpacing:"0.12em" }}>CONFERENCE · BIRTHDAY · CONCERT</div>
                  </div>
                ) : (
                  <div style={{ textAlign:"center" }}>
                    <div style={{ fontSize:"2.8rem", marginBottom:"0.4rem" }}>{d.emoji}</div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, color:"white", fontSize:"0.9rem" }}>{d.type.split("·")[0].trim()}</div>
                  </div>
                )}
              </div>
              <motion.div initial={{ opacity:0 }} whileHover={{ opacity:1 }} transition={{ duration:0.25 }}
                style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(5,10,18,0.95) 0%,rgba(5,10,18,0.4) 50%,transparent 100%)", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"1.2rem" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9rem", color:"white", marginBottom:"0.3rem" }}>{d.title}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"var(--cyan)", letterSpacing:"0.1em", textTransform:"uppercase" }}>{d.type}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
