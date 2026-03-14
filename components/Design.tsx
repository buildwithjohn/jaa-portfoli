"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const designs = [
  { title: "Event Graphics & Conference Designs", type: "Event · Print · Digital", emoji: "🎪", gradient: "linear-gradient(135deg,#0a1628,#0f2845,#041220)", large: true },
  { title: "Brand Identity & Logo Design", type: "Branding · Identity", emoji: "🏷️", gradient: "linear-gradient(135deg,#1a0a28,#2d1060)", large: false },
  { title: "Social Media Graphics", type: "Social · Digital", emoji: "📱", gradient: "linear-gradient(135deg,#001f1a,#003d2e)", large: false },
  { title: "Print Design Materials", type: "Print · Flyers · Banners", emoji: "🗞️", gradient: "linear-gradient(135deg,#1f1200,#3d2000)", large: false },
  { title: "Bespoke Custom Graphics", type: "Custom · Creative", emoji: "✨", gradient: "linear-gradient(135deg,#001428,#002d5a)", large: false },
];

export default function Design() {
  return (
    <section id="design" className="py-24 px-[5%]" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-px" style={{ background: "var(--cyan)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Design Portfolio
              </span>
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              The visual side<br />of John.
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--cyan)", border: "1px solid var(--border)", background: "rgba(0,200,255,0.08)", borderRadius: "6px", padding: "0.5rem 1rem", whiteSpace: "nowrap" }}
          >
            ✦ Available for design projects — let&apos;s create something great
          </motion.div>
        </div>

        <p className="text-[var(--text2)] font-light text-[0.95rem] mb-12">
          Week in, week out — flyers, brands, events, and digital creatives crafted with Photoshop &amp; CorelDraw.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {designs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${d.large ? "sm:col-span-2 aspect-video" : "aspect-[4/3]"}`}
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {/* Background */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: d.gradient }}>
                {d.large ? (
                  <div className="text-center px-8">
                    <div className="text-5xl mb-4">{d.emoji}</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>Event Graphics</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", color: "var(--cyan)", marginTop: "0.5rem", letterSpacing: "0.12em" }}>CONFERENCE · BIRTHDAY · CONCERT</div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl mb-2">{d.emoji}</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "white", fontSize: "1rem" }}>{d.type.split("·")[0].trim()}</div>
                  </div>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
                style={{ background: "linear-gradient(to top, rgba(5,10,18,0.95) 0%, rgba(5,10,18,0.4) 50%, transparent 100%)" }}
              >
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "white", marginBottom: "0.3rem" }}>{d.title}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{d.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
