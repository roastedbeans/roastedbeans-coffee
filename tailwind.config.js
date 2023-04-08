/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    boxShadow: {
      darker: "0px 0px 6px 1px rgba(0, 0, 0, 0.4)",
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner:
        "inset 50px 0px 100px -50px rgba(0,0,0,.2), inset -50px 0px 100px -50px rgba(0,0,0,.2)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      focus: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    extend: {
      colors: {
        "primary-color": "#540b0e",
        "secondary-color": "#9e2a2b",
        "tertiary-color": "#e09f3e",
        "quaternary-color": "#335c67",
        "accent-color": "#f2eee5",
      },
      fontFamily: {
        Arvo: ["Arvo", "serif"],
        Play: ["Play", "sans-serif"],
        Lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
