import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { categories } from '../../data/products'
import { createInquiry } from '../../lib/inquiryStore'
import { Button } from '../ui/Button'
import { AppLink } from '../../lib/nav'
import { cn } from '../../lib/utils'

interface FormState {
  name: string
  phone: string
  category: string
  region: string
  message: string
  isPublic: boolean
  agree: boolean
}

const initial: FormState = {
  name: '',
  phone: '',
  category: categories[0].slug,
  region: '',
  message: '',
  isPublic: true,
  agree: false,
}

const fieldClass =
  'w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand'

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const valid = form.name.trim() !== '' && form.phone.trim() !== '' && form.agree

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!valid) return
    // 러버블: 이 함수 안에서 Supabase 저장 + 문자/메일 발송이 이뤄집니다.
    createInquiry({
      name: form.name,
      phone: form.phone,
      category: form.category,
      region: form.region,
      message: form.message,
      isPublic: form.isPublic,
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-surface-alt p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand" />
        <h3 className="text-lg font-bold">문의가 접수되었습니다</h3>
        <p className="text-sm text-ink-muted">
          {form.name}님, 담당자가 영업일 기준 24시간 내에 연락드립니다.
          <br />
          접수 즉시 담당자에게 문자와 메일로 알림이 발송됩니다.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {form.isPublic && (
            <AppLink to="/board" className="text-sm font-semibold text-brand hover:underline">
              문의게시판에서 확인 →
            </AppLink>
          )}
          <button
            className="text-sm font-semibold text-ink-muted hover:text-ink"
            onClick={() => {
              setForm(initial)
              setSubmitted(false)
            }}
          >
            새 문의 작성
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-black/5 bg-surface p-6 shadow-card">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">담당자명 *</span>
          <input
            className={fieldClass}
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="홍길동"
            required
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">연락처 *</span>
          <input
            className={fieldClass}
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="010-0000-0000"
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">관심 제품</span>
          <select
            className={fieldClass}
            value={form.category}
            onChange={(e) => update('category', e.target.value)}
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold">설치 지역</span>
          <input
            className={fieldClass}
            value={form.region}
            onChange={(e) => update('region', e.target.value)}
            placeholder="예: 부산 해운대구"
          />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold">문의 내용</span>
        <textarea
          className={cn(fieldClass, 'min-h-[120px] resize-y')}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="매장 평수, 예산, 희망 기종 등을 적어주세요."
        />
      </label>

      <label className="flex items-start gap-2 text-sm text-ink-soft">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 accent-brand"
          checked={form.isPublic}
          onChange={(e) => update('isPublic', e.target.checked)}
        />
        <span>
          문의게시판에 공개로 등록합니다. (이름 일부와 연락처는 자동으로 가려집니다)
        </span>
      </label>

      <label className="flex items-start gap-2 text-sm text-ink-muted">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 accent-brand"
          checked={form.agree}
          onChange={(e) => update('agree', e.target.checked)}
        />
        <span>개인정보 수집 및 이용에 동의합니다. (문의 응대 목적, 보관 1년) *</span>
      </label>

      <Button type="submit" size="lg" disabled={!valid} className="w-full sm:w-auto">
        문의 보내기
      </Button>
    </form>
  )
}
