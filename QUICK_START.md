# VedicPure - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Option 1: Run Locally (Fastest)

```bash
# 1. Navigate to project
cd /Users/kritikasingh/Desktop/Madhavasu/orchard-store

# 2. Switch to VedicPure branch
git checkout feature/ghee-premium-revamp

# 3. Install (if needed)
npm install

# 4. Start server
npm run dev
```

**Visit:** http://localhost:3000

✨ You'll see the complete VedicPure A2 ghee store!

---

### Option 2: Deploy to Vercel (Production)

#### Step 1: Create Pull Request
**Click here:** https://github.com/kritikas1212/orchard/pull/new/feature/ghee-premium-revamp

Title: `Transform to VedicPure A2 Ghee Platform`

#### Step 2: Deploy to Vercel

1. **Import Project**
   - Go to: https://vercel.com/new
   - Import: `kritikas1212/orchard`
   - Branch: `feature/ghee-premium-revamp`

2. **Quick Environment Setup** (Minimum for preview)
   ```
   DATABASE_URL="postgres://..."  # Use Vercel Postgres or skip for now
   NEXTAUTH_URL="https://your-project.vercel.app"
   NEXTAUTH_SECRET="any-32-character-random-string-here-abc123"
   ```

3. **Click Deploy** 🚀

4. **Get your URL**: `https://your-project-xxx.vercel.app`

---

## 🎯 What You'll See

### Homepage Features
- ✅ **Hero**: "Vedic A2 Ghee — Hand-Churned, Lab-Tested"
- ✅ **Golden theme**: Warm, premium feel
- ✅ **Why A2 section**: 3 key benefits
- ✅ **Our Process**: Bilona method explained
- ✅ **Products**: A2 ghee showcase
- ✅ **Testimonials**: Customer reviews
- ✅ **Newsletter**: Recipe incentive

### Navigation
- Home → VedicPure homepage
- Our Ghee → Product catalog
- Process → Bilona method details
- Bundles → Combo packs
- Lab Reports → Purity certificates
- Recipes → 6 ghee recipes
- About → Brand story
- Blog → A2 ghee education

### Key Pages
- `/` - Homepage with ghee hero
- `/shop` - A2 ghee products
- `/process` - 6-step Bilona process
- `/recipes` - Recipe collection
- `/cart` - Shopping cart
- `/checkout` - Stripe checkout
- `/lab-reports` - Lab certificates

---

## 🎨 Visual Changes at a Glance

**Colors:**
- Blue (#0284c7) → **Gold (#C68D22)**
- Gray background → **Ivory (#FFF8EE)**

**Typography:**
- Inter sans → **Playfair Display (headings)**

**Logo:**
- "Orchard Store" → **"VedicPure"**
- Generic icon → **V in golden gradient**
- No tagline → **"Premium A2 Ghee" subtitle**

**Content:**
- Multi-product → **A2 ghee specialist**
- Generic → **Gir cows, Bilona, Lab-tested**

---

## 🔧 Troubleshooting

### "Missing script: dev"
You're in wrong directory.
```bash
cd orchard-store  # Then npm run dev
```

### Port 5000 in use
```bash
PORT=3000 npm run dev
```

### Database errors
Skip for now - app works without DB for preview

### Images not loading
Unsplash URLs - some may 404 (expected placeholders)

---

## 📚 Full Documentation

For complete details, see:
1. `FINAL_SUMMARY.md` - Complete overview ⭐ START HERE
2. `DEPLOYMENT.md` - Deploy to production
3. `README_VEDICPURE.md` - Technical setup
4. `CHANGELOG.md` - All changes
5. `PR_SUMMARY.md` - PR details

---

## ✅ Verification Checklist

After running locally, verify:
- [ ] Homepage shows "VedicPure" logo
- [ ] Hero says "Vedic A2 Ghee — Hand-Churned..."
- [ ] Colors are golden/brown (not blue)
- [ ] "Why A2?" section visible
- [ ] "Our Process" section shows 3 steps
- [ ] Navigation has "Our Ghee", "Process", "Recipes"
- [ ] Clicking "Shop Ghee" works
- [ ] Process page loads (/process)
- [ ] Recipes page loads (/recipes)
- [ ] Footer says "VedicPure"

All checkboxes should be ✅ = Success!

---

## 🎊 You're Ready!

Your premium A2 ghee e-commerce platform is complete and ready to launch.

**Next step:** Deploy to Vercel or create PR for review.

---

**Questions?** Check the documentation files or review the code comments.

**VedicPure** - Premium A2 Bilona Ghee 🐄✨
