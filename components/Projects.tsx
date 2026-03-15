"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

/* ── Project visual illustrations ── */
function VisQuickBites() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(249,115,22,0.06)"/>
      {/* Microservices bubbles */}
      {[["API GW",60,80,"#f97316"],["Orders",130,50,"#f97316"],["Users",130,110,"#f97316"],
        ["Kitchen",200,50,"#f97316"],["Delivery",200,110,"#f97316"],["Notify",260,80,"#f97316"]
      ].map(([label,cx,cy,c])=>(
        <motion.g key={String(label)} animate={{opacity:[0.6,1,0.6]}} transition={{duration:2,repeat:Infinity,delay:Number(cx)/100}}>
          <circle cx={Number(cx)} cy={Number(cy)} r="22" fill="rgba(249,115,22,0.12)" stroke={String(c)} strokeWidth="1.2"/>
          <text x={Number(cx)} y={Number(cy)+4} textAnchor="middle" fill={String(c)} fontSize="8" fontFamily="'JetBrains Mono',monospace">{String(label)}</text>
        </motion.g>
      ))}
      {/* Connections */}
      {[[60,80,130,50],[60,80,130,110],[130,50,200,50],[130,110,200,110],[200,50,260,80],[200,110,260,80]].map(([x1,y1,x2,y2],i)=>(
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"
          animate={{opacity:[0.2,0.5,0.2]}} transition={{duration:1.8,repeat:Infinity,delay:i*0.3}}/>
      ))}
      {/* Grafana-style graph */}
      <motion.path d="M20 145 Q50 120 80 135 Q110 148 140 125 Q170 102 200 130 Q230 148 260 118 Q280 105 300 122"
        fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.4"
        animate={{strokeDashoffset:[0,-20]}} transition={{duration:2,repeat:Infinity,ease:"linear"}}
        strokeDasharray="5 3"/>
      {/* K8s badge */}
      <g transform="translate(270,15)">
        <circle cx="15" cy="15" r="13" fill="rgba(249,115,22,0.15)" stroke="#f97316" strokeWidth="1"/>
        <motion.g animate={{rotate:360}} transition={{duration:6,repeat:Infinity,ease:"linear"}} style={{transformOrigin:"15px 15px"}}>
          {[0,60,120,180,240,300].map((a,i)=>{
            const r=a*Math.PI/180;
            return <line key={i} x1="15" y1="15" x2={15+9*Math.cos(r)} y2={15+9*Math.sin(r)} stroke="#f97316" strokeWidth="1" opacity="0.7"/>;
          })}
        </motion.g>
        <circle cx="15" cy="15" r="3" fill="#f97316"/>
      </g>
    </svg>
  );
}

function VisAfriMart() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(34,197,94,0.06)"/>
      {/* DevOps pipeline */}
      {[["Code",30,80],["Build",90,80],["Test",150,80],["Deploy",210,80],["Monitor",275,80]].map(([label,x,y],i)=>(
        <motion.g key={String(i)}
          initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}}
          transition={{delay:i*0.15,duration:0.4,repeat:Infinity,repeatDelay:4}}>
          <rect x={Number(x)-24} y={Number(y)-14} width="48" height="28" rx="5"
            fill="rgba(34,197,94,0.12)" stroke="#22c55e" strokeWidth="1.2"/>
          <text x={Number(x)} y={Number(y)+4} textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="'JetBrains Mono',monospace">{String(label)}</text>
        </motion.g>
      ))}
      {/* Arrows */}
      {[0,1,2,3].map(i=>(
        <motion.path key={i} d={`M${54+i*60},80 L${66+i*60},80`}
          stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arr)" opacity="0.5"
          animate={{opacity:[0.3,0.8,0.3]}} transition={{duration:1.5,repeat:Infinity,delay:i*0.3}}/>
      ))}
      <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6Z" fill="#22c55e" opacity="0.7"/>
      </marker></defs>
      {/* Terraform blocks */}
      {[0,1,2,3].map(i=>(
        <motion.g key={i} animate={{y:[0,-3,0]}} transition={{duration:2,repeat:Infinity,delay:i*0.4}}>
          <rect x={20+i*18} y="120" width="14" height="28" rx="2" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1"/>
          <text x={27+i*18} y="137" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="'JetBrains Mono',monospace">TF</text>
        </motion.g>
      ))}
      {/* Docker whale */}
      <motion.g animate={{x:[0,4,0]}} transition={{duration:3.5,repeat:Infinity}} style={{transform:"translate(220px,115px)"}}>
        <rect x="0" y="0" width="50" height="28" rx="4" fill="rgba(34,197,94,0.12)" stroke="#22c55e" strokeWidth="1"/>
        {[0,1,2].map(i=>(
          <rect key={i} x={8+i*14} y="-8" width="10" height="10" rx="2" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="0.8"/>
        ))}
        <circle cx="45" cy="14" r="5" fill="rgba(34,197,94,0.12)" stroke="#22c55e" strokeWidth="1"/>
      </motion.g>
    </svg>
  );
}

