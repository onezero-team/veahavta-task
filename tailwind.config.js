module.exports = {
  // mode: 'jit',
  // // These paths are just examples, customize them to match your project structure
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      dark: 'black',
      light: 'white',
      primary: '#01559A',
      accent: '#D25C78',
      red: '#D25C78',
      purple: '#D3D1FC',
      lightPurple: '#F4F3FD',
      darkPurple: '#4E47F9',
    },

    screens: {
      mobile: [{ min: '330px', max: '639px' }],

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1530px',
      desktop: '1920px',
    },
    fontFamily: {
      body: ['"Assistant"', 'sans-serif'],
      display: ['"Assistant"', 'sans-serif'],
      sans: ['"Assistant"', 'sans-serif'],
      serif: ['"Assistant"', 'sans-serif'],
      mono: ['"Assistant"', 'sans-serif'],
    },
    extend: {
      spacing: {
        100: '26rem',
        110: '31rem',
        125: '40rem',
        150: '45rem',
        160: '55rem',
        200: '70rem',
        210: '80rem',
        220: '90rem',
        240: '110rem',
      },
      colors: {
        'header-blue': '#4E47F9',
        'contact-bg': '#F4F3FD',
        'icon-bg': '#4E47F9',
        success: '#7AD17C',
        red: '#D25C78',
        blue: '#01559A',
        'brown-bg': '#E5E5E5',
        azure: '#E2F7F9',
      },

      text: {
        medium: 'md:text-xl',
        large: 'lg:text-2xl',
      },
      boxShadow: {
        '4xl': '0px 0px 4px rgba(0,0,0,0.25)',
      },
      height: { header: '95px' },
      minHeight: {
        'screen-50': '50vh',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        'auto-1fr-auto': 'auto 1fr auto',
        'auto-auto-1fr': 'auto auto 1fr',
        '2-auto': 'auto auto',
        '4-auto': 'auto auto auto auto',
        '4-auto-1fr': 'auto auto auto auto 1fr',
      },

      gridTemplateRows: {
        '1fr': '1fr',
        'auto-1fr': 'auto 1fr',
      },
    },
  },
  plugins: [],
}
