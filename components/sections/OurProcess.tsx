import Image from 'next/image'
import Link from 'next/link'
import { Milk, Blend, TestTubes } from 'lucide-react'

export function OurProcess() {
  const steps = [
    {
      number: '01',
      icon: Milk,
      title: 'Milk Sourcing',
      subtitle: 'Grass-Fed Gir Cows',
      description: 'We source pure A2 milk exclusively from indigenous Gir cows raised on organic farms in Rajasthan. These cows graze freely on natural pastures, producing milk rich in A2 beta-casein protein.',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&h=400&fit=crop',
      highlights: ['100% Grass-Fed', 'No Hormones', 'Ethical Treatment'],
    },
    {
      number: '02',
      icon: Blend,
      title: 'Bilona Churning',
      subtitle: 'Traditional Hand-Churned',
      description: 'Using the ancient Bilona method, we hand-churn curd made from A2 milk in wooden churns. This slow, traditional process (taking 2-3 hours) preserves nutrients and creates the authentic granular texture.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      highlights: ['Hand-Churned', '2-3 Hours Process', 'Zero Machines'],
    },
    {
      number: '03',
      icon: TestTubes,
      title: 'Slow-Cooking & Testing',
      subtitle: 'Lab-Verified Purity',
      description: 'The butter is slow-cooked over a traditional wood fire to create ghee. Every batch is then lab-tested by NABL-certified laboratories for purity, FFA content, and to ensure zero adulteration.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop',
      highlights: ['Wood-Fire Cooked', 'Lab Certified', 'Zero Adulterants'],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-ivory to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Traditional Excellence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-4">
            Our Bilona Process
          </h2>
          <p className="text-lg text-brown-600">
            From farm to jar, every step is done with care, tradition, and reverence for ancient Vedic methods. 
            This is how ghee was meant to be made.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-serif font-bold text-gold-200">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center">
                      <Icon size={28} className="text-gold-600" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-brown-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gold-700 font-medium mb-4">{step.subtitle}</p>
                  </div>

                  <p className="text-brown-600 leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3">
                    {step.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 bg-gold-100 text-gold-800 text-sm font-medium px-4 py-2 rounded-full"
                      >
                        <span className="w-1.5 h-1.5 bg-gold-600 rounded-full"></span>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={step.image}
                      alt={`${step.title} - ${step.subtitle}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gold-200 rounded-2xl"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/process"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
          >
            See Our Full Process →
          </Link>
          <p className="mt-4 text-sm text-brown-600">
            Watch our behind-the-scenes video tour
          </p>
        </div>
      </div>
    </section>
  )
}
