/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        user: "#2563eb",   // blue
        agent: "#f1f5f9",  // light gray
      },
    },
  },
  plugins: [],
}
