import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'

export function FeaturedProducts() {
  return (
    <section className='py-10'>
      <h2 className='mb-4 text-lg font-bold'>Productos destacados</h2>
      <BentoGrid className='w-full'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.name}
            description={item.description}
            header={item.header}
            className={cn(i === 3 || i === 6 ? 'md:col-span-2' : '', 'border border-stone-300')}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

const items = [
  {
    name: 'Beats Solo 4',
    description: 'Vive la música con la mejor calidad de sonido.',
    header: (
      <div className='flex justify-center'>
        <Image
          src='/products/1.jpg'
          alt='Beats Solo 4'
          width={180}
          height={180}
          className='h-auto max-w-full text-center'
        />
      </div>
    ),
  },
  {
    name: 'Samsung Earbuds pro',
    description: 'Escucha tu música favorita con la mejor calidad de sonido.',
    header: (
      <div className='flex justify-center'>
        <Image
          src='/products/2.webp'
          alt='Samsung Earbuds pro'
          width={180}
          height={180}
          className='h-auto max-w-full text-center'
        />
      </div>
    ),
  },
  {
    name: 'Funda de iPhone',
    description: 'Protege tu iPhone con la mejor calidad de fundas.',
    header: (
      <div className='flex justify-center'>
        <Image
          src='/products/3.jpeg'
          alt='Funda de iPhone'
          width={180}
          height={180}
          className='h-auto max-w-full text-center'
        />
      </div>
    ),
  },
  {
    name: 'Alexa asistente de voz virtual',
    description: 'Understand the impact of effective communication in our lives.',
    header: (
      <div className='flex h-full w-full justify-center rounded-xl bg-[url("/products/alexa.jpg")] bg-cover bg-no-repeat'></div>
    ),
  },
  {
    name: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: (
      <div className='flex justify-center'>
        <Image
          src='/products/tipo-c.webp'
          alt='Funda de iPhone'
          width={180}
          height={180}
          className='h-auto max-w-full text-center'
        />
      </div>
    ),
  },
]
