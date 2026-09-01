import { useMemo, useState } from 'react'
import { categories, products } from '../data/products'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { ProductCard } from '../components/products/ProductCard'
import { cn } from '../lib/utils'

interface ProductsProps {
  category?: string
}

const ALL = 'all'

export function Products({ category }: ProductsProps) {
  const [active, setActive] = useState<string>(category ?? ALL)

  const filtered = useMemo(
    () => (active === ALL ? products : products.filter((p) => p.category === active)),
    [active],
  )

  const tabs = [{ slug: ALL, name: '전체' }, ...categories]

  return (
    <>
      <PageHeader
        title="제품 라인업"
        description="아케이드부터 시뮬레이터까지, 모든 기종은 가격 문의 후 매장 조건에 맞춰 견적을 드립니다."
      />
      <Container className="py-12">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => setActive(t.slug)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                active === t.slug
                  ? 'border-brand bg-brand text-white'
                  : 'border-black/10 bg-surface text-ink-soft hover:border-brand/40',
              )}
            >
              {t.name}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-ink-muted">{filtered.length}개 제품</p>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </>
  )
}
