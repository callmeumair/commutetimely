/**
 * Color constants for CommuteTimely
 * Centralized color management for consistency and maintainability
 */

export const COLORS = {
  // Primary brand colors
  primary: {
    main: '#2EBFA5',
    light: '#24A892',
    dark: '#1E8372',
    hover: '#24A892',
  },
  
  // Secondary brand colors
  secondary: {
    main: '#0C3F3F',
    light: '#0f3d3e',
    dark: '#0a2a2a',
  },
  
  // Accent colors
  accent: {
    gold: '#FFC773',
    blue: '#3B82F6',
    purple: '#8B5CF6',
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  
  // Background colors
  background: {
    primary: '#0C3F3F',
    secondary: '#23272f',
    tertiary: '#181c22',
    glass: 'rgba(35, 39, 47, 0.8)',
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF',
    secondary: '#9CA3AF',
    muted: '#6B7280',
    accent: '#2EBFA5',
  },
  
  // Border colors
  border: {
    primary: '#2EBFA5',
    secondary: '#374151',
    muted: '#4B5563',
  },
  
  // Status colors
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

export type ColorKey = keyof typeof COLORS;
export type ColorValue = typeof COLORS[ColorKey];
