"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
      setScrolled(window.scrollY > 50);
      const sections = ["about", "skills", "projects", "design", "services", "contact"];
      for (const id of sections.reverse()) {
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-[5%] h-[70px] flex items-center justify-between backdrop-blur-xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,10,18,0.92)" : "rgba(5,10,18,0.7)",
          borderBottom: `1px solid ${scrolled ? "rgba(0,200,255,0.15)" : "rgba(0,180,255,0.06)"}`,
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ fontFamily: "'Syne', sans-serif" }} className="text-white font-extrabold text-lg tracking-tight">
          JAA<span style={{ color: "var(--cyan)" }}>.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em" }}
                className={`uppercase transition-colors duration-200 relative group ${active === l.href.slice(1) ? "text-[var(--cyan)]" : "text-[var(--text2)] hover:text-[var(--cyan)]"}`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px bg-[var(--cyan)] transition-all duration-300 w-0 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.08em" }}
              className="uppercase px-4 py-2 border border-[var(--cyan)] text-[var(--cyan)] rounded hover:bg-[var(--cyan)] hover:text-[var(--bg)] transition-all duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[var(--text)] p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[70px] left-0 right-0 z-40 flex flex-col gap-5 px-[5%] py-6"
            style={{ background: "rgba(5,10,18,0.98)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(20px)" }}
          >
            {[...links, { href: "#contact", label: "Hire Me" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", letterSpacing: "0.08em" }}
                className="uppercase text-[var(--text2)] hover:text-[var(--cyan)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