function VisPaySecure() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(239,68,68,0.06)"/>
      {/* Bank UI mockup */}
      <rect x="60" y="20" width="200" height="120" rx="8" fill="rgba(239,68,68,0.08)" stroke="#ef4444" strokeWidth="1.2"/>
      <rect x="60" y="20" width="200" height="22" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1.2"/>
      {[28,54,80].map(x=><circle key={x} cx={x+44} cy="31" r="3.5" fill={x===28?"#ef4444":x===54?"#f59e0b":"#22c55e"} opacity="0.7"/>)}
      {/* Vuln badges */}
      {[["SQLi",95,60],["XSS",175,60],["IDOR",95,100],["CSRF",175,100],["Auth",135,80]].map(([l,x,y])=>(
        <motion.g key={String(l)} animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity,delay:Number(x)/100}}>
          <rect x={Number(x)-18} y={Number(y)-10} width="36" height="20" rx="3" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1"/>
          <text x={Number(x)} y={Number(y)+4} textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="'JetBrains Mono',monospace">{String(l)}</text>
        </motion.g>
      ))}
      {/* Scan beam */}
      <motion.line x1="60" y1="30" x2="260" y2="30" stroke="#ef4444" strokeWidth="1.5" opacity="0.4"
        animate={{y1:[30,140,30],y2:[30,140,30]}} transition={{duration:3,repeat:Infinity,ease:"linear"}}/>
      {/* OWASP logo simplified */}
      <motion.g animate={{rotate:[0,5,-5,0]}} transition={{duration:4,repeat:Infinity}} style={{transformOrigin:"18px 130px"}}>
        <circle cx="18" cy="130" r="12" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1"/>
        <text x="18" y="134" textAnchor="middle" fill="#ef4444" fontSize="6" fontFamily="'JetBrains Mono',monospace">OWASP</text>
      </motion.g>
      {/* Warning badge */}
      <motion.text x="295" y="50" fontSize="22" textAnchor="middle"
        animate={{scale:[1,1.2,1],opacity:[0.6,1,0.6]}} transition={{duration:1.5,repeat:Infinity}}
        style={{transformOrigin:"295px 50px"}}>⚠️</motion.text>
    </svg>
  );
}

function VisAssetGPT() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(168,85,247,0.06)"/>
      {/* Dubai skyline silhouette */}
      {[[40,80,20,120],[65,55,16,120],[85,45,14,120],[100,65,12,120],[115,35,10,120],
        [130,50,8,120],[140,70,12,120],[155,30,8,120],[170,65,14,120],[190,50,10,120],
        [210,75,18,120],[235,55,12,120],[255,80,20,120]].map(([x,h,w,y],i)=>(
        <motion.rect key={i} x={Number(x)} y={160-Number(h)-40} width={Number(w)} height={Number(h)}
          fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeWidth="0.8"
          animate={{opacity:[0.6,0.9,0.6]}} transition={{duration:3,repeat:Infinity,delay:i*0.2}}/>
      ))}
      {/* AI chat bubble */}
      <motion.g animate={{y:[0,-3,0]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}>
        <rect x="50" y="15" width="220" height="55" rx="10" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="1.2"/>
        <polygon points="70,70 90,70 80,82" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="1"/>
        <text x="160" y="38" textAnchor="middle" fill="#a855f7" fontSize="8" fontFamily="'JetBrains Mono',monospace">AssetGPT Analysis</text>
        {/* Typing dots */}
        {[0,1,2].map(i=>(
          <motion.circle key={i} cx={130+i*20} cy="56" r="4" fill="#a855f7" opacity="0.5"
            animate={{opacity:[0.2,0.8,0.2],y:[0,-3,0]}}
            transition={{duration:0.8,repeat:Infinity,delay:i*0.25}}/>
        ))}
      </motion.g>
    </svg>
  );
}

