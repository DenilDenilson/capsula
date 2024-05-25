import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        secondary: '#1E2328',
        'primary-100': '#FFE4B3',
        'primary-200': '#FFD78E',
        'primary-300': '#FFD07B',
        'primary-400': '#FFC355',
        'primary-500': '#FFBC42',
        'primary-600': '#E6A93B',
        'primary-700': '#CC9635',
        'primary-800': '#805E21',
        'primary-900': '#33260D'
      }
    }
  },
  plugins: []
}
export default config
