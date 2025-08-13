# CommuteTimely

A modern web application for managing commute times and transportation challenges.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon database account (free at [console.neon.tech](https://console.neon.tech/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd commutetimely
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your Neon database credentials
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

This project is configured to use **Neon** (PostgreSQL) as the database. Follow the [Neon Setup Guide](./NEON_SETUP.md) for detailed instructions.

### Quick Database Setup

1. Create a Neon account at [console.neon.tech](https://console.neon.tech/)
2. Create a new project
3. Copy your connection string
4. Add it to `.env.local` as `DATABASE_URL`
5. Install database dependencies: `npm install @neondatabase/serverless drizzle-orm`
6. Follow the setup guide for schema creation

## 🏗️ Project Structure

```
commutetimely/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
├── lib/                    # Utility libraries
├── public/                 # Static assets
├── NEON_SETUP.md          # Database setup guide
└── env.example            # Environment template
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Neon database connection string | Yes |
| `NEXT_PUBLIC_APP_URL` | Your application URL | Yes |
| `NODE_ENV` | Environment (development/production) | Yes |

### Database Configuration

The project uses:
- **Neon** - Serverless PostgreSQL
- **Drizzle ORM** - Type-safe database operations
- **TypeScript** - Full type safety

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify**: Configure build command and environment variables
- **Railway**: Add environment variables and deploy
- **Self-hosted**: Build and serve the static files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

- **Database Issues**: Check [Neon Setup Guide](./NEON_SETUP.md)
- **General Issues**: Open an issue on GitHub
- **Feature Requests**: Submit a feature request

## 🔗 Links

- [Neon Database](https://neon.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
