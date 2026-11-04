import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080B12',
        charcoal: '#111925',
        'midnight-card': '#111925',
        'midnight-card-2': '#141D2A',
        'midnight-elevated': '#101622',
        'midnight-border': '#202B3B',
        'midnight-accent': '#26364F',
        gold: {
          DEFAULT: '#D8B15A',
          light: '#F1D58A',
        },
        ivory: '#F5F2EA',
        muted: '#BFC4D2',
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'var(--font-cormorant)', 'Cinzel', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'mega-wide': '0.5em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
