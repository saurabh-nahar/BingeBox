// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chatGPT: '#74AA9C',
      },
      truncate: {
        lines: {
          css: {
            display: '-webkit-box',
            '-webkit-line-clamp': 2, // Number of lines to show before truncating
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          },
        },
      },
    },
  },
  plugins: [],
};
