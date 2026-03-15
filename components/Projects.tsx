"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

/* ── Project visual SVGs ── */
function QuickBitesSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(239,68,68,0.06)"/>
      {/* Microservices nodes */}
      {[
        {x:40,y:30,label:"API GW",c:"#ef4444"},{x:130,y:20,label:"Orders",c:"#f59e0b"},
        {x:220,y:30,label:"Users",c:"#3b82f6"},{x:50,y:90,label:"K8s",c:"#7c3aed"},
        {x:140,y:100,label:"Postgres",c:"#059669"},{x:230,y:90,label:"Grafana",c:"#f97316"},
      ].map((n,i)=>(
        <motion.g key={n.label} animate={{opacity:[0.6,1,0.6]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}>
          <rect x={n.x-22} y={n.y-12} width="44" height="24" rx="6" fill={`${n.c}22`} stroke={n.c} strokeWidth="1.2"/>
          <text x={n.x} y={n.y+4} textAnchor="middle" fill={n.c} fontSize="8" fontFamily="'JetBrains Mono',monospace">{n.label}</text>
        </motion.g>
      ))}
      {/* Connection lines */}
      {[[40,30,130,20],[130,20,220,30],[40,30,50,90],[130,20,140,100],[220,30,230,90],[50,90,140,100],[140,100,230,90]].map(([x1,y1,x2,y2],i)=>(
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#ef4444" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.3"
          animate={{opacity:[0.15,0.45,0.15]}} transition={{duration:1.8,repeat:Infinity,delay:i*0.2}}/>
      ))}
      {/* Data packets */}
      <motion.circle r="4" fill="#ef4444" opacity="0.8"
        animate={{cx:[40,130,220],cy:[30,20,30]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}/>
      {/* Prometheus chart */}
      <motion.polyline points="160,130 170,118 180,124 190,110 200,116 210,104 220,112 230,100"
        fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.5"
        animate={{opacity:[0.3,0.7,0.3]}} transition={{duration:2,repeat:Infinity}}/>
    </svg>
  );
}

function AfriMartSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(5,150,105,0.06)"/>
      {/* Pipeline stages */}
      {["Code","Terraform","Ansible","Docker","Jenkins","K8s","Monitor"].map((s,i)=>(
        <motion.g key={s} animate={{opacity:[0.5,1,0.5]}} transition={{duration:1.5,repeat:Infinity,delay:i*0.3}}>
          <rect x={8+i*38} y="50" width="32" height="40" rx="6" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="1"/>
          <text x={24+i*38} y="70" textAnchor="middle" fill="#059669" fontSize="6.5" fontFamily="'JetBrains Mono',monospace">{s}</text>
          {i<6&&<motion.path d={`M${40+i*38} 70 L${46+i*38} 70`} stroke="#059669" strokeWidth="1.5"
            animate={{opacity:[0.3,1,0.3]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.25}}/>}
        </motion.g>
      ))}
      {/* Shopping cart */}
      <motion.g animate={{x:[0,5,0,-5,0],y:[0,-3,0]}} transition={{duration:3,repeat:Infinity}}>
        <circle cx="48" cy="118" r="14" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="1"/>
        <text x="48" y="122" textAnchor="middle" fill="#059669" fontSize="14">🛒</text>
      </motion.g>
      {/* Africa shape hint */}
      <motion.path d="M220 90 Q230 80 240 90 Q250 100 245 115 Q240 128 230 130 Q220 128 215 115 Q210 100 220 90Z"
        fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="1" opacity="0.5"
        animate={{opacity:[0.3,0.6,0.3]}} transition={{duration:3,repeat:Infinity}}/>
    </svg>
  );
}

function PaySecureSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(220,38,38,0.05)"/>
      {/* Bank building */}
      <rect x="90" y="40" width="100" height="70" rx="4" fill="rgba(220,38,38,0.1)" stroke="#dc2626" strokeWidth="1.2"/>
      {[0,1,2,3,4].map(i=>(
        <line key={i} x1={90} y1={40} x2={90+i*25} y2={40} stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>
      ))}
      <rect x="80" y="36" width="120" height="10" rx="2" fill="rgba(220,38,38,0.2)" stroke="#dc2626" strokeWidth="1"/>
      <polygon points="140,18 80,36 200,36" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="1"/>
      {/* Windows */}
      {[[100,56],[140,56],[168,56],[100,84],[140,84],[168,84]].map(([x,y],i)=>(
        <motion.rect key={i} x={x} y={y} width="14" height="14" rx="2"
          fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="0.8"
          animate={{fill:["rgba(220,38,38,0.1)","rgba(220,38,38,0.4)","rgba(220,38,38,0.1)"]}}
          transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
      ))}
      {/* Vulnerability indicators */}
      {[[40,30,"SQL"],[220,40,"XSS"],[25,90,"IDOR"],[235,95,"Auth"]].map(([x,y,t],i)=>(
        <motion.g key={String(t)} animate={{opacity:[0.4,1,0.4],scale:[1,1.1,1]}}
          transition={{duration:1.5,repeat:Infinity,delay:Number(i)*0.5}} style={{transformOrigin:`${x}px ${y}px`}}>
          <circle cx={Number(x)} cy={Number(y)} r="16" fill="rgba(220,38,38,0.12)" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2"/>
          <text x={Number(x)} y={Number(y)+4} textAnchor="middle" fill="#dc2626" fontSize="7.5" fontFamily="'JetBrains Mono',monospace" fontWeight="600">{String(t)}</text>
        </motion.g>
      ))}
      {/* Skull warning */}
      <motion.text x="140" y="130" textAnchor="middle" fontSize="16"
        animate={{opacity:[0.3,0.8,0.3]}} transition={{duration:2,repeat:Infinity}}>💀</motion.text>
    </svg>
  );
}

function AssetGPTSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(234,179,8,0.05)"/>
      {/* Burj Khalifa silhouette */}
      <motion.g animate={{opacity:[0.6,0.9,0.6]}} transition={{duration:3,repeat:Infinity}}>
        <polygon points="140,8 134,60 146,60" fill="rgba(234,179,8,0.3)" stroke="#eab308" strokeWidth="1"/>
        <rect x="130" y="60" width="20" height="50" rx="2" fill="rgba(234,179,8,0.2)" stroke="#eab308" strokeWidth="1"/>
        <rect x="118" y="80" width="44" height="30" rx="2" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="0.8"/>
        <rect x="105" y="98" width="70" height="12" rx="2" fill="rgba(234,179,8,0.12)" stroke="#eab308" strokeWidth="0.8"/>
      </motion.g>
      {/* AI brain nodes */}
      {[[30,40],[50,70],[30,100],[240,35],[260,70],[240,105]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r="8" fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="1"
          animate={{opacity:[0.4,1,0.4],scale:[1,1.2,1]}}
          transition={{duration:1.5,repeat:Infinity,delay:i*0.25}} style={{transformOrigin:`${x}px ${y}px`}}/>
      ))}
      {/* Data flows to building */}
      {[[30,40,118,90],[260,70,185,90]].map(([x1,y1,x2,y2],i)=>(
        <motion.path key={i} d={`M${x1} ${y1} Q${(Number(x1)+Number(x2))/2} ${y1} ${x2} ${y2}`}
          fill="none" stroke="#eab308" strokeWidth="0.8" strokeDasharray="4 3"
          animate={{opacity:[0.2,0.6,0.2]}} transition={{duration:2,repeat:Infinity,delay:i*0.5}}/>
      ))}
      {/* GPT label */}
      <motion.rect x="104" y="118" width="72" height="16" rx="4"
        fill="rgba(234,179,8,0.15)" stroke="#eab308" strokeWidth="0.8"
        animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity}}/>
      <text x="140" y="130" textAnchor="middle" fill="#eab308" fontSize="8" fontFamily="'JetBrains Mono',monospace">AssetGPT AI</text>
    </svg>
  );
}

function MojisSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(236,72,153,0.05)"/>
      {/* Jewelry sparkles */}
      {[[50,30],[90,20],[200,25],[240,40],[60,110],[180,100],[250,105]].map(([x,y],i)=>(
        <motion.g key={i} animate={{opacity:[0,1,0],scale:[0.5,1.2,0.5]}}
          transition={{duration:1.5+i*0.2,repeat:Infinity,delay:i*0.4}} style={{transformOrigin:`${x}px ${y}px`}}>
          <path d={`M${x} ${y-6} L${x} ${y+6} M${x-6} ${y} L${x+6} ${y}`} stroke="#ec4899" strokeWidth="1.2" strokeLinecap="round"/>
          <path d={`M${x-4} ${y-4} L${x+4} ${y+4} M${x+4} ${y-4} L${x-4} ${y+4}`} stroke="#ec4899" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
        </motion.g>
      ))}
      {/* Ring */}
      <motion.g animate={{y:[0,-4,0],rotate:[0,5,-5,0]}} transition={{duration:4,repeat:Infinity}} style={{transformOrigin:"140px 65px"}}>
        <circle cx="140" cy="65" r="28" fill="none" stroke="#ec4899" strokeWidth="3" opacity="0.4"/>
        <circle cx="140" cy="65" r="20" fill="rgba(236,72,153,0.1)" stroke="#ec4899" strokeWidth="2"/>
        <circle cx="140" cy="37" r="8" fill="rgba(236,72,153,0.3)" stroke="#ec4899" strokeWidth="1.5"/>
        <motion.circle cx="140" cy="37" r="5" fill="#ec4899"
          animate={{opacity:[0.5,1,0.5]}} transition={{duration:1.5,repeat:Infinity}}/>
      </motion.g>
      {/* Sustainability leaf */}
      <motion.path d="M220 100 Q230 85 245 90 Q240 108 220 100Z" fill="rgba(5,150,105,0.25)" stroke="#059669" strokeWidth="1"
        animate={{rotate:[0,5,-5,0]}} transition={{duration:3,repeat:Infinity}} style={{transformOrigin:"232px 95px"}}/>
      {/* Amsterdam */}
      <text x="140" y="130" textAnchor="middle" fill="#ec4899" fontSize="8" fontFamily="'JetBrains Mono',monospace" opacity="0.6">Amsterdam 🌍</text>
    </svg>
  );
}

function MyAfricaSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(37,99,235,0.05)"/>
      {/* Africa continent */}
      <motion.path d="M100 20 Q120 15 140 22 Q158 18 168 30 Q178 45 172 62 Q180 78 170 95 Q162 115 148 122 Q132 128 118 120 Q104 112 98 95 Q88 78 90 60 Q88 42 100 20Z"
        fill="rgba(37,99,235,0.12)" stroke="#2563eb" strokeWidth="1.3"
        animate={{scale:[1,1.02,1]}} transition={{duration:3,repeat:Infinity}} style={{transformOrigin:"134px 72px"}}/>
      {/* Connection arcs to diaspora */}
      {[[40,40,"🇬🇧"],[220,35,"🇺🇸"],[240,100,"🇨🇦"],[30,105,"🇩🇪"]].map(([x,y,flag],i)=>(
        <motion.g key={String(flag)} animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity,delay:Number(i)*0.5}}>
          <text x={Number(x)} y={Number(y)} fontSize="14">{String(flag)}</text>
          <motion.path d={`M${Number(x)+8} ${Number(y)-4} Q${(Number(x)+134)/2} ${Math.min(Number(y),72)-20} 130 72`}
            fill="none" stroke="#2563eb" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4"
            animate={{strokeDashoffset:[0,-20]}} transition={{duration:2,repeat:Infinity,ease:"linear"}}/>
        </motion.g>
      ))}
      {/* Supabase realtime pulse */}
      <motion.circle cx="220" cy="90" r="16" fill="rgba(62,207,142,0.15)" stroke="#3ecf8e" strokeWidth="1"
        animate={{scale:[1,1.3,1],opacity:[0.5,0.2,0.5]}} transition={{duration:1.5,repeat:Infinity}} style={{transformOrigin:"220px 90px"}}/>
      <text x="220" y="94" textAnchor="middle" fill="#3ecf8e" fontSize="7.5" fontFamily="'JetBrains Mono',monospace">live</text>
    </svg>
  );
}

function RefuelSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(124,58,237,0.05)"/>
      {/* Cross */}
      <motion.g animate={{opacity:[0.6,1,0.6],scale:[1,1.04,1]}} transition={{duration:2.5,repeat:Infinity}} style={{transformOrigin:"140px 60px"}}>
        <rect x="126" y="20" width="28" height="80" rx="6" fill="rgba(124,58,237,0.18)" stroke="#7c3aed" strokeWidth="1.5"/>
        <rect x="96" y="40" width="88" height="28" rx="6" fill="rgba(124,58,237,0.18)" stroke="#7c3aed" strokeWidth="1.5"/>
      </motion.g>
      {/* Light rays */}
      {[0,45,90,135,180,225,270,315].map((a,i)=>{
        const r=a*Math.PI/180, x1=140+18*Math.cos(r), y1=60+18*Math.sin(r), x2=140+44*Math.cos(r), y2=60+44*Math.sin(r);
        return (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
            animate={{opacity:[0.2,0.7,0.2],scaleX:[1,1.2,1]}}
            transition={{duration:1.5,repeat:Infinity,delay:i*0.18}} style={{transformOrigin:`${x1}px ${y1}px`}}/>
        );
      })}
      {/* Registration form */}
      <motion.g animate={{y:[0,-2,0]}} transition={{duration:3,repeat:Infinity}}>
        <rect x="190" y="75" width="75" height="52" rx="6" fill="rgba(124,58,237,0.12)" stroke="#7c3aed" strokeWidth="1"/>
        {[0,1,2].map(i=>(
          <rect key={i} x="197" y={83+i*14} width="60" height="7" rx="2" fill="rgba(124,58,237,0.2)" stroke="#7c3aed" strokeWidth="0.6"/>
        ))}
      </motion.g>
      <text x="140" y="128" textAnchor="middle" fill="#7c3aed" fontSize="8" fontFamily="'JetBrains Mono',monospace" opacity="0.6">THE REFUEL EXPERIENCE</text>
    </svg>
  );
}

function PrexyLabSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(6,182,212,0.05)"/>
      {/* Code editor */}
      <rect x="15" y="15" width="165" height="110" rx="8" fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth="1.2"/>
      {/* Title bar */}
      <rect x="15" y="15" width="165" height="20" rx="8" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="1"/>
      {[0,1,2].map(i=>(
        <circle key={i} cx={27+i*12} cy="25" r="4" fill={["#ef4444","#f59e0b","#22c55e"][i]} opacity="0.7"/>
      ))}
      {/* Code lines */}
      {[
        {x:24,y:52,w:60,c:"#f59e0b"},{x:24,y:64,w:90,c:"#06b6d4"},
        {x:24,y:76,w:70,c:"#a78bfa"},{x:24,y:88,w:100,c:"#06b6d4"},
        {x:24,y:100,w:55,c:"#f59e0b"},{x:24,y:112,w:80,c:"#a78bfa"},
      ].map((l,i)=>(
        <motion.rect key={i} x={l.x} y={l.y} width={l.w} height="5" rx="2"
          fill={l.c} opacity="0.5"
          animate={{width:[l.w-10,l.w+5,l.w]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
      ))}
      {/* Cursor blink */}
      <motion.rect x="24" y="52" width="2" height="70" fill="#06b6d4" opacity="0.7"
        animate={{opacity:[1,0,1]}} transition={{duration:1,repeat:Infinity}}/>
      {/* Collaboration avatars */}
      {[[200,35,"#ef4444"],[230,50,"#f59e0b"],[215,80,"#22c55e"],[245,100,"#a78bfa"]].map(([x,y,c],i)=>(
        <motion.g key={i} animate={{scale:[1,1.15,1],opacity:[0.6,1,0.6]}}
          transition={{duration:2,repeat:Infinity,delay:Number(i)*0.5}} style={{transformOrigin:`${x}px ${y}px`}}>
          <circle cx={Number(x)} cy={Number(y)} r="14" fill={`${c}22`} stroke={String(c)} strokeWidth="1.2"/>
          <text x={Number(x)} y={Number(y)+5} textAnchor="middle" fill={String(c)} fontSize="10">👤</text>
        </motion.g>
      ))}
      {/* Firebase realtime line */}
      <motion.path d={`M183 75 Q192 60 200 50`} fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3 2"
        animate={{opacity:[0.2,0.6,0.2]}} transition={{duration:1.5,repeat:Infinity}}/>
    </svg>
  );
}

