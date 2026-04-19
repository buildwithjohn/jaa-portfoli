import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

/* ── All posts live here. Add new ones to this array. ── */
const posts: Record<string, Post> = {

  "from-chemistry-to-cloud": {
    title: "From Chemistry Class to Cloud — My Unfiltered Story",
    date: "March 1, 2026",
    tag: "Career",
    readTime: "8 min read",
    content: `
I did not plan to be a cloud engineer.

I studied Chemistry Education at university. I got my degree, I got my TRCN certification, and I was on that path. I was going to be a chemistry teacher. That was the plan.

Then curiosity got in the way.

<h2>The subject that changed everything</h2>

I do not remember exactly when I first heard the word "cloud computing" in a serious context. But I remember the feeling when I started understanding what it actually meant. You could provision servers from a browser. You could write code that would spin up entire networks, databases, load balancers — and tear them all down when you were done. Infrastructure that used to take weeks and a data centre could be running in minutes, from a terminal.

I was fascinated in the same way I had been fascinated by chemistry reactions as a student. Something invisible was happening underneath, and the people who understood it could do things others could not.

That feeling is what pulled me in.

<h2>What I actually did</h2>

I started with Linux. Not because someone told me to — because I quickly realised that everything in cloud computing runs on Linux. If you do not understand how a Linux system works, you are building on a foundation you cannot see.

I spent serious time on the command line. File systems, permissions, process management, networking from the terminal. Not tutorials I half-watched. Actual practice, until it became natural.

From Linux I moved into networking. TCP/IP, DNS, how HTTP actually works, what happens between when you type a URL and when a page loads. Engineers who skip this step spend years confused about things that should be simple.

Then AWS. Then Docker. Then Kubernetes. Then Terraform. Each one opened a new layer of understanding. Each one led naturally to the next.

<h2>The part nobody tells you</h2>

The hardest part of switching careers is not learning the technical skills. That part is difficult, but it is straightforward. You study, you practise, you build things, you break things, you fix them.

The hardest part is the period where you know enough to understand how much you do not know, but not enough to feel confident. That period is uncomfortable. Most people stop there.

I kept going because the work itself was interesting. Not because I had a five-year plan. Not because I was chasing a salary number. Because understanding how distributed systems work, how infrastructure connects, how code becomes something running on a server somewhere — that was genuinely interesting to me.

The Chemistry Education degree did not hold me back. If anything, the way I was trained to think — systematically, methodically, breaking complex processes into steps — is exactly what infrastructure engineering requires.

<h2>Where it led</h2>

I am now a Platform Engineer and Cloud Instructor. I build production infrastructure for clients and teach the full DevOps stack. I have shipped platforms used by real people across Nigeria and internationally.

I also wrote a book about this transition. It is called From Chemistry Class to Cloud, and it is free. If you are on a similar path — whether from teaching, science, any non-CS background — it is written for you.

The door is not closed because your degree says the wrong subject on it. The door is open to anyone willing to do the actual work.
    `,
  },

  "kubernetes-production": {
    title: "Running Kubernetes in Production — What Nobody Tells You",
    date: "March 10, 2026",
    tag: "Platform Engineering",
    readTime: "12 min read",
    content: `
Every Kubernetes tutorial teaches you how to deploy an Nginx pod and call it a day.

Nobody teaches you what happens when your monitoring is misconfigured and your node pool quietly runs out of memory. Nobody teaches you what OOMKilled means at 2am when a client's platform is down. Nobody teaches you the things you only learn by actually running Kubernetes in production.

This is what I have learned from doing exactly that.

<h2>Lesson 1: Resource limits are not optional</h2>

In tutorials, resource requests and limits are mentioned briefly and then skipped. In production, not setting them is how you get a single runaway process consuming an entire node's memory and taking every other pod on that node down with it.

Every workload needs <code>requests</code> and <code>limits</code> set on both CPU and memory. This is not a best practice. It is a requirement.

The <code>requests</code> value is what Kubernetes uses to schedule the pod onto a node. The <code>limits</code> value is the ceiling the container cannot exceed. If a container exceeds its memory limit, it gets OOMKilled — killed by the kernel for exceeding memory. If you set no limit, a single container can consume the entire node.

Start conservative. Set limits based on what your application actually needs under real load, measured with profiling, not guessed.

<h2>Lesson 2: Readiness and liveness probes save you at 3am</h2>

A pod being in the Running state does not mean your application is actually serving traffic. It means the container is running. Those are different things.

Readiness probes tell Kubernetes when a pod is actually ready to receive traffic. Without them, a pod can be in the Running state, registered behind a Service, and returning errors to every request because the application inside it has not finished starting.

Liveness probes tell Kubernetes when a pod needs to be restarted. Without them, a deadlocked application will sit there forever, appearing healthy, returning nothing.

Both probes should check something meaningful. Not just that the process is alive, but that it can actually respond.

<h2>Lesson 3: Namespaces are not security</h2>

New Kubernetes users often think that putting workloads in separate namespaces isolates them securely. It does not. Namespaces are organisational boundaries, not security boundaries.

Pods in different namespaces on the same cluster can communicate with each other by default. A compromised pod in one namespace can reach services in another namespace unless you have explicit NetworkPolicy rules preventing it.

If you need real isolation between workloads — separate environments, separate clients, separate risk profiles — that isolation needs to come from NetworkPolicy, or from separate clusters entirely.

<h2>Lesson 4: etcd is the cluster. Protect it accordingly.</h2>

Everything about your Kubernetes cluster — every deployment, every secret, every configuration — is stored in etcd. If etcd is corrupted or lost without a backup, your cluster is gone.

Back up etcd. Regularly. And test that the backup can actually be restored. A backup you have never tested is not a backup, it is a hope.

<h2>Lesson 5: Monitoring is not optional, it is the job</h2>

You cannot operate a Kubernetes cluster you cannot see. Prometheus and Grafana are the standard, and for good reason. But the tooling is only part of it.

You need alerts that fire before problems become outages. You need dashboards that show resource utilisation, pod restart counts, failed deployments. You need to know when a node is at 80% memory before it hits 100%.

The cluster will always surprise you. Monitoring is how you find out before your users do.

These lessons came from real work on production clusters. The details in between are what separate knowing Kubernetes from operating it.
    `,
  },

  "terraform-lessons": {
    title: "5 Terraform Lessons From Real Infrastructure Projects",
    date: "March 18, 2026",
    tag: "Platform Engineering",
    readTime: "10 min read",
    content: `
Terraform looks simple when you start.

You write some HCL, you run <code>terraform apply</code>, and infrastructure appears. It feels like magic. Then you try to manage it at scale, across multiple environments, with a team, and you discover that Terraform is not magic. It is a tool that rewards discipline and punishes shortcuts.

Here are five lessons I have learned from using Terraform on real infrastructure projects.

<h2>1. State is everything. Treat it that way.</h2>

Terraform's state file is the source of truth for what it believes exists in your infrastructure. If the state is wrong, Terraform will make wrong decisions. If the state is lost, Terraform no longer knows what it manages.

Never store state in a local file for anything beyond a personal experiment. Use remote state — S3 with DynamoDB locking on AWS is the standard. The DynamoDB table prevents two people from running <code>terraform apply</code> at the same time and corrupting the state.

And never edit the state file manually unless you fully understand what you are doing and have a backup. A corrupted state file is one of the most painful things to recover from in infrastructure work.

<h2>2. Modules should be honest about their purpose</h2>

Terraform modules are powerful, but they are easy to misuse. The most common mistake is writing a module that tries to do too many things — a single module that creates a VPC, subnets, security groups, an EC2 instance, an RDS database, and an S3 bucket.

A module should encapsulate one coherent concept. A VPC module. A database module. An application module. Modules that try to do everything become impossible to test, impossible to reuse, and impossible to understand six months later.

Write modules that have a clear, single responsibility. Name them after what they are, not what they contain.

<h2>3. Separate environments mean separate state</h2>

Development, staging, and production environments should have completely separate Terraform state files. Not separate directories pointing to the same state. Separate state, period.

The cleanest pattern is separate S3 state prefixes per environment, or separate workspaces if you prefer that approach. The key is that a mistake in the development environment cannot touch production state.

I have seen engineers accidentally run a <code>terraform destroy</code> against production because their state was not properly separated. That is the kind of incident you do not want to explain.

<h2>4. Plan before you apply. Every time.</h2>

<code>terraform plan</code> tells you exactly what Terraform intends to do before it does it. Read it. Every time.

The things to look for: unexpected resource destruction, unexpected resource replacement (which is effectively destruction and recreation), changes to things you did not intend to change.

A plan that shows <code>0 to add, 0 to change, 2 to destroy</code> when you were expecting <code>1 to add, 0 to change, 0 to destroy</code> is a plan worth stopping and investigating before applying.

Get into the habit of reading the entire plan output, not just looking for errors.

<h2>5. Variables and outputs make infrastructure reusable</h2>

Hard-coded values inside Terraform configurations are the enemy of reusability. If your VPC CIDR block, your instance type, your region, your bucket name are all hard-coded, you cannot use the same configuration for a different environment or a different client without rewriting it.

Variables make configurations flexible. Outputs make configurations composable — the VPC module outputs its VPC ID, which the application module accepts as an input.

This is not just a style preference. It is what makes Terraform configurations maintainable over time, reusable across projects, and shareable with a team.

Terraform rewards the engineers who put in the structural work upfront. The shortcuts are always visible later — usually at the worst possible time.
    `,
  },

};

