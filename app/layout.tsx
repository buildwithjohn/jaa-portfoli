import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
