import { PhoneCall, Truck, Wrench } from 'lucide-react'
import { site } from '../../data/site'
import { Container } from '../ui/Container'
import { buttonClasses } from '../ui/Button'
import { AppLink } from '../../lib/nav'

const points = [
  { icon: Truck, label: '전국 배송', desc: '도서산간 포함 전 지역' },
  { icon: Wrench, label: '전문 설치', desc: '현장 세팅·시운전까지' },
  { icon: PhoneCall, label: 'A/S 지원', desc: '정기 점검·부품 공급' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_10%,#e11d2e,transparent_40%),radial-gradient(circle_at_85%_30%,#4f46e5,transparent_35%)]" />
      <Container className="relative grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
            아케이드 · 인형뽑기 · 시뮬레이터 전문
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            게임기 한 대부터 매장 전체까지,
            <br />
            <span className="text-brand-light">전국 어디든 배송·설치</span>합니다.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
            {site.name}는 15년간 오락실, 키즈카페, 복합 문화공간에 게임기를
            공급해 왔습니다. 상담부터 설치, 유지보수까지 한 번에 해결하세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AppLink to="/contact" className={buttonClasses('primary', 'lg')}>
              무료 견적 문의
            </AppLink>
            <AppLink to="/products" className={buttonClasses('ghost', 'lg', 'border-white/30 text-white hover:bg-white/10')}>
              제품 둘러보기
            </AppLink>
          </div>
        </div>

        <div className="grid content-center gap-3">
          {points.map((p) => (
            <div key={p.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold">{p.label}</p>
                <p className="text-sm text-white/60">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
