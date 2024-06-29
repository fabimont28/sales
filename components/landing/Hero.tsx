import Image from 'next/image'
import { MainCategories } from './main-categories'
import { Button } from '../ui/button'
import { OffersIcon } from '../icons/offers'

export function Hero() {
  return (
    <section className='min-h-[630px] w-full'>
      <div className='flex justify-around py-24'>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-balance text-6xl font-bold text-gray-800'>
              Tecnología de punta, en tus manos
            </h1>
            <p className='mt-4 max-w-[60ch] text-pretty text-lg text-gray-600'>
              Cambia tu estilo con nuestra gran variedad de accesorios, con la última tecnología.
              Encuentra lo último en tecnología en nuestros productos.
            </p>
          </div>
          <div className='mt-8'>
            <div className='flex items-center gap-2'>
              <Button
                size='lg'
                className='rounded-lg bg-stone-700 text-white hover:bg-stone-500'
              >
                Ver catálogo
              </Button>
              <Button
                size='lg'
                className='rounded-lg border border-stone-500 bg-transparent text-current hover:bg-stone-700 hover:text-white'
              >
                Ofertas del mes
                <OffersIcon className='ml-2 size-4 text-current' />
              </Button>
            </div>
          </div>
          <div className='mt-auto'>
            <p className='mb-2 text-sm text-gray-600'>Nuestras categorías</p>
            <MainCategories />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <picture>
            <Image
              className='rounded-lg'
              alt='Brand new laptop'
              src='/headphones.jpeg'
              width={520}
              height={420}
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
