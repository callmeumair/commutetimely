/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Color Palette with Enhanced Variations
        'dark': {
          950: '#0a0a0a', // Main background
          900: '#111111', // Card backgrounds
          800: '#1a1a1a', // Slightly lighter cards
          700: '#262626', // Elevated surfaces
          600: '#404040', // Medium surfaces
        },
        'blue': {
          300: '#93c5fd', // Very light blue
          400: '#60a5fa', // Light blue
          500: '#3b82f6', // Primary blue
          600: '#2563eb', // Darker blue
          700: '#1d4ed8', // Even darker blue
          800: '#1e40af', // Deep blue
        },
        'cyan': {
          200: '#a5f3fc', // Very light cyan
          300: '#67e8f9', // Light cyan
          400: '#22d3ee', // Cyan
          500: '#06b6d4', // Primary cyan
          600: '#0891b2', // Darker cyan
          700: '#0e7490', // Deep cyan
        },
        'purple': {
          300: '#c4b5fd', // Very light purple
          400: '#a78bfa', // Light purple
          500: '#8b5cf6', // Primary purple
          600: '#7c3aed', // Darker purple
          700: '#6d28d9', // Even darker purple
          800: '#5b21b6', // Deep purple
        },
        'teal': {
          300: '#5eead4', // Light teal
          400: '#2dd4bf', // Teal accent
          500: '#14b8a6', // Darker teal
          600: '#0d9488', // Deep teal
        },
        'green': {
          300: '#86efac', // Light green
          400: '#4ade80', // Green accent
          500: '#22c55e', // Darker green
          600: '#16a34a', // Deep green
        },
        'orange': {
          300: '#fdba74', // Light orange
          400: '#fb923c', // Orange accent
          500: '#f97316', // Darker orange
          600: '#ea580c', // Deep orange
        },
        'pink': {
          300: '#f9a8d4', // Light pink
          400: '#f472b6', // Pink accent
          500: '#ec4899', // Darker pink
          600: '#db2777', // Deep pink
        },
        'gray': {
          100: '#f3f4f6', // Very light gray
          200: '#e5e7eb', // Very light gray
          300: '#d1d5db', // Light gray text
          400: '#9ca3af', // Medium gray text
          500: '#6b7280', // Darker gray text
          600: '#4b5563', // Dark gray
          700: '#374151', // Darker gray
          800: '#1f2937', // Very dark gray
          900: '#111827', // Deep gray
        },
        'white': {
          DEFAULT: '#ffffff',
          '5': 'rgba(255, 255, 255, 0.05)',
          '8': 'rgba(255, 255, 255, 0.08)',
          '10': 'rgba(255, 255, 255, 0.1)',
          '12': 'rgba(255, 255, 255, 0.12)',
          '15': 'rgba(255, 255, 255, 0.15)',
          '20': 'rgba(255, 255, 255, 0.2)',
          '25': 'rgba(255, 255, 255, 0.25)',
          '30': 'rgba(255, 255, 255, 0.3)',
          '40': 'rgba(255, 255, 255, 0.4)',
          '50': 'rgba(255, 255, 255, 0.5)',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.025em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.025em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '10xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '200': '50rem',
        '240': '60rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
        'gradient-diagonal': 'linear-gradient(45deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)',
        'gradient-vertical': 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)',
        'gradient-horizontal': 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #8b5cf6 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)',
        'glow-strong': '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.4), 0 0 90px rgba(139, 92, 246, 0.3)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.4), 0 0 50px rgba(139, 92, 246, 0.3), 0 0 75px rgba(139, 92, 246, 0.2)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.4), 0 0 50px rgba(6, 182, 212, 0.3), 0 0 75px rgba(6, 182, 212, 0.2)',
        'glow-green': '0 0 25px rgba(34, 197, 94, 0.4), 0 0 50px rgba(34, 197, 94, 0.3), 0 0 75px rgba(34, 197, 94, 0.2)',
        'glow-orange': '0 0 25px rgba(249, 115, 22, 0.4), 0 0 50px rgba(249, 115, 22, 0.3), 0 0 75px rgba(249, 115, 22, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
        'inner-glow-strong': 'inset 0 0 30px rgba(59, 130, 246, 0.2)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(59, 130, 246, 0.3)',
        'premium-strong': '0 32px 64px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 30px rgba(59, 130, 246, 0.4)',
        'depth': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'depth-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'depth-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-up': 'slideInUp 0.8s ease-out',
        'slide-in-down': 'slideInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-gentle': 'pulseGentle 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite -4s',
        'float-slow': 'float 12s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'shimmer-fast': 'shimmer 1.5s infinite',
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'scale-breathe': 'scaleBreathe 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'text-shimmer': 'textShimmer 4s ease-in-out infinite',
        'particle-float': 'particleFloat 6s ease-in-out infinite',
        'particle-float-delayed': 'particleFloat 8s ease-in-out infinite -2s',
        'particle-float-slow': 'particleFloat 10s ease-in-out infinite -4s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-80px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(1deg)' },
          '50%': { transform: 'translateY(-25px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.4)' 
          },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scaleBreathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        particleFloat: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)',
            opacity: '0.6'
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px) scale(1.1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translateY(-30px) translateX(5px) scale(0.9)',
            opacity: '0.8'
          },
          '75%': { 
            transform: 'translateY(-15px) translateX(-5px) scale(1.05)',
            opacity: '0.9'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
        '4xl': '72px',
      },
      transitionTimingFunction: {
        'bounce-gentle': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '110': '110',
        '120': '120',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
        '110': '1.1',
        '115': '1.15',
        '120': '1.2',
      },
      translate: {
        '1/2': '50%',
        '-1/2': '-50%',
        '1/3': '33.333333%',
        '-1/3': '-33.333333%',
        '2/3': '66.666667%',
        '-2/3': '-66.666667%',
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '4': '4deg',
        '5': '5deg',
        '6': '6deg',
        '7': '7deg',
        '8': '8deg',
        '9': '9deg',
        '10': '10deg',
        '15': '15deg',
        '20': '20deg',
        '25': '25deg',
        '30': '30deg',
        '45': '45deg',
        '60': '60deg',
        '90': '90deg',
        '180': '180deg',
      },
      skew: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '4': '4deg',
        '5': '5deg',
        '6': '6deg',
        '7': '7deg',
        '8': '8deg',
        '9': '9deg',
        '10': '10deg',
        '12': '12deg',
        '15': '15deg',
        '20': '20deg',
        '25': '25deg',
        '30': '30deg',
        '45': '45deg',
      },
      blur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
        '4xl': '64px',
        '5xl': '80px',
        '6xl': '96px',
        '7xl': '112px',
        '8xl': '128px',
        '9xl': '144px',
        '10xl': '160px',
        '11xl': '176px',
        '12xl': '192px',
        '13xl': '208px',
        '14xl': '224px',
        '15xl': '240px',
        '16xl': '256px',
        '17xl': '272px',
        '18xl': '288px',
        '19xl': '304px',
        '20xl': '320px',
        '21xl': '336px',
        '22xl': '352px',
        '23xl': '368px',
        '24xl': '384px',
        '25xl': '400px',
        '26xl': '416px',
        '27xl': '432px',
        '28xl': '448px',
        '29xl': '464px',
        '30xl': '480px',
        '31xl': '496px',
        '32xl': '512px',
        '33xl': '528px',
        '34xl': '544px',
        '35xl': '560px',
        '36xl': '576px',
        '37xl': '592px',
        '38xl': '608px',
        '39xl': '624px',
        '40xl': '640px',
        '41xl': '656px',
        '42xl': '672px',
        '43xl': '688px',
        '44xl': '704px',
        '45xl': '720px',
        '46xl': '736px',
        '47xl': '752px',
        '48xl': '768px',
        '49xl': '784px',
        '50xl': '800px',
        '51xl': '816px',
        '52xl': '832px',
        '53xl': '848px',
        '54xl': '864px',
        '55xl': '880px',
        '56xl': '896px',
        '57xl': '912px',
        '58xl': '928px',
        '59xl': '944px',
        '60xl': '960px',
        '61xl': '976px',
        '62xl': '992px',
        '63xl': '1008px',
        '64xl': '1024px',
        '65xl': '1040px',
        '66xl': '1056px',
        '67xl': '1072px',
        '68xl': '1088px',
        '69xl': '1104px',
        '70xl': '1120px',
        '71xl': '1136px',
        '72xl': '1152px',
        '73xl': '1168px',
        '74xl': '1184px',
        '75xl': '1200px',
        '76xl': '1216px',
        '77xl': '1232px',
        '78xl': '1248px',
        '79xl': '1264px',
        '80xl': '1280px',
        '81xl': '1296px',
        '82xl': '1312px',
        '83xl': '1328px',
        '84xl': '1344px',
        '85xl': '1360px',
        '86xl': '1376px',
        '87xl': '1392px',
        '88xl': '1408px',
        '89xl': '1424px',
        '90xl': '1440px',
        '91xl': '1456px',
        '92xl': '1472px',
        '93xl': '1488px',
        '94xl': '1504px',
        '95xl': '1520px',
        '96xl': '1536px',
        '97xl': '1552px',
        '98xl': '1568px',
        '99xl': '1584px',
        '100xl': '1600px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spin 1s linear infinite reverse',
        'bounce-slow': 'bounce 2s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'wiggle-reverse': 'wiggle 1s ease-in-out infinite reverse',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
