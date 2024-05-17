import type { Config } from 'tailwindcss'

const config: Config = {
  variants: {
    extend: {
      transform: ['hover']
    }
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-plex)'],
        serif: ['var(--font-pp-acma)'],
      },
      backgroundColor: {
        inverted: 'var(--foreground-hex)',
        color: 'var(--background-hex)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor: {
        inverted: 'var(--foreground-hex)',
      }
    },
  },
  plugins: [],
}
export default config