function VisMojis() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(236,72,153,0.06)"/>
      {/* Product cards grid */}
      {[[20,20],[120,20],[220,20],[20,90],[120,90],[220,90]].map(([x,y],i)=>(
        <motion.g key={i} whileHover={{scale:1.05}} animate={{opacity:[0.7,1,0.7]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}>
          <rect x={Number(x)} y={Number(y)} width="80" height="60" rx="6" fill="rgba(236,72,153,0.1)" stroke="#ec4899" strokeWidth="1"/>
          <text x={Number(x)+40} y={Number(y)+30} textAnchor="middle" fontSize="18">{["💍","📿","💎","✨","🌿","🪷"][i]}</text>
          <rect x={Number(x)+8} y={Number(y)+44} width="64" height="4" rx="2" fill="rgba(236,72,153,0.2)" stroke="#ec4899" strokeWidth="0.8"/>
        </motion.g>
      ))}
      {/* Vercel deploy badge */}
      <motion.g animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity}}>
        <rect x="240" y="88" width="75" height="24" rx="5" fill="rgba(236,72,153,0.12)" stroke="#ec4899" strokeWidth="1"/>
        <text x="277" y="104" textAnchor="middle" fill="#ec4899" fontSize="8" fontFamily="'JetBrains Mono',monospace">▲ Vercel</text>
      </motion.g>
      {/* Amsterdam flag color stripe */}
      {["#ef4444","#ffffff","#ef4444"].map((c,i)=>(
        <rect key={i} x={290+i*4} y="20" width="4" height="55" fill={c} opacity="0.5"/>
      ))}
    </svg>
  );
}

function VisMyAfrica() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(34,197,94,0.06)"/>
      {/* Africa continent silhouette simplified */}
      <motion.path d="M120 20 Q150 18 165 35 Q180 45 175 65 Q185 80 180 100 Q175 120 160 135 Q145 148 130 140 Q110 148 100 135 Q85 120 90 100 Q82 80 90 65 Q95 45 110 35 Z"
        fill="rgba(34,197,94,0.1)" stroke="#22c55e" strokeWidth="1.2"
        animate={{filter:["drop-shadow(0 0 0px #22c55e)","drop-shadow(0 0 8px #22c55e)","drop-shadow(0 0 0px #22c55e)"]}}
        transition={{duration:3,repeat:Infinity}}/>
      {/* Connection pins on map */}
      {[[145,40],[135,70],[125,100],[155,90]].map(([x,y],i)=>(
        <motion.g key={i} animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity,delay:i*0.5}}>
          <circle cx={Number(x)} cy={Number(y)} r="4" fill="#22c55e"/>
          <circle cx={Number(x)} cy={Number(y)} r="8" fill="none" stroke="#22c55e" strokeWidth="0.8" opacity="0.4"/>
        </motion.g>
      ))}
      {/* Social feed mockup */}
      <rect x="200" y="20" width="105" height="120" rx="8" fill="rgba(34,197,94,0.08)" stroke="#22c55e" strokeWidth="1"/>
      {[0,1,2].map(i=>(
        <g key={i}>
          <circle cx="215" cy={38+i*34} r="8" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="0.8"/>
          <rect x="228" y={30+i*34} width="65" height="5" rx="2" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="0.5"/>
          <rect x="228" y={38+i*34} width="50" height="4" rx="2" fill="rgba(34,197,94,0.12)" stroke="#22c55e" strokeWidth="0.5"/>
        </g>
      ))}
      {/* Supabase logo hint */}
      <motion.text x="240" y="148" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="'JetBrains Mono',monospace"
        animate={{opacity:[0.4,0.9,0.4]}} transition={{duration:2,repeat:Infinity}}>Supabase Realtime</motion.text>
    </svg>
  );
}

