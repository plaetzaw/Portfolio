import React from 'react'

const Check = () => {
  return (
    <svg width='334' height='46' viewBox='0 0 334 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d)'>
        <path d='M4 37H288.126L329 1' stroke='#FF7A00' strokeWidth='2' />
      </g>
      <defs>
        <filter id='filter0_d' x='0' y='0.249566' width='333.661' height='45.7504' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0.86 0 0 0 0 1 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>

  )
}

export default Check
