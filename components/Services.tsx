"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

function CloudEngineeringSVG() {
  return (
    <svg viewBox="0 0 260 110" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="260" height="110" fill="rgba(37,99,235,0.04)"/>
      {/* AWS/Azure icons */}
      {[{x:40,y:30,label:"AWS",c:"#f59e0b"},{x:130,y:20,label:"Azure",c:"#2563eb"},{x:220,y:30,label:"GCP",c:"#ef4444"}].map((n,i)=>(
        <motion.g key={n.label} animate={{y:[0,-4,0]}} transition={{duration:2.5+i,repeat:Infinity,ease:"easeInOut"}}>
          <rect x={n.x-22} y={n.y-14} width="44" height="28" rx="8" fill={`${n.c}18`} stroke={n.c} strokeWidth="1.2"/>
          <text x={n.x} y={n.y+4} textAnchor="middle" fill={n.c} fontSize="9" fontFamily="'JetBrains Mono',monospace" fontWeight="600">{n.label}</text>
        </motion.g>
      ))}
      {/* K8s wheel center */}
      <motion.g animate={{rotate:360}} transition={{duration:8,repeat:Infinity,ease:"linear"}} style={{transformOrigin:"130px 72px"}}>
        {[0,60,120,180,240,300].map((a,i)=>{
          const r=a*Math.PI/180;
          return <line key={i} x1="130" y1="72" x2={130+16*Math.cos(r)} y2={72+16*Math.sin(r)} stroke="#7c3aed" strokeWidth="1.2" opacity="0.7"/>;
        })}
        <circle cx="130" cy="72" r="6" fill="#7c3aed"/>
      </motion.g>
      {/* Terraform blocks */}
      {[[55,70],[85,65],[95,80]].map(([x,y],i)=>(
        <motion.rect key={i} x={x} y={y} width="18" height="18" rx="3" fill="rgba(124,58,237,0.15)" stroke="#7c3aed" strokeWidth="0.8"
          animate={{opacity:[0.5,1,0.5]}} transition={{duration:1.5,repeat:Infinity,delay:i*0.4}}/>
      ))}
      {/* CI/CD pipeline */}
      <motion.path d="M155 72 L175 60 L195 72 L175 84 Z" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1"
        animate={{scale:[1,1.05,1]}} transition={{duration:2,repeat:Infinity}} style={{transformOrigin:"175px 72px"}}/>
      <text x="175" y="76" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="'JetBrains Mono',monospace">CI/CD</text>
    </svg>
  );
}

