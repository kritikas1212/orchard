# Environment Variables Template

Copy this to `.env.local` and fill in your actual values:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/vedicpure_ghee"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-minimum-32-characters-long"

# Stripe (use test keys for development)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Stripe Product/Price IDs for subscription
STRIPE_GHEE_500G_PRODUCT_ID="prod_..."
STRIPE_GHEE_500G_MONTHLY_PRICE_ID="price_..."
STRIPE_GHEE_500G_QUARTERLY_PRICE_ID="price_..."

# Cloudinary (for image uploads)
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Analytics (optional)
PLAUSIBLE_DOMAIN="vedicpure.com"
GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"

# Sentry (optional - for error monitoring)
SENTRY_DSN="https://...@sentry.io/..."
NEXT_PUBLIC_SENTRY_DSN="https://...@sentry.io/..."

# Admin credentials (for seeding and management)
ADMIN_EMAIL="admin@vedicpure.com"
ADMIN_PASSWORD="change-this-secure-password"

# Email (for order confirmations)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
```

## Setup Instructions

1. Copy this template:
```bash
cp ENV_TEMPLATE.md .env.local
```

2. Fill in your actual values
3. Never commit `.env.local` to git (already in .gitignore)
