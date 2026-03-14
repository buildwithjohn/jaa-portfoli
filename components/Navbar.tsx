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
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: "0 5%", height: 70, display: "flex", alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(5,10,18,0.95)" : "rgba(5,10,18,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "rgba(0,200,255,0.18)" : "rgba(0,180,255,0.07)"}`,
          transition: "all 0.3s",
        }}
      >
        <a href="#hero" style={{ fontFamily:"'Syne', sans-serif", fontWeight:800, fontSize:"1.1rem", color:"white", textDecoration:"none", letterSpacing:"-0.02em" }}>
          JAA<span style={{ color:"var(--cyan)" }}>.</span>
        </a>

        {/* Desktop */}
        <ul style={{ display:"flex", gap:"2rem", listStyle:"none", alignItems:"center" }} className="hidden md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontFamily:"'JetBrains Mono', monospace", fontSize:"0.72rem",
                letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none",
                color: active === l.href.slice(1) ? "var(--cyan)" : "var(--text2)",
                transition:"color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={e => (e.currentTarget.style.color = active === l.href.slice(1) ? "var(--cyan)" : "var(--text2)")}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              fontFamily:"'JetBrains Mono', monospace", fontSize:"0.72rem",
              letterSpacing:"0.08em", textTransform:"uppercase", textDecoration:"none",
              padding:"0.45rem 1.1rem", border:"1px solid var(--cyan)", color:"var(--cyan)",
              borderRadius:"6px", transition:"all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background="var(--cyan)"; e.currentTarget.style.color="var(--bg)"; }}
            onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="var(--cyan)"; }}
            >Hire Me</a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background:"none", border:"none", color:"var(--text)", cursor:"pointer", display:"none" }} className="md:hidden block">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
            transition={{ duration:0.22 }}
            style={{
              position:"fixed", top:70, left:0, right:0, zIndex:40,
              display:"flex", flexDirection:"column", gap:"1.4rem",
              padding:"1.5rem 5%",
              background:"rgba(5,10,18,0.98)", backdropFilter:"blur(20px)",
              borderBottom:"1px solid var(--border)",
            }}
          >
            {[...links, { href:"#contact", label:"Hire Me" }].map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily:"'JetBrains Mono', monospace", fontSize:"0.82rem",
                letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--text2)", textDecoration:"none",
              }}
              onMouseEnter={e => (e.currentTarget.style.color="var(--cyan)")}
              onMouseLeave={e => (e.currentTarget.style.color="var(--text2)")}
              >{l.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
