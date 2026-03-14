import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Ayomide Akinola — DevOps & Cloud Engineer",
  description: "DevOps & Cloud Engineer | Instructor | Tech Consultant | Graphics Designer based in Lagos, Nigeria.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "React", "Lagos Nigeria"],
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
