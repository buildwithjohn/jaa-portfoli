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
  { title:"QuickBites",              cat:"Platform Engineering", tags:["Node.js","Kubernetes","Prometheus","GitHub Actions","PostgreSQL"],    desc:"Production microservices food delivery platform — 5 services, full K8s orchestration, Prometheus/Grafana observability, automated CI/CD.",  link:"https://github.com/buildwithjohn" },
  { title:"AfriMart DevOps Capstone",cat:"Platform Engineering", tags:["Terraform","Ansible","Docker","Jenkins","Kubernetes"],                 desc:"4-week DevOps curriculum capstone — full IaC with Terraform, Ansible config management, Jenkins pipelines, Kubernetes deployment.",          link:"https://github.com/buildwithjohn" },
  { title:"PaySecure Bank",          cat:"Cybersecurity",        tags:["PHP","MySQL","Docker","OWASP","Pen Testing"],                          desc:"Deliberately vulnerable banking app with 20+ OWASP vulnerabilities — built as a cybersecurity capstone for ethical hacking training.",         link:"https://github.com/buildwithjohn" },
  { title:"AssetGPT — Dubai Edge",   cat:"Prompt Engineering",   tags:["AI/ML","Middleware","SaaS","LLM","Dubai","PropTech"],                  desc:"B2B AI middleware for Dubai's 30,000+ licensed brokers — aggregates DLD, RERA, Ejari data into AI-generated investor-grade reports.",     link:"#contact" },
  { title:"Cedar Home Builder",       cat:"Full-Stack",           tags:["Vue 3","Leaflet.js","Geo-referencing","Vite","Vercel"],                desc:"Diaspora-focused proptech with interactive Leaflet maps, geo-referenced site data, drone footage integration, and calendar booking.",      link:"https://github.com/buildwithjohn/cedar-africa" },
  { title:"My Africa Family",        cat:"Full-Stack",            tags:["React","Supabase","Realtime","Social","Diaspora"],                     desc:"Social networking platform for Africans abroad — realtime posts, messaging, stories, friend requests, and notifications.",               link:"https://github.com/buildwithjohn" },
  { title:"BloomyLMS",               cat:"Platform Engineering", tags:["Next.js","Neon PostgreSQL","NextAuth","AWS S3","Full-Stack"],           desc:"End-to-end Learning Management System — course delivery, student onboarding, progress tracking, cohort management, instructor dashboard.",  link:"https://github.com/buildwithjohn" },
  { title:"Rev. Gbola Ministry Site",cat:"Web Dev",               tags:["React","TypeScript","Tailwind","Framer Motion","Vercel"],             desc:"Full ministry website — multiple pages, sermon media, events, and giving integration.",                                                    link:"https://github.com/buildwithjohn/gbola" },
  { title:"Adefare Emmanuel Ministries",cat:"Web Dev",            tags:["React","TypeScript","Tailwind","React Router"],                        desc:"10-page ministry website with Framer Motion animations, testimonials, events, sermons, and partner pages.",                              link:"https://github.com/buildwithjohn/adefare-emmanuel" },
  { title:"The Refuel Experience",   cat:"Web Dev",               tags:["React","Tailwind","Web3Forms","Google Apps Script"],                   desc:"Annual conference website with registration, automated email reminders, and volunteer systems. Live event.",                              link:"#" },
  { title:"PrexyLab",                cat:"EdTech",                tags:["React","Monaco Editor","Firebase","Vite"],                             desc:"Collaborative coding lab — Monaco Editor for real-time code editing, Firebase sync for multi-user live collaboration in classes.",         link:"https://github.com/buildwithjohn" },
  { title:"Campus Discipleship Network",cat:"Web Dev",            tags:["Next.js","Tailwind","SPA","Vercel"],                                  desc:"Full React SPA for a Christian campus discipleship movement — curriculum, chapter registration, and resource library.",                    link:"https://github.com/buildwithjohn" },
  { title:"Mojis Mattel",            cat:"E-commerce",            tags:["React","Vercel","E-commerce","Amsterdam"],                            desc:"Amsterdam-based sustainable jewellery social enterprise — product listings, cart, and training booking. European client.",               link:"#" },
  { title:"CrimsonWings Plasma Biologics",cat:"Web Dev",          tags:["React","Tailwind","Investor","Biotech","Healthcare"],                  desc:"Investor-focused single-page website for West Africa's first Plasma Fractionation Plant.",                                               link:"#" },
  { title:"Sons & Daughters LMS",    cat:"Platform Engineering", tags:["Next.js","Supabase","YouTube API","Role-Based Access","Certificates"], desc:"Full LMS for a prophetic training school — role-based access, YouTube-hosted video, certificate generation, and curriculum management.",   link:"https://github.com/buildwithjohn" },
  { title:"KGB Blackstone Ltd",      cat:"Web Dev",               tags:["React","Next.js","Tailwind","Ready Mix Concrete"],                    desc:"Corporate website for a ready-mix concrete company — product catalogue, project showcase, and enquiry system.",                          link:"https://github.com/buildwithjohn" },
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
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:"var(--text3)" }}>Platform Engineer · Cloud Architect · DevOps Instructor</div>
              </div>
            </div>
            <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"0.8rem" }}>
              16 platforms shipped.<br/>All in production.
            </h1>
            <p className="prose" style={{ maxWidth:560, marginBottom:"1.5rem" }}>
              Platform & Cloud Infrastructure Engineer with hands-on experience across AWS, Kubernetes, Terraform, Docker, and CI/CD pipelines. Every project below was built for a real client or a real use case. No tutorial projects.
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
                <a href={p.link} target={p.link.startsWith("http")?"_blank":undefined} rel="noreferrer" style={{ textDecoration:"none", display:"block" }}>
                  <div className="hover-card" style={{ padding:"1rem 1.1rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"10px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"0.35rem", gap:"0.5rem" }}>
                      <div>
                        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9rem", color:"var(--text)", lineHeight:1.3 }}>{p.title}</h3>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:"var(--text3)", letterSpacing:"0.06em" }}>{p.cat}</span>
                      </div>
                      {p.link.startsWith("http") ? <Github size={14} style={{ color:"var(--text3)", flexShrink:0, marginTop:2 }}/> : <ExternalLink size={14} style={{ color:"var(--text3)", flexShrink:0, marginTop:2 }}/>}
                    </div>
                    <p style={{ fontSize:"0.81rem", color:"var(--text2)", lineHeight:1.65, fontWeight:300, marginBottom:"0.6rem" }}>{p.desc}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
                      {p.tags.map(t=><span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </a>
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