function VisRefuel() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(251,191,36,0.06)"/>
      {/* Cross/flame */}
      <motion.g animate={{scale:[1,1.05,1]}} transition={{duration:2,repeat:Infinity}} style={{transformOrigin:"50px 80px"}}>
        <rect x="42" y="40" width="16" height="80" rx="4" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" strokeWidth="1.5"/>
        <rect x="20" y="68" width="60" height="16" rx="4" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" strokeWidth="1.5"/>
      </motion.g>
      {/* Flame */}
      <motion.path d="M44 40 Q50 20 56 40 Q62 25 50 15 Q38 25 44 40Z"
        fill="rgba(251,191,36,0.4)" stroke="#fbbf24" strokeWidth="1"
        animate={{d:["M44 40 Q50 20 56 40 Q62 25 50 15 Q38 25 44 40Z","M44 38 Q50 16 56 38 Q64 22 50 12 Q36 22 44 38Z","M44 40 Q50 20 56 40 Q62 25 50 15 Q38 25 44 40Z"]}}
        transition={{duration:1.2,repeat:Infinity}}/>
      {/* Registration form */}
      <rect x="110" y="25" width="190" height="110" rx="8" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" strokeWidth="1"/>
      <rect x="110" y="25" width="190" height="20" rx="8" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" strokeWidth="1"/>
      <text x="205" y="39" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="'JetBrains Mono',monospace">THE REFUEL EXPERIENCE</text>
      {[["Name",""],["Email",""],["Phone",""]].map(([label,_], i)=>(
        <g key={i}>
          <text x="122" y={62+i*26} fill="#fbbf24" fontSize="7" fontFamily="'JetBrains Mono',monospace" opacity="0.7">{label}</text>
          <rect x="122" y={65+i*26} width="165" height="12" rx="3" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" strokeWidth="0.8" opacity="0.7"/>
        </g>
      ))}
      {/* Submit button */}
      <motion.rect x="178" y="120" width="100" height="8" rx="3" fill="rgba(251,191,36,0.25)" stroke="#fbbf24" strokeWidth="1"
        animate={{fill:["rgba(251,191,36,0.15)","rgba(251,191,36,0.4)","rgba(251,191,36,0.15)"]}}
        transition={{duration:2,repeat:Infinity}}/>
    </svg>
  );
}

function VisPrexy() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(6,182,212,0.06)"/>
      {/* Code editor */}
      <rect x="20" y="20" width="280" height="120" rx="8" fill="rgba(6,182,212,0.07)" stroke="#06b6d4" strokeWidth="1.2"/>
      <rect x="20" y="20" width="280" height="22" rx="8" fill="rgba(6,182,212,0.15)" stroke="#06b6d4" strokeWidth="1.2"/>
      {[28,44,60].map((x,i)=><circle key={i} cx={x} cy="31" r="3.5" fill={["#ef4444","#f59e0b","#22c55e"][i]} opacity="0.8"/>)}
      <text x="160" y="34" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="'JetBrains Mono',monospace" opacity="0.7">PrexyLab — Collaborative IDE</text>
      {/* Code lines with syntax highlighting */}
      {[
        {y:55,  text:"const deploy = async () => {", color:"#7c3aed"},
        {y:67,  text:"  await k8s.scale({ replicas: 3 });", color:"#06b6d4"},
        {y:79,  text:"  return pipeline.run();", color:"#22c55e"},
        {y:91,  text:"}", color:"#7c3aed"},
      ].map(({y,text,color})=>(
        <motion.text key={y} x="32" y={y} fill={color} fontSize="8" fontFamily="'JetBrains Mono',monospace"
          animate={{opacity:[0.5,1,0.5]}} transition={{duration:3,repeat:Infinity,delay:y/60}}>
          {text}
        </motion.text>
      ))}
      {/* Cursor blink */}
      <motion.rect x="32" y="97" width="6" height="10" rx="1" fill="#06b6d4"
        animate={{opacity:[1,0,1]}} transition={{duration:1,repeat:Infinity}}/>
      {/* Collaborators */}
      {[0,1,2].map(i=>(
        <motion.circle key={i} cx={268+i*14} cy="31" r="6"
          fill={["#ef4444","#f59e0b","#22c55e"][i]} opacity="0.8"
          animate={{scale:[1,1.2,1]}} transition={{duration:2,repeat:Infinity,delay:i*0.5}}/>
      ))}
    </svg>
  );
}

