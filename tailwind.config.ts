import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        inherit: "inherit",
      },
    },
  },
};

export default config;
