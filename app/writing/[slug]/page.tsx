import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface Post {
  title: string;
  date: string;
  tag: string;
  readTime: string;
  content: string;
}

const posts: Record<string, Post> = {

  "from-chemistry-to-cloud": {
    title: "From Chemistry Class to Cloud — My Unfiltered Story",
    date: "March 1, 2026",
    tag: "Career",
    readTime: "8 min read",
    content: `
I always loved computers.

From childhood, computers fascinated me. When it was time to choose what to study, I wanted Computer Engineering. JAMB had other plans. My score put me in Chemistry Education instead, and that was the path I took.

So I studied chemistry. I got my degree. I got my TRCN certification. On paper, I was a chemistry teacher.

But I was never really done with computers.

<h2>2020: HTML, CSS, and JavaScript</h2>

In 2020 I started teaching myself web development. HTML first, then CSS, then JavaScript. Nobody told me to. There was no job offer waiting. I just sat down and started learning, the same way I had always been drawn to understanding how things work.

What surprised me was how quickly it clicked. The logic of building something in a browser, making it respond to interaction, shaping it with code — it made sense to me immediately. I kept going.

One project led to another. One concept opened the next. I started building real things: websites, then web applications, then more complex platforms. I was not following a course curriculum. I was just building, breaking things, figuring out why they broke, and building again.

<h2>The rest of the story</h2>

From web development I moved into cloud infrastructure. Learning how the servers behind the applications work, how to deploy what I was building, how to make it scale and stay up. AWS, Docker, Kubernetes, Terraform — each one built on what came before.

I got my AWS Cloud Practitioner certification. I started taking on client projects. I became a tech instructor. I started a YouTube channel called Build With JAA to teach what I was building.

Now I also vibe code — using AI tools as part of the development workflow, not as a replacement for understanding but as an accelerator on top of it. The AI space genuinely interests me, and that interest has led to building AI-powered platforms and working with LLMs as part of real project work.

<h2>What I want you to take from this</h2>

JAMB did not give me the course I wanted. That redirection turned into a chemistry degree, a TRCN certification, and years of building technical understanding in a completely different way from what I planned.

I do not think I would have the perspective I have now without that path. The discipline of studying a hard science, the training to explain complex things clearly, the experience of teaching — all of that followed me into tech and made me a better engineer.

Your route into this field will not look like anyone else's. That is not a problem. That is the whole point.

I wrote a book about this transition. It is called From Chemistry Class to Cloud, and it is free. If you are building your way into tech from an unconventional background, it was written for you.
    `,
  },

  "kubernetes-production": {
    title: "Running Kubernetes in Production — What Nobody Tells You",
    date: "March 10, 2026",
    tag: "Platform Engineering",
    readTime: "12 min read",
    content: `
Every Kubernetes tutorial teaches you how to deploy an Nginx pod and call it a day.

Nobody teaches you what happens when your monitoring is misconfigured and your node pool quietly runs out of memory. Nobody teaches you what OOMKilled means at 2am when a platform is down. Nobody teaches you the things you only learn by actually running Kubernetes in production.

That memory and monitoring failure is real. I have been there. It is the kind of incident that teaches you more than any tutorial ever will, and it is where this post starts.

<h2>The memory incident and what it actually taught me</h2>

A node pool running out of memory does not always look like an emergency until it is one. What you see first is degraded performance — things slowing down, response times climbing. Then pods start getting evicted. Then OOMKilled starts appearing in your logs.

OOMKilled means the Linux kernel killed a container because it exceeded its memory limit, or because the node itself ran out of memory and the kernel had to choose what to kill. When your monitoring is not configured to alert on this, you find out when users start reporting problems — not when the problem starts.

The lesson is not just "set memory limits." It is layered.

<h2>Resource limits are not optional</h2>

Every workload needs <code>requests</code> and <code>limits</code> set on both CPU and memory. <code>requests</code> is what Kubernetes uses to schedule a pod onto a node. <code>limits</code> is the ceiling the container cannot exceed.

If you set no memory limit, a single container can consume the entire node's memory. Every other pod on that node gets evicted or killed. Set limits based on what your application actually uses under real load, not what you guess it might need.

<h2>Readiness and liveness probes do different jobs</h2>

A pod in the Running state does not mean your application is serving traffic. It means the container process started. Those are different things.

Readiness probes tell Kubernetes when a pod is actually ready to receive traffic. Without them, a pod can be Running, registered behind a Service, and returning errors because the application inside it has not finished initialising.

Liveness probes tell Kubernetes when a pod needs to be restarted. A deadlocked application that is technically still running will sit there indefinitely without a liveness probe, appearing healthy while serving nothing useful.

Both probes should check something real — an HTTP endpoint that actually exercises the application, not just a process check.

<h2>Namespaces are organisation, not security</h2>

Pods in different namespaces on the same cluster can communicate with each other by default. A compromised workload in one namespace can reach services in another unless explicit NetworkPolicy rules prevent it.

If you need real isolation between workloads — separate environments, different clients, different risk profiles — that requires NetworkPolicy, or separate clusters entirely. Namespaces alone do not provide it.

<h2>etcd is the cluster. Back it up.</h2>

Everything about your Kubernetes cluster — every Deployment, every Secret, every ConfigMap — is stored in etcd. If etcd is lost without a backup, the cluster is gone.

Back up etcd regularly and test the restore. A backup you have never restored is a backup you do not actually have.

<h2>Monitoring is not optional — it is the job</h2>

The memory incident I described at the start was preventable. Monitoring that was properly configured would have alerted before the node was full, before pods started getting evicted, before users saw anything at all.

You need alerts on node memory and CPU utilisation, pod restart counts, failed deployments, and pending pods that cannot be scheduled. You need to know at 70% memory, not at 100%.

Prometheus and Grafana are the standard tooling. The implementation takes time to set up correctly. That time is worth spending before the incident, not after.
    `,
  },

  "terraform-lessons": {
    title: "5 Terraform Lessons From Real Infrastructure Projects",
    date: "March 18, 2026",
    tag: "Platform Engineering",
    readTime: "10 min read",
    content: `
Terraform looks simple when you start.

You write some HCL, run <code>terraform apply</code>, and infrastructure appears. It feels clean. Then you try to manage it across multiple environments, with real client constraints, and you discover that Terraform rewards discipline and punishes shortcuts in equal measure.

These five lessons came from real IaC work across real projects.

<h2>1. State is everything — treat it that way</h2>

Terraform state is the record of what Terraform believes exists in your infrastructure. If state is wrong, Terraform makes wrong decisions. If state is lost, Terraform no longer knows what it manages.

Never store state locally for anything beyond a personal experiment. Use remote state. On AWS, that means S3 for storage and a DynamoDB table for locking. The locking prevents two concurrent <code>terraform apply</code> runs from corrupting the state file simultaneously.

Never edit the state file manually unless you fully understand what you are changing and have a verified backup.

<h2>2. Workspaces handle environments — but only if you design for them</h2>

Terraform workspaces let you use the same configuration against different environments — dev, staging, production — each with its own isolated state. The workspace name becomes a variable you can use inside your configuration to differentiate resource names, sizing, or behaviour per environment.

The mistake is assuming workspaces work without designing the configuration around them. If your resource names are hard-coded, workspaces give you separate state but identical resource names in every environment, which causes conflicts.

Design your configurations with <code>terraform.workspace</code> in mind from the start.

<h2>3. Modules should have a single responsibility</h2>

A module that creates a VPC, subnets, security groups, an EC2 instance, a database, and an S3 bucket is not a module — it is a script. It is untestable, unreusable, and unreadable six months later.

A VPC module creates a VPC and its associated networking resources. A database module creates a database. An application module creates the compute layer. Each has a clear boundary, a defined set of inputs, and a defined set of outputs.

Outputs are what make modules composable. The VPC module outputs its VPC ID. The application module accepts that VPC ID as an input variable. The modules stay separate and can be updated independently.

<h2>4. Read the plan. Every time.</h2>

<code>terraform plan</code> shows you exactly what Terraform intends to do before it does it. Reading it is not optional.

Look for resources being destroyed that you did not intend to destroy, resources being replaced rather than updated, and changes to resources outside the scope of what you changed.

A plan showing <code>2 to destroy</code> when you expected <code>1 to add</code> is a plan worth stopping on. Most infrastructure mistakes happen when someone applies without reading the plan.

<h2>5. Variables and outputs are how configurations stay useful long-term</h2>

A Terraform configuration with hard-coded values is a configuration you will rewrite for every new client or environment. Region, instance type, bucket name, CIDR block — all of these should be variables.

When a client needs a staging environment that mirrors production but with smaller instance sizes, a configuration built with variables lets you create it by changing a variable file. Hard-coded values require you to duplicate and edit the entire configuration.

Outputs serve the same purpose at the module level. They make the results of one module available as inputs to another, so configurations can be composed without duplicating resource lookups.

Terraform done well is infrastructure that a team can work on, that can be reviewed in a pull request, that can be promoted from dev to staging to production with confidence. That requires structural work upfront. There is no shortcut that gets you there without it.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const html = post.content
    .trim()
    .split("\n\n")
    .map((block) => {
      const t = block.trim();
      if (!t) return "";
      if (t.startsWith("<h2>")) return t;
      return `<p style="margin-bottom:1.4rem">${t}</p>`;
    })
    .join("")
    .replace(
      /<h2>(.*?)<\/h2>/g,
      `<h2 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.15rem;color:var(--text);margin:2.5rem 0 0.9rem;letter-spacing:-0.01em">$1</h2>`
    )
    .replace(
      /<code>(.*?)<\/code>/g,
      `<code style="font-family:'JetBrains Mono',monospace;font-size:0.85em;background:var(--bg2);padding:0.15em 0.4em;border-radius:4px;color:var(--text)">$1</code>`
    );

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <div className="container" style={{ paddingTop: 100, paddingBottom: "6rem" }}>

        <Link
          href="/writing"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none", marginBottom: "2.5rem" }}
        >
          <ArrowLeft size={13} /> All writing
        </Link>

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

        <article
          style={{ fontSize: "1rem", lineHeight: 1.9, color: "var(--text2)", fontWeight: 300, maxWidth: 640 }}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link href="/writing" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--text3)", textDecoration: "none" }}>
            Back to all posts
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
