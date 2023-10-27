import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{html,js}" ],
  theme: {
    extend: {
      serif: [ "'Lora', serif", ...defaultTheme.fontFamily.serif ],
      sans: [ "'Montserrat', sans-serif", ...defaultTheme.fontFamily.sans ],
      mono: [ "'Roboto Mono', monospace", ...defaultTheme.fontFamily.mono ],
    },
  },
  plugins: [],
}

