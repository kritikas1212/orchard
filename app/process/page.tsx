import Image from 'next/image'
import Link from 'next/link'
import { Milk, Users, Droplet, Flame, TestTubes, Package, Award, Heart, Shuffle } from 'lucide-react'

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gold-600 to-gold-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-gold-500/30 text-gold-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Traditional Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              The Bilona Method
            </h1>
            <p className="text-xl text-gold-100 leading-relaxed">
              Our time-honored process of making pure A2 ghee, passed down through generations. 
              Every jar is crafted with care, tradition, and reverence for Vedic wisdom.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-ivory">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-gold-200 to-gold-400 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[15px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg font-medium">Watch Our Process Video</p>
                  <p className="text-sm opacity-90">(Coming Soon)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Process Steps */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-900 mb-4">
                From Farm to Jar
              </h2>
              <p className="text-lg text-brown-600 max-w-3xl mx-auto">
                Each step in our process is designed to preserve the purity, nutrition, 
                and authentic flavor of traditional A2 ghee.
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1: Sourcing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center">
                      <Milk size={32} className="text-gold-600" />
                    </div>
                    <div>
                      <span className="text-gold-600 font-semibold text-sm">Step 1</span>
                      <h3 className="text-2xl font-serif font-bold text-brown-900">
                        Pure A2 Milk Sourcing
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-brown-600 leading-relaxed">
                    We partner with ethical farms in Rajasthan where indigenous <strong>Gir cows</strong> graze 
                    freely on natural pastures. These cows produce milk naturally rich in <strong>A2 beta-casein protein</strong>, 
                    which is easier to digest than regular A1 milk.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gold-700 mb-1">100%</div>
                      <div className="text-sm text-brown-600">Grass-Fed Diet</div>
                    </div>
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gold-700 mb-1">Zero</div>
                      <div className="text-sm text-brown-600">Hormones Used</div>
                    </div>
                  </div>
                </div>

                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop"
                    alt="Gir cows grazing in natural pasture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 2: Curd Making */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center">
                      <Droplet size={32} className="text-gold-600" />
                    </div>
                    <div>
                      <span className="text-gold-600 font-semibold text-sm">Step 2</span>
                      <h3 className="text-2xl font-serif font-bold text-brown-900">
                        Traditional Curd Setting
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-brown-600 leading-relaxed">
                    Fresh A2 milk is gently heated and set into curd using traditional <strong>Dahi culture</strong>. 
                    The curd is allowed to ferment naturally for 8-10 hours, developing beneficial probiotics 
                    and the characteristic tangy flavor that enhances the final ghee.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-brown-600">
                      <span className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2"></span>
                      <span>Natural fermentation process</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown-600">
                      <span className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2"></span>
                      <span>Traditional Dahi culture used</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown-600">
                      <span className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2"></span>
                      <span>8-10 hours fermentation time</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:order-1 relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=600&fit=crop"
                    alt="Fresh curd in traditional clay pot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 3: Bilona Churning */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center">
                      <Shuffle size={32} className="text-gold-600" />
                    </div>
                    <div>
                      <span className="text-gold-600 font-semibold text-sm">Step 3</span>
                      <h3 className="text-2xl font-serif font-bold text-brown-900">
                        Hand-Churned Bilona
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-brown-600 leading-relaxed">
                    The curd is <strong>hand-churned</strong> in traditional wooden churns using the ancient <strong>Bilona method</strong>. 
                    This slow churning process (2-3 hours) separates the butter from buttermilk while preserving 
                    all nutrients and creating the signature granular texture.
                  </p>

                  <div className="bg-gradient-to-br from-gold-50 to-ivory border-2 border-gold-200 rounded-xl p-6">
                    <h4 className="font-serif font-bold text-brown-900 mb-3">Why Bilona?</h4>
                    <p className="text-sm text-brown-600 mb-3">
                      Unlike machine-churned ghee, the Bilona method maintains lower temperatures, 
                      preserving heat-sensitive vitamins and creating superior aroma and taste.
                    </p>
                    <div className="text-sm font-medium text-gold-700">
                      ⏱️ 2-3 hours of hand-churning per batch
                    </div>
                  </div>
                </div>

                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
                    alt="Traditional Bilona hand-churning process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 4: Slow Cooking */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center">
                      <Flame size={32} className="text-gold-600" />
                    </div>
                    <div>
                      <span className="text-gold-600 font-semibold text-sm">Step 4</span>
                      <h3 className="text-2xl font-serif font-bold text-brown-900">
                        Wood-Fire Cooking
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-brown-600 leading-relaxed">
                    The butter is slow-cooked over a <strong>traditional wood fire</strong>, creating the characteristic 
                    nutty aroma and deep golden color. This gentle heating process caramelizes milk solids 
                    and evaporates moisture, resulting in pure, shelf-stable ghee.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Heart size={16} className="text-gold-600" />
                      <span className="text-sm text-brown-600">Temperature controlled by hand</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart size={16} className="text-gold-600" />
                      <span className="text-sm text-brown-600">No industrial processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart size={16} className="text-gold-600" />
                      <span className="text-sm text-brown-600">Rich granular texture achieved</span>
                    </div>
                  </div>
                </div>

                <div className="lg:order-1 relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=800&h=600&fit=crop"
                    alt="Slow-cooking ghee over wood fire"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 5: Lab Testing */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center">
                      <TestTubes size={32} className="text-gold-600" />
                    </div>
                    <div>
                      <span className="text-gold-600 font-semibold text-sm">Step 5</span>
                      <h3 className="text-2xl font-serif font-bold text-brown-900">
                        Rigorous Lab Testing
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-brown-600 leading-relaxed">
                    Every batch is tested by <strong>NABL-certified laboratories</strong> for purity, 
                    free fatty acid content, moisture levels, and adulteration. We only release 
                    batches that pass our stringent quality standards.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border-2 border-gold-200 rounded-lg p-4">
                      <div className="text-lg font-bold text-gold-700 mb-1">&lt; 0.12%</div>
                      <div className="text-xs text-brown-600">Free Fatty Acid</div>
                    </div>
                    <div className="bg-white border-2 border-gold-200 rounded-lg p-4">
                      <div className="text-lg font-bold text-gold-700 mb-1">&lt; 0.08%</div>
                      <div className="text-xs text-brown-600">Moisture Content</div>
                    </div>
                    <div className="bg-white border-2 border-gold-200 rounded-lg p-4">
                      <div className="text-lg font-bold text-gold-700 mb-1">Zero</div>
                      <div className="text-xs text-brown-600">Adulteration</div>
                    </div>
                    <div className="bg-white border-2 border-gold-200 rounded-lg p-4">
                      <div className="text-lg font-bold text-gold-700 mb-1">100%</div>
                      <div className="text-xs text-brown-600">Pure A2</div>
                    </div>
                  </div>

                  <Link
                    href="/lab-reports"
                    className="inline-flex items-center text-gold-700 hover:text-gold-800 font-medium"
                  >
                    View Lab Reports →
                  </Link>
                </div>

                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop"
                    alt="Lab testing for ghee purity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 6: Packaging */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center">
                      <Package size={32} className="text-gold-600" />
                    </div>
                    <div>
                      <span className="text-gold-600 font-semibold text-sm">Step 6</span>
                      <h3 className="text-2xl font-serif font-bold text-brown-900">
                        Premium Packaging
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-brown-600 leading-relaxed">
                    Our ghee is packaged in <strong>food-grade glass jars</strong> to preserve freshness and prevent 
                    contamination. Each jar is sealed, labeled with batch details, and shipped with care 
                    to maintain the perfect temperature.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-brown-600">
                      <span className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2"></span>
                      <span>Food-grade glass jars (eco-friendly & reusable)</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown-600">
                      <span className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2"></span>
                      <span>Batch number and expiry clearly marked</span>
                    </li>
                    <li className="flex items-start gap-2 text-brown-600">
                      <span className="w-1.5 h-1.5 bg-gold-600 rounded-full mt-2"></span>
                      <span>Temperature-controlled shipping</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:order-1 relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800&h=600&fit=crop"
                    alt="Premium ghee packaging in glass jars"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Traditional Methods Matter */}
      <div className="py-16 bg-gradient-to-br from-ivory to-gold-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-900 mb-4">
                Why Traditional Methods Matter
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-gold-200">
                <Award className="w-10 h-10 text-gold-600 mb-4" />
                <h3 className="font-serif font-bold text-brown-900 mb-3">
                  Superior Nutrition
                </h3>
                <p className="text-sm text-brown-600">
                  Low-temperature processing preserves heat-sensitive vitamins A, D, E, and K.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gold-200">
                <Heart className="w-10 h-10 text-gold-600 mb-4" />
                <h3 className="font-serif font-bold text-brown-900 mb-3">
                  Authentic Flavor
                </h3>
                <p className="text-sm text-brown-600">
                  Hand-churning and wood-fire create the rich, nutty aroma that's missing in commercial ghee.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gold-200">
                <Users className="w-10 h-10 text-gold-600 mb-4" />
                <h3 className="font-serif font-bold text-brown-900 mb-3">
                  Ethical Practice
                </h3>
                <p className="text-sm text-brown-600">
                  Supporting traditional farmers and preserving ancient Vedic knowledge for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gold-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Experience the Purity of Bilona A2 Ghee
          </h2>
          <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
            Taste the difference that traditional methods and pure A2 milk make. 
            Your kitchen deserves authentic Vedic ghee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-gold-700 font-semibold py-3 px-8 rounded-lg hover:bg-ivory transition-colors inline-block"
            >
              Shop A2 Ghee
            </Link>
            <Link
              href="/lab-reports"
              className="bg-gold-700 text-white border-2 border-white font-semibold py-3 px-8 rounded-lg hover:bg-gold-800 transition-colors inline-block"
            >
              View Lab Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