function CedarSVG() {
  return (
    <svg viewBox="0 0 280 140" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="280" height="140" fill="rgba(5,150,105,0.05)"/>
      {/* House */}
      <motion.g animate={{y:[0,-3,0]}} transition={{duration:3.5,repeat:Infinity}}>
        <polygon points="140,25 90,60 190,60" fill="rgba(5,150,105,0.2)" stroke="#059669" strokeWidth="1.3"/>
        <rect x="98" y="60" width="84" height="55" rx="3" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="1.3"/>
        <rect x="126" y="88" width="28" height="27" rx="2" fill="rgba(5,150,105,0.2)" stroke="#059669" strokeWidth="1"/>
        {[[106,68,20,18],[154,68,20,18]].map(([x,y,w,h],i)=>(
          <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="0.8"/>
        ))}
      </motion.g>
      {/* Diaspora flags */}
      {[["🇳🇬",40,45],["🇬🇧",220,30],["🇺🇸",240,85],["🇨🇦",30,100]].map(([f,x,y])=>(
        <motion.text key={String(f)} x={Number(x)} y={Number(y)} fontSize="16"
          animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity,delay:Math.random()*1.5}}>
          {String(f)}
        </motion.text>
      ))}
      {/* Money flow line */}
      <motion.path d="M55 55 Q100 20 140 40 Q180 20 225 50"
        fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"
        animate={{strokeDashoffset:[0,-28]}} transition={{duration:2,repeat:Infinity,ease:"linear"}}/>
      <text x="140" y="130" textAnchor="middle" fill="#059669" fontSize="8" fontFamily="'JetBrains Mono',monospace" opacity="0.6">Diaspora Property Investment</text>
    </svg>
  );
}

const projectVisuals: Record<string,React.FC> = {
  quickbites:QuickBitesSVG, afrimart:AfriMartSVG, paysecure:PaySecureSVG,
  assetgpt:AssetGPTSVG, mojis:MojisSVG, myafrica:MyAfricaSVG,
  refuel:RefuelSVG, prexylab:PrexyLabSVG, cedar:CedarSVG,
};