function VisCedar() {
  return (
    <svg viewBox="0 0 320 160" fill="none" style={{width:"100%",height:"100%"}}>
      <rect width="320" height="160" fill="rgba(16,185,129,0.06)"/>
      {/* Nigeria map outline simplified */}
      <motion.path d="M80 40 Q120 30 160 35 Q200 32 220 50 Q235 70 230 100 Q220 130 190 145 Q160 155 140 150 Q110 155 90 140 Q65 125 60 100 Q55 70 80 40Z"
        fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.2"
        animate={{filter:["drop-shadow(0 0 0px #10b981)","drop-shadow(0 0 6px #10b981)","drop-shadow(0 0 0px #10b981)"]}}
        transition={{duration:3,repeat:Infinity}}/>
      {/* Cities/connection pins */}
      {[[145,65,"Lagos"],[155,90,"Abuja"],[175,110,"PH"]].map(([x,y,label])=>(
        <motion.g key={String(label)} animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity,delay:Number(x)/80}}>
          <circle cx={Number(x)} cy={Number(y)} r="4" fill="#10b981"/>
          <text x={Number(x)+7} y={Number(y)+4} fill="#10b981" fontSize="6" fontFamily="'JetBrains Mono',monospace">{String(label)}</text>
        </motion.g>
      ))}
      {/* Property card */}
      <motion.g animate={{y:[0,-4,0]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}>
        <rect x="220" y="25" width="88" height="90" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.2"/>
        <text x="264" y="50" textAnchor="middle" fontSize="20">🏠</text>
        <rect x="230" y="62" width="68" height="5" rx="2" fill="rgba(16,185,129,0.25)" stroke="#10b981" strokeWidth="0.8"/>
        <text x="264" y="80" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="'JetBrains Mono',monospace">₦45,000,000</text>
        <text x="264" y="92" textAnchor="middle" fill="#10b981" fontSize="6" fontFamily="'JetBrains Mono',monospace">Lagos Island</text>
        <motion.rect x="235" y="100" width="58" height="10" rx="3" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="0.8"
          animate={{fill:["rgba(16,185,129,0.1)","rgba(16,185,129,0.35)","rgba(16,185,129,0.1)"]}} transition={{duration:2,repeat:Infinity}}/>
        <text x="264" y="108" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="'JetBrains Mono',monospace">Invest Now</text>
      </motion.g>
    </svg>
  );
}

