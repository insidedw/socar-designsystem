/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: 'var(--white)',
      blue010: 'var(--blue010)',
      blue020: 'var(--blue020)',
      blue030: 'var(--blue030)',
      blue040: 'var(--blue040)',
      blue050: 'var(--blue050)', //brand color
      blue060: 'var(--blue060)',
      blue070: 'var(--blue070)',
      blue080: 'var(--blue080)',
      coral010: 'var(--coral010)',
      coral020: 'var(--coral020)',
      coral030: 'var(--coral030)',
      coral040: 'var(--coral040)',
      coral050: 'var(--coral050)', //brand color
      coral060: 'var(--coral060)',
      coral070: 'var(--coral070)',
      coral080: 'var(--coral080)',
      navy050: 'var(--navy050)',// sub color
      navy060: 'var(--navy060)',// sub color
      red050: 'var(--red050)',// sub color
      yellow050: 'var(--yellow050)',// sub color
      yellow060: 'var(--yellow060)',// sub color
      socarBusiness050: 'var(--socarBusiness050)',//service color
      socarPlan050: 'var(--socarPlan050)',//service color
      socarPlus050: 'var(--socarPlus050)',//service color
      grey005: 'var(--grey005)',
      grey010: 'var(--grey010)',
      grey020: 'var(--grey020)',
      grey030: 'var(--grey030)',
      grey040: 'var(--grey040)',
      grey050: 'var(--grey050)',
      grey060: 'var(--grey060)',
      grey070: 'var(--grey070)',
      grey080: 'var(--grey080)',
      backgroundBase: 'var(--backgroundBase)',
      backgroundElevated: 'var(--backgroundElevated)',
      backgroundGroupedContent: 'var(--backgroundGroupedContent)',
      backgroundGroupedBase: 'var(--backgroundGroupedBase)',
      dimThick: 'var(--thick)',
      dimBasic: 'var(--basic)',
      dimThin: 'var(--thin)',
      pressed: 'var(--pressed)',
      borderBasic: 'var(--borderBasic)',
      borderBasic2: 'var(--borderBasic2)',
      shadowBasic: 'var(--shadowBasic)',
      shadowThin: 'var(--shadowThin)',
      textPrimary: 'var(--textPrimary)',
      textSecondary: 'var(--textSecondary)',
      disablePlaceholder: 'var(--disablePlaceholder)',

    },
    extend: {
      lineHeight: {
        'socar-large': '1.33',
        'socar-regular': '1.43',
      },
      fontFamily: {
        'sans': ['"SpoqaHanSansNeo-Regular"', ...defaultTheme.fontFamily.sans]
      },
      opacity: {
        '85': '.85',
      }

    },
  },
  plugins: [
    plugin(function ({addBase, theme}) {
      addBase({
        'h1': { fontSize: '28px', fontWeight: 'bold', lineHeight: '36px'},
        'h2': { fontSize: '24px', fontWeight: 'bold', lineHeight: '32px'}
      })
    })
  ],
}