function WebDevSVG() {
  return (
    <svg viewBox="0 0 260 110" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="260" height="110" fill="rgba(124,58,237,0.04)"/>
      {/* Monitor */}
      <rect x="60" y="15" width="140" height="80" rx="6" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="1.3"/>
      <rect x="60" y="15" width="140" height="18" rx="6" fill="rgba(124,58,237,0.2)"/>
      {[0,1,2].map(i=><circle key={i} cx={72+i*10} cy="24" r="3" fill={["#ef4444","#f59e0b","#22c55e"][i]} opacity="0.8"/>)}
      {/* Code content */}
      {[
        {y:45,w:80,c:"#f59e0b"},{y:55,w:110,c:"#a78bfa"},
        {y:65,w:90,c:"#06b6d4"},{y:75,w:60,c:"#f59e0b"},
        {y:85,w:100,c:"#a78bfa"},
      ].map((l,i)=>(
        <motion.rect key={i} x="70" y={l.y} width={l.w} height="4" rx="2" fill={l.c} opacity="0.5"
          animate={{width:[l.w-5,l.w+5,l.w]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
      ))}
      {/* React logo */}
      <motion.g style={{transformOrigin:"220px 55px"}} animate={{rotate:360}} transition={{duration:6,repeat:Infinity,ease:"linear"}}>
        <ellipse cx="220" cy="55" rx="18" ry="6" fill="none" stroke="#61dafb" strokeWidth="1.2" opacity="0.7"/>
        <ellipse cx="220" cy="55" rx="18" ry="6" fill="none" stroke="#61dafb" strokeWidth="1.2" opacity="0.7" transform="rotate(60,220,55)"/>
        <ellipse cx="220" cy="55" rx="18" ry="6" fill="none" stroke="#61dafb" strokeWidth="1.2" opacity="0.7" transform="rotate(120,220,55)"/>
      </motion.g>
      <circle cx="220" cy="55" r="4" fill="#61dafb"/>
    </svg>
  );
}

function CyberServiceSVG() {
  return (
    <svg viewBox="0 0 260 110" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="260" height="110" fill="rgba(220,38,38,0.04)"/>
      {/* Scan beam */}
      <motion.line x1="0" y1="55" x2="260" y2="55" stroke="#dc2626" strokeWidth="1.5" opacity="0.6"
        animate={{y:[-30,30,-30]}} transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}/>
      {/* Target circles */}
      {[40,80,130,175,220].map((x,i)=>(
        <motion.g key={x} animate={{scale:[1,1.15,1],opacity:[0.4,0.9,0.4]}}
          transition={{duration:1.5,repeat:Infinity,delay:i*0.3}} style={{transformOrigin:`${x}px 55px`}}>
          <circle cx={x} cy="55" r="18" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="4 2" opacity="0.5"/>
          <circle cx={x} cy="55" r="8" fill="rgba(220,38,38,0.1)" stroke="#dc2626" strokeWidth="0.8"/>
        </motion.g>
      ))}
      {/* Shield */}
      <motion.path d="M130 20 L148 27 L148 42 Q148 55 130 62 Q112 55 112 42 L112 27 Z"
        fill="rgba(220,38,38,0.12)" stroke="#dc2626" strokeWidth="1.2"
        animate={{scale:[1,1.04,1]}} transition={{duration:2,repeat:Infinity}} style={{transformOrigin:"130px 41px"}}/>
      {/* Bug alerts */}
      {[[30,18,"XSS"],[200,20,"SQLi"],[220,88,"IDOR"],[20,88,"RCE"]].map(([x,y,t])=>(
        <motion.g key={String(t)} animate={{opacity:[0.3,1,0.3]}} transition={{duration:2,repeat:Infinity,delay:Math.random()}}>
          <rect x={Number(x)-14} y={Number(y)-8} width="28" height="16" rx="4" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="0.8"/>
          <text x={Number(x)} y={Number(y)+4} textAnchor="middle" fill="#dc2626" fontSize="7" fontFamily="'JetBrains Mono',monospace">{String(t)}</text>
        </motion.g>
      ))}
    </svg>
  );
}

function DesignServiceSVG() {
  return (
    <svg viewBox="0 0 260 110" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="260" height="110" fill="rgba(217,119,6,0.04)"/>
      {/* Canvas */}
      <rect x="55" y="15" width="150" height="80" rx="6" fill="rgba(217,119,6,0.08)" stroke="#d97706" strokeWidth="1.2"/>
      {/* Color wheel */}
      <motion.g style={{transformOrigin:"130px 55px"}} animate={{rotate:360}} transition={{duration:10,repeat:Infinity,ease:"linear"}}>
        {["#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6","#8b5cf6","#ec4899"].map((c,i)=>{
          const a=i*45*Math.PI/180;
          return <circle key={c} cx={130+22*Math.cos(a)} cy={55+22*Math.sin(a)} r="8" fill={`${c}88`} stroke={c} strokeWidth="1"/>;
        })}
      </motion.g>
      <circle cx="130" cy="55" r="8" fill="var(--surface)" stroke="#d97706" strokeWidth="1.5"/>
      {/* Photoshop/CorelDraw icons */}
      {[{x:30,y:30,l:"Ps",c:"#31a8ff"},{x:230,y:30,l:"Cd",c:"#77bc1f"},{x:30,y:82,l:"Ai",c:"#ff9a00"},{x:230,y:82,l:"Xd",c:"#ff61f6"}].map(n=>(
        <motion.g key={n.l} animate={{opacity:[0.6,1,0.6]}} transition={{duration:2,repeat:Infinity,delay:Math.random()*1.5}}>
          <rect x={n.x-12} y={n.y-12} width="24" height="24" rx="6" fill={`${n.c}22`} stroke={n.c} strokeWidth="1.2"/>
          <text x={n.x} y={n.y+4} textAnchor="middle" fill={n.c} fontSize="9" fontFamily="'Syne',sans-serif" fontWeight="700">{n.l}</text>
        </motion.g>
      ))}
    </svg>
  );
}

function TrainingSVG() {
  return (
    <svg viewBox="0 0 260 110" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="260" height="110" fill="rgba(5,150,105,0.04)"/>
      {/* Chalkboard */}
      <rect x="30" y="15" width="130" height="80" rx="6" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="1.3"/>
      {/* Animated writing */}
      {["DevOps","Cloud","Linux","K8s","CI/CD"].map((t,i)=>(
        <motion.g key={t} initial={{opacity:0}} animate={{opacity:[0,1,1,0]}}
          transition={{duration:4,repeat:Infinity,delay:i*0.8,times:[0,0.1,0.8,1]}}>
          <text x="42" y={30+i*14} fill="#059669" fontSize="9" fontFamily="'JetBrains Mono',monospace" opacity="0.85">▸ {t}</text>
        </motion.g>
      ))}
      {/* Students */}
      {[[180,40],[210,40],[195,60],[175,75],[215,75]].map(([x,y],i)=>(
        <motion.g key={i} animate={{scale:[1,1.1,1]}} transition={{duration:1.5,repeat:Infinity,delay:i*0.4}} style={{transformOrigin:`${x}px ${y}px`}}>
          <circle cx={x} cy={y} r="10" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="1"/>
          <text x={x} y={y+4} textAnchor="middle" fontSize="10">👤</text>
        </motion.g>
      ))}
      {/* TRCN badge */}
      <motion.rect x="186" y="90" width="50" height="16" rx="5" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="0.8"
        animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity}}/>
      <text x="211" y="102" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="'JetBrains Mono',monospace" fontWeight="600">TRCN</text>
    </svg>
  );
}

