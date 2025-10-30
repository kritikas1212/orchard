'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'The raw honey is absolutely incredible! I\'ve been using it in my morning tea and the flavor is unlike anything I\'ve tasted before. The quality is outstanding.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Austin, TX',
    rating: 5,
    text: 'The stone-ground flour has transformed my baking. Everything comes out so much more flavorful and nutritious. My family can definitely tell the difference.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    text: 'I\'ve been buying the ghee for months now and it\'s become a staple in my kitchen. The quality is consistent and the taste is authentic. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Seattle, WA',
    rating: 5,
    text: 'The combo pack was perfect for trying different products. Everything arrived fresh and well-packaged. The customer service is also excellent.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    location: 'New York, NY',
    rating: 5,
    text: 'As someone who values organic and natural products, Orchard Store has exceeded my expectations. The transparency in sourcing is commendable.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 6,
    name: 'James Wilson',
    location: 'Denver, CO',
    rating: 5,
    text: 'The lab reports give me confidence in the quality. It\'s rare to find a company that\'s so transparent about their testing and sourcing practices.',
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
    <section className="py-16 bg-gray-50">
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
