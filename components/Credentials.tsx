"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const credentials = [
  {
    id: "aws",
    tag: "Cloud Certification",
    badge: "AWS CCP",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    desc: "Validates deep understanding of AWS Cloud concepts, services, security, architecture, and pricing — the entry point to the full AWS certification pathway.",
    accent: "#f59e0b",
    accentDim: "rgba(245,158,11,0.12)",
    accentBorder: "rgba(245,158,11,0.3)",
    visual: "aws",
  },
  {
    id: "msc",
    tag: "Postgraduate Degree",
    badge: "M.Sc IT",
    title: "Master's Degree in Information Technology",
    issuer: "Graduate — Advanced Engineering",
    year: "Postgraduate",
    desc: "Advanced study in IT systems, network architecture, and emerging technologies — forming the academic backbone behind hands-on engineering practice.",
    accent: "#2563eb",
    accentDim: "rgba(37,99,235,0.1)",
    accentBorder: "rgba(37,99,235,0.25)",
    visual: "msc",
  },
  {
    id: "trcn",
    tag: "Professional Certification",
    badge: "TRCN",
    title: "TRCN Professional Teaching Certificate",
    issuer: "Teachers Registration Council of Nigeria",
    year: "Active",
    desc: "Nationally recognised educator certification, validating professional-level qualification to teach, assess, and design curriculum in Nigeria.",
    accent: "#059669",
    accentDim: "rgba(5,150,105,0.1)",
    accentBorder: "rgba(5,150,105,0.28)",
    visual: "trcn",
  },
  {
    id: "bsc",
    tag: "Undergraduate Degree",
    badge: "B.Sc",
    title: "B.Sc. Chemistry Education",
    issuer: "Science & Education — Undergraduate",
    year: "Foundation",
    desc: "The origin of John's ability to break down complex technical concepts — rigorous science training fused with pedagogy that still powers every class he teaches.",
    accent: "#7c3aed",
    accentDim: "rgba(124,58,237,0.1)",
    accentBorder: "rgba(124,58,237,0.28)",
    visual: "bsc",
  },
];

/* ── Animated SVG visuals per credential ── */
function VisualAWS() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
      <rect width="200" height="140" rx="12" fill="rgba(245,158,11,0.07)"/>
      {/* Cloud shape */}
      <motion.g animate={{ y:[0,-4,0] }} transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}>
        <ellipse cx="100" cy="72" rx="52" ry="28" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
        <ellipse cx="100" cy="72" rx="38" ry="20" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="100" y="77" textAnchor="middle" fill="#f59e0b" fontSize="11" fontFamily="'JetBrains Mono',monospace" fontWeight="600">AWS</text>
      </motion.g>
      {/* Orbiting services */}
      {[
        { label:"EC2", angle:0 },
        { label:"S3",  angle:72 },
        { label:"IAM", angle:144 },
        { label:"VPC", angle:216 },
        { label:"RDS", angle:288 },
      ].map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const rx = 80, ry = 48;
        const x = 100 + rx * Math.cos(rad);
        const y = 72  + ry * Math.sin(rad);
        return (
          <motion.g key={s.label}
            animate={{ opacity:[0.5,1,0.5] }}
            transition={{ duration:2, repeat:Infinity, delay:i*0.4 }}>
            <circle cx={x} cy={y} r="14" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1"/>
            <text x={x} y={y+4} textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="'JetBrains Mono',monospace">{s.label}</text>
          </motion.g>
        );
      })}
      {/* Pulse rings */}
      {[1,2,3].map(i => (
        <motion.circle key={i} cx="100" cy="72" r={i*22}
          fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.15"
          animate={{ scale:[1,1.08,1], opacity:[0.15,0.05,0.15] }}
          transition={{ duration:3, repeat:Infinity, delay:i*0.5 }}
          style={{ transformOrigin:"100px 72px" }}
        />
      ))}
    </svg>
  );
}

