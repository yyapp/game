import { MessageCircle, Phone } from 'lucide-react'
import { site } from '../../data/site'
import { Container } from '../ui/Container'
import { buttonClasses } from '../ui/Button'
import { AppLink } from '../../lib/nav'

export function CtaBanner() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center text-white">
          <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_15%_20%,white,transparent_35%)]" />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              게임기 도입, 지금 바로 상담하세요
            </h2>
            <p className="mt-3 text-white/85">
              매장 사진과 평수만 보내주시면 24시간 안에 견적을 드립니다.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={`tel:${site.phone}`} className={buttonClasses('secondary', 'lg', 'bg-white text-brand hover:bg-white/90')}>
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
              <AppLink to="/contact" className={buttonClasses('ghost', 'lg', 'border-white/40 text-white hover:bg-white/10')}>
                <MessageCircle className="h-4 w-4" /> 온라인 문의
              </AppLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
