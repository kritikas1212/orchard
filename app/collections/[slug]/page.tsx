import { notFound } from 'next/navigation'
import { ProductCard } from '@/components/product/ProductCard'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// Mock data for collections
const collections: Record<string, any> = {
  honey: {
    name: 'Honey Collection',
    slug: 'honey',
    description: 'Pure, raw honey from trusted beekeepers across the region. Each variety offers unique flavors, colors, and health benefits.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1200&h=400&fit=crop',
    products: [
      {
        id: '1',
        title: 'Raw Wildflower Honey',
        price: 24.99,
        compareAtPrice: 29.99,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
        rating: 4.8,
        reviewCount: 124,
        isOnSale: true,
        isSoldOut: false,
        slug: 'raw-wildflower-honey',
      },
      {
        id: '6',
        title: 'Raw Manuka Honey',
        price: 45.99,
        compareAtPrice: 52.99,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
        rating: 4.9,
        reviewCount: 78,
        isOnSale: true,
        isSoldOut: false,
        slug: 'raw-manuka-honey',
      },
      {
        id: '11',
        title: 'Acacia Honey',
        price: 19.99,
        compareAtPrice: null,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
        rating: 4.5,
        reviewCount: 55,
        isOnSale: false,
        isSoldOut: false,
        slug: 'acacia-honey',
      },
    ],
  },
  ghee: {
    name: 'Ghee Collection',
    slug: 'ghee',
    description: 'Traditional pure ghee made using age-old methods. Rich in flavor and perfect for cooking, baking, and wellness.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop',
    products: [
      {
        id: '2',
        title: 'Pure Cow Ghee',
        price: 18.99,
        compareAtPrice: null,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        rating: 4.9,
        reviewCount: 89,
        isOnSale: false,
        isSoldOut: false,
        slug: 'pure-cow-ghee',
      },
      {
        id: '7',
        title: 'Buffalo Ghee',
        price: 21.99,
        compareAtPrice: null,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        rating: 4.7,
        reviewCount: 34,
        isOnSale: false,
        isSoldOut: false,
        slug: 'buffalo-ghee',
      },
    ],
  },
  flour: {
    name: 'Stone-Ground Flours',
    slug: 'flour',
    description: 'Nutrient-rich whole grain flours ground using traditional stone mills. Preserves maximum nutrition and authentic taste.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=400&fit=crop',
    products: [
      {
        id: '3',
        title: 'Stone-Ground Wheat Flour',
        price: 12.99,
        compareAtPrice: 15.99,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
        rating: 4.7,
        reviewCount: 67,
        isOnSale: true,
        isSoldOut: false,
        slug: 'stone-ground-wheat-flour',
      },
      {
        id: '8',
        title: 'Stone-Ground Rye Flour',
        price: 14.99,
        compareAtPrice: null,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
        rating: 4.6,
        reviewCount: 29,
        isOnSale: false,
        isSoldOut: false,
        slug: 'stone-ground-rye-flour',
      },
    ],
  },
}

interface CollectionPageProps {
  params: {
    slug: string
  }
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const collection = collections[params.slug]

  if (!collection) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-primary-600">Collections</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{collection.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${collection.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-white mb-4 hover:underline"
            >
              <ArrowLeft size={20} />
              Back to Collections
            </Link>
            <h1 className="text-4xl font-bold text-white mb-4">
              {collection.name}
            </h1>
            <p className="text-white/90 text-lg">
              {collection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {collection.products.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collection.products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State or CTA */}
        {collection.products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">No products available in this collection yet.</p>
            <Link href="/shop" className="btn-primary inline-block">
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
