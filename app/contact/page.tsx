'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="max-w-md w-full mx-4 bg-white rounded-2xl border-2 border-gold-200 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-brown-900 mb-4">
            Message Sent!
          </h2>
          <p className="text-brown-600 mb-6">
            Thank you for contacting VedicPure. Our team will respond within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary w-full"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gold-600 to-gold-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gold-100">
              Have questions about our A2 ghee? We're here to help!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border-2 border-brown-200 p-8">
              <h2 className="text-2xl font-serif font-bold text-brown-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brown-800 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Priya Sharma"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brown-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+91 98765-43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="priya@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brown-800 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="quality">Quality Concern</option>
                    <option value="subscription">Subscription Help</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brown-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-white rounded-2xl border-2 border-brown-200 p-6">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-gold-600" size={24} />
              </div>
              <h3 className="font-serif font-bold text-brown-900 mb-2">
                Email Us
              </h3>
              <a
                href="mailto:support@vedicpure.com"
                className="text-saffron hover:text-saffron-dark font-medium"
              >
                support@vedicpure.com
              </a>
              <p className="text-sm text-brown-600 mt-2">
                We'll respond within 24 hours
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl border-2 border-brown-200 p-6">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-gold-600" size={24} />
              </div>
              <h3 className="font-serif font-bold text-brown-900 mb-2">
                Call Us
              </h3>
              <a
                href="tel:+919876543210"
                className="text-saffron hover:text-saffron-dark font-medium"
              >
                +91 98765-43210
              </a>
              <p className="text-sm text-brown-600 mt-2">
                Mon-Sat, 9 AM - 6 PM IST
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl border-2 border-brown-200 p-6">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-gold-600" size={24} />
              </div>
              <h3 className="font-serif font-bold text-brown-900 mb-2">
                Visit Us
              </h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                VedicPure Foods Pvt. Ltd.<br />
                123, Heritage Plaza<br />
                Jaipur, Rajasthan 302001<br />
                India
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h3 className="font-serif font-bold mb-2">
                WhatsApp Support
              </h3>
              <a
                href="https://wa.me/919876543210"
                className="inline-block bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 transition-colors mt-2"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="max-w-6xl mx-auto mt-12 bg-gold-50 border-2 border-gold-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">
            Looking for Quick Answers?
          </h3>
          <p className="text-brown-600 mb-4">
            Check our FAQ page for instant answers to common questions about A2 ghee, shipping, and subscriptions.
          </p>
          <a
            href="/faq"
            className="btn-secondary inline-block"
          >
            View FAQ →
          </a>
        </div>
      </div>
    </div>
  )
}

// Metadata must be in layout.tsx or a separate metadata file for client components
// For now, set in the component head or use next/head
