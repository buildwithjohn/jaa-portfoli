"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

/* ── SVG Visuals (kept from previous version, condensed) ── */
function QuickBitesSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
      <rect width="280" height="140" fill="rgba(239,68,68,0.06)"/>
      {[{x:40,y:30,l:"API GW",c:"#ef4444"},{x:130,y:20,l:"Orders",c:"#f59e0b"},{x:220,y:30,l:"Users",c:"#3b82f6"},{x:50,y:90,l:"K8s",c:"#7c3aed"},{x:140,y:100,l:"Postgres",c:"#059669"},{x:230,y:90,l:"Grafana",c:"#f97316"}].map((n,i)=>(
        <motion.g key={n.l} animate={{opacity:[0.6,1,0.6]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}>
          <rect x={n.x-22} y={n.y-12} width="44" height="24" rx="6" fill={`${n.c}22`} stroke={n.c} strokeWidth="1.2"/>
          <text x={n.x} y={n.y+4} textAnchor="middle" fill={n.c} fontSize="8" fontFamily="'JetBrains Mono',monospace">{n.l}</text>
        </motion.g>
      ))}
      {[[40,30,130,20],[130,20,220,30],[40,30,50,90],[130,20,140,100],[220,30,230,90],[50,90,140,100],[140,100,230,90]].map(([x1,y1,x2,y2],i)=>(
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ef4444" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.3" animate={{opacity:[0.15,0.45,0.15]}} transition={{duration:1.8,repeat:Infinity,delay:i*0.2}}/>
      ))}
      <motion.circle r="4" fill="#ef4444" animate={{cx:[40,130,220],cy:[30,20,30]}} transition={{duration:3,repeat:Infinity}}/>
      <motion.polyline points="155,130 165,118 175,124 185,110 195,116 205,104 215,112 225,100" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.5" animate={{opacity:[0.3,0.7,0.3]}} transition={{duration:2,repeat:Infinity}}/>
    </svg>
  );
}
function AfriMartSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
      <rect width="280" height="140" fill="rgba(5,150,105,0.06)"/>
      {["Code","Terraform","Ansible","Docker","Jenkins","K8s","Monitor"].map((s,i)=>(
        <motion.g key={s} animate={{opacity:[0.5,1,0.5]}} transition={{duration:1.5,repeat:Infinity,delay:i*0.3}}>
          <rect x={8+i*38} y="50" width="32" height="40" rx="6" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="1"/>
          <text x={24+i*38} y="70" textAnchor="middle" fill="#059669" fontSize="6.5" fontFamily="'JetBrains Mono',monospace">{s}</text>
          {i<6&&<motion.path d={`M${40+i*38} 70 L${46+i*38} 70`} stroke="#059669" strokeWidth="1.5" animate={{opacity:[0.3,1,0.3]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.25}}/>}
        </motion.g>
      ))}
      <motion.g animate={{x:[0,5,0,-5,0],y:[0,-3,0]}} transition={{duration:3,repeat:Infinity}}>
        <circle cx="48" cy="118" r="14" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="1"/>
        <text x="48" y="122" textAnchor="middle" fill="#059669" fontSize="14">🛒</text>
      </motion.g>
    </svg>
  );
}
function PaySecureSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
      <rect width="280" height="140" fill="rgba(220,38,38,0.05)"/>
      <rect x="90" y="40" width="100" height="70" rx="4" fill="rgba(220,38,38,0.1)" stroke="#dc2626" strokeWidth="1.2"/>
      <rect x="80" y="36" width="120" height="10" rx="2" fill="rgba(220,38,38,0.2)" stroke="#dc2626" strokeWidth="1"/>
      <polygon points="140,18 80,36 200,36" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="1"/>
      {[[100,56],[140,56],[168,56],[100,84],[140,84],[168,84]].map(([x,y],i)=>(
        <motion.rect key={i} x={x} y={y} width="14" height="14" rx="2" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="0.8" animate={{fill:["rgba(220,38,38,0.1)","rgba(220,38,38,0.4)","rgba(220,38,38,0.1)"]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
      ))}
      {[[40,30,"SQL"],[220,40,"XSS"],[25,90,"IDOR"],[235,95,"Auth"]].map(([x,y,t])=>(
        <motion.g key={String(t)} animate={{opacity:[0.4,1,0.4]}} transition={{duration:1.5,repeat:Infinity,delay:Math.random()}}>
          <circle cx={Number(x)} cy={Number(y)} r="16" fill="rgba(220,38,38,0.12)" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2"/>
          <text x={Number(x)} y={Number(y)+4} textAnchor="middle" fill="#dc2626" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">{String(t)}</text>
        </motion.g>
      ))}
    </svg>
  );
}
function GenericSVG({ color, icon, label }: { color: string; icon: string; label: string }) {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%",position:"absolute",inset:0}}>
      <rect width="280" height="140" fill={`${color}0a`}/>
      {[1,2,3].map(i=>(
        <motion.circle key={i} cx="140" cy="70" r={i*28} fill="none" stroke={color} strokeWidth="0.6" opacity="0.2"
          animate={{scale:[1,1.05,1],opacity:[0.15,0.35,0.15]}} transition={{duration:3,repeat:Infinity,delay:i*0.6}} style={{transformOrigin:"140px 70px"}}/>
      ))}
      <motion.text x="140" y="85" textAnchor="middle" fontSize="40" animate={{y:[80,74,80]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}>{icon}</motion.text>
      <text x="140" y="120" textAnchor="middle" fill={color} fontSize="9" fontFamily="'JetBrains Mono',monospace" opacity="0.7" letterSpacing="2">{label}</text>
    </svg>
  );
}

