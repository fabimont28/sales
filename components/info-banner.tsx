export function InfoBanner({ children }: { children: React.ReactNode }) {
  return (
    <article className='w-full bg-stone-700 text-white'>
      <div className=''>{children}</div>
    </article>
  )
}
