"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#design", label: "Design" },
  { href: "#services", label: "Services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about","skills","projects","design","services","contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: "0 5%", height: 68,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(245,247,255,0.92)" : "rgba(245,247,255,0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          transition: "all 0.3s ease",
        }}
        className="dark-nav"
      >
        <a href="#hero" style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem",
          color: "var(--text)", textDecoration: "none", letterSpacing: "-0.02em",
        }}>
          JAA<span style={{ color: "var(--cyan)" }}>.</span>
        </a>

        {/* Desktop */}
        <ul style={{ display: "flex", gap: "0.25rem", listStyle: "none", alignItems: "center", margin: 0, padding: 0 }} className="hidden md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a href={l.href} style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem",
                  letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
                  padding: "0.4rem 0.85rem", borderRadius: "6px",
                  color: isActive ? "var(--cyan)" : "var(--text2)",
                  background: isActive ? "var(--cyan-dim)" : "transparent",
                  fontWeight: isActive ? 600 : 400,
                  transition: "all 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--cyan)";
                    (e.currentTarget as HTMLElement).style.background = "var(--cyan-dim)";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--text2)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
          <li style={{ marginLeft: "0.75rem" }}>
            <a href="#contact" style={{
              fontFamily: "'Syne', sans-serif", fontSize: "0.82rem", fontWeight: 700,
              letterSpacing: "0.02em", textDecoration: "none",
              padding: "0.5rem 1.3rem",
              background: "var(--cyan)",
              color: "#fff",
              borderRadius: "8px",
              boxShadow: "var(--shadow-cyan)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Hire Me
            </a>
          </li>
          <li style={{ marginLeft: "0.5rem" }}><ThemeToggle /></li>
        </ul>

        {/* Mobile */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="flex md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            color: "var(--text)", cursor: "pointer", padding: "6px",
            borderRadius: "8px", display: "flex", boxShadow: "var(--shadow-sm)",
          }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: 68, left: 0, right: 0, zIndex: 40,
              display: "flex", flexDirection: "column", gap: "0.3rem",
              padding: "1rem 5%",
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {[...links, { href: "#contact", label: "Hire Me" }].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem",
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "var(--text2)", textDecoration: "none",
                padding: "0.7rem 0.9rem", borderRadius: "8px",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; (e.currentTarget as HTMLElement).style.background = "var(--cyan-dim)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text2)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        html.dark .dark-nav {
          background: ${scrolled ? "rgba(5,10,18,0.92)" : "rgba(5,10,18,0.7)"} !important;
        }
      `}</style>
    </>
  );
}
