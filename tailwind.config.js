const defaultTheme = require('tailwindcss/defaultTheme');

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  important: true,
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
    },
  },
  purge: false,
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
