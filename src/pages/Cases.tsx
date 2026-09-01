import { cases } from '../data/cases'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Thumb } from '../components/ui/Thumb'
import { Badge } from '../components/ui/Badge'

export function Cases() {
  return (
    <>
      <PageHeader
        title="납품 사례"
        description="오락실, 키즈카페, 복합 문화공간까지. 규모와 업종을 가리지 않고 시공합니다."
      />
      <Container className="py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.slug} className="overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-card">
              <Thumb accent={c.accent} ratio="video" className="rounded-none" label={c.type} />
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Badge>{c.year}</Badge>
                  <span className="text-xs font-semibold text-ink-muted">{c.location}</span>
                </div>
                <h2 className="mt-2 text-lg font-bold text-ink">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.summary}</p>
                <p className="mt-4 text-sm font-semibold text-brand">{c.units}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  )
}
