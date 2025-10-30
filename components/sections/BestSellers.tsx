import { ProductCard } from '@/components/product/ProductCard'
import Link from 'next/link'

// Mock data - in real app this would come from API
const bestSellers = [
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
    id: '4',
    title: 'Organic Jaggery',
    price: 16.99,
    compareAtPrice: null,
    image: 'https://images.unsplash.com/photo-1609501676725-7186f3a4a0a8?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 43,
    isOnSale: false,
    isSoldOut: true,
    slug: 'organic-jaggery',
  },
]

export function BestSellers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products, carefully selected by our customers for their exceptional quality and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/shop"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
