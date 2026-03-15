"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

function IlluSvcCloud() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{width:"100%",height:"100%"}}>
      <motion.path d="M18 58 Q8 58 8 46 Q8 34 18 34 Q20 24 30 22 Q40 18 46 28 Q56 24 58 34 Q68 34 68 46 Q68 58 56 58Z"
        fill="rgba(37,99,235,0.15)" stroke="#2563eb" strokeWidth="1.2"
        animate={{y:[0,-3,0]}} transition={{duration:2.5,repeat:Infinity,ease:"easeInOut"}}/>
      <motion.g animate={{rotate:360}} transition={{duration:8,repeat:Infinity,ease:"linear"}} style={{transformOrigin:"95px 20px"}}>
        {[0,60,120,180,240,300].map((a,i)=>{
          const r=a*Math.PI/180;
          return <line key={i} x1="95" y1="20" x2={95+10*Math.cos(r)} y2={20+10*Math.sin(r)} stroke="#2563eb" strokeWidth="1" opacity="0.6"/>;
        })}
        <circle cx="95" cy="20" r="4" fill="#2563eb"/>
      </motion.g>
      {[0,1,2].map(i=>(
        <motion.rect key={i} x={80+i*12} y="55" width="9" height="16" rx="1"
          fill="rgba(37,99,235,0.2)" stroke="#2563eb" strokeWidth="0.8"
          animate={{scaleY:[0.3,1,0.3]}} transition={{duration:2,repeat:Infinity,delay:i*0.4}}
          style={{transformOrigin:`${84+i*12}px 71px`}}/>
      ))}
    </svg>
  );
}

function IlluSvcWeb() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{width:"100%",height:"100%"}}>
      <rect x="10" y="10" width="100" height="60" rx="6" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="1"/>
      <rect x="10" y="10" width="100" height="16" rx="6" fill="rgba(124,58,237,0.18)" stroke="#7c3aed" strokeWidth="1"/>
      {[16,27,38].map((x,i)=><circle key={i} cx={x} cy="18" r="3" fill={["#ef4444","#f59e0b","#22c55e"][i]} opacity="0.8"/>)}
      <motion.rect x="18" y="34" width="84" height="6" rx="2" fill="rgba(124,58,237,0.15)" stroke="#7c3aed" strokeWidth="0.6"
        animate={{width:[0,84]}} transition={{duration:1.5,repeat:Infinity,repeatDelay:2}}/>
      <motion.rect x="18" y="44" width="60" height="4" rx="2" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="0.5"
        animate={{width:[0,60]}} transition={{duration:1.5,delay:0.3,repeat:Infinity,repeatDelay:2}}/>
      <motion.rect x="18" y="52" width="45" height="4" rx="2" fill="rgba(124,58,237,0.1)" stroke="#7c3aed" strokeWidth="0.5"
        animate={{width:[0,45]}} transition={{duration:1.5,delay:0.6,repeat:Infinity,repeatDelay:2}}/>
      <motion.rect x="18" y="62" width="30" height="8" rx="3" fill="rgba(124,58,237,0.2)" stroke="#7c3aed" strokeWidth="0.8"
        animate={{fill:["rgba(124,58,237,0.1)","rgba(124,58,237,0.4)","rgba(124,58,237,0.1)"]}} transition={{duration:2,repeat:Infinity}}/>
    </svg>
  );
}

function IlluSvcSec() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{width:"100%",height:"100%"}}>
      <motion.path d="M60 5 L88 18 L88 48 Q88 65 60 76 Q32 65 32 48 L32 18 Z"
        fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1.3"
        animate={{filter:["drop-shadow(0 0 0px #ef4444)","drop-shadow(0 0 5px #ef4444)","drop-shadow(0 0 0px #ef4444)"]}}
        transition={{duration:2.5,repeat:Infinity}}/>
      <rect x="52" y="40" width="16" height="12" rx="2" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1"/>
      <path d="M55 40 Q55 33 60 33 Q65 33 65 40" fill="none" stroke="#ef4444" strokeWidth="1.2"/>
      <circle cx="60" cy="46" r="2" fill="#ef4444"/>
      {[0,1,2].map(i=>(
        <motion.circle key={i} cx="60" cy="40" r={12+i*8} fill="none" stroke="#ef4444" strokeWidth="0.5"
          animate={{scale:[1,1.1,1],opacity:[0.2,0,0.2]}} transition={{duration:2,repeat:Infinity,delay:i*0.6}}
          style={{transformOrigin:"60px 40px"}}/>
      ))}
    </svg>
  );
}

