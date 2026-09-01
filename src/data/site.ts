export interface NavItem {
  label: string
  to: string
}

export interface SiteConfig {
  name: string
  legalName: string
  tagline: string
  phone: string
  /** 방문자 문의폼 → 이 번호로 문자(SMS) 발송 (관리자 수신용) */
  smsTo: string
  /** 카카오톡 채널 상담 링크 */
  kakaoChannel: string
  kakaoChannelId: string
  email: string
  address: string
  bizNo: string
  hours: string
  nav: NavItem[]
}

/**
 * 임시(더미) 값입니다. 실제 오픈 전 아래 항목을 교체하세요.
 * name / legalName / phone / smsTo / kakaoChannel / email / address / bizNo
 */
export const site: SiteConfig = {
  name: '플레이존게임',
  legalName: '(주)플레이존게임',
  tagline: '전문 게임월드 · 전국 배송 및 설치 지원',
  phone: '1588-2470',
  smsTo: '010-2345-6789',
  kakaoChannel: 'https://pf.kakao.com/_xdPGxb',
  kakaoChannelId: '@playzone',
  email: 'contact@playzone-game.co.kr',
  address: '인천광역시 남동구 논현로 210, 3층',
  bizNo: '214-88-01579',
  hours: '평일 09:30 – 18:30 / 주말·공휴일 휴무',
  nav: [
    { label: '회사소개', to: '/about' },
    { label: '제품', to: '/products' },
    { label: '배송·설치', to: '/delivery' },
    { label: '납품사례', to: '/cases' },
    { label: '문의', to: '/contact' },
    { label: '문의게시판', to: '/board' },
  ],
}
