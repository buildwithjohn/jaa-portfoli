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

const badges = [
  { text: "AWS Certified", color: "var(--green)", pos: "top-4 -right-8" },
  { text: "⚡ K8s Expert", color: "var(--cyan)", pos: "-bottom-4 -right-10" },
  { text: "🎨 Photoshop Pro", color: "var(--gold, #f0b429)", pos: "bottom-16 -left-10" },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-[5%] pt-[120px] pb-20 relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,200,255,0.1), transparent 70%)", filter: "blur(80px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,111,205,0.08), transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center relative z-10">
        {/* LEFT */}
        <div>
          {/* Tag */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-px" style={{ background: "var(--cyan)" }} />
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--cyan)", letterSpacing: "0.12em" }}>
              AVAILABLE FOR REMOTE OPPORTUNITIES
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.25)}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "white" }}
            className="mb-3"
          >
            John Ayomide<br />
            <span className="text-gradient">Akinola</span>
          </motion.h1>

          {/* Titles */}
          <motion.p
            {...fadeUp(0.4)}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--text2)", letterSpacing: "0.05em" }}
            className="mb-6"
          >
            DevOps & Cloud Engineer
            <span style={{ color: "var(--cyan)", margin: "0 0.4rem" }}>/</span>
            Instructor
            <span style={{ color: "var(--cyan)", margin: "0 0.4rem" }}>/</span>
            Consultant
            <span style={{ color: "var(--cyan)", margin: "0 0.4rem" }}>/</span>
            Graphics Designer
          </motion.p>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.5)}
            className="text-[var(--text2)] text-[1.05rem] leading-[1.85] font-light max-w-[560px] mb-10"
          >
            I <strong className="text-[var(--text)] font-medium">build cloud infrastructure</strong>, design systems
            that scale, craft visual identities that stand out, and train the next generation of tech
            professionals — all from <strong className="text-[var(--text)] font-medium">Lagos, Nigeria</strong>, for the world.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.62)} className="flex flex-wrap gap-4 mb-10">
            <motion.a
              whileHover={{ translateY: -2, boxShadow: "0 0 50px rgba(0,200,255,0.5)" }}
              href="#projects"
              className="px-7 py-3 rounded-lg font-semibold text-[0.92rem] transition-all"
              style={{ background: "var(--cyan)", color: "var(--bg)", boxShadow: "0 0 30px rgba(0,200,255,0.3)" }}
            >
              View My Work →
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2, borderColor: "var(--cyan)", color: "var(--cyan)" }}
              href="#contact"
              className="px-7 py-3 rounded-lg font-medium text-[0.92rem] border transition-all"
              style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.75)}
            className="flex flex-wrap gap-8 pt-8"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.9rem", fontWeight: 800, color: "var(--cyan)", lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "0.2rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          className="hidden lg:flex justify-center relative"
        >
          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-24px] rounded-full"
            style={{ border: "1px solid var(--border)" }}
          >
            <span
              className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan)" }}
            />
          </motion.div>

          {/* Photo */}
          <div className="w-[310px] h-[310px] rounded-full overflow-hidden relative"
            style={{ border: "3px solid var(--surface2)" }}>
            <Image src="/john.jpg" alt="John Ayomide Akinola" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
          </div>

          {/* Floating badges */}
          {badges.map((b, i) => (
            <motion.div
              key={b.text}
              animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute ${b.pos} px-3 py-2 rounded-lg text-[0.72rem] whitespace-nowrap backdrop-blur-md`}
              style={{ background: "var(--surface)", border: "1px solid var(--border)", fontFamily: "'JetBrains Mono', monospace", color: "var(--text2)" }}
            >
              <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ background: b.color, verticalAlign: "middle" }} />
              {b.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