const projects = [
  { num:"01", cat:"Microservices", title:"QuickBites", accent:"#f97316", accentDim:"rgba(249,115,22,0.08)", accentBorder:"rgba(249,115,22,0.25)",
    desc:"Production-grade food delivery platform built on microservices with Kubernetes orchestration, Prometheus/Grafana observability, and GitHub Actions CI/CD.",
    tags:["Node.js","PostgreSQL","Kubernetes","Prometheus","Grafana","GitHub Actions"], link:"https://github.com/Johnprexy", Vis:VisQuickBites },
  { num:"02", cat:"DevOps Capstone", title:"AfriMart", accent:"#22c55e", accentDim:"rgba(34,197,94,0.08)", accentBorder:"rgba(34,197,94,0.25)",
    desc:"Full-stack e-commerce platform that serves as a 4-week DevOps capstone — Terraform, Ansible, Docker, Jenkins, Kubernetes, and monitoring, end to end.",
    tags:["Terraform","Ansible","Docker","Jenkins","Kubernetes"], link:"https://github.com/Johnprexy", Vis:VisAfriMart },
  { num:"03", cat:"Security Research", title:"PaySecure Bank", accent:"#ef4444", accentDim:"rgba(239,68,68,0.08)", accentBorder:"rgba(239,68,68,0.25)",
    desc:"Deliberately vulnerable Nigerian banking app with 20+ documented OWASP vulnerabilities — SQLi, XSS, IDOR, CSRF — built for ethical hacking training.",
    tags:["Ethical Hacking","Pen Testing","OWASP","Vulnerability Research"], link:"https://github.com/Johnprexy", Vis:VisPaySecure },
  { num:"04", cat:"AI Platform", title:"AssetGPT — Dubai Edge", accent:"#a855f7", accentDim:"rgba(168,85,247,0.08)", accentBorder:"rgba(168,85,247,0.25)",
    desc:"Middleware intelligence platform for Dubai's licensed real estate brokers. AI-powered property analysis and advisory via SZElite Property Advisory.",
    tags:["AI/ML","Middleware","Real Estate","Dubai"], link:"#contact", Vis:VisAssetGPT },
  { num:"05", cat:"E-commerce", title:"Mojis Mattel", accent:"#ec4899", accentDim:"rgba(236,72,153,0.08)", accentBorder:"rgba(236,72,153,0.25)",
    desc:"Amsterdam-based sustainable jewelry social enterprise e-commerce site built in React and deployed on Vercel for a European client.",
    tags:["React","Vercel","E-commerce","Amsterdam"], link:"#contact", Vis:VisMojis },
  { num:"06", cat:"Social Network", title:"My Africa Family", accent:"#22c55e", accentDim:"rgba(34,197,94,0.08)", accentBorder:"rgba(34,197,94,0.25)",
    desc:"Social networking platform for Africans in the diaspora — authentication, profiles, posts, messaging, stories, and real-time notifications.",
    tags:["React","Supabase","Realtime","Diaspora"], link:"https://github.com/Johnprexy", Vis:VisMyAfrica },
  { num:"07", cat:"Ministry", title:"The Refuel Experience", accent:"#fbbf24", accentDim:"rgba(251,191,36,0.08)", accentBorder:"rgba(251,191,36,0.25)",
    desc:"Ministry conference site with seamless registration powered by Web3Forms and Google Apps Script backend — built for The Refuel Experience 2025.",
    tags:["React","Tailwind","Web3Forms","Google Apps Script"], link:"#contact", Vis:VisRefuel },
  { num:"08", cat:"EdTech", title:"PrexyLab", accent:"#06b6d4", accentDim:"rgba(6,182,212,0.08)", accentBorder:"rgba(6,182,212,0.25)",
    desc:"Collaborative coding lab web app used in DevOps and cloud classes. Real-time code editing with Monaco Editor, Firebase sync, multi-user sessions.",
    tags:["React","Vite","Monaco Editor","Firebase"], link:"https://github.com/Johnprexy", Vis:VisPrexy },
  { num:"09", cat:"Diaspora PropTech", title:"Cedar Africa", accent:"#10b981", accentDim:"rgba(16,185,129,0.08)", accentBorder:"rgba(16,185,129,0.25)",
    desc:"Property investment landing page connecting the African diaspora with real estate opportunities back home — clean design, compelling story.",
    tags:["React","Landing Page","PropTech","Diaspora"], link:"#contact", Vis:VisCedar },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding:"6rem 5%", background:"var(--bg)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="Engineering Projects" title="Built. Shipped.<br/>Production-grade."
          subtitle="Real platforms, real architecture, real impact — from microservices to social networks to real estate intelligence." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(350px,1fr))", gap:"1.4rem" }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.48, delay:(i%3)*0.1 }}
              whileHover={{ y:-5, boxShadow:"var(--shadow-lg)" }}
              style={{ borderRadius:"18px", overflow:"hidden", background:"var(--surface)", border:`1.5px solid ${p.accentBorder}`, boxShadow:"var(--shadow-sm)", transition:"all 0.3s" }}
            >
              {/* Visual */}
              <div style={{ height:160, background:p.accentDim, borderBottom:`1px solid ${p.accentBorder}`, position:"relative", overflow:"hidden" }}>
                <p.Vis />
                <div style={{ position:"absolute", top:10, left:12, fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:p.accent, letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:700, background:"var(--surface)", padding:"0.18rem 0.55rem", borderRadius:"20px", border:`1px solid ${p.accentBorder}` }}>
                  {p.cat}
                </div>
                <div style={{ position:"absolute", bottom:10, right:12, fontFamily:"'Syne',sans-serif", fontSize:"2.2rem", fontWeight:900, color:p.accent, opacity:0.12, lineHeight:1 }}>
                  {p.num}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding:"1.4rem 1.5rem 1.5rem" }}>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.1rem", color:"var(--text)", marginBottom:"0.55rem" }}>{p.title}</h3>
                <p style={{ fontSize:"0.84rem", color:"var(--text2)", lineHeight:1.78, fontWeight:300, marginBottom:"1.1rem" }}>{p.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.38rem", marginBottom:"1.1rem" }}>
                  {p.tags.map(tag=>(
                    <span key={tag} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", color:p.accent, background:p.accentDim, border:`1px solid ${p.accentBorder}`, borderRadius:"5px", padding:"0.18rem 0.5rem" }}>{tag}</span>
                  ))}
                </div>
                <a href={p.link} target={p.link.startsWith("http")?"_blank":undefined} rel="noreferrer"
                  style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.74rem", color:"var(--text3)", textDecoration:"none", transition:"color 0.2s" }}
                  onMouseEnter={e=>(e.currentTarget.style.color=p.accent)}
                  onMouseLeave={e=>(e.currentTarget.style.color="var(--text3)")}>
                  {p.link.startsWith("http") ? <><Github size={13}/> GitHub</> : <><ExternalLink size={13}/> Enquire</>}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
