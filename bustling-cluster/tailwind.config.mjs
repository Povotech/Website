/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": {
          50: "#eef9ff",
          100: "#daf0ff",
          200: "#bce6ff",
          300: "#8fd8ff",
          400: "#5ac0ff",
          500: "#33a2fe",
          600: "#1d84f3",
          700: "#156ce0",
          800: "#1857b5",
          900: "#153e75",
          950: "#142f57",
        },
      },
    },
  },
  plugins: [],
};
