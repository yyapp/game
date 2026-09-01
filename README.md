# 플레이존게임 — 게임기 배송·설치 전문 사이트

아케이드·인형뽑기·시뮬레이터 게임기의 상담, 전국 배송, 설치, 유지보수를 안내하는
마케팅/카탈로그 사이트. React + TypeScript + Vite + Tailwind CSS.

> 회사명·연락처·이메일 등은 모두 **임시(더미) 값**입니다. 오픈 전 `src/data/site.ts` 를 교체하세요.

## 개발

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 프로덕션 빌드 → dist/
```

## 구조

```
src/
├── components/
│   ├── layout/      Header, Footer, Layout
│   ├── home/        홈 섹션 (Hero, CategoryGrid, ...)
│   ├── products/    ProductCard
│   ├── contact/     ContactForm
│   └── ui/          Button, Container, SectionHeading, Thumb, ...
├── pages/           Home, About, Products, ProductDetail, Delivery, Cases, Contact, Board, NotFound
├── data/            site / products / cases / inquiries  ← 콘텐츠는 여기서 관리
├── lib/             nav(라우터 비의존 링크), inquiryStore(문의 저장소), utils
├── App.tsx          react-router 라우팅 (정식)
└── PreviewApp.tsx   라우터 없는 미리보기용 미러 (Artifact/러버블 이식 확인용)
```

## 콘텐츠 수정

- **회사 정보**: `src/data/site.ts`
- **제품 목록**: `src/data/products.ts`
- **납품 사례**: `src/data/cases.ts`
- **제품 이미지**: 현재는 그라데이션 플레이스홀더(`src/components/ui/Thumb.tsx`).
  실제 사진은 `<img>` 로 교체하거나 관리자 페이지 + Supabase Storage 연동.

## 문의 접수 (카카오톡 / 문자 / 게시판)

- 카카오톡: `site.kakaoChannel` 링크
- 문자: `sms:` 링크(방문자용) + 폼 제출 시 관리자 문자 발송(이식 필요)
- 게시판: `/board` — 공개 등록된 문의 표시

`src/lib/inquiryStore.ts` 에 러버블/Supabase 연결 지점을 주석으로 표시해 두었습니다:
1. `listInquiries()` → Supabase `inquiries` select
2. `createInquiry()` → Supabase insert + edge function `send-sms` / `send-email`

## 미리보기 전용 파일 (러버블 이식 시 제외)

`PreviewApp.tsx`, `main.preview.tsx`, `preview.html`, `vite.preview.config.ts`