function VisualMSc() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
      <rect width="200" height="140" rx="12" fill="rgba(37,99,235,0.06)"/>
      {/* Mortar board */}
      <motion.g animate={{ y:[0,-3,0] }} transition={{ duration:3.5, repeat:Infinity, ease:"easeInOut" }}>
        <rect x="72" y="62" width="56" height="32" rx="4" fill="rgba(37,99,235,0.2)" stroke="#2563eb" strokeWidth="1.5"/>
        <polygon points="100,38 128,56 100,66 72,56" fill="rgba(37,99,235,0.25)" stroke="#2563eb" strokeWidth="1.5"/>
        <line x1="128" y1="56" x2="128" y2="72" stroke="#2563eb" strokeWidth="1.5"/>
        <motion.circle cx="128" cy="76" r="4" fill="#2563eb"
          animate={{ y:[0,4,0] }} transition={{ duration:1.5, repeat:Infinity }} />
      </motion.g>
      {/* Floating knowledge nodes */}
      {[
        { x:30, y:30, t:"AI/ML",  d:1.0 },
        { x:170, y:28, t:"Cloud", d:1.6 },
        { x:22,  y:110, t:"Net",  d:0.8 },
        { x:168, y:112, t:"Sec",  d:1.3 },
      ].map(n => (
        <motion.g key={n.t} animate={{ opacity:[0.4,0.9,0.4], y:[0,-5,0] }} transition={{ duration:3, repeat:Infinity, delay:n.d }}>
          <rect x={n.x-16} y={n.y-10} width="32" height="18" rx="5" fill="rgba(37,99,235,0.12)" stroke="#3b82f6" strokeWidth="1"/>
          <text x={n.x} y={n.y+4} textAnchor="middle" fill="#3b82f6" fontSize="8" fontFamily="'JetBrains Mono',monospace">{n.t}</text>
        </motion.g>
      ))}
      {/* Connecting lines */}
      {[[100,62,38,30],[100,62,170,28],[100,94,30,110],[100,94,168,112]].map(([x1,y1,x2,y2],i) => (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#2563eb" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.3"
          animate={{ opacity:[0.15,0.4,0.15] }} transition={{ duration:2.5, repeat:Infinity, delay:i*0.5 }}/>
      ))}
    </svg>
  );
}

function VisualTRCN() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
      <rect width="200" height="140" rx="12" fill="rgba(5,150,105,0.06)"/>
      {/* Chalkboard */}
      <rect x="40" y="30" width="120" height="70" rx="6" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="1.5"/>
      {/* Chalk lines */}
      {[
        "DevOps", "Cloud", "Linux", "Security",
      ].map((t,i) => (
        <motion.g key={t} animate={{ opacity:[0,1,1] }} transition={{ duration:0.5, delay:i*0.8, repeat:Infinity, repeatDelay:3 }}>
          <line x1="52" y1={46+i*14} x2={52+t.length*7} y2={46+i*14} stroke="#059669" strokeWidth="1.2" strokeLinecap="round"/>
          <text x="54" y={50+i*14} fill="#059669" fontSize="9" fontFamily="'JetBrains Mono',monospace" opacity="0.85">{t}</text>
        </motion.g>
      ))}
      {/* Teacher figure */}
      <motion.g animate={{ x:[0,2,0,-2,0] }} transition={{ duration:4, repeat:Infinity }}>
        <circle cx="160" cy="88" r="8" fill="none" stroke="#059669" strokeWidth="1.5"/>
        <line x1="160" y1="96" x2="160" y2="116" stroke="#059669" strokeWidth="1.5"/>
        <line x1="150" y1="104" x2="170" y2="104" stroke="#059669" strokeWidth="1.5"/>
        <line x1="160" y1="116" x2="154" y2="128" stroke="#059669" strokeWidth="1.5"/>
        <line x1="160" y1="116" x2="166" y2="128" stroke="#059669" strokeWidth="1.5"/>
      </motion.g>
      {/* TRCN stamp */}
      <motion.g animate={{ opacity:[0.5,1,0.5] }} transition={{ duration:2.5, repeat:Infinity }}>
        <circle cx="40" cy="116" r="14" fill="rgba(5,150,105,0.15)" stroke="#059669" strokeWidth="1"/>
        <text x="40" y="120" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="'JetBrains Mono',monospace" fontWeight="700">TRCN</text>
      </motion.g>
    </svg>
  );
}

