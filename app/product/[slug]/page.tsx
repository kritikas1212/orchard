import { ProductDetail } from '@/components/product/ProductDetail'
import { ProductStructuredData } from '@/components/seo/StructuredData'
import { notFound } from 'next/navigation'

// VedicPure A2 Ghee Products - in real app this would come from database
const products = {
  'a2-bilona-ghee-500g': {
    id: '1',
    title: 'Premium A2 Bilona Ghee - 500g Glass Jar',
    slug: 'a2-bilona-ghee-500g',
    description: 'Our bestselling A2 ghee in a convenient 500g jar. Hand-churned using the traditional Bilona method, sourced from pure A2 milk of grass-fed Gir cows. Perfect for families who value authentic taste and purity. Each batch is lab-tested to ensure zero adulteration. Rich granular texture, golden color, and nutty aroma make it ideal for all your cooking needs.',
    priceCents: 109900,
    compareAtCents: 129900,
    sku: 'VP-A2-500G',
    images: [
      'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1589735871564-0617318f8a3c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
    ],
    inventory: 150,
    rating: 4.9,
    reviewCount: 247,
    isOnSale: true,
    isSoldOut: false,
    variants: [
      { id: '500g', name: '500g', price: 109900 },
      { id: '1kg', name: '1kg (Two 500g jars)', price: 209900 },
    ],
    features: [
      '100% A2 Milk from Grass-Fed Gir Cows',
      'Traditional Bilona Hand-Churned Method',
      'Lab-Tested for Purity (FFA < 0.12%)',
      'Rich in Vitamins A, D, E, K',
      'Zero Adulteration Guaranteed',
      'FSSAI Certified',
      'Subscription Available (Save 12%)',
    ],
    nutrition: {
      calories: 45,
      protein: '0g',
      carbs: '0g',
      fat: '5g',
      fiber: '0g',
    },
  },
  'a2-bilona-ghee-250g': {
    id: '2',
    title: 'Premium A2 Bilona Ghee - 250g Glass Jar',
    slug: 'a2-bilona-ghee-250g',
    description: 'Perfect size for trying VedicPure A2 ghee. Hand-churned using the traditional Bilona method from pure A2 milk of grass-fed Gir cows. Lab-tested for purity with zero adulteration. Ideal for singles or first-time buyers wanting to experience authentic Bilona ghee.',
    priceCents: 59900,
    compareAtCents: 69900,
    sku: 'VP-A2-250G',
    images: [
      'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1589735871564-0617318f8a3c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
    ],
    inventory: 100,
    rating: 4.8,
    reviewCount: 189,
    isOnSale: true,
    isSoldOut: false,
    variants: [
      { id: '250g', name: '250g', price: 59900 },
      { id: '500g', name: '500g', price: 109900 },
    ],
    features: [
      '100% A2 Milk from Grass-Fed Gir Cows',
      'Traditional Bilona Hand-Churned Method',
      'Lab-Tested for Purity',
      'Rich in Vitamins A, D, E, K',
      'Zero Adulteration',
      'Perfect for Trying',
    ],
    nutrition: {
      calories: 45,
      protein: '0g',
      carbs: '0g',
      fat: '5g',
      fiber: '0g',
    },
  },
  'a2-bilona-ghee-1l': {
    id: '3',
    title: 'Premium A2 Bilona Ghee - 1L Glass Jar',
    slug: 'a2-bilona-ghee-1l',
    description: 'Family size 1 liter jar of pure A2 Bilona ghee. Best value for regular users. Hand-churned from grass-fed Gir cow milk, lab-tested for purity. Rich granular texture and authentic aroma. Perfect for families who use ghee daily.',
    priceCents: 209900,
    compareAtCents: 249900,
    sku: 'VP-A2-1L',
    images: [
      'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1589735871564-0617318f8a3c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
    ],
    inventory: 80,
    rating: 4.9,
    reviewCount: 156,
    isOnSale: true,
    isSoldOut: false,
    variants: [
      { id: '1l', name: '1L (approx 900g)', price: 209900 },
    ],
    features: [
      '100% A2 Milk from Grass-Fed Gir Cows',
      'Traditional Bilona Hand-Churned Method',
      'Lab-Tested for Purity',
      'Best Value for Families',
      'Subscribe & Save 15%',
    ],
    nutrition: {
      calories: 45,
      protein: '0g',
      carbs: '0g',
      fat: '5g',
      fiber: '0g',
    },
  },
  'a2-ghee-sampler-set': {
    id: '4',
    title: 'A2 Ghee Sampler Set (3x100g)',
    slug: 'a2-ghee-sampler-set',
    description: 'Try our premium A2 ghee with this convenient sampler set. Three 100g jars perfect for first-time buyers, gifting, or travel. Experience the authentic Bilona taste in a convenient format.',
    priceCents: 69900,
    compareAtCents: 84900,
    sku: 'VP-A2-SAMPLER',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop',
    ],
    inventory: 60,
    rating: 4.7,
    reviewCount: 98,
    isOnSale: true,
    isSoldOut: false,
    variants: [
      { id: 'sampler', name: '3x100g jars', price: 69900 },
    ],
    features: [
      '100% A2 Milk from Grass-Fed Gir Cows',
      'Perfect for Gifting',
      'Travel-Friendly Size',
      'Lab-Tested Purity',
    ],
    nutrition: {
      calories: 45,
      protein: '0g',
      carbs: '0g',
      fat: '5g',
      fiber: '0g',
    },
  },
  'raw-wildflower-honey': {
    id: '1',
    title: 'Raw Wildflower Honey',
    slug: 'raw-wildflower-honey',
    description: 'Pure, unfiltered wildflower honey collected from diverse floral sources. Rich in natural enzymes and antioxidants, this honey offers a complex flavor profile that changes with the seasons.',
    priceCents: 2499,
    compareAtCents: 2999,
    sku: 'HNY-WF-500',
    images: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
    ],
    inventory: 50,
    rating: 4.8,
    reviewCount: 124,
    isOnSale: true,
    isSoldOut: false,
    variants: [
      { id: '500g', name: '500g', price: 2499 },
      { id: '1kg', name: '1kg', price: 4599 },
    ],
    features: [
      '100% Pure and Natural',
      'No Artificial Additives',
      'Rich in Antioxidants',
      'Source of Natural Enzymes',
      'Perfect for Tea and Baking',
    ],
    nutrition: {
      calories: 64,
      protein: '0.1g',
      carbs: '17g',
      fat: '0g',
      fiber: '0g',
    },
  },
  'pure-cow-ghee': {
    id: '2',
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
    rating: 4.9,
    reviewCount: 89,
    isOnSale: false,
    isSoldOut: false,
    variants: [
      { id: '250g', name: '250g', price: 1899 },
      { id: '500g', name: '500g', price: 3599 },
    ],
    features: [
      'Made from Grass-Fed Cows',
      'Traditional Slow Cooking Method',
      'Rich in Vitamins A, D, E, K',
      'High Smoke Point',
      'Lactose and Casein Free',
    ],
    nutrition: {
      calories: 120,
      protein: '0g',
      carbs: '0g',
      fat: '14g',
      fiber: '0g',
    },
  },
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <>
      <ProductStructuredData
        product={{
          title: product.title,
          description: product.description,
          price: product.priceCents / 100,
          image: product.images[0],
          sku: product.sku,
          rating: product.rating,
          reviewCount: product.reviewCount,
          availability: product.isSoldOut ? 'OutOfStock' : 'InStock',
        }}
      />
      <ProductDetail product={product} />
    </>
  )
}
