'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Award, Sparkles, TestTube } from 'lucide-react'

export function GheeHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-ivory via-white to-gold-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-medium">
              <Award size={16} />
              <span>Lab-Tested & FSSAI Certified</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl text-brown-900">
              Vedic A2 Ghee
              <span className="block text-gold-700 mt-2">Hand-Churned, Lab-Tested</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-brown-600 leading-relaxed max-w-xl">
              Pure, slow-cooked ghee made the traditional <strong className="text-brown-800">Bilona way</strong>. 
              From grass-fed Gir cows. Rich aroma, golden texture — for cooking, rituals and wellness.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-brown-700">
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <Sparkles size={16} className="text-gold-600" />
                </div>
                <span className="font-medium">100% A2 Milk</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brown-700">
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <TestTube size={16} className="text-gold-600" />
                </div>
                <span className="font-medium">Third-Party Tested</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-brown-700">
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <Award size={16} className="text-gold-600" />
                </div>
                <span className="font-medium">Bilona Method</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="btn-primary text-lg px-8 py-4 text-center inline-flex items-center justify-center group"
              >
                Shop Ghee
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/shop?subscribe=true"
                className="btn-secondary text-lg px-8 py-4 text-center inline-flex items-center justify-center"
              >
                <Sparkles size={20} className="mr-2" />
                Subscribe & Save 10%
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-white"></div>
                ))}
              </div>
              <div className="text-sm text-brown-600">
                <div className="font-semibold text-brown-900">2,500+ Happy Customers</div>
                <div className="flex items-center gap-1">
                  <span className="text-gold-600">★★★★★</span>
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative h-[500px] md:h-[600px]">
              {/* Main product image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200 to-gold-400 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=800&fit=crop"
                  alt="Premium A2 Bilona Ghee in brass bowl - golden, pure, hand-churned"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border-2 border-gold-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-700">10%</div>
                  <div className="text-xs text-brown-600 font-medium">OFF</div>
                  <div className="text-xs text-brown-500 mt-1">First Order</div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border-2 border-gold-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                    <TestTube size={20} className="text-gold-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-900 text-sm">Lab Tested</div>
                    <div className="text-xs text-brown-600">100% Pure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
