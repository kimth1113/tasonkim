"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import PageTransition from "@/components/animations/PageTransition";

export default function RehobotPage() {
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
                  <p className="text-sm text-[var(--muted)] font-mono">2023.08 — 2024.06</p>
                  <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-600 dark:text-green-400 rounded">AI 키오스크</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">RehobotRVM</h1>
                <p className="text-xl text-[var(--muted)] leading-relaxed">
                  AI 기반 전자폐기물 자동 분류 키오스크 시스템
                </p>
              </RevealOnScroll>
            </header>

            {/* Hero - 전체 플로우 */}
            <RevealOnScroll>
              <div className="mb-16 rounded-xl overflow-hidden border border-[var(--border)]">
                <Image
                  src="/images/rehobot/KakaoTalk_20260204_084514666.png"
                  alt="RehobotRVM 전체 사용자 플로우"
                  width={1200}
                  height={300}
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
                  순환경제를 위한 AI 전선 분류 시스템
                </h2>
                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  폐기되는 전자제품의 전선/케이블을 AI로 자동 식별하여 재활용 효율을 높이고,
                  사용자에게 리워드를 제공하는 순환경제 시스템입니다.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "90%+", label: "분류 정확도" },
                    { value: "15종", label: "전선 종류" },
                    { value: "27\"", label: "터치 키오스크" },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      <p className="text-2xl font-bold text-[var(--accent)]">{item.value}</p>
                      <p className="text-xs text-[var(--muted)] mt-1">{item.label}</p>
                    </div>
                  ))}
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
                  키오스크 사용 흐름
                </h2>
              </RevealOnScroll>

              {/* 메인 화면 */}
              <RevealOnScroll>
                <div className="mb-8 flex justify-center">
                  <div className="rounded-2xl overflow-hidden border border-[var(--border)] max-w-[280px]">
                    <Image
                      src="/images/rehobot/KakaoTalk_20260204_084513146_06.png"
                      alt="전선 선택 메인 화면"
                      width={280}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </RevealOnScroll>

              {/* 플로우 스크린샷 */}
              <RevealOnScroll>
                <div className="grid grid-cols-4 gap-3 mb-6">
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/rehobot/KakaoTalk_20260204_084513146.png"
                      alt="로그인 화면"
                      width={200}
                      height={350}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">1. 로그인</p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/rehobot/KakaoTalk_20260204_084513146_04.png"
                      alt="투입구 개방"
                      width={200}
                      height={350}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">2. 투입구 개방</p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/rehobot/KakaoTalk_20260204_084513146_02.png"
                      alt="무게 측정 및 촬영"
                      width={200}
                      height={350}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">3. 측정 & 촬영</p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/rehobot/KakaoTalk_20260204_084513146_01.png"
                      alt="완료 화면"
                      width={200}
                      height={350}
                      className="w-full h-auto"
                    />
                    <p className="text-xs text-center py-2 text-[var(--muted)]">4. 완료</p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                  <p className="text-sm text-[var(--muted)]">
                    <strong className="text-[var(--foreground)]">실시간 분석 플로우:</strong> 사용자 전선 투입 → 근접 센서 감지 → 카메라 자동 촬영 → AI 모델 추론 → 로드셀 무게 측정 → 리워드 계산 → 모터 구동으로 분류
                  </p>
                </div>
              </RevealOnScroll>
            </section>

            {/* Section 03 - AI Model */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  03 — AI Model
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  CNN 기반 전선 분류 모델
                </h2>
              </RevealOnScroll>

              {/* 전선 단면 이미지 */}
              <RevealOnScroll>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] p-2">
                    <Image
                      src="/images/rehobot/KakaoTalk_20260204_084523906.jpg"
                      alt="전선 단면 - 4가닥"
                      width={300}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] p-2">
                    <Image
                      src="/images/rehobot/KakaoTalk_20260204_084523906_02.jpg"
                      alt="전선 단면 - 3가닥"
                      width={300}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card)] p-2">
                    <Image
                      src="/images/rehobot/KakaoTalk_20260204_084523906_01.jpg"
                      alt="전선 단면 - 소형"
                      width={300}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </RevealOnScroll>

              <StaggerChildren className="space-y-4">
                {[
                  { title: "학습 데이터셋", desc: "3,500+ 이미지. 기본 전선 8종, 랜선 2종, USB/AUX/모니터 케이블 등 15종 분류" },
                  { title: "데이터 어노테이션", desc: "Polygon 어노테이션으로 전선 외피 영역 정밀 마킹, COCO 형식 바운딩박스 라벨링" },
                  { title: "모델 성능", desc: "분류 정확도 90% 이상, 추론 시간 500ms 미만, TensorRT 최적화 적용" },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              {/* 모델 아키텍처 */}
              <RevealOnScroll>
                <div className="mt-8 p-6 rounded-xl bg-[#1e1e1e] text-green-400 font-mono text-sm overflow-x-auto">
                  <pre>{`Input Layer (224x224x3)
    ↓
CNN Feature Extraction
    ↓
Global Average Pooling
    ↓
Dense Layer (256 units, ReLU)
    ↓
Output Layer (15 classes, Softmax)`}</pre>
                </div>
              </RevealOnScroll>
            </section>

            {/* Section 04 - Tech Stack */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  04 — Tech Stack
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  기술 스택
                </h2>
              </RevealOnScroll>

              <StaggerChildren className="grid grid-cols-2 gap-4">
                {[
                  { layer: "Frontend", tech: "React + Electron", desc: "27인치 터치스크린 최적화 UI" },
                  { layer: "Backend", tech: "Node.js + Express", desc: "REST API, 센서 데이터 처리" },
                  { layer: "AI Server", tech: "Python Flask + TensorFlow", desc: "CNN 모델 서빙, 이미지 전처리" },
                  { layer: "Hardware", tech: "로드셀, 근접센서, 모터", desc: "실시간 센서 연동 및 제어" },
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

              {/* 시스템 아키텍처 */}
              <RevealOnScroll>
                <div className="mt-8 p-6 rounded-xl bg-[#1e1e1e] text-green-400 font-mono text-xs overflow-x-auto">
                  <pre>{`┌─────────────────────────────────────────────────────────┐
│                    키오스크 하드웨어                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │ 27" 터치  │  │  카메라   │  │  센서들   │  │  모터   │ │
│  │  스크린   │  │  모듈    │  │ (로드셀)  │  │  제어   │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬────┘ │
└───────┼─────────────┼─────────────┼─────────────┼──────┘
        │             │             │             │
┌───────▼─────────────▼─────────────▼─────────────▼──────┐
│               Frontend (React/Electron)                 │
└────────────────────────┬────────────────────────────────┘
                         │ REST API
┌────────────────────────▼────────────────────────────────┐
│               Backend (Node.js/Express)                 │
└────────────────────────┬────────────────────────────────┘
                         │ gRPC/HTTP
┌────────────────────────▼────────────────────────────────┐
│               AI Server (Python/Flask/TensorFlow)       │
└─────────────────────────────────────────────────────────┘`}</pre>
                </div>
              </RevealOnScroll>
            </section>

            {/* Section 05 - Supported Cables */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  05 — Supported Cables
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  지원 전선 종류 (15종)
                </h2>
              </RevealOnScroll>

              <RevealOnScroll>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-3 text-[var(--muted)] font-medium">카테고리</th>
                        <th className="text-left py-3 text-[var(--muted)] font-medium">세부 종류</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--muted)]">
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3 font-medium">기본 전선</td>
                        <td className="py-3">VCTF 0.75sq, VCTF 1.5sq, HIV, 동축 케이블 등 8종</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3 font-medium">데이터 케이블</td>
                        <td className="py-3">랜선 CAT5e, CAT6, USB 3.0</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3 font-medium">주변기기</td>
                        <td className="py-3">마우스 케이블, 키보드 케이블</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3 font-medium">영상/음향</td>
                        <td className="py-3">AUX 케이블, 모니터 연결 케이블</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">전원</td>
                        <td className="py-3">AC 전원 케이블, 멀티콘센트</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </RevealOnScroll>
            </section>

            {/* Section 06 - Challenges */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  06 — Challenges & Solutions
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  기술적 도전 및 해결
                </h2>
                <StaggerChildren className="space-y-4">
                  {[
                    { challenge: "유사 전선 구분 어려움", solution: "다각도 촬영 및 앙상블 모델 적용" },
                    { challenge: "실시간 처리 속도", solution: "모델 경량화 및 TensorRT 최적화" },
                    { challenge: "다양한 조명 환경", solution: "데이터 증강 및 표준 조명 설치" },
                  ].map((item) => (
                    <StaggerItem key={item.challenge}>
                      <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-[var(--muted)] mb-1">도전 과제</p>
                          <p className="text-sm">{item.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs text-[var(--muted)] mb-1">해결 방안</p>
                          <p className="text-sm text-green-500">{item.solution}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </section>
            </RevealOnScroll>

            {/* Section 07 - Results */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  07 — Results
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  달성 성과
                </h2>
                <ul className="space-y-3 text-[var(--muted)]">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <span>AI 모델 정확도 90% 이상 달성</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <span>키오스크 UI 프로토타입 완성</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <span>하드웨어 연동 API 설계 완료</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <span>데이터셋 3,500+ 이미지 구축</span>
                  </li>
                </ul>
              </section>
            </RevealOnScroll>
          </div>
        </article>
      </main>
    </PageTransition>
  );
}
