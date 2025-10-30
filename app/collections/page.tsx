import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    id: 'honey',
    name: 'Honey Collection',
    slug: 'honey',
    description: 'Pure, raw honey from trusted beekeepers. Each variety offers unique flavors and health benefits.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop',
    productCount: 8,
    featured: true,
  },
  {
    id: 'ghee',
    name: 'Ghee Collection',
    slug: 'ghee',
    description: 'Traditional pure ghee made using age-old methods. Rich in flavor and perfect for cooking.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    productCount: 6,
    featured: true,
  },
  {
    id: 'flour',
    name: 'Stone-Ground Flours',
    slug: 'flour',
    description: 'Nutrient-rich flours ground using traditional stone mills to preserve maximum nutrition.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop',
    productCount: 12,
    featured: true,
  },
  {
    id: 'spices',
    name: 'Organic Spices',
    slug: 'spices',
    description: 'Premium organic spices for authentic flavors. Sourced directly from trusted farms.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop',
    productCount: 15,
    featured: false,
  },
  {
    id: 'oils',
    name: 'Cold-Pressed Oils',
    slug: 'oils',
    description: 'Pure oils extracted using traditional cold-press methods to retain maximum nutrients.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=600&fit=crop',
    productCount: 10,
    featured: false,
  },
  {
    id: 'sweeteners',
    name: 'Natural Sweeteners',
    slug: 'sweeteners',
    description: 'Wholesome alternatives to refined sugar. Pure jaggery and natural honey.',
    image: 'https://images.unsplash.com/photo-1609501676725-7186f3a4a0a8?w=800&h=600&fit=crop',
    productCount: 5,
    featured: false,
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Collections
            </h1>
            <p className="text-xl text-primary-100">
              Explore our carefully curated collections of premium natural products, 
              each selected for exceptional quality and authentic taste.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Collections */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.filter(c => c.featured).map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">
                      {collection.productCount} products
                    </span>
                    <span className="text-white flex items-center gap-1 text-sm font-medium">
                      Explore <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Collections */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {collection.productCount} products
                    </span>
                    <span className="text-primary-600 flex items-center gap-1 text-sm font-medium">
                      View Collection <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Browse all our products or get in touch with us for recommendations and custom orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Browse All Products
            </Link>
            <Link
              href="/contact"
              className="bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-800 transition-colors inline-block border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
