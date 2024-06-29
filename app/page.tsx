import Header from '@/components/Header'
import { Hero } from '@/components/landing/Hero'
import { TextOffers } from '@/components/landing/text-offers'

export default async function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <TextOffers />
    </div>
  )
}
