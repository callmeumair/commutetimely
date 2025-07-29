# CommuteTimely

A modern, minimalist landing page for CommuteTimely - the smart commute timing app that tells you exactly when to leave.

## 🚀 Features

- **Hero Section**: Compelling headline with app mockup
- **How It Works**: 3-step process explanation
- **Benefits**: Key value propositions with icons
- **Target Users**: Perfect for office workers, university staff, and delivery drivers
- **Email Capture**: Waitlist signup form
- **Footer**: Links and company information

## 🎨 Design

- Modern, minimalist UI with light mode
- Inter font family for clean typography
- Calming blue color scheme
- Responsive design for all devices
- Smooth hover animations and transitions

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Icons**: Emoji icons for simplicity
- **Deployment**: Ready for Vercel

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

## 📧 Email Integration

For the email capture form, you can integrate with:

- **Formspree**: Simple form handling
- **Mailchimp**: Email marketing integration
- **Google Sheets**: Manual email collection
- **Custom backend**: Node.js/Express API

## 🎯 Customization

### Colors
Update the primary color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
  }
}
```

### Content
Edit the content in each component file:
- `src/components/HeroSection.tsx`
- `src/components/HowItWorksSection.tsx`
- `src/components/BenefitsSection.tsx`
- `src/components/TargetUserSection.tsx`

### Email Form
Update the form submission logic in `src/App.tsx` to connect to your preferred email service.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Development

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Eject (not recommended)
npm run eject
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ by the CommuteTimely team
