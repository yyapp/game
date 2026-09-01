import type { Product } from '../../data/products'
import { getCategory } from '../../data/products'
import { AppLink } from '../../lib/nav'
import { Badge } from '../ui/Badge'
import { Thumb } from '../ui/Thumb'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const category = getCategory(product.category)
  return (
    <AppLink
      to={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-card transition-transform hover:-translate-y-1"
    >
      <Thumb accent={product.accent} label={category?.name} ratio="video" className="rounded-none" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <h3 className="font-bold text-ink group-hover:text-brand">{product.name}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{product.summary}</p>
        <span className="mt-auto pt-2 text-sm font-semibold text-brand">가격 문의 →</span>
      </div>
    </AppLink>
  )
}
