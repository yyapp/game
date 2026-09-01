export type InquiryCategory =
  | 'arcade'
  | 'claw'
  | 'racing'
  | 'rhythm'
  | 'kids'
  | 'redemption'

export interface Inquiry {
  id: string
  name: string
  phone: string
  category: InquiryCategory | string
  region: string
  message: string
  /** 공개 게시판 노출 여부 */
  isPublic: boolean
  createdAt: string // ISO
  answer?: string
  answeredAt?: string
}

/** 게시판 초기 예시 데이터 (관리자 답변 포함) */
export const seedInquiries: Inquiry[] = [
  {
    id: 'q-1024',
    name: '김상현',
    phone: '010-****-1122',
    category: 'claw',
    region: '경기 수원시',
    message: '카페 한켠에 인형뽑기 2대 놓으려는데 전기 공사가 따로 필요한가요? 설치까지 얼마나 걸릴까요?',
    isPublic: true,
    createdAt: '2026-08-21T02:14:00.000Z',
    answer:
      '일반 220V 콘센트면 대부분 추가 공사 없이 설치 가능합니다. 재고 있는 기종 기준 상담 후 3~5일 내 설치해 드립니다.',
    answeredAt: '2026-08-21T05:40:00.000Z',
  },
  {
    id: 'q-1019',
    name: '이도경',
    phone: '010-****-7788',
    category: 'racing',
    region: '부산 해운대구',
    message: '트윈시트 레이싱 시뮬레이터 4대 연동 견적과 월 유지보수 비용이 궁금합니다.',
    isPublic: true,
    createdAt: '2026-08-18T07:02:00.000Z',
    answer:
      '4대 연동 구성 견적서를 문자로 보내드렸습니다. 정기 점검은 월 1회 방문 기준으로 안내드립니다.',
    answeredAt: '2026-08-18T08:20:00.000Z',
  },
  {
    id: 'q-1015',
    name: '박',
    phone: '010-****-3040',
    category: 'kids',
    region: '대전 유성구',
    message: '키즈카페 리뉴얼 예정입니다. 코인 라이드랑 티켓 게임 세트로 상담 가능할까요?',
    isPublic: true,
    createdAt: '2026-08-14T23:41:00.000Z',
  },
]
