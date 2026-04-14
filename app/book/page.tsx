"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Download, ArrowLeft, Check } from "lucide-react";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d },
});

const chapters = [
  "The Chemistry Classroom — Where it all started",
  "Why Tech? The honest answer",
  "How I taught myself Linux from scratch",
  "AWS, certifications, and what they actually teach you",
  "Docker, Kubernetes, and the infrastructure mindset",
  "Landing real clients before you feel ready",
  "Building in production — what changes",
  "The instructor's mindset — teaching what you build",
  "Your roadmap — regardless of your degree",
];

export default function BookPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <div className="container" style={{ paddingTop: 100, paddingBottom: "6rem" }}>

        <motion.div {...fade(0)}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none", marginBottom: "2.5rem" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>
            <ArrowLeft size={13} /> Back home
          </Link>
        </motion.div>

        {/* Hero */}
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", alignItems: "start", marginBottom: "3rem" }} className="grid-book">
          <motion.div {...fade(0.05)} style={{ flexShrink: 0 }}>
            <div style={{ width: 140, borderRadius: "8px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.2)", border: "1px solid var(--border)" }}>
              <Image src="/book-flat.png" alt="From Chemistry Class to Cloud" width={140} height={200} style={{ objectFit: "cover", width: "100%", display: "block" }} />
            </div>
          </motion.div>

          <motion.div {...fade(0.1)}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.8rem" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", background: "#16a34a", color: "#fff", padding: "0.18rem 0.55rem", borderRadius: "4px", letterSpacing: "0.06em" }}>FREE</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)", letterSpacing: "0.04em" }}>Instant download · No email required</span>
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "0.6rem" }}>
              From Chemistry Class<br />to Cloud
            </h1>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "var(--text3)", marginBottom: "1rem" }}>By John Ayomide Akinola</p>
            <p style={{ fontSize: "0.92rem", color: "var(--text2)", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
              A Chemistry Education graduate&apos;s unfiltered story of becoming a Cloud Engineer, Platform Engineer, and Tech Instructor. No shortcuts. No hype. The real path — now free for every aspiring engineer.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
              <motion.a whileHover={{ y: -2 }}
                href="https://selar.com/7zl4237770" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.8rem", background: "var(--text)", color: "var(--bg)", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", borderRadius: "8px" }}>
                <Download size={16} /> Download Free
              </motion.a>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: "var(--text3)", textDecoration: "line-through" }}>₦2,500</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: "var(--green)", fontWeight: 600 }}>Now free</span>
            </div>
          </motion.div>
        </div>

        <div className="divider" />

        {/* Who it's for */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1rem", color: "var(--text)", marginBottom: "1rem", letterSpacing: "-0.01em" }}>Who this book is for</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Anyone making a career switch into cloud or DevOps",
              "Graduates who feel their degree doesn't qualify them for tech",
              "Junior developers who want to move into infrastructure",
              "Anyone who has been told they need a CS degree to work in cloud",
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <Check size={14} style={{ color: "var(--green)", flexShrink: 0, marginTop: 3 }} />
                <span style={{ fontSize: "0.88rem", color: "var(--text2)", lineHeight: 1.65, fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Chapters */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1rem", color: "var(--text)", marginBottom: "1rem", letterSpacing: "-0.01em" }}>What&apos;s inside</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {chapters.map((c, i) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 0", borderBottom: i < chapters.length - 1 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)", minWidth: 20 }}>0{i + 1}</span>
                <span style={{ fontSize: "0.88rem", color: "var(--text2)", fontWeight: 300 }}>{c}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA bottom */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} style={{ padding: "2rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.6rem" }}>Get the book — it&apos;s free.</h3>
          <p style={{ fontSize: "0.84rem", color: "var(--text2)", fontWeight: 300, marginBottom: "1.2rem" }}>No email required. Direct download from Selar.</p>
          <motion.a whileHover={{ y: -2 }}
            href="https://selar.com/7zl4237770" target="_blank" rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 2rem", background: "var(--text)", color: "var(--bg)", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", borderRadius: "8px" }}>
            <Download size={16} /> Download Free on Selar
          </motion.a>
        </motion.div>

      </div>
    </main>
  );
}
