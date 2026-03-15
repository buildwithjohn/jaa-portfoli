"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: 38, height: 38, borderRadius: "10px",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        cursor: "pointer", position: "relative", overflow: "hidden",
        flexShrink: 0, boxShadow: "var(--shadow-sm)",
      }}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.span key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", color: "var(--cyan)" }}
          >
            <Moon size={16} />
          </motion.span>
        ) : (
          <motion.span key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", color: "var(--cyan)" }}
          >
            <Sun size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
