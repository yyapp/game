import { useState } from 'react'
import { asset } from '../../lib/asset'
import { cn } from '../../lib/utils'

interface GalleryProps {
  images: string[]
  alt: string
  className?: string
}

/** 대표 이미지 + 썸네일 선택형 갤러리. */
export function Gallery({ images, alt, className }: GalleryProps) {
  const [index, setIndex] = useState(0)
  const current = images[Math.min(index, images.length - 1)]

  return (
    <div className={className}>
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-black/5">
        <img src={asset(current)} alt={alt} className="h-full w-full object-cover" />
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${alt} 사진 ${i + 1}`}
              aria-pressed={i === index}
              className={cn(
                'aspect-[4/3] overflow-hidden rounded-lg border-2 transition-opacity',
                i === index ? 'border-brand' : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              <img src={asset(src)} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
