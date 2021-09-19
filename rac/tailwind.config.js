module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '411px',
      sm: '540px',
      smd: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
