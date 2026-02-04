"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import PageTransition from "@/components/animations/PageTransition";
import MagneticButton from "@/components/animations/MagneticButton";

const techStack = {
  Backend: ["NestJS", "FastAPI", "Node.js", "ts-rest"],
  AI: ["LangChain", "LangGraph", "Langfuse"],
  Database: ["MongoDB", "Prisma", "Redis"],
  Infra: ["AWS", "GCP", "Kubernetes", "RunPod"],
  DevOps: ["Jenkins", "Grafana", "ArgoCD", "Sentry"],
};

export default function MefriendPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)]">
          <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/#experience"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        <article className="pt-28 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-16">
              <RevealOnScroll>
                <p className="text-sm text-[var(--muted)] font-mono mb-3">2025 — Present</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">mefriend.ai</h1>
                <p className="text-xl text-[var(--muted)] leading-relaxed">
                  Imagine. Interact. Immerse.
                </p>
              </RevealOnScroll>
            </header>

            {/* Key Metrics */}
            <RevealOnScroll>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                {[
                  { value: "300K+", label: "Global users" },
                  { value: "10M+", label: "Conversations" },
                  { value: "95%", label: "International" },
                  { value: "45", label: "Days to MVP" },
                ].map((metric) => (
                  <div key={metric.label} className="text-center">
                    <p className="text-2xl font-bold">
                      <AnimatedCounter value={metric.value} />
                    </p>
                    <p className="text-xs text-[var(--muted)] mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Government Recognition */}
            <RevealOnScroll>
              <div className="mb-16 p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
                <p className="text-sm font-semibold text-[var(--accent)] mb-2">Government Recognition</p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Selected as a &ldquo;National Top-Tier Deep Tech Startup&rdquo; through South Korea&apos;s
                  Ministry of SMEs and Startups, including a ~$230K grant for R&D and commercialization.
                </p>
              </div>
            </RevealOnScroll>

            {/* Section 01 - Pivot */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  01 — The Pivot
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  From atoms to bits
                </h2>
              </RevealOnScroll>
              <StaggerChildren className="grid md:grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                    <h3 className="font-semibold mb-2 text-red-400">Hardware (Naly)</h3>
                    <ul className="text-sm text-[var(--muted)] space-y-2">
                      <li>10 months to prototype</li>
                      <li>~$200 unit cost</li>
                      <li>Manufacturing bottlenecks</li>
                      <li>Hundreds of users (max)</li>
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                    <h3 className="font-semibold mb-2 text-green-400">Software (mefriend)</h3>
                    <ul className="text-sm text-[var(--muted)] space-y-2">
                      <li>45 days to MVP</li>
                      <li>Zero manufacturing costs</li>
                      <li>Infinite scalability</li>
                      <li>300K+ users in 5 months</li>
                    </ul>
                  </div>
                </StaggerItem>
              </StaggerChildren>
            </section>

            {/* Section 02 - Product */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  02 — The Product
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  YouTube of AI Characters
                </h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  A UGC platform where anyone can create, share, and talk to AI personas with
                  distinct memories and personalities. Think YouTube, but instead of watching
                  videos, you&apos;re having conversations with characters that remember you,
                  evolve over time, and tell stories that unfold across sessions.
                </p>
              </section>
            </RevealOnScroll>

            {/* Section 03 - Research */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  03 — Research & Strategy
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  Data-driven product decisions
                </h2>
              </RevealOnScroll>
              <StaggerChildren className="space-y-6">
                {[
                  { title: "HXC Framework", desc: "Customer journey mapping to identify friction points and delight moments across the character creation and conversation experience." },
                  { title: "JTBD Analysis", desc: "Identifying core user jobs: escapism, creative expression, companionship, and storytelling." },
                  { title: "PMF Surveys", desc: "Continuous product-market fit measurement. Four pillars identified: consistency, discovery, community, and story unfolding." },
                ].map((card) => (
                  <StaggerItem key={card.title}>
                    <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      <h3 className="font-semibold mb-2">{card.title}</h3>
                      <p className="text-sm text-[var(--muted)]">{card.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </section>

            {/* Section 04 - Tech Stack */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  04 — Tech Stack
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  Built for scale from day one
                </h2>
              </RevealOnScroll>
              <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(techStack).map(([category, techs]) => (
                  <StaggerItem key={category}>
                    <div>
                      <h4 className="text-sm font-semibold mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </section>

            {/* Section 05 - Challenges */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  05 — Challenges & Solutions
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  Scaling to 300K users
                </h2>
              </RevealOnScroll>
              <StaggerChildren className="space-y-6">
                {[
                  { challenge: "User Discovery", solution: "ML-powered recommendation engine for character and conversation discovery." },
                  { challenge: "Backend Scalability", solution: "Event-driven microservices architecture handling millions of concurrent conversations." },
                  { challenge: "Cost Optimization", solution: "Hybrid cloud orchestration across AWS, GCP, and RunPod for GPU-intensive inference." },
                  { challenge: "AI Observability", solution: "LangGraph for agent orchestration, Langfuse for tracing and monitoring every LLM call." },
                ].map((item) => (
                  <StaggerItem key={item.challenge}>
                    <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      <h3 className="font-semibold mb-2">{item.challenge}</h3>
                      <p className="text-sm text-[var(--muted)]">{item.solution}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </section>

            {/* Section 06 - Impact */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  06 — Impact
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  From hundreds to hundreds of thousands
                </h2>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  With Naly, we could reach hundreds of users at best — limited by manufacturing
                  capacity and unit economics. With mefriend.ai, we reached 300,000+ users in
                  5 months with zero manufacturing costs.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  The pivot validated our core thesis: people want AI companions with personality
                  and memory. They just don&apos;t need them in a physical box.
                  The storytelling and connection is what matters — not the form factor.
                </p>
              </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
              <section className="p-8 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center">
                <h3 className="text-xl font-bold mb-2">Try mefriend.ai</h3>
                <p className="text-sm text-[var(--muted)] mb-6">
                  Create, share, and talk to AI characters.
                </p>
                <MagneticButton
                  as="a"
                  href="https://mefriend.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cta-shine"
                >
                  Visit mefriend.ai
                </MagneticButton>
              </section>
            </RevealOnScroll>
          </div>
        </article>
      </main>
    </PageTransition>
  );
}
