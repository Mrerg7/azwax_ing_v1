/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        desert: {
          sand: 'var(--sand)',
          cream: 'var(--cream)',
          paper: 'var(--paper)',
          terracotta: 'var(--clay)',
          'terracotta-dark': 'var(--clay-deep)',
          sage: 'var(--sage)',
          charcoal: 'var(--ink)',
          warm: 'var(--warm)',
          muted: 'var(--muted)',
          border: 'var(--line)',
          line: 'var(--line-strong)',
          night: 'var(--night)',
          'night-fg': 'var(--night-fg)',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
