'use client'

import { useEffect, useState } from 'react'
import { Shield, Truck, RotateCcw, Cookie, FileText, Lock } from 'lucide-react'

export default function PoliciesPage() {
  const [activeSection, setActiveSection] = useState('shipping')

  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setActiveSection(hash)
      // Scroll to section
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  const sections = [
    { id: 'shipping', icon: Truck, title: 'Shipping Policy' },
    { id: 'returns', icon: RotateCcw, title: 'Returns & Refunds' },
    { id: 'privacy', icon: Lock, title: 'Privacy Policy' },
    { id: 'terms', icon: FileText, title: 'Terms of Service' },
    { id: 'cookies', icon: Cookie, title: 'Cookie Policy' },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gold-600 to-gold-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Policies & Terms
            </h1>
            <p className="text-xl text-gold-100">
              Transparency and trust are at the heart of everything we do at VedicPure
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border-2 border-brown-200 p-4 sticky top-24">
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id)
                        window.location.hash = section.id
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-gold-100 text-gold-800 font-semibold'
                          : 'text-brown-700 hover:bg-gold-50'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Shipping Policy */}
            <section id="shipping" className="bg-white rounded-2xl border-2 border-brown-200 p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="text-gold-600" size={28} />
                <h2 className="text-3xl font-serif font-bold text-brown-900">
                  Shipping Policy
                </h2>
              </div>

              <div className="prose max-w-none space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Delivery Timeline</h3>
                  <ul className="space-y-2 text-brown-600">
                    <li>• <strong>Metro Cities</strong>: 2-3 business days</li>
                    <li>• <strong>Major Cities</strong>: 3-5 business days</li>
                    <li>• <strong>Other Areas</strong>: 5-7 business days</li>
                    <li>• <strong>Remote Areas</strong>: 7-10 business days</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Shipping Charges</h3>
                  <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                    <p className="text-brown-800 mb-2">
                      <strong className="text-gold-800">FREE SHIPPING</strong> on orders above ₹999
                    </p>
                    <p className="text-brown-600 text-sm">
                      For orders below ₹999, a flat shipping charge of ₹99 applies.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Order Tracking</h3>
                  <p className="text-brown-600">
                    Once your order is dispatched, you'll receive a tracking number via email and SMS. 
                    Track your order in real-time through your account dashboard or the courier's website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Packaging</h3>
                  <p className="text-brown-600">
                    All orders are packed in temperature-controlled, eco-friendly packaging to ensure your ghee 
                    arrives fresh and pure. Each jar is sealed and wrapped to prevent any damage during transit.
                  </p>
                </div>
              </div>
            </section>

            {/* Returns & Refunds */}
            <section id="returns" className="bg-white rounded-2xl border-2 border-brown-200 p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="text-gold-600" size={28} />
                <h2 className="text-3xl font-serif font-bold text-brown-900">
                  Returns & Refunds
                </h2>
              </div>

              <div className="prose max-w-none space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">30-Day Satisfaction Guarantee</h3>
                  <p className="text-brown-600">
                    We stand behind the quality of our A2 ghee. If you're not completely satisfied with your purchase, 
                    you can return it within 30 days for a full refund.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Return Process</h3>
                  <ol className="space-y-3 text-brown-600">
                    <li><strong>1. Contact Us</strong>: Email support@vedicpure.com or call +91 98765-43210 with your order number</li>
                    <li><strong>2. Return Approval</strong>: We'll approve your return and provide return instructions</li>
                    <li><strong>3. Pack Securely</strong>: Return the product in original packaging (unused if possible)</li>
                    <li><strong>4. Free Pickup</strong>: We'll arrange free pickup from your address (for quality issues)</li>
                    <li><strong>5. Refund Processed</strong>: Once received, refund is processed within 5-7 business days</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Quality Issues</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-900 font-medium mb-2">
                      If you receive a damaged, leaked, or quality-compromised product:
                    </p>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Contact us immediately with photos</li>
                      <li>• We'll arrange immediate free pickup</li>
                      <li>• Choose replacement or full refund</li>
                      <li>• Priority shipping for replacement</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Refund Timeline</h3>
                  <ul className="space-y-2 text-brown-600">
                    <li>• <strong>UPI/Wallet</strong>: 2-3 business days</li>
                    <li>• <strong>Credit Card</strong>: 5-7 business days</li>
                    <li>• <strong>Bank Transfer</strong>: 7-10 business days</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy Policy */}
            <section id="privacy" className="bg-white rounded-2xl border-2 border-brown-200 p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="text-gold-600" size={28} />
                <h2 className="text-3xl font-serif font-bold text-brown-900">
                  Privacy Policy
                </h2>
              </div>

              <div className="prose max-w-none space-y-6 text-brown-600">
                <p className="text-sm text-brown-500">
                  <strong>Last Updated:</strong> October 30, 2024
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Information We Collect</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Personal Information</strong>: Name, email, phone, shipping address</li>
                    <li>• <strong>Payment Information</strong>: Processed securely via Stripe (we don't store card details)</li>
                    <li>• <strong>Order History</strong>: Products purchased, order dates, preferences</li>
                    <li>• <strong>Analytics Data</strong>: Page views, browsing behavior (anonymized)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">How We Use Your Information</h3>
                  <ul className="space-y-2">
                    <li>• Process and fulfill your orders</li>
                    <li>• Send order confirmations and updates</li>
                    <li>• Improve our products and services</li>
                    <li>• Send marketing communications (with your consent)</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Data Security</h3>
                  <p>
                    We use industry-standard encryption (SSL/TLS) to protect your data. All payment processing 
                    is handled securely by Stripe. We never store your credit card information on our servers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul className="space-y-2">
                    <li>• Access your personal data</li>
                    <li>• Request data correction or deletion</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Export your data</li>
                  </ul>
                  <p className="mt-3">
                    Contact <a href="mailto:privacy@vedicpure.com" className="text-gold-700 hover:underline">privacy@vedicpure.com</a> for any privacy requests.
                  </p>
                </div>
              </div>
            </section>

            {/* Terms of Service */}
            <section id="terms" className="bg-white rounded-2xl border-2 border-brown-200 p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-gold-600" size={28} />
                <h2 className="text-3xl font-serif font-bold text-brown-900">
                  Terms of Service
                </h2>
              </div>

              <div className="prose max-w-none space-y-6 text-brown-600">
                <p className="text-sm text-brown-500">
                  <strong>Last Updated:</strong> October 30, 2024
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Product Quality Commitment</h3>
                  <p>
                    All VedicPure A2 ghee is hand-churned using the traditional Bilona method from grass-fed Gir cow milk. 
                    Every batch is lab-tested for purity. We guarantee zero adulteration or artificial additives.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Pricing & Payment</h3>
                  <ul className="space-y-2">
                    <li>• All prices are in Indian Rupees (₹) and include applicable taxes</li>
                    <li>• We accept UPI, Credit/Debit cards, Net Banking, and Wallets</li>
                    <li>• Payment processing is handled securely by Stripe</li>
                    <li>• Subscription prices are locked at signup; changes notified 30 days in advance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Order Cancellation</h3>
                  <p>
                    You can cancel your order within 24 hours of placement for a full refund. 
                    After 24 hours, if the order hasn't shipped, contact us for cancellation (subject to a 10% processing fee). 
                    Once shipped, standard return policy applies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Subscription Terms</h3>
                  <ul className="space-y-2">
                    <li>• Subscriptions can be paused, skipped, or cancelled anytime</li>
                    <li>• Modify delivery frequency or products through your account</li>
                    <li>• Discount applies as long as subscription is active</li>
                    <li>• We'll notify you 3 days before each scheduled delivery</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Limitation of Liability</h3>
                  <p>
                    While we ensure the highest quality standards, we are not liable for any allergic reactions or 
                    health issues arising from consumption. Consult your healthcare provider if you have specific dietary concerns.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookie Policy */}
            <section id="cookies" className="bg-white rounded-2xl border-2 border-brown-200 p-8 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="text-gold-600" size={28} />
                <h2 className="text-3xl font-serif font-bold text-brown-900">
                  Cookie Policy
                </h2>
              </div>

              <div className="prose max-w-none space-y-6 text-brown-600">
                <p className="text-sm text-brown-500">
                  <strong>Last Updated:</strong> October 30, 2024
                </p>

                <p>
                  VedicPure uses cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and personalize content. This policy explains what cookies we use and why.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">What Are Cookies?</h3>
                  <p>
                    Cookies are small text files stored on your device when you visit our website. 
                    They help us remember your preferences and understand how you use our site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Types of Cookies We Use</h3>
                  
                  <div className="space-y-4 mt-4">
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <h4 className="font-semibold text-brown-900 mb-2">1. Essential Cookies (Required)</h4>
                      <p className="text-sm">
                        These cookies are necessary for the website to function. They enable core features like 
                        security, shopping cart, and account login. Cannot be disabled.
                      </p>
                      <p className="text-xs text-brown-500 mt-2">
                        Examples: Authentication tokens, cart session, security cookies
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-brown-900 mb-2">2. Analytics Cookies (Optional)</h4>
                      <p className="text-sm">
                        Help us understand how visitors interact with our website. We use Plausible Analytics 
                        (privacy-focused, GDPR-compliant) and optionally Google Analytics.
                      </p>
                      <p className="text-xs text-brown-500 mt-2">
                        Examples: Page views, session duration, traffic sources (all anonymized)
                      </p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-brown-900 mb-2">3. Preference Cookies (Optional)</h4>
                      <p className="text-sm">
                        Remember your settings and preferences for a better experience.
                      </p>
                      <p className="text-xs text-brown-500 mt-2">
                        Examples: Language preference, announcement bar dismissal, newsletter popup status
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-brown-900 mb-2">4. Marketing Cookies (Optional)</h4>
                      <p className="text-sm">
                        Track visitors across websites to display relevant ads and measure campaign effectiveness.
                      </p>
                      <p className="text-xs text-brown-500 mt-2">
                        Examples: Facebook Pixel, Google Ads remarketing (only if you consent)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Managing Cookie Preferences</h3>
                  <p className="mb-4">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="space-y-2">
                    <li>• <strong>Browser Settings</strong>: Most browsers allow you to refuse or delete cookies</li>
                    <li>• <strong>Opt-Out Links</strong>: Use Google Analytics opt-out browser add-on</li>
                    <li>• <strong>Our Cookie Banner</strong>: Customize preferences when you first visit (reappears after clearing cookies)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Third-Party Cookies</h3>
                  <p>
                    We use trusted third-party services that may set their own cookies:
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li>• <strong>Stripe</strong>: Payment processing (essential)</li>
                    <li>• <strong>Plausible</strong>: Privacy-friendly analytics (optional)</li>
                    <li>• <strong>Google Analytics</strong>: Website analytics (optional)</li>
                    <li>• <strong>Vercel</strong>: Hosting and performance monitoring (essential)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">GDPR Compliance</h3>
                  <p>
                    If you're in the EU/EEA, we comply with GDPR requirements:
                  </p>
                  <ul className="space-y-2 mt-3">
                    <li>• We obtain consent before using non-essential cookies</li>
                    <li>• You can withdraw consent anytime</li>
                    <li>• We don't sell your personal data to third parties</li>
                    <li>• You have the right to access, correct, or delete your data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brown-900 mb-3">Cookie Retention</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Session Cookies</strong>: Deleted when you close your browser</li>
                    <li>• <strong>Persistent Cookies</strong>: Remain until expiry (typically 30 days to 1 year)</li>
                    <li>• <strong>Preference Cookies</strong>: Remain until you clear them or change settings</li>
                  </ul>
                </div>

                <div className="bg-gold-50 border-2 border-gold-200 rounded-xl p-6 mt-8">
                  <h4 className="font-semibold text-brown-900 mb-3">Questions About Cookies?</h4>
                  <p className="text-sm">
                    If you have questions about how we use cookies, contact us at{' '}
                    <a href="mailto:privacy@vedicpure.com" className="text-gold-700 hover:underline font-medium">
                      privacy@vedicpure.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-gold-600 to-gold-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Need More Information?
              </h2>
              <p className="text-gold-100 mb-6 max-w-xl mx-auto">
                Our team is always here to help. Reach out with any questions about our policies, products, or services.
              </p>
              <a
                href="/contact"
                className="bg-white text-gold-700 font-semibold py-3 px-8 rounded-lg hover:bg-gold-50 transition-colors inline-block"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
