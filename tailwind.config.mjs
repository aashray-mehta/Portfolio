/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: '#0c0b09',
          text: '#e8e4dc',
          'text-secondary': '#9b958c',
          'text-muted': '#5c5750',
          border: '#252320',
          'border-light': '#3a3632',
          surface: '#151411',
        },
        status: {
          live: '#22c55e',
          dev: '#eab308',
          closed: '#ef4444',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
