import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-semibold text-ink-soft',
        className,
      )}
    >
      {children}
    </span>
  )
}
