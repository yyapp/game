export interface CaseStudy {
  slug: string
  title: string
  location: string
  type: string
  year: string
  summary: string
  units: string
  accent: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'busan-arcade',
    title: '부산 서면 대형 오락실 리뉴얼',
    location: '부산 부산진구',
    type: '아케이드 전문점',
    year: '2024',
    summary: '노후 기기 교체 및 레이아웃 재설계. 격투·리듬 존 분리로 회전율 개선.',
    units: '게임기 42대',
    accent: 'from-rose-500 to-orange-400',
  },
  {
    slug: 'ilsan-kids-cafe',
    title: '일산 키즈카페 게임존 신규 구축',
    location: '경기 고양시',
    type: '키즈카페',
    year: '2024',
    summary: '연령대별 코인 라이드와 리뎀션 게임 배치, 티켓 상품 코너 세트 구성.',
    units: '기기 18대 + 상품 코너',
    accent: 'from-lime-500 to-green-400',
  },
  {
    slug: 'gangnam-pc-lounge',
    title: '강남 복합 라운지 시뮬레이터 존',
    location: '서울 강남구',
    type: '복합 문화공간',
    year: '2023',
    summary: 'VR 모션 포드와 트윈시트 레이싱 4대 연동 설치, 예약 운영 시스템 연동.',
    units: '시뮬레이터 9대',
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    slug: 'daejeon-mart',
    title: '대전 대형마트 코인 라이드 납품',
    location: '대전 유성구',
    type: '대형 유통점',
    year: '2023',
    summary: '매장 4개 지점 동시 납품 및 정기 유지보수 계약 체결.',
    units: '라이드 24대',
    accent: 'from-amber-400 to-yellow-300',
  },
]
