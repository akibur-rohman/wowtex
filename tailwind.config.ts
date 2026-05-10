import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem"
      }
    },
    extend: {
      colors: {
        bg: "#050816",
        secondary: "#0b1120",
        accentBlue: "#00BFFF",
        accentGreen: "#39FF14",
        card: "rgba(255,255,255,0.05)",
        borderSoft: "rgba(255,255,255,0.08)",
        textPrimary: "#FFFFFF",
        textSecondary: "#B8C0CC"
      },
      boxShadow: {
        glowBlue: "0 0 30px rgba(0, 191, 255, 0.25)",
        glowGreen: "0 0 30px rgba(57, 255, 20, 0.2)"
      },
      backgroundImage: {
        glowGradient:
          "radial-gradient(circle at top, rgba(0,191,255,0.2), transparent 35%), radial-gradient(circle at bottom right, rgba(57,255,20,0.14), transparent 45%)"
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
