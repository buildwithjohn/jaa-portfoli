"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  { slug:"from-chemistry-to-cloud",   title:"From Chemistry Class to Cloud — My Unfiltered Story",              date:"Mar 1, 2026",  tag:"Career",             time:"8 min",  live:true  },
  { slug:"kubernetes-production",     title:"Running Kubernetes in Production — What Nobody Tells You",           date:"Mar 10, 2026", tag:"Platform Engineering",time:"12 min", live:true  },
  { slug:"terraform-lessons",        title:"5 Terraform Lessons From Real Infrastructure Projects",               date:"Mar 18, 2026", tag:"Platform Engineering",time:"10 min", live:true  },
  { slug:"devops-africa",            title:"Breaking Into DevOps From Africa — The Honest Guide",                 date:"Coming soon",  tag:"Career",             time:"15 min", live:false },
  { slug:"aws-certifications",       title:"Are AWS Certifications Worth It in 2026?",                            date:"Coming soon",  tag:"Cloud",              time:"7 min",  live:false },
  { slug:"prompt-engineering-prod",  title:"What Prompt Engineering Actually Looks Like in Production",           date:"Coming soon",  tag:"AI",                 time:"9 min",  live:false },
];

const fade = (d=0) => ({ initial:{opacity:0,y:16}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.45,delay:d} });

export default function WritingPage() {
  return (
    <main style={{ background:"var(--bg)", minHeight:"100vh" }}>
      <Navbar />
      <div className="container" style={{ paddingTop:100, paddingBottom:"6rem" }}>
        <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }} style={{ marginBottom:"3rem" }}>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(1.6rem,4vw,2.2rem)", color:"var(--text)", letterSpacing:"-0.03em", marginBottom:"0.6rem" }}>Writing</h1>
          <p className="prose">Tech articles, engineering deep-dives, and career writing from someone who builds in production every day. No filler. No fluff.</p>
        </motion.div>

        <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
          {posts.map((p,i)=>(
            <motion.div key={p.slug} {...fade(i*0.04)}>
              {p.live ? (
                <Link href={`/writing/${p.slug}`} style={{ textDecoration:"none", display:"block" }}>
                  <div style={{ padding:"1.1rem 0", borderBottom:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem", transition:"opacity 0.15s" }}
                    onMouseEnter={e=>(e.currentTarget as HTMLElement).style.opacity="0.7"}
                    onMouseLeave={e=>(e.currentTarget as HTMLElement).style.opacity="1"}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.25rem", flexWrap:"wrap" }}>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--cyan)", background:"var(--cyan-dim)", padding:"0.15rem 0.5rem", borderRadius:"4px" }}>{p.tag}</span>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--text3)", display:"flex", alignItems:"center", gap:"0.25rem" }}><Clock size={10}/>{p.time}</span>
                      </div>
                      <span style={{ fontSize:"0.92rem", color:"var(--text)", fontWeight:500, lineHeight:1.4 }}>{p.title}</span>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", flexShrink:0 }}>
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:"var(--text3)" }}>{p.date}</span>
                      <ArrowUpRight size={14} style={{ color:"var(--text3)" }}/>
                    </div>
                  </div>
                </Link>
              ) : (
                <div style={{ padding:"1.1rem 0", borderBottom:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem", opacity:0.4 }}>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.25rem", flexWrap:"wrap" }}>
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--text3)", background:"var(--bg2)", padding:"0.15rem 0.5rem", borderRadius:"4px" }}>{p.tag}</span>
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--text3)", display:"flex", alignItems:"center", gap:"0.25rem" }}><Clock size={10}/>{p.time}</span>
                    </div>
                    <span style={{ fontSize:"0.92rem", color:"var(--text)", fontWeight:500, lineHeight:1.4 }}>{p.title}</span>
                  </div>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:"var(--text3)", background:"var(--bg2)", padding:"0.18rem 0.55rem", borderRadius:"4px", flexShrink:0 }}>Soon</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="divider" />
        <div style={{ textAlign:"center" }}>
          <p style={{ fontSize:"0.84rem", color:"var(--text2)", marginBottom:"1rem", fontWeight:300 }}>Get notified when new articles drop.</p>
          <div style={{ display:"flex", gap:"0.6rem", maxWidth:380, margin:"0 auto", flexWrap:"wrap" }}>
            <input type="email" placeholder="your@email.com" style={{ flex:1, minWidth:180, padding:"0.7rem 0.9rem", borderRadius:"7px", border:"1px solid var(--border)", background:"var(--surface)", color:"var(--text)", fontSize:"0.88rem", outline:"none", fontFamily:"'DM Sans',sans-serif" }}/>
            <button style={{ padding:"0.7rem 1.2rem", background:"var(--text)", color:"var(--bg)", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.82rem", border:"none", borderRadius:"7px", cursor:"pointer", whiteSpace:"nowrap" }}>Subscribe</button>
          </div>
        </div>
      </div>
    </main>
  );
}
