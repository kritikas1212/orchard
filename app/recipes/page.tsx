import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, ChefHat } from 'lucide-react'

const recipes = [
  {
    id: '1',
    title: 'Golden Milk (Turmeric Latte)',
    slug: 'golden-milk-turmeric-latte',
    description: 'Traditional Ayurvedic drink with A2 ghee, turmeric, and warming spices. Perfect for immunity and relaxation.',
    image: 'https://images.unsplash.com/photo-1556910096-6f5e72536d82?w=800&h=600&fit=crop',
    prepTime: '5 min',
    cookTime: '5 min',
    servings: 2,
    difficulty: 'Easy',
    category: 'Beverages',
    gheeAmount: '1 tsp VedicPure A2 Ghee',
  },
  {
    id: '2',
    title: 'Ghee Roasted Vegetables',
    slug: 'ghee-roasted-vegetables',
    description: 'Crispy, caramelized vegetables roasted in A2 ghee with aromatic spices. A healthy and delicious side dish.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop',
    prepTime: '10 min',
    cookTime: '25 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Sides',
    gheeAmount: '3 tbsp VedicPure A2 Ghee',
  },
  {
    id: '3',
    title: 'Traditional Dal Tadka',
    slug: 'traditional-dal-tadka',
    description: 'Classic Indian lentil curry with an aromatic ghee tadka. The secret is in the quality of the ghee.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    difficulty: 'Medium',
    category: 'Main Course',
    gheeAmount: '2 tbsp VedicPure A2 Ghee',
  },
  {
    id: '4',
    title: 'Ghee Khichdi (Comfort Bowl)',
    slug: 'ghee-khichdi',
    description: 'Nourishing one-pot meal with rice, lentils, and generous ghee. Perfect for digestion and wellness.',
    image: 'https://images.unsplash.com/photo-1585937421612-70e008356f33?w=800&h=600&fit=crop',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 3,
    difficulty: 'Easy',
    category: 'Main Course',
    gheeAmount: '3 tbsp VedicPure A2 Ghee',
  },
  {
    id: '5',
    title: 'Ghee-Fried Parathas',
    slug: 'ghee-fried-parathas',
    description: 'Flaky, layered whole wheat parathas cooked in pure A2 ghee. Breakfast perfection.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 4,
    difficulty: 'Medium',
    category: 'Breakfast',
    gheeAmount: '4 tbsp VedicPure A2 Ghee',
  },
  {
    id: '6',
    title: 'Ghee Coffee (Bulletproof Style)',
    slug: 'ghee-coffee-bulletproof',
    description: 'Creamy, energizing coffee blended with A2 ghee. Perfect for sustained energy and focus.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
    prepTime: '3 min',
    cookTime: '2 min',
    servings: 1,
    difficulty: 'Easy',
    category: 'Beverages',
    gheeAmount: '1 tbsp VedicPure A2 Ghee',
  },
]

const categories = ['All', 'Beverages', 'Breakfast', 'Main Course', 'Sides', 'Desserts']

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gold-600 to-gold-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ChefHat className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Ghee Recipes
            </h1>
            <p className="text-xl text-gold-100">
              Discover delicious ways to use VedicPure A2 ghee in your cooking. 
              From traditional Indian dishes to modern wellness recipes.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-gold-600 text-white'
                  : 'bg-white text-brown-700 hover:bg-gold-50 border border-brown-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.slug}`}
              className="group bg-white rounded-xl shadow-sm border border-brown-100 overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {recipe.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-brown-800 px-3 py-1 rounded-full text-xs font-medium">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-brown-900 mb-2 group-hover:text-gold-700 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-brown-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-brown-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{recipe.prepTime} + {recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>Serves {recipe.servings}</span>
                  </div>
                </div>

                {/* Ghee Amount */}
                <div className="pt-4 border-t border-brown-100">
                  <div className="inline-flex items-center gap-2 bg-gold-50 text-gold-800 px-3 py-1.5 rounded-lg text-xs font-medium">
                    <span className="w-2 h-2 bg-gold-600 rounded-full"></span>
                    {recipe.gheeAmount}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recipe Benefits */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border-2 border-gold-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold text-brown-900 mb-4">
                Cooking with A2 Ghee
              </h2>
              <p className="text-brown-600 mb-6">
                A2 ghee has a high smoke point (485°F) making it perfect for high-heat cooking. 
                It adds rich flavor and provides healthy fats that help absorb fat-soluble vitamins.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold-700 text-xs">✓</span>
                  </span>
                  <span className="text-brown-600">High smoke point - perfect for sautéing and frying</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold-700 text-xs">✓</span>
                  </span>
                  <span className="text-brown-600">Rich, nutty flavor enhances any dish</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold-700 text-xs">✓</span>
                  </span>
                  <span className="text-brown-600">Lactose-free and casein-free</span>
                </li>
              </ul>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                alt="Cooking with VedicPure A2 ghee"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-br from-gold-600 to-gold-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Get Exclusive Recipes & Tips
          </h2>
          <p className="text-gold-100 mb-6 max-w-xl mx-auto">
            Subscribe to receive monthly recipes, Ayurvedic wellness tips, and 15% off your first jar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-brown-800"
            />
            <button className="bg-white text-gold-700 font-semibold py-3 px-6 rounded-lg hover:bg-gold-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
