import { MessageCircle, Phone } from 'lucide-react'
import { site } from '../../data/site'
import { categories } from '../../data/products'
import { Container } from '../ui/Container'
import { AppLink } from '../../lib/nav'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-surface-alt">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-extrabold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">G</span>
            <span className="text-lg">{site.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {site.tagline}. 아케이드·인형뽑기·시뮬레이터 등 모든 게임기의 상담,
            납품, 설치, 유지보수를 한 곳에서 지원합니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a href={site.kakaoChannel} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#FEE500] px-4 py-2 text-sm font-semibold text-[#3A1D1D]">
              <MessageCircle className="h-4 w-4" /> 카카오톡 상담
            </a>
            <a href={`sms:${site.smsTo.replace(/-/g, '')}`} className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-surface px-4 py-2 text-sm font-semibold text-ink">
              <MessageCircle className="h-4 w-4" /> 문자 문의
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-ink">제품 카테고리</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            {categories.map((c) => (
              <li key={c.slug}>
                <AppLink to={`/products?cat=${c.slug}`} className="hover:text-ink">
                  {c.name}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-ink">고객센터</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            <li>{site.hours}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-black/5 py-5 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved. · 사업자등록번호 000-00-00000
      </div>
    </footer>
  )
}
