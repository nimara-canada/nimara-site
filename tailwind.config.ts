import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "secondary-background": "hsl(var(--secondary-background))",
        "hero-background": "hsl(var(--hero-background))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        nim: {
          navy: "hsl(var(--nim-navy))",
          "navy-deep": "hsl(var(--nim-navy-deep))",
          purple: "hsl(var(--nim-purple))",
          mint: "hsl(var(--nim-mint))",
          "mint-dark": "hsl(var(--nim-mint-dark))",
          teal: "hsl(var(--nim-teal))",
          mara: "hsl(var(--nim-mara))",
          "mara-deep": "hsl(var(--nim-mara-deep))",
          slate: "hsl(var(--nim-slate))",
          "slate-dark": "hsl(var(--nim-slate-dark))",
          white: "hsl(var(--nim-white))",
          mist: "hsl(var(--nim-mist))",
          cloud: "hsl(var(--nim-cloud))",
        },
        body: {
          DEFAULT: "hsl(var(--body))",
          muted: "hsl(var(--body-muted))",
        },
        nimara: {
          navy: "hsl(var(--nimara-navy))",
          purple: "hsl(var(--nimara-purple))",
          mint: "hsl(var(--nimara-mint))",
          bg: "hsl(var(--nimara-bg))",
        },
        mint: {
          DEFAULT: "hsl(var(--mint))",
          light: "hsl(var(--mint-light))",
          dark: "hsl(var(--mint-dark))",
          foreground: "hsl(var(--mint-foreground))",
        },
        "purple-section": {
          bg: "hsl(var(--purple-section-bg))",
          card: "hsl(var(--purple-section-card))",
          border: "hsl(var(--purple-section-border))",
          label: "hsl(var(--purple-section-label))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
