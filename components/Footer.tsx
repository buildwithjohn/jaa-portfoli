"use client";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";

  return (
    <footer style={{
      display: "flex", flexWrap: "wrap", alignItems: "center",
      justifyContent: "space-between", gap: "1rem",
      padding: "2rem 5%",
      background: "var(--bg2)", borderTop: "1px solid var(--border)",
    }}>
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <Image src={logoSrc} alt="JAA" width={56} height={26}
          style={{ objectFit: "contain", height: 26, width: "auto", opacity: 0.85 }}/>
      </a>

      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"var(--text3)" }}>
        © 2026 · Designed & Built by{" "}
        <a href="mailto:akinolajohnayomide@gmail.com" style={{ color:"var(--cyan)", textDecoration:"none" }}>
          John Ayomide Akinola
        </a>
      </div>

      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.7rem", color:"var(--text3)" }}>
        Lagos, Nigeria 🇳🇬
      </div>
    </footer>
  );
}
