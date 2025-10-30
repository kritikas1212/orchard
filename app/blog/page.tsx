import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    id: '1',
    title: 'The Health Benefits of Raw Honey',
    slug: 'health-benefits-raw-honey',
    excerpt: 'Discover why raw honey is more than just a sweetener - it\'s a powerhouse of natural enzymes, antioxidants, and health benefits.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop',
    author: 'Dr. Sarah Johnson',
    date: '2024-10-15',
    readTime: '5 min read',
    category: 'Health',
  },
  {
    id: '2',
    title: 'Traditional Ghee Making Process',
    slug: 'traditional-ghee-making',
    excerpt: 'Learn about the ancient art of making pure ghee and why traditional methods produce superior quality and taste.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    author: 'Michael Chen',
    date: '2024-10-10',
    readTime: '7 min read',
    category: 'Culture',
  },
  {
    id: '3',
    title: 'Why Stone-Ground Flour is Better',
    slug: 'stone-ground-flour-benefits',
    excerpt: 'Understanding the difference between stone-ground and commercially milled flour, and why it matters for your health.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop',
    author: 'Emily Rodriguez',
    date: '2024-10-05',
    readTime: '6 min read',
    category: 'Nutrition',
  },
  {
    id: '4',
    title: 'Sustainable Sourcing Practices',
    slug: 'sustainable-sourcing',
    excerpt: 'How we work directly with farmers to ensure ethical practices and environmental sustainability in every product.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    author: 'David Thompson',
    date: '2024-09-28',
    readTime: '4 min read',
    category: 'Sustainability',
  },
  {
    id: '5',
    title: 'Cooking with Natural Ingredients',
    slug: 'cooking-natural-ingredients',
    excerpt: 'Simple recipes and tips for incorporating natural, wholesome ingredients into your everyday cooking.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    author: 'Lisa Wang',
    date: '2024-09-20',
    readTime: '8 min read',
    category: 'Recipes',
  },
  {
    id: '6',
    title: 'Understanding Lab Reports',
    slug: 'understanding-lab-reports',
    excerpt: 'A guide to reading and understanding our product lab reports - transparency you can trust.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop',
    author: 'James Wilson',
    date: '2024-09-15',
    readTime: '5 min read',
    category: 'Quality',
  },
]

const categories = ['All', 'Health', 'Culture', 'Nutrition', 'Sustainability', 'Recipes', 'Quality']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Blog</h1>
          <p className="text-gray-600">
            Insights, recipes, and stories about natural living and quality products
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-2 text-sm bg-primary-600 text-white rounded">
              1
            </button>
            <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
              2
            </button>
            <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
              3
            </button>
            <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
              Next
            </button>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-primary-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Never Miss a Post
          </h2>
          <p className="text-primary-100 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest articles, recipes, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-primary-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
