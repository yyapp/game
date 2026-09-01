import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionHeading } from '../components/ui/SectionHeading'
import { site } from '../data/site'

const stats = [
  { value: '15년+', label: '업력' },
  { value: '1,200+', label: '누적 납품 매장' },
  { value: '17개', label: '시·도 배송 커버' },
  { value: '48시간', label: '평균 A/S 대응' },
]

const values = [
  { title: '직수입·직시공', desc: '중간 유통 없이 제조사에서 직접 들여와 합리적인 가격을 제시합니다.' },
  { title: '설치 전문 인력', desc: '전기·목공·네트워크까지 자체 시공팀이 현장을 마감합니다.' },
  { title: '운영 파트너십', desc: '납품 후에도 정기 점검과 매출 컨설팅으로 매장 수익을 함께 관리합니다.' },
]

export function About() {
  return (
    <>
      <PageHeader
        title="회사소개"
        description={`${site.name}는 아케이드 게임기 유통과 매장 설치를 전문으로 하는 기업입니다.`}
      />
      <Container className="py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-black/5 bg-surface p-6 text-center shadow-card">
              <p className="text-2xl font-extrabold text-brand">{s.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Why us"
            title={`${site.name}가 일하는 방식`}
            description="게임기를 파는 곳은 많지만, 설치와 운영까지 책임지는 곳은 드뭅니다."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-black/5 bg-surface p-6 shadow-card">
                <h3 className="font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-black/5 bg-surface-alt p-8">
          <h3 className="font-bold text-ink">사업장 정보</h3>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="text-ink-muted">주소</dt><dd className="font-medium">{site.address}</dd></div>
            <div><dt className="text-ink-muted">운영시간</dt><dd className="font-medium">{site.hours}</dd></div>
            <div><dt className="text-ink-muted">대표전화</dt><dd className="font-medium">{site.phone}</dd></div>
            <div><dt className="text-ink-muted">이메일</dt><dd className="font-medium">{site.email}</dd></div>
          </dl>
        </div>
      </Container>
    </>
  )
}
