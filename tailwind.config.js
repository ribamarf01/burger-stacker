/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "bun": "#d17d00",
        "lettuce": "#44b200",
        "tomato": "#da2e2e",
        "cheese": "#ffce00",
        "burger": "#603813",
        "purple-neon": '#cc00ff',
        "pink-neon": '#ff0063'
      },
      fontFamily: {
        'title': ['Sacramento', 'cursive'],
        'common': ['Satisfy', 'cursive']
      }
    },
  },
  plugins: [],
}
