/**
 * Responsive utility functions for CommuteTimely
 * Helper functions for responsive design and device detection
 */

import { BREAKPOINTS } from '../constants';

// Device type detection
export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'unknown';

export function getDeviceType(): DeviceType {
  if (typeof window === 'undefined') return 'unknown';
  
  const width = window.innerWidth;
  
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Breakpoint detection
export function isMobile(): boolean {
  return getDeviceType() === 'mobile';
}

export function isTablet(): boolean {
  return getDeviceType() === 'tablet';
}

export function isDesktop(): boolean {
  return getDeviceType() === 'desktop';
}

export function isMobileOrTablet(): boolean {
  const deviceType = getDeviceType();
  return deviceType === 'mobile' || deviceType === 'tablet';
}

// Responsive class generation
export function getResponsiveClasses(
  baseClass: string,
  mobileClass?: string,
  tabletClass?: string,
  desktopClass?: string
): string {
  const classes = [baseClass];
  
  if (mobileClass) {
    classes.push(mobileClass);
  }
  
  if (tabletClass) {
    classes.push(`md:${tabletClass}`);
  }
  
  if (desktopClass) {
    classes.push(`lg:${desktopClass}`);
  }
  
  return classes.join(' ');
}

// Responsive spacing
export function getResponsiveSpacing(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `${mobile} md:${tablet} lg:${desktop}`;
}

export function getResponsivePadding(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `p-${mobile} md:p-${tablet} lg:p-${desktop}`;
}

export function getResponsiveMargin(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `m-${mobile} md:m-${tablet} lg:m-${desktop}`;
}

// Responsive text sizing
export function getResponsiveTextSize(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `text-${mobile} md:text-${tablet} lg:text-${desktop}`;
}

// Responsive grid
export function getResponsiveGrid(
  mobile: number,
  tablet: number,
  desktop: number
): string {
  return `grid-cols-${mobile} md:grid-cols-${tablet} lg:grid-cols-${desktop}`;
}

// Responsive flex direction
export function getResponsiveFlexDirection(
  mobile: 'row' | 'col',
  desktop: 'row' | 'col'
): string {
  return `flex-${mobile} lg:flex-${desktop}`;
}

// Responsive visibility
export function getResponsiveVisibility(
  mobile: boolean,
  tablet: boolean,
  desktop: boolean
): string {
  const classes = [];
  
  if (!mobile) classes.push('hidden');
  if (!tablet) classes.push('md:hidden');
  if (!desktop) classes.push('lg:hidden');
  
  return classes.join(' ');
}

// Responsive positioning
export function getResponsivePosition(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `${mobile} md:${tablet} lg:${desktop}`;
}

// Hook for responsive state
export function useResponsive() {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      deviceType: 'unknown' as DeviceType,
    };
  }
  
  const deviceType = getDeviceType();
  
  return {
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    deviceType,
  };
}

// Responsive image sizing
export function getResponsiveImageSize(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `w-${mobile} h-${mobile} md:w-${tablet} md:h-${tablet} lg:w-${desktop} lg:h-${desktop}`;
}

// Responsive container sizing
export function getResponsiveContainerSize(
  mobile: string,
  tablet: string,
  desktop: string
): string {
  return `max-w-${mobile} md:max-w-${tablet} lg:max-w-${desktop}`;
}
