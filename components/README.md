# Components Documentation

## Accordion

A Radix UI-based accordion component that provides accessible, animated collapsible content sections.

### Features

- **Accessibility First**: Built on Radix UI primitives for full keyboard navigation and screen reader support
- **Smooth Animations**: CSS-based animations for opening/closing content
- **Flexible Styling**: Customizable appearance through Tailwind CSS classes
- **TypeScript Support**: Full type safety with React component props

### Usage

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is CommuteTimely?</AccordionTrigger>
    <AccordionContent>
      CommuteTimely is an intelligent commute planning app that helps you arrive on time.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Props

- **Accordion**: Root container with `type` and `collapsible` options
- **AccordionItem**: Individual accordion section with unique `value`
- **AccordionTrigger**: Clickable header that toggles content visibility
- **AccordionContent**: Collapsible content area with smooth animations

### Integration

The accordion component is currently used in:
- **AccordionDemoSection**: FAQ section demonstrating the component's capabilities
- **Any component needing collapsible content**: Import and use as needed

---

## ImageWithFallback

A React component that provides intelligent fallback handling for images that fail to load.

### Features

- **Automatic Fallback**: Shows a meaningful error image when the main image fails to load
- **Accessibility First**: Maintains proper alt text and ARIA attributes
- **Flexible Styling**: Accepts all standard img attributes plus custom className and style
- **Error Tracking**: Uses data attributes to track original image sources
- **Lazy Loading**: Built-in lazy loading for better performance

### Usage

```tsx
import { ImageWithFallback } from '@/components/ImageWithFallback'

// Basic usage
<ImageWithFallback 
  src="/path/to/image.jpg" 
  alt="Description of image"
  className="w-full h-64 object-cover"
/>

// With additional props
<ImageWithFallback 
  src="/path/to/image.jpg" 
  alt="Description of image"
  className="rounded-lg shadow-md"
  width={400}
  height={300}
  loading="lazy"
/>
```

### Props

The component accepts all standard HTML img attributes:

- `src`: Image source URL
- `alt`: Alternative text for accessibility
- `className`: CSS classes for styling
- `style`: Inline styles
- `width`, `height`: Image dimensions
- `loading`: Loading behavior ("lazy", "eager")
- Any other standard img attributes

### Fallback Behavior

When an image fails to load:

1. The component automatically switches to fallback mode
2. Shows a built-in error icon with the original alt text
3. Maintains the same dimensions and styling
4. Adds `data-original-url` attribute for debugging
5. Provides proper ARIA labels for screen readers

### Integration Examples

The component is currently integrated in:

1. **FeaturesSection**: Shows feature illustrations with fallback handling
2. **ImageDemoSection**: Demonstrates the component's capabilities
3. **Any component that needs image fallback**: Import and use as needed

### Accessibility Features

- Maintains original alt text in fallback mode
- Adds `role="img"` to fallback container
- Provides descriptive `aria-label` for screen readers
- Preserves focus states and keyboard navigation

### Performance Considerations

- Built-in lazy loading for better performance
- Minimal re-renders with efficient state management
- Lightweight fallback SVG (base64 encoded)
- No external dependencies

### Customization

To customize the fallback image, modify the `ERROR_IMG_SRC` constant in the component file. The current fallback is a document icon with an error symbol.
