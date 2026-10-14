import { Gamepad2 } from 'lucide-react'
import { cn } from '../../lib/utils'
import { asset } from '../../lib/asset'

interface ThumbProps {
  accent: string
  /** public/ 기준 이미지 경로. 없으면 그라데이션 플레이스홀더 */
  src?: string
  alt?: string
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
export function Thumb({ accent, src, alt = '', label, className, ratio = 'square' }: ThumbProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br text-white/90',
        accent,
        ratios[ratio],
        className,
      )}
    >
      {src ? (
        <img src={asset(src)} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,white,transparent_45%)]" />
          <Gamepad2 className="h-10 w-10 opacity-80" strokeWidth={1.5} />
        </>
      )}
      {label && (
        <span className="absolute bottom-2 left-3 rounded bg-black/40 px-1.5 py-0.5 text-xs font-medium tracking-wide opacity-90">
          {label}
        </span>
      )}
    </div>
  )
}