const projects = [
  /* ── Platform Engineering ─────────────────────────── */
  {
    id:"quickbites", num:"01", cat:"Platform Engineering", color:"#ef4444",
    title:"QuickBites", Visual:QuickBitesSVG,
    desc:"Production microservices food delivery platform — 5 Node.js services, PostgreSQL, full Prometheus/Grafana observability, Kubernetes on Minikube, and automated CI/CD via GitHub Actions.",
    tags:["Node.js","PostgreSQL","Kubernetes","Prometheus","Grafana","GitHub Actions"],
    link:"https://github.com/Johnprexy",
  },
  {
    id:"afrimart", num:"02", cat:"Platform Engineering", color:"#059669",
    title:"AfriMart DevOps Capstone", Visual:AfriMartSVG,
    desc:"Full-stack e-commerce platform built as a 4-week DevOps curriculum capstone — Terraform IaC, Ansible config management, Docker, Jenkins pipelines, Kubernetes, and Prometheus monitoring.",
    tags:["Terraform","Ansible","Docker","Jenkins","Kubernetes","IaC"],
    link:"https://github.com/Johnprexy",
  },
  {
    id:"paysecure", num:"03", cat:"Platform Engineering", color:"#dc2626",
    title:"PaySecure Bank", Visual:PaySecureSVG,
    desc:"Deliberately vulnerable Nigerian banking app (PHP + MySQL + Docker) with 20+ documented OWASP vulnerabilities — built as a cybersecurity capstone for ethical hacking training.",
    tags:["PHP","MySQL","Docker","OWASP","Pen Testing","Cybersecurity"],
    link:"https://github.com/Johnprexy",
  },
  {
    id:"assetgpt", num:"04", cat:"Prompt Engineering · AI", color:"#eab308",
    title:"AssetGPT — Dubai Edge",
    Visual:()=><GenericSVG color="#eab308" icon="🏙️" label="AI REAL ESTATE MIDDLEWARE"/>,
    desc:"B2B middleware intelligence platform for Dubai's 30,000+ licensed brokers. Aggregates DLD, RERA, Ejari, and Dubai Pulse data into AI-generated investment reports — seed raise: USD 250k.",
    tags:["AI/ML","Prompt Engineering","Middleware","SaaS","Dubai","LLM"],
    link:"#contact",
  },
  /* ── Web Development ───────────────────────────────── */
  {
    id:"cedar", num:"05", cat:"Web Dev · Vue 3", color:"#059669",
    title:"Cedar Home Builder",
    Visual:()=><GenericSVG color="#059669" icon="🏠" label="DIASPORA PROPTECH"/>,
    desc:"Vue 3 + Vite diaspora-focused property tech platform for Nigerians abroad. Features interactive Leaflet.js maps, geo-referenced site data, drone footage integration, and calendar booking.",
    tags:["Vue 3","Vite","Leaflet.js","Geo-Referencing","Vercel"],
    link:"https://github.com/Johnprexy/cedar-africa",
  },
  {
    id:"myafrica", num:"06", cat:"Web Dev · Full-Stack", color:"#2563eb",
    title:"My Africa Family",
    Visual:()=><GenericSVG color="#2563eb" icon="🌍" label="DIASPORA SOCIAL NETWORK"/>,
    desc:"Social networking platform for Africans in the diaspora — real-time posts, messaging, stories, friend requests, and notifications. Built with React and Supabase realtime subscriptions.",
    tags:["React","Supabase","Realtime","Social","Diaspora"],
    link:"https://github.com/Johnprexy",
  },
  {
    id:"bloomy-site", num:"07", cat:"Web Dev · Next.js", color:"#7c3aed",
    title:"Bloomy Technologies Website",
    Visual:()=><GenericSVG color="#7c3aed" icon="🎓" label="TECH SCHOOL PLATFORM"/>,
    desc:"Full Next.js + TypeScript + Tailwind redesign of Bloomy Technologies' website. 8 courses, live class video showcase, testimonials carousel, WhatsApp integration, and full mobile responsiveness.",
    tags:["Next.js","TypeScript","Tailwind","Framer Motion"],
    link:"https://github.com/Johnprexy",
  },
  {
    id:"gbola", num:"08", cat:"Web Dev · React", color:"#7c3aed",
    title:"Rev. Gbola Ministry Website",
    Visual:()=><GenericSVG color="#7c3aed" icon="✝️" label="MINISTRY PLATFORM"/>,
    desc:"Full ministry website for Rev. Adegbola Oladosu — React + TypeScript + Tailwind CSS v4 + Framer Motion. Multiple pages, sermon media, events, and giving integration. Deployed to Vercel.",
    tags:["React","TypeScript","Tailwind CSS","Framer Motion","Vercel"],
    link:"https://github.com/Johnprexy/gbola",
  },
  {
    id:"adefare", num:"09", cat:"Web Dev · React", color:"#d97706",
    title:"Adefare Emmanuel Ministries",
    Visual:()=><GenericSVG color="#d97706" icon="🙏" label="FULL MINISTRY SITE"/>,
    desc:"10-page ministry website with React Router, Framer Motion animations, testimonials, events, sermons, and partner/giving pages. Navy/Gold/Ivory palette. Fully responsive.",
    tags:["React","TypeScript","Tailwind","Framer Motion","React Router"],
    link:"https://github.com/Johnprexy/adefare-emmanuel",
  },
  {
    id:"refuel", num:"10", cat:"Web Dev · React", color:"#a855f7",
    title:"The Refuel Experience",
    Visual:()=><GenericSVG color="#a855f7" icon="⚡" label="CONFERENCE WEBSITE"/>,
    desc:"Ministry conference website for The Refuel Experience 2025. Registration flow via Web3Forms + Google Apps Script automated email reminders. Fully deployed and live.",
    tags:["React","Tailwind","Web3Forms","Google Apps Script"],
    link:"#contact",
  },
  {
    id:"prexylab", num:"11", cat:"EdTech · Platform", color:"#06b6d4",
    title:"PrexyLab",
    Visual:()=><GenericSVG color="#06b6d4" icon="💻" label="COLLABORATIVE CODE LAB"/>,
    desc:"Collaborative coding lab web app for DevOps and cloud classes — Monaco Editor for real-time code editing, Firebase sync for multi-user collaboration, used live in Bloomy Technologies classes.",
    tags:["React","Vite","Monaco Editor","Firebase","EdTech"],
    link:"https://github.com/Johnprexy",
  },
  {
    id:"cdn", num:"12", cat:"Web Dev · React", color:"#059669",
    title:"Campus Discipleship Network",
    Visual:()=><GenericSVG color="#059669" icon="🎓" label="CDN DISCIPLESHIP PLATFORM"/>,
    desc:"Full React SPA for a Christian campus discipleship movement — The Bridge Reformation Model, Academy curriculum, campus chapter registration, and resource library. Resolved Vercel SPA routing.",
    tags:["React","Next.js","Tailwind","SPA","Vercel"],
    link:"https://github.com/Johnprexy",
  },
  {
    id:"mojis", num:"13", cat:"E-commerce · React", color:"#ec4899",
    title:"Mojis Mattel",
    Visual:()=><GenericSVG color="#ec4899" icon="💎" label="SUSTAINABLE JEWELLERY"/>,
    desc:"Amsterdam-based sustainable jewellery social enterprise e-commerce platform — product listings, cart, booking/training integration. Built in React and deployed on Vercel for a European client.",
    tags:["React","Vercel","E-commerce","Amsterdam","Booking"],
    link:"#contact",
  },
  {
    id:"crimsonwings", num:"14", cat:"Web Dev · React", color:"#dc2626",
    title:"CrimsonWings Plasma Biologics",
    Visual:()=><GenericSVG color="#dc2626" icon="🩸" label="BIOTECH INVESTOR SITE"/>,
    desc:"Investor-focused single-page website for West Africa's first Plasma Fractionation Plant. Biotech aesthetic, team profiles, vision timeline, investor teaser download, and contact form.",
    tags:["React","Tailwind","Investor","Biotech","Healthcare"],
    link:"#contact",
  },
  {
    id:"bloomylms", num:"15", cat:"Platform Engineering", color:"#2563eb",
    title:"BloomyLMS",
    Visual:()=><GenericSVG color="#2563eb" icon="📚" label="LEARNING MANAGEMENT SYSTEM"/>,
    desc:"End-to-end Learning Management System for Bloomy Technologies — course upload, student onboarding, progress tracking, cohort management, and instructor dashboard. Built for a real tech school.",
    tags:["Full-Stack","LMS","Node.js","React","PostgreSQL"],
    link:"https://github.com/Johnprexy",
  },
  {
    id:"zoho-platform", num:"16", cat:"Prompt Engineering · Platform", color:"#f59e0b",
    title:"Swelerion Office Platform",
    Visual:()=><GenericSVG color="#f59e0b" icon="🏢" label="ZOHO-STYLE OFFICE SUITE"/>,
    desc:"Full-stack dual-office collaboration platform (Lagos + USA) replicating Zoho Chat and Zoho Meeting — real-time messaging, video conferencing, cross-timezone presence, and admin dashboard.",
    tags:["Full-Stack","WebSocket","Real-Time","Collaboration","Platform"],
    link:"#contact",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="Engineering Projects" title="16 projects.<br/>All shipped."
          subtitle="Platform engineering, AI-powered platforms, full-stack web apps, DevOps capstones, and prompt-engineered SaaS — every one of these is real, built, and deployed." />

        {/* Category filter pills */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"2.5rem" }}>
          {["All","Platform Engineering","Prompt Engineering · AI","Web Dev","EdTech"].map((cat)=>(
            <span key={cat} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.66rem", padding:"0.3rem 0.75rem", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"20px", color:"var(--text2)", letterSpacing:"0.05em", cursor:"default" }}>
              {cat}
            </span>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => {
            const Visual = p.Visual;
            return (
              <motion.div key={p.id}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:(i%3)*0.08 }}
                whileHover={{ y:-5, boxShadow:"var(--shadow-lg)" }}
                style={{ borderRadius:"18px", overflow:"hidden", background:"var(--surface)", border:"1px solid var(--border)", boxShadow:"var(--shadow-sm)", transition:"all 0.3s" }}
              >
                {/* Illustration */}
                <div style={{ height:140, position:"relative", overflow:"hidden", background:`${p.color}0d`, borderBottom:"1px solid var(--border)" }}>
                  <Visual />
                  <div style={{ position:"absolute", top:10, left:12, width:28, height:28, borderRadius:"50%", background:p.color, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.65rem", fontWeight:800, color:"#fff" }}>{p.num}</span>
                  </div>
                  <div style={{ position:"absolute", top:10, right:12, padding:"0.18rem 0.6rem", background:"var(--surface)", border:`1px solid ${p.color}44`, borderRadius:"20px", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.58rem", color:p.color, fontWeight:600, maxWidth:140, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                    {p.cat}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding:"1.3rem 1.4rem 1.5rem" }}>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.05rem", color:"var(--text)", marginBottom:"0.5rem" }}>{p.title}</h3>
                  <p style={{ fontSize:"0.82rem", color:"var(--text2)", lineHeight:1.78, fontWeight:300, marginBottom:"1rem" }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem", marginBottom:"1rem" }}>
                    {p.tags.map(t=>(
                      <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:p.color, background:`${p.color}12`, border:`1px solid ${p.color}30`, borderRadius:"5px", padding:"0.18rem 0.5rem" }}>{t}</span>
                    ))}
                  </div>
                  <a href={p.link} target={p.link.startsWith("http")?"_blank":undefined} rel="noreferrer"
                    style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", color:"var(--text3)", textDecoration:"none", transition:"color 0.2s" }}
                    onMouseEnter={e=>(e.currentTarget.style.color=p.color)}
                    onMouseLeave={e=>(e.currentTarget.style.color="var(--text3)")}>
                    {p.link.startsWith("http")?<><Github size={12}/>View on GitHub</>:<><ExternalLink size={12}/>Enquire →</>}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
