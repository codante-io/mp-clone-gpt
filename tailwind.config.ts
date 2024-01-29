import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/utils/*.{ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#7B7B87",
        border: "#565869",
        "background-light": "#343541",
        "background-dark": "#202123",
        "background-chat": "#444654",
      },
    },
  },
  plugins: [],
};
export default config;