function AiServiceSVG() {
  return (
    <svg viewBox="0 0 260 110" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="260" height="110" fill="rgba(37,99,235,0.04)"/>
      {/* Chat bubbles */}
      {[{x:30,y:20,w:100,h:28,t:"Build me a CI/CD…",c:"#2563eb",right:false},
        {x:130,y:58,w:110,h:28,t:"Here's your pipeline…",c:"#059669",right:true}].map((b,i)=>(
        <motion.g key={i} animate={{opacity:[0.5,1,0.5],y:[0,-2,0]}} transition={{duration:2.5,repeat:Infinity,delay:i*1.2}}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="10" fill={`${b.c}18`} stroke={b.c} strokeWidth="1"/>
          <text x={b.x+8} y={b.y+16} fill={b.c} fontSize="7" fontFamily="'JetBrains Mono',monospace">{b.t}</text>
        </motion.g>
      ))}
      {/* Neural network */}
      {[[130,20],[110,45],[130,45],[150,45],[110,70],[130,70],[150,70],[130,95]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r="6" fill={`rgba(37,99,235,0.2)`} stroke="#2563eb" strokeWidth="1"
          animate={{opacity:[0.3,1,0.3],scale:[1,1.2,1]}}
          transition={{duration:1.2,repeat:Infinity,delay:i*0.15}} style={{transformOrigin:`${x}px ${y}px`}}/>
      ))}
      {/* Connections */}
      {[[130,20,110,45],[130,20,130,45],[130,20,150,45],[110,45,110,70],[110,45,130,70],[130,45,110,70],[130,45,130,70],[130,45,150,70],[150,45,130,70],[150,45,150,70],[110,70,130,95],[130,70,130,95],[150,70,130,95]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563eb" strokeWidth="0.6" opacity="0.2"/>
      ))}
    </svg>
  );
}

function ConsultingServiceSVG() {
  return (
    <svg viewBox="0 0 260 110" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="260" height="110" fill="rgba(5,150,105,0.04)"/>
      {/* Growth chart */}
      <motion.polyline points="20,90 50,75 80,80 110,60 140,55 170,40 200,30 230,20"
        fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round"
        animate={{opacity:[0.4,0.9,0.4]}} transition={{duration:2,repeat:Infinity}}/>
      <motion.polyline points="20,90 50,75 80,80 110,60 140,55 170,40 200,30 230,20"
        fill="none" stroke="#059669" strokeWidth="6" strokeLinecap="round" opacity="0.08"/>
      {/* Data points */}
      {[[20,90],[50,75],[80,80],[110,60],[140,55],[170,40],[200,30],[230,20]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r="5" fill="#059669"
          animate={{scale:[1,1.4,1],opacity:[0.5,1,0.5]}}
          transition={{duration:1.5,repeat:Infinity,delay:i*0.25}} style={{transformOrigin:`${x}px ${y}px`}}/>
      ))}
      {/* Grid lines */}
      {[30,55,80].map(y=>(
        <line key={y} x1="15" y1={y} x2="240" y2={y} stroke="#059669" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15"/>
      ))}
      {/* Swelerion badge */}
      <motion.rect x="80" y="2" width="100" height="18" rx="5" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="0.8"
        animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity}}/>
      <text x="130" y="15" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="'JetBrains Mono',monospace" fontWeight="600">SWELERION GLOBAL LTD</text>
    </svg>
  );
}

