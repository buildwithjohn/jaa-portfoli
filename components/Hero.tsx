"use client";
import { motion, Easing } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as Easing, delay },
});

const stats = [
  { num: "9+", label: "Projects Shipped" },
  { num: "8", label: "Skill Domains" },
  { num: "2", label: "Companies Led" },
  { num: "∞", label: "Curiosity" },
];

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "110px 5% 80px", position: "relative", overflow: "hidden",
      background: "var(--bg)",
    }}>
      {/* Grid bg */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Light mode gradient accent top-right */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.35, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-120px", right: "-120px",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, var(--cyan-dim), transparent 70%)",
          filter: "blur(90px)", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,111,205,0.08), transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />

      <div style={{
        maxWidth: 1200, margin: "0 auto", width: "100%",
        position: "relative", zIndex: 1,
        display: "grid", gridTemplateColumns: "1fr auto",
        gap: "5rem", alignItems: "center",
      }}>
        {/* ── LEFT ── */}
        <div>
          {/* Status pill */}
          <motion.div {...fadeUp(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.8rem", padding: "0.35rem 0.9rem 0.35rem 0.6rem", background: "var(--cyan-dim)", border: "1px solid var(--border)", borderRadius: "100px" }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", display: "inline-block", flexShrink: 0 }}
            />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
              Available for Remote Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.22)} style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
            fontWeight: 800, lineHeight: 1.06,
            letterSpacing: "-0.035em", color: "var(--text)",
            marginBottom: "0.6rem",
          }}>
            John Ayomide<br />
            <span className="text-gradient">Akinola</span>
          </motion.h1>

          {/* Subtitle row */}
          <motion.div {...fadeUp(0.35)} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "1.6rem" }}>
            {["DevOps & Cloud Engineer", "Instructor", "Consultant", "Graphics Designer"].map((t, i, arr) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--text2)", letterSpacing: "0.03em" }}>{t}</span>
                {i < arr.length - 1 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--cyan)", display: "inline-block", opacity: 0.6 }} />}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p {...fadeUp(0.46)} style={{ fontSize: "1.04rem", color: "var(--text2)", maxWidth: 540, lineHeight: 1.85, fontWeight: 300, marginBottom: "2.2rem" }}>
            I <strong style={{ color: "var(--text)", fontWeight: 600 }}>build cloud infrastructure</strong>, design systems that scale, craft visual identities that stand out, and train the next generation of tech professionals — all from{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>Lagos, Nigeria</strong>, for the world.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.56)} style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginBottom: "2.8rem" }}>
            <motion.a
              whileHover={{ y: -2, boxShadow: "var(--shadow-cyan)" }}
              href="#projects"
              style={{
                padding: "0.85rem 2rem", background: "var(--cyan)", color: "#fff",
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.92rem",
                textDecoration: "none", borderRadius: "10px",
                boxShadow: "var(--shadow-cyan)", display: "inline-block",
              }}
            >
              View My Work →
            </motion.a>
            <motion.a
              whileHover={{ y: -2, borderColor: "var(--cyan)", color: "var(--cyan)" }}
              href="#contact"
              style={{
                padding: "0.85rem 2rem",
                border: "1.5px solid var(--border)",
                color: "var(--text2)", fontFamily: "'Syne', sans-serif",
                fontWeight: 600, fontSize: "0.92rem",
                textDecoration: "none", borderRadius: "10px",
                background: "var(--surface)",
                boxShadow: "var(--shadow-sm)",
                display: "inline-block", transition: "all 0.2s",
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.68)} style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--border)" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--cyan)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.66rem", color: "var(--text3)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.3rem" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.95, ease: "easeOut", delay: 0.4 }}
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
          className="hidden lg:flex"
        >
          {/* Outer glow ring */}
          <div style={{
            position: "absolute", inset: -20, borderRadius: "50%",
            background: "radial-gradient(circle, var(--cyan-dim), transparent 65%)",
            filter: "blur(20px)",
          }} />

          {/* Spinning dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute", inset: -18, borderRadius: "50%",
              border: "1.5px dashed var(--border)",
            }}
          >
            <span style={{
              position: "absolute", top: -5, left: "50%", transform: "translateX(-50%)",
              width: 10, height: 10, borderRadius: "50%",
              background: "var(--cyan)", boxShadow: "0 0 12px var(--cyan-glow)",
              display: "inline-block",
            }} />
          </motion.div>

          {/* Solid ring */}
          <div style={{
            position: "absolute", inset: -8, borderRadius: "50%",
            border: "1px solid var(--border)",
          }} />

          {/* Photo */}
          <div style={{
            width: 330, height: 330, borderRadius: "50%",
            overflow: "hidden", position: "relative", flexShrink: 0,
            border: "4px solid var(--surface)",
            boxShadow: "var(--shadow-lg), 0 0 0 8px var(--surface2)",
          }}>
            <Image
              src="/john.jpg"
              alt="John Ayomide Akinola"
              fill
              style={{ objectFit: "cover", objectPosition: "center 8%" }}
              priority
            />
          </div>

          {/* Floating badges */}
          {[
            { text: "AWS Certified",   dot: "var(--green)", pos: { top: "10px", right: "-44px" },   anim: -8 },
            { text: "⚡ K8s Expert",   dot: "var(--cyan)",  pos: { bottom: "-6px", right: "-48px" }, anim: 8 },
            { text: "🎨 Photoshop Pro", dot: "var(--gold)", pos: { bottom: "62px", left: "-52px" },  anim: -6 },
          ].map((b, i) => (
            <motion.div
              key={b.text}
              animate={{ y: [0, b.anim, 0] }}
              transition={{ duration: 3.5 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", ...b.pos,
                padding: "0.5rem 0.9rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem",
                color: "var(--text2)", whiteSpace: "nowrap",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: b.dot, marginRight: 6, verticalAlign: "middle" }} />
              {b.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
