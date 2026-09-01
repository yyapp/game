import { Hero } from '../components/home/Hero'
import { CategoryGrid } from '../components/home/CategoryGrid'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { ProcessSteps } from '../components/home/ProcessSteps'
import { CasesStrip } from '../components/home/CasesStrip'
import { CtaBanner } from '../components/home/CtaBanner'

export function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <ProcessSteps />
      <CasesStrip />
      <CtaBanner />
    </>
  )
}
