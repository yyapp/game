import { Clock, Mail, MapPin, MessageCircle, MessageSquare, Phone } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { ContactForm } from '../components/contact/ContactForm'
import { site } from '../data/site'

const channels = [
  {
    icon: MessageCircle,
    title: '카카오톡 상담',
    desc: '채널을 추가하고 바로 채팅하세요',
    action: '채널 열기',
    href: site.kakaoChannel,
    className: 'bg-[#FEE500] text-[#3A1D1D]',
  },
  {
    icon: MessageSquare,
    title: '문자 문의',
    desc: '휴대폰에서 바로 문자 보내기',
    action: `${site.smsTo}`,
    href: `sms:${site.smsTo.replace(/-/g, '')}?body=${encodeURIComponent('[게임기 문의] 매장 지역/평수/희망 기종을 적어주세요.')}`,
    className: 'bg-ink text-white',
  },
  {
    icon: Phone,
    title: '전화 문의',
    desc: site.hours,
    action: site.phone,
    href: `tel:${site.phone}`,
    className: 'bg-brand text-white',
  },
]

export function Contact() {
  const info = [
    { icon: Phone, label: '대표전화', value: site.phone, href: `tel:${site.phone}` },
    { icon: MessageCircle, label: '카카오톡 채널', value: site.kakaoChannelId, href: site.kakaoChannel },
    { icon: MessageSquare, label: '문자 문의', value: site.smsTo, href: `sms:${site.smsTo.replace(/-/g, '')}` },
    { icon: Mail, label: '이메일', value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: '주소', value: site.address },
    { icon: Clock, label: '운영시간', value: site.hours },
  ]

  return (
    <>
      <PageHeader
        title="견적 문의"
        description="카카오톡·문자·전화·문의폼 어느 방법이든 편한 채널로 연락 주세요. 접수되면 담당자에게 즉시 알림이 갑니다."
      />

      <Container className="py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group rounded-2xl border border-black/5 bg-surface p-5 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.className}`}>
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-bold text-ink">{c.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{c.desc}</p>
              <p className="mt-3 text-sm font-semibold text-brand">{c.action} →</p>
            </a>
          ))}
        </div>
      </Container>

      <Container className="grid gap-10 pb-14 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-ink-muted">기타 연락처</h2>
          {info.map((i) => (
            <div key={i.label} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-surface p-4 shadow-card">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                <i.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink-muted">{i.label}</p>
                {i.href ? (
                  <a href={i.href} target="_blank" rel="noreferrer" className="font-semibold text-ink hover:text-brand">
                    {i.value}
                  </a>
                ) : (
                  <p className="font-semibold text-ink">{i.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-bold text-ink-muted">문의폼 작성</h2>
          <div className="mt-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  )
}
