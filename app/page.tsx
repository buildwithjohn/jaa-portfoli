"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";
import { ArrowUpRight, Download } from "lucide-react";

const featured_posts = [
  { slug: "from-chemistry-to-cloud",     title: "From Chemistry Class to Cloud — My Unfiltered Story",         date: "Mar 1, 2026",  tag: "Career"             },
  { slug: "kubernetes-production",       title: "Running Kubernetes in Production — What Nobody Tells You",     date: "Mar 10, 2026", tag: "Platform Engineering" },
  { slug: "terraform-lessons",          title: "5 Terraform Lessons From Real Infrastructure Projects",          date: "Mar 18, 2026", tag: "Platform Engineering" },
];

const featured_projects = [
  { title: "S&D Prophetic School LMS",    desc: "Full LMS with role-based auth, student and admin portals, progress tracking, and curriculum management. Live in production.", tags: ["Next.js 15","Supabase","Role-Based Auth","Full-Stack"], github: "https://github.com/buildwithjohn/sandd", live: "https://sandd.abiodunsule.uk" },
  { title: "CrimsonWings Blood Logistics", desc: "Marketing site and operations dashboard for a blood logistics company — fullstack, client-facing and internal tools in one platform.", tags: ["Next.js 15","Full-Stack","Dashboard","Logistics"], github: "https://github.com/buildwithjohn/crimson", live: null },
  { title: "Cedar Home Builder",           desc: "Diaspora-focused real estate platform with interactive maps, geo-referenced site data, drone footage, and calendar booking.", tags: ["Vue 3","Leaflet.js","Vite","Vercel"], github: "https://github.com/Johnprexy/cedar-africa", live: "https://cedar-africa.vercel.app" },
  { title: "PayLedger",                     desc: "Production-grade personal finance dashboard — NgRx state management, interactive Chart.js analytics, real-time transaction feed, and budget tracker with threshold alerts.", tags: ["Angular 17","NgRx","RxJS","Chart.js"], github: "https://github.com/buildwithjohn/payleger", live: "https://payleger.vercel.app/" },
];

const socials = [
  { label: "YouTube",         href: "https://www.youtube.com/@buildwithjaa",            icon: "▶" },
  { label: "GitHub",          href: "https://github.com/buildwithjohn",                  icon: "</>" },
  { label: "LinkedIn",        href: "https://linkedin.com/in/john-ayomide-akinola",      icon: "in" },
  { label: "Instagram",       href: "https://www.instagram.com/build_with_john/",        icon: "📸" },
  { label: "X / Twitter",    href: "https://x.com/buildwithjohn",                        icon: "𝕏"  },
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d, ease: "easeOut" },
});

