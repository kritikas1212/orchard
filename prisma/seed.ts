import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'honey' },
      update: {},
      create: {
        name: 'Honey Collection',
        slug: 'honey',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'ghee' },
      update: {},
      create: {
        name: 'Ghee Collection',
        slug: 'ghee',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'flour' },
      update: {},
      create: {
        name: 'Stone-Ground Flours',
        slug: 'flour',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'spices' },
      update: {},
      create: {
        name: 'Organic Spices',
        slug: 'spices',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'oils' },
      update: {},
      create: {
        name: 'Cold-Pressed Oils',
        slug: 'oils',
      },
    }),
  ])

  console.log('✅ Categories created')

  // Create products
  const products = [
    {
      title: 'Raw Wildflower Honey',
      slug: 'raw-wildflower-honey',
      description: 'Pure, unfiltered wildflower honey collected from diverse floral sources. Rich in natural enzymes and antioxidants, this honey offers a complex flavor profile that changes with the seasons.',
      priceCents: 2499,
      compareAtCents: 2999,
      sku: 'HNY-WF-500',
      images: [
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
      ],
      inventory: 50,
      categorySlugs: ['honey'],
    },
    {
      title: 'Pure Cow Ghee',
      slug: 'pure-cow-ghee',
      description: 'Traditional pure ghee made from grass-fed cow milk using the ancient method of slow cooking. Rich in healthy fats and vitamins, perfect for cooking and wellness.',
      priceCents: 1899,
      compareAtCents: null,
      sku: 'GHEE-CW-250',
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
      ],
      inventory: 30,
      categorySlugs: ['ghee'],
    },
    {
      title: 'Stone-Ground Wheat Flour',
      slug: 'stone-ground-wheat-flour',
      description: 'Nutrient-rich whole wheat flour ground using traditional stone mills. Preserves maximum nutrition and authentic taste in every grain.',
      priceCents: 1299,
      compareAtCents: 1599,
      sku: 'FLR-WH-1KG',
      images: [
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=800&fit=crop',
      ],
      inventory: 75,
      categorySlugs: ['flour'],
    },
    {
      title: 'Organic Jaggery',
      slug: 'organic-jaggery',
      description: 'Pure organic jaggery made from sugarcane juice without any chemical processing. Rich in iron and other minerals, perfect as a natural sweetener.',
      priceCents: 1699,
      compareAtCents: null,
      sku: 'JAG-ORG-500',
      images: [
        'https://images.unsplash.com/photo-1609501676725-7186f3a4a0a8?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1609501676725-7186f3a4a0a8?w=800&h=800&fit=crop',
      ],
      inventory: 0, // Sold out
      categorySlugs: ['spices'],
    },
    {
      title: 'Cold-Pressed Coconut Oil',
      slug: 'cold-pressed-coconut-oil',
      description: 'Virgin coconut oil extracted using cold-press method to retain maximum nutrients and natural flavor. Perfect for cooking and skincare.',
      priceCents: 2299,
      compareAtCents: null,
      sku: 'OIL-CC-500',
      images: [
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=800&fit=crop',
      ],
      inventory: 40,
      categorySlugs: ['oils'],
    },
    {
      title: 'Raw Manuka Honey',
      slug: 'raw-manuka-honey',
      description: 'Premium raw Manuka honey with UMF 15+ rating. Known for its exceptional antibacterial properties and unique flavor profile.',
      priceCents: 4599,
      compareAtCents: 5299,
      sku: 'HNY-MK-250',
      images: [
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
      ],
      inventory: 25,
      categorySlugs: ['honey'],
    },
    {
      title: 'Buffalo Ghee',
      slug: 'buffalo-ghee',
      description: 'Traditional buffalo ghee with rich, creamy texture and authentic flavor. Made using age-old methods for maximum purity and taste.',
      priceCents: 2199,
      compareAtCents: null,
      sku: 'GHEE-BF-250',
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
      ],
      inventory: 35,
      categorySlugs: ['ghee'],
    },
    {
      title: 'Stone-Ground Rye Flour',
      slug: 'stone-ground-rye-flour',
      description: 'Nutritious rye flour ground using traditional stone mills. Rich in fiber and minerals, perfect for hearty breads and baked goods.',
      priceCents: 1499,
      compareAtCents: null,
      sku: 'FLR-RY-1KG',
      images: [
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=800&fit=crop',
      ],
      inventory: 60,
      categorySlugs: ['flour'],
    },
    {
      title: 'Turmeric Powder',
      slug: 'turmeric-powder',
      description: 'Pure organic turmeric powder with high curcumin content. Sourced from the finest turmeric roots and ground to perfection.',
      priceCents: 899,
      compareAtCents: null,
      sku: 'SPC-TM-100',
      images: [
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=800&fit=crop',
      ],
      inventory: 80,
      categorySlugs: ['spices'],
    },
    {
      title: 'Cold-Pressed Olive Oil',
      slug: 'cold-pressed-olive-oil',
      description: 'Extra virgin olive oil extracted using cold-press method. Rich in antioxidants and healthy monounsaturated fats.',
      priceCents: 2899,
      compareAtCents: null,
      sku: 'OIL-OL-500',
      images: [
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=800&fit=crop',
      ],
      inventory: 45,
      categorySlugs: ['oils'],
    },
    {
      title: 'Acacia Honey',
      slug: 'acacia-honey',
      description: 'Light and delicate acacia honey with subtle floral notes. Known for its slow crystallization and smooth texture.',
      priceCents: 1999,
      compareAtCents: null,
      sku: 'HNY-AC-500',
      images: [
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
      ],
      inventory: 55,
      categorySlugs: ['honey'],
    },
    {
      title: 'Starter Pack Bundle',
      slug: 'starter-pack-bundle',
      description: 'Perfect introduction to our products! Includes raw honey, pure ghee, and stone-ground flour - everything you need for a natural kitchen.',
      priceCents: 4999,
      compareAtCents: 5999,
      sku: 'PKG-ST-001',
      images: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
      ],
      inventory: 20,
      categorySlugs: ['honey', 'ghee', 'flour'],
    },
  ]

  for (const productData of products) {
    const { categorySlugs, ...product } = productData
    
    const createdProduct = await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })

    // Connect categories
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

  console.log('✅ Products created')

  // Create lab reports
  const labReports = [
    {
      title: 'Raw Wildflower Honey - Lab Analysis',
      description: 'Comprehensive lab analysis report for our raw wildflower honey, including nutritional content and purity tests.',
      pdfUrl: '/lab-reports/honey-analysis.pdf',
      thumbnailUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=400&fit=crop',
    },
    {
      title: 'Pure Cow Ghee - Quality Certificate',
      description: 'Quality certificate and nutritional analysis for our pure cow ghee, confirming its authenticity and purity.',
      pdfUrl: '/lab-reports/ghee-certificate.pdf',
      thumbnailUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    },
  ]

  for (const report of labReports) {
    await prisma.labReport.upsert({
      where: { title: report.title },
      update: {},
      create: report,
    })
  }

  console.log('✅ Lab reports created')
  console.log('🎉 Database seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