function IlluSvcDesign() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{width:"100%",height:"100%"}}>
      <motion.g animate={{rotate:[0,-8,8,0]}} transition={{duration:4,repeat:Infinity}} style={{transformOrigin:"60px 35px"}}>
        <path d="M50 45 L60 15 L70 45 L60 40 Z" fill="rgba(217,119,6,0.2)" stroke="#d97706" strokeWidth="1.3"/>
        <path d="M52 45 L60 62 L68 45" fill="rgba(217,119,6,0.08)" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2"/>
      </motion.g>
      {["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#8b5cf6"].map((c,i)=>{
        const a=i*60*Math.PI/180;
        return (
          <motion.circle key={i} cx={96+14*Math.cos(a)} cy={40+14*Math.sin(a)} r="5"
            fill={c} opacity="0.8"
            animate={{scale:[1,1.25,1]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}}/>
        );
      })}
    </svg>
  );
}

function IlluSvcTrain() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{width:"100%",height:"100%"}}>
      <rect x="8" y="10" width="82" height="52" rx="4" fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth="1"/>
      <rect x="8" y="10" width="82" height="14" rx="4" fill="rgba(6,182,212,0.18)" stroke="#06b6d4" strokeWidth="1"/>
      <text x="49" y="20" textAnchor="middle" fill="#06b6d4" fontSize="7" fontFamily="'JetBrains Mono',monospace">DevOps 101</text>
      {[0,1,2].map(i=>(
        <motion.rect key={i} x="14" y={30+i*12} width={40+i*10} height="5" rx="1"
          fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="0.6"
          animate={{width:[0,40+i*10]}} transition={{duration:1,delay:i*0.3,repeat:Infinity,repeatDelay:3}}/>
      ))}
      {/* Student avatars */}
      {[0,1,2].map(i=>(
        <motion.g key={i} animate={{y:[0,-2,0]}} transition={{duration:2,repeat:Infinity,delay:i*0.5}}>
          <circle cx={96+0} cy={18+i*22} r="9" fill="rgba(6,182,212,0.12)" stroke="#06b6d4" strokeWidth="0.8"/>
          <circle cx={96+0} cy={13+i*22} r="4" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="0.8"/>
        </motion.g>
      ))}
    </svg>
  );
}

function IlluSvcAI() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{width:"100%",height:"100%"}}>
      {[[20,20],[60,15],[100,20],[10,50],[40,50],[80,50],[110,45],[25,72],[60,75],[95,72]].map(([cx,cy],i)=>(
        <motion.circle key={i} cx={cx} cy={cy} r="5"
          fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="1"
          animate={{r:[4,6,4],opacity:[0.5,1,0.5]}} transition={{duration:1.8,repeat:Infinity,delay:i*0.18}}/>
      ))}
      {[[20,20,60,15],[60,15,100,20],[20,20,10,50],[60,15,40,50],[60,15,80,50],
        [100,20,110,45],[10,50,25,72],[40,50,25,72],[40,50,60,75],[80,50,60,75],[80,50,95,72],[110,45,95,72]
      ].map(([x1,y1,x2,y2],i)=>(
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#8b5cf6" strokeWidth="0.7" opacity="0.2"
          animate={{opacity:[0.1,0.4,0.1]}} transition={{duration:2,repeat:Infinity,delay:i*0.12}}/>
      ))}
      <motion.text x="60" y="53" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="'JetBrains Mono',monospace"
        animate={{opacity:[1,0,1]}} transition={{duration:1,repeat:Infinity}}>_</motion.text>
    </svg>
  );
}

function IlluSvcConsult() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{width:"100%",height:"100%"}}>
      {[40,60,30,75,50].map((h,i)=>(
        <motion.rect key={i} x={10+i*21} y={75-h} width="16" height={h} rx="2"
          fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1"
          initial={{scaleY:0}} animate={{scaleY:1}}
          transition={{duration:0.6,delay:i*0.12,repeat:Infinity,repeatDelay:3}}
          style={{transformOrigin:`${18+i*21}px 75px`}}/>
      ))}
      <line x1="8" y1="75" x2="112" y2="75" stroke="#10b981" strokeWidth="1" opacity="0.4"/>
      <motion.path d="M10 55 Q30 40 50 45 Q70 52 90 32 Q100 24 112 30"
        fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="200" strokeDashoffset="200"
        animate={{strokeDashoffset:[200,0]}} transition={{duration:2,repeat:Infinity,repeatDelay:2}}/>
      <motion.circle cx="112" cy="30" r="4" fill="#10b981"
        animate={{scale:[1,1.4,1]}} transition={{duration:2,repeat:Infinity}}/>
    </svg>
  );
}

