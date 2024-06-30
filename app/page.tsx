import Header from '@/components/Header'
import { Container } from '@/components/container'
import { Hero } from '@/components/landing/Hero'
import { DiscountBanner } from '@/components/landing/discount-banner'
import { FeaturedProducts } from '@/components/landing/featured-products'
import { TextOffers } from '@/components/landing/text-offers'
import { TrendingProducts } from '@/components/landing/trending-products'

export default async function Index() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className='bg-gradient-to-r from-white to-slate-200'>
        <Container>
          <Hero />
        </Container>
      </div>
      <TextOffers />
      <Container>
        <FeaturedProducts />
      </Container>
      <div className=''>
        <DiscountBanner />
      </div>
      <div className='bg-gradient-to-r from-white to-slate-200'>
        <Container>
          <TrendingProducts />
        </Container>
      </div>
    </>
  )
}
