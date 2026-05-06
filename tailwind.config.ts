import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ny-black': '#0a0a0a',
        'ny-gray': '#6b6b6b',
        'ny-light': '#fafaf9',
        'ny-border': '#d4d2cf',
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['SF Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'dot-pulse': 'dotBreath 3.5s ease-in-out infinite',
        'phase-pulse': 'phasePulse 2.8s ease-in-out infinite',
      },
      keyframes: {
        dotBreath: {
          '0%, 100%': { boxShadow: '0 0 0 0px rgba(10,10,10,0.15)' },
          '50%': { boxShadow: '0 0 0 10px rgba(10,10,10,0)' },
        },
        phasePulse: {
          '0%, 100%': { boxShadow: '0 0 0 6px rgba(10,10,10,0.04)' },
          '50%': { boxShadow: '0 0 0 14px rgba(10,10,10,0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;