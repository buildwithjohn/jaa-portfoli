"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowLeft, FolderOpen } from "lucide-react";

const DRIVE_URL = "https://drive.google.com/drive/folders/1nAI1xbZwf0QlrbdKGzuhc-yDB6aligYM?usp=sharing";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const milestones = [
  {
    year: "2017",
    icon: "🌱",
    title: "Curiosity Sparked",
    color: "#059669",
    desc: "It started with nothing more than boredom and YouTube. I stumbled across a video of someone creating a logo in CorelDraw. I had no design background, no formal training — just a laptop, a free trial of CorelDraw, and a lot of curiosity. I spent the first few weeks just trying to understand how shapes, curves, and colours worked together.",
  },
  {
    year: "2018",
    icon: "🔤",
    title: "First Logos & Lettermarks",
    color: "#2563eb",
    desc: "My first real designs were logos — simple wordmarks and lettermarks for imaginary brands I made up just to practice. CorelDraw's node editing became my obsession. I would spend hours adjusting bezier curves trying to get letterforms to look the way I wanted. Most of it was terrible, but it taught me that design is a craft — it takes repetition.",
  },
  {
    year: "2019",
    icon: "✏️",
    title: "Flyers, Posters & Print",
    color: "#d97706",
    desc: "Churches, student groups, and small businesses started noticing my work and asking for flyers, event posters, and banners. I designed everything from Sunday service announcements to birthday graphics. This is where I learned layout, hierarchy, and how to make information feel organised and beautiful at the same time — before I even knew the terminology.",
  },
  {
    year: "2020",
    icon: "🎨",
    title: "Discovering Photoshop",
    color: "#7c3aed",
    desc: "CorelDraw had taken me far, but I knew serious designers used Photoshop. I started over — new software, new logic. Photo manipulation, masking, layer blending, and compositing opened a completely different dimension of what design could be. My first Photoshop projects were rough, but the ceiling was suddenly much higher.",
  },
  {
    year: "2021",
    icon: "🏢",
    title: "Brand Identity Work",
    color: "#ec4899",
    desc: "By this point I had done enough logos, flyers, and posters to understand that design is storytelling. Clients started coming to me for full brand identity work — logos, color systems, typography, business cards, and social media kits. I stopped designing in isolation and started asking: what does this brand want to communicate? Who is it speaking to?",
  },
  {
    year: "2022–Present",
    icon: "🚀",
    title: "Designing Week In, Week Out",
    color: "#06b6d4",
    desc: "Design became a second profession alongside cloud engineering. I now produce event graphics, conference materials, brand identities, social media creatives, and print materials on a weekly basis — for ministries, businesses, startups, and individuals across Lagos and internationally. Photoshop and CorelDraw are permanent tools in my workflow, as natural to me as Terraform or Docker.",
  },
];

const categories = [
  { icon: "🏷️", title: "Brand Identity & Logos",     desc: "Wordmarks, lettermarks, symbol marks, full brand guidelines" },
  { icon: "🎪", title: "Event & Conference Graphics", desc: "Posters, banners, stage backdrops, programmes, badges" },
  { icon: "📱", title: "Social Media Creatives",      desc: "Posts, stories, carousels, profile art, YouTube thumbnails" },
  { icon: "🖨️", title: "Print Design",                desc: "Flyers, brochures, business cards, invitation cards, certificates" },
  { icon: "✨", title: "Custom Illustrations",         desc: "Bespoke compositions, 3D text effects, digital artworks" },
  { icon: "📺", title: "Digital & Screen Graphics",   desc: "Presentation decks, motion stills, digital ads" },
];

