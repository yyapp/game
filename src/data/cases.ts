export interface CaseStudy {
  slug: string
  title: string
  location: string
  type: string
  year: string
  summary: string
  units: string
  accent: string
  images: string[] // public/ 기준 경로, 첫 번째가 대표 이미지
  video?: { src: string; poster: string }
}

export const cases: CaseStudy[] = [
  {
    slug: 'uiseong-garlic-festival',
    title: "의성 슈퍼푸드 마늘축제 '슈퍼푸드 플레이존' 운영",
    location: '경북 의성군',
    type: '지역 축제',
    year: '2026',
    summary:
      '축제 현장 천막 안에 펀치 측정기, 레버형 테스터, LED 테이블 게임기, 챌린지 타워 등 체감형 기기를 배치하고 설치·운영했습니다.',
    units: '체감형 게임기 다수',
    accent: 'from-lime-500 to-green-400',
    images: [
      'images/cases/garlic-1.jpg',
      'images/cases/garlic-2.jpg',
      'images/cases/garlic-3.jpg',
      'images/cases/garlic-4.jpg',
      'images/cases/garlic-5.jpg',
      'images/cases/garlic-6.jpg',
    ],
    video: { src: 'videos/garlic-festival.mp4', poster: 'images/cases/garlic-video-poster.jpg' },
  },
  {
    slug: 'kidszone-indoor',
    title: '키즈존 실내 게임존 설치',
    location: '키즈존 실내 공간',
    type: '키즈존',
    year: '2026',
    summary:
      '대전 아케이드 캐비닛, 에어하키, 좀비 슈팅, 4인 낚시 게임기를 실내 공간에 맞춰 배치·설치했습니다.',
    units: '게임기 다수 + 스툴·벤치',
    accent: 'from-sky-500 to-cyan-400',
    images: ['images/cases/kidszone-1.jpg', 'images/cases/kidszone-2.jpg', 'images/products/airhockey-1.jpg', 'images/products/zombie-1.jpg', 'images/products/fishing-1.jpg'],
  },
]
