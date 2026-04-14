"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/tech",    label: "Work"    },
  { href: "/writing", label: "Writing" },
  { href: "/book",    label: "Book"    },
  { href: "/about",   label: "About"   },
];

export default function Navbar() {
  const { theme } = useTheme();
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const logo = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className="site-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: 60,
        display: "flex", alignItems: "center",
        padding: "0 1.5rem",
        background: scrolled ? "rgba(250,250,250,0.92)" : "rgba(250,250,250,0.8)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        transition: "all 0.3s",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <span style={{ pointerEvents: "none" }}>
              <Image src={logo} alt="JAA" width={52} height={24} style={{ objectFit: "contain", height: 24, width: "auto" }} priority />
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links" style={{ alignItems: "center", gap: "0.25rem" }}>
            {NAV.map(l => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link key={l.href} href={l.href} style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.72rem", letterSpacing: "0.04em",
                  textDecoration: "none",
                  padding: "0.4rem 0.75rem", borderRadius: "6px",
                  color: active ? "var(--text)" : "var(--text2)",
                  fontWeight: active ? 600 : 400,
                  background: active ? "var(--bg2)" : "transparent",
                  transition: "all 0.15s",
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}>
                  {l.label}
                </Link>
              );
            })}
            <div style={{ width: 1, height: 18, background: "var(--border)", margin: "0 0.4rem" }} />
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="nav-mobile" style={{ alignItems: "center", gap: "0.5rem" }}>
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} style={{ background: "none", border: "1px solid var(--border)", borderRadius: "6px", padding: "6px", cursor: "pointer", color: "var(--text)", display: "flex" }}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{ position: "fixed", top: 60, left: 0, right: 0, zIndex: 40, background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {NAV.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ padding: "0.65rem 0.75rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.8rem", color: "var(--text2)", textDecoration: "none", borderRadius: "6px" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
