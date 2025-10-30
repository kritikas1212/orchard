# VedicPure - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Step 1: Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com
2. **GitHub Account**: Code is already pushed to https://github.com/kritikas1212/orchard
3. **Stripe Account**: For payment processing
4. **Database**: PostgreSQL (we'll use Vercel Postgres or Railway)

### Step 2: Import Project to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository: `kritikas1212/orchard`
3. Select the branch: `feature/ghee-premium-revamp` (or `main` after merge)
4. Framework Preset: **Next.js** (auto-detected)
5. Root Directory: `./` (or `orchard-store` if not at root)

### Step 3: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

#### Required Variables

```bash
# Database (Vercel Postgres)
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="https://your-domain.vercel.app"
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"

# Stripe
STRIPE_SECRET_KEY="sk_live_..." # Or sk_test_ for testing
STRIPE_PUBLISHABLE_KEY="pk_live_..." # Or pk_test_ for testing
STRIPE_WEBHOOK_SECRET="whsec_..." # From Stripe webhook setup

# Stripe Product IDs (create these in Stripe Dashboard)
STRIPE_GHEE_500G_PRODUCT_ID="prod_xxx"
STRIPE_GHEE_500G_MONTHLY_PRICE_ID="price_xxx"
STRIPE_GHEE_500G_QUARTERLY_PRICE_ID="price_xxx"
```

#### Optional Variables

```bash
# Analytics
PLAUSIBLE_DOMAIN="vedicpure.com"
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# Image Optimization
CLOUDINARY_URL="cloudinary://..."
CLOUDINARY_CLOUD_NAME="your-cloud"
CLOUDINARY_API_KEY="xxx"
CLOUDINARY_API_SECRET="xxx"

# Error Monitoring
SENTRY_DSN="https://...@sentry.io/..."
```

### Step 4: Setup Database (Vercel Postgres)

1. In Vercel project → **Storage** tab
2. Create **Postgres** database
3. Copy connection string to `DATABASE_URL`
4. Run migrations:

```bash
# Install Vercel CLI
npm i -g vercel

# Link project
vercel link

# Run migrations
vercel env pull .env.local
npx prisma db push
npx tsx prisma/seed-ghee.ts
```

### Step 5: Setup Stripe

#### Create Products in Stripe Dashboard

1. **Product: Premium A2 Bilona Ghee - 500g**
   - One-time price: ₹1,099 INR
   - Recurring (monthly): ₹989 INR
   - Recurring (quarterly): ₹967 INR
   
2. Copy Product ID and Price IDs to Vercel env vars

#### Setup Webhook

1. Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
3. Select events: `checkout.session.completed`, `customer.subscription.created`
4. Copy webhook secret to `STRIPE_WEBHOOK_SECRET`

### Step 6: Deploy

```bash
# Deploy to production
vercel --prod

# Or push to main branch (auto-deploy via GitHub Actions)
git checkout main
git merge feature/ghee-premium-revamp
git push origin main
```

### Step 7: Post-Deployment Checklist

- [ ] Visit site and verify homepage loads
- [ ] Test product page navigation
- [ ] Add item to cart
- [ ] Test checkout flow (use Stripe test cards)
- [ ] Verify subscription toggle works
- [ ] Download a lab report
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Verify analytics events firing
- [ ] Test error pages (404, 500)
- [ ] Check all navigation links

## 🔧 Troubleshooting

### Build Failures

**Error: Prisma Client not generated**
```bash
# Add to vercel.json
{
  "buildCommand": "prisma generate && next build"
}
```

**Error: Environment variables missing**
- Verify all required vars set in Vercel dashboard
- Check variable names match exactly

### Database Issues

**Error: Can't reach database**
- Verify DATABASE_URL is correct
- Check database is accessible from Vercel
- Try running `npx prisma db push` locally first

### Stripe Issues

**Error: No such price**
- Ensure Product and Price IDs are correct
- Use test mode IDs for development
- Verify webhook endpoint is accessible

## 📊 Monitoring & Analytics

### Setup Plausible Analytics

1. Sign up at https://plausible.io
2. Add domain: `vedicpure.vercel.app` (or custom domain)
3. Add script to `app/layout.tsx`:

```tsx
<Script
  defer
  data-domain="vedicpure.vercel.app"
  src="https://plausible.io/js/script.js"
/>
```

4. Set `PLAUSIBLE_DOMAIN` env var

### Setup Google Analytics (Alternative)

1. Create GA4 property
2. Copy Measurement ID
3. Set `NEXT_PUBLIC_GA_ID` env var
4. Script already in layout (to add)

### Error Monitoring with Sentry

```bash
npx @sentry/wizard@latest -i nextjs
```

Follow prompts and add DSN to env vars.

## 🌐 Custom Domain Setup

1. **Purchase Domain**: Buy `vedicpure.com` or similar
2. **Add to Vercel**:
   - Project Settings → Domains
   - Add your domain
   - Update DNS records as instructed
3. **Update Environment**:
   - Update `NEXTAUTH_URL` to production domain
   - Update Stripe webhook URL
   - Update analytics domain

## 🔒 Security Checklist

- [ ] All API routes validate input
- [ ] Database credentials in environment vars only
- [ ] Stripe webhooks verify signature
- [ ] NextAuth secret is strong (32+ characters)
- [ ] CORS configured properly
- [ ] Rate limiting on sensitive endpoints
- [ ] HTTPS enforced
- [ ] Security headers configured

## 📈 Performance Optimization

### Enable Next.js Optimizations

```typescript
// next.config.mjs
export default {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
}
```

### Cloudinary Setup (Optional)

1. Sign up at https://cloudinary.com
2. Upload product images
3. Update image URLs in seed data
4. Enable automatic format conversion

## 🎯 Launch Checklist

**Pre-Launch:**
- [ ] All environment variables configured
- [ ] Database seeded with products
- [ ] Stripe products and prices created
- [ ] Test checkout with Stripe test cards
- [ ] Mobile testing complete
- [ ] Lighthouse audit passing
- [ ] Analytics tracking verified
- [ ] Error monitoring active

**Launch:**
- [ ] Merge PR to main
- [ ] Deploy to production
- [ ] Verify production site works
- [ ] Monitor error logs
- [ ] Check analytics dashboard

**Post-Launch:**
- [ ] Set up domain
- [ ] Configure SSL
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor performance metrics
- [ ] Track conversion rates

## 📞 Support

For deployment issues:
1. Check Vercel deployment logs
2. Review build output
3. Test locally first with production build: `npm run build && npm start`
4. Check GitHub Actions logs

## 🎉 Success!

Once deployed, your VedicPure A2 ghee store will be live at:
- **Preview**: https://orchard-xxx.vercel.app
- **Production**: https://vedicpure.vercel.app (or your custom domain)

Share the link and start selling premium A2 ghee! 🐄✨
