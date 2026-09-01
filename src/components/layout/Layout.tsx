import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
  activePath?: string
}

export function Layout({ children, activePath }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header activePath={activePath} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
