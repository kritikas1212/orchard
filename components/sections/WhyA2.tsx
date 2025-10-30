import { Heart, Shield, Flame } from 'lucide-react'

export function WhyA2() {
  const benefits = [
    {
      icon: Heart,
      title: 'Easier Digestion',
      description: 'A2 beta-casein protein is gentler on your digestive system compared to A1 milk. Traditional and naturally occurring in Gir cow milk.',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Shield,
      title: 'Immune Support',
      description: 'Rich in CLA (Conjugated Linoleic Acid), Omega-3 fatty acids, and fat-soluble vitamins A, D, E & K. Supports overall immunity and wellness.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Flame,
      title: 'Authentic Flavor',
      description: 'Hand-churned using the traditional Bilona method. Slow-cooked to perfection. Rich, nutty aroma and granular texture that you won\'t find in commercial ghee.',
      color: 'text-gold-700',
      bgColor: 'bg-gold-100',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
            The VedicPure Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-4">
            Why A2 Ghee?
          </h2>
          <p className="text-lg text-brown-600">
            Not all ghee is created equal. Discover why A2 Bilona ghee from grass-fed Gir cows 
            is the gold standard for health, taste, and tradition.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-ivory rounded-2xl p-8 border-2 border-brown-100 hover:border-gold-300 transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className={benefit.color} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-brown-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-xl"></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gold-50 border-2 border-gold-200 rounded-xl p-6">
            <div className="text-left sm:text-center">
              <p className="text-sm font-medium text-gold-900 mb-1">
                Want to learn more about A2 ghee benefits?
              </p>
              <p className="text-xs text-gold-700">
                Read our detailed guide on the science and tradition
              </p>
            </div>
            <a
              href="/blog/what-is-a2-ghee"
              className="btn-outline whitespace-nowrap"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
