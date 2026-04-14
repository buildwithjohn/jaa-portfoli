"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowUpRight } from "lucide-react";

const fade = (d=0) => ({ initial:{opacity:0,y:16}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.45,delay:d} });

const timeline = [
  { year:"2016–2021", title:"B.Sc Chemistry Education",                desc:"Undergraduate degree with TRCN certification — a qualified, registered chemistry teacher." },
  { year:"2018",      title:"Ministry",                                 desc:"Began serving as a teaching minister at House of Joy Ministries. Led the Campus Discipleship Network." },
  { year:"2019",      title:"Design by Curiosity",                      desc:"CorelDraw tutorials on YouTube. Never stopped — grew into a full graphic design practice." },
  { year:"2023",      title:"Web & Infrastructure Engineering",          desc:"Started shipping production platforms: React, Next.js, Vue, Node.js, and full cloud infrastructure for real clients." },
  { year:"2024–2026", title:"M.Sc Information Technology",              desc:"ESCT University. Research: AI-Driven Multi-Cloud Networking (the AMON framework)." },
  { year:"2025",      title:"Tech Instructor",                           desc:"Teaching DevOps, Cloud Engineering, Linux, Cybersecurity, and Data Analytics to a new generation." },
  { year:"2026",      title:"Build With JAA",                           desc:"Launched johnakinola.com and the Build With JAA YouTube channel." },
];

export default function AboutPage() {
  return (
    <main style={{ background:"var(--bg)", minHeight:"100vh" }}>
      <Navbar />
      <div className="container" style={{ paddingTop:100, paddingBottom:"6rem" }}>

        {/* Hero */}
        <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }} style={{ display:"flex", gap:"1.5rem", alignItems:"flex-start", marginBottom:"2.5rem", flexWrap:"wrap" }}>
          <div style={{ width:80, height:80, borderRadius:"50%", overflow:"hidden", flexShrink:0, border:"2px solid var(--border)" }}>
            <Image src="/john.jpg" alt="John Ayomide Akinola" width={80} height={80} style={{ objectFit:"cover", objectPosition:"center 18%", width:"100%", height:"100%" }} priority/>
          </div>
          <div>
            <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(1.6rem,4vw,2.2rem)", color:"var(--text)", letterSpacing:"-0.03em", marginBottom:"0.4rem" }}>About John</h1>
            <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--text3)" }}>Platform Engineer · Educator · Author · Lagos, Nigeria</p>
          </div>
        </motion.div>

        <motion.div {...fade(0.1)} className="prose" style={{ marginBottom:"2.5rem" }}>
          <p style={{ marginBottom:"1rem" }}>
            I&apos;m a Platform & Cloud Infrastructure Engineer with a background in Chemistry Education. That combination isn&apos;t a bug — it&apos;s the whole story. The ability to learn anything systematically and explain it clearly has been my biggest professional asset.
          </p>
          <p style={{ marginBottom:"1rem" }}>
            I build production infrastructure on AWS and Azure, orchestrate Kubernetes clusters, write Terraform for real IaC, and teach the full DevOps stack. I&apos;ve shipped 16+ platforms for clients in Nigeria, Dubai, and Amsterdam.
          </p>
          <p>
            I&apos;m also married to <strong>Omotola</strong>, a Data Analyst and my person. I&apos;m a teaching minister at House of Joy Ministries. And I wrote a book — <Link href="/book">From Chemistry Class to Cloud</Link> — that&apos;s now free.
          </p>
        </motion.div>

        <div className="divider" />

        {/* Timeline */}
        <motion.div {...fade(0)}>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.9rem", color:"var(--text)", marginBottom:"1.2rem", letterSpacing:"-0.01em" }}>Timeline</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
            {timeline.map((t,i)=>(
              <motion.div key={t.year} {...fade(i*0.04)} style={{ display:"flex", gap:"1.5rem", padding:"0.9rem 0", borderBottom:i<timeline.length-1?"1px solid var(--border)":"none" }}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:"var(--text3)", minWidth:80, flexShrink:0, paddingTop:"0.15rem" }}>{t.year}</span>
                <div>
                  <div style={{ fontSize:"0.9rem", color:"var(--text)", fontWeight:500, marginBottom:"0.2rem" }}>{t.title}</div>
                  <div style={{ fontSize:"0.82rem", color:"var(--text2)", lineHeight:1.65, fontWeight:300 }}>{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="divider" />

        {/* Links */}
        <motion.div {...fade(0)}>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.9rem", color:"var(--text)", marginBottom:"1rem", letterSpacing:"-0.01em" }}>Find me online</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
            {[
              { label:"Build With JAA — YouTube",    href:"https://www.youtube.com/@buildwithjaa" },
              { label:"GitHub — buildwithjohn",       href:"https://github.com/buildwithjohn" },
              { label:"LinkedIn",                     href:"https://linkedin.com/in/john-ayomide-akinola" },
              { label:"Instagram (Tech) — @build_with_john",    href:"https://www.instagram.com/build_with_john/" },
              { label:"Instagram (Ministry) — @pstjohnakinola", href:"https://www.instagram.com/pstjohnakinola/" },
              { label:"Facebook",                     href:"https://web.facebook.com/johnayomide.akinola" },
              { label:"The Refuel Experience",        href:"https://www.therefuelexperience.live/" },
            ].map((s,i,arr)=>(
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0.8rem 0", borderBottom:i<arr.length-1?"1px solid var(--border)":"none", textDecoration:"none", transition:"opacity 0.15s" }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.opacity="0.7"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.opacity="1"}>
                <span style={{ fontSize:"0.88rem", color:"var(--text)", fontWeight:400 }}>{s.label}</span>
                <ArrowUpRight size={14} style={{ color:"var(--text3)" }}/>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="divider" />

        <motion.div {...fade(0)} style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem" }}>
          <Link href="/tech"     style={{ padding:"0.6rem 1.2rem", background:"var(--text)", color:"var(--bg)", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.82rem", textDecoration:"none", borderRadius:"7px" }}>View Portfolio</Link>
          <Link href="/book"     style={{ padding:"0.6rem 1.2rem", background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.82rem", textDecoration:"none", borderRadius:"7px" }}>Free Book</Link>
          <Link href="/writing"  style={{ padding:"0.6rem 1.2rem", background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.82rem", textDecoration:"none", borderRadius:"7px" }}>Writing</Link>
          <Link href="/ministry" style={{ padding:"0.6rem 1.2rem", background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.82rem", textDecoration:"none", borderRadius:"7px" }}>Ministry</Link>
        </motion.div>

      </div>
    </main>
  );
}
