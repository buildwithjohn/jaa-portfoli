import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7ff" },
    { media: "(prefers-color-scheme: dark)",  color: "#050a12" },
  ],
};

export const metadata: Metadata = {
  title: "John Ayomide Akinola — DevOps & Cloud Engineer",
  description: "DevOps & Cloud Engineer | Instructor | Tech Consultant | Graphics Designer based in Lagos, Nigeria.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "React", "Lagos Nigeria", "Graphics Designer"],
  authors: [{ name: "John Ayomide Akinola" }],
  openGraph: {
    title: "John Ayomide Akinola",
    description: "DevOps & Cloud Engineer | Instructor | Tech Consultant | Graphics Designer",
    type: "website",
    url: "https://www.johnakinola.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Ayomide Akinola",
    description: "DevOps & Cloud Engineer | Instructor | Tech Consultant | Graphics Designer",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
