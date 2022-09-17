/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,tsx}'],
  theme: {
    extend: {
      colors: {
        'body': '#f8f9fa',
        'silver': {
          '100': '#d2d9df',
          '200': '#b6c1cc',
          '300': '#9dabb9',
          '400': '#8597a9',
          '600': '#6b7c90',
          '800': '#556074',
          '900': '#41475a',
          'input': '#f6f7f9',
        },
        'blue': {
          '400': '#4BA5FD',
          '500': '#4495e4',
        },
      },
      height: {
        'hug': '2.75rem',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
