"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import PageTransition from "@/components/animations/PageTransition";
import MagneticButton from "@/components/animations/MagneticButton";

export default function DoePage() {
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
                <p className="text-sm text-[var(--muted)] font-mono mb-3">2026 — Present</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">desk of einstein</h1>
                <p className="text-xl text-[var(--muted)] leading-relaxed">
                  Spatial workspace for messy minds. A home for ideas before they&apos;re ready.
                </p>
              </RevealOnScroll>
            </header>

            {/* Hero Image */}
            <RevealOnScroll>
              <div className="mb-16 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">d</span>
                    </div>
                    <p className="text-[var(--muted)] text-sm">desk of einstein — Canvas View</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Section 01 - Problem */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  01 — The Problem
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  Notion is great. For after you&apos;ve figured it out.
                </h2>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  But what about the mess before that? The 47 open browser tabs. Three separate Claude
                  conversations. A half-written note in Apple Notes. A voice memo from the shower.
                  Research scattered across Notion, Google Docs, and your camera roll.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  Every existing tool assumes you already know what you&apos;re working on.
                  But real thinking is messy. It&apos;s spatial. It&apos;s nonlinear.
                  We needed a workspace that embraces the chaos.
                </p>
              </section>
            </RevealOnScroll>

            {/* Section 02 - What Goes In */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  02 — What Goes In
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  Everything. Literally everything.
                </h2>
              </RevealOnScroll>
              <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Browser tabs", "Terminal outputs", "AI chat threads", "YouTube videos", "Voice memos", "Scribbled notes"].map(
                  (item) => (
                    <StaggerItem key={item}>
                      <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]">
                        <p className="text-sm font-medium">{item}</p>
                      </div>
                    </StaggerItem>
                  )
                )}
              </StaggerChildren>
              <RevealOnScroll>
                <p className="text-[var(--muted)] leading-relaxed mt-6">
                  All arranged spatially on a unified canvas. Drag, group, connect.
                  No folders. No hierarchy. Just space.
                </p>
              </RevealOnScroll>
            </section>

            {/* Section 03 - Engineering */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  03 — Engineering
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  Making infinity feel instant
                </h2>
              </RevealOnScroll>

              <StaggerChildren className="space-y-6">
                {[
                  { title: "Infinite Canvas Engine", desc: "Electron + React with aggressive rendering optimizations. Virtual viewport culling, level-of-detail switching, and GPU-accelerated transforms." },
                  { title: "Real-time Sync", desc: "Cloudflare Durable Objects + WebSockets for collaborative editing. Sub-100ms latency across regions." },
                  { title: "Cross-platform", desc: "Capacitor for iOS, Watch Extensions, Capgo OTA updates. Same canvas, every device." },
                  { title: "Data Layer", desc: "Supabase for auth & database, Cloudflare R2 for asset storage. Optimistic local-first with cloud sync." },
                ].map((card) => (
                  <StaggerItem key={card.title}>
                    <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      <h3 className="font-semibold mb-2">{card.title}</h3>
                      <p className="text-sm text-[var(--muted)]">{card.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              {/* Code Snippet */}
              <RevealOnScroll>
                <div className="mt-8 p-6 rounded-xl bg-[#1e1e1e] text-green-400 font-mono text-sm overflow-x-auto">
                  <pre>{`const sync = await durable.get("workspace");
const state = await sync.fetch(request);

// Real-time collaboration
websocket.accept();
websocket.send(JSON.stringify({
  type: "cursor",
  position: { x: 1024, y: 768 },
  user: session.id
}));`}</pre>
                </div>
              </RevealOnScroll>
            </section>

            {/* Performance Metrics */}
            <RevealOnScroll>
              <section className="mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "<100ms", label: "Sync latency" },
                    { value: "\u221E", label: "Canvas objects" },
                    { value: "0", label: "Downtime deploys" },
                    { value: "3", label: "Platforms" },
                  ].map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-2xl font-bold">
                        <AnimatedCounter value={metric.value} />
                      </p>
                      <p className="text-xs text-[var(--muted)] mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            </RevealOnScroll>

            {/* Section 04 - Philosophy */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  04 — Philosophy
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  Think here. Document there.
                </h2>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  We&apos;re not replacing Notion or Google Docs. We&apos;re building the layer
                  that comes before them. The messy, spatial, nonlinear thinking phase
                  where ideas are born and connections are discovered.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  Linear tools are for linear thinking. The canvas is for everything else.
                </p>
              </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
              <section className="p-8 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center">
                <h3 className="text-xl font-bold mb-2">Try desk of einstein</h3>
                <p className="text-sm text-[var(--muted)] mb-6">
                  Available for Mac & Windows. Public Beta.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <MagneticButton className="px-6 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cta-shine">
                    Download for Mac
                  </MagneticButton>
                  <MagneticButton className="px-6 py-2.5 border border-[var(--border)] rounded-lg text-sm font-medium hover:bg-[var(--background)] transition-colors">
                    Download for Windows
                  </MagneticButton>
                </div>
              </section>
            </RevealOnScroll>
          </div>
        </article>
      </main>
    </PageTransition>
  );
}
