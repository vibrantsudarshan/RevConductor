const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    colors: {
      inherit: colors.inherit,
      current: '#5c6c78',
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      lightgray: '#F1F4F5',
      // https://javisperez.github.io/tailwindcolorshades/?brand=f08200
      brand: {
        'DEFAULT': '#f08200',
        '50': '#fef9f2',
        '100': '#fef3e6',
        '200': '#fbe0bf',
        '300': '#f9cd99',
        '400': '#f5a84d',
        '500': '#f08200',
        '600': '#d87500',
        '700': '#b46200',
        '800': '#904e00',
        '900': '#764000',
      },
      // https://javisperez.github.io/tailwindcolorshades/?gray=5c6c78
      gray: {
        'DEFAULT': '#767676',
        '50': '#f7f8f8',
        '100': '#eff0f2',
        '200': '#d6dadd',
        '300': '#bec4c9',
        '400': '#8d98a1',
        '500': '#767676',
        '600': '#53616c',
        '700': '#45515a',
        '800': '#374148',
        '900': '#2d353b',
      },
      danger: {
        DEFAULT: '#ff2800',
      },
      success: {
        DEFAULT: '#28a745',
      },
      warning: {
        DEFAULT: '#ffc107',
      },
      info: {
        DEFAULT: '#17a2b8',
      },
    },
    fontSize: {
      xs: ['0.625rem', { lineHeight: '0.75rem' }], // 10/12
      ms: ['0.725rem', { lineHeight: '0.925rem'}],
      sm: ['0.875rem', { lineHeight: '1.125rem' }], // 14/18
      base: ['1rem', { lineHeight: '1.375rem' }], // 16/22
      lg: ['1.188rem', { lineHeight: '1.5rem' }], // 19/24
      xl: ['1.75rem', { lineHeight: '2.0rem' }], // 28/32
      '2xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36/40
      '3xl': ['2.625rem', { lineHeight: '2.875rem' }], // 42/46
    },
    container: {
      center: true,
    },
  },
  variants: {},
}
