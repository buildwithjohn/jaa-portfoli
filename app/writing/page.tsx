"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import WorldEasterEgg from "@/components/WorldEasterEgg";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "from-chemistry-to-cloud",
    title: "From Chemistry Class to Cloud Infrastructure — My Unfiltered Story",
    date: "March 1, 2026",
    category: "Career",
    readTime: "8 min read",
    color: "#7c3aed",
    excerpt: "I have a Chemistry Education degree and a TRCN teaching certificate. Here's exactly how I became a Cloud Engineer, Platform Engineer, and Tech Instructor — and what I learned along the way.",
  },
  {
    slug: "kubernetes-production",
    title: "Running Kubernetes in Production — What Nobody Tells You",
    date: "March 10, 2026",
    category: "Platform Engineering",
    readTime: "12 min read",
    color: "#2563eb",
    excerpt: "After deploying Kubernetes across multiple production environments, I've learned things that no tutorial teaches you. Here's what actually matters when K8s goes live.",
  },
  {
    slug: "terraform-lessons",
    title: "5 Terraform Lessons From Real Infrastructure Projects",
    date: "March 18, 2026",
    category: "Platform Engineering",
    readTime: "10 min read",
    color: "#059669",
    excerpt: "After using Terraform across production infrastructure for multiple clients, here are the five lessons I wish someone had told me when I started.",
  },
  {
    slug: "devops-career-africa",
    title: "Breaking Into DevOps From Africa — The Honest Guide",
    date: "Coming soon",
    category: "Career",
    readTime: "15 min read",
    color: "#d97706",
    excerpt: "The real path from zero to employed as a DevOps engineer in Nigeria and across Africa. No sugar-coating. No shortcuts. Just the actual steps that work.",
    draft: true,
  },
  {
    slug: "aws-certifications-worth-it",
    title: "Are AWS Certifications Actually Worth It in 2026?",
    date: "Coming soon",
    category: "Cloud",
    readTime: "7 min read",
    color: "#f59e0b",
    excerpt: "I hold the AWS Cloud Practitioner. Here's my honest take on whether certifications move the needle for your career — and which ones actually matter.",
    draft: true,
  },
  {
    slug: "prompt-engineering-real",
    title: "What Prompt Engineering Actually Looks Like in Production",
    date: "Coming soon",
    category: "AI",
    readTime: "9 min read",
    color: "#06b6d4",
    excerpt: "Not the ChatGPT tricks. The real thing — building LLM-powered middleware, structured outputs, and AI workflows that run in production systems.",
    draft: true,
  },
];

const categories = ["All", "Platform Engineering", "Career", "Cloud", "AI", "Design", "Ministry"];

