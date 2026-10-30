import Link from "next/link";
import Image from "next/image";

const features = [
  "장비 현황 조회와 사양 변경 업무 화면 개발",
  "업무 데이터 API 연동과 사용자 상태 처리",
  "본사 ERP 개발 이후 BWA ON iOS 앱을 별도 프리랜서 계약으로 개발"
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <Link href="/#experience" className="text-sm text-[var(--muted)]">← 개발 경력</Link>
        <p className="mt-12 text-sm text-[var(--muted)]">2021.11–2022.02 · 인바디 본사</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight">인바디 ERP · DearInBody</h1>
        <p className="mt-5 text-xl leading-relaxed text-[var(--muted)]">장비 사양·업무 데이터를 다루는 ERP 연계 웹 시스템 개발에 참여했습니다.</p>
        <Image src="/images/dearinbody/image-20220103105324686.png" alt="인바디 ERP · DearInBody 프로젝트 화면" width={1200} height={700} className="mt-10 h-auto w-full rounded-xl border border-[var(--border)]" />
        <section className="mt-12 border-t border-[var(--border)] pt-8">
          <h2 className="text-lg font-semibold">담당 개발</h2>
          <ul className="mt-5 space-y-4 text-[var(--muted)]">
            {features.map((feature) => <li key={feature} className="border-l-2 border-[#103466] pl-4 leading-relaxed">{feature}</li>)}
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-lg font-semibold">기술</h2>
          <p className="mt-3 text-[var(--muted)]">React · ASP.NET · 업무 API</p>
        </section>
        <Link href="https://github.com/kimth1113/portfolio" className="mt-12 inline-block text-sm underline underline-offset-4">전체 개발 포트폴리오</Link>
      </article>
    </main>
  );
}
