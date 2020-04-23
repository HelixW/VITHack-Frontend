module.exports = {
  theme: {
    screens: {
      xsm: '324px',
      sm: '870px',
      md: '1140px',
      lg: '1600px',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1.125rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      backgroundColor: {
        'hack-blue': '#008DFF',
        'hack-yellow': '#FFBD3B',
        'hack-pink': '#EA3883',
        'hack-green': '#BDE321',
        'hack-black': '#131313',
      },
      borderColor: {
        'hack-blue': '#008DFF',
      },
      fontSize: {
        title: '3rem',
        'sm-title': '2.5rem',
        heading: '2.5rem',
        'sm-heading': '2rem',
        'sub-heading': '1.5rem',
        'sm-sub-heading': '1.25rem',
        footer: '0.875rem',
        'sm-footer': '0.625rem',
      },
      textColor: {
        'hack-blue': '#008DFF',
        'hack-yellow': '#FFBD3B',
        'hack-pink': '#EA3883',
        'hack-green': '#BDE321',
        'hack-black': '#131313',
      },
      spacing: {
        14: '3.5rem',
        28: '7rem',
        35: '8.75rem',
        48: '12rem',
        80: '20rem',
        96: '24rem',
      },
      height: {
        18: '4.5rem',
      },
      scale: {
        '-50': '-0.5',
      },
    },
  },
  variants: { display: ['responsive', 'hover', 'focus'] },
  plugins: [],
};
