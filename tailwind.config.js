/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#0a66c2', // Set your primary color here
          foreground: '#ffffff', // Add a contrasting foreground color if needed
        },
        // Other color definitions...
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a font family
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

