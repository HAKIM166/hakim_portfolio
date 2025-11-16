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

      // ملفات نُستثنيها من التحذيرات
      "tailwind.config.js",
      "postcss.config.mjs",
      "next.config.mjs",
      "eslint.config.mjs"
    ],
  },
]);
