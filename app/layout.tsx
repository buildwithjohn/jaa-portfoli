import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Ayomide Akinola — DevOps & Cloud Engineer",
  description: "DevOps & Cloud Engineer | Instructor | Tech Consultant | Graphics Designer based in Lagos, Nigeria.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "React", "Lagos Nigeria", "Graphics Designer"],
  authors: [{ name: "John Ayomide Akinola" }],
  openGraph: {
    title: "John Ayomide Akinola",
    description: "DevOps & Cloud Engineer | Instructor | Tech Consultant | Graphics Designer",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
