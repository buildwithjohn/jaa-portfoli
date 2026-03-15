"use client";
import { motion, Easing } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as Easing, delay },
});

const stats = [
  { num: "9+", label: "Projects Shipped" },
  { num: "8", label: "Skill Domains" },
  { num: "2", label: "Companies Led" },
  { num: "∞", label: "Curiosity" },
];

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 80px", position: "relative", overflow: "hidden", background: "var(--bg)" }}>
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 0.5, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-100px", right: "-100px", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, var(--cyan-dim), transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }}
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: 0, left: "-100px", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,111,205,0.12), transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}>

        {/* LEFT CONTENT */}
        <div>
          {/* Status badge */}
          <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
            <span style={{ width: 30, height: 1, background: "var(--cyan)", display: "inline-block" }} />
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--cyan)", display: "inline-block" }}
            />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Available for Remote Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.25)} style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "0.5rem" }}>
            John Ayomide<br />
            <span className="text-gradient">Akinola</span>
          </motion.h1>

          {/* Titles */}
          <motion.p {...fadeUp(0.4)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--text2)", letterSpacing: "0.05em", marginBottom: "1.5rem" }}>
            DevOps & Cloud Engineer
            <span style={{ color: "var(--cyan)", margin: "0 0.4rem" }}>/</span>
            Instructor
            <span style={{ color: "var(--cyan)", margin: "0 0.4rem" }}>/</span>
            Consultant
            <span style={{ color: "var(--cyan)", margin: "0 0.4rem" }}>/</span>
            Graphics Designer
          </motion.p>

          {/* Bio */}
          <motion.p {...fadeUp(0.5)} style={{ fontSize: "1.02rem", color: "var(--text2)", maxWidth: 560, lineHeight: 1.85, fontWeight: 300, marginBottom: "2.5rem" }}>
            I <strong style={{ color: "var(--text)", fontWeight: 500 }}>build cloud infrastructure</strong>, design systems that scale, craft visual identities that stand out, and train the next generation of tech professionals — all from{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>Lagos, Nigeria</strong>, for the world.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.62)} style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
            <motion.a
              whileHover={{ y: -2, boxShadow: "0 0 50px rgba(0,200,255,0.45)" }}
              href="#projects"
              style={{ padding: "0.85rem 2rem", background: "var(--cyan)", color: "#050a12", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", borderRadius: "8px", boxShadow: "0 0 30px var(--cyan-glow)", display: "inline-block" }}
            >
              View My Work →
            </motion.a>
            <motion.a
              whileHover={{ y: -2, borderColor: "var(--cyan)", color: "var(--cyan)" }}
              href="#contact"
              style={{ padding: "0.85rem 2rem", border: "1px solid var(--border)", color: "var(--text)", fontWeight: 500, fontSize: "0.92rem", textDecoration: "none", borderRadius: "8px", background: "var(--surface)", display: "inline-block", transition: "all 0.2s" }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.75)} style={{ display: "flex", flexWrap: "wrap", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.9rem", fontWeight: 800, color: "var(--cyan)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.67rem", color: "var(--text3)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: "0.2rem" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
          className="hidden lg:flex"
        >
          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", inset: -24, borderRadius: "50%", border: "1px solid var(--border)" }}
          >
            <span style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", width: 8, height: 8, borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan-glow)", display: "inline-block" }} />
          </motion.div>

          {/* Second inner ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", inset: -2, borderRadius: "50%", border: "1px dashed var(--border)" }}
          />

          {/* Photo circle — tighter crop, bolder */}
          <div style={{ width: 320, height: 320, borderRadius: "50%", overflow: "hidden", position: "relative", border: "4px solid var(--surface2)", flexShrink: 0, boxShadow: "0 0 60px var(--cyan-dim)" }}>
            <Image
              src="/john.jpg"
              alt="John Ayomide Akinola"
              fill
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
              priority
            />
          </div>

          {/* Floating badges */}
          {[
            { text: "AWS Certified", dot: "var(--green)", style: { top: "10px", right: "-38px" }, delay: 0 },
            { text: "⚡ K8s Expert", dot: "var(--cyan)", style: { bottom: "-8px", right: "-44px" }, delay: 1 },
            { text: "🎨 Photoshop Pro", dot: "var(--gold)", style: { bottom: "58px", left: "-48px" }, delay: 0.5 },
          ].map((b, i) => (
            <motion.div
              key={b.text}
              animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", ...b.style,
                padding: "0.45rem 0.8rem", background: "var(--surface)",
                border: "1px solid var(--border)", borderRadius: "8px",
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem",
                color: "var(--text2)", whiteSpace: "nowrap", backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px var(--shadow)",
              }}
            >
              <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: b.dot, marginRight: 5, verticalAlign: "middle" }} />
              {b.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
