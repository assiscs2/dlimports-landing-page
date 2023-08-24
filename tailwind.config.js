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
        marquee: 'marquee 32s linear infinite',
        marquee2: 'marquee2 42s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(-410%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-1%)' },
          '100%': { transform: 'translateX(-1007%)' },
        },
      },
    },
  },
  plugins: [
  ],
}
