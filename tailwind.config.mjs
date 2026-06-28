/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        'pastel-green': {
          DEFAULT: '#6E7753',
          dark: '#5A6243',
          light: '#8A9270',
        },
        clay: {
          DEFAULT: '#B85C48',
          dark: '#8B3D2E',
          light: '#C97A68',
        },
        sage: {
          DEFAULT: '#9CAF88',
          dark: '#7A8F6B',
          light: '#B5C4A8',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          dark: '#E8E2D4',
        },
        soil: {
          DEFAULT: '#5D4037',
          light: '#8D6E63',
        },
      },
    },
  },
  plugins: [],
}