export default function Home() {
  const { theme } = useTheme();
  const logo = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ paddingTop: 100, paddingBottom: "5rem" }}>
        <div className="container">

          {/* Photo + name row */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0}} style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "2rem" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid var(--border)" }}>
              <Image src="/john.jpg" alt="John Ayomide Akinola" width={64} height={64} style={{ objectFit: "cover", objectPosition: "center 18%", width: "100%", height: "100%" }} priority />
            </div>
            <div>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.3rem,3vw,1.6rem)", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                John Ayomide Akinola
              </h1>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "var(--text2)", marginTop: "0.25rem", letterSpacing: "0.04em" }}>
                Fullstack Engineer · Cloud · Educator · Author
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.1}} className="prose" style={{ marginBottom: "2rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              I&apos;m a <strong>Platform & Cloud Infrastructure Engineer</strong> based in Lagos. I architect production systems on AWS and Azure, orchestrate Kubernetes clusters, build CI/CD pipelines with Terraform and Docker, and teach engineers to do the same on{" "}
              <a href="https://www.youtube.com/@buildwithjaa" target="_blank" rel="noreferrer"><strong>Build With JAA</strong></a>.
            </p>
            <p>
              I went from a Chemistry Education degree to shipping <strong>16+ production platforms</strong> across Nigeria, Dubai, and Amsterdam. My book{" "}
              <Link href="/book"><strong>From Chemistry Class to Cloud</strong></Link> tells that story — and it&apos;s free.
            </p>
          </motion.div>

          {/* Social row */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.2}} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.35rem",
                padding: "0.32rem 0.75rem",
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "6px", textDecoration: "none",
                fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem",
                color: "var(--text2)", transition: "all 0.15s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}>
                <span style={{ fontSize: "0.7rem" }}>{s.icon}</span> {s.label}
              </a>
            ))}
          </motion.div>

          <div className="divider" style={{ margin: "2rem 0" }} />

          {/* ── BOOK SPOTLIGHT ── */}
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45,delay:0.25}}>
            <Link href="/book" style={{ textDecoration: "none", display: "block" }}>
              <div className="hover-card" style={{
                padding: "1.4rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                display: "flex", gap: "1.4rem", alignItems: "center",
                marginBottom: "2.5rem",
              }}>
                <div style={{ flexShrink: 0, width: 64, height: 88, borderRadius: "6px", overflow: "hidden", boxShadow: "var(--sh-md)" }}>
                  <Image src="/book-stand.png" alt="From Chemistry Class to Cloud" width={64} height={88} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", background: "#d97706", color: "#fff", padding: "0.15rem 0.5rem", borderRadius: "4px", letterSpacing: "0.06em", fontWeight: 600 }}>FREE BOOK</span>
                  </div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1rem", color: "var(--text)", marginBottom: "0.35rem", lineHeight: 1.3 }}>
                    From Chemistry Class to Cloud
                  </h3>
                  <p style={{ fontSize: "0.84rem", color: "var(--text2)", lineHeight: 1.65, fontWeight: 300 }}>
                    The honest story of switching from Chemistry Education to Platform Engineering — free for every aspiring engineer.
                  </p>
                </div>
                <div style={{ flexShrink: 0, color: "var(--text3)" }}>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ── FEATURED WRITING ── */}
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45,delay:0.3}}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "var(--text)", letterSpacing: "-0.01em" }}>Recent Writing</h2>
              <Link href="/writing" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: "var(--text3)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>
                All posts →
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {featured_posts.map((p, i) => (
                <Link key={p.slug} href={`/writing/${p.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{
                    padding: "0.9rem 0",
                    borderBottom: i < featured_posts.length - 1 ? "1px solid var(--border)" : "none",
                    display: "flex", justifyContent: "space-between", alignItems: "baseline",
                    gap: "1rem", transition: "opacity 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.92rem", color: "var(--text)", fontWeight: 500 }}>{p.title}</span>
                    </div>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.63rem", color: "var(--text3)", whiteSpace: "nowrap", flexShrink: 0 }}>{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <div className="divider" />

          {/* ── FEATURED PROJECTS ── */}
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45,delay:0.35}}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "var(--text)", letterSpacing: "-0.01em" }}>Selected Work</h2>
              <Link href="/tech" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: "var(--text3)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>
                All projects →
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {featured_projects.map(p => (
                <div key={p.title} className="hover-card" style={{ padding: "1rem 1.1rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.4rem", gap: "0.5rem" }}>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.3 }}>{p.title}</h3>
                    <div style={{ display: "flex", gap: "0.4rem", flexShrink: 0 }}>
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem", color: "var(--green)", textDecoration: "none", border: "1px solid var(--border)", borderRadius: "4px", padding: "0.12rem 0.45rem" }}>Live ↗</a>}
                      <a href={p.github} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem", color: "var(--text3)", textDecoration: "none", border: "1px solid var(--border)", borderRadius: "4px", padding: "0.12rem 0.45rem" }}>GitHub</a>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text2)", lineHeight: 1.65, fontWeight: 300, marginBottom: "0.65rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="divider" />

          {/* ── YOUTUBE ── */}
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45,delay:0.4}}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "var(--text)", marginBottom: "1rem", letterSpacing: "-0.01em" }}>Build With JAA</h2>
            <a href="https://www.youtube.com/@buildwithjaa" target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "block" }}>
              <div className="hover-card" style={{ padding: "1.2rem 1.3rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "10px", display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: "10px", background: "rgba(255,0,0,0.08)", border: "1px solid rgba(255,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "1.2rem" }}>▶</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "var(--text)", marginBottom: "0.25rem" }}>@buildwithjaa on YouTube</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text2)", fontWeight: 300 }}>Platform engineering tutorials, cloud architecture, DevOps builds, and career advice — every week.</div>
                </div>
                <ArrowUpRight size={16} style={{ color: "var(--text3)", flexShrink: 0 }} />
              </div>
            </a>
          </motion.div>

          <div className="divider" />

          {/* ── FOOTER ── */}
          <motion.footer initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45,delay:0.45}}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Image src={logo} alt="JAA" width={44} height={20} style={{ objectFit: "contain", height: 20, width: "auto", opacity: 0.6 }} />
              </Link>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", alignItems: "center" }}>
                <Link href="/ministry" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.63rem", color: "var(--text3)", textDecoration: "none" }}>Ministry</Link>
                <Link href="/design"   style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.63rem", color: "var(--text3)", textDecoration: "none" }}>Design</Link>
                <a href="mailto:akinolajohnayomide@gmail.com" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.63rem", color: "var(--text3)", textDecoration: "none" }}>Email</a>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.63rem", color: "var(--text3)" }}>© 2026 John Ayomide Akinola</span>
            </div>
          </motion.footer>

        </div>
      </section>
    </main>
  );
}
