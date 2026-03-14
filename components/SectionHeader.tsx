"use client";
import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-5 h-px" style={{ background: "var(--cyan)" }} />
        <span
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.15em", textTransform: "uppercase" }}
        >
          {label}
        </span>
      </div>
      <h2
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-0.03em" }}
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-[var(--text2)] font-light leading-relaxed max-w-[580px]" style={{ fontSize: "0.98rem" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
