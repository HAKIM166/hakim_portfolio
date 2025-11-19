import { defineConfig } from "eslint/config";
import nextPlugin from "eslint-config-next";

export default defineConfig([
  ...nextPlugin,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "tailwind.config.js",
      "postcss.config.mjs",
      "next.config.mjs",
      "eslint.config.mjs",
    ],
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      "quotes": "off",
      "no-useless-escape": "off",
    },
  },
]);
