/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          2: "#111118",
          3: "#18181f",
        },
        border: {
          subtle: "rgba(255,255,255,0.07)",
          hover: "rgba(255,255,255,0.14)",
        },
        offer: "#22c55e",
        request: "#f59e0b",
        accent: {
          DEFAULT: "#6366f1",
          light: "#a5b4fc",
          glow: "rgba(99,102,241,0.25)",
        },
        muted: "#7a7a90",
        dim: "#4a4a60",
      },
      backgroundImage: {
        "grid-subtle":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};