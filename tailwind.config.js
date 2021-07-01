module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "brown-pattern": "url('https://i.imgur.com/6DDGW53.png')",
        "blurred-crowd": "url('https://i.imgur.com/6MWF6NL.png')",
        "blurred-brightened-crowd": "url('https://i.imgur.com/Q5zhlwA.png')",
        "two-times-crowd" : "url('https://i.imgur.com/5foLrpZ.png')"
      }),
      colors: {
        green: {
          primary: "#1c6e28",
          dark: "#065721",
          darker: "#094b1e",
        },
      },
      fontFamily: {
        Poppins: '"Poppins", Helvetica, Arial, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
