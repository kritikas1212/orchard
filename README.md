# VedicPure - Premium A2 Bilona Ghee E-commerce

A modern, production-ready e-commerce platform for VedicPure, specializing in authentic A2 Bilona ghee hand-churned from grass-fed Gir cow milk. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **State Management**: Zustand for cart, React Query for server state
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with email and OAuth
- **Payments**: Stripe Checkout integration
- **Images**: Cloudinary integration with Next.js Image optimization
- **SEO**: Dynamic meta tags, Open Graph, structured data
- **Accessibility**: WCAG compliant with keyboard navigation
- **Internationalization**: Multi-language support with next-intl
- **Testing**: Playwright E2E tests, Vitest unit tests

## 📦 Product Features

- **Product Catalog**: Filterable, sortable product grid with pagination
- **Product Details**: Image gallery, variant selection, lab reports
- **Shopping Cart**: Persistent cart with localStorage sync
- **Checkout**: Secure Stripe Checkout integration
- **User Accounts**: Profile management, order history
- **Lab Reports**: PDF downloads with search functionality
- **Newsletter**: Email subscription with confirmation
- **Reviews**: Customer ratings and testimonials

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Stripe account (for payments)
- Cloudinary account (for images)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd orchard-store
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your `.env.local`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/orchard_store"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"
```

5. Set up the database:
```bash
npx prisma db push
npx prisma db seed
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
orchard-store/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/        # Reusable components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── components/            # Shared components
│   ├── layout/           # Layout components
│   ├── product/          # Product-related components
│   ├── cart/             # Cart components
│   └── modals/           # Modal components
├── lib/                  # Library functions
│   ├── auth/             # Authentication utilities
│   ├── stripe/           # Stripe integration
│   └── stores/           # Zustand stores
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## 🎨 Design System

The application uses a custom design system built with Tailwind CSS:

- **Primary Colors**: Blue-based palette for trust and reliability
- **Typography**: Inter font family for modern readability
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first design with breakpoints for all devices

## 🧪 Testing

Run the test suite:

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📊 Analytics

The application includes analytics integration:

- **Plausible**: Privacy-focused analytics (optional)
- **Google Analytics**: Traditional analytics (optional)
- **Custom Events**: Track user interactions and conversions

## 🔒 Security

- **Authentication**: Secure user authentication with NextAuth.js
- **Data Protection**: Encrypted sensitive data
- **API Security**: Rate limiting and input validation
- **HTTPS**: SSL/TLS encryption for all communications

## 🌍 Internationalization

Support for multiple languages and currencies:

- **Languages**: English (default), Spanish, French
- **Currencies**: USD, EUR, GBP, CAD
- **Localization**: Date, number, and currency formatting

## 📱 Mobile Experience

- **Responsive Design**: Optimized for all screen sizes
- **Touch Gestures**: Swipe navigation and interactions
- **Performance**: Fast loading on mobile networks
- **PWA Ready**: Progressive Web App capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- **Documentation**: Check the README and code comments
- **Issues**: Create a GitHub issue
- **Email**: support@orchardstore.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Prisma for the excellent database toolkit
- Stripe for the payment processing
- All open-source contributors
