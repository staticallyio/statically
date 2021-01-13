// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  important: true,
  theme: {
    fontFamily: {
      sans: ['Arial, sans-serif'],
    },
    extend: {
      zIndex: {
       '-10': '-10',
      }
    },
  },
  purge: false,
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
