import { Container } from '../container'
import { InfoBanner } from '../info-banner'

export function DiscountBanner() {
  return (
    <InfoBanner>
      <Container>
        <div className='mx-4 flex items-center py-12'>
          <div className='flex flex-col'>
            <span className='-rotate-3 text-8xl font-extrabold'>50%</span>
            <p className='mt-4 text-xl font-bold'>De descuento en productos seleccionados</p>
          </div>
        </div>
      </Container>
    </InfoBanner>
  )
}
