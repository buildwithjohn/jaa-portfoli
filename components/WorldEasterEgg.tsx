"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  message: string;
  linkLabel: string;
  href: string;
  color: string;
}

export default function WorldEasterEgg({ message, linkLabel, href, color }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{
        padding: "3rem 5%",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Link href={href} style={{ textDecoration: "none", display: "block" }}>
          <motion.div
            whileHover={{ x: 6, borderColor: color }}
            transition={{ duration: 0.2 }}
            style={{
              display: "flex", flexWrap: "wrap",
              alignItems: "center", justifyContent: "space-between",
              gap: "1rem", padding: "1.4rem 2rem",
              background: `${color}08`,
              border: `1.5px solid ${color}30`,
              borderRadius: "14px", cursor: "pointer",
              transition: "border-color 0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: "50%", background: color, display: "inline-block", flexShrink: 0 }}
              />
              <p style={{
                fontFamily: "'Syne',sans-serif", fontWeight: 600,
                fontSize: "0.95rem", color: "var(--text)",
              }}>
                {message}
              </p>
            </div>
            <span style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem",
              color: color, letterSpacing: "0.06em", whiteSpace: "nowrap",
              fontWeight: 600,
            }}>
              {linkLabel}
            </span>
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
}
