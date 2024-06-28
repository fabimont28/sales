import Header from '@/components/Header'
import { Hero } from '@/components/landing/Hero'
import { Marquee } from '@/components/landing/Marquee'

export default async function Index() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <Marquee />
    </div>
  )
}
