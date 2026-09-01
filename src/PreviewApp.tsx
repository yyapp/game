import { useState } from 'react'
import { Layout } from './components/layout/Layout'
import { NavProvider } from './lib/nav'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'
import { Delivery } from './pages/Delivery'
import { Cases } from './pages/Cases'
import { Contact } from './pages/Contact'
import { Board } from './pages/Board'
import { NotFound } from './pages/NotFound'

/**
 * Router-less mirror of App.tsx for the Artifact preview.
 * react-router calls `new URL(href, origin)` which throws in the
 * sandboxed iframe (origin === "null"), so navigation here is plain state.
 */
export function PreviewApp() {
  const [path, setPath] = useState('/')

  const navigate = (to: string) => {
    setPath(to)
    window.scrollTo(0, 0)
  }

  const [pathname, query] = path.split('?')
  const params = new URLSearchParams(query ?? '')

  let page
  if (pathname === '/') page = <Home />
  else if (pathname === '/about') page = <About />
  else if (pathname === '/products') page = <Products category={params.get('cat') ?? undefined} />
  else if (pathname.startsWith('/products/'))
    page = <ProductDetail slug={pathname.replace('/products/', '')} />
  else if (pathname === '/delivery') page = <Delivery />
  else if (pathname === '/cases') page = <Cases />
  else if (pathname === '/contact') page = <Contact />
  else if (pathname === '/board') page = <Board />
  else page = <NotFound />

  return (
    <NavProvider value={navigate}>
      <Layout activePath={pathname}>{page}</Layout>
    </NavProvider>
  )
}
