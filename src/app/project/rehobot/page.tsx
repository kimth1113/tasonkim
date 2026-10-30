import Link from "next/link";
import Image from "next/image";

const features = [
  "React·ASP.NET 기반 웹 화면과 업무 흐름 개발",
  "AI 추론 결과를 웹 시스템과 연결하는 API 연동",
  "학습 데이터 전처리와 운영 과정의 기능 개선"
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <Link href="/#experience" className="text-sm text-[var(--muted)]">← 개발 경력</Link>
        <p className="mt-12 text-sm text-[var(--muted)]">2023.10–2024.10</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight">르호봇알브이엠 · AI 폐전선 수거 자판기</h1>
        <p className="mt-5 text-xl leading-relaxed text-[var(--muted)]">폐전선 수거 자판기의 웹 시스템 개발과 유지보수에 참여했습니다.</p>
        <Image src="/images/rehobot/KakaoTalk_20260204_084514666.png" alt="르호봇알브이엠 · AI 폐전선 수거 자판기 프로젝트 화면" width={1200} height={700} className="mt-10 h-auto w-full rounded-xl border border-[var(--border)]" />
        <section className="mt-12 border-t border-[var(--border)] pt-8">
          <h2 className="text-lg font-semibold">담당 개발</h2>
          <ul className="mt-5 space-y-4 text-[var(--muted)]">
            {features.map((feature) => <li key={feature} className="border-l-2 border-[#103466] pl-4 leading-relaxed">{feature}</li>)}
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-lg font-semibold">기술</h2>
          <p className="mt-3 text-[var(--muted)]">React · ASP.NET · API · 데이터 전처리</p>
        </section>
        <Link href="https://github.com/kimth1113/portfolio" className="mt-12 inline-block text-sm underline underline-offset-4">전체 개발 포트폴리오</Link>
      </article>
    </main>
  );
}
