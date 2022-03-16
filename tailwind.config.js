const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "-webkit-backface-visibility": "visible",
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "-webkit-backface-visibility": "hidden",
      "backface-visibility": "hidden",
    },
  });
});

const transformStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    ".preserve-3d": {
      "transform-style": "preserve-3d",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [backfaceVisibility, transformStyle],
};
