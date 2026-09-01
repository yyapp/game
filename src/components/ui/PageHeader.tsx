import type { ReactNode } from 'react'
import { Container } from './Container'

interface PageHeaderProps {
  title: string
  description?: ReactNode
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-black/5 bg-surface-alt">
      <Container className="py-12 md:py-16">
        <h1 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {description}
          </p>
        )}
      </Container>
    </div>
  )
}
