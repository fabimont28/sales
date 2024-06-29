'use client'
import Marquee from 'react-fast-marquee'
export type MarqueeDirection = 'left' | 'right'

export function TextOffers() {
  return (
    <section className='w-full bg-white'>
      <Marquee
        pauseOnHover
        speed={40}
      >
        <p className='mx-6 inline-flex py-6 text-3xl font-bold uppercase'>Black Friday</p>
        <p className='mx-6 inline-flex py-6 text-3xl font-bold uppercase'>Hasta 70% de DESCUENTO</p>
        <p className='mx-6 inline-flex py-6 text-3xl font-bold uppercase'>Black Friday</p>
        <p className='mx-6 inline-flex py-6 text-3xl font-bold uppercase'>Hasta 70% de DESCUENTO</p>
      </Marquee>
    </section>
  )
}