export default function DesignPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 68 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "6rem 5% 4rem", position: "relative", overflow: "hidden", background: "var(--bg)" }}>
          <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.25, 0.5] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, var(--cyan-dim), transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }}
          />

          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            {/* Back link */}
            <motion.div {...fadeUp(0)}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", color: "var(--text3)", textDecoration: "none", letterSpacing: "0.06em", marginBottom: "2.5rem" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>
                <ArrowLeft size={14} /> Back to portfolio
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.1)} style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1rem" }}>
              <span style={{ width: 24, height: 2, background: "var(--cyan)", display: "inline-block", borderRadius: 2 }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Design Portfolio</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.4rem,5vw,4.2rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: "1.5rem" }}>
              The visual side<br />
              <span className="text-gradient">of John.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.32)} style={{ fontSize: "1.05rem", color: "var(--text2)", maxWidth: 620, lineHeight: 1.85, fontWeight: 300, marginBottom: "2.5rem" }}>
              From watching random YouTube tutorials out of boredom, to designing event graphics, brand identities, and print materials every single week — this is the story of how a Cloud Engineer became a graphic designer by accident, and never looked back.
            </motion.p>

            {/* CTA row */}
            <motion.div {...fadeUp(0.44)} style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <motion.a
                whileHover={{ y: -2, boxShadow: "var(--shadow-cyan)" }}
                href={DRIVE_URL}
                target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.9rem 2rem", background: "var(--cyan)", color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", borderRadius: "10px", boxShadow: "var(--shadow-cyan)" }}
              >
                <FolderOpen size={18} /> View Full Design Portfolio
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#contact-design"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.9rem 2rem", border: "1.5px solid var(--border)", color: "var(--text2)", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.92rem", textDecoration: "none", borderRadius: "10px", background: "var(--surface)", boxShadow: "var(--shadow-sm)", transition: "all 0.2s" }}
              >
                Hire for Design Work
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ── THE STORY ── */}
        <section style={{ padding: "5rem 5%", background: "var(--bg2)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div {...fadeUp(0)} style={{ marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
                <span style={{ width: 24, height: 2, background: "var(--cyan)", display: "inline-block", borderRadius: 2 }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.18em", textTransform: "uppercase" }}>The Origin Story</span>
              </div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.9rem,3.5vw,2.7rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                How curiosity became craft.
              </h2>
            </motion.div>

            {/* Timeline */}
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: "calc(5% + 28px)", top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--cyan), transparent)", display: "none" }} className="timeline-line" />

              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    style={{ display: "flex", gap: "1.8rem", alignItems: "flex-start" }}
                    className="story-row"
                  >
                    {/* Icon + year */}
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                      <div style={{ width: 56, height: 56, borderRadius: "14px", background: `${m.color}18`, border: `1.5px solid ${m.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0 }}>
                        {m.icon}
                      </div>
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: m.color, fontWeight: 700, letterSpacing: "0.06em" }}>{m.year}</span>
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, padding: "1.4rem 1.6rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.08rem", color: "var(--text)", marginBottom: "0.65rem" }}>
                        {m.title}
                      </h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--text2)", lineHeight: 1.82, fontWeight: 300 }}>
                        {m.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT I CREATE ── */}
        <section style={{ padding: "5rem 5%", background: "var(--bg)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div {...fadeUp(0)} style={{ marginBottom: "3.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
                <span style={{ width: 24, height: 2, background: "var(--cyan)", display: "inline-block", borderRadius: 2 }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.18em", textTransform: "uppercase" }}>What I Create</span>
              </div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.9rem,3.5vw,2.7rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                Six categories.<br />All done with precision.
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
              {categories.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.44, delay: i * 0.07 }}
                  whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
                  style={{ padding: "1.5rem 1.6rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", boxShadow: "var(--shadow-sm)", transition: "all 0.28s" }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.7rem" }}>{c.icon}</div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "0.45rem" }}>{c.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text2)", lineHeight: 1.72, fontWeight: 300 }}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS ── */}
        <section style={{ padding: "4rem 5%", background: "var(--bg2)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div {...fadeUp(0)} style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.7rem" }}>
                <span style={{ width: 24, height: 2, background: "var(--cyan)", display: "inline-block", borderRadius: 2 }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Tools & Software</span>
              </div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                The toolkit.
              </h2>
            </motion.div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {[
                { name: "Adobe Photoshop", level: "Advanced", color: "#31a8ff", icon: "Ps" },
                { name: "CorelDRAW",       level: "Advanced", color: "#77bc1f", icon: "Cd" },
                { name: "Adobe Illustrator", level: "Intermediate", color: "#ff9a00", icon: "Ai" },
                { name: "Canva",           level: "Advanced", color: "#00c4cc", icon: "Ca" },
              ].map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -3, boxShadow: "var(--shadow-md)" }}
                  style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.4rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", boxShadow: "var(--shadow-sm)", transition: "all 0.28s", minWidth: 200 }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: "10px", background: `${tool.color}22`, border: `1.5px solid ${tool.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "0.82rem", color: tool.color, flexShrink: 0 }}>
                    {tool.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text)" }}>{tool.name}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: tool.color, letterSpacing: "0.08em", marginTop: "0.1rem" }}>{tool.level}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DRIVE CTA ── */}
        <section style={{ padding: "5rem 5%", background: "var(--bg)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ padding: "3.5rem", background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "20px", boxShadow: "var(--shadow-md)", textAlign: "center", position: "relative", overflow: "hidden" }}
            >
              {/* Ambient glow */}
              <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, var(--cyan-dim), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎨</div>
                <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--text)", marginBottom: "0.8rem", letterSpacing: "-0.02em" }}>
                  See the actual work.
                </h2>
                <p style={{ fontSize: "0.97rem", color: "var(--text2)", maxWidth: 520, margin: "0 auto 2rem", lineHeight: 1.82, fontWeight: 300 }}>
                  The full design portfolio lives on Google Drive — event flyers, brand identities, social media graphics, and print materials. Real work, real clients, real results.
                </p>
                <motion.a
                  whileHover={{ y: -3, boxShadow: "0 20px 60px rgba(0,200,255,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  href={DRIVE_URL}
                  target="_blank" rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "1rem 2.5rem", background: "var(--cyan)", color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", textDecoration: "none", borderRadius: "10px", boxShadow: "var(--shadow-cyan)" }}
                >
                  <FolderOpen size={20} />
                  Open Design Portfolio on Google Drive
                  <ExternalLink size={16} />
                </motion.a>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", marginTop: "1.2rem", letterSpacing: "0.05em" }}>
                  Opens in a new tab · Google Drive · Public folder
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── HIRE ME ── */}
        <section id="contact-design" style={{ padding: "4rem 5%", background: "var(--bg2)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", padding: "2rem 2.4rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}
            >
              <div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.35rem" }}>
                  Need a designer?
                </h3>
                <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", color: "var(--text3)", letterSpacing: "0.04em" }}>
                  Event graphics · Brand identity · Social media · Print · Flyers
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", alignItems: "center" }}>
                <motion.a whileHover={{ y: -2 }} href="mailto:akinolajohnayomide@gmail.com"
                  style={{ padding: "0.7rem 1.5rem", background: "var(--cyan)", color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", borderRadius: "8px", boxShadow: "var(--shadow-cyan)" }}>
                  Email Me
                </motion.a>
                <Link href="/#contact"
                  style={{ padding: "0.7rem 1.5rem", border: "1.5px solid var(--border)", color: "var(--text2)", fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "0.88rem", textDecoration: "none", borderRadius: "8px", background: "transparent", transition: "all 0.2s" }}>
                  Contact Form →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />

      <style jsx global>{`
        @media (max-width: 640px) {
          .story-row { flex-direction: column !important; }
        }
      `}</style>
    </>
  );
}
