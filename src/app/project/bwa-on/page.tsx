import Link from "next/link";

const features = [
  "측정 결과와 그래프 화면 구현",
  "Bluetooth 기기 연결과 측정 데이터 연동",
  "로그인·회원정보와 서버 API 연결",
  "사용 흐름에서 발생하는 오류 수정과 동작 확인"
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <Link href="/#experience" className="text-sm text-[var(--muted)]">← 개발 경력</Link>
        <p className="mt-12 text-sm text-[var(--muted)]">2022.02–2023.02 · 프리랜서 계약</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight">인바디 BWA ON · iOS</h1>
        <p className="mt-5 text-xl leading-relaxed text-[var(--muted)]">Swift 중심으로 BWA ON iOS 앱의 기능 개발과 오류 수정을 담당했습니다.</p>
        
        <section className="mt-12 border-t border-[var(--border)] pt-8">
          <h2 className="text-lg font-semibold">담당 개발</h2>
          <ul className="mt-5 space-y-4 text-[var(--muted)]">
            {features.map((feature) => <li key={feature} className="border-l-2 border-[#103466] pl-4 leading-relaxed">{feature}</li>)}
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-lg font-semibold">기술</h2>
          <p className="mt-3 text-[var(--muted)]">Swift · iOS · Bluetooth · API</p>
        </section>
        <Link href="https://github.com/kimth1113/portfolio" className="mt-12 inline-block text-sm underline underline-offset-4">전체 개발 포트폴리오</Link>
      </article>
    </main>
  );
}
