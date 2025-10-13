/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // for Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)'],
        navbar: ['var(--font-navbar)'],
        main: ['var(--font-main)'],
      },
    },
  },
};
