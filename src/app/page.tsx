"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import TextScramble from "@/components/animations/TextScramble";
import AuroraBackground from "@/components/animations/AuroraBackground";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import MagneticButton from "@/components/animations/MagneticButton";
import PageTransition from "@/components/animations/PageTransition";

const techStack = {
  Frontend: ["React", "Next.js", "React Native", "Electron", "Tailwind CSS"],
  Backend: ["Node.js", "ASP.NET", "Django", "Flask"],
  "AI / ML": ["TensorFlow", "OpenAI API", "Claude API", "CNN"],
  Infra: ["AWS", "Azure", "Docker"],
  Database: ["MSSQL", "PostgreSQL", "SQLite"],
  Languages: ["TypeScript", "Python", "C#"],
};

const experiences = [
  {
    year: "2026",
    title: "LIFELOG",
    role: "풀스택 개발",
    description:
      "EST 주관 AI 프로젝트 우수작. 촬영 순간의 날짜, 위치, 날씨, 감정을 함께 기록하고, GPT-4 Vision이 맥락 기반 문구와 해시태그를 생성하는 키오스크형 포토부스 서비스.",
    href: "/project/lifelog",
  },
  {
    year: "2026",
    title: "내폰네컷",
    role: "풀스택 개발",
    description:
      "AI로 배경을 제거하고 감성 문구를 생성하는 모바일 포토부스 앱. BiRefNet 기반 정교한 배경 제거, Claude API 문구 생성, 11개 언어 지원.",
    href: "/project/myphone4cuts",
  },
  {
    year: "2024",
    title: "RehobotRVM",
    role: "풀스택 개발",
    description:
      "AI 기반 전자폐기물 자동 분류 키오스크 시스템. CNN 모델로 15종 전선 분류 정확도 90% 달성, 27인치 터치 키오스크 UI, 하드웨어 센서 연동.",
    href: "/project/rehobot",
  },
  {
    year: "2021",
    title: "DearInBody",
    role: "풀스택 개발",
    description:
      "InBody 장비 사양 관리를 오프라인에서 온라인으로 전환한 B2B 내부 시스템. React + .NET 5.0 + MSSQL, Azure AD 통합 인증, 처리 시간 2~3일 → 즉시로 단축.",
    href: "/project/dearinbody",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
            <span className="font-semibold text-sm tracking-tight">KTH</span>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Work
              </a>
              <a
                href="mailto:kimth1113@gmail.com"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Resume
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <AuroraBackground className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <RevealOnScroll>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      T
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold">김태현 (TaeHyun Kim)</h1>
                      <p className="text-sm text-[var(--muted)]">풀스택 개발자</p>
                    </div>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-6 mb-4">
                    <TextScramble text="비즈니스 문제를" delay={300} />{" "}
                    <span className="text-[var(--accent)]">
                      <TextScramble text="웹/AI" delay={500} />
                    </span>
                    <TextScramble text="로" delay={600} />{" "}
                    <span className="text-[var(--accent)]">
                      <TextScramble text="제품화" delay={700} />
                    </span>
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={0.2}>
                  <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mb-8">
                    UI/UX 설계부터 백엔드/API, 인프라까지 End-to-End로 구현하며,
                    실제 운영 환경에서 유지보수·성능·데이터 품질 개선 경험을 보유한 풀스택 개발자입니다.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.3}>
                  <div className="flex items-center gap-4">
                    <MagneticButton
                      as="a"
                      href="#experience"
                      className="px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cta-shine"
                    >
                      View Work
                    </MagneticButton>
                    <MagneticButton
                      as="a"
                      href="mailto:kimth1113@gmail.com"
                      className="px-5 py-2.5 border border-[var(--border)] rounded-lg text-sm font-medium hover:bg-[var(--card)] transition-colors"
                    >
                      Get in Touch
                    </MagneticButton>
                  </div>
                </RevealOnScroll>
              </div>
              {/* Profile Image */}
              <RevealOnScroll delay={0.2}>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[var(--border)] shadow-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="김태현 프로필 사진"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Stats */}
            <RevealOnScroll delay={0.4}>
              <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[var(--border)]">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    <AnimatedCounter value="4+" />
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    <AnimatedCounter value="10+" />
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">
                    <AnimatedCounter value="3" />
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">Certifications</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </AuroraBackground>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
                About
              </h3>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-12">
              <RevealOnScroll delay={0.1}>
                <div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    현재 인테리어 플랫폼 <strong className="text-[var(--foreground)]">바닥선생</strong>을 창업하여
                    자사 홈페이지 개발과 AI 챗봇 상담, 자동 견적 시스템을 구현하고 있습니다.
                  </p>
                  <p className="text-[var(--muted)] leading-relaxed mt-4">
                    이전에는 <strong className="text-[var(--foreground)]">르호봇알브이엠</strong>에서 AI 전선 재활용 시스템을 개발했고,
                    <strong className="text-[var(--foreground)]"> 인바디, 윈썸, 아자스쿨</strong> 등 다양한 기업의 웹/앱 서비스를 프리랜서로 구축했습니다.
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    삼성 청년 SW 아카데미를 우수 성적으로 조기 수료했으며,
                    필리핀/인도 교환학생과 현대자동차 인도법인 인턴 경험을 통해 글로벌 커뮤니케이션 역량을 갖추고 있습니다.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[var(--muted)]">Location</span>
                      <span>Korea</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[var(--muted)]">Education</span>
                      <span>인천대학교 정보기술대학원 (휴학)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[var(--muted)]"></span>
                      <span>한라대학교 광고홍보학 학사</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Arsenal / Tech Stack Section */}
        <section className="py-20 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
                My Arsenal
              </h3>
            </RevealOnScroll>
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-12">
                Selected Work
              </h3>
            </RevealOnScroll>
            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <RevealOnScroll key={i} delay={i * 0.1}>
                  <Link
                    href={exp.href}
                    className="experience-card group block border-t border-[var(--border)] py-8 hover:bg-[var(--card)] -mx-6 px-6 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <span className="text-sm text-[var(--muted)] font-mono md:w-20 shrink-0">
                        {exp.year}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                            {exp.title}
                          </h4>
                          <span className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded">
                            {exp.role}
                          </span>
                        </div>
                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-1 transition-all shrink-0 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
              <div className="border-t border-[var(--border)]" />
            </div>
          </div>
        </section>

        {/* Education & Certification Section */}
        <section className="py-20 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
                Education & Certification
              </h3>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-12">
              <RevealOnScroll delay={0.1}>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold">인천대학교</h4>
                    <p className="text-[var(--muted)] text-sm mt-1">정보기술대학원 (휴학)</p>
                    <p className="text-xs text-[var(--muted)] mt-1">2023년 9월 입학</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">한라대학교</h4>
                    <p className="text-[var(--muted)] text-sm mt-1">광고홍보학 학사</p>
                    <p className="text-xs text-[var(--muted)] mt-1">2014년 3월 ~ 2020년 8월</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">삼성 청년 SW 아카데미</h4>
                    <p className="text-[var(--muted)] text-sm mt-1">우수성적자 조기 수료</p>
                    <p className="text-xs text-[var(--muted)] mt-1">2021년</p>
                  </div>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-[var(--muted)]">자격증</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                      <span>AWS Machine Learning Associate</span>
                      <span className="text-sm text-[var(--muted)]">2025.12</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                      <span>SQLD</span>
                      <span className="text-sm text-[var(--muted)]">2025.04</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[var(--border)]">
                      <span>OPIC IM2</span>
                      <span className="text-sm text-[var(--muted)]">2024.09</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer className="py-20 px-6 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-8">
                Contact
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="flex flex-col md:flex-row gap-8">
                <a
                  href="mailto:kimth1113@gmail.com"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                >
                  kimth1113@gmail.com
                </a>
                <a
                  href="https://github.com/kimth1113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                >
                  GitHub
                </a>
                <span className="text-[var(--muted)] text-sm">010-2719-5860</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-xs text-[var(--muted)] mt-12">
                Korea
              </p>
            </RevealOnScroll>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
}
