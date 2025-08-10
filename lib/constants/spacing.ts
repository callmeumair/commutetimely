/**
 * Spacing constants for CommuteTimely
 * Consistent spacing scale across the application
 */

export const SPACING = {
  // Base spacing units (in rem)
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
  '6xl': '12rem',   // 192px
  
  // Component-specific spacing
  section: {
    mobile: '2rem',
    tablet: '3rem',
    desktop: '4rem',
    large: '6rem',
  },
  
  // Container spacing
  container: {
    mobile: '1rem',
    tablet: '1.5rem',
    desktop: '2rem',
    large: '3rem',
  },
  
  // Button spacing
  button: {
    padding: {
      sm: '0.5rem 1rem',
      md: '0.75rem 1.5rem',
      lg: '1rem 2rem',
      xl: '1.25rem 2.5rem',
    },
    gap: '0.5rem',
  },
  
  // Card spacing
  card: {
    padding: '1.5rem',
    gap: '1rem',
    margin: '1rem',
  },
  
  // Form spacing
  form: {
    gap: '1rem',
    padding: '1.5rem',
    margin: '1rem',
  },
} as const;

export type SpacingKey = keyof typeof SPACING;
export type SpacingValue = typeof SPACING[SpacingKey];
