'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle, Package, Shield, Truck } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What is A2 ghee and how is it different from regular ghee?',
    answer: 'A2 ghee is made from milk containing only A2 beta-casein protein, found naturally in indigenous Gir cow breeds. Regular ghee often comes from A1 milk (from hybrid cows). A2 protein is easier to digest and doesn\'t cause the digestive discomfort some people experience with A1 milk products. Our A2 ghee is also hand-churned using the traditional Bilona method, which preserves more nutrients than industrial processing.',
    category: 'product',
  },
  {
    id: 2,
    question: 'What is the Bilona method and why is it special?',
    answer: 'The Bilona method is an ancient Vedic technique where curd (made from A2 milk) is hand-churned in wooden churns for 2-3 hours to extract butter, which is then slow-cooked over wood fire to make ghee. This traditional process operates at lower temperatures than industrial methods, preserving heat-sensitive vitamins A, D, E, and K. It also creates the characteristic granular texture and rich, nutty aroma that makes our ghee special.',
    category: 'product',
  },
  {
    id: 3,
    question: 'How do I verify the purity of your ghee?',
    answer: 'Every batch of VedicPure ghee is tested by NABL-certified laboratories. We provide detailed lab reports showing Free Fatty Acid (FFA) content, moisture levels, and adulteration tests. You can download these reports from our Lab Reports page or request your specific batch report by contacting us with your jar\'s batch number. We guarantee zero adulteration and will provide a full refund if any impurity is detected.',
    category: 'product',
  },
  {
    id: 4,
    question: 'What are the health benefits of A2 ghee?',
    answer: 'A2 ghee is rich in fat-soluble vitamins (A, D, E, K), CLA (Conjugated Linoleic Acid), and Omega-3 fatty acids. Benefits include: easier digestion due to A2 protein, supports immune function, promotes healthy cholesterol levels, aids nutrient absorption, provides sustained energy, supports bone health, and has anti-inflammatory properties. It\'s also lactose and casein-free, making it suitable for those with dairy sensitivities.',
    category: 'product',
  },
  {
    id: 5,
    question: 'How should I store ghee and what is its shelf life?',
    answer: 'Our A2 ghee has a shelf life of 12 months when stored properly. Keep it in a cool, dry place away from direct sunlight. No refrigeration needed! Always use a clean, dry spoon to avoid contamination. The ghee may appear granular or solidify in cooler temperatures - this is natural and indicates purity. Simply warm slightly to return to liquid state.',
    category: 'product',
  },
  {
    id: 6,
    question: 'What are your shipping options and delivery times?',
    answer: 'We offer free shipping on orders above ₹999. Standard delivery takes 3-5 business days across India. Express delivery (1-2 days) is available in metro cities for an additional charge. All orders are shipped in temperature-controlled packaging to maintain freshness. You\'ll receive tracking information via email once your order ships.',
    category: 'shipping',
  },
  {
    id: 7,
    question: 'Can I subscribe for regular deliveries?',
    answer: 'Yes! We offer subscription plans with 10-15% discount. Choose from monthly, quarterly, or biannual deliveries. You can skip, pause, or cancel anytime with no commitments. Subscribers also get exclusive recipe updates and early access to new products. Manage your subscription easily through your account dashboard.',
    category: 'shipping',
  },
  {
    id: 8,
    question: 'What is your return and refund policy?',
    answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your purchase, return it within 30 days for a full refund. For quality issues or damaged products, we\'ll arrange free pickup and provide immediate replacement or refund. Contact us at support@vedicpure.com with your order number and we\'ll assist you promptly.',
    category: 'shipping',
  },
  {
    id: 9,
    question: 'Do you offer gift packaging?',
    answer: 'Yes! We offer premium gift packaging for ₹99. Our gift sets come in elegant boxes with a personalized message card. Perfect for festivals, weddings, and corporate gifting. We also have luxury gift tins available. Add gift packaging at checkout and include your custom message.',
    category: 'product',
  },
  {
    id: 10,
    question: 'Is your ghee certified organic and how are the cows treated?',
    answer: 'Our ghee is made from milk from ethically-raised Gir cows that graze freely on natural pastures in Rajasthan. The cows are fed 100% grass-based diet with no hormones or antibiotics. While we\'re working on organic certification, we follow all organic practices. We partner only with farms that treat cows with respect and follow traditional, sustainable farming methods.',
    category: 'product',
  },
]

const categories = [
  { id: 'all', name: 'All Questions', icon: MessageCircle },
  { id: 'product', name: 'Product & Quality', icon: Package },
  { id: 'shipping', name: 'Shipping & Returns', icon: Truck },
]

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(1)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gold-600 to-gold-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gold-100">
              Everything you need to know about VedicPure A2 ghee, ordering, and our processes
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gold-600 text-white shadow-lg'
                    : 'bg-white text-brown-700 hover:bg-gold-50 border-2 border-brown-200'
                }`}
              >
                <Icon size={18} />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm border-2 border-brown-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gold-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-brown-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-gold-600 flex-shrink-0 transition-transform duration-200 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              {openId === faq.id && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-brown-100">
                    <p className="text-brown-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-gold-600 to-gold-700 rounded-2xl p-8 text-center text-white">
          <Shield className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gold-100 mb-6">
            Our customer support team is here to help! Reach out via email, phone, or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@vedicpure.com"
              className="bg-white text-gold-700 font-semibold py-3 px-6 rounded-lg hover:bg-gold-50 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+919876543210"
              className="bg-gold-800 text-white border-2 border-white font-semibold py-3 px-6 rounded-lg hover:bg-gold-900 transition-colors"
            >
              Call: +91 98765-43210
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Metadata must be in layout.tsx or a separate metadata file for client components
