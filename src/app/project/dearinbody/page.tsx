"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import PageTransition from "@/components/animations/PageTransition";

export default function DearInBodyPage() {
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
                  <p className="text-sm text-[var(--muted)] font-mono">2021.11</p>
                  <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded">B2B 내부 시스템</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">DearInBody</h1>
                <p className="text-xl text-[var(--muted)] leading-relaxed">
                  InBody 장비 사양 관리를 오프라인에서 온라인으로 전환한 B2B 시스템
                </p>
              </RevealOnScroll>
            </header>

            {/* Hero Image - 사양변경 승인 페이지 */}
            <RevealOnScroll>
              <div className="mb-16 rounded-xl overflow-hidden border border-[var(--border)]">
                <Image
                  src="/images/dearinbody/image-20220103105324686.png"
                  alt="DearInBody 사양변경 승인 페이지"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </RevealOnScroll>

            {/* Section 01 - Problem */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  01 — Problem
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  해결한 문제
                </h2>
                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  영업관리팀의 인바디 장비 사양 관리를 오프라인에서 온라인으로 전환하여
                  업무 효율을 획기적으로 개선했습니다.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-3 text-[var(--muted)] font-medium">기존 방식</th>
                        <th className="text-left py-3 text-[var(--muted)] font-medium">개선된 방식</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--muted)]">
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3">USB를 통한 오프라인 사양 변경</td>
                        <td className="py-3">웹 기반 실시간 사양 승인</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="py-3">담당 영업사원 방문 필요 (2~3일 소요)</td>
                        <td className="py-3 text-green-500 font-medium">즉시 원격 처리 가능</td>
                      </tr>
                      <tr>
                        <td className="py-3">시간/공간 제약 발생</td>
                        <td className="py-3">언제 어디서나 접속 가능</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </RevealOnScroll>

            {/* Section 02 - Core Features */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  02 — Core Features
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  핵심 기능
                </h2>
              </RevealOnScroll>

              {/* 장비 현황 리스트 */}
              <RevealOnScroll>
                <div className="mb-6">
                  <p className="text-sm font-medium mb-3">장비 현황 리스트</p>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/dearinbody/image-20220103105430605.png"
                      alt="장비 현황 리스트 - 검색 및 필터링"
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </RevealOnScroll>

              {/* 검색 필터 UI */}
              <RevealOnScroll>
                <div className="mb-8 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/dearinbody/image-20220105164739596.png"
                    alt="다양한 검색 조건으로 필터링"
                    width={1200}
                    height={100}
                    className="w-full h-auto"
                  />
                </div>
              </RevealOnScroll>

              <StaggerChildren className="space-y-4">
                {[
                  {
                    title: "장비 현황 관리",
                    desc: "ERP 시스템과 API 연동을 통한 실시간 장비 리스트 조회. 다양한 검색 조건(모델, 지역, 구매처 등)으로 필터링, 페이지네이션을 통한 대용량 데이터 처리."
                  },
                  {
                    title: "사양 변경 승인 시스템",
                    desc: "LB웹과 실시간 API 통신으로 장비 사양 원격 변경. 모달 기반 승인 워크플로우로 실수 방지. 오프라인 장비 대비 QR코드 자동 생성 및 이메일 발송."
                  },
                  {
                    title: "보안 및 로깅",
                    desc: "Microsoft Azure AD 통합 계정 로그인. 모든 유저 활동 Azure Table Storage에 로그 기록. 조회/승인/수정 등 액션별 기록, IP 주소, URL, 타임스탬프 추적."
                  },
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

            {/* Section 03 - Database */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  03 — Database
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  데이터베이스 설계
                </h2>
              </RevealOnScroll>

              {/* ERD 다이어그램 */}
              <RevealOnScroll>
                <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border)] bg-white p-4 flex justify-center">
                  <Image
                    src="/images/dearinbody/image-20220105093051793.png"
                    alt="데이터베이스 ERD"
                    width={500}
                    height={400}
                    className="h-auto"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className="text-[var(--muted)] leading-relaxed">
                  MSSQL 3개 DB 연동 (ERP, LB웹, 자체 DB)으로 장비 정보, 사양, 모델 데이터를 통합 관리합니다.
                </p>
              </RevealOnScroll>
            </section>

            {/* Section 04 - Frontend Architecture */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  04 — Frontend Architecture
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  프론트엔드 구조
                </h2>
              </RevealOnScroll>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* 폴더 구조 */}
                <RevealOnScroll>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/dearinbody/image-20220105161013889.png"
                      alt="프론트엔드 폴더 구조"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </RevealOnScroll>

                {/* 모듈 구조 */}
                <RevealOnScroll delay={0.1}>
                  <div className="rounded-xl overflow-hidden border border-[var(--border)]">
                    <Image
                      src="/images/dearinbody/image-20220105162152699.png"
                      alt="Redux 모듈 구조"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </RevealOnScroll>
              </div>

              {/* Redux 코드 */}
              <RevealOnScroll>
                <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/dearinbody/image-20220105163427659.png"
                    alt="Redux 상태 관리 코드"
                    width={1200}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>• Redux를 활용한 전역 상태 관리</li>
                  <li>• 컴포넌트 구조화: Page → Component → ViewParts 계층 분리</li>
                  <li>• 다국어 처리 (i18n) 적용으로 글로벌 확장성 확보</li>
                </ul>
              </RevealOnScroll>
            </section>

            {/* Section 05 - Backend */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  05 — Backend
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  .NET 5.0 백엔드
                </h2>
              </RevealOnScroll>

              {/* NuGet 패키지 */}
              <RevealOnScroll>
                <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/dearinbody/image-20220107134336758.png"
                    alt=".NET 백엔드 NuGet 패키지"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </RevealOnScroll>

              <StaggerChildren className="grid grid-cols-2 gap-4">
                {[
                  { tech: "Azure.Data.Tables", desc: "로그 저장" },
                  { tech: "Azure.Storage.Blobs", desc: "QR 이미지 저장" },
                  { tech: "Dapper", desc: "고성능 ORM" },
                  { tech: "ZXing.Net", desc: "QR코드 생성" },
                ].map((item) => (
                  <StaggerItem key={item.tech}>
                    <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)]">
                      <p className="font-semibold text-sm">{item.tech}</p>
                      <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </section>

            {/* Section 06 - Logging */}
            <section className="mb-16">
              <RevealOnScroll>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  06 — Logging & Security
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  Azure Table Storage 로깅
                </h2>
              </RevealOnScroll>

              {/* 로그 테이블 */}
              <RevealOnScroll>
                <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/dearinbody/image-20220110151654602.png"
                    alt="Azure Table Storage 유저 활동 로그"
                    width={1200}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className="text-[var(--muted)] leading-relaxed">
                  모든 유저 활동이 Azure Table Storage에 기록됩니다.
                  PartitionKey, RowKey, Timestamp, Action, IP Address, URL 등
                  상세한 추적 정보를 저장하여 보안 감사 및 문제 해결에 활용합니다.
                </p>
              </RevealOnScroll>
            </section>

            {/* Section 07 - Results */}
            <RevealOnScroll>
              <section className="mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
                  07 — Results
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  주요 성과
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { value: "2~3일 → 즉시", label: "처리 시간 단축" },
                    { value: "3개", label: "DB 연동" },
                    { value: "100%", label: "원격 처리" },
                    { value: "Azure", label: "클라우드 인프라" },
                  ].map((metric) => (
                    <div key={metric.label} className="text-center p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                      <p className="text-lg font-bold text-[var(--accent)]">{metric.value}</p>
                      <p className="text-xs text-[var(--muted)] mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-3 text-[var(--muted)]">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <span>사양 변경 처리 시간 2~3일 → 즉시 처리로 단축</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <span>담당 영업사원 방문 비용 절감</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <span>모든 사양 변경 이력 중앙 집중 관리 체계 구축</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500">✓</span>
                    <span>오프라인/온라인 장비 모두 대응 가능한 하이브리드 솔루션 구현</span>
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
