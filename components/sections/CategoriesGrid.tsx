'use client'

import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 'honey',
    name: 'Honey Collection',
    description: 'Pure, raw honey from trusted beekeepers',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop',
    href: '/collections/honey',
    productCount: 8,
  },
  {
    id: 'ghee',
    name: 'Ghee Collection',
    description: 'Traditional pure ghee for cooking & wellness',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    href: '/collections/ghee',
    productCount: 6,
  },
  {
    id: 'flour',
    name: 'Stone-Ground Flours',
    description: 'Nutrient-rich flours ground the traditional way',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    href: '/collections/flour',
    productCount: 12,
  },
  {
    id: 'spices',
    name: 'Organic Spices',
    description: 'Premium spices for authentic flavors',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop',
    href: '/collections/spices',
    productCount: 15,
  },
  {
    id: 'oils',
    name: 'Cold-Pressed Oils',
    description: 'Pure oils extracted using traditional methods',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=400&fit=crop',
    href: '/collections/oils',
    productCount: 10,
  },
  {
    id: 'packs',
    name: 'Combo Packs',
    description: 'Curated bundles for the perfect pantry',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    href: '/packs',
    productCount: 5,
  },
]

export function CategoriesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections of premium natural products, each selected for their exceptional quality and authentic taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-200" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90 mb-3">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    {category.productCount} products
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
