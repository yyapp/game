import { Gamepad2 } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ThumbProps {
  accent: string
  label?: string
  className?: string
  ratio?: 'square' | 'video' | 'portrait'
}

const ratios = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
}

/**
 * Placeholder product visual. Real photos replace this in Lovable
 * by swapping to an <img> element.
 */
export function Thumb({ accent, label, className, ratio = 'square' }: ThumbProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br text-white/90',
        accent,
        ratios[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,white,transparent_45%)]" />
      <Gamepad2 className="h-10 w-10 opacity-80" strokeWidth={1.5} />
      {label && (
        <span className="absolute bottom-2 left-3 text-xs font-medium tracking-wide opacity-90">
          {label}
        </span>
      )}
    </div>
  )
}
