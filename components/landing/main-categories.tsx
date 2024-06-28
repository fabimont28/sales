import { HeadphonesIcon } from '../icons/headphones'
import { MouseIcon } from '../icons/mouse'
import { PlusIcon } from '../icons/plus'
import { UsbIcon } from '../icons/usb'
import { Button } from '../ui/button'

export function MainCategories() {
  return (
    <div className='flex gap-4 text-stone-700/90'>
      <Button
        variant='outline'
        className='rounded-2xl border-gray-300 bg-transparent px-3 py-2'
      >
        <div className='flex items-center gap-4'>
          <h3>Audífonos</h3>
          <HeadphonesIcon className='size-6' />
        </div>
      </Button>
      <Button
        variant='outline'
        className='rounded-2xl border-gray-300 bg-transparent px-3 py-2'
      >
        <div className='flex items-center gap-4'>
          <h3>Periféricos</h3>
          <MouseIcon className='size-6' />
        </div>
      </Button>
      <Button
        variant='outline'
        className='rounded-2xl border-gray-300 bg-transparent px-3 py-2'
      >
        <div className='flex items-center gap-4'>
          <h3>Accesorios</h3>
          <UsbIcon className='text-current/60 size-6' />
        </div>
      </Button>
      <Button
        variant='outline'
        className='rounded-2xl border-gray-300 bg-transparent px-3 py-2'
      >
        <div className='flex items-center gap-4'>
          Otros
          <PlusIcon className='size-6' />
        </div>
      </Button>
    </div>
  )
}
