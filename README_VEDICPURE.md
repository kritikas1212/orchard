# VedicPure - Premium A2 Bilona Ghee E-commerce

A premium e-commerce platform for VedicPure, specializing in authentic A2 Bilona ghee hand-churned from grass-fed Gir cow milk.

## 🌟 Brand Overview

**VedicPure** brings you the finest A2 ghee made using the traditional Bilona method. Our ghee is:
- **100% A2 Milk** from grass-fed Gir cows in Rajasthan
- **Hand-Churned** using ancient Bilona technique (2-3 hours per batch)
- **Lab-Tested** by NABL-certified labs for purity
- **Slow-Cooked** over traditional wood fire
- **Zero Adulteration** - FSSAI certified

## 🎨 Design System

### Colors
- **Gold**: Primary brand color (#C68D22, #E6BB6A)
- **Ivory**: Background (#FFF8EE)
- **Brown**: Text and accents (#2B1F1A, #5C4A3D)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Brand Voice
- Premium yet approachable
- Traditional with modern sensibility
- Trust-focused, evidence-based

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe (subscriptions + one-time)
- **Images**: Cloudinary / Vercel Image Optimization
- **Analytics**: Plausible / Google Analytics
- **Hosting**: Vercel
- **Testing**: Playwright (E2E), Vitest (unit)

## 📦 Product Categories

### A2 Ghee Products (5 SKUs)
1. **250g Glass Jar** - ₹599 (₹699) - Perfect for trying
2. **500g Glass Jar** - ₹1,099 (₹1,299) - **Bestseller**
3. **1L Glass Jar** - ₹2,099 (₹2,499) - Best value for families
4. **500g Luxury Gift Tin** - ₹1,499 (₹1,799) - Premium gifting
5. **Sampler Set (3x100g)** - ₹699 (₹849) - Great for first-time buyers

### Complementary Products (4 SKUs)
- Organic Khapli Wheat Flour
- Cold-Pressed Mustard Oil
- Organic Turmeric Powder
- Pure Himalayan Rock Salt

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account
- Cloudinary account (optional)

### Quick Start

1. **Clone and Install**
```bash
git clone https://github.com/kritikas1212/orchard.git
cd orchard
git checkout feature/ghee-premium-revamp
npm install
```

2. **Environment Setup**
```bash
cp ENV_TEMPLATE.md .env.local
# Fill in your values
```

3. **Database Setup**
```bash
npx prisma db push
npx prisma db seed
# Or for ghee-specific seed:
npx tsx prisma/seed-ghee.ts
```

4. **Run Development Server**
```bash
npm run dev
```

Visit: http://localhost:3000

## 🔑 Key Features Implemented

### ✅ Phase 0-4 Complete (Foundation & Core)
- [x] Premium golden brand identity
- [x] VedicPure logo and typography
- [x] A2 ghee product model with subscriptions
- [x] Comprehensive seed data (9 products)
- [x] Transformed homepage with ghee-focused content
- [x] Hero section with A2 messaging
- [x] "Why A2?" benefits section
- [x] "Our Process" Bilona method showcase
- [x] Subscription toggle component
- [x] SEO-optimized meta tags

### 🚧 Phases 5-11 (To Complete)
See `PHASES_3-11_IMPLEMENTATION.md` for detailed implementation guide:
- [ ] Premium product images
- [ ] Enhanced product detail pages
- [ ] Lab reports system
- [ ] Trust badges and certifications
- [ ] Performance optimization
- [ ] Accessibility testing
- [ ] Analytics integration
- [ ] CI/CD pipeline
- [ ] Production deployment

## 📊 Product Schema

Each A2 ghee product includes:
```typescript
{
  isA2: boolean
  process: "Bilona Hand-Churned"
  milkSource: "Grass-fed Gir Cows from Rajasthan"
  labReports: Array<{
    title, url, lab, testDate, 
    parameters: { ffa, moisture, adulteration, peroxideValue }
  }>
  certifications: Array<{ name, badge }>
  subscriptionAvailable: boolean
  subscriptionIntervals: ["monthly", "quarterly", "biannual"]
  subscriptionDiscount: 10-15%
  giftPackagingAvailable: boolean
  nutritionFacts: { calories, fat, vitamins... }
  shelfLifeMonths: 12
}
```

## 🎯 Subscription Features

- **Monthly**: Save 10%, delivered every month
- **Quarterly**: Save 12%, every 3 months
- **Biannual**: Save 15%, every 6 months

Benefits:
- Skip or modify anytime
- No commitments
- Auto-delivery, never run out
- Free shipping on subscriptions

## 🔬 Lab Testing & Purity

All products tested for:
- **Free Fatty Acid (FFA)**: < 0.12% (Excellent grade)
- **Moisture Content**: < 0.08%
- **Adulteration**: Zero detected
- **Peroxide Value**: < 0.2 meq/kg

Certified by NABL-accredited labs. Reports available on product pages and `/lab-reports`.

## 📱 Pages & Routes

```
/                  → Homepage (VedicPure hero + process)
/shop              → A2 ghee catalog
/product/[slug]    → Product details with subscription
/packs             → Bundle deals
/process           → Bilona method explanation
/lab-reports       → Lab test certificates
/about             → Brand story
/blog              → A2 ghee education
/cart              → Shopping cart
/checkout          → Stripe checkout
/account           → Orders & subscription management
```

## 🎨 Component Library

### Layout Components
- `Header` - VedicPure branding, navigation
- `Footer` - Links, newsletter, branding
- `AnnouncementBar` - Gir cow messaging

### Homepage Sections
- `GheeHero` - Main hero with CTAs
- `WhyA2` - Benefits grid
- `OurProcess` - 3-step Bilona process
- `BestSellers` - Product showcase
- `Testimonials` - Customer reviews
- `NewsletterSignup` - Email capture

### Product Components
- `ProductCard` - Grid card with A2 badges
- `SubscriptionToggle` - Subscription selector
- `ProductDetail` - Full product page (to enhance)

### Modals
- `PromoModal` - Welcome offer
- `CartDrawer` - Side cart (to add)

## 💳 Stripe Integration

### Products & Prices Setup

Create in Stripe Dashboard:
```
Product: Premium A2 Bilona Ghee - 500g
- One-time price: ₹1,099
- Recurring (monthly): ₹989
- Recurring (quarterly): ₹967
- Recurring (biannual): ₹934
```

Set product/price IDs in `.env.local`:
```
STRIPE_GHEE_500G_PRODUCT_ID=prod_xxx
STRIPE_GHEE_500G_MONTHLY_PRICE_ID=price_xxx
```

## 📈 SEO & Performance

### Meta Tags
- Title: "VedicPure - Premium A2 Bilona Ghee | Hand-Churned From Gir Cows"
- Description: Optimized for "A2 ghee", "Bilona ghee", "Gir cow ghee"
- Keywords: 10+ targeted keywords

### Performance Targets
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Lighthouse Score >= 90

### Structured Data
Product JSON-LD schema for rich snippets (to implement in Phase 8)

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run linter
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
```bash
vercel link
```

2. **Set Environment Variables**
Go to Vercel Dashboard → Settings → Environment Variables
Add all variables from `ENV_TEMPLATE.md`

3. **Deploy**
```bash
vercel --prod
```

### Environment Variables Checklist
- [ ] DATABASE_URL
- [ ] NEXTAUTH_URL
- [ ] NEXTAUTH_SECRET
- [ ] STRIPE_SECRET_KEY
- [ ] STRIPE_PUBLISHABLE_KEY
- [ ] STRIPE_WEBHOOK_SECRET
- [ ] CLOUDINARY_URL (optional)
- [ ] PLAUSIBLE_DOMAIN (optional)

## 📝 Content Guidelines

### Product Descriptions
- Lead with benefits: "Easier digestion", "Immune support"
- Include process: "Hand-churned Bilona method"
- Mention source: "Grass-fed Gir cows"
- Add social proof: Lab-tested, certified
- Use sensory words: "Rich aroma", "Golden texture"

### Trust Signals
Always emphasize:
1. 100% A2 milk
2. Hand-churned (Bilona)
3. Lab-tested purity
4. Grass-fed Gir cows
5. Zero adulteration

## 🎓 Admin & Management

### Adding Products
Use seed script or Prisma Studio:
```bash
npx prisma studio
```

### Lab Reports
Store PDFs in `/public/lab-reports/`
Add to product `labReports` JSON field

### Blog Posts
Create in `/app/blog/[slug]/page.tsx`

## 📞 Support & Documentation

- **Implementation Guide**: `PHASES_3-11_IMPLEMENTATION.md`
- **Progress Tracker**: `TRANSFORMATION_PROGRESS.md`
- **Environment Setup**: `ENV_TEMPLATE.md`

## 🏆 Success Metrics (30-day targets)

- **Conversion Rate**: 2-3%
- **Subscription Adoption**: 25-30%
- **Average Order Value**: ₹1,500+
- **Lab Report Downloads**: 15-20%
- **Mobile Traffic**: 60-70%
- **Core Web Vitals**: All green

## 📄 License

Proprietary - VedicPure © 2024

## 🙏 Acknowledgments

Built with care using:
- Next.js
- Tailwind CSS
- Prisma
- Stripe
- Vercel

---

**VedicPure** - From our Gir cows to your kitchen 🐄✨
