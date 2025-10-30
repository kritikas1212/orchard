'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Premium Raw Honey',
    subtitle: 'From the finest beekeepers',
    description: 'Experience the pure taste of nature with our carefully sourced raw honey, packed with natural enzymes and nutrients.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=1200&h=600&fit=crop',
    cta: 'Shop Honey',
    ctaLink: '/collections/honey',
    bgColor: 'bg-amber-50',
  },
  {
    id: 2,
    title: 'Pure Ghee Collection',
    subtitle: 'Traditional craftsmanship',
    description: 'Made using age-old methods, our ghee is rich in flavor and perfect for cooking, baking, and wellness.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    cta: 'Explore Ghee',
    ctaLink: '/collections/ghee',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 3,
    title: 'Stone-Ground Flours',
    subtitle: 'Nutrient-rich & fresh',
    description: 'Ground using traditional stone mills to preserve maximum nutrition and authentic taste in every grain.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&h=600&fit=crop',
    cta: 'Discover Flours',
    ctaLink: '/collections/flour',
    bgColor: 'bg-orange-50',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full ${slide.bgColor}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        {slide.title}
                      </h1>
                    </div>
                    
                    <p className="text-lg text-gray-600 max-w-lg">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={slide.ctaLink}
                        className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center"
                      >
                        {slide.cta}
                      </Link>
                      <Link
                        href="/shop"
                        className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center"
                      >
                        View All Products
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-80 lg:h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
