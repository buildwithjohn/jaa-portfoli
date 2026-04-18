"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";

const fade = (d = 0) => ({ initial: { opacity:0,y:16 }, whileInView: { opacity:1,y:0 }, viewport:{ once:true }, transition:{ duration:0.45,delay:d } });

const skills = [
  { cat:"Cloud & IaC",      items:["AWS","Azure","GCP","Terraform","Pulumi","Ansible"] },
  { cat:"Containers",        items:["Docker","Kubernetes","Helm","ArgoCD","Containerd"] },
  { cat:"CI/CD",             items:["GitHub Actions","Jenkins","GitLab CI","CircleCI"] },
  { cat:"Observability",     items:["Prometheus","Grafana","ELK Stack","CloudWatch"] },
  { cat:"Languages",         items:["Python","Bash","TypeScript","Go (basics)"] },
  { cat:"Web",               items:["Next.js","React","Vue 3","Node.js","PostgreSQL","Supabase"] },
];

const projects = [
  /* ── Fullstack & Frontend ─────────────────────────── */
  { title:"S&D Prophetic School LMS",         cat:"Fullstack · LMS",        tags:["Next.js 15","Supabase","Role-Based Auth","Admin Portal","Student Portal"],  desc:"Full learning management system — student and admin portals, role-based auth, progress tracking, and curriculum management.", github:"https://github.com/buildwithjohn/sandd",         live:"https://sandd.abiodunsule.uk" },
  { title:"CrimsonWings Blood Logistics",      cat:"Fullstack · Dashboard",  tags:["Next.js 15","Full-Stack","Operations Dashboard","Marketing Site"],            desc:"Marketing site and internal operations dashboard for a blood logistics company — client-facing and back-office in one platform.", github:"https://github.com/buildwithjohn/crimson",       live:null },
  { title:"Cedar Home Builder",                cat:"Fullstack · PropTech",   tags:["Vue 3","Leaflet.js","Geo-referencing","Vite","Vercel"],                       desc:"Diaspora-focused real estate SPA — interactive Leaflet maps, geo-referenced site data, drone footage, and calendar booking.", github:"https://github.com/Johnprexy/cedar-africa",     live:"https://cedar-africa.vercel.app" },
  { title:"Dokun Idowu Ministry Site",         cat:"Frontend · CMS",        tags:["Next.js 14","Sanity CMS","Vercel","TypeScript"],                               desc:"Ministry website with Sanity CMS for dynamic content — sermons, events, and blog posts managed without touching code.", github:"https://github.com/buildwithjohn/dokun_idowu",   live:null },
  { title:"Gbola Oladosu Ministry Site",        cat:"Frontend",              tags:["React","Vite","TypeScript","Tailwind","Framer Motion"],                        desc:"Clean ministry SPA with sermon media, events, giving integration, and animated page transitions.", github:"https://github.com/buildwithjohn/gbola",         live:null },
  { title:"Dr. Kunle Hamilton Ministry Site",   cat:"Frontend",              tags:["React","Vite","Framer Motion","Cinematic Design"],                             desc:"Cinematic hero design ministry site — full-bleed photography, editorial typography, and immersive scroll animations.", github:"https://github.com/Johnprexy/dkh",              live:null },
  { title:"Mojis Mattel Jewelry Store",         cat:"E-commerce · Frontend", tags:["React","Tailwind","E-commerce","Amsterdam","Booking"],                        desc:"Sustainable jewellery e-commerce SPA for an Amsterdam client — product listings, cart, and training session booking.", github:"https://github.com/buildwithjohn",               live:null },
  { title:"My Africa Family",                   cat:"Fullstack · Social",    tags:["React","Supabase","Realtime","Social Network"],                                desc:"Social networking platform for the African diaspora — realtime posts, messaging, stories, friend requests, and notifications.", github:"https://github.com/buildwithjohn",               live:null },
  { title:"JAA Portfolio",                      cat:"Frontend",              tags:["Next.js","Framer Motion","Five-World Portal","TypeScript"],                    desc:"This portfolio — five-world-portal personal universe concept built in Next.js with animated world transitions.", github:"https://github.com/Johnprexy/jaa-portfoli",     live:"https://www.johnakinola.com" },
  /* ── Platform Engineering ─────────────────────────── */
  { title:"QuickBites",                         cat:"Platform Engineering",  tags:["Node.js","Kubernetes","Prometheus","Grafana","GitHub Actions","PostgreSQL"],  desc:"Production microservices food delivery platform — 5 Node.js services, full K8s orchestration, Prometheus observability.", github:"https://github.com/buildwithjohn",               live:null },
  { title:"AfriMart DevOps Capstone",           cat:"Platform Engineering",  tags:["Terraform","Ansible","Docker","Jenkins","Kubernetes","IaC"],                   desc:"4-week DevOps curriculum capstone — Terraform IaC, Ansible config management, Jenkins pipelines, Kubernetes deployment.", github:"https://github.com/buildwithjohn",               live:null },
  { title:"PaySecure Bank",                     cat:"Cybersecurity",         tags:["PHP","MySQL","Docker","OWASP","Pen Testing"],                                  desc:"Deliberately vulnerable banking app with 20+ OWASP vulnerabilities — built as a cybersecurity capstone for ethical hacking training.", github:"https://github.com/buildwithjohn",               live:null },
  { title:"AssetGPT — Dubai Edge",              cat:"Prompt Engineering",    tags:["AI/ML","Middleware","SaaS","LLM","Dubai","PropTech"],                          desc:"B2B AI middleware for Dubai's 30,000+ licensed brokers — aggregates DLD, RERA, Ejari data into AI-generated investor reports.", github:"#",                                            live:null },
  { title:"BloomyLMS",                          cat:"Platform Engineering",  tags:["Next.js","Neon PostgreSQL","NextAuth","AWS S3","Full-Stack"],                  desc:"End-to-end Learning Management System — course delivery, student onboarding, progress tracking, and instructor dashboard.", github:"https://github.com/buildwithjohn",               live:null },
  { title:"The Refuel Experience",              cat:"Frontend",              tags:["React","Tailwind","Web3Forms","Google Apps Script"],                            desc:"Annual revival conference website — registration flow, automated email reminders, and volunteer management. Live event.", github:"https://github.com/buildwithjohn",               live:"https://www.therefuelexperience.live" },
  { title:"Campus Discipleship Network",        cat:"Frontend",              tags:["Next.js","Tailwind","SPA","Vercel"],                                            desc:"React SPA for a campus Christian discipleship movement — curriculum, chapter registration, resource library, and routing.", github:"https://github.com/buildwithjohn",               live:null },
];

