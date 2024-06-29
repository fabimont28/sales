import Header from '@/components/Header'
import { Container } from '@/components/container'
import { Hero } from '@/components/landing/Hero'
import { FeaturedProducts } from '@/components/landing/featured-products'
import { TextOffers } from '@/components/landing/text-offers'

export default async function Index() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className='bg-gradient-to-r from-gray-100 via-stone-100 to-blue-100'>
        <Container>
          <Hero />
        </Container>
      </div>
      <TextOffers />
      <Container>
        <FeaturedProducts />
      </Container>
    </>
  )
}
