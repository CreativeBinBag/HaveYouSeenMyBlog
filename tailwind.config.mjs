import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"VT323"', 'monospace'],
        'serif': ['"IBM Plex Serif"', 'serif'],
      },
      colors: {
        // GBA Palette
        'gba-cream': '#F8F5E6',     // The color of old Nintendo manuals
        'gba-text': '#2D2B55',      // Soft dark ink
        'gba-dark': '#211F3D',      // Dark Mode Background (Deep Space)
        'gba-light': '#FFF9F0',     // Light Mode Background
        
        // Accents
        'p-pink': '#FF8E72',        // Kirby Pink
        'p-mint': '#76E5B1',        // Bulbasaur Teal
        'p-blue': '#6C5CE7',        // GBA Indigo
        'p-yellow': '#FDCB6E',      // Pikachu Yellow
      },
      boxShadow: {
        'pixel-sm': '3px 3px 0px 0px rgba(0,0,0,0.15)',
        'pixel-md': '5px 5px 0px 0px rgba(0,0,0,0.15)',
        'pixel-lg': '8px 8px 0px 0px rgba(0,0,0,0.15)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          }
        }
      })
    },
  },
  plugins: [typography],
}