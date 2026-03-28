"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { FolderOpen, ArrowLeft, ExternalLink } from "lucide-react";

const DRIVE_URL = "https://drive.google.com/drive/folders/1nAI1xbZwf0QlrbdKGzuhc-yDB6aligYM?usp=sharing";

const milestones = [
  { year:"2019", icon:"🌱", color:"#d97706", title:"Curiosity Sparked", desc:"YouTube, CorelDraw, and boredom. I watched someone build a logo and spent the next three hours trying to do the same. I failed. I tried again. I kept going." },
  { year:"2020", icon:"🔤", color:"#a855f7", title:"Logos & Lettermarks", desc:"My first real design work — wordmarks and lettermarks for imaginary brands I created just to practice. CorelDraw's bezier curves became an obsession. Most of it was terrible. It taught me that design is a craft." },
  { year:"2021", icon:"✏️", color:"#ec4899", title:"Flyers, Posters & Print", desc:"Churches, student groups, and small businesses started asking for work. Flyers, event posters, banners. I learned layout, hierarchy, and visual communication before I knew the terminology." },
  { year:"2022", icon:"🎨", color:"#d97706", title:"Discovering Photoshop", desc:"A new dimension opened. Photo compositing, masking, layer blending. My ceiling suddenly became much higher." },
  { year:"2023–Present", icon:"🚀", color:"#a855f7", title:"Designing Week In, Week Out", desc:"Event graphics, brand identities, social creatives, print materials — weekly, for real clients. Photoshop and CorelDraw are now as natural to me as a terminal prompt." },
];

const categories = [
  { icon:"🏷️", title:"Brand Identity & Logos",     desc:"Wordmarks, lettermarks, symbol marks, brand guidelines" },
  { icon:"🎪", title:"Event & Conference Graphics",  desc:"Posters, banners, stage backdrops, programmes, badges" },
  { icon:"📱", title:"Social Media Creatives",       desc:"Posts, stories, carousels, YouTube thumbnails, profile art" },
  { icon:"🖨️", title:"Print Design",                desc:"Flyers, brochures, business cards, invitations, certificates" },
  { icon:"✨", title:"Custom Illustrations",          desc:"3D text effects, bespoke compositions, digital artworks" },
  { icon:"📺", title:"Digital & Screen Graphics",    desc:"Presentation decks, motion stills, digital ads" },
];