const projects = [
  { id:"quickbites", num:"01", cat:"Engineering",     color:"#ef4444", title:"QuickBites",              desc:"Microservices food delivery platform with full observability stack, Kubernetes orchestration, and automated CI/CD.",                            tags:["Node.js","Kubernetes","Prometheus","GitHub Actions"], link:"https://github.com/Johnprexy" },
  { id:"afrimart",   num:"02", cat:"DevOps Capstone", color:"#059669", title:"AfriMart",                desc:"Full-stack e-commerce platform — a 4-week DevOps capstone covering Terraform, Ansible, Docker, Jenkins, and Kubernetes.",                    tags:["Terraform","Ansible","Docker","Jenkins"],             link:"https://github.com/Johnprexy" },
  { id:"paysecure",  num:"03", cat:"Security",        color:"#dc2626", title:"PaySecure Bank",          desc:"Deliberately vulnerable Nigerian banking app with 20+ documented vulnerabilities for ethical hacking training.",                              tags:["Ethical Hacking","OWASP","Pen Testing"],              link:"https://github.com/Johnprexy" },
  { id:"assetgpt",   num:"04", cat:"AI Platform",     color:"#eab308", title:"AssetGPT — Dubai Edge",   desc:"Middleware intelligence platform for Dubai's licensed real estate brokers and institutional investors via SZElite.",                         tags:["AI/ML","Middleware","Real Estate","Dubai"],           link:"#contact" },
  { id:"mojis",      num:"05", cat:"E-commerce",      color:"#ec4899", title:"Mojis Mattel",            desc:"Amsterdam-based sustainable jewelry social enterprise e-commerce site. React on Vercel for a European client.",                              tags:["React","Vercel","E-commerce"],                       link:"#contact" },
  { id:"myafrica",   num:"06", cat:"Social Network",  color:"#2563eb", title:"My Africa Family",        desc:"Social networking platform for Africans in the diaspora — profiles, posts, messaging, stories, notifications.",                              tags:["React","Supabase","Realtime"],                       link:"https://github.com/Johnprexy" },
  { id:"refuel",     num:"07", cat:"Ministry",        color:"#7c3aed", title:"The Refuel Experience",   desc:"Ministry conference website with registration flow via Web3Forms and Google Apps Script backend.",                                            tags:["React","Tailwind","Web3Forms"],                      link:"#contact" },
  { id:"prexylab",   num:"08", cat:"EdTech",          color:"#06b6d4", title:"PrexyLab",                desc:"Collaborative coding lab for DevOps classes. Real-time code editing with Monaco Editor and Firebase sync.",                                  tags:["React","Monaco Editor","Firebase"],                  link:"https://github.com/Johnprexy" },
  { id:"cedar",      num:"09", cat:"Diaspora",        color:"#059669", title:"Cedar Africa",            desc:"Property investment landing page connecting overseas Africans with real estate opportunities back home.",                                     tags:["React","Landing Page","Property"],                   link:"#contact" },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="Engineering Projects" title="Built. Shipped.<br/>Production-grade."
          subtitle="Real platforms, real architecture, real impact — from microservices to social networks to real estate intelligence platforms." />

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))", gap:"1.4rem" }}>
          {projects.map((p, i) => {
            const Visual = projectVisuals[p.id];
            return (
              <motion.div key={p.id}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:(i%3)*0.1 }}
                whileHover={{ y:-5, boxShadow:"var(--shadow-lg)" }}
                style={{ borderRadius:"18px", overflow:"hidden", background:"var(--surface)", border:"1px solid var(--border)", boxShadow:"var(--shadow-sm)", transition:"all 0.3s" }}
              >
                {/* Visual illustration */}
                <div style={{ height:140, position:"relative", overflow:"hidden", background:`${p.color}0d`, borderBottom:"1px solid var(--border)" }}>
                  <Visual />
                  {/* Num badge */}
                  <div style={{ position:"absolute", top:10, left:12, width:28, height:28, borderRadius:"50%", background:p.color, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.68rem", fontWeight:800, color:"#fff" }}>{p.num}</span>
                  </div>
                  {/* Cat badge */}
                  <div style={{ position:"absolute", top:10, right:12, padding:"0.18rem 0.6rem", background:"var(--surface)", border:`1px solid ${p.color}44`, borderRadius:"20px", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.6rem", color:p.color, fontWeight:600 }}>
                    {p.cat}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding:"1.3rem 1.4rem 1.5rem" }}>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.08rem", color:"var(--text)", marginBottom:"0.55rem" }}>{p.title}</h3>
                  <p style={{ fontSize:"0.83rem", color:"var(--text2)", lineHeight:1.78, fontWeight:300, marginBottom:"1rem" }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem", marginBottom:"1rem" }}>
                    {p.tags.map(t=>(
                      <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.61rem", color:p.color, background:`${p.color}12`, border:`1px solid ${p.color}30`, borderRadius:"5px", padding:"0.2rem 0.5rem" }}>{t}</span>
                    ))}
                  </div>
                  <a href={p.link} target={p.link.startsWith("http")?"_blank":undefined} rel="noreferrer"
                    style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.73rem", color:"var(--text3)", textDecoration:"none", transition:"color 0.2s" }}
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
