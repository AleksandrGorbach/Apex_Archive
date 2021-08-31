module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      firstgreen: '#44A08D',
      secondgreen: '#093637'
    },
    extend: {
        animation: {
    fadeIn: "fadeIn 2s ease-in forwards"
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    }
  }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe', 'responsive', 'motion-reduce'],
    },
  },
  plugins: [],
}