export default function WritingWorld() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* Nav */}
      <nav className="jaa-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "0 5%", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(245,247,255,0.92)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", cursor: "pointer", padding: "4px 0" }}>
          <span style={{ pointerEvents: "none", display: "flex" }}>
            <Image src={logoSrc} alt="JAA" width={64} height={30} style={{ objectFit: "contain", height: 30, width: "auto" }} priority />
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← All Worlds</Link>
          <Link href="/tech" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>Portfolio</Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "120px 5% 60px", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.2, 0.4] }} transition={{ duration: 10, repeat: Infinity }}
          style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(5,150,105,0.1),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
              <span style={{ width: 24, height: 2, background: "#059669", display: "inline-block", borderRadius: 2 }} />
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "#059669", letterSpacing: "0.18em", textTransform: "uppercase" }}>Writing World</span>
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: "1rem" }}>
              Words from the<br />
              <span style={{ background: "linear-gradient(135deg,#059669,#0d9488)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>engineer&apos;s desk.</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--text2)", maxWidth: 560, lineHeight: 1.85, fontWeight: 300 }}>
              Tech articles, career insights, engineering deep-dives, and honest writing from someone who builds in production every day. No filler. No fluff.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ padding: "0 5% 2rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {categories.map((c, i) => (
              <motion.button key={c}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.66rem", padding: "0.3rem 0.85rem", background: i === 0 ? "#059669" : "var(--surface)", border: `1px solid ${i === 0 ? "#059669" : "var(--border)"}`, borderRadius: "20px", color: i === 0 ? "#fff" : "var(--text2)", cursor: "pointer", letterSpacing: "0.05em", transition: "all 0.2s" }}>
                {c}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section style={{ padding: "2rem 5% 6rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="blog-grid">
            {posts.map((p, i) => (
              <motion.article key={p.slug}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: p.draft ? 0 : -5, boxShadow: p.draft ? "var(--shadow-sm)" : "var(--shadow-lg)" }}
                style={{
                  borderRadius: "18px", overflow: "hidden",
                  background: "var(--surface)", border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)", transition: "all 0.3s",
                  opacity: p.draft ? 0.65 : 1,
                }}>

                {/* Color top bar */}
                <div style={{ height: 4, background: p.color }} />

                <div style={{ padding: "1.6rem" }}>
                  {/* Meta */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: p.color, background: `${p.color}12`, padding: "0.2rem 0.6rem", borderRadius: "5px", letterSpacing: "0.06em" }}>
                      <Tag size={10} />{p.category}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--text3)" }}>
                      <Clock size={10} />{p.readTime}
                    </span>
                    {p.draft && (
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text3)", background: "var(--bg2)", padding: "0.2rem 0.6rem", borderRadius: "5px", border: "1px solid var(--border)" }}>
                        COMING SOON
                      </span>
                    )}
                  </div>

                  <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "var(--text)", marginBottom: "0.65rem", lineHeight: 1.35 }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: "0.84rem", color: "var(--text2)", lineHeight: 1.78, fontWeight: 300, marginBottom: "1.3rem" }}>
                    {p.excerpt}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.63rem", color: "var(--text3)" }}>{p.date}</span>
                    {!p.draft ? (
                      <Link href={`/writing/${p.slug}`}
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: p.color, textDecoration: "none", fontWeight: 600, transition: "gap 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.gap = "0.6rem"}
                        onMouseLeave={e => e.currentTarget.style.gap = "0.35rem"}>
                        Read <ArrowRight size={13} />
                      </Link>
                    ) : (
                      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)" }}>Subscribe to be notified</span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: "3rem", padding: "2.5rem", background: "var(--surface)", border: "1.5px solid rgba(5,150,105,0.25)", borderRadius: "18px", boxShadow: "var(--shadow-sm)", textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>✉️</div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.5rem" }}>Get notified when new articles drop.</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text2)", marginBottom: "1.5rem", fontWeight: 300 }}>No spam. Just engineering writing worth reading.</p>
            <div style={{ display: "flex", gap: "0.8rem", maxWidth: 420, margin: "0 auto", flexWrap: "wrap" }}>
              <input type="email" placeholder="your@email.com" style={{ flex: 1, minWidth: 200, padding: "0.8rem 1rem", borderRadius: "8px", border: "1.5px solid var(--border)", background: "var(--bg2)", color: "var(--text)", fontSize: "0.9rem", fontFamily: "'DM Sans',sans-serif", outline: "none" }} />
              <button style={{ padding: "0.8rem 1.5rem", background: "#059669", color: "#fff", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.88rem", border: "none", borderRadius: "8px", cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>

      <WorldEasterEgg
        message="Did you know John also leads House of Joy Ministries and convenes The Refuel Experience?"
        linkLabel="Enter the Ministerial World →"
        href="/ministry"
        color="#9f1239"
      />

      <footer style={{ padding: "2rem 5%", background: "var(--bg2)", borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src={logoSrc} alt="JAA" width={48} height={22} style={{ objectFit: "contain", height: 22, width: "auto", opacity: 0.7 }} />
        </Link>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)" }}>© 2026 · John Ayomide Akinola</span>
        <Link href="/" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none" }}>← All Worlds</Link>
      </footer>
    </main>
  );
}
