module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGradientStart: '#00F0FF',
        customGradientMid: '#5200FF',
        customGradientEnd: '#FF2DF7',
      },
      borderImage: {
        gradient: 'linear-gradient(267.03deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
      },
    },
  },
  plugins: [],
};