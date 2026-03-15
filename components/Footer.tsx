export default function Footer() {
  return (
    <footer style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem", padding:"2.2rem 5%", background:"var(--bg2)", borderTop:"1px solid var(--border)" }}>
      <div style={{ fontFamily:"'Syne', sans-serif", fontWeight:800, fontSize:"1rem", color:"var(--text)", letterSpacing:"-0.02em" }}>
        JAA<span style={{ color:"var(--cyan)" }}>.</span>
      </div>
      <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.7rem", color:"var(--text3)", letterSpacing:"0.05em" }}>
        © 2025 · Designed & Built by{" "}
        <a href="mailto:akinolajohnayomide@gmail.com" style={{ color:"var(--cyan)", textDecoration:"none" }}>John Ayomide Akinola</a>
      </div>
      <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:"0.7rem", color:"var(--text3)" }}>
        Lagos, Nigeria 🇳🇬
      </div>
    </footer>
  );
}
