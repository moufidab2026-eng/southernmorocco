// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          night: '#0D1117',
          navy: '#0F3460',
          ocean: '#1A6FA5',
          oasis: '#16C79A',
          sahara: '#E8B86D',
          dune: '#C4883A',
          sand: '#F5E6C8',
          paper: '#F8F5F0',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  // Enable RTL utilities
  corePlugins: {
    preflight: true,
  },
};

export default config;
