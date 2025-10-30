import { ProductDetail } from '@/components/product/ProductDetail'
import { ProductStructuredData } from '@/components/seo/StructuredData'
import { notFound } from 'next/navigation'

// Mock data - in real app this would come from API
const products = {
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
