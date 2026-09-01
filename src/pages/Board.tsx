import { useState } from 'react'
import { ChevronDown, PencilLine } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { Badge } from '../components/ui/Badge'
import { buttonClasses } from '../components/ui/Button'
import { AppLink } from '../lib/nav'
import { listPublicInquiries } from '../lib/inquiryStore'
import { getCategory } from '../data/products'
import { cn, formatDate } from '../lib/utils'

export function Board() {
  const items = listPublicInquiries()
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null)

  return (
    <>
      <PageHeader
        title="문의게시판"
        description="다른 고객들이 남긴 문의와 답변입니다. 공개로 등록된 문의만 표시되며, 이름과 연락처는 일부 가려집니다."
      />
      <Container className="py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-ink-muted">총 {items.length}건</p>
          <AppLink to="/contact" className={buttonClasses('primary', 'sm')}>
            <PencilLine className="h-4 w-4" /> 문의 작성
          </AppLink>
        </div>

        <ul className="divide-y divide-black/5 rounded-2xl border border-black/5 bg-surface">
          {items.map((q) => {
            const isOpen = open === q.id
            const category = getCategory(String(q.category))
            return (
              <li key={q.id}>
                <button
                  className="flex w-full items-center gap-3 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : q.id)}
                >
                  <Badge className={q.answer ? 'bg-brand/10 text-brand' : ''}>
                    {q.answer ? '답변완료' : '접수'}
                  </Badge>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-ink">{q.message}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">
                      {q.name} · {category?.name ?? q.category} · {q.region || '지역 미기재'} ·{' '}
                      {formatDate(q.createdAt)}
                    </p>
                  </div>
                  <ChevronDown
                    className={cn('h-5 w-5 shrink-0 text-ink-muted transition-transform', isOpen && 'rotate-180')}
                  />
                </button>

                {isOpen && (
                  <div className="space-y-4 border-t border-black/5 bg-surface-alt px-5 py-4 text-sm">
                    <div>
                      <p className="font-semibold text-ink-muted">문의 내용</p>
                      <p className="mt-1 whitespace-pre-line leading-relaxed text-ink">{q.message}</p>
                    </div>
                    {q.answer ? (
                      <div className="rounded-xl border border-brand/20 bg-surface p-4">
                        <p className="font-semibold text-brand">담당자 답변</p>
                        <p className="mt-1 whitespace-pre-line leading-relaxed text-ink">{q.answer}</p>
                        {q.answeredAt && (
                          <p className="mt-2 text-xs text-ink-muted">{formatDate(q.answeredAt)}</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-ink-muted">담당자가 확인 후 답변 및 개별 연락 예정입니다.</p>
                    )}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}
