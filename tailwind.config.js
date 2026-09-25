/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#060B18',      // Deep Midnight Void
          slate: '#0F172A',     // Rich Slate / Card Surface
          slateLight: '#1E293B',
          blue: '#0066FF',      // Enterprise Royal Blue
          blueHover: '#0052CC',
          cyan: '#00D2FF',      // Electric Cyan / Fiber Optic
          cyanGlow: 'rgba(0, 210, 255, 0.4)',
          emerald: '#10B981',   // NOC status green
          muted: '#64748B',     // Muted Slate text
          light: '#F8FAFC',     // High contrast light text
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(0, 102, 255, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(0, 210, 255, 0.45)',
        'glow-emerald': '0 0 20px -4px rgba(16, 185, 129, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        'grid-blue': 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'beam': 'beam 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
}

