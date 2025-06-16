import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e', // A vibrant green color
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('daisyui'),
    addDynamicIconSelectors(),
    nextui({
      themes: {
        light: {
          layout: {
            foreground: '#000000',
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            foreground: '#ffffff',
          }, // dark theme colors
        },
      },
    }),
  ],
};
export default config;
