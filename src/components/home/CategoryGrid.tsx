import { ArrowUpRight } from 'lucide-react'
import { categories } from '../../data/products'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Thumb } from '../ui/Thumb'
import { AppLink } from '../../lib/nav'

const accents = [
  'from-rose-500 to-orange-400',
  'from-pink-500 to-rose-400',
  'from-sky-500 to-cyan-400',
  'from-emerald-500 to-teal-400',
  'from-lime-500 to-green-400',
  'from-fuchsia-500 to-pink-400',
]

export function CategoryGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Product Lineup"
          title="취급 게임기 카테고리"
          description="매장 콘셉트와 타깃 연령대에 맞춰 최적의 기종을 제안해 드립니다."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <AppLink
              key={c.slug}
              to={`/products?cat=${c.slug}`}
              className="group rounded-2xl border border-black/5 bg-surface p-5 shadow-card transition-colors hover:border-brand/30"
            >
              <Thumb accent={accents[i % accents.length]} ratio="video" className="rounded-xl" />
              <div className="mt-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-ink">{c.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{c.description}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-brand" />
              </div>
            </AppLink>
          ))}
        </div>
      </Container>
    </section>
  )
}
