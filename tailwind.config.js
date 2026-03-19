/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SAM Brand Colors
        'sam-black': '#000000',
        'sam-yellow': '#FCF06D',
        'sam-white': '#FFFFFF',
        'sam-gray': '#D9D9D9',
        'sam-gray-light': '#F5F5F5',
        'sam-gray-bg': '#F9F9F9',
      },
      fontFamily: {
        // ————————————————————————————————————————
        // TYPOGRAPHIE : Neue Haas Grotesk Display Pro
        // Pour intégrer la police custom, remplacer 'Inter' ci-dessous
        // par les @font-face déclarés dans src/index.css, ex :
        //   sans: ['"Neue Haas Grotesk Display Pro"', 'Inter', 'sans-serif']
        // ————————————————————————————————————————
        sans: ['"Neue Haas Grotesk Display"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(42px, 6vw, 80px)',
        'h2': 'clamp(28px, 4vw, 52px)',
        'h3': 'clamp(20px, 2.5vw, 28px)',
        'body': '18px',
        'body-sm': '16px',
      },
      lineHeight: {
        'relaxed': '1.7',
        'loose': '1.85',
      },
      letterSpacing: {
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'wider-sm': '0.08em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
        '42': '10.5rem',
        '128': '32rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
