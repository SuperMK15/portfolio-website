/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#e0e0e0",
        "terminal-green": "#00ff41",
        "terminal-dim": "#00cc33",
        "terminal-dark": "#009922",
        accent: "#00ff41",
        surface: "#111111",
        "surface-light": "#1a1a1a",
        border: "#222222",
        "border-light": "#333333",
        muted: "#666666",
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
