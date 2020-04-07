import React from 'react';

const FacebookIcon = () => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='cursor-pointer mr-4'
    >
      <g clipPath='url(#fb)'>
        <path
          d='M27.442 0H1.6C1.17565 0 0.768686 0.16857 0.468628 0.468628C0.16857 0.768686 0 1.17565 0 1.6V27.442C0 27.6521 0.0413843 27.8602 0.121792 28.0543C0.202199 28.2484 0.320054 28.4248 0.468628 28.5734C0.617202 28.7219 0.793584 28.8398 0.987705 28.9202C1.18183 29.0006 1.38988 29.042 1.6 29.042H14.523V17.635H11.051V13.485H14.523V10.179C14.523 6.428 17.123 4.385 20.476 4.385C22.076 4.385 23.804 4.506 24.205 4.559V8.477H21.535C19.712 8.477 19.364 9.339 19.364 10.61V13.485H23.708L23.141 17.634H19.364V29.045H27.442C27.8663 29.045 28.2733 28.8764 28.5734 28.5764C28.8734 28.2763 29.042 27.8693 29.042 27.445V1.6C29.042 1.17565 28.8734 0.768686 28.5734 0.468628C28.2733 0.16857 27.8663 0 27.442 0V0Z'
          fill='#008DFF'
        />
      </g>
      <defs>
        <clipPath id='fb'>
          <rect width='29.045' height='29.045' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;