/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        accent: '#6E7753',
        soil: '#5D4037',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
