import { SVGProps } from 'react'

export function OffersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 48 48'
      {...props}
    >
      <circle
        cx='13.979'
        cy='13.016'
        r='7.516'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='34.021'
        cy='34.984'
        r='7.516'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m10.973 42.5l26.054-37'
      />
    </svg>
  )
}