export default function DesignWorld() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";

  return (
    <main style={{ minHeight:"100vh", background:"#0d0a14", color:"#faf0ff", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

      {/* ── NAV ── */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:50,
        padding:"0 5%", height:68, display:"flex", alignItems:"center", justifyContent:"space-between",
        background:"rgba(13,10,20,0.9)", backdropFilter:"blur(20px)",
        borderBottom:"1px solid rgba(168,85,247,0.2)",
      }}>
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", cursor:"pointer", padding:"4px 0" }}>
          <span style={{ pointerEvents:"none", display:"flex" }}>
            <Image src="/jaa-logo-white.png" alt="JAA" width={64} height={30} style={{ objectFit:"contain", height:30, width:"auto" }} priority/>
          </span>
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:"1.2rem" }}>
          <Link href="/" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"rgba(216,180,254,0.6)", textDecoration:"none", letterSpacing:"0.1em", textTransform:"uppercase", transition:"color 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#d97706")}
            onMouseLeave={e=>(e.currentTarget.style.color="rgba(216,180,254,0.6)")}>
            ← All Worlds
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"120px 5% 80px", position:"relative", overflow:"hidden" }}>

        {/* Background paint strokes */}
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 100% 80% at 80% 20%, rgba(217,119,6,0.12), transparent 60%)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 10% 80%, rgba(168,85,247,0.1), transparent 60%)", pointerEvents:"none" }}/>
        {/* Grid */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(168,85,247,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.04) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }}/>

        {/* Floating paint blobs */}
        <motion.div animate={{ rotate:360, scale:[1,1.05,1] }} transition={{ rotate:{ duration:30, repeat:Infinity, ease:"linear" }, scale:{ duration:6, repeat:Infinity } }}
          style={{ position:"absolute", top:"15%", right:"8%", width:280, height:280, borderRadius:"60% 40% 70% 30% / 40% 60% 30% 70%", background:"rgba(217,119,6,0.08)", filter:"blur(40px)", pointerEvents:"none" }}/>
        <motion.div animate={{ rotate:-360, scale:[1,1.08,1] }} transition={{ rotate:{ duration:25, repeat:Infinity, ease:"linear" }, scale:{ duration:8, repeat:Infinity, delay:2 } }}
          style={{ position:"absolute", bottom:"20%", left:"5%", width:200, height:200, borderRadius:"40% 60% 30% 70% / 60% 40% 70% 30%", background:"rgba(168,85,247,0.08)", filter:"blur(40px)", pointerEvents:"none" }}/>

        <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", position:"relative", zIndex:1 }}>
          <motion.div initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>

            <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"1.2rem" }}>
              <span style={{ width:24, height:2, background:"#d97706", display:"inline-block", borderRadius:2 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"#d97706", letterSpacing:"0.2em", textTransform:"uppercase" }}>Design World</span>
            </div>

            <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2.8rem,7vw,5.5rem)", fontWeight:800, lineHeight:1.04, letterSpacing:"-0.04em", marginBottom:"1.5rem" }}>
              <span style={{ color:"#faf0ff" }}>The visual</span><br/>
              <span style={{ background:"linear-gradient(135deg,#d97706 30%,#a855f7 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>side of John.</span>
            </h1>

            <p style={{ fontSize:"1.05rem", color:"rgba(250,240,255,0.65)", maxWidth:580, lineHeight:1.88, fontWeight:300, marginBottom:"2.5rem" }}>
              From watching YouTube tutorials out of boredom to designing event graphics, brand identities, and print materials every single week — this is the story of how a Cloud Engineer became a graphic designer by accident, and never looked back.
            </p>

            {/* Available badge */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"0.5rem 1.2rem", background:"rgba(217,119,6,0.12)", border:"1.5px solid rgba(217,119,6,0.3)", borderRadius:"100px", marginBottom:"2rem" }}>
              <motion.span animate={{ opacity:[0.4,1,0.4] }} transition={{ duration:1.8, repeat:Infinity }}
                style={{ width:7, height:7, borderRadius:"50%", background:"#d97706", display:"inline-block", flexShrink:0 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"#d97706", letterSpacing:"0.12em", textTransform:"uppercase" }}>Available for design projects</span>
            </div>

            {/* CTA */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:"1rem" }}>
              <motion.a whileHover={{ y:-3, boxShadow:"0 16px 50px rgba(217,119,6,0.4)" }}
                href={DRIVE_URL} target="_blank" rel="noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"1rem 2.2rem", background:"linear-gradient(135deg,#d97706,#b45309)", color:"#fff", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.95rem", textDecoration:"none", borderRadius:"12px", boxShadow:"0 4px 24px rgba(217,119,6,0.3)" }}>
                <FolderOpen size={18}/> View Full Portfolio
              </motion.a>
              <motion.a whileHover={{ y:-3 }} href="mailto:akinolajohnayomide@gmail.com"
                style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"1rem 2.2rem", border:"1.5px solid rgba(168,85,247,0.4)", color:"#d8b4fe", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.95rem", textDecoration:"none", borderRadius:"12px", background:"rgba(168,85,247,0.06)", transition:"all 0.2s" }}>
                Hire for Design Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TOOLS STRIP ── */}
      <section style={{ padding:"2.5rem 5%", background:"rgba(168,85,247,0.06)", borderTop:"1px solid rgba(168,85,247,0.15)", borderBottom:"1px solid rgba(168,85,247,0.15)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", flexWrap:"wrap", gap:"1rem", alignItems:"center", justifyContent:"center" }}>
          {[
            { name:"Adobe Photoshop", level:"Advanced", icon:"Ps", color:"#31a8ff" },
            { name:"CorelDRAW",       level:"Advanced", icon:"Cd", color:"#77bc1f" },
            { name:"Adobe Illustrator", level:"Intermediate", icon:"Ai", color:"#ff9a00" },
            { name:"Canva",           level:"Advanced", icon:"Ca", color:"#00c4cc" },
          ].map(t=>(
            <motion.div key={t.name} whileHover={{ y:-3 }}
              style={{ display:"flex", alignItems:"center", gap:"0.75rem", padding:"0.8rem 1.3rem", background:"rgba(13,10,20,0.8)", border:"1px solid rgba(168,85,247,0.2)", borderRadius:"12px" }}>
              <div style={{ width:36, height:36, borderRadius:"8px", background:`${t.color}22`, border:`1.5px solid ${t.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.75rem", color:t.color, flexShrink:0 }}>{t.icon}</div>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.88rem", color:"#faf0ff" }}>{t.name}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:t.color, letterSpacing:"0.08em", marginTop:"0.1rem" }}>{t.level}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section style={{ padding:"6rem 5%", background:"#0d0a14" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"0.8rem" }}>
              <span style={{ width:24, height:2, background:"#a855f7", display:"inline-block", borderRadius:2 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"#a855f7", letterSpacing:"0.18em", textTransform:"uppercase" }}>The Origin Story</span>
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, color:"#faf0ff", lineHeight:1.1, letterSpacing:"-0.03em" }}>
              How curiosity became craft.
            </h2>
          </motion.div>

          <div style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
            {milestones.map((m,i)=>(
              <motion.div key={m.year}
                initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ duration:0.55, delay:i*0.08 }}
                style={{ display:"flex", gap:"1.8rem", alignItems:"flex-start" }}
                className="story-row">
                <div style={{ flexShrink:0, display:"flex", flexDirection:"column", alignItems:"center", gap:"0.4rem" }}>
                  <div style={{ width:56, height:56, borderRadius:"14px", background:`${m.color}18`, border:`1.5px solid ${m.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.6rem" }}>{m.icon}</div>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:m.color, fontWeight:700, letterSpacing:"0.06em", textAlign:"center", lineHeight:1.3 }}>{m.year}</span>
                </div>
                <div style={{ flex:1, padding:"1.4rem 1.6rem", background:"rgba(168,85,247,0.06)", border:"1px solid rgba(168,85,247,0.15)", borderRadius:"16px" }}>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1rem", color:"#faf0ff", marginBottom:"0.6rem" }}>{m.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"rgba(250,240,255,0.65)", lineHeight:1.82, fontWeight:300 }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ padding:"6rem 5%", background:"rgba(8,5,14,0.98)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:"3.5rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"0.8rem" }}>
              <span style={{ width:24, height:2, background:"#d97706", display:"inline-block", borderRadius:2 }}/>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"#d97706", letterSpacing:"0.18em", textTransform:"uppercase" }}>What I Create</span>
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:800, color:"#faf0ff", lineHeight:1.1, letterSpacing:"-0.03em" }}>
              Six categories.<br/>All done with precision.
            </h2>
          </motion.div>
          <div className="design-page-categories">
            {categories.map((c,i)=>(
              <motion.div key={c.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.44, delay:i*0.07 }}
                whileHover={{ y:-4, background:"rgba(217,119,6,0.08)", borderColor:"rgba(217,119,6,0.3)" }}
                style={{ padding:"1.6rem", background:"rgba(168,85,247,0.05)", border:"1.5px solid rgba(168,85,247,0.15)", borderRadius:"14px", transition:"all 0.28s" }}>
                <div style={{ fontSize:"1.8rem", marginBottom:"0.7rem" }}>{c.icon}</div>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.98rem", color:"#faf0ff", marginBottom:"0.4rem" }}>{c.title}</h3>
                <p style={{ fontSize:"0.82rem", color:"rgba(250,240,255,0.55)", lineHeight:1.72, fontWeight:300 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG DRIVE CTA ── */}
      <section style={{ padding:"6rem 5%", background:"#0d0a14", position:"relative", overflow:"hidden" }}>
        <motion.div animate={{ scale:[1,1.1,1], opacity:[0.3,0.6,0.3] }} transition={{ duration:5, repeat:Infinity }}
          style={{ position:"absolute", top:-80, left:"50%", transform:"translateX(-50%)", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(217,119,6,0.15),transparent 70%)", filter:"blur(80px)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <div style={{ fontSize:"3.5rem", marginBottom:"1rem" }}>🎨</div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:800, color:"#faf0ff", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"0.8rem" }}>
              See the actual work.
            </h2>
            <p style={{ fontSize:"0.97rem", color:"rgba(250,240,255,0.6)", maxWidth:500, margin:"0 auto 2rem", lineHeight:1.85, fontWeight:300 }}>
              The full portfolio lives on Google Drive — event flyers, brand identities, social graphics, and print materials. Real work for real clients.
            </p>
            <motion.a whileHover={{ y:-3, boxShadow:"0 24px 70px rgba(217,119,6,0.4)" }}
              href={DRIVE_URL} target="_blank" rel="noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"1.1rem 2.8rem", background:"linear-gradient(135deg,#d97706,#b45309)", color:"#fff", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", textDecoration:"none", borderRadius:"12px", boxShadow:"0 4px 24px rgba(217,119,6,0.3)" }}>
              <FolderOpen size={20}/>
              Open Design Portfolio
              <ExternalLink size={16}/>
            </motion.a>
            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"rgba(250,240,255,0.3)", marginTop:"1rem", letterSpacing:"0.05em" }}>
              Opens in new tab · Google Drive · Public folder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding:"2rem 5%", background:"rgba(8,5,14,0.98)", borderTop:"1px solid rgba(168,85,247,0.15)", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
        <Link href="/" style={{ textDecoration:"none" }}>
          <Image src="/jaa-logo-white.png" alt="JAA" width={48} height={22} style={{ objectFit:"contain", height:22, width:"auto", opacity:0.6 }}/>
        </Link>
        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"rgba(250,240,255,0.3)" }}>© 2026 · John Ayomide Akinola</span>
        <Link href="/" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"rgba(250,240,255,0.3)", textDecoration:"none", transition:"color 0.2s" }}
          onMouseEnter={e=>(e.currentTarget.style.color="#d97706")}
          onMouseLeave={e=>(e.currentTarget.style.color="rgba(250,240,255,0.3)")}>← All Worlds</Link>
      </footer>
    </main>
  );
}
