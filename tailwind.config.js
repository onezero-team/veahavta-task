module.exports = {
  // mode: 'jit',
  // // These paths are just examples, customize them to match your project structure
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: { max: '850px' },
      sm: { max: '1100px' },
      'min-sm': {min: '850px' , max: '1100px'},
      'min-md': { min: '1100px' },
      md: { min: '1100px', max: '1500px' },
      lg: { min: '1500px' },
    },
    colors: {
      dark: 'black',
      grey: '#DDD',
      light: 'white',
      primary: '#01559A',
      accent: '#D25C78',
      red: '#D25C78',
      'light-purple': '#E6E4FD',
      'accent-purple': '#4E47F9',
      'opaque-dark': 'rgba(0,0,0,.5)'
    },
    fontFamily: {
      body: ['"Assistant"', 'sans-serif'],
      display: ['"Assistant"', 'sans-serif'],
      sans: ['"Assistant"', 'sans-serif'],
      serif: ['"Assistant"', 'sans-serif'],
      mono: ['"Assistant"', 'sans-serif'],
    },
    fontSize: {
      '2xl': ['82px', '1.15'],
      '2xl-mobile': [ '38px','1.15'],
      xl: ['52px', '1.15'],
      'xl-mobile': [ '36px','1.15'],
      lg: ['42px', '1.3'],
      md: ['28px', '1.3'],
      sm: ['22px', '1.3'],
      paragraph: ['18px', '1.6'],
      'sm-paragraph': ['16px', '2.1']
    },
    extend: {
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
