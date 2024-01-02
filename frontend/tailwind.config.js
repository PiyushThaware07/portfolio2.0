/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': { width: '30%' },
          '100%': { width: '100%' },
        },
        navbar: { // Wrap @keyframes in a keyframes property
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.5,
          },
        },
      },
      animation: {
        loading: 'loading 5s linear',
        navbar: 'pulse .5s cubic-bezier(0.4, 0, 0.6, 1)', // Correct placement
      },
    },
  },
  plugins: [],
};
