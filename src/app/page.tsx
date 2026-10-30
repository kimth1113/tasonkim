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
  "Frontend": [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript"
  ],
  "Mobile": [
    "Swift",
    "React Native",
    "Expo"
  ],
  "Backend": [
    "Python",
    "Django",
    "Node.js",
    "ASP.NET"
  ],
  "Data": [
    "SQLite",
    "SQL"
  ],
  "Tools": [
    "Git",
    "ChatGPT",
    "Codex"
  ]
};

const experiences = [
  {
    "year": "2026.07–",
    "title": "BGNT IT 요청·이슈 통합 관리 시스템",
    "role": "사내 업무 시스템 기획·개발·운영",
    "description": "요청 접수, 원본·완료 증빙 연결, 이슈 추적과 한영 보고서를 통합한 웹 시스템. Vanilla JavaScript·Python·SQLite 기반으로 구현하고 현업 피드백으로 개선했습니다.",
    "href": "https://github.com/kimth1113/portfolio/blob/main/projects/bgnt.md"
  },
  {
    "year": "2026",
    "title": "개인 앱 개발·운영",
    "role": "모바일 · Apps in Toss",
    "description": "내폰네컷, AI 증명사진, 메아리AI, 치매타파, AI야 이게 뭐게를 개발·운영하고 책 읽어주는 AI 출시를 준비하고 있습니다. 화면·API·광고·결제 흐름을 구현했습니다.",
    "href": "https://github.com/kimth1113/portfolio/blob/main/projects/apps.md"
  },
  {
    "year": "2026.03–05",
    "title": "이스트소프트 제주",
    "role": "KDT팀 프런트엔드 개발 파트",
    "description": "교육·운영 업무를 지원하는 프런트엔드 개발 업무를 수행했습니다.",
    "href": "https://github.com/kimth1113/portfolio/blob/main/projects/experience.md"
  },
  {
    "year": "2023.10–2024.10",
    "title": "르호봇알브이엠",
    "role": "AI 폐전선 수거 자판기 웹 개발",
    "description": "React·ASP.NET 웹 시스템 개발·유지보수에 참여했습니다. AI 추론 결과 API 연동과 학습 데이터 전처리를 수행했습니다.",
    "href": "/project/rehobot"
  },
  {
    "year": "2022.02–2023.02",
    "title": "인바디 BWA ON",
    "role": "iOS 개발 · 프리랜서 계약",
    "description": "Swift 중심으로 측정 결과·그래프, Bluetooth 기기 연동, 로그인·회원정보, API 연동과 오류 수정을 담당했습니다.",
    "href": "/project/bwa-on"
  },
  {
    "year": "2021.11–2022.02",
    "title": "인바디 ERP",
    "role": "본사 ERP 개발",
    "description": "업무용 웹 시스템 개발에 참여했습니다. BWA ON iOS 앱과 별도 서비스입니다.",
    "href": "/project/dearinbody"
  },
  {
    "year": "2020.01–12",
    "title": "현대자동차 인도법인",
    "role": "구매 IT 시스템 개발 인턴",
    "description": "Python 기반 구매·품질 통합 추적 웹 애플리케이션과 부품별 불량률 추적·평가 시스템 개발에 참여했습니다.",
    "href": "https://github.com/kimth1113/portfolio/blob/main/projects/experience.md"
  },
  {
    "year": "교육 프로젝트",
    "title": "LIFELOG",
    "role": "AI 포토부스 개발",
    "description": "촬영 맥락을 사진과 문구로 남기는 웹 프로젝트. 사진 선택·촬영·문구 생성·결과 확인 흐름을 구현했습니다.",
    "href": "/project/lifelog"
  }
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
                    <div className="w-12 h-12 rounded-full bg-[#103466] flex items-center justify-center text-white font-bold text-lg">
                      T
                    </div>
                    <div>
                      <h1 className="text-lg font-semibold">김태현 (TaeHyun Kim)</h1>
                      <p className="text-sm text-[var(--muted)]">웹·모바일 개발자</p>
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
                    업무용 웹 시스템과 모바일 앱을 개발합니다.
                    사용자 요청을 화면과 데이터 흐름으로 옮기고, 실제 운영에서 생기는 문제를 개선합니다.
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
                    <span>Web · Mobile</span>
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">Development</p>
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
                    현재 <strong className="text-[var(--foreground)]">쉐라톤 완리 카지노 IT</strong>에서
                    운영지원과 사내 업무 시스템 개발을 수행하며 개인 앱도 개발·운영하고 있습니다.
                  </p>
                  <p className="text-[var(--muted)] leading-relaxed mt-4">
                    <strong className="text-[var(--foreground)]">르호봇알브이엠</strong>에서는 AI 폐전선 수거 자판기 웹 시스템을,
                    <strong className="text-[var(--foreground)]"> 인바디</strong>에서는 ERP와 BWA ON iOS 앱을 개발했습니다.
                  </p>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    삼성전자 주관 SSAFY에서 Python·JavaScript 웹 개발을 학습하고 우수 교육생으로 조기 수료했습니다.
                    현대자동차 인도법인에서 구매 IT 시스템 개발 인턴을 경험했습니다.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[var(--muted)]">Location</span>
                      <span>Jeju, Korea</span>
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
                    <h4 className="text-lg font-semibold">삼성전자 주관 SSAFY</h4>
                    <p className="text-[var(--muted)] text-sm mt-1">Python·JavaScript 웹 개발 1,300시간 · 우수 교육생 조기 수료</p>
                    <p className="text-xs text-[var(--muted)] mt-1">2021.01–10</p>
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

