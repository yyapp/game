import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { site } from '../../data/site'
import { buttonClasses } from '../ui/Button'
import { Container } from '../ui/Container'
import { AppLink } from '../../lib/nav'
import { cn } from '../../lib/utils'

interface HeaderProps {
  activePath?: string
}

export function Header({ activePath }: HeaderProps) {
  const [open, setOpen] = useState(false)

  const isActive = (to: string) =>
    to === '/' ? activePath === '/' : activePath?.startsWith(to)

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <AppLink to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">G</span>
          <span className="text-lg">{site.name}</span>
        </AppLink>

        <nav className="hidden items-center gap-5 lg:flex">
          {site.nav.map((item) => (
            <AppLink
              key={item.to}
              to={item.to}
              className={cn(
                'link-underline text-sm font-semibold text-ink-soft transition-colors hover:text-ink',
                isActive(item.to) && 'text-brand',
              )}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phone}`} className="flex items-center gap-1.5 text-sm font-bold text-ink">
            <Phone className="h-4 w-4 text-brand" />
            {site.phone}
          </a>
          <AppLink to="/contact" className={buttonClasses('primary', 'sm')}>
            견적 문의
          </AppLink>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/5 lg:hidden">
          <Container className="flex flex-col py-3">
            {site.nav.map((item) => (
              <AppLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold text-ink-soft"
              >
                {item.label}
              </AppLink>
            ))}
            <AppLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={buttonClasses('primary', 'md', 'mt-3')}
            >
              견적 문의
            </AppLink>
          </Container>
        </div>
      )}
    </header>
  )
}
