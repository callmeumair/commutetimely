/**
 * CSS Variables utility for CommuteTimely
 * Provides easy access to CSS custom properties
 */

export const CSS_VARIABLES = {
  // Colors
  colors: {
    brand: {
      primary: 'hsl(var(--brand-primary))',
      primaryLight: 'hsl(var(--brand-primary-light))',
      primaryDark: 'hsl(var(--brand-primary-dark))',
      secondary: 'hsl(var(--brand-secondary))',
      accent: 'hsl(var(--brand-accent))',
    },
    neutral: {
      50: 'hsl(var(--neutral-50))',
      100: 'hsl(var(--neutral-100))',
      200: 'hsl(var(--neutral-200))',
      300: 'hsl(var(--neutral-300))',
      400: 'hsl(var(--neutral-400))',
      500: 'hsl(var(--neutral-500))',
      600: 'hsl(var(--neutral-600))',
      700: 'hsl(var(--neutral-700))',
      800: 'hsl(var(--neutral-800))',
      900: 'hsl(var(--neutral-900))',
    },
    status: {
      success: 'hsl(var(--success))',
      warning: 'hsl(var(--warning))',
      error: 'hsl(var(--error))',
      info: 'hsl(var(--info))',
    },
  },
  
  // Spacing
  spacing: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    '2xl': 'var(--space-2xl)',
    '3xl': 'var(--space-3xl)',
    '4xl': 'var(--space-4xl)',
    '5xl': 'var(--space-5xl)',
    '6xl': 'var(--space-6xl)',
  },
  
  // Typography
  typography: {
    fontSize: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
      '5xl': 'var(--font-size-5xl)',
      '6xl': 'var(--font-size-6xl)',
    },
    lineHeight: {
      none: 'var(--line-height-none)',
      tight: 'var(--line-height-tight)',
      snug: 'var(--line-height-snug)',
      normal: 'var(--line-height-normal)',
      relaxed: 'var(--line-height-relaxed)',
      loose: 'var(--line-height-loose)',
    },
  },
  
  // Focus and accessibility
  focus: {
    ring: 'var(--focus-ring)',
    ringOffset: 'var(--focus-ring-offset)',
    ringColor: 'hsl(var(--focus-ring-color))',
  },
  
  // Animation durations
  duration: {
    fast: 'var(--duration-fast)',
    normal: 'var(--duration-normal)',
    slow: 'var(--duration-slow)',
  },
  
  // Border radius
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
  },
} as const;

/**
 * Utility function to get CSS variable value
 */
export function getCSSVariable(name: string): string {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  }
  return '';
}

/**
 * Utility function to set CSS variable value
 */
export function setCSSVariable(name: string, value: string): void {
  if (typeof window !== 'undefined') {
    document.documentElement.style.setProperty(name, value);
  }
}


