export interface Category {
  slug: string
  name: string
  description: string
  image: string // 카테고리 대표 이미지 (public/ 기준 경로)
}

export interface Product {
  slug: string
  name: string
  category: string // category slug
  summary: string
  specs: { label: string; value: string }[]
  tags: string[]
  accent: string // tailwind gradient stops, e.g. 'from-rose-500 to-orange-400'
  images: string[] // public/ 기준 경로, 첫 번째가 대표 이미지
  featured?: boolean
}

export const categories: Category[] = [
  { slug: 'arcade', name: '아케이드 게임기', description: '대전 캐비닛부터 LED 테이블 게임기까지.', image: 'images/products/versus-1.jpg' },
  { slug: 'sports', name: '체감·스포츠 게임기', description: '펀치, 에어하키 등 몸으로 즐기는 인기 기종.', image: 'images/products/punch-2.jpg' },
  { slug: 'kids', name: '가족·키즈 게임기', description: '키즈존과 가족 공간에 맞는 슈팅·낚시 게임.', image: 'images/products/fishing-1.jpg' },
]

export const products: Product[] = [
  {
    slug: 'versus-cabinet-2p',
    name: '2인 대전 아케이드 캐비닛',
    category: 'arcade',
    summary: '레드 프레임 대전형 캐비닛. 2인 동시 플레이, 전용 스툴 포함 구성.',
    specs: [
      { label: '플레이 인원', value: '2인 (1대당)' },
      { label: '구성', value: '캐비닛 + 스툴' },
      { label: '설치 사례', value: '키즈존 실내 공간' },
    ],
    tags: ['대전', '2인용'],
    accent: 'from-rose-500 to-orange-400',
    images: ['images/products/versus-1.jpg', 'images/products/versus-2.jpg', 'images/products/versus-3.jpg'],
    featured: true,
  },
  {
    slug: 'led-table-game',
    name: 'LED 테이블 버튼 게임기',
    category: 'arcade',
    summary: '화려한 LED 테이블형 본체와 다수의 버튼. 여러 명이 둘러서 즐기는 이벤트·행사용.',
    specs: [
      { label: '형태', value: '테이블형 (다인 플레이)' },
      { label: '조명', value: 'LED' },
      { label: '설치 사례', value: '지역 축제 행사장' },
    ],
    tags: ['행사용', '다인용'],
    accent: 'from-sky-500 to-cyan-400',
    images: ['images/products/table-1.jpg', 'images/products/table-2.jpg', 'images/products/table-3.jpg'],
  },
  {
    slug: 'punch-machine',
    name: '펀치 파워 측정기',
    category: 'sports',
    summary: '타격 세기를 LED 게이지로 보여주는 체감형 펀치 머신. 행사·축제 현장에서 인기.',
    specs: [
      { label: '방식', value: 'LED 게이지 표시' },
      { label: '플레이 인원', value: '1인' },
      { label: '설치 사례', value: '지역 축제 행사장' },
    ],
    tags: ['체감형', '행사용'],
    accent: 'from-red-500 to-orange-500',
    images: ['images/products/punch-2.jpg', 'images/products/punch-1.jpg', 'images/products/punch-3.jpg'],
    featured: true,
  },
  {
    slug: 'lever-strength-tester',
    name: '레버형 스트렝스 테스터',
    category: 'sports',
    summary: '레버를 당겨 힘을 겨루는 컴팩트 체감형 기기.',
    specs: [
      { label: '방식', value: '레버 조작' },
      { label: '플레이 인원', value: '1인' },
      { label: '설치 사례', value: '지역 축제 행사장' },
    ],
    tags: ['체감형'],
    accent: 'from-purple-500 to-indigo-500',
    images: ['images/products/lever-1.jpg', 'images/products/lever-2.jpg'],
  },
  {
    slug: 'challenge-button-tower',
    name: '챌린지 버튼 타워',
    category: 'sports',
    summary: '타워형 본체의 버튼 챌린지 기기. 이벤트 부스 콘셉트에 맞춘 외관 랩핑 가능.',
    specs: [
      { label: '형태', value: '타워형' },
      { label: '외관', value: '맞춤 랩핑' },
      { label: '설치 사례', value: '지역 축제 행사장' },
    ],
    tags: ['이벤트', '맞춤 랩핑'],
    accent: 'from-violet-500 to-fuchsia-500',
    images: ['images/products/challenge-1.jpg', 'images/products/challenge-2.jpg'],
  },
  {
    slug: 'air-hockey-speed-2',
    name: '스피드 에어하키 II',
    category: 'sports',
    summary: '전광판 스코어 표시와 네온 라이팅의 에어하키 테이블. 2인 대전.',
    specs: [
      { label: '플레이 인원', value: '2인 대전' },
      { label: '스코어', value: '전광판 표시' },
      { label: '설치 사례', value: '키즈존 실내 공간' },
    ],
    tags: ['대전', '베스트셀러'],
    accent: 'from-emerald-500 to-teal-400',
    images: ['images/products/airhockey-1.jpg', 'images/products/airhockey-2.jpg'],
    featured: true,
  },
  {
    slug: 'zombie-shooting-2p',
    name: '좀비 2인 슈팅 게임기',
    category: 'kids',
    summary: '곡면 디스플레이와 2인 건 슈팅. 벤치 포함 구성으로 키즈존·가족 공간에 적합.',
    specs: [
      { label: '플레이 인원', value: '2인' },
      { label: '구성', value: '본체 + 벤치' },
      { label: '설치 사례', value: '키즈존 실내 공간' },
    ],
    tags: ['슈팅', '2인용'],
    accent: 'from-lime-500 to-green-400',
    images: ['images/products/zombie-1.jpg', 'images/products/zombie-2.jpg'],
    featured: true,
  },
  {
    slug: 'deep-sea-fishing-4p',
    name: '딥씨 파티 4인 낚시 게임기',
    category: 'kids',
    summary: '화려한 LED의 4인 동시 플레이 낚시 게임. 가족 단위 방문객에게 인기.',
    specs: [
      { label: '플레이 인원', value: '4인 동시' },
      { label: '조명', value: 'LED' },
      { label: '설치 사례', value: '키즈존 실내 공간' },
    ],
    tags: ['4인용', '가족'],
    accent: 'from-amber-400 to-yellow-300',
    images: ['images/products/fishing-1.jpg', 'images/products/fishing-2.jpg'],
  },
]

export function productsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug)
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export const featuredProducts = products.filter((p) => p.featured)
