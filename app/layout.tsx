import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)",  color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: "John Ayomide Akinola — Platform Engineer & Educator",
  description: "Platform Engineer, Cloud Architect, Tech Educator, and Author. Building real infrastructure. Teaching what I build. Based in Lagos.",
  keywords: ["Platform Engineer","DevOps","Cloud","AWS","Kubernetes","Terraform","Build With JAA","Lagos","Nigeria"],
  authors: [{ name: "John Ayomide Akinola" }],
  openGraph: {
    title: "John Ayomide Akinola",
    description: "Platform Engineer · Cloud Architect · Educator · Author",
    type: "website",
    url: "https://www.johnakinola.com",
  },
  twitter: { card: "summary_large_image", title: "John Ayomide Akinola" },
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
