import { Boxes, ClipboardCheck, MapPin, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionHeading } from '../components/ui/SectionHeading'
import { site } from '../data/site'

const flow = [
  { icon: ClipboardCheck, title: '주문 확정', desc: '견적 확정 후 계약서를 작성하고 설치 일정을 잡습니다.' },
  { icon: MapPin, title: '현장 실측', desc: '반입 동선·전기 용량·바닥 수평을 점검합니다. (수도권 무료)' },
  { icon: Truck, title: '전국 배송', desc: '자체 차량으로 직접 운송합니다. 도서산간은 별도 협의.' },
  { icon: Wrench, title: '설치·시운전', desc: '조립, 결선, 네트워크 세팅, 결제기 연동, 시운전까지 완료.' },
  { icon: Boxes, title: '인수인계', desc: '운영 매뉴얼 교육과 소모품 초도 물량을 제공합니다.' },
  { icon: ShieldCheck, title: '사후관리', desc: '무상 보증 기간 내 출장 A/S, 이후 정기 점검 계약 가능.' },
]

const regions = [
  '서울·경기·인천', '강원', '대전·충청', '대구·경북',
  '부산·울산·경남', '광주·전라', '제주',
]

export function Delivery() {
  return (
    <>
      <PageHeader
        title="배송 · 설치 안내"
        description={`게임기는 부피가 크고 결선이 복잡합니다. ${site.name}는 배송부터 시운전까지 직접 처리합니다.`}
      />
      <Container className="py-14">
        <SectionHeading eyebrow="Process" title="설치 진행 절차" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flow.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 bg-surface p-6 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-surface-alt p-8">
            <h3 className="font-bold text-ink">배송 가능 지역</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {regions.map((r) => (
                <li key={r} className="rounded-full bg-surface px-3 py-1 text-sm font-medium text-ink-soft">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-muted">
              전 지역 설치 가능하며, 지역과 층수·엘리베이터 유무에 따라 상하차 비용이 추가될 수 있습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-surface-alt p-8">
            <h3 className="font-bold text-ink">설치 전 확인 사항</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              <li>· 기기별 전용 콘센트(220V) 및 여유 전기 용량</li>
              <li>· 출입문 폭과 엘리베이터 내부 치수</li>
              <li>· 바닥 수평 및 방수(코인 라이드·인형뽑기)</li>
              <li>· 인터넷 회선(네트워크 대전·매출 관리 기기)</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
