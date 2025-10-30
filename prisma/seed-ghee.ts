import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting VedicPure A2 Ghee seed...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'a2-ghee' },
      update: {},
      create: {
        name: 'A2 Ghee',
        slug: 'a2-ghee',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'bilona-ghee' },
      update: {},
      create: {
        name: 'Bilona Ghee',
        slug: 'bilona-ghee',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'organic-products' },
      update: {},
      create: {
        name: 'Organic Products',
        slug: 'organic-products',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'gift-sets' },
      update: {},
      create: {
        name: 'Gift Sets',
        slug: 'gift-sets',
      },
    }),
  ])

  console.log('✅ Categories created')

  // A2 Ghee Products
  const gheeProducts = [
    {
      title: 'Premium A2 Bilona Ghee - 250g Glass Jar',
      slug: 'a2-bilona-ghee-250g',
      description: 'Hand-churned using the traditional Bilona method from pure A2 milk of grass-fed Gir cows. Rich golden color, granular texture, and authentic Vedic aroma. Lab-tested for purity and free from adulteration.',
      priceCents: 59900,
      compareAtCents: 69900,
      sku: 'VP-A2-250G',
      images: [
        'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1589735871564-0617318f8a3c?w=800&h=800&fit=crop',
      ],
      inventory: 100,
      isActive: true,
      isA2: true,
      process: 'Bilona Hand-Churned',
      milkSource: 'Grass-fed Gir Cows from Rajasthan',
      labReports: [
        {
          title: 'Purity Test Report - Jan 2024',
          url: '/lab-reports/a2-ghee-250g-jan2024.pdf',
          lab: 'NABL Certified Lab',
          testDate: '2024-01-15',
          parameters: {
            ffa: '0.12% (Excellent)',
            moisture: '0.08%',
            adulteration: 'None detected',
            peroxideValue: '0.2 meq/kg',
          },
        },
      ],
      certifications: [
        { name: 'FSSAI Certified', badge: '/certs/fssai.png' },
        { name: 'Organic India Certified', badge: '/certs/organic.png' },
      ],
      subscriptionAvailable: true,
      subscriptionIntervals: ['monthly', 'quarterly'],
      subscriptionDiscount: 10,
      giftPackagingAvailable: true,
      giftPackagingPriceCents: 9900,
      shelfLifeMonths: 12,
      weight: '250g',
      nutritionFacts: {
        servingSize: '1 tsp (5g)',
        calories: 45,
        totalFat: '5g',
        saturatedFat: '3g',
        cholesterol: '15mg',
        vitaminA: '8% DV',
        vitaminE: '2% DV',
      },
      usageNotes: 'Perfect for daily cooking, tadka, and Ayurvedic wellness. Store in a cool, dry place away from direct sunlight.',
      categorySlugs: ['a2-ghee', 'bilona-ghee'],
    },
    {
      title: 'Premium A2 Bilona Ghee - 500g Glass Jar',
      slug: 'a2-bilona-ghee-500g',
      description: 'Our bestselling A2 ghee in a convenient 500g jar. Hand-churned using the traditional Bilona method, sourced from pure A2 milk of grass-fed Gir cows. Perfect for families who value authentic taste and purity.',
      priceCents: 109900,
      compareAtCents: 129900,
      sku: 'VP-A2-500G',
      images: [
        'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1589735871564-0617318f8a3c?w=800&h=800&fit=crop',
      ],
      inventory: 150,
      isActive: true,
      isA2: true,
      process: 'Bilona Hand-Churned',
      milkSource: 'Grass-fed Gir Cows from Rajasthan',
      labReports: [
        {
          title: 'Purity Test Report - Jan 2024',
          url: '/lab-reports/a2-ghee-500g-jan2024.pdf',
          lab: 'NABL Certified Lab',
          testDate: '2024-01-15',
          parameters: {
            ffa: '0.11% (Excellent)',
            moisture: '0.07%',
            adulteration: 'None detected',
            peroxideValue: '0.18 meq/kg',
          },
        },
      ],
      certifications: [
        { name: 'FSSAI Certified', badge: '/certs/fssai.png' },
        { name: 'Organic India Certified', badge: '/certs/organic.png' },
      ],
      subscriptionAvailable: true,
      subscriptionIntervals: ['monthly', 'quarterly', 'biannual'],
      subscriptionDiscount: 12,
      giftPackagingAvailable: true,
      giftPackagingPriceCents: 9900,
      shelfLifeMonths: 12,
      weight: '500g',
      nutritionFacts: {
        servingSize: '1 tsp (5g)',
        calories: 45,
        totalFat: '5g',
        saturatedFat: '3g',
        cholesterol: '15mg',
        vitaminA: '8% DV',
        vitaminE: '2% DV',
      },
      usageNotes: 'Ideal for daily cooking, traditional recipes, and wellness rituals. Store in a cool, dry place.',
      categorySlugs: ['a2-ghee', 'bilona-ghee'],
    },
    {
      title: 'Premium A2 Bilona Ghee - 1L Glass Jar',
      slug: 'a2-bilona-ghee-1l',
      description: 'Family size 1 liter jar of pure A2 Bilona ghee. Best value for regular users. Hand-churned from grass-fed Gir cow milk, lab-tested for purity. Rich granular texture and authentic aroma.',
      priceCents: 209900,
      compareAtCents: 249900,
      sku: 'VP-A2-1L',
      images: [
        'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1589735871564-0617318f8a3c?w=800&h=800&fit=crop',
      ],
      inventory: 80,
      isActive: true,
      isA2: true,
      process: 'Bilona Hand-Churned',
      milkSource: 'Grass-fed Gir Cows from Rajasthan',
      labReports: [
        {
          title: 'Purity Test Report - Jan 2024',
          url: '/lab-reports/a2-ghee-1l-jan2024.pdf',
          lab: 'NABL Certified Lab',
          testDate: '2024-01-15',
          parameters: {
            ffa: '0.10% (Excellent)',
            moisture: '0.06%',
            adulteration: 'None detected',
            peroxideValue: '0.15 meq/kg',
          },
        },
      ],
      certifications: [
        { name: 'FSSAI Certified', badge: '/certs/fssai.png' },
        { name: 'Organic India Certified', badge: '/certs/organic.png' },
      ],
      subscriptionAvailable: true,
      subscriptionIntervals: ['monthly', 'quarterly', 'biannual'],
      subscriptionDiscount: 15,
      giftPackagingAvailable: false,
      giftPackagingPriceCents: null,
      shelfLifeMonths: 12,
      weight: '1L (approx 900g)',
      nutritionFacts: {
        servingSize: '1 tsp (5g)',
        calories: 45,
        totalFat: '5g',
        saturatedFat: '3g',
        cholesterol: '15mg',
        vitaminA: '8% DV',
        vitaminE: '2% DV',
      },
      usageNotes: 'Best value for families. Perfect for all cooking needs and wellness practices.',
      categorySlugs: ['a2-ghee', 'bilona-ghee'],
    },
    {
      title: 'Luxury A2 Ghee Gift Tin - 500g',
      slug: 'a2-ghee-luxury-gift-tin',
      description: 'Premium A2 Bilona ghee in an elegant brass-finish gift tin. Perfect for festivals, weddings, and corporate gifting. Includes certificate of authenticity and usage guide.',
      priceCents: 149900,
      compareAtCents: 179900,
      sku: 'VP-A2-GIFT-500G',
      images: [
        'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
      ],
      inventory: 50,
      isActive: true,
      isA2: true,
      process: 'Bilona Hand-Churned',
      milkSource: 'Grass-fed Gir Cows from Rajasthan',
      labReports: [
        {
          title: 'Purity Test Report - Jan 2024',
          url: '/lab-reports/a2-ghee-gift-jan2024.pdf',
          lab: 'NABL Certified Lab',
          testDate: '2024-01-15',
          parameters: {
            ffa: '0.11% (Excellent)',
            moisture: '0.07%',
            adulteration: 'None detected',
            peroxideValue: '0.17 meq/kg',
          },
        },
      ],
      certifications: [
        { name: 'FSSAI Certified', badge: '/certs/fssai.png' },
        { name: 'Organic India Certified', badge: '/certs/organic.png' },
      ],
      subscriptionAvailable: false,
      subscriptionIntervals: [],
      subscriptionDiscount: null,
      giftPackagingAvailable: false, // Already premium packaging
      giftPackagingPriceCents: null,
      shelfLifeMonths: 12,
      weight: '500g',
      nutritionFacts: {
        servingSize: '1 tsp (5g)',
        calories: 45,
        totalFat: '5g',
        saturatedFat: '3g',
        cholesterol: '15mg',
        vitaminA: '8% DV',
        vitaminE: '2% DV',
      },
      usageNotes: 'Premium gift packaging. Includes personalized gift card option at checkout.',
      categorySlugs: ['a2-ghee', 'bilona-ghee', 'gift-sets'],
    },
    {
      title: 'A2 Ghee Sampler Set (3 x 100g)',
      slug: 'a2-ghee-sampler-set',
      description: 'Try our premium A2 ghee with this convenient sampler set. Three 100g jars perfect for first-time buyers or gifting. Experience the authentic Bilona taste.',
      priceCents: 69900,
      compareAtCents: 84900,
      sku: 'VP-A2-SAMPLER',
      images: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
      ],
      inventory: 60,
      isActive: true,
      isA2: true,
      process: 'Bilona Hand-Churned',
      milkSource: 'Grass-fed Gir Cows from Rajasthan',
      labReports: [
        {
          title: 'Purity Test Report - Jan 2024',
          url: '/lab-reports/a2-ghee-sampler-jan2024.pdf',
          lab: 'NABL Certified Lab',
          testDate: '2024-01-15',
          parameters: {
            ffa: '0.12% (Excellent)',
            moisture: '0.08%',
            adulteration: 'None detected',
            peroxideValue: '0.19 meq/kg',
          },
        },
      ],
      certifications: [
        { name: 'FSSAI Certified', badge: '/certs/fssai.png' },
      ],
      subscriptionAvailable: false,
      subscriptionIntervals: [],
      subscriptionDiscount: null,
      giftPackagingAvailable: true,
      giftPackagingPriceCents: 4900,
      shelfLifeMonths: 12,
      weight: '3 x 100g',
      nutritionFacts: {
        servingSize: '1 tsp (5g)',
        calories: 45,
        totalFat: '5g',
        saturatedFat: '3g',
        cholesterol: '15mg',
        vitaminA: '8% DV',
        vitaminE: '2% DV',
      },
      usageNotes: 'Perfect introduction to VedicPure A2 ghee. Great for travel and gifting.',
      categorySlugs: ['a2-ghee', 'gift-sets'],
    },
  ]

  // Complementary Products
  const complementaryProducts = [
    {
      title: 'Organic Stone-Ground Khapli Wheat Flour - 1kg',
      slug: 'organic-khapli-wheat-flour',
      description: 'Ancient grain Khapli (Emmer) wheat, stone-ground to preserve nutrients. Perfect companion to our A2 ghee for traditional rotis and parathas. Low GI, rich in fiber.',
      priceCents: 24900,
      compareAtCents: 29900,
      sku: 'VP-KHAPLI-1KG',
      images: [
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=800&fit=crop',
      ],
      inventory: 120,
      isActive: true,
      isA2: false,
      process: 'Stone-ground',
      milkSource: null,
      subscriptionAvailable: true,
      subscriptionIntervals: ['monthly', 'quarterly'],
      subscriptionDiscount: 8,
      giftPackagingAvailable: false,
      shelfLifeMonths: 6,
      weight: '1kg',
      categorySlugs: ['organic-products'],
    },
    {
      title: 'Cold-Pressed Mustard Oil - 500ml',
      slug: 'cold-pressed-mustard-oil',
      description: 'Premium cold-pressed mustard oil, extracted using traditional methods. Perfect for tadka and authentic Indian cooking. Pairs beautifully with our A2 ghee.',
      priceCents: 32900,
      compareAtCents: 39900,
      sku: 'VP-MUSTARD-500ML',
      images: [
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=800&fit=crop',
      ],
      inventory: 80,
      isActive: true,
      isA2: false,
      process: 'Cold-pressed',
      subscriptionAvailable: true,
      subscriptionIntervals: ['monthly', 'quarterly'],
      subscriptionDiscount: 10,
      shelfLifeMonths: 12,
      weight: '500ml',
      categorySlugs: ['organic-products'],
    },
    {
      title: 'Organic Turmeric Powder - 100g',
      slug: 'organic-turmeric-powder',
      description: 'High-curcumin organic turmeric powder. Traditional Ayurvedic spice, perfect with A2 ghee for golden milk and wellness recipes.',
      priceCents: 14900,
      compareAtCents: 18900,
      sku: 'VP-TURMERIC-100G',
      images: [
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=800&fit=crop',
      ],
      inventory: 150,
      isActive: true,
      isA2: false,
      subscriptionAvailable: true,
      subscriptionIntervals: ['monthly', 'quarterly'],
      subscriptionDiscount: 5,
      shelfLifeMonths: 18,
      weight: '100g',
      categorySlugs: ['organic-products'],
    },
    {
      title: 'Pure Himalayan Rock Salt - 500g',
      slug: 'himalayan-rock-salt',
      description: 'Unrefined Himalayan pink rock salt, rich in minerals. Perfect seasoning for ghee-cooked meals. Hand-mined and chemical-free.',
      priceCents: 12900,
      compareAtCents: 15900,
      sku: 'VP-SALT-500G',
      images: [
        'https://images.unsplash.com/photo-1607975218223-94f82d8c69d8?w=800&h=800&fit=crop',
      ],
      inventory: 200,
      isActive: true,
      isA2: false,
      subscriptionAvailable: false,
      subscriptionIntervals: [],
      shelfLifeMonths: 24,
      weight: '500g',
      categorySlugs: ['organic-products'],
    },
  ]

  // Seed all products
  const allProducts = [...gheeProducts, ...complementaryProducts]
  
  for (const productData of allProducts) {
    const { categorySlugs, ...product} = productData
    
    const createdProduct = await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })

    // Connect categories
    if (categorySlugs && categorySlugs.length > 0) {
      const categoryIds = categories
        .filter(cat => categorySlugs.includes(cat.slug))
        .map(cat => cat.id)

      await prisma.product.update({
        where: { id: createdProduct.id },
        data: {
          categories: {
            connect: categoryIds.map(id => ({ id })),
          },
        },
      })
    }
  }

  console.log('✅ A2 Ghee products and complementary items created')
  console.log(`   - ${gheeProducts.length} A2 Ghee products`)
  console.log(`   - ${complementaryProducts.length} Complementary products`)
  console.log('🎉 VedicPure seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
