import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lateef: ["var(--font-lateef)", "serif"],
        goudy: ["var(--font-goudy)", "serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      screens: {
        xs: '480px',
      },
      colors: {
        MainOrange: '#BE704D',
        MainGreen: '#8A9A5B',
        DarkBrown: '#3B2A20',
        Cream: '#F5EDE0'

      },
    },
  },
  plugins: [],
};
export default config;
