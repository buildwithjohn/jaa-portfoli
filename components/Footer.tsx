export default function Footer() {
  return (
    <footer
      className="flex flex-wrap items-center justify-between gap-4 px-[5%] py-8"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: "white", letterSpacing: "-0.02em" }}>
        JAA<span style={{ color: "var(--cyan)" }}>.</span>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--text3)", letterSpacing: "0.05em" }}>
        © 2025 · Designed & Built by{" "}
        <a href="mailto:akinolajohnayomide@gmail.com" style={{ color: "var(--cyan)", textDecoration: "none" }}>
          John Ayomide Akinola
        </a>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--text3)" }}>
        Lagos, Nigeria 🇳🇬
      </div>
    </footer>
  );
}
