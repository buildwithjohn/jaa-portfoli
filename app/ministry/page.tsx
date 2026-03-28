"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import WorldEasterEgg from "@/components/WorldEasterEgg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const expressions = [
  { icon: "📖", title: "Teaching & Doctrine", desc: "Expounding Scripture with simplicity, depth, and accuracy — helping believers understand not just the letter, but the intent and application of God's Word." },
  { icon: "🏫", title: "School of Disciples", desc: "A structured discipleship system guiding believers through intentional spiritual growth, transformation, accountability, and practical application of truth." },
  { icon: "🎓", title: "Campus Discipleship Network", desc: "A growing network reaching student communities, running a mini Bible school with foundational doctrine, structured discipleship, and leadership development." },
  { icon: "📿", title: "Devotional Systems", desc: "Structured devotional resources building consistency — Bible study, reflection, confessions, prayer, and scripture memorisation in a complete daily growth system." },
  { icon: "🔥", title: "The Refuel Experience", desc: "Annual revival and empowerment gathering focused on spiritual renewal, restoration of purpose, and equipping believers for kingdom impact." },
];

const emphasis = [
  "The integrity and authority of God's Word",
  "The ministry and leading of the Holy Spirit",
  "Spiritual growth and maturity",
  "Living in alignment with God's will",
  "Kingdom service and responsibility",
  "The balance between spiritual devotion and practical living",
];

