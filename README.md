# CommuteTimely

A modern, minimalist landing page for CommuteTimely - the smart commute timing app that tells you exactly when to leave.

## 🚀 Features

- **Hero Section**: Compelling headline with app mockup
- **How It Works**: 3-step process explanation
- **Benefits**: Key value propositions with icons
- **Target Users**: Perfect for office workers, university staff, and delivery drivers
- **Email Capture**: Waitlist signup form
- **Footer**: Links and company information

## 🎨 Design System

### CSS Variables & Design Tokens
CommuteTimely uses a comprehensive CSS variables system for consistent design and easy maintenance:

#### Colors
- **Brand Colors**: Primary teal (#2EBFA5), secondary dark (#0C3F3F), accent gold (#FFC773)
- **Neutral Palette**: 10-step grayscale from 50-900 with improved contrast ratios
- **Status Colors**: Success, warning, error, and info colors with accessibility compliance

#### Spacing
- **Consistent Scale**: 4px base unit (0.25rem) with 12 standardized spacing values
- **Responsive Spacing**: Mobile-first approach with breakpoint-specific adjustments
- **Component Spacing**: Predefined spacing for buttons, cards, forms, and sections

#### Typography
- **Font Scale**: 12px to 96px with consistent ratios
- **Line Heights**: Optimized for readability (1.25x to 2x)
- **Font Weights**: Complete range from 100-900
- **Letter Spacing**: Tighter to wider options for design flexibility

#### Animation & Motion
- **Duration Variables**: Fast (150ms), normal (300ms), slow (500ms)
- **Motion Preferences**: Respects `prefers-reduced-motion` user settings
- **Smooth Transitions**: Enhanced hover effects and micro-interactions

### Accessibility Features
- **Enhanced Focus Styles**: Visible focus indicators for keyboard navigation
- **High Contrast Support**: Automatic adjustments for high contrast mode
- **Motion Preferences**: Comprehensive support for users who prefer reduced motion
- **Touch Targets**: Minimum 44px touch targets for mobile accessibility
- **Screen Reader Support**: ARIA labels and semantic HTML structure
- **Keyboard Navigation**: Full keyboard accessibility with focus trapping

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Fonts**: Inter (Google Fonts)
- **Icons**: Emoji icons for simplicity
- **Deployment**: Ready for Vercel
- **Accessibility**: axe-core integration and WCAG compliance

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd commutetimely
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
```

The build folder will contain your production-ready files.

## 🎨 Design System Usage

### CSS Variables
The design system is built around CSS custom properties for easy theming and maintenance:

```css
/* Using CSS variables directly */
.my-component {
  background-color: hsl(var(--brand-primary));
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  transition: all var(--duration-normal) ease;
}
```

### TypeScript Utilities
Access design tokens programmatically:

```typescript
import { CSS_VARIABLES } from '@/lib/utils/css-variables';

// Access colors, spacing, typography
const primaryColor = CSS_VARIABLES.colors.brand.primary;
const largeSpacing = CSS_VARIABLES.spacing.lg;
const headingSize = CSS_VARIABLES.typography.fontSize['2xl'];
```

### Tailwind Integration
Custom Tailwind classes that use the CSS variables:

```tsx
<div className="bg-brand text-white p-lg rounded-md transition-all duration-normal">
  Content with design system tokens
</div>
```

## ♿ Accessibility Implementation

### Focus Management
- **Focus-visible**: Only shows focus indicators for keyboard navigation
- **Focus Trapping**: Modal and dropdown focus management
- **Skip Links**: Quick navigation for screen reader users

### Motion & Animation
- **Reduced Motion**: Respects user preferences for motion sensitivity
- **Motion-Safe Classes**: Conditional animation based on user settings
- **High Contrast**: Automatic focus ring adjustments

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **ARIA Labels**: Descriptive labels for interactive elements
- **Live Regions**: Dynamic content announcements

### Testing & Validation
- **axe-core**: Automated accessibility testing
- **Manual Testing**: Keyboard navigation and screen reader testing
- **WCAG Compliance**: AA level accessibility standards

## 📧 Email Integration

For the email capture form, you can integrate with:

- **Formspree**: Simple form handling
- **Mailchimp**: Email marketing integration
- **Google Sheets**: Manual email collection
- **Custom backend**: Node.js/Express API

## 🎯 Customization

### Design System Updates
1. **Colors**: Modify values in `app/globals.css` under `:root`
2. **Spacing**: Update spacing scale in `lib/constants/spacing.ts`
3. **Typography**: Adjust font sizes in `lib/constants/typography.ts`
4. **Tailwind Config**: Update `tailwind.config.js` for custom utilities

### Content Updates
Edit the content in each component file:
- `components/HeroSection.tsx`
- `components/HowItWorksSection.tsx`
- `components/FeaturesSection.tsx`
- `components/FAQSection.tsx`

### Accessibility Customization
- **Focus Styles**: Modify focus ring variables in CSS
- **Motion Preferences**: Adjust animation durations
- **High Contrast**: Customize high contrast mode adjustments

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px+ with touch-friendly interactions
- **Tablet**: 768px+ with optimized layouts
- **Desktop**: 1024px+ with enhanced features
- **Large Screens**: 1280px+ with maximum content width

### Responsive Utilities
- **Container Classes**: Automatic max-width and padding adjustments
- **Section Spacing**: Breakpoint-specific padding and margins
- **Touch Targets**: Minimum 44px for mobile accessibility

## 🔧 Development

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Accessibility testing
npm run test:a11y
```

### Development Guidelines
- **CSS Variables**: Use design system tokens instead of hardcoded values
- **Accessibility**: Test with keyboard navigation and screen readers
- **Motion**: Ensure animations respect user preferences
- **Responsive**: Test across all breakpoints

## 📚 Documentation

- **CSS Variables**: See `CSS_VARIABLES_README.md` for detailed design system documentation
- **Accessibility**: Check `lib/accessibility.ts` for utility functions
- **Constants**: Review `lib/constants/` for design token definitions
- **Utilities**: Explore `lib/utils/` for helper functions

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following accessibility guidelines
4. Test with keyboard navigation and screen readers
5. Submit a pull request

### Contribution Guidelines
- **Accessibility First**: Ensure all changes maintain or improve accessibility
- **Design System**: Use existing CSS variables and design tokens
- **Testing**: Test across devices and assistive technologies
- **Documentation**: Update relevant documentation for new features

---

Built with ❤️ by the CommuteTimely team

*This project prioritizes accessibility and inclusive design, ensuring all users can navigate and interact with the application effectively.*
