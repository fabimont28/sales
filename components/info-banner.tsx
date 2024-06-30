export function InfoBanner({ children }: { children: React.ReactNode }) {
  return (
    <article className='my-4 w-full bg-stone-700 text-white'>
      <div className=''>{children}</div>
    </article>
  )
}
