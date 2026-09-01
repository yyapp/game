import { seedInquiries, type Inquiry } from '../data/inquiries'

/**
 * 프론트엔드용 임시 저장소 (localStorage).
 *
 * ── 러버블 이식 시 교체 지점 ─────────────────────────────
 * 1. listInquiries()  → Supabase `inquiries` 테이블 select (isPublic = true)
 * 2. createInquiry()  → 아래 3가지를 순서대로 호출
 *      a. Supabase insert
 *      b. edge function `send-sms`   : site.smsTo 로 "새 문의 도착" 문자
 *      c. edge function `send-email` : site.email 로 메일 발송
 *    (카카오 알림톡을 쓸 경우 send-sms 대신/추가로 알림톡 발송 함수 연결)
 * ────────────────────────────────────────────────────────
 */

const KEY = 'playzone.inquiries.v1'

function read(): Inquiry[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw) as Inquiry[]
  } catch {
    /* localStorage 사용 불가 환경 */
  }
  return seedInquiries
}

function write(list: Inquiry[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    /* 무시 */
  }
}

export function listInquiries(): Inquiry[] {
  return [...read()].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export function listPublicInquiries(): Inquiry[] {
  return listInquiries().filter((q) => q.isPublic)
}

export interface NewInquiry {
  name: string
  phone: string
  category: string
  region: string
  message: string
  isPublic: boolean
}

function maskPhone(phone: string): string {
  const digits = phone.replace(/[^0-9]/g, '')
  if (digits.length < 7) return '010-****-****'
  return `010-****-${digits.slice(-4)}`
}

export function createInquiry(input: NewInquiry): Inquiry {
  const now = new Date()
  const inquiry: Inquiry = {
    id: `q-${now.getTime().toString().slice(-6)}`,
    name: input.name,
    phone: maskPhone(input.phone),
    category: input.category,
    region: input.region,
    message: input.message,
    isPublic: input.isPublic,
    createdAt: now.toISOString(),
  }

  const list = read()
  write([inquiry, ...list])

  // TODO(러버블): Supabase insert + send-sms + send-email edge function 호출
  return inquiry
}
