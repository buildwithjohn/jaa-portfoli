"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─────────────────────────────────────
   CUSTOM SVG ILLUSTRATIONS per skill
───────────────────────────────────── */
function IlluCloud() {
  return (
    <svg viewBox="0 0 180 110" fill="none" style={{width:"100%",height:"100%"}}>
      {/* bg glow */}
      <circle cx="90" cy="55" r="50" fill="rgba(37,99,235,0.06)"/>
      {/* Cloud */}
      <motion.g animate={{y:[0,-4,0]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}>
        <path d="M38 68 Q24 68 24 54 Q24 40 38 40 Q41 28 54 26 Q66 22 74 34 Q86 30 90 42 Q104 40 106 54 Q108 68 94 68Z"
          fill="rgba(37,99,235,0.15)" stroke="#2563eb" strokeWidth="1.5"/>
        <text x="65" y="58" textAnchor="middle" fill="#2563eb" fontSize="9" fontFamily="'JetBrains Mono',monospace" fontWeight="600">CLOUD</text>
      </motion.g>
      {/* Kubernetes wheel */}
      <motion.g animate={{rotate:360}} transition={{duration:8,repeat:Infinity,ease:"linear"}} style={{transformOrigin:"140px 30px"}}>
        {[0,60,120,180,240,300].map((a,i)=>{
          const r=a*Math.PI/180;
          return <line key={i} x1="140" y1="30" x2={140+12*Math.cos(r)} y2={30+12*Math.sin(r)} stroke="#2563eb" strokeWidth="1.2" opacity="0.6"/>;
        })}
        <circle cx="140" cy="30" r="5" fill="#2563eb"/>
      </motion.g>
      {/* Terraform blocks */}
      {[[18,82],[30,88],[18,92]].map(([x,y],i)=>(
        <motion.rect key={i} x={x} y={y} width="10" height="8" rx="1"
          fill="rgba(37,99,235,0.2)" stroke="#2563eb" strokeWidth="1"
          animate={{opacity:[0.4,1,0.4]}} transition={{duration:1.8,repeat:Infinity,delay:i*0.4}}/>
      ))}
      {/* Docker whale */}
      <motion.g animate={{x:[0,3,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}} style={{transform:"translate(110px,70px)"}}>
        <rect x="0" y="0" width="40" height="22" rx="4" fill="rgba(37,99,235,0.15)" stroke="#2563eb" strokeWidth="1"/>
        {[0,1,2].map(i=>(
          <rect key={i} x={6+i*11} y={-6} width="8" height="8" rx="1" fill="rgba(37,99,235,0.2)" stroke="#2563eb" strokeWidth="0.8"/>
        ))}
        <circle cx="35" cy="11" r="4" fill="rgba(37,99,235,0.15)" stroke="#2563eb" strokeWidth="1"/>
      </motion.g>
      {/* CI/CD pipeline dots */}
      {[0,1,2,3,4].map(i=>(
        <motion.circle key={i} cx={30+i*26} cy="104" r="4"
          fill="rgba(37,99,235,0.15)" stroke="#2563eb" strokeWidth="1"
          animate={{fill:["rgba(37,99,235,0.1)","rgba(37,99,235,0.5)","rgba(37,99,235,0.1)"]}}
          transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
      ))}
      {[0,1,2,3].map(i=>(
        <line key={i} x1={34+i*26} y1="104" x2={56+i*26} y2="104" stroke="#2563eb" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4"/>
      ))}
    </svg>
  );
}

function IlluFrontend() {
  return (
    <svg viewBox="0 0 180 110" fill="none" style={{width:"100%",height:"100%"}}>
      <circle cx="90" cy="55" r="50" fill="rgba(124,58,237,0.06)"/>
      {/* Browser window */}
      <rect x="20" y="18" width="140" height="85" rx="6" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" strokeWidth="1.2"/>
      <rect x="20" y="18" width="140" height="18" rx="6" fill="rgba(124,58,237,0.15)" stroke="#7c3aed" strokeWidth="1.2"/>
      {[0,1,2].map(i=>(
        <circle key={i} cx={30+i*9} cy="27" r="3" fill={["#ef4444","#f59e0b","#22c55e"][i]} opacity="0.8"/>
      ))}
      {/* React atom */}
      <motion.g style={{transformOrigin:"90px 65px"}} animate={{rotate:360}} transition={{duration:10,repeat:Infinity,ease:"linear"}}>
        <ellipse cx="90" cy="65" rx="28" ry="10" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5"/>
      </motion.g>
      <motion.g style={{transformOrigin:"90px 65px"}} animate={{rotate:-360}} transition={{duration:10,repeat:Infinity,ease:"linear"}}>
        <ellipse cx="90" cy="65" rx="28" ry="10" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5" transform="rotate(60,90,65)"/>
      </motion.g>
      <motion.g style={{transformOrigin:"90px 65px"}} animate={{rotate:360}} transition={{duration:10,repeat:Infinity,ease:"linear"}}>
        <ellipse cx="90" cy="65" rx="28" ry="10" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5" transform="rotate(120,90,65)"/>
      </motion.g>
      <circle cx="90" cy="65" r="5" fill="#7c3aed"/>
      {/* Tailwind color palette */}
      {["#06b6d4","#8b5cf6","#ec4899","#f59e0b","#22c55e"].map((c,i)=>(
        <motion.rect key={i} x={22+i*14} y="90" width="11" height="8" rx="2" fill={c} opacity="0.7"
          animate={{y:[0,-3,0]}} transition={{duration:1.5,repeat:Infinity,delay:i*0.2}}/>
      ))}
    </svg>
  );
}

function IlluBackend() {
  return (
    <svg viewBox="0 0 180 110" fill="none" style={{width:"100%",height:"100%"}}>
      <circle cx="90" cy="55" r="50" fill="rgba(5,150,105,0.06)"/>
      {/* Server stack */}
      {[0,1,2].map(i=>(
        <motion.g key={i} animate={{opacity:[0.6,1,0.6]}} transition={{duration:2,repeat:Infinity,delay:i*0.5}}>
          <rect x="45" y={22+i*22} width="90" height="16" rx="3" fill="rgba(5,150,105,0.1)" stroke="#059669" strokeWidth="1.2"/>
          <circle cx="58" cy={30+i*22} r="4" fill={i===0?"#059669":"rgba(5,150,105,0.3)"} stroke="#059669" strokeWidth="1"/>
          <rect x="68" y={26+i*22} width="30" height="4" rx="1" fill="rgba(5,150,105,0.2)" stroke="#059669" strokeWidth="0.8"/>
          <rect x="102" y={26+i*22} width="16" height="4" rx="1" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="0.8"/>
        </motion.g>
      ))}
      {/* Node.js hexagon */}
      <motion.g animate={{rotate:[0,10,-10,0]}} transition={{duration:4,repeat:Infinity}} style={{transformOrigin:"150px 30px"}}>
        <polygon points="150,18 160,24 160,36 150,42 140,36 140,24" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="1.2"/>
        <text x="150" y="34" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="'JetBrains Mono',monospace">Node</text>
      </motion.g>
      {/* Data flow */}
      {[0,1,2].map(i=>(
        <motion.circle key={i} r="3" fill="#059669" opacity="0.7"
          animate={{x:[45,135,45], y:[88,88,88]}}
          transition={{duration:3,repeat:Infinity,delay:i*1,ease:"linear"}}/>
      ))}
      <line x1="45" y1="88" x2="135" y2="88" stroke="#059669" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.3"/>
      {/* PostgreSQL cylinder */}
      <ellipse cx="24" cy="75" rx="14" ry="5" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="1"/>
      <rect x="10" y="75" width="28" height="20" fill="rgba(5,150,105,0.08)" stroke="#059669" strokeWidth="1"/>
      <ellipse cx="24" cy="95" rx="14" ry="5" fill="rgba(5,150,105,0.12)" stroke="#059669" strokeWidth="1"/>
      <text x="24" y="87" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="'JetBrains Mono',monospace">PG</text>
    </svg>
  );
}

function IlluCyber() {
  return (
    <svg viewBox="0 0 180 110" fill="none" style={{width:"100%",height:"100%"}}>
      <circle cx="90" cy="55" r="50" fill="rgba(239,68,68,0.05)"/>
      {/* Shield */}
      <motion.path d="M90 15 L118 28 L118 60 Q118 82 90 95 Q62 82 62 60 L62 28 Z"
        fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1.5"
        animate={{filter:["drop-shadow(0 0 0px #ef4444)","drop-shadow(0 0 6px #ef4444)","drop-shadow(0 0 0px #ef4444)"]}}
        transition={{duration:2.5,repeat:Infinity}}/>
      {/* Lock */}
      <rect x="81" y="50" width="18" height="14" rx="2" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1.2"/>
      <path d="M84 50 Q84 42 90 42 Q96 42 96 50" fill="none" stroke="#ef4444" strokeWidth="1.2"/>
      <circle cx="90" cy="57" r="2" fill="#ef4444"/>
      {/* Scan lines */}
      {[0,1,2].map(i=>(
        <motion.line key={i} x1="62" y1={28+i*20} x2="118" y2={28+i*20}
          stroke="#ef4444" strokeWidth="0.8" opacity="0.2"
          animate={{y:[-10,10,-10]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
      ))}
      {/* Binary rain */}
      {[20,40,140,160].map((x,i)=>(
        <motion.text key={i} x={x} y="20" fill="#ef4444" fontSize="8" fontFamily="'JetBrains Mono',monospace" opacity="0.4"
          animate={{y:[20,110,20]}} transition={{duration:3+i*0.5,repeat:Infinity,delay:i*0.8}}>
          {["10","01","11","00"][i]}
        </motion.text>
      ))}
      {/* Threat nodes */}
      {[[28,85],[152,85],[28,30],[152,30]].map(([cx,cy],i)=>(
        <motion.g key={i} animate={{opacity:[0.3,0.8,0.3]}} transition={{duration:2,repeat:Infinity,delay:i*0.5}}>
          <circle cx={cx} cy={cy} r="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1"/>
          <text x={cx} y={cy+4} textAnchor="middle" fill="#ef4444" fontSize="6" fontFamily="'JetBrains Mono',monospace">!</text>
        </motion.g>
      ))}
    </svg>
  );
}

function IlluDesign() {
  return (
    <svg viewBox="0 0 180 110" fill="none" style={{width:"100%",height:"100%"}}>
      <circle cx="90" cy="55" r="50" fill="rgba(217,119,6,0.06)"/>
      {/* Pen tool */}
      <motion.g animate={{rotate:[0,-5,5,0]}} transition={{duration:4,repeat:Infinity}} style={{transformOrigin:"90px 40px"}}>
        <path d="M75 55 L90 20 L105 55 L90 50 Z" fill="rgba(217,119,6,0.2)" stroke="#d97706" strokeWidth="1.5"/>
        <path d="M78 55 L90 80 L102 55" fill="rgba(217,119,6,0.1)" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2"/>
      </motion.g>
      {/* Color wheel */}
      {["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#8b5cf6","#ec4899","#f43f5e"].map((c,i)=>{
        const a=i*45*Math.PI/180;
        return (
          <motion.circle key={i} cx={148+16*Math.cos(a)} cy={55+16*Math.sin(a)} r="5"
            fill={c} opacity="0.8"
            animate={{scale:[1,1.2,1]}} transition={{duration:2,repeat:Infinity,delay:i*0.25}}/>
        );
      })}
      <circle cx="148" cy="55" r="5" fill="rgba(217,119,6,0.3)" stroke="#d97706" strokeWidth="1"/>
      {/* Bezier curve */}
      <motion.path d="M20 90 Q50 50 90 90 Q130 130 155 90"
        fill="none" stroke="#d97706" strokeWidth="1.5" strokeDasharray="200" strokeDashoffset="200"
        animate={{strokeDashoffset:[200,0,200]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}/>
      {/* Control points */}
      {[[20,90],[50,50],[90,90],[130,130],[155,90]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r="3" fill="none" stroke="#d97706" strokeWidth="1"
          animate={{opacity:[0.3,0.8,0.3]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
      ))}
    </svg>
  );
}

function IlluPrompt() {
  return (
    <svg viewBox="0 0 180 110" fill="none" style={{width:"100%",height:"100%"}}>
      <circle cx="90" cy="55" r="50" fill="rgba(139,92,246,0.06)"/>
      {/* AI brain/network */}
      {[[50,30],[90,20],[130,30],[30,60],[70,55],[110,55],[150,60],[50,90],[90,95],[130,90]].map(([cx,cy],i)=>(
        <motion.circle key={i} cx={cx} cy={cy} r="6"
          fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="1"
          animate={{r:[5,7,5],opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity,delay:i*0.2}}/>
      ))}
      {/* Connections */}
      {[[50,30,90,20],[90,20,130,30],[50,30,30,60],[90,20,70,55],[90,20,110,55],
        [130,30,150,60],[30,60,70,55],[70,55,110,55],[110,55,150,60],
        [30,60,50,90],[70,55,50,90],[70,55,90,95],[110,55,90,95],[110,55,130,90],[150,60,130,90]
      ].map(([x1,y1,x2,y2],i)=>(
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#8b5cf6" strokeWidth="0.7" opacity="0.2"
          animate={{opacity:[0.1,0.4,0.1]}} transition={{duration:2,repeat:Infinity,delay:i*0.15}}/>
      ))}
      {/* Prompt cursor */}
      <motion.text x="60" y="58" fill="#8b5cf6" fontSize="10" fontFamily="'JetBrains Mono',monospace"
        animate={{opacity:[1,0,1]}} transition={{duration:1,repeat:Infinity}}>_</motion.text>
    </svg>
  );
}

function IlluCurriculum() {
  return (
    <svg viewBox="0 0 180 110" fill="none" style={{width:"100%",height:"100%"}}>
      <circle cx="90" cy="55" r="50" fill="rgba(6,182,212,0.06)"/>
      {/* Open book */}
      <motion.g animate={{y:[0,-2,0]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}>
        <path d="M30 30 Q30 25 35 25 L87 30 L87 85 L35 82 Q30 82 30 77 Z" fill="rgba(6,182,212,0.12)" stroke="#06b6d4" strokeWidth="1.2"/>
        <path d="M150 30 Q150 25 145 25 L93 30 L93 85 L145 82 Q150 82 150 77 Z" fill="rgba(6,182,212,0.12)" stroke="#06b6d4" strokeWidth="1.2"/>
        <line x1="87" y1="30" x2="93" y2="30" stroke="#06b6d4" strokeWidth="1.5"/>
        <line x1="87" y1="85" x2="93" y2="85" stroke="#06b6d4" strokeWidth="1.5"/>
        {/* Lines on left page */}
        {[0,1,2,3,4].map(i=>(
          <motion.line key={i} x1="38" y1={38+i*10} x2={75-i*4} y2={38+i*10}
            stroke="#06b6d4" strokeWidth="0.8" opacity="0.5"
            animate={{width:[0,37-i*4,37-i*4]}} transition={{duration:0.5,delay:i*0.2,repeat:Infinity,repeatDelay:3}}/>
        ))}
        {/* Lines on right page */}
        {[0,1,2,3,4].map(i=>(
          <line key={i} x1="96" y1={38+i*10} x2={133-i*2} y2={38+i*10} stroke="#06b6d4" strokeWidth="0.8" opacity="0.5"/>
        ))}
      </motion.g>
      {/* Floating stars/knowledge sparks */}
      {[[20,18],[160,22],[165,75],[15,80]].map(([x,y],i)=>(
        <motion.text key={i} x={x} y={y} fill="#06b6d4" fontSize="12"
          animate={{opacity:[0,1,0],scale:[0.5,1,0.5],y:[y,y-8,y]}}
          transition={{duration:2,repeat:Infinity,delay:i*0.7}}
          style={{transformOrigin:`${x}px ${y}px`}}>✦</motion.text>
      ))}
    </svg>
  );
}

function IlluConsulting() {
  return (
    <svg viewBox="0 0 180 110" fill="none" style={{width:"100%",height:"100%"}}>
      <circle cx="90" cy="55" r="50" fill="rgba(16,185,129,0.06)"/>
      {/* Building/office */}
      <rect x="55" y="30" width="70" height="70" rx="3" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.2"/>
      <rect x="55" y="30" width="70" height="12" rx="3" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1.2"/>
      {/* Windows */}
      {[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]].map(([c,r],i)=>(
        <motion.rect key={i} x={62+c*20} y={48+r*17} width="13" height="11" rx="1"
          fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth="0.8"
          animate={{fill:["rgba(16,185,129,0.05)","rgba(16,185,129,0.25)","rgba(16,185,129,0.05)"]}}
          transition={{duration:3,repeat:Infinity,delay:i*0.3}}/>
      ))}
      {/* Chart bars */}
      {[60,80,50,90,70].map((h,i)=>(
        <motion.rect key={i} x={18+i*7} y={100-h/2} width="5" height={h/2} rx="1"
          fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="0.8"
          initial={{scaleY:0}} animate={{scaleY:1}}
          transition={{duration:0.5,delay:i*0.15,repeat:Infinity,repeatDelay:3}}
          style={{transformOrigin:`${18+i*7+2.5}px 100px`}}/>
      ))}
      {/* Swelerion label */}
      <motion.text x="90" y="108" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="'JetBrains Mono',monospace"
        animate={{opacity:[0.5,1,0.5]}} transition={{duration:2,repeat:Infinity}}>
        SWELERION GLOBAL
      </motion.text>
    </svg>
  );
}

const skills = [
  { icon:"☁️", title:"DevOps & Cloud", bg:"rgba(37,99,235,0.07)", accent:"#2563eb", Illu:IlluCloud,
    tags:["AWS","Azure","Kubernetes","Terraform","Docker","Jenkins","GitHub Actions","CI/CD","Ansible","Prometheus"] },
  { icon:"⚛️", title:"Frontend Engineering", bg:"rgba(124,58,237,0.07)", accent:"#7c3aed", Illu:IlluFrontend,
    tags:["React","Next.js","Tailwind CSS","HTML5","CSS3","Vite","TypeScript","Framer Motion"] },
  { icon:"🖥️", title:"Backend Engineering", bg:"rgba(5,150,105,0.07)", accent:"#059669", Illu:IlluBackend,
    tags:["Node.js","PostgreSQL","REST APIs","Supabase","Firebase","Microservices"] },
  { icon:"🛡️", title:"Cybersecurity", bg:"rgba(239,68,68,0.07)", accent:"#ef4444", Illu:IlluCyber,
    tags:["Ethical Hacking","Penetration Testing","Vulnerability Assessment","Network Security","Malware Analysis"] },
  { icon:"🎨", title:"Graphic Design", bg:"rgba(217,119,6,0.07)", accent:"#d97706", Illu:IlluDesign,
    tags:["Adobe Photoshop","CorelDraw","Brand Identity","Event Graphics","Social Media Design","Print Design"] },
  { icon:"🤖", title:"Prompt Engineering", bg:"rgba(139,92,246,0.07)", accent:"#8b5cf6", Illu:IlluPrompt,
    tags:["LLM Prompting","AI Workflow Design","AI-powered Tools","Claude API","GPT Integration"] },
  { icon:"📚", title:"Curriculum Development", bg:"rgba(6,182,212,0.07)", accent:"#06b6d4", Illu:IlluCurriculum,
    tags:["DevOps Curriculum","Cloud Training","Cybersecurity Modules","Data Analytics","TRCN Certified"] },
  { icon:"🏢", title:"Tech Consulting", bg:"rgba(16,185,129,0.07)", accent:"#10b981", Illu:IlluConsulting,
    tags:["Cloud Strategy","Infrastructure Advisory","Swelerion Global Ltd","Client Delivery"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding:"6rem 5%", background:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="Skills & Expertise" title="Eight domains.<br/>One engineer."
          subtitle="Depth across cloud infrastructure, software engineering, security, design, and education — not a jack of all trades, but a master of each." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1.2rem" }}>
          {skills.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.45, delay:(i%4)*0.08 }}
              whileHover={{ y:-5, boxShadow:"var(--shadow-md)" }}
              style={{ borderRadius:"16px", overflow:"hidden", background:"var(--surface)", border:"1px solid var(--border)", boxShadow:"var(--shadow-sm)", transition:"all 0.28s" }}
            >
              {/* Illustration strip */}
              <div style={{ height:110, background:s.bg, borderBottom:"1px solid var(--border)", padding:"0" }}>
                <s.Illu />
              </div>
              {/* Content */}
              <div style={{ padding:"1.1rem 1.2rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.75rem" }}>
                  <span style={{ fontSize:"1.1rem" }}>{s.icon}</span>
                  <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9rem", color:"var(--text)" }}>{s.title}</span>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
                  {s.tags.map(tag=>(
                    <span key={tag} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.62rem", padding:"0.2rem 0.5rem", background:"var(--bg2)", border:"1px solid var(--border)", borderRadius:"5px", color:"var(--text3)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
