/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend'],
        serif: ['"DM Serif Text"'],
        mono: ['"Space Mono"'],
        body: ['Lexend'],
        display: ['"DM Serif Text"'],
      },
    },
  },
  plugins: [],
};

