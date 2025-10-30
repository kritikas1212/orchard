import { Ruler, Users, Calendar, Sparkles } from 'lucide-react'

// Metadata for SEO (server component)
export const metadata = {
  title: 'Size Guide - Choose the Right Ghee Pack | VedicPure',
  description: 'Compare VedicPure A2 ghee pack sizes and find the perfect option for your needs. From 250g jars to 1L family packs.',
}

export default function SizeGuidePage() {
  const sizes = [
    {
      size: '250g Glass Jar',
      price: '₹599',
      servings: '25-30 servings',
      duration: '2-3 weeks',
      bestFor: 'First-time buyers, singles, trying our ghee',
      useCases: 'Daily cooking (1-2 tsp/day), tadka, light usage',
      icon: '🍯',
      popular: false,
    },
    {
      size: '500g Glass Jar',
      price: '₹1,099',
      servings: '50-60 servings',
      duration: '1-2 months',
      bestFor: 'Small families (2-3 people), regular users',
      useCases: 'Daily cooking, rotis, parathas, wellness drinks',
      icon: '⭐',
      popular: true,
    },
    {
      size: '1L Glass Jar',
      price: '₹2,099',
      servings: '100-120 servings',
      duration: '2-3 months',
      bestFor: 'Large families (4+ people), heavy users',
      useCases: 'All cooking needs, festivals, regular rituals',
      icon: '👨‍👩‍👧‍👦',
      popular: false,
    },
    {
      size: 'Sampler Set (3x100g)',
      price: '₹699',
      servings: '30 servings',
      duration: '3-4 weeks',
      bestFor: 'Gift giving, variety tasting, travel',
      useCases: 'Multiple households, corporate gifts, trials',
      icon: '🎁',
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gold-600 to-gold-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Ruler className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Ghee Size Guide
            </h1>
            <p className="text-xl text-gold-100">
              Find the perfect size for your household needs. All jars are premium food-grade glass, reusable and eco-friendly.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Size Comparison Table */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizes.map((item, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${
                  item.popular
                    ? 'border-gold-400 shadow-lg'
                    : 'border-brown-200 hover:border-gold-300'
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Sparkles size={12} />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-brown-900 mb-2">
                    {item.size}
                  </h3>
                  <div className="text-3xl font-bold text-gold-700 mb-1">
                    {item.price}
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-brown-600">
                    <Users size={16} className="text-gold-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brown-800">Best For:</div>
                      <div>{item.bestFor}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-brown-600">
                    <Calendar size={16} className="text-gold-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brown-800">Duration:</div>
                      <div>{item.duration} for avg. use</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brown-100">
                    <div className="font-medium text-brown-800 mb-1">Use Cases:</div>
                    <div className="text-brown-600 text-xs">{item.useCases}</div>
                  </div>

                  <div className="bg-gold-50 rounded-lg p-3 text-center">
                    <div className="font-semibold text-gold-800 text-xs">
                      {item.servings}
                    </div>
                    <div className="text-gold-700 text-xs">
                      (1 tsp = 1 serving)
                    </div>
                  </div>
                </div>

                <a
                  href={`/shop?size=${item.size.split(' ')[0]}`}
                  className={`mt-6 w-full py-3 rounded-lg font-semibold text-center block transition-all ${
                    item.popular
                      ? 'bg-gold-600 text-white hover:bg-gold-700'
                      : 'bg-gold-100 text-gold-800 hover:bg-gold-200'
                  }`}
                >
                  Shop This Size
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Guide */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-gold-200 p-8">
          <h2 className="text-2xl font-serif font-bold text-brown-900 mb-6 text-center">
            How Much Ghee Do You Need?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-brown-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold-600 rounded-full"></span>
                Light Usage (1-2 tsp/day)
              </h3>
              <ul className="space-y-2 text-sm text-brown-600 ml-4">
                <li>• Morning bulletproof coffee</li>
                <li>• Occasional tadka</li>
                <li>• Weekend cooking</li>
                <li>• Recommendation: <strong className="text-gold-700">250g or 500g</strong></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-brown-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold-600 rounded-full"></span>
                Heavy Usage (3-5 tsp/day)
              </h3>
              <ul className="space-y-2 text-sm text-brown-600 ml-4">
                <li>• Daily parathas and rotis</li>
                <li>• Multiple meals</li>
                <li>• Large family cooking</li>
                <li>• Recommendation: <strong className="text-gold-700">1L or Subscribe</strong></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gold-50 rounded-xl border border-gold-200">
            <h4 className="font-semibold text-gold-900 mb-2 flex items-center gap-2">
              <Sparkles size={16} />
              Pro Tip: Subscribe & Save
            </h4>
            <p className="text-sm text-gold-800">
              If you use ghee regularly, our subscription plans offer 10-15% discount and ensure you never run out. 
              Choose monthly delivery for the freshest ghee, or quarterly for convenience.
            </p>
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="max-w-6xl mx-auto mt-12 overflow-x-auto">
          <h2 className="text-2xl font-serif font-bold text-brown-900 mb-6 text-center">
            Quick Comparison
          </h2>
          
          <table className="w-full bg-white rounded-xl border-2 border-brown-200 overflow-hidden">
            <thead className="bg-gold-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-brown-900">Size</th>
                <th className="px-6 py-4 text-left font-semibold text-brown-900">Price</th>
                <th className="px-6 py-4 text-left font-semibold text-brown-900">Servings</th>
                <th className="px-6 py-4 text-left font-semibold text-brown-900">Best For</th>
                <th className="px-6 py-4 text-left font-semibold text-brown-900">Subscribe?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brown-100">
              {sizes.map((item, index) => (
                <tr key={index} className="hover:bg-ivory transition-colors">
                  <td className="px-6 py-4 font-medium text-brown-900">
                    {item.icon} {item.size}
                  </td>
                  <td className="px-6 py-4 text-gold-700 font-bold">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 text-brown-600">
                    {item.servings}
                  </td>
                  <td className="px-6 py-4 text-brown-600 text-sm">
                    {item.bestFor}
                  </td>
                  <td className="px-6 py-4">
                    {index < 3 ? (
                      <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium">
                        ✓ Yes
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        N/A
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-brown-600 mb-6">
            Not sure which size is right for you?
          </p>
          <a
            href="/contact"
            className="btn-secondary inline-flex items-center"
          >
            Contact Us for Guidance
          </a>
        </div>
      </div>
    </div>
  )
}
