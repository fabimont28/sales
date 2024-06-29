import Link from 'next/link'
import { Search } from './search'
import { ShopCartIcon } from './icons/shop-cart'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='flex w-full items-center justify-between border-b border-gray-300/60 py-6 text-sm'>
      <nav className='flex items-center gap-8'>
        <h1 className='font-bold'>
          <Link href='/'>Inicio</Link>
        </h1>
        <Link href='/'>Categorías</Link>
        <Link href='/'>Nuevos productos</Link>
        <Link href='/'>Nosotros</Link>
      </nav>
      <div className='flex items-center gap-8'>
        <div className='flex gap-4'>
          <Search />
          <button>
            <ShopCartIcon className='size-6' />
          </button>
        </div>
        <div>
          <Button
            asChild
            variant='link'
          >
            <Link href='/login'>Iniciar sesión</Link>
          </Button>
          <Button
            asChild
            variant='link'
          >
            <Link href='/login'>Registrarme</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
