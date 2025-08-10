/**
 * Breakpoint constants for CommuteTimely
 * Consistent responsive breakpoints across the application
 */

export const BREAKPOINTS = {
  // Mobile first approach
  mobile: '320px',
  mobileLarge: '480px',
  tablet: '768px',
  tabletLarge: '1024px',
  desktop: '1280px',
  desktopLarge: '1536px',
  wide: '1920px',
  
  // Max-width breakpoints for containers
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Min-width breakpoints for media queries
  min: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Max-width breakpoints for media queries
  max: {
    xs: '479px',
    sm: '639px',
    md: '767px',
    lg: '1023px',
    xl: '1279px',
    '2xl': '1535px',
  },
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type BreakpointValue = typeof BREAKPOINTS[BreakpointKey];

// Helper function to get breakpoint value
export const getBreakpoint = (key: BreakpointKey): string => {
  const value = BREAKPOINTS[key];
  if (typeof value === 'string') {
    return value;
  }
  // For nested objects, return a default or handle appropriately
  return '0px';
};

// Helper function to check if screen size matches breakpoint
export const isBreakpoint = (breakpoint: BreakpointKey): boolean => {
  if (typeof window === 'undefined') return false;
  const width = window.innerWidth;
  
  switch (breakpoint) {
    case 'mobile':
      return width >= 320 && width < 480;
    case 'mobileLarge':
      return width >= 480 && width < 768;
    case 'tablet':
      return width >= 768 && width < 1024;
    case 'tabletLarge':
      return width >= 1024 && width < 1280;
    case 'desktop':
      return width >= 1280 && width < 1536;
    case 'desktopLarge':
      return width >= 1536 && width < 1920;
    case 'wide':
      return width >= 1920;
    default:
      return false;
  }
};
