/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafaf8',
        foreground: '#1a1a1a',
        muted: '#3d3d3d',
        border: '#1a1a1a',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        column: '680px',
      },
    },
  },
  plugins: [],
}