/* ── Types ── */
interface Post {
  title: string;
  date: string;
  tag: string;
  readTime: string;
  content: string;
}

/* ── Page component ── */
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <div className="container" style={{ paddingTop: 100, paddingBottom: "6rem" }}>

        {/* Back */}
        <Link href="/writing" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none", marginBottom: "2.5rem" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>
          <ArrowLeft size={13} /> All writing
        </Link>

        {/* Header */}
        <header style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--cyan)", background: "var(--cyan-dim)", padding: "0.2rem 0.6rem", borderRadius: "4px", letterSpacing: "0.06em" }}>{post.tag}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--text3)" }}><Calendar size={11} />{post.date}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--text3)" }}><Clock size={11} />{post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            {post.title}
          </h1>
          <div style={{ height: 1, background: "var(--border)" }} />
        </header>

        {/* Content */}
        <article
          style={{ fontSize: "1rem", lineHeight: 1.9, color: "var(--text2)", fontWeight: 300, maxWidth: 640 }}
          dangerouslySetInnerHTML={{
            __html: post.content
              .trim()
              .split("\n\n")
              .map(block => {
                const t = block.trim();
                if (!t) return "";
                if (t.startsWith("<h2>")) return t;
                if (t.startsWith("<code>") || t.includes("<code>")) return `<p style="margin-bottom:1.4rem">${t}</p>`;
                return `<p style="margin-bottom:1.4rem">${t}</p>`;
              })
              .join("")
              .replace(/<h2>(.*?)<\/h2>/g, `<h2 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.15rem;color:var(--text);margin:2.5rem 0 0.9rem;letter-spacing:-0.01em">$1</h2>`)
              .replace(/<code>(.*?)<\/code>/g, `<code style="font-family:'JetBrains Mono',monospace;font-size:0.85em;background:var(--bg2);padding:0.15em 0.4em;border-radius:4px;color:var(--text)">$1</code>`)
          }}
        />

        {/* Footer nav */}
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/writing" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>
            ← All posts
          </Link>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <a href="https://linkedin.com/in/john-ayomide-akinola" target="_blank" rel="noreferrer"
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: "var(--text3)", textDecoration: "none", padding: "0.35rem 0.75rem", border: "1px solid var(--border)", borderRadius: "6px" }}>
              Share on LinkedIn
            </a>
            <a href="https://www.youtube.com/@buildwithjaa" target="_blank" rel="noreferrer"
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: "var(--text3)", textDecoration: "none", padding: "0.35rem 0.75rem", border: "1px solid var(--border)", borderRadius: "6px" }}>
              Build With JAA
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}
