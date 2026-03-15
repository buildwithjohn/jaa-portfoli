"use client";
import { motion } from "framer-motion";

interface Props { label: string; title: string; subtitle?: string; }

export default function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ marginBottom:"3.5rem" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", marginBottom:"0.8rem" }}>
        <span style={{ width:20, height:1, background:"var(--cyan)", display:"inline-block" }} />
        <span style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.7rem", color:"var(--cyan)", letterSpacing:"0.15em", textTransform:"uppercase" }}>{label}</span>
      </div>
      <h2 style={{ fontFamily:"'Syne', sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:"var(--text)", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"1rem" }} dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p style={{ fontSize:"0.97rem", color:"var(--text2)", maxWidth:580, fontWeight:300, lineHeight:1.8 }}>{subtitle}</p>}
    </motion.div>
  );
}
