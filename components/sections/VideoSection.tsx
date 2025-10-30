'use client'

import { Play } from 'lucide-react'
import Link from 'next/link'

export function VideoSection() {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-gold-50 py-20">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Video Player */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Video placeholder - replace with actual video when available */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                      <Play size={32} className="text-white ml-1" fill="white" />
                    </div>
                    <p className="text-lg font-semibold">Watch Our Bilona Process</p>
                    <p className="text-sm opacity-90 mt-1">(Video coming soon)</p>
                  </div>
                </div>
              </div>
              
              {/* Actual video - uncomment when you have the video file */}
              {/* <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover rounded-2xl"
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/bilona-process.mp4" type="video/mp4" />
                <source src="/videos/bilona-process.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video> */}
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <span className="inline-block bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Behind the Scenes
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 leading-tight">
              Watch Our Bilona Process
            </h2>
            
            <p className="text-lg text-amber-800 leading-relaxed">
              Experience the traditional hand-churning process of our A2 Ghee, from grass-fed Gir cows 
              to your kitchen. Witness the care, tradition, and dedication that goes into every jar. 
              <strong className="text-amber-900"> 100% pure, authentic, and made with love.</strong>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-amber-800">
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Hand-Churned for 2-3 hours</span>
              </div>
              <div className="flex items-center gap-2 text-amber-800">
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Slow-cooked over wood fire</span>
              </div>
              <div className="flex items-center gap-2 text-amber-800">
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Lab-tested every batch</span>
              </div>
            </div>

            <Link
              href="/process"
              className="inline-block bg-amber-700 text-white px-8 py-4 rounded-xl hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl font-semibold"
            >
              Learn More About Our Process →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
