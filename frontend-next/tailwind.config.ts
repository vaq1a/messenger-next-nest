import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        ssm: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      colors: {
        'primary': 'rgba(97, 94, 240)',
        'transparent': 'transparent',
        'red': '#e11a1a',
        'black': '#222b2f',
        'grey-darkest': '#364349',
        'grey-darker': '#596a73',
        'grey-dark': '#70818a',
        'grey': '#9babb4',
      },
      gridTemplateColumns: {
        'main-auth-container': '88px 349px auto'
      },
      boxShadow: {
        'header': '0 0 24px 0 rgba(0,0,0,0.08)',
        'create-button': '0 0 15px 0 rgba(65, 62, 189, 0.24)'
      }
    },
  },
  plugins: [],
}
export default config
