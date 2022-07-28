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
    },
    fontFamily: {
      body: ['"Assistant"', 'sans-serif'],
      display: ['"Assistant"', 'sans-serif'],
      sans: ['"Assistant"', 'sans-serif'],
      serif: ['"Assistant"', 'sans-serif'],
      mono: ['"Assistant"', 'sans-serif'],
    },

    extend: {
      fontSize: {
        xl_1_5: ['22px', '29px'],
        xl_2_5: ['28px', '37px'],
        xl_5_5: ['52px', '60px'],
        mainHeader: ['82px', '107px'],
        mobileMainHeader: ['38px', '50px'],
      },
      colors: {
        'header-blue': '#4E47F9',
        'contact-bg': '#F4F3FD',
        'card-bg': '#F4F3FD',
        'icon-bg': '#4E47F9',
        success: '#7AD17C',
        red: '#D25C78',
        blue: '#01559A',
        'brown-bg': '#E5E5E5',
        azure: '#E2F7F9',
        white: '#FFFFFF',
      },
      text: {
        medium: 'md:text-xl',
        large: 'lg:text-2xl',
      },
      spacing: {
        5.1: '21px',
        6.5:'26px',
        8.1: '33px',
        9.9: '39px',
        11.5: '46px',
        13: '52px',
        30:'121px',
        35: '142px',
        38: '150px',
        54: '214px',

        banerHight:'780px',
        closeMenu: '73px',
        mobileForm: 'calc(100vw - 40px)',
        formSpace: '922px',
        formBottom: '115px',
        formMinHight: '700px',        
      },

      boxShadow: {
        '4xl': '0px 0px 4px rgba(0,0,0,0.25)',
      },
      height: { header: '95px' },
      minHeight: {
        'screen-50': '50vh',
      },
      // maxHeight: {
      //   closeMenu: '73px',
      // },

      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        'auto-1fr-auto': 'auto 1fr auto',
        '1fr-1fr': '1fr 1fr',
        '1fr-1fr-1fr': '1fr 1fr 1fr',
        'auto-auto-1fr': 'auto auto 1fr',
        '1fr-auto-1fr': '1fr auto 1fr',
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
