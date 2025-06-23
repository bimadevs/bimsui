import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "pulse-slow": {
          '0%, 100%': {
            transform: 'translateX(-100%)',
          },
          '50%': {
            transform: 'translateX(100%)',
          },
        },
        particle: {
          '0%': {
            transform: 'translate(var(--tx-start), var(--ty-start)) scale(0)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translate(var(--tx-end), var(--ty-end)) scale(1)',
            opacity: '0'
          }
        }
      },
      animation: {
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        'pulse-bg': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'particle': 'particle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
