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


