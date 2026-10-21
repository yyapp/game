import { asset } from '../../lib/asset'

interface FitImageProps {
  src: string
  alt: string
  eager?: boolean
}

/**
 * 사진 전체가 잘리지 않게 칸 안에 맞춰 표시(object-contain)하고,
 * 남는 여백은 같은 사진을 흐리게 깔아 채운다. 부모가 크기를 정해야 한다.
 */
export function FitImage({ src, alt, eager }: FitImageProps) {
  const url = asset(src)
  return (
    <>
      <img
        src={url}
        alt=""
        aria-hidden
        loading={eager ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-75"
      />
      <img
        src={url}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-contain"
      />
    </>
  )
}
