import { cases } from '../../data/cases'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Thumb } from '../ui/Thumb'
import { buttonClasses } from '../ui/Button'
import { AppLink } from '../../lib/nav'

export function CasesStrip() {
  return (
    <section className="bg-surface-alt py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Case Studies" title="최근 납품 사례" />
          <AppLink to="/cases" className={buttonClasses('ghost', 'sm')}>
            사례 더 보기
          </AppLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <div key={c.slug} className="overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-card">
              <Thumb accent={c.accent} ratio="video" className="rounded-none" label={c.type} />
              <div className="p-4">
                <p className="text-xs font-semibold text-ink-muted">
                  {c.location} · {c.year}
                </p>
                <h3 className="mt-1 font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{c.units}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
