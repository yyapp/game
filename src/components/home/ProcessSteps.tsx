import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  { no: '01', title: '상담·견적', desc: '매장 면적, 콘셉트, 예산을 알려주시면 기종 구성과 견적을 드립니다.' },
  { no: '02', title: '현장 실측', desc: '전기 용량, 반입 동선, 바닥 상태를 점검하고 배치도를 확정합니다.' },
  { no: '03', title: '배송·설치', desc: '전국 직접 배송 후 조립, 세팅, 시운전까지 완료합니다.' },
  { no: '04', title: '운영·A/S', desc: '정기 점검, 부품 공급, 원격 매출 관리로 운영을 지원합니다.' },
]

export function ProcessSteps() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="주문부터 운영까지, 4단계로 끝"
          description="복잡한 과정 없이 전화 한 통이면 설치까지 진행됩니다."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.no} className="rounded-2xl border border-black/5 bg-surface p-6 shadow-card">
              <span className="text-sm font-extrabold text-brand">{s.no}</span>
              <h3 className="mt-2 font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
