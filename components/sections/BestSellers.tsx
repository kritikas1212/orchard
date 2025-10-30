import { ProductCard } from '@/components/product/ProductCard'
import Link from 'next/link'

// VedicPure A2 Ghee Best Sellers
const bestSellers = [
  {
    id: '1',
    title: 'Premium A2 Bilona Ghee - 500g',
    price: 1099,
    compareAtPrice: 1299,
    image: 'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 247,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-bilona-ghee-500g',
  },
  {
    id: '2',
    title: 'Premium A2 Bilona Ghee - 250g',
    price: 599,
    compareAtPrice: 699,
    image: 'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 189,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-bilona-ghee-250g',
  },
  {
    id: '3',
    title: 'Premium A2 Bilona Ghee - 1L',
    price: 2099,
    compareAtPrice: 2499,
    image: 'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 156,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-bilona-ghee-1l',
  },
  {
    id: '4',
    title: 'A2 Ghee Sampler Set (3x100g)',
    price: 699,
    compareAtPrice: 849,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 98,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-ghee-sampler-set',
  },
]

export function BestSellers() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Customer Favorites
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-900 mb-4">
            Premium A2 Ghee Collection
          </h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Hand-churned using the traditional Bilona method from grass-fed Gir cow milk. 
            Lab-tested for purity and loved by thousands of customers.
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
