"use client";
import { motion } from "framer-motion";

const designs = [
  { title:"Event Graphics & Conference Designs", type:"Event · Print · Digital", emoji:"🎪", gradient:"linear-gradient(135deg,#0a1628,#0f2845,#041220)", large:true },
  { title:"Brand Identity & Logo Design", type:"Branding · Identity", emoji:"🏷️", gradient:"linear-gradient(135deg,#1a0a28,#2d1060)", large:false },
  { title:"Social Media Graphics", type:"Social · Digital", emoji:"📱", gradient:"linear-gradient(135deg,#001f1a,#003d2e)", large:false },
  { title:"Print Design Materials", type:"Print · Flyers · Banners", emoji:"🗞️", gradient:"linear-gradient(135deg,#1f1200,#3d2000)", large:false },
  { title:"Bespoke Custom Graphics", type:"Custom · Creative", emoji:"✨", gradient:"linear-gradient(135deg,#001428,#002d5a)", large:false },
];

export default function Design() {
  return (
    <section id="design" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1rem", marginBottom:"1.2rem" }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"0.8rem" }}>
              <span style={{ width:20, height:1, background:"var(--cyan)", display:"inline-block" }} />
              <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.7rem", color:"var(--cyan)", letterSpacing:"0.15em", textTransform:"uppercase" }}>Design Portfolio</span>
            </div>
            <h2 style={{ fontFamily:"'Syne', sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em" }}>
              The visual side<br/>of John.
            </h2>
          </div>
          <motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.75rem", color:"var(--cyan)", border:"1px solid var(--border)", background:"rgba(0,200,255,0.07)", borderRadius:"6px", padding:"0.5rem 1rem", whiteSpace:"nowrap" }}>
            ✦ Available for design projects — let&apos;s create something great
          </motion.div>
        </div>

        <p style={{ fontSize:"0.95rem", color:"var(--text2)", fontWeight:300, marginBottom:"3rem" }}>
          Week in, week out — flyers, brands, events, and digital creatives crafted with Photoshop &amp; CorelDraw.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }} className="design-grid">
          {designs.map((d, i) => (
            <motion.div key={d.title}
              initial={{ opacity:0, scale:0.94 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.45, delay:i*0.08 }}
              whileHover={{ scale:1.02 }}
              style={{
                gridColumn: d.large ? "span 2" : "span 1",
                aspectRatio: d.large ? "16/9" : "4/3",
                position:"relative", overflow:"hidden", borderRadius:"14px",
                background:"var(--surface)", border:"1px solid var(--border)", cursor:"pointer",
              }}
              className={d.large ? "design-large" : ""}>
              {/* bg */}
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:d.gradient }}>
                {d.large ? (
                  <div style={{ textAlign:"center", padding:"2rem" }}>
                    <div style={{ fontSize:"3.5rem", marginBottom:"0.8rem" }}>{d.emoji}</div>
                    <div style={{ fontFamily:"'Syne', sans-serif", fontSize:"1.7rem", fontWeight:800, color:"var(--text)", letterSpacing:"-0.02em" }}>Event Graphics</div>
                    <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.7rem", color:"var(--cyan)", marginTop:"0.4rem", letterSpacing:"0.12em" }}>CONFERENCE · BIRTHDAY · CONCERT</div>
                  </div>
                ) : (
                  <div style={{ textAlign:"center" }}>
                    <div style={{ fontSize:"3rem", marginBottom:"0.4rem" }}>{d.emoji}</div>
                    <div style={{ fontFamily:"'Syne', sans-serif", fontWeight:800, color:"var(--text)", fontSize:"0.95rem" }}>{d.type.split("·")[0].trim()}</div>
                  </div>
                )}
              </div>
              {/* hover overlay */}
              <motion.div initial={{ opacity:0 }} whileHover={{ opacity:1 }} transition={{ duration:0.25 }}
                style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(5,10,18,0.95) 0%,rgba(5,10,18,0.4) 50%,transparent 100%)", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"1.2rem" }}>
                <div style={{ fontFamily:"'Syne', sans-serif", fontWeight:700, fontSize:"0.9rem", color:"var(--text)", marginBottom:"0.3rem" }}>{d.title}</div>
                <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.65rem", color:"var(--cyan)", letterSpacing:"0.1em", textTransform:"uppercase" }}>{d.type}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .design-grid { grid-template-columns: 1fr 1fr !important; }
          .design-large { grid-column: span 2 !important; }
        }
        @media (max-width: 540px) {
          .design-grid { grid-template-columns: 1fr !important; }
          .design-large { grid-column: span 1 !important; aspect-ratio: 4/3 !important; }
        }
      `}</style>
    </section>
  );
}
