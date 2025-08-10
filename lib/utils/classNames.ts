/**
 * Utility function for combining CSS class names
 * Handles conditional classes and filters out falsy values
 */

export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Alternative name for better readability
export const cn = classNames;

// Helper for conditional classes
export function conditionalClass(
  baseClass: string,
  conditionalClasses: Record<string, boolean>
): string {
  const classes = [baseClass];
  
  Object.entries(conditionalClasses).forEach(([className, condition]) => {
    if (condition) {
      classes.push(className);
    }
  });
  
  return classes.join(' ');
}

// Helper for responsive classes
export function responsiveClass(
  baseClass: string,
  responsiveClasses: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  }
): string {
  const classes = [baseClass];
  
  if (responsiveClasses.mobile) {
    classes.push(`sm:${responsiveClasses.mobile}`);
  }
  
  if (responsiveClasses.tablet) {
    classes.push(`md:${responsiveClasses.tablet}`);
  }
  
  if (responsiveClasses.desktop) {
    classes.push(`lg:${responsiveClasses.desktop}`);
  }
  
  return classes.join(' ');
}
