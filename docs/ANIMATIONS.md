# CommuteTimely Animation System

A lightweight, performant animation system built with Framer Motion v11, optimized for 60fps animations with minimal bundle impact.

## 🚀 Features

- **60fps Performance**: Hardware-accelerated animations using `transform` and `opacity`
- **Tree-shaking**: Only imports used animation features
- **Accessibility**: Respects `prefers-reduced-motion` user preference
- **Bundle Size**: Total animation payload under 20-30KB minified
- **Reusable Components**: Consistent animation patterns across the site
- **Performance Monitoring**: Built-in FPS monitoring for development

## 📦 Bundle Size

- **Framer Motion Core**: ~15KB (tree-shaken)
- **Custom Animations**: ~5KB
- **Animation Components**: ~8KB
- **Total**: ~28KB (well under the 30KB target)

## 🎯 Performance Guidelines

### Hardware-Accelerated Properties Only
```typescript
// ✅ Good - Hardware accelerated
transform: translateX(100px)
opacity: 0.5
filter: blur(4px)

// ❌ Avoid - Causes repaints
width: 100px
height: 100px
background-color: red
```

### Spring Configurations
```typescript
// Optimized for 60fps
export const springConfig: Spring = {
  type: "spring",
  stiffness: 300,    // Responsive but not too bouncy
  damping: 30,       // Smooth deceleration
  mass: 0.8,         // Lightweight feel
}
```

## 🧩 Reusable Components

### AnimatedSection
Scroll-triggered animations with intersection observer optimization.

```tsx
import AnimatedSection from '@/components/ui/AnimatedSection'

<AnimatedSection 
  variants={fadeInUp}
  threshold={0.1}
  className="my-section"
>
  <h2>Animated Content</h2>
</AnimatedSection>
```

### AnimatedButton
Optimized button animations with hover and tap states.

```tsx
import AnimatedButton from '@/components/ui/AnimatedButton'

<AnimatedButton 
  variant="primary"
  size="lg"
  onClick={handleClick}
>
  Click Me
</AnimatedButton>
```

### AnimatedCard
Smooth card hover effects with hardware acceleration.

```tsx
import AnimatedCard from '@/components/ui/AnimatedCard'

<AnimatedCard className="feature-card">
  <h3>Feature Title</h3>
  <p>Feature description</p>
</AnimatedCard>
```

### AnimatedGrid
Staggered grid animations with performance optimization.

```tsx
import AnimatedGrid, { AnimatedGridItem } from '@/components/ui/AnimatedGrid'

<AnimatedGrid className="grid grid-cols-3 gap-6">
  <AnimatedGridItem>
    <div>Grid Item 1</div>
  </AnimatedGridItem>
  <AnimatedGridItem>
    <div>Grid Item 2</div>
  </AnimatedGridItem>
</AnimatedGrid>
```

## 🎨 Animation Variants

### Basic Animations
```typescript
import { fadeInUp, fadeInDown, scaleIn } from '@/lib/animations'

// Fade in from bottom
<motion.div variants={fadeInUp}>
  Content
</motion.div>

// Fade in from top
<motion.div variants={fadeInDown}>
  Content
</motion.div>

// Scale in with blur effect
<motion.div variants={scaleIn}>
  Content
</motion.div>
```

### Staggered Animations
```typescript
import { staggerContainer, staggerItem } from '@/lib/animations'

<motion.div variants={staggerContainer}>
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
  <motion.div variants={staggerItem}>Item 3</motion.div>
</motion.div>
```

### Hover Animations
```typescript
import { buttonHover, cardHover } from '@/lib/animations'

<motion.button
  variants={buttonHover}
  whileHover="hover"
  whileTap="tap"
>
  Hover Me
</motion.button>
```

## 🔧 Custom Hooks

### useScrollAnimation
Optimized scroll-triggered animations with intersection observer.

```typescript
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'

const { ref, isInView } = useScrollAnimation(0.1, '0px 0px -50px 0px')

return (
  <motion.div
    ref={ref}
    animate={isInView ? "visible" : "hidden"}
  >
    Content
  </motion.div>
)
```

### useStaggerAnimation
Performance-optimized staggered animations.

```typescript
import { useStaggerAnimation } from '@/lib/hooks/useScrollAnimation'

const { animatedItems, triggerItem } = useStaggerAnimation(5, 0.1)

useEffect(() => {
  animatedItems.forEach((_, index) => {
    triggerItem(index)
  })
}, [])
```

## 📊 Performance Monitoring

### PerformanceMonitor Component
Real-time FPS monitoring for development.

```tsx
import PerformanceMonitor from '@/components/ui/PerformanceMonitor'

// Show in development
<PerformanceMonitor show={process.env.NODE_ENV === 'development'} />
```

### Performance Metrics
- **Target**: 60 FPS
- **Excellent**: 55+ FPS
- **Good**: 45-54 FPS
- **Needs Optimization**: <45 FPS

## ♿ Accessibility

### Reduced Motion Support
```typescript
import { shouldAnimate, getAnimationVariants } from '@/lib/utils/reducedMotion'

const variants = getAnimationVariants(
  { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  { hidden: { opacity: 1 }, visible: { opacity: 1 } }
)
```

### Focus States
All animated components include proper focus states for keyboard navigation.

## 🚀 Best Practices

1. **Use Variants**: Define reusable animation variants instead of inline animations
2. **Optimize Viewport**: Use `once: true` for scroll animations to prevent re-triggering
3. **Stagger Delays**: Keep stagger delays under 0.2s for responsive feel
4. **Lazy Loading**: Use `LazyMotion` for code splitting
5. **Performance First**: Always prioritize 60fps over complex animations

## 🔍 Debugging

### Enable Performance Monitor
```tsx
// In development
<PerformanceMonitor show={true} />
```

### Check Bundle Size
```bash
npm run build
# Check the bundle analyzer output
```

### Common Issues
- **Low FPS**: Reduce animation complexity or increase stagger delays
- **Jank**: Ensure animations only use hardware-accelerated properties
- **Large Bundle**: Check for unused Framer Motion imports

## 📚 Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Performance Best Practices](https://web.dev/performance/)
- [CSS Transform Performance](https://csstriggers.com/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
