/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      Questrial: ["Questrial", "sans-serif"],
      Brygada: ['"Brygada 1918"', "Questrial", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "loader-pattern": "url('/assets/loader.png')",
        "game-pattern": "url('/img/footer-texture.png')",
      },
      colors: {
        ablaze: "#1FAE63",
        textPrimary: "#E1E1E1",
        textSecondary: "#F9F9F9",
        backgroundPrimary: "#000000",
        backgroundSecondary: "#1A1E23",
      },
    },
  },
  plugins: [],
};