const certs = [
  { title:"AWS Certified Cloud Practitioner", issuer:"Amazon Web Services", year:"2023", color:"#f59e0b" },
  { title:"TRCN Teaching Certification",      issuer:"Teachers Registration Council of Nigeria", year:"2021", color:"#2563eb" },
  { title:"B.Sc Chemistry Education",        issuer:"Federal University, Nigeria", year:"2021", color:"#7c3aed" },
  { title:"M.Sc Information Technology",     issuer:"ESCT University (2024–2026)", year:"In Progress", color:"#059669" },
];

export default function TechPage() {
  return (
    <main style={{ background:"var(--bg)", minHeight:"100vh" }}>
      <Navbar />
      <div style={{ paddingTop:100, paddingBottom:"6rem" }}>

        {/* ── HERO ── */}
        <div className="container" style={{ marginBottom:"4rem" }}>
          <motion.div {...fade(0)}>
            <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"1rem" }}>
              <Image src="/john.jpg" alt="John" width={40} height={40} style={{ borderRadius:"50%", objectFit:"cover", objectPosition:"center 18%", border:"1.5px solid var(--border)", flexShrink:0 }}/>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.95rem", color:"var(--text)" }}>John Ayomide Akinola</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:"var(--text3)" }}>Fullstack Engineer · Cloud · DevOps · Educator</div>
              </div>
            </div>
            <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"0.8rem" }}>
              16 platforms shipped.<br/>All in production.
            </h1>
            <p className="prose" style={{ maxWidth:560, marginBottom:"1.5rem" }}>
              Fullstack Software Engineer with 6+ years building production-grade web applications, platforms, and client sites end to end. I work with startups, agencies, and product teams — React, Next.js, Vue 3, Node.js, Supabase, and cloud infrastructure on AWS. Every project below is real and shipped.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem" }}>
              <motion.a whileHover={{ y:-1 }} href="#contact"
                style={{ padding:"0.65rem 1.5rem", background:"var(--text)", color:"var(--bg)", fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.85rem", textDecoration:"none", borderRadius:"8px", display:"inline-flex", alignItems:"center", gap:"0.4rem" }}>
                Get in Touch
              </motion.a>
              <motion.a whileHover={{ y:-1 }} href="https://www.youtube.com/@buildwithjaa" target="_blank" rel="noreferrer"
                style={{ padding:"0.65rem 1.5rem", background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.85rem", textDecoration:"none", borderRadius:"8px", display:"inline-flex", alignItems:"center", gap:"0.4rem" }}>
                ▶ Build With JAA
              </motion.a>
              <motion.a whileHover={{ y:-1 }} href="https://github.com/buildwithjohn" target="_blank" rel="noreferrer"
                style={{ padding:"0.65rem 1.5rem", background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text2)", fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:"0.85rem", textDecoration:"none", borderRadius:"8px", display:"inline-flex", alignItems:"center", gap:"0.4rem" }}>
                <Github size={14}/> GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="container"><div className="divider" style={{ margin:"0 0 3rem" }}/></div>

        {/* ── SKILLS ── */}
        <div className="container" style={{ marginBottom:"4rem" }}>
          <motion.div {...fade(0)}>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.9rem", color:"var(--text)", marginBottom:"1.2rem", letterSpacing:"-0.01em" }}>Skills & Stack</h2>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
              {skills.map(s=>(
                <div key={s.cat} style={{ display:"flex", gap:"1rem", alignItems:"flex-start", flexWrap:"wrap" }}>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"var(--text3)", minWidth:120, flexShrink:0, paddingTop:"0.1rem" }}>{s.cat}</span>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                    {s.items.map(i=><span key={i} className="tag">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container"><div className="divider" style={{ margin:"0 0 3rem" }}/></div>

        {/* ── CREDENTIALS ── */}
        <div className="container" style={{ marginBottom:"4rem" }}>
          <motion.div {...fade(0)}>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.9rem", color:"var(--text)", marginBottom:"1.2rem", letterSpacing:"-0.01em" }}>Credentials</h2>
            <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
              {certs.map((c,i)=>(
                <div key={c.title} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0.8rem 0", borderBottom:i<certs.length-1?"1px solid var(--border)":"none", gap:"1rem", flexWrap:"wrap" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
                    <div style={{ width:6, height:6, borderRadius:"50%", background:c.color, flexShrink:0 }}/>
                    <div>
                      <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.88rem", color:"var(--text)", fontWeight:500 }}>{c.title}</div>
                      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:"var(--text3)", marginTop:"0.1rem" }}>{c.issuer}</div>
                    </div>
                  </div>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:"var(--text3)", flexShrink:0 }}>{c.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container"><div className="divider" style={{ margin:"0 0 3rem" }}/></div>

        {/* ── PROJECTS ── */}
        <div className="container" style={{ marginBottom:"4rem" }}>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.9rem", color:"var(--text)", marginBottom:"1.2rem", letterSpacing:"-0.01em" }}>All Projects — {projects.length}</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:"0.7rem" }}>
            {projects.map((p,i)=>(
              <motion.div key={p.title} {...fade(i*0.03)}>
                <div className="hover-card" style={{ padding:"1rem 1.1rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"10px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"0.35rem", gap:"0.5rem" }}>
                      <div>
                        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9rem", color:"var(--text)", lineHeight:1.3 }}>{p.title}</h3>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--text3)", letterSpacing:"0.06em" }}>{p.cat}</span>
                      </div>
                      <div style={{ display:"flex", gap:"0.35rem", flexShrink:0, flexWrap:"wrap", justifyContent:"flex-end" }}>
                        {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--green)", textDecoration:"none", border:"1px solid var(--border)", borderRadius:"4px", padding:"0.12rem 0.45rem", whiteSpace:"nowrap" }}>Live ↗</a>}
                        {p.github !== "#" && <a href={p.github} target="_blank" rel="noreferrer" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--text3)", textDecoration:"none", border:"1px solid var(--border)", borderRadius:"4px", padding:"0.12rem 0.45rem", display:"inline-flex", alignItems:"center", gap:"0.25rem", whiteSpace:"nowrap" }}><Github size={10}/>GitHub</a>}
                      </div>
                    </div>
                    <p style={{ fontSize:"0.81rem", color:"var(--text2)", lineHeight:1.65, fontWeight:300, marginBottom:"0.6rem" }}>{p.desc}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
                      {p.tags.map(t=><span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container"><div className="divider" style={{ margin:"0 0 3rem" }}/></div>

        {/* ── CONTACT ── */}
        <div className="container" id="contact">
          <motion.div {...fade(0)}>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.9rem", color:"var(--text)", marginBottom:"1rem", letterSpacing:"-0.01em" }}>Get in touch</h2>
            <p className="prose" style={{ marginBottom:"1.5rem" }}>
              Open to remote opportunities, cloud consulting, DevOps contracts, and speaking. Reach out at{" "}
              <a href="mailto:akinolajohnayomide@gmail.com">akinolajohnayomide@gmail.com</a>
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem" }}>
              {[
                { label:"Email",     href:"mailto:akinolajohnayomide@gmail.com" },
                { label:"LinkedIn",  href:"https://linkedin.com/in/john-ayomide-akinola" },
                { label:"GitHub",    href:"https://github.com/buildwithjohn" },
                { label:"YouTube",   href:"https://www.youtube.com/@buildwithjaa" },
                { label:"Instagram", href:"https://www.instagram.com/build_with_john/" },
                { label:"Facebook",  href:"https://web.facebook.com/johnayomide.akinola" },
              ].map(s=>(
                <a key={s.label} href={s.href} target={s.href.startsWith("http")?"_blank":undefined} rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"0.35rem", padding:"0.4rem 0.9rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"6px", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"var(--text2)", textDecoration:"none", transition:"all 0.15s" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border2)";(e.currentTarget as HTMLElement).style.color="var(--text)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="var(--border)";(e.currentTarget as HTMLElement).style.color="var(--text2)";}}>
                  {s.label} <ArrowUpRight size={11}/>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
