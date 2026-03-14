"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const pillars = [
  { icon: "☁️", title: "Cloud Engineering", desc: "AWS · Azure · K8s" },
  { icon: "🎨", title: "Visual Design", desc: "Photoshop · CorelDraw" },
  { icon: "🏫", title: "Tech Education", desc: "TRCN Certified" },
  { icon: "🛡️", title: "Cybersecurity", desc: "Pen Testing · Ethical Hacking" },
];

const timeline = [
  { year: "2023 – Present", role: "Managing Director", company: "Swelerion Global Ltd", desc: "Leading cloud consultancy engagements, infrastructure advisory, and client delivery for organisations across Nigeria and internationally." },
  { year: "2022 – Present", role: "DevOps & Cloud Instructor", company: "Bloomy Technologies, Lagos", desc: "Designing and delivering hands-on curriculum in Linux, DevOps, Cloud Computing, Cybersecurity, and Data Analytics to student cohorts." },
  { year: "Ongoing", role: "Freelance Engineer & Designer", company: "Independent", desc: "Delivering web platforms, cloud infrastructure, and graphic design work for clients across Nigeria, Europe, and the Middle East." },
  { year: "Foundation", role: "B.Sc. Chemistry Education", company: "TRCN Certified Educator", desc: "Academic foundation that built the teaching instincts now applied to every technical course, workshop, and curriculum I create." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-[5%]" style={{ background: "var(--bg2)" }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader label="About Me" title="The story behind<br/>the engineer" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {[
              <>I started out studying <strong className="text-[var(--text)] font-medium">Chemistry Education</strong> — which gave me something most engineers lack: the ability to break down the complex and make it genuinely understandable. That instinct now powers everything I do.</>,
              <>Today, I&apos;m a <strong className="text-[var(--text)] font-medium">DevOps & Cloud Engineer</strong> who has shipped production-grade infrastructure on AWS and Azure, orchestrated Kubernetes clusters, built CI/CD pipelines, and delivered real platforms for real clients — from Dubai&apos;s real estate market to Amsterdam&apos;s jewelry scene to the African diaspora.</>,
              <>As an <strong className="text-[var(--text)] font-medium">instructor at Bloomy Technologies</strong>, I teach Linux, Cloud, DevOps, Cybersecurity and Data Analytics. As <strong className="text-[var(--text)] font-medium">Managing Director of Swelerion Global Ltd</strong>, I consult on cloud strategy. And as a <strong className="text-[var(--text)] font-medium">graphics designer</strong>, I&apos;ve been creating visual work week in, week out.</>,
              <>I design. I build. I teach. I consult. Not as separate things — as one cohesive approach to solving problems with craft.</>,
            ].map((p, i) => (
              <p key={i} className="text-[var(--text2)] font-light leading-[1.9] text-[0.98rem] mb-5">{p}</p>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -3, borderColor: "rgba(0,200,255,0.4)" }}
                  className="p-4 rounded-xl transition-colors"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "white" }}>{p.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text3)" }}>{p.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="relative pl-7" style={{ borderLeft: "1px solid", borderImage: "linear-gradient(to bottom, var(--cyan), transparent) 1" }}>
              {timeline.map((t, i) => (
                <motion.div
                  key={t.role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="mb-8 relative"
                >
                  <span
                    className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full"
                    style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan-glow)" }}
                  />
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                    {t.year}
                  </div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", marginBottom: "0.15rem" }}>
                    {t.role}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text2)", marginBottom: "0.5rem" }}>{t.company}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text3)", lineHeight: 1.7 }}>{t.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
