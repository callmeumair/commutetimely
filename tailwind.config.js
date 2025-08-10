/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        // Brand colors using CSS variables
        brand: {
          DEFAULT: "hsl(var(--brand-primary))",
          light: "hsl(var(--brand-primary-light))",
          dark: "hsl(var(--brand-primary-dark))",
          secondary: "hsl(var(--brand-secondary))",
          accent: "hsl(var(--brand-accent))",
          glass: "rgba(255,255,255,0.08)",
        },
        // Neutral colors using CSS variables
        neutral: {
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
        },
        // Status colors using CSS variables
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
        info: "hsl(var(--info))",
        glass: "rgba(255,255,255,0.08)",
        // Enhanced color palette for better contrast
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
      },
      lineHeight: {
        'none': 'var(--line-height-none)',
        'tight': 'var(--line-height-tight)',
        'snug': 'var(--line-height-snug)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
      },
      spacing: {
        // CSS variable spacing scale
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
        '5xl': 'var(--space-5xl)',
        '6xl': 'var(--space-6xl)',
        // Extended spacing scale
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '88': '22rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
        '102': '25.5rem',
        '106': '26.5rem',
        '110': '27.5rem',
        '114': '28.5rem',
        '118': '29.5rem',
        '122': '30.5rem',
        '126': '31.5rem',
        '128': '32rem',
        '130': '32.5rem',
        '134': '33.5rem',
        '138': '34.5rem',
        '142': '35.5rem',
        '144': '36rem',
        '146': '36.5rem',
        '150': '37.5rem',
        '154': '38.5rem',
        '158': '39.5rem',
        '162': '40.5rem',
        '166': '41.5rem',
        '170': '42.5rem',
        '174': '43.5rem',
        '178': '44.5rem',
        '182': '45.5rem',
        '186': '46.5rem',
        '190': '47.5rem',
        '194': '48.5rem',
        '198': '49.5rem',
        '200': '50rem',
        '204': '51rem',
        '208': '52rem',
        '212': '53rem',
        '216': '54rem',
        '220': '55rem',
        '224': '56rem',
        '228': '57rem',
        '232': '58rem',
        '236': '59rem',
        '240': '60rem',
        '244': '61rem',
        '248': '62rem',
        '252': '63rem',
        '256': '64rem',
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
        // Enhanced fadeIn animation with better easing
        "fadeIn": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)" 
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)" 
          },
        },
        // Enhanced slideDown animation
        "slideDown": {
          "0%": { 
            opacity: "0",
            transform: "translateY(-100%)" 
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)" 
          },
        },
        // Enhanced scaleIn animation
        "scaleIn": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.9)" 
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1)" 
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in-center": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        // Enhanced animations with prefers-reduced-motion support
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // New enhanced animations using CSS variables
        "fadeIn": "fadeIn var(--duration-slow) cubic-bezier(0.4, 0, 0.2, 1)",
        "slideDown": "slideDown var(--duration-slow) cubic-bezier(0.4, 0, 0.2, 1)",
        "scaleIn": "scaleIn var(--duration-slow) cubic-bezier(0.4, 0, 0.2, 1)",
        // Existing animations
        "fade-in": "fade-in var(--duration-slow) ease-out",
        "slide-in-left": "slide-in-left var(--duration-slow) ease-out",
        "slide-in-right": "slide-in-right var(--duration-slow) ease-out",
        "scale-in": "scale-in var(--duration-slow) ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "fade-in-up": "fade-in-up var(--duration-slow) ease-out",
        "fade-in-down": "fade-in-down var(--duration-slow) ease-out",
        "fade-in-left": "fade-in-left var(--duration-slow) ease-out",
        "fade-in-right": "fade-in-right var(--duration-slow) ease-out",
        "scale-in-center": "scale-in-center var(--duration-slow) ease-out",
        "slide-up": "slide-up var(--duration-slow) ease-out",
        "slide-down": "slide-down var(--duration-slow) ease-out",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        neumorph: "4px 4px 16px #1a202c, -4px -4px 16px #2d3748",
        'teal-glow': '0 0 20px rgba(46, 191, 165, 0.3)',
        'teal-glow-lg': '0 0 40px rgba(46, 191, 165, 0.4)',
        'amber-glow': '0 0 20px rgba(255, 199, 115, 0.3)',
        'amber-glow-lg': '0 0 40px rgba(255, 199, 115, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-blobs': 'url(/blobs.svg)',
        'gradient-teal': 'linear-gradient(135deg, #2EBFA5 0%, #1E8372 100%)',
        'gradient-amber': 'linear-gradient(135deg, #FFC773 0%, #F59E0B 100%)',
        'gradient-mixed': 'linear-gradient(135deg, #2EBFA5 0%, #FFC773 50%, #1E8372 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for prefers-reduced-motion support
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.motion-safe\\:animate-fadeIn': {
          '@media (prefers-reduced-motion: no-preference)': {
            animation: theme('animation.fadeIn'),
          },
        },
        '.motion-safe\\:animate-slideDown': {
          '@media (prefers-reduced-motion: no-preference)': {
            animation: theme('animation.slideDown'),
          },
        },
        '.motion-safe\\:animate-scaleIn': {
          '@media (prefers-reduced-motion: no-preference)': {
            animation: theme('animation.scaleIn'),
          },
        },
        '.motion-reduce\\:animate-none': {
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        },
        // Additional motion-safe utilities
        '.motion-safe\\:transition-all': {
          '@media (prefers-reduced-motion: no-preference)': {
            transition: `all ${theme('transitionDuration.normal')} ${theme('transitionTimingFunction.smooth')}`,
          },
        },
        '.motion-safe\\:hover\\:transform': {
          '@media (prefers-reduced-motion: no-preference)': {
            transition: `transform ${theme('transitionDuration.normal')} ${theme('transitionTimingFunction.smooth')}`,
          },
        },
        '.motion-safe\\:hover\\:scale': {
          '@media (prefers-reduced-motion: no-preference)': {
            transition: `transform ${theme('transitionDuration.normal')} ${theme('transitionTimingFunction.smooth')}`,
          },
        },
        // Motion-reduce utilities
        '.motion-reduce\\:transition-none': {
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        },
        '.motion-reduce\\:transform-none': {
          '@media (prefers-reduced-motion: reduce)': {
            transform: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 