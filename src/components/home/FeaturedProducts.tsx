import { featuredProducts } from '../../data/products'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from '../products/ProductCard'
import { buttonClasses } from '../ui/Button'
import { AppLink } from '../../lib/nav'

export function FeaturedProducts() {
  return (
    <section className="bg-surface-alt py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Best Sellers" title="인기 납품 기종" />
          <AppLink to="/products" className={buttonClasses('ghost', 'sm')}>
            전체 제품 보기
          </AppLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </section>
  )
}
