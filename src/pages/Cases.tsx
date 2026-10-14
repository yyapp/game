import { cases } from '../data/cases'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Gallery } from '../components/ui/Gallery'
import { asset } from '../lib/asset'
import { Badge } from '../components/ui/Badge'

export function Cases() {
  return (
    <>
      <PageHeader
        title="납품 사례"
        description="지역 축제 현장부터 키즈존 실내 공간까지. 장소에 맞춰 설치합니다."
      />
      <Container className="py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.slug} className="overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-card">
              <Gallery images={c.images} alt={c.title} className="p-3" />
              <div className="p-6 pt-3">
                <div className="flex items-center gap-2">
                  <Badge>{c.year}</Badge>
                  <span className="text-xs font-semibold text-ink-muted">{c.location}</span>
                </div>
                <h2 className="mt-2 text-lg font-bold text-ink">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.summary}</p>
                <p className="mt-4 text-sm font-semibold text-brand">{c.units}</p>
                {c.video && (
                  <video
                    controls
                    preload="none"
                    playsInline
                    poster={asset(c.video.poster)}
                    className="mx-auto mt-4 aspect-[9/16] max-h-[70vh] rounded-xl bg-black"
                  >
                    <source src={asset(c.video.src)} type="video/mp4" />
                  </video>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  )
}
