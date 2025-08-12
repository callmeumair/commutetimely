# CommuteTimely - Smart Commute Alerts

A modern, responsive landing page for CommuteTimely, built with Next.js 15, TypeScript, and Tailwind CSS. This project replicates the exact design from Figma with pixel-perfect accuracy.

## 🚀 Features

- **Pixel-Perfect Design**: Exact replication of the Figma design
- **Fully Responsive**: Optimized for all device sizes
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Performance Optimized**: Fast loading with modern best practices
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Interactive Elements**: Hover states, animations, and smooth transitions

## 🎨 Design Elements

### Header
- Logo with gradient background
- Navigation menu (Features, How It Works, Download)
- "Get Early Access" CTA button
- Mobile-responsive hamburger menu

### Hero Section
- "Never Be Late Again" headline with blue accent
- Launch tag (September 2024)
- Feature highlights (Privacy First, Real-time Data, AI Powered, etc.)
- Interactive mobile app mockup
- Dual CTA buttons

### Features Section
- "Why Choose CommuteTimely?" section
- 6 feature cards with colored icons
- Hover effects and animations

### How It Works
- 4-step process with numbered badges
- Platform availability (iOS & Android)
- "Join the Beta" CTA

### Stats Section
- Key metrics (99.9% Accuracy, 45min Time Saved, etc.)
- Visual statistics with icons

### Early Access
- Launch information
- Platform details
- CTA for early access

### Footer
- Company information
- Product and company links
- Social media icons
- Copyright and legal links

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-width layouts with proper spacing
- **Breakpoints**: Tailwind's responsive utilities

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/commutetimely.git
cd commutetimely
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
commutetimely/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section with mobile mockup
│   ├── FeaturesSection.tsx  # Features grid
│   ├── HowItWorksSection.tsx # 4-step process
│   ├── StatsSection.tsx     # Statistics and metrics
│   ├── EarlyAccessSection.tsx # Early access CTA
│   └── Footer.tsx           # Footer with links
├── public/                   # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Design System

### Colors
- **Primary**: Blue (#0ea5e9)
- **Secondary**: Purple (#8b5cf6)
- **Accents**: Teal, Green, Orange, Pink
- **Backgrounds**: Dark (#0a0a0a, #111111, #1a1a1a)
- **Text**: White, Gray variations

### Typography
- **Font Family**: Inter
- **Headings**: Bold weights (700-900)
- **Body**: Regular weight (400)
- **Responsive**: Fluid typography scaling

### Spacing
- **Consistent**: 8px base unit system
- **Responsive**: Tailwind's spacing scale
- **Section Padding**: 80px (mobile) to 128px (desktop)

## 🔧 Customization

### Adding New Sections
1. Create component in `components/` directory
2. Import and add to `app/page.tsx`
3. Follow existing component patterns

### Modifying Colors
1. Update `tailwind.config.js` color palette
2. Modify `app/globals.css` custom properties
3. Update component classes

### Changing Content
1. Edit text content in component files
2. Update metadata in `app/layout.tsx`
3. Modify images and icons as needed

## 📱 Mobile Optimization

- Touch-friendly button sizes
- Proper spacing for mobile devices
- Optimized typography scaling
- Responsive grid layouts
- Mobile-first navigation

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios

## 🚀 Performance

- Next.js 15 optimizations
- Tailwind CSS purging
- Optimized images
- Minimal JavaScript bundle
- Fast loading times

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact the development team.

---

Built with ❤️ by the CommuteTimely team
