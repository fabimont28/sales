import Link from 'next/link'
import { Search } from './search-input'
import { ShopCartIcon } from './icons/shop-cart'
import { Button } from './ui/button'
import { DropNavigationMenu } from './header/Navigation-Menu'

export default function Header() {
  return (
    <header className='flex w-full items-center justify-between border-b border-gray-300/60 py-6 text-sm'>
      <DropNavigationMenu />

      <section className='flex items-center gap-8'>
        <article className='flex gap-4'>
          <Search />
          <button>
            <ShopCartIcon className='size-6' />
          </button>
        </article>
        <article>
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
        </article>
      </section>
    </header>
  )
}
