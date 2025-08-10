/**
 * Common component types for CommuteTimely
 * Shared interfaces and types across components
 */

import { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from 'react';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

// Button variants and sizes
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Button component props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  withIcon?: boolean;
  withSparkle?: boolean;
}

// Link component props
export interface LinkProps extends HTMLAttributes<HTMLAnchorElement>, BaseComponentProps {
  href: string;
  external?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

// Card component props
export interface CardProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

// Section component props
export interface SectionProps extends HTMLAttributes<HTMLElement>, BaseComponentProps {
  variant?: 'default' | 'hero' | 'content' | 'cta';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'primary' | 'secondary' | 'gradient';
  fullHeight?: boolean;
}

// Container component props
export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
}

// Animation component props
export interface AnimationProps extends BaseComponentProps {
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  easing?: string;
  trigger?: 'onMount' | 'onScroll' | 'onHover' | 'onClick';
}

// Responsive props
export interface ResponsiveProps {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
  hidden?: {
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  };
  visible?: {
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  };
}
