import { ArrowLeft, PhoneCall } from 'lucide-react'
import { getCategory, getProduct, productsByCategory } from '../data/products'
import { site } from '../data/site'
import { Container } from '../components/ui/Container'
import { Badge } from '../components/ui/Badge'
import { Thumb } from '../components/ui/Thumb'
import { ProductCard } from '../components/products/ProductCard'
import { buttonClasses } from '../components/ui/Button'
import { AppLink } from '../lib/nav'

interface ProductDetailProps {
  slug: string
}

export function ProductDetail({ slug }: ProductDetailProps) {
  const product = getProduct(slug)

  if (!product) {
    return (
      <Container className="py-24 text-center">
        <p className="text-lg font-bold">제품을 찾을 수 없습니다.</p>
        <AppLink to="/products" className={buttonClasses('ghost', 'md', 'mt-4')}>
          제품 목록으로
        </AppLink>
      </Container>
    )
  }

  const category = getCategory(product.category)
  const related = productsByCategory(product.category).filter((p) => p.slug !== slug)

  return (
    <Container className="py-12">
      <AppLink to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> 제품 목록
      </AppLink>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <Thumb accent={product.accent} ratio="square" label={category?.name} />

        <div>
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-3 leading-relaxed text-ink-muted">{product.summary}</p>

          <dl className="mt-6 divide-y divide-black/5 rounded-2xl border border-black/5">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                <dt className="font-semibold text-ink-soft">{s.label}</dt>
                <dd className="text-right text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <AppLink to="/contact" className={buttonClasses('primary', 'lg')}>
              이 제품 견적 문의
            </AppLink>
            <a href={`tel:${site.phone}`} className={buttonClasses('ghost', 'lg')}>
              <PhoneCall className="h-4 w-4" /> {site.phone}
            </a>
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            * 가격은 수량, 설치 지역, 옵션에 따라 달라집니다. 문의 시 상세 견적을 안내드립니다.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-lg font-bold">같은 카테고리 제품</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </Container>
  )
}