const services = [
  { icon:"☁️", bg:"rgba(37,99,235,0.07)", accent:"#2563eb", accentDim:"rgba(37,99,235,0.08)", accentBorder:"rgba(37,99,235,0.2)", title:"Cloud & DevOps Engineering",
    desc:"AWS and Azure infrastructure, Kubernetes orchestration, CI/CD pipelines, Terraform IaC, Docker containerization, and production monitoring.", Illu:IlluSvcCloud },
  { icon:"💻", bg:"rgba(124,58,237,0.07)", accent:"#7c3aed", accentDim:"rgba(124,58,237,0.08)", accentBorder:"rgba(124,58,237,0.2)", title:"Web Development",
    desc:"Full-stack web applications — React/Next.js frontends to Node.js/PostgreSQL backends. Clean code, modern design, deployed and production-ready.", Illu:IlluSvcWeb },
  { icon:"🔐", bg:"rgba(239,68,68,0.07)", accent:"#ef4444", accentDim:"rgba(239,68,68,0.08)", accentBorder:"rgba(239,68,68,0.2)", title:"Cybersecurity Assessment",
    desc:"Penetration testing, vulnerability assessments, ethical hacking engagements, and security awareness training for teams and organisations.", Illu:IlluSvcSec },
  { icon:"🎨", bg:"rgba(217,119,6,0.07)", accent:"#d97706", accentDim:"rgba(217,119,6,0.08)", accentBorder:"rgba(217,119,6,0.2)", title:"Graphic Design & Brand Identity",
    desc:"Event flyers, brand identity systems, social media graphics, and print materials — designed in Photoshop and CorelDraw weekly.", Illu:IlluSvcDesign },
  { icon:"📚", bg:"rgba(6,182,212,0.07)", accent:"#06b6d4", accentDim:"rgba(6,182,212,0.08)", accentBorder:"rgba(6,182,212,0.2)", title:"Tech Training & Curriculum",
    desc:"Custom DevOps, Cloud, and Cybersecurity training programs. Hands-on, scenario-based learning that actually sticks — not death by PowerPoint.", Illu:IlluSvcTrain },
  { icon:"🤖", bg:"rgba(139,92,246,0.07)", accent:"#8b5cf6", accentDim:"rgba(139,92,246,0.08)", accentBorder:"rgba(139,92,246,0.2)", title:"AI & Prompt Engineering",
    desc:"AI-powered workflows, LLM integrations, and intelligent automation tools that give your product or business a genuine competitive edge.", Illu:IlluSvcAI },
  { icon:"🏢", bg:"rgba(16,185,129,0.07)", accent:"#10b981", accentDim:"rgba(16,185,129,0.08)", accentBorder:"rgba(16,185,129,0.2)", title:"Cloud Consulting — Swelerion",
    desc:"Strategic cloud advisory through Swelerion Global Ltd. Architecture reviews, migration planning, cost optimisation, and governance.", Illu:IlluSvcConsult },
];

export default function Services() {
  return (
    <section id="services" style={{ padding:"6rem 5%", background:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader label="Services" title="How I can<br/>help you."
          subtitle="Whether you need infrastructure built, a website shipped, your team trained, or your brand visualised — I've got you." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.2rem" }}>
          {services.map((s,i)=>(
            <motion.div key={s.title}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.42, delay:(i%3)*0.09 }}
              whileHover={{ y:-5, boxShadow:"var(--shadow-md)" }}
              style={{ borderRadius:"16px", overflow:"hidden", background:"var(--surface)", border:`1.5px solid ${s.accentBorder}`, boxShadow:"var(--shadow-sm)", transition:"all 0.28s" }}
            >
              <div style={{ height:80, background:s.accentDim, borderBottom:`1px solid ${s.accentBorder}` }}>
                <s.Illu />
              </div>
              <div style={{ padding:"1.2rem 1.3rem 1.4rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.55rem" }}>
                  <span style={{ fontSize:"1.1rem" }}>{s.icon}</span>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.95rem", color:"var(--text)" }}>{s.title}</h3>
                </div>
                <p style={{ fontSize:"0.84rem", color:"var(--text2)", lineHeight:1.78, fontWeight:300 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
