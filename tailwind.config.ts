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
        // Martech Blue Color Palette
        martech: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
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
          colors: {
            background: '#FDFBD4',
            foreground: '#0f172a',
            primary: {
              DEFAULT: '#0ea5e9',
              500: '#0ea5e9',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#16a34a',
              500: '#16a34a',
            },
          },
        },
        // Martech theme
        martech: {
          colors: {
            background: '#DA9C14,',
            foreground: '#1e293b',
            primary: {
              DEFAULT: '#2563eb',
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              950: '#172554',
            },
            secondary: {
              DEFAULT: '#1e40af',
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              950: '#172554',
            },
            accent: {
              DEFAULT: '#3b82f6',
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              950: '#172554',
            },
          },
        },
      },
    })
  ],
};
export default config;
