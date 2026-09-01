export interface Category {
  slug: string
  name: string
  description: string
}

export interface Product {
  slug: string
  name: string
  category: string // category slug
  summary: string
  specs: { label: string; value: string }[]
  tags: string[]
  accent: string // tailwind gradient stops, e.g. 'from-rose-500 to-orange-400'
  featured?: boolean
}

export const categories: Category[] = [
  { slug: 'arcade', name: '아케이드 게임기', description: '레트로부터 최신 대전형까지, 오락실 감성 그대로.' },
  { slug: 'claw', name: '인형뽑기 기계', description: '매장 회전율을 높이는 크레인·집게 머신.' },
  { slug: 'racing', name: '레이싱·시뮬레이터', description: '체감형 레이싱과 VR 시뮬레이터 라인업.' },
  { slug: 'rhythm', name: '리듬·펌프 게임기', description: '펌프, 태고, DJ 등 리듬 게임 전 기종.' },
  { slug: 'kids', name: '키즈·코인 라이드', description: '키즈카페·마트용 소형 라이드와 게임기.' },
  { slug: 'redemption', name: '티켓·상품 배출기', description: '리뎀션 게임과 상품 자판기 구성.' },
]

export const products: Product[] = [
  {
    slug: 'retro-cabinet-32',
    name: '레트로 대형 캐비닛 32인치',
    category: 'arcade',
    summary: '3,000종 이상 클래식 게임 내장. 2인 동시 플레이 조이스틱.',
    specs: [
      { label: '화면', value: '32인치 FHD' },
      { label: '수록 게임', value: '3,000+' },
      { label: '전원', value: '220V / 180W' },
      { label: '크기', value: 'W650 × D700 × H1700mm' },
    ],
    tags: ['베스트셀러', '2인용'],
    accent: 'from-rose-500 to-orange-400',
    featured: true,
  },
  {
    slug: 'versus-fighting-pro',
    name: '대전격투 프로 2인 부스',
    category: 'arcade',
    summary: '토너먼트급 레버·버튼. 대회 운영 모드 지원.',
    specs: [
      { label: '화면', value: '43인치 · 120Hz' },
      { label: '입력', value: '경기용 삼화 레버' },
      { label: '네트워크', value: 'LAN 대전' },
      { label: '크기', value: 'W1600 × D900 × H1600mm' },
    ],
    tags: ['대회용'],
    accent: 'from-indigo-500 to-purple-500',
    featured: true,
  },
  {
    slug: 'claw-standard-2p',
    name: '스탠다드 인형뽑기 2구',
    category: 'claw',
    summary: '집게 힘 원격 조정, 매출 통계 앱 연동.',
    specs: [
      { label: '구성', value: '2인 플레이 · 2구' },
      { label: '결제', value: '현금 · 카드 · QR' },
      { label: '조명', value: 'RGB LED' },
      { label: '크기', value: 'W1000 × D850 × H1900mm' },
    ],
    tags: ['매출 리포트'],
    accent: 'from-pink-500 to-rose-400',
    featured: true,
  },
  {
    slug: 'claw-mini-counter',
    name: '카운터형 미니 크레인',
    category: 'claw',
    summary: '좁은 매장·카페 카운터에 올려 쓰는 소형 모델.',
    specs: [
      { label: '설치', value: '탁상형' },
      { label: '결제', value: '카드 · QR' },
      { label: '크기', value: 'W450 × D500 × H750mm' },
    ],
    tags: ['소형'],
    accent: 'from-amber-400 to-yellow-300',
  },
  {
    slug: 'racing-twin-seat',
    name: '트윈시트 레이싱 시뮬레이터',
    category: 'racing',
    summary: '포스피드백 핸들, 2대 연동 대전 주행.',
    specs: [
      { label: '화면', value: '49인치 커브드 ×2' },
      { label: '피드백', value: '포스피드백 D/D' },
      { label: '연동', value: '최대 4대' },
      { label: '크기', value: 'W1400 × D2000 × H1500mm (대당)' },
    ],
    tags: ['체감형'],
    accent: 'from-sky-500 to-cyan-400',
    featured: true,
  },
  {
    slug: 'vr-motion-pod',
    name: 'VR 모션 포드',
    category: 'racing',
    summary: '2축 모션 시트 + VR 헤드셋. 콘텐츠 20종 제공.',
    specs: [
      { label: '모션', value: '2축 · 최대 18°' },
      { label: '콘텐츠', value: '20종 (업데이트)' },
      { label: '수용', value: '1인' },
      { label: '크기', value: 'W1200 × D1600 × H1800mm' },
    ],
    tags: ['VR'],
    accent: 'from-violet-500 to-fuchsia-400',
  },
  {
    slug: 'pump-prime-cabinet',
    name: '펌프 프라임 정식 캐비닛',
    category: 'rhythm',
    summary: '정품 발판·사운드 시스템. 라이선스 곡 포함.',
    specs: [
      { label: '화면', value: '55인치 UHD' },
      { label: '발판', value: '스테인리스 정품' },
      { label: '사운드', value: '2.1ch 400W' },
      { label: '크기', value: 'W1600 × D1200 × H2100mm' },
    ],
    tags: ['정품 라이선스'],
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    slug: 'taiko-drum-master',
    name: '태고 드럼 마스터',
    category: 'rhythm',
    summary: '북 2대 구성, 초등학생도 즐기는 난이도 조절.',
    specs: [
      { label: '화면', value: '32인치' },
      { label: '구성', value: '전용 북 ×2' },
      { label: '크기', value: 'W900 × D700 × H1700mm' },
    ],
    tags: ['가족용'],
    accent: 'from-orange-500 to-red-400',
  },
  {
    slug: 'kids-coin-ride-car',
    name: '키즈 코인 라이드 (레이싱카)',
    category: 'kids',
    summary: '마트·키즈카페용. 안전벨트, 저소음 모터.',
    specs: [
      { label: '대상', value: '3 – 8세' },
      { label: '결제', value: '코인 · QR' },
      { label: '크기', value: 'W700 × D1200 × H1300mm' },
    ],
    tags: ['안전 인증'],
    accent: 'from-lime-500 to-green-400',
  },
  {
    slug: 'kids-punch-mini',
    name: '키즈 펀치 미니',
    category: 'kids',
    summary: '어린이 눈높이 펀치 게임. 소프트 패드.',
    specs: [
      { label: '대상', value: '5세 이상' },
      { label: '측정', value: '점수 랭킹' },
      { label: '크기', value: 'W600 × D600 × H1500mm' },
    ],
    tags: ['소형'],
    accent: 'from-cyan-500 to-blue-400',
  },
  {
    slug: 'ticket-redemption-wheel',
    name: '티켓 리뎀션 휠',
    category: 'redemption',
    summary: '스핀 방식 티켓 배출. 상품 코너와 세트 구성 추천.',
    specs: [
      { label: '배출', value: '티켓 프린터 내장' },
      { label: '결제', value: '카드 · QR' },
      { label: '크기', value: 'W800 × D900 × H2200mm' },
    ],
    tags: ['리뎀션'],
    accent: 'from-fuchsia-500 to-pink-400',
  },
  {
    slug: 'prize-vending-tower',
    name: '상품 배출 타워',
    category: 'redemption',
    summary: '피규어·굿즈 판매에 적합한 스파이럴 배출기.',
    specs: [
      { label: '슬롯', value: '30칸' },
      { label: '결제', value: '카드 · QR · 현금' },
      { label: '크기', value: 'W900 × D850 × H1900mm' },
    ],
    tags: ['굿즈샵'],
    accent: 'from-slate-500 to-gray-400',
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
