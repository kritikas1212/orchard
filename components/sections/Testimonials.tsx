'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'VedicPure A2 ghee is the real deal! The granular texture and nutty aroma prove it\'s authentic Bilona method. My family noticed the difference immediately. Perfect for our daily rotis and traditional cooking.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi, NCR',
    rating: 5,
    text: 'After trying many brands, VedicPure is the only A2 ghee that matches my grandmother\'s homemade ghee. The lab reports give me confidence, and the taste is absolutely authentic. Subscribed for monthly delivery!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Meena Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Being from Gujarat, I grew up with pure desi ghee. VedicPure brings back those authentic flavors. My kids love it on their parathas, and I use it for my Ayurvedic wellness routine. Worth every rupee!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Arjun Reddy',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'The 500g jar is perfect for my family of four. Lasts about a month with daily use. The subscription discount is great, and knowing it\'s from Gir cows gives me peace of mind about quality.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Anjali Desai',
    location: 'Pune, Maharashtra',
    rating: 5,
    text: 'I was skeptical about ordering ghee online, but the packaging was excellent and the product arrived fresh. The golden color and rich aroma convinced me it\'s pure. The lab reports on the website are very reassuring.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 6,
    name: 'Vikram Singh',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'As someone from Rajasthan, I know good ghee when I taste it. VedicPure\'s A2 ghee is authentic - you can see the granular texture and smell the traditional wood-fire cooking. Best ghee I\'ve found online!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
]

export function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-ivory to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 text-primary-100" size={24} />
                <p className="text-gray-700 text-sm leading-relaxed pl-4">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              Join thousands of satisfied customers
            </h3>
            <p className="text-primary-700 text-sm mb-4">
              Experience the difference that quality natural products can make in your daily life.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-primary-600">
              <span>⭐ 4.9/5 average rating</span>
              <span>•</span>
              <span>1,200+ happy customers</span>
              <span>•</span>
              <span>100% satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
