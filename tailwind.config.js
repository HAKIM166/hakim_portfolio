/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
        container: {
      center: true,
      padding: "15px",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    fontFamily: {
      primary: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
    },

    extend: {
      colors: {
        // لون الخلفية الأساسية للصفحة
        background: "#1c1c22",     // غامق أزرق تقريبًا زي الفيديو

        // لون الـ primary اللي بيتستخدم للـ Button و العناصر المهمة
        primary: "#020617",

        accent: {
          // DEFAULT: "#00ff99",
          DEFAULT: "#2196f3",
          // hover: "#00e187",
          hover:"#1976d2",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