function VisualBSc() {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
      <rect width="200" height="140" rx="12" fill="rgba(124,58,237,0.06)"/>
      {/* Atom */}
      <motion.g style={{ transformOrigin:"100px 70px" }} animate={{ rotate:360 }} transition={{ duration:12, repeat:Infinity, ease:"linear" }}>
        <ellipse cx="100" cy="70" rx="50" ry="18" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5"/>
      </motion.g>
      <motion.g style={{ transformOrigin:"100px 70px" }} animate={{ rotate:-360 }} transition={{ duration:9, repeat:Infinity, ease:"linear" }}>
        <ellipse cx="100" cy="70" rx="50" ry="18" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5" transform="rotate(60,100,70)"/>
      </motion.g>
      <motion.g style={{ transformOrigin:"100px 70px" }} animate={{ rotate:360 }} transition={{ duration:15, repeat:Infinity, ease:"linear" }}>
        <ellipse cx="100" cy="70" rx="50" ry="18" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5" transform="rotate(120,100,70)"/>
      </motion.g>
      {/* Nucleus */}
      <circle cx="100" cy="70" r="10" fill="rgba(124,58,237,0.25)" stroke="#7c3aed" strokeWidth="1.5"/>
      <text x="100" y="74" textAnchor="middle" fill="#7c3aed" fontSize="8" fontFamily="'JetBrains Mono',monospace">Chem</text>
      {/* Electrons */}
      {[0,120,240].map((angle,i) => {
        const r = (angle * Math.PI) / 180;
        return (
          <motion.circle key={i} r="4" fill="#7c3aed" opacity="0.8"
            cx={100 + 50*Math.cos(r)} cy={70 + 18*Math.sin(r)}
            animate={{ opacity:[0.4,1,0.4] }} transition={{ duration:1.5, repeat:Infinity, delay:i*0.5 }}/>
        );
      })}
      {/* Edu label */}
      <text x="100" y="122" textAnchor="middle" fill="#7c3aed" fontSize="9" fontFamily="'JetBrains Mono',monospace" opacity="0.7">Chemistry + Education</text>
    </svg>
  );
}

const visuals: Record<string, React.FC> = { aws: VisualAWS, msc: VisualMSc, trcn: VisualTRCN, bsc: VisualBSc };

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding:"6rem 5%", background:"var(--bg2)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <SectionHeader
          label="Degrees & Certifications"
          title="Credentials that<br/>back the work."
          subtitle="Academic depth meets industry certification — every qualification reflects a deliberate investment in excellence."
        />

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(520px,1fr))", gap:"1.4rem" }}>
          {credentials.map((c, i) => {
            const Visual = visuals[c.visual];
            return (
              <motion.div key={c.id}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}
                whileHover={{ y:-4, boxShadow:"var(--shadow-lg)" }}
                style={{
                  borderRadius:"18px", overflow:"hidden",
                  background:"var(--surface)", border:`1.5px solid ${c.accentBorder}`,
                  boxShadow:"var(--shadow-sm)", transition:"all 0.3s",
                  display:"flex", flexDirection:"column",
                }}
              >
                {/* Visual strip */}
                <div style={{ height:140, position:"relative", overflow:"hidden", background:c.accentDim, borderBottom:`1px solid ${c.accentBorder}` }}>
                  <Visual />
                  {/* Year badge */}
                  <div style={{ position:"absolute", top:12, right:14, padding:"0.22rem 0.65rem", background:"var(--surface)", border:`1px solid ${c.accentBorder}`, borderRadius:"20px", fontFamily:"'JetBrains Mono',monospace", fontSize:"0.64rem", color:c.accent, fontWeight:600 }}>
                    {c.year}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding:"1.4rem 1.6rem 1.6rem" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.6rem" }}>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.63rem", color:c.accent, letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:700, padding:"0.18rem 0.6rem", background:c.accentDim, borderRadius:"5px" }}>{c.tag}</span>
                    <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.78rem", fontWeight:800, color:c.accent, marginLeft:"auto" }}>{c.badge}</span>
                  </div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.06rem", color:"var(--text)", marginBottom:"0.28rem", lineHeight:1.3 }}>{c.title}</h3>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.68rem", color:"var(--text3)", marginBottom:"0.85rem" }}>{c.issuer}</div>
                  <p style={{ fontSize:"0.84rem", color:"var(--text2)", lineHeight:1.8, fontWeight:300 }}>{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA note */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.45 }}
          style={{ marginTop:"2rem", padding:"1.1rem 1.5rem", background:"var(--cyan-dim)", border:"1px solid var(--border)", borderRadius:"12px", display:"flex", alignItems:"center", gap:"0.9rem" }}>
          <span style={{ fontSize:"1.1rem" }}>🚀</span>
          <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.74rem", color:"var(--cyan)", lineHeight:1.7 }}>
            Currently pursuing AWS Solutions Architect &amp; DevOps Professional certifications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
