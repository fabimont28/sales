'use client'
import Marquee from 'react-fast-marquee'
export type MarqueeDirection = 'left' | 'right'

export function TextOffers() {
  return (
    <section className='w-full border-y border-stone-300 bg-white py-2'>
      <Marquee
        pauseOnHover
        speed={40}
      >
        <p className='mx-6 inline-flex py-6 text-xl font-bold uppercase'>Black Friday</p>
        <p className='mx-6 inline-flex py-6 text-xl font-bold uppercase'>Hasta 70% de DESCUENTO</p>
        <p className='mx-6 inline-flex py-6 text-xl font-bold uppercase'>Black Friday</p>
        <p className='mx-6 inline-flex py-6 text-xl font-bold uppercase'>Hasta 70% de DESCUENTO</p>
        <p className='mx-6 inline-flex py-6 text-xl font-bold uppercase'>Black Friday</p>
        <p className='mx-6 inline-flex py-6 text-xl font-bold uppercase'>Hasta 70% de DESCUENTO</p>
      </Marquee>
    </section>
  )
}
