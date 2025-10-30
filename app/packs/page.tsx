import Image from 'next/image'
import Link from 'next/link'
import { Check, ShoppingCart, Gift, Tag } from 'lucide-react'

const comboPacks = [
  {
    id: '1',
    title: 'Starter Pack',
    slug: 'starter-pack',
    description: 'Perfect introduction to our premium natural products. Everything you need to start your natural kitchen journey.',
    price: 49.99,
    compareAtPrice: 59.99,
    savings: 10.00,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
    items: [
      'Raw Wildflower Honey (500g)',
      'Pure Cow Ghee (250g)',
      'Stone-Ground Wheat Flour (1kg)',
    ],
    badge: 'Most Popular',
  },
  {
    id: '2',
    title: 'Family Essentials Pack',
    slug: 'family-essentials',
    description: 'Complete set of natural products for the whole family. Save more when you buy in bulk.',
    price: 89.99,
    compareAtPrice: 109.99,
    savings: 20.00,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
    items: [
      'Raw Wildflower Honey (1kg)',
      'Pure Cow Ghee (500g)',
      'Stone-Ground Wheat Flour (2kg)',
      'Organic Jaggery (500g)',
      'Cold-Pressed Coconut Oil (500ml)',
    ],
    badge: 'Best Value',
  },
  {
    id: '3',
    title: 'Honey Lovers Pack',
    slug: 'honey-lovers',
    description: 'A curated selection of our finest honey varieties. Perfect for honey enthusiasts and gifting.',
    price: 69.99,
    compareAtPrice: 84.99,
    savings: 15.00,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=800&fit=crop',
    items: [
      'Raw Wildflower Honey (500g)',
      'Raw Manuka Honey (250g)',
      'Acacia Honey (500g)',
    ],
    badge: 'Premium',
  },
  {
    id: '4',
    title: 'Cooking Essentials Pack',
    slug: 'cooking-essentials',
    description: 'Everything you need for authentic traditional cooking. Premium oils and ghee for your kitchen.',
    price: 64.99,
    compareAtPrice: 79.99,
    savings: 15.00,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
    items: [
      'Pure Cow Ghee (500g)',
      'Buffalo Ghee (250g)',
      'Cold-Pressed Coconut Oil (500ml)',
      'Cold-Pressed Olive Oil (500ml)',
    ],
    badge: 'Chef\'s Choice',
  },
  {
    id: '5',
    title: 'Baker\'s Delight Pack',
    slug: 'bakers-delight',
    description: 'Premium flours and natural sweeteners for the perfect baking experience.',
    price: 54.99,
    compareAtPrice: 69.99,
    savings: 15.00,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=800&fit=crop',
    items: [
      'Stone-Ground Wheat Flour (2kg)',
      'Stone-Ground Rye Flour (1kg)',
      'Raw Wildflower Honey (500g)',
      'Organic Jaggery (500g)',
    ],
    badge: 'New',
  },
  {
    id: '6',
    title: 'Gift Hamper',
    slug: 'gift-hamper',
    description: 'Beautifully packaged premium products. Perfect for special occasions and corporate gifting.',
    price: 99.99,
    compareAtPrice: 124.99,
    savings: 25.00,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
    items: [
      'Raw Manuka Honey (250g)',
      'Pure Cow Ghee (500g)',
      'Cold-Pressed Olive Oil (500ml)',
      'Stone-Ground Wheat Flour (1kg)',
      'Organic Turmeric Powder (100g)',
      'Premium Gift Box & Card',
    ],
    badge: 'Luxury',
  },
]

export default function PacksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Gift className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Combo Packs
            </h1>
            <p className="text-xl text-primary-100">
              Save more with our curated product bundles. Perfect combinations for every need.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <Tag className="w-8 h-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Save Up to 25%</h3>
            <p className="text-gray-600 text-sm">
              Get better value when you buy our curated bundles
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <Gift className="w-8 h-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Perfect for Gifting</h3>
            <p className="text-gray-600 text-sm">
              Beautifully packaged sets ideal for any occasion
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <Check className="w-8 h-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Carefully Curated</h3>
            <p className="text-gray-600 text-sm">
              Expert-selected combinations for optimal value
            </p>
          </div>
        </div>

        {/* Combo Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comboPacks.map((pack) => (
            <div
              key={pack.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={pack.image}
                  alt={pack.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {pack.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Save ${pack.savings.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pack.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {pack.description}
                </p>

                {/* Items List */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    What's Included:
                  </h4>
                  <ul className="space-y-1">
                    {pack.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-gray-900">
                      ${pack.price.toFixed(2)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${pack.compareAtPrice.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    You save ${pack.savings.toFixed(2)} ({Math.round((pack.savings / pack.compareAtPrice) * 100)}% off)
                  </p>
                </div>

                {/* Buttons */}
                <div className="space-y-2">
                  <Link
                    href={`/product/${pack.slug}`}
                    className="w-full btn-primary text-center py-3 inline-flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Link>
                  <Link
                    href={`/product/${pack.slug}`}
                    className="w-full btn-secondary text-center py-2 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pack CTA */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Pack?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Looking for a specific combination or buying in bulk? We can create custom packs tailored to your needs. 
            Perfect for corporate gifts, events, or wholesale orders.
          </p>
          <Link
            href="/contact"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
