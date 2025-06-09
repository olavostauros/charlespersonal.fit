/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(59 130 246)', // #3B82F6
          50: 'rgb(239 246 255)',
          500: 'rgb(59 130 246)',
          600: 'rgb(37 99 235)',
          900: 'rgb(30 58 138)',
        },
        secondary: {
          DEFAULT: 'rgb(16 185 129)', // #10B981
          50: 'rgb(236 253 245)',
          500: 'rgb(16 185 129)',
          600: 'rgb(5 150 105)',
          900: 'rgb(6 78 59)',
        },
        accent: {
          DEFAULT: 'rgb(245 158 11)', // #F59E0B
          50: 'rgb(255 251 235)',
          500: 'rgb(245 158 11)',
          600: 'rgb(217 119 6)',
          900: 'rgb(146 64 14)',
        },
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      spacing: {
        'section': '4rem', // 64px
        'section-mobile': '3rem', // 48px
      },
      maxWidth: {
        'container': '72rem', // 1152px
      },
    },
  },
  plugins: [],
}
