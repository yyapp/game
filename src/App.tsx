import { useEffect } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function ProductsRoute() {
  const [params] = useSearchParams()
  return <Products category={params.get('cat') ?? undefined} />
}

function ProductDetailRoute() {
  const { slug = '' } = useParams()
  return <ProductDetail slug={slug} />
}

function Shell() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <NavProvider value={(to) => navigate(to)}>
      <ScrollToTop />
      <Layout activePath={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsRoute />} />
          <Route path="/products/:slug" element={<ProductDetailRoute />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/board" element={<Board />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </NavProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Shell />
    </BrowserRouter>
  )
}
