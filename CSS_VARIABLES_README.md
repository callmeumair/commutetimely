# CSS Variables & Accessibility Improvements

This document outlines the comprehensive CSS variables system and accessibility improvements implemented in CommuteTimely.

## 🎨 CSS Variables System

### Colors
The application now uses a comprehensive color system with CSS variables for better maintainability and consistency:

```css
:root {
  /* Brand colors with improved contrast */
  --brand-primary: 174 64% 41%;      /* #2EBFA5 */
  --brand-primary-light: 174 64% 51%; /* #24A892 */
  --brand-primary-dark: 174 64% 31%;  /* #1E8372 */
  --brand-secondary: 180 67% 15%;     /* #0C3F3F */
  --brand-accent: 39 100% 71%;        /* #FFC773 */
  
  /* Enhanced neutral palette */
  --neutral-50: 0 0% 98%;
  --neutral-100: 0 0% 96%;
  --neutral-200: 0 0% 90%;
  --neutral-300: 0 0% 83%;
  --neutral-400: 0 0% 64%;
  --neutral-500: 0 0% 45%;
  --neutral-600: 0 0% 32%;
  --neutral-700: 0 0% 25%;
  --neutral-800: 0 0% 15%;
  --neutral-900: 0 0% 9%;
  
  /* Status colors with better contrast */
  --success: 160 84% 39%;
  --warning: 43 96% 56%;
  --error: 0 84% 60%;
  --info: 217 91% 60%;
}
```

### Spacing
Consistent spacing scale using CSS variables:

```css
:root {
  --space-xs: 0.25rem;    /* 4px */
  --space-sm: 0.5rem;     /* 8px */
  --space-md: 1rem;       /* 16px */
  --space-lg: 1.5rem;     /* 24px */
  --space-xl: 2rem;       /* 32px */
  --space-2xl: 3rem;      /* 48px */
  --space-3xl: 4rem;      /* 64px */
  --space-4xl: 6rem;      /* 96px */
  --space-5xl: 8rem;      /* 128px */
  --space-6xl: 12rem;     /* 192px */
}
```

### Typography
Enhanced typography system with improved line heights:

```css
:root {
  /* Font sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */
  
  /* Line heights for better readability */
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
}
```

### Animation Durations
Configurable animation durations for consistent motion:

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
}
```

### Focus Ring Styles
Enhanced focus indicators for better accessibility:

```css
:root {
  --focus-ring: 2px;
  --focus-ring-offset: 2px;
  --focus-ring-color: hsl(var(--brand-primary));
}
```

## ♿ Accessibility Improvements

### Enhanced Focus Styles
- **Focus-visible**: Only shows focus indicators for keyboard navigation
- **High contrast support**: Automatically adjusts focus ring thickness for high contrast mode
- **Consistent focus indicators**: All interactive elements have consistent focus styles

```css
*:focus-visible {
  outline: var(--focus-ring) solid hsl(var(--focus-ring-color));
  outline-offset: var(--focus-ring-offset);
  border-radius: var(--radius-md);
}

/* Remove default focus outline for non-keyboard navigation */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### Prefers-Reduced-Motion Support
Comprehensive support for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Motion-Safe Utilities
Tailwind utilities that respect motion preferences:

```css
.motion-safe\:animate-fadeIn {
  @media (prefers-reduced-motion: no-preference) {
    animation: fadeIn var(--duration-slow) cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.motion-reduce\:animate-none {
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
}
```

### High Contrast Mode Support
Automatic adjustments for high contrast mode:

```css
@media (prefers-contrast: high) {
  :root {
    --focus-ring: 3px;
    --focus-ring-offset: 3px;
  }
  
  *:focus-visible {
    outline-width: var(--focus-ring);
    outline-offset: var(--focus-ring-offset);
  }
}
```

## 🚀 Usage Examples

### In CSS
```css
.my-component {
  background-color: hsl(var(--brand-primary));
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  transition: all var(--duration-normal) ease;
}

.my-component:focus-visible {
  outline: var(--focus-ring) solid hsl(var(--focus-ring-color));
  outline-offset: var(--focus-ring-offset);
}
```

### In Tailwind Classes
```tsx
<div className="bg-brand text-white p-lg rounded-md transition-all duration-normal">
  Content with CSS variables
</div>
```

### In JavaScript/TypeScript
```typescript
import { CSS_VARIABLES, prefersReducedMotion } from '@/lib/utils';

// Access CSS variables
const primaryColor = CSS_VARIABLES.colors.brand.primary;
const spacing = CSS_VARIABLES.spacing.lg;

// Check user preferences
if (prefersReducedMotion()) {
  // Disable animations
}
```

## 🎯 Benefits

1. **Consistency**: All colors, spacing, and typography use the same scale
2. **Maintainability**: Easy to update design tokens in one place
3. **Accessibility**: Better focus indicators and motion preferences support
4. **Performance**: Reduced CSS bundle size with systematic approach
5. **Theme Support**: Easy to implement dark/light mode switching
6. **Developer Experience**: Clear naming conventions and easy-to-use utilities

## 🔧 Customization

To customize the design system:

1. Update values in `app/globals.css` under `:root`
2. Modify Tailwind config in `tailwind.config.js`
3. Use the utility functions in `lib/utils/css-variables.ts`

## 📱 Responsive Considerations

The CSS variables system works seamlessly with responsive design:

```css
@media (max-width: 768px) {
  .section-padding {
    padding: var(--space-3xl) var(--space-md);
  }
}
```

## 🌙 Dark Mode Support

Dark mode automatically adjusts color values:

```css
.dark {
  --brand-primary: 174 64% 51%;
  --neutral-50: 0 0% 9%;
  --neutral-900: 0 0% 98%;
}
```

This system provides a robust foundation for building accessible, maintainable, and beautiful user interfaces.