const serviceVisuals: Record<string,React.FC> = {
  cloud:CloudEngineeringSVG, web:WebDevSVG, cyber:CyberServiceSVG,
  design:DesignServiceSVG, training:TrainingSVG, ai:AiServiceSVG, consulting:ConsultingServiceSVG,
};

const services = [
  { id:"cloud",     color:"#2563eb", title:"Cloud & DevOps Engineering",       desc:"AWS and Azure infrastructure, Kubernetes orchestration, CI/CD pipelines, Terraform IaC, Docker containerization, and production monitoring." },
  { id:"web",       color:"#7c3aed", title:"Web Development",                  desc:"Full-stack apps — React/Next.js frontends to Node.js/PostgreSQL backends. Clean code, modern design, deployed and production-ready." },
  { id:"cyber",     color:"#dc2626", title:"Cybersecurity Assessment",          desc:"Penetration testing, vulnerability assessments, ethical hacking engagements, and security training for teams and organisations." },
  { id:"design",    color:"#d97706", title:"Graphic Design & Brand Identity",   desc:"Event flyers, brand identity systems, social media graphics, print materials — designed in Photoshop and CorelDraw." },
  { id:"training",  color:"#059669", title:"Tech Training & Curriculum",        desc:"Custom DevOps, Cloud, and Cybersecurity programs. Hands-on, scenario-based learning that actually sticks." },
  { id:"ai",        color:"#2563eb", title:"AI & Prompt Engineering",           desc:"AI-powered workflows, LLM integrations, and intelligent automation tools that give your product a genuine edge." },
  { id:"consulting",color:"#059669", title:"Cloud Consulting — Swelerion",      desc:"Strategic advisory through Swelerion Global Ltd. Architecture reviews, migration planning, cost optimisation, and governance." },
];

export default function Services() {
  return (
    <section id="services" style={{ padding:"6rem 5%", background:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="Services" title="How I can<br/>help you."
          subtitle="Whether you need infrastructure built, a website shipped, your team trained, or your brand visualised — I've got you." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))", gap:"1.3rem" }}>
          {services.map((s, i) => {
            const Visual = serviceVisuals[s.id];
            return (
              <motion.div key={s.id}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.44, delay:(i%3)*0.1 }}
                whileHover={{ y:-5, boxShadow:"var(--shadow-lg)" }}
                style={{ borderRadius:"18px", overflow:"hidden", background:"var(--surface)", border:"1px solid var(--border)", boxShadow:"var(--shadow-sm)", transition:"all 0.3s" }}
              >
                {/* Illustration */}
                <div style={{ height:110, background:`${s.color}08`, borderBottom:"1px solid var(--border)", position:"relative" }}>
                  <Visual />
                  <div style={{ position:"absolute", bottom:8, right:12, width:8, height:8, borderRadius:"50%", background:s.color, boxShadow:`0 0 10px ${s.color}88` }}/>
                </div>
                {/* Content */}
                <div style={{ padding:"1.2rem 1.4rem 1.5rem" }}>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", color:"var(--text)", marginBottom:"0.55rem" }}>{s.title}</h3>
                  <p style={{ fontSize:"0.84rem", color:"var(--text2)", lineHeight:1.78, fontWeight:300 }}>{s.desc}</p>
                  <motion.a href="#contact" whileHover={{x:4}} style={{ display:"inline-flex", alignItems:"center", gap:"0.35rem", marginTop:"1rem", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.71rem", color:s.color, textDecoration:"none", fontWeight:600 }}>
                    Get started →
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
