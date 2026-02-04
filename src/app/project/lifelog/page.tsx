"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import PageTransition from "@/components/animations/PageTransition";
import MagneticButton from "@/components/animations/MagneticButton";

export default function LifelogPage() {
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
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-sm text-[var(--muted)] font-mono">2026.01 — 2026.02</p>
                  <span className="px-2 py-0.5 text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded">EST AI 프로젝트 우수작</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">LIFELOG</h1>
                <p className="text-xl text-[var(--muted)] leading-relaxed">
                  &quot;사진만 남는 포토부스&quot;를 &quot;기억까지 남는 포토부스&quot;로
                </p>
              </RevealOnScroll>
            </header>

            {/* Hero Image - 메인 화면 */}
            <RevealOnScroll>
              <div className="mb-16 rounded-xl overflow-hidden border border-[var(--border)]">
                <Image
                  src="/images/lifelog/image-20260114131254284.png"
                  alt="LIFELOG 메인 화면"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            </RevealOnScroll>

            {/* Section 01 - Overview */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  01 — Overview
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  촬영 순간을 기억으로 완성하다
                </h2>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  LIFELOG는 촬영 순간의 날짜, 위치, 날씨, 감정을 함께 기록하고,
                  AI가 맥락 기반 문구와 해시태그를 생성해 출력물로 완성하는 키오스크형 서비스입니다.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  같은 사진이라도 선택한 모드에 따라 결과 톤이 달라집니다.
                  커플, 친구, 가족 등 관계에 맞는 해시태그 6개를 자동 추천하고,
                  동네 분위기와 랜드마크를 반영한 지역 해시태그도 생성합니다.
                </p>
              </section>
            </RevealOnScroll>

            {/* Section 02 - Core Features */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  02 — Core Features
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  GPT-4 Vision 멀티모달 문구 생성
                </h2>
              </RevealOnScroll>

              {/* 문구 생성 모드 선택 화면 */}
              <RevealOnScroll>
                <div className="mb-8 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/lifelog/image-20260114133424356.png"
                    alt="문구 생성 모드 선택 - MZ감성, 시적 감성, 해시태그 모드"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
              </RevealOnScroll>

              <StaggerChildren className="space-y-4">
                {[
                  { title: "사진 분석", desc: "인물 구도, 표정, 장면 분위기를 AI가 분석" },
                  { title: "메타데이터 결합", desc: "날짜, 위치, 날씨, 관계/모드 정보와 사진을 결합" },
                  { title: "맞춤 문구 생성", desc: "\"그 순간을 설명하는 한 줄 문장\" 자동 생성" },
                  { title: "3가지 모드 지원", desc: "MZ감성 모드 / 시적 감성 모드 / 해시태그 모드" },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </section>

            {/* Section 03 - Hashtag Generation */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  03 — Hashtag Generation
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  관계·위치 기반 해시태그 자동 생성
                </h2>
              </RevealOnScroll>

              {/* 관계 선택 + 해시태그 화면 */}
              <RevealOnScroll>
                <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/lifelog/image-20260114132721637.png"
                    alt="관계 선택 및 해시태그 추천 화면"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
              </RevealOnScroll>

              {/* 해시태그 선택 UI */}
              <RevealOnScroll>
                <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/lifelog/image-20260114133034345.png"
                    alt="해시태그 선택 UI - 1~3개 선택"
                    width={1200}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-3 text-[var(--muted)] font-medium">관계</th>
                        <th className="text-left py-3 text-[var(--muted)] font-medium">해시태그 예시</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--muted)]">
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3 font-medium">커플</td>
                        <td className="py-3">#CoupleShot #데이트기록 #오늘의우리 #LoveMoment</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3 font-medium">친구</td>
                        <td className="py-3">#Besties #친구랑찰칵 #추억저장 #한장더</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">가족</td>
                        <td className="py-3">#FamilyTime #가족사진 #함께한순간 #기념샷</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </RevealOnScroll>
            </section>

            {/* Section 04 - Result */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  04 — Result
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  최종 결과물
                </h2>
              </RevealOnScroll>

              {/* 최종 4컷 결과물 */}
              <RevealOnScroll>
                <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] p-4 flex justify-center">
                  <Image
                    src="/images/lifelog/image-20260114133607874.png"
                    alt="LIFELOG 최종 결과물 - 4컷 사진"
                    width={300}
                    height={450}
                    className="rounded-lg"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className="text-[var(--muted)] leading-relaxed text-center">
                  AI가 생성한 문구와 해시태그가 포함된 4컷 사진 결과물
                </p>
              </RevealOnScroll>
            </section>

            {/* Section 05 - Tech Stack */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  05 — Tech Stack
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  시스템 아키텍처
                </h2>
              </RevealOnScroll>

              {/* 기술 아키텍처 다이어그램 */}
              <RevealOnScroll>
                <div className="mb-8 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/lifelog/image-20260114134512742.png"
                    alt="LIFELOG 시스템 아키텍처"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
              </RevealOnScroll>

              <StaggerChildren className="grid grid-cols-2 gap-4">
                {[
                  { layer: "Frontend", tech: "React + Vite", desc: "키오스크 최적화 대화면 UI" },
                  { layer: "Backend", tech: "Django + DRF", desc: "AI 요청 오케스트레이션" },
                  { layer: "AI", tech: "GPT-4 Vision", desc: "사진 분석 및 문구 생성" },
                  { layer: "Infra", tech: "AWS (S3, CloudFront, EB)", desc: "정적 배포, CDN, API 서버" },
                ].map((item) => (
                  <StaggerItem key={item.layer}>
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]">
                      <p className="text-xs text-[var(--muted)] mb-1">{item.layer}</p>
                      <p className="font-semibold text-sm">{item.tech}</p>
                      <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </section>

            {/* Section 06 - Achievements */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  06 — Achievements
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  주요 성과
                </h2>
                <ul className="space-y-3 text-[var(--muted)]">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500">★</span>
                    <span>EST 주관 AI 프로젝트 우수작 선정</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)]">→</span>
                    <span>15인치 이상 키오스크 환경 최적화 UI/UX 설계</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)]">→</span>
                    <span>JEJULOG → LIFELOG 리브랜딩 (전국 확장형 서비스로 재구성)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)]">→</span>
                    <span>실사용 가능한 프로덕션 레벨 배포 완료</span>
                  </li>
                </ul>
              </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
              <section className="p-8 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center">
                <h3 className="text-xl font-bold mb-2">LIFELOG 체험하기</h3>
                <p className="text-sm text-[var(--muted)] mb-6">
                  AI 포토부스 서비스를 직접 경험해보세요.
                </p>
                <MagneticButton
                  as="a"
                  href="https://d3e5arjoobi964.cloudfront.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cta-shine"
                >
                  Live Demo
                </MagneticButton>
              </section>
            </RevealOnScroll>
          </div>
        </article>
      </main>
    </PageTransition>
  );
}
