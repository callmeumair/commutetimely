# Non-Critical CSS System

This document explains the non-critical CSS system implemented in CommuteTimely for optimal performance and progressive enhancement.

## Overview

The non-critical CSS system separates essential styles (critical CSS) from enhancement styles (non-critical CSS) to improve Core Web Vitals and user experience.

## File Structure

- **`app/critical.css`** - Essential styles loaded immediately (above-the-fold)
- **`app/non-critical.css`** - Enhancement styles loaded after initial render
- **`app/globals.css`** - Tailwind CSS and base styles
- **`components/ui/enhanced-components.tsx`** - React components using non-critical CSS

## Loading Strategy

### 1. Critical CSS (Immediate)
- Inlined in `<head>` for instant rendering
- Contains only essential above-the-fold styles
- Ensures fast First Contentful Paint (FCP)

### 2. Non-Critical CSS (Deferred)
- Loaded via JavaScript after page load
- Triggered by:
  - Page load completion (1 second delay)
  - User interaction (mouse, keyboard, scroll, touch)
- Uses `prefetch` hint for faster loading when needed

## Non-Critical CSS Features

### Enhanced Animations
```css
.hover-float:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(46, 191, 165, 0.4);
}
```

### Advanced Button Styles
```css
.btn-secondary {
  /* Base styles */
}

.btn-secondary::before {
  /* Shimmer effect */
}

.btn-secondary:hover {
  /* Enhanced hover state */
}
```

### Interactive Cards
```css
.card-interactive:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}
```

### Enhanced Forms
```css
.form-input:focus {
  transform: translateY(-1px);
  box-shadow: 0 0 0 3px rgba(46, 191, 165, 0.1);
}
```

## React Components

### EnhancedButton
```tsx
import { EnhancedButton } from '@/components/ui/enhanced-components';

<EnhancedButton variant="secondary" size="lg" className="hover-float">
  Get Started
</EnhancedButton>
```

### EnhancedCard
```tsx
import { EnhancedCard } from '@/components/ui/enhanced-components';

<EnhancedCard interactive onClick={handleClick}>
  <h3>Feature Title</h3>
  <p>Feature description with enhanced hover effects.</p>
</EnhancedCard>
```

### EnhancedInput
```tsx
import { EnhancedInput } from '@/components/ui/enhanced-components';

<EnhancedInput
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  error={emailError}
/>
```

## Performance Benefits

### 1. Faster Initial Load
- Critical CSS is inlined and minimal
- Non-critical styles don't block rendering
- Improved First Contentful Paint (FCP)

### 2. Better User Experience
- Progressive enhancement approach
- Smooth animations and interactions
- Responsive design optimizations

### 3. Accessibility Compliance
- Respects `prefers-reduced-motion`
- High contrast mode support
- Focus management enhancements

## Best Practices

### 1. Use Progressive Enhancement
```tsx
// Base functionality works without non-critical CSS
<button className="btn-primary">Click me</button>

// Enhanced with non-critical CSS when available
<EnhancedButton variant="secondary" className="hover-float">
  Click me
</EnhancedButton>
```

### 2. Conditional Loading
```tsx
// Only load heavy features when needed
{isFeatureEnabled && (
  <EnhancedCard interactive>
    <ComplexFeature />
  </EnhancedCard>
)}
```

### 3. Performance Monitoring
```tsx
// Monitor CSS loading performance
useEffect(() => {
  const start = performance.now();
  
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/non-critical.css';
  link.onload = () => {
    const duration = performance.now() - start;
    console.log(`Non-critical CSS loaded in ${duration}ms`);
  };
  document.head.appendChild(link);
}, []);
```

## Customization

### Adding New Non-Critical Styles
1. Add styles to `app/non-critical.css`
2. Follow the naming convention (e.g., `.enhanced-*`)
3. Include accessibility considerations
4. Test with reduced motion preferences

### Creating New Enhanced Components
1. Extend existing enhanced components
2. Use the `cn()` utility for class merging
3. Include proper TypeScript interfaces
4. Add accessibility attributes

### Performance Tuning
1. Monitor Core Web Vitals
2. Use Lighthouse for performance audits
3. Test on various devices and connections
4. Optimize animation performance

## Browser Support

- **Modern browsers**: Full support with enhanced features
- **Older browsers**: Graceful degradation to critical CSS
- **JavaScript disabled**: Basic functionality maintained
- **Reduced motion**: Animations disabled automatically

## Troubleshooting

### CSS Not Loading
- Check browser console for errors
- Verify file path in layout.tsx
- Ensure JavaScript is enabled
- Check network tab for failed requests

### Performance Issues
- Monitor Core Web Vitals
- Check for CSS conflicts
- Optimize animation performance
- Reduce non-critical CSS size

### Accessibility Problems
- Test with screen readers
- Verify focus management
- Check color contrast
- Test with reduced motion

## Future Enhancements

1. **CSS-in-JS integration** for dynamic styles
2. **Critical CSS extraction** automation
3. **Performance budgets** enforcement
4. **A/B testing** for different loading strategies
5. **Service worker** caching optimization

## Resources

- [Web.dev - Critical CSS](https://web.dev/critical-rendering-path/)
- [MDN - CSS Performance](https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS)
- [Google - Core Web Vitals](https://web.dev/vitals/)
- [CSS-Tricks - Critical CSS](https://css-tricks.com/authoring-critical-above-the-fold-css/)
