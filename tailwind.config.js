/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        carousel: 'carousel 32s linear infinite',
        carouselMobile: 'carousel 46s linear infinite',

      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(-560px)' },
          '100%': { transform: 'translateX(-4040px)' },

        },
      },
    },
  },
  plugins: [
  ],
}
