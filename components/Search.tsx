import { SearchIcon } from './icons/search'
import { Input } from './ui/input'

export function Search() {
  return (
    <div className='relative flex items-center gap-2 text-sm'>
      <Input
        type='search'
        placeholder='Buscar productos'
        className='w-full rounded-md border border-gray-300 py-2 pl-10 pr-4'
      />
      <SearchIcon className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />
    </div>
  )
}
