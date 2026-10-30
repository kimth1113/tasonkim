"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import PageTransition from "@/components/animations/PageTransition";
import MagneticButton from "@/components/animations/MagneticButton";

export default function MyPhone4CutsPage() {
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
                  <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded">iOS / Android</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">내폰네컷</h1>
                <p className="text-xl text-[var(--muted)] leading-relaxed">
                  AI 기반 모바일 포토부스 앱. 언제 어디서나, 무료로.
                </p>
              </RevealOnScroll>
            </header>

            {/* Hero Image - 앱 메인 화면 */}
            <RevealOnScroll>
              <div className="mb-16 flex justify-center">
                <div className="rounded-3xl overflow-hidden border border-[var(--border)] max-w-[300px]">
                  <Image
                    src="/images/myphone4cuts/1000006116.jpg"
                    alt="내폰네컷 앱 메인 화면"
                    width={300}
                    height={650}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </RevealOnScroll>

            {/* Section 01 - Problem */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  01 — Problem
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  기존 포토부스의 한계를 넘어서
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-3 text-[var(--muted)] font-medium">기존 포토부스</th>
                        <th className="text-left py-3 text-[var(--muted)] font-medium">내폰네컷</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--muted)]">
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3">주말 30분 대기</td>
                        <td className="py-3">언제 어디서나 즉시 촬영</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3">회당 4,000~6,000원</td>
                        <td className="py-3">무료 (광고 기반)</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3">고정된 배경 선택지</td>
                        <td className="py-3">AI 배경 제거 + 무한 색상</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3">문구는 직접 고민</td>
                        <td className="py-3">AI가 상황에 맞게 생성</td>
                      </tr>
                      <tr>
                        <td className="py-3">한 번 찍으면 수정 불가</td>
                        <td className="py-3">무한 재촬영, 무한 편집</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </RevealOnScroll>

            {/* Section 02 - User Flow */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  02 — User Flow
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  앱 사용 흐름
                </h2>
              </RevealOnScroll>

              {/* 앱 스크린샷 - 3개 나란히 */}
              <RevealOnScroll>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/myphone4cuts/1000006117.jpg"
                      alt="프레임 선택 화면"
                      width={300}
                      height={650}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">1. 프레임 선택</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/myphone4cuts/1000006118.jpg"
                      alt="촬영 화면"
                      width={300}
                      height={650}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">2. 촬영하기</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/myphone4cuts/1000006119.jpg"
                      alt="사진 선택 화면"
                      width={300}
                      height={650}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">3. 사진 선택</p>
                  </div>
                </div>
              </RevealOnScroll>

              {/* 완성 및 갤러리 */}
              <RevealOnScroll>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/myphone4cuts/1000006120.jpg"
                      alt="최종 완성 화면"
                      width={300}
                      height={650}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">4. 최종 완성 & 저장</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/myphone4cuts/1000006121.jpg"
                      alt="갤러리 화면"
                      width={300}
                      height={650}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">5. 내 갤러리</p>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            {/* Section 03 - AI Features */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  03 — AI Features
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  AI 톤 변환 결과물
                </h2>
              </RevealOnScroll>

              {/* AI 변환 결과물 */}
              <RevealOnScroll>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/myphone4cuts/1000006111.png"
                      alt="애니메이션 스타일 변환"
                      width={300}
                      height={450}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">애니메이션 스타일</p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/myphone4cuts/1000006113.png"
                      alt="일러스트 스타일 변환"
                      width={300}
                      height={450}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">일러스트 스타일</p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/myphone4cuts/1000006114.png"
                      alt="흑백 드로잉 스타일 변환"
                      width={300}
                      height={450}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">흑백 드로잉</p>
                  </div>
                </div>
              </RevealOnScroll>

              <StaggerChildren className="space-y-4">
                {[
                  { title: "AI 배경 제거 & 합성", desc: "BiRefNet 모델로 머리카락까지 정교하게 분리. 원하는 배경색으로 실시간 합성, 4장 동시 배치 처리." },
                  { title: "AI 문구 생성", desc: "Claude API 기반 상황 맞춤 문구. SNS 드립 / 감성 편지 / 블랙 코미디 3가지 모드, 5개 후보 생성." },
                  { title: "AI 톤 변환", desc: "Flux-Kontext 모델로 스타일 변환. 흑백 드로잉 / 애니메이션 스타일 지원." },
                  { title: "프레임 & 다국어", desc: "시즌별 프레임, 기념일 캘린더. 한/영/중/일 등 11개 언어 지원." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--muted)]">{item.desc}</p>
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
                  React Native + Django + AI APIs
                </h2>
              </RevealOnScroll>

              <StaggerChildren className="grid grid-cols-2 gap-4">
                {[
                  { layer: "Frontend", tech: "React Native + Expo", desc: "iOS/Android 동시 개발" },
                  { layer: "Language", tech: "TypeScript", desc: "타입 안정성, 개발 생산성" },
                  { layer: "Backend", tech: "Django REST Framework", desc: "빠른 API 개발, Python AI 생태계" },
                  { layer: "AI", tech: "Replicate + Claude API", desc: "BiRefNet 배경제거, 문구 생성" },
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

              {/* Architecture */}
              <RevealOnScroll>
                <div className="mt-8 p-6 rounded-xl bg-[#1e1e1e] text-green-400 font-mono text-sm overflow-x-auto">
                  <pre>{`┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Mobile    │ ──── │   Django    │ ──── │  Replicate  │
│  (Expo RN)  │ REST │   Server    │ API  │  (BiRefNet) │
└─────────────┘      └─────────────┘      └─────────────┘
                            │
                     ┌──────┴──────┐
                     │ Claude API  │
                     │ (문구 생성)  │
                     └─────────────┘`}</pre>
                </div>
              </RevealOnScroll>
            </section>

            {/* Section 05 - Optimization */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  05 — Optimization
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  성능 최적화
                </h2>
              </RevealOnScroll>
              <StaggerChildren className="space-y-4">
                {[
                  { problem: "배경 제거 3초 × 4장 = 12초", solution: "서버 병렬 처리 (동시성 2)", result: "6초로 단축" },
                  { problem: "색상 변경마다 GPU 재호출", solution: "전경 PNG 캐싱 → CPU 합성", result: "3초 → 5ms" },
                  { problem: "대용량 이미지 업로드", solution: "768px 리사이징 후 전송", result: "전송 이미지 크기 제한" },
                  { problem: "Replicate 429 에러", solution: "지수 백오프 재시도 (12회)", result: "안정성 확보" },
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-xs text-[var(--muted)] mb-1">문제</p>
                        <p>{item.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--muted)] mb-1">해결책</p>
                        <p>{item.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--muted)] mb-1">결과</p>
                        <p className="text-green-500 font-medium">{item.result}</p>
                      </div>
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
                  기술적 성과 & 배운 점
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                    <h3 className="font-semibold mb-3">기술적 성과</h3>
                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                      <li>• 중복 GPU 호출을 줄이기 위한 캐싱 적용</li>
                      <li>• 배치 처리 아키텍처 설계 및 구현</li>
                      <li>• 11개 언어 i18n 시스템 구축</li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                    <h3 className="font-semibold mb-3">배운 점</h3>
                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                      <li>• 외부 API 의존성 관리: Rate Limit, 에러 핸들링, 폴백 전략</li>
                      <li>• UX 중심 최적화: 체감 속도 개선을 위한 캐싱 설계</li>
                      <li>• 모노레포 구조: apps/mobile + server 통합 관리</li>
                    </ul>
                  </div>
                </div>
              </section>
            </RevealOnScroll>

            {/* CTA */}
            <RevealOnScroll>
              <section className="p-8 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center">
                <h3 className="text-xl font-bold mb-2">소스 코드 보기</h3>
                <p className="text-sm text-[var(--muted)] mb-6">
                  GitHub에서 전체 코드를 확인하세요.
                </p>
                <MagneticButton
                  as="a"
                  href="https://github.com/kimth1113/LETS4CUTS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cta-shine"
                >
                  GitHub Repository
                </MagneticButton>
              </section>
            </RevealOnScroll>
          </div>
        </article>
      </main>
    </PageTransition>
  );
}
