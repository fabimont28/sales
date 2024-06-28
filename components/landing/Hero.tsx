import Image from 'next/image'
import { HeadphonesIcon } from '../icons/headphones'
import { MouseIcon } from '../icons/mouse'
import { UsbIcon } from '../icons/usb'
import { Button } from '../ui/button'
import { PlusIcon } from '../icons/plus'

export function Hero() {
  return (
    <section className='min-h-[630px] w-full bg-gradient-to-r from-gray-100 via-stone-100 to-blue-100'>
      <div className='flex justify-around px-16 py-24'>
        <div>
          <div>
            <h1 className='text-balance text-6xl font-bold text-gray-800'>
              Tecnología de punta, en tus manos
            </h1>
            <p className='mt-4 text-lg text-gray-600'>
              Cambia tu estilo con nuestra gran variedad de accesorios, con la última tecnología.
            </p>
          </div>
          <div className='mt-4 flex gap-4'>
            <Button
              variant='outline'
              className='rounded-2xl border-gray-300 bg-transparent p-6'
            >
              <div>
                <header className='flex items-center gap-4'>
                  <h3>Audífonos</h3>
                  <HeadphonesIcon className='size-6' />
                </header>
              </div>
            </Button>
            <Button
              variant='outline'
              className='rounded-2xl border-gray-300 bg-transparent p-6'
            >
              <div>
                <header className='flex items-center gap-4'>
                  <h3>Periféricos</h3>
                  <MouseIcon className='size-6' />
                </header>
              </div>
            </Button>
            <Button
              variant='outline'
              className='rounded-2xl border-gray-300 bg-transparent p-6'
            >
              <div>
                <header className='flex items-center gap-4'>
                  <h3>Accesorios</h3>
                  <UsbIcon className='text-current/60 size-6' />
                </header>
              </div>
            </Button>
            <Button
              variant='outline'
              className='rounded-2xl border-gray-300 bg-stone-700 p-6 text-white hover:bg-stone-500/80 hover:text-white'
            >
              <div>
                <header className='flex items-center gap-2'>
                  Otros
                  <PlusIcon className='size-6' />
                </header>
              </div>
            </Button>
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