export default function MinistryWorld() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";

  return (
    <main style={{ minHeight: "100vh", background: "#080103", color: "#fef2f2", overflow: "hidden" }}>

      {/* ── MINISTRY NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "0 5%", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,1,3,0.92)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(159,18,57,0.25)",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", cursor: "pointer", padding: "4px 0" }}>
          <span style={{ pointerEvents: "none", display: "flex" }}>
            <Image src="/jaa-logo-white.png" alt="JAA" width={64} height={30}
              style={{ objectFit: "contain", height: 30, width: "auto" }} priority />
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <Link href="/" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "rgba(252,165,165,0.6)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>← All Worlds</Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 80px", position: "relative", overflow: "hidden" }}>

        {/* Rich dark background layers */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(159,18,57,0.18), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(159,18,57,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(159,18,57,0.04) 1px,transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />

        {/* Candle-like orbs */}
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }} transition={{ duration: 6, repeat: Infinity }}
          style={{ position: "absolute", top: 100, right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(215,119,6,0.15), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }} transition={{ duration: 9, repeat: Infinity, delay: 3 }}
          style={{ position: "absolute", bottom: 0, left: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(159,18,57,0.12), transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>

          {/* World label */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "2rem" }}>
            <span style={{ width: 24, height: 2, background: "#9f1239", display: "inline-block", borderRadius: 2 }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "#f87171", letterSpacing: "0.2em", textTransform: "uppercase" }}>Ministerial World</span>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }} className="hero-grid">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.4rem,5.5vw,4.8rem)", fontWeight: 800, color: "#fff9f9", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: "0.8rem" }}>
                House of Joy<br />
                <span style={{ background: "linear-gradient(135deg,#9f1239,#d97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Ministries
                </span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.8rem", color: "#fca5a5", letterSpacing: "0.06em", marginBottom: "1.8rem", textTransform: "uppercase" }}>
                John Ayomide Akinola · Teaching Minister · Convener, The Refuel Experience
              </motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                style={{ fontSize: "1.05rem", color: "rgba(254,242,242,0.7)", maxWidth: 580, lineHeight: 1.88, fontWeight: 300, marginBottom: "2.5rem" }}>
                A teaching minister with a clear mandate — to raise believers who are deeply rooted in God&apos;s Word, mature in character, and effective in kingdom service. Not building crowds. Building people.
              </motion.p>

              {/* Vision statement */}
              <motion.blockquote initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                style={{ borderLeft: "3px solid #9f1239", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.05rem", color: "#fef2f2", fontStyle: "italic", lineHeight: 1.75, fontWeight: 600 }}>
                  &ldquo;To raise a generation of believers who are grounded in truth, led by the Spirit, and equipped to function effectively in their God-given assignments.&rdquo;
                </p>
              </motion.blockquote>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                <a href="#refuel" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 1.8rem", background: "#9f1239", color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", borderRadius: "10px", boxShadow: "0 4px 24px rgba(159,18,57,0.45)" }}>
                  🔥 The Refuel Experience
                </a>
                <a href="#expressions" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 1.8rem", border: "1.5px solid rgba(159,18,57,0.4)", color: "#fca5a5", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", borderRadius: "10px", background: "rgba(159,18,57,0.08)", transition: "all 0.2s" }}>
                  Ministry Expressions
                </a>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div className="hero-photo-col" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.4 }}
              style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: -24, borderRadius: "50%", background: "radial-gradient(circle, rgba(159,18,57,0.2), transparent 65%)", filter: "blur(24px)" }} />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: -18, borderRadius: "50%", border: "1px dashed rgba(159,18,57,0.4)" }}>
                <span style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", width: 8, height: 8, borderRadius: "50%", background: "#9f1239", boxShadow: "0 0 10px rgba(159,18,57,0.8)", display: "inline-block" }} />
              </motion.div>
              <div style={{ width: 300, height: 300, borderRadius: "50%", overflow: "hidden", border: "4px solid rgba(159,18,57,0.4)", boxShadow: "0 0 60px rgba(159,18,57,0.2), 0 0 0 8px rgba(159,18,57,0.08)" }}>
                <Image src="/john.jpg" alt="John Ayomide Akinola" width={300} height={300}
                  style={{ objectFit: "cover", objectPosition: "center 18%", width: "100%", height: "100%" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPRESSIONS ── */}
      <section id="expressions" style={{ padding: "6rem 5%", background: "rgba(12,1,5,0.95)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div {...fadeUp(0)} style={{ marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
              <span style={{ width: 24, height: 2, background: "#9f1239", display: "inline-block", borderRadius: 2 }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "#f87171", letterSpacing: "0.18em", textTransform: "uppercase" }}>Ministry Expressions</span>
            </div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#fef2f2", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Five expressions.<br />One mandate.
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.3rem" }}>
            {expressions.map((e, i) => (
              <motion.div key={e.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(159,18,57,0.5)" }}
                style={{ padding: "1.8rem", borderRadius: "16px", background: "rgba(159,18,57,0.06)", border: "1.5px solid rgba(159,18,57,0.18)", transition: "all 0.28s" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{e.icon}</div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fef2f2", marginBottom: "0.6rem" }}>{e.title}</h3>
                <p style={{ fontSize: "0.84rem", color: "rgba(254,202,202,0.75)", lineHeight: 1.78, fontWeight: 300 }}>{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHING EMPHASIS ── */}
      <section style={{ padding: "5rem 5%", background: "#080103" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
          <motion.div {...fadeUp(0)}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
              <span style={{ width: 24, height: 2, background: "#9f1239", display: "inline-block", borderRadius: 2 }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "#f87171", letterSpacing: "0.18em", textTransform: "uppercase" }}>Teaching Emphasis</span>
            </div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.7rem,3vw,2.5rem)", fontWeight: 800, color: "#fef2f2", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              What is consistently taught.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {emphasis.map((e, i) => (
                <motion.div key={e} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", padding: "0.9rem 1.1rem", background: "rgba(159,18,57,0.06)", border: "1px solid rgba(159,18,57,0.18)", borderRadius: "10px" }}>
                  <span style={{ color: "#d97706", fontSize: "0.9rem", flexShrink: 0, marginTop: "0.1rem" }}>✦</span>
                  <span style={{ fontSize: "0.88rem", color: "rgba(254,242,242,0.8)", lineHeight: 1.6 }}>{e}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <div style={{ padding: "2.5rem", background: "rgba(159,18,57,0.08)", border: "1.5px solid rgba(159,18,57,0.25)", borderRadius: "20px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📜</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#fef2f2", marginBottom: "1rem" }}>Philosophy of Ministry</h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(254,202,202,0.8)", lineHeight: 1.85, fontWeight: 300, marginBottom: "1.2rem" }}>
                Spiritual growth must be intentional and structured. Believers should not only experience God but also grow in understanding, discipline, and responsibility.
              </p>
              <p style={{ fontSize: "0.88rem", color: "rgba(254,202,202,0.8)", lineHeight: 1.85, fontWeight: 300 }}>
                This ministry bridges the gap between spirituality and practical living — raising individuals who are both spiritually grounded and principle-driven.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REFUEL EXPERIENCE ── */}
      <section id="refuel" style={{ padding: "6rem 5%", background: "rgba(12,1,5,0.98)", position: "relative", overflow: "hidden" }}>
        <motion.div animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }}
          style={{ position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.2), transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔥</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fef2f2", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              The Refuel Experience
            </h2>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", color: "#d97706", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Annual Revival & Empowerment Gathering
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(254,242,242,0.75)", lineHeight: 1.85, fontWeight: 300, marginBottom: "2rem" }}>
              A gathering focused on spiritual renewal, restoration of purpose, and personal and corporate revival. Not a conference — a catalyst. Igniting hunger for God while imparting clarity, direction, and spiritual strength.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              {["Spiritual Renewal", "Restoration of Purpose", "Personal Revival", "Kingdom Empowerment"].map(t => (
                <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", padding: "0.3rem 0.9rem", background: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.3)", borderRadius: "20px", color: "#d97706", letterSpacing: "0.06em" }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Easter egg — pointing to Tech world */}
      <div style={{ background: "#080103" }}>
        <WorldEasterEgg
          message="Did you know John is also a Cloud Engineer who has shipped infrastructure for clients in Dubai, Amsterdam, and Nigeria?"
          linkLabel="Enter the Tech World →"
          href="/tech"
          color="#2563eb"
        />
      </div>

      {/* Footer */}
      <footer style={{ padding: "2rem 5%", background: "#050102", borderTop: "1px solid rgba(159,18,57,0.2)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image src="/jaa-logo-white.png" alt="JAA" width={48} height={22} style={{ objectFit: "contain", height: 22, width: "auto", opacity: 0.7 }} />
        </Link>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "rgba(252,165,165,0.4)" }}>
          © 2026 · John Ayomide Akinola · House of Joy Ministries
        </span>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "rgba(252,165,165,0.4)", textDecoration: "none", letterSpacing: "0.06em" }}>← All Worlds</Link>
      </footer>
    </main>
  );
}
