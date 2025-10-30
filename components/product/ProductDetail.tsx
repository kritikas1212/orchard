'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Heart, Share2, Truck, Shield, RotateCcw, ShoppingCart, Check } from 'lucide-react'
import { useCartStore } from '@/lib/stores/cartStore'

interface Product {
  id: string
  title: string
  slug: string
  description: string
  priceCents: number
  compareAtCents?: number | null
  sku: string
  images: string[]
  inventory: number
  rating: number
  reviewCount: number
  isOnSale: boolean
  isSoldOut: boolean
  variants: Array<{ id: string; name: string; price: number }>
  features: string[]
  nutrition: {
    calories: number
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
}

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    if (product.isSoldOut) return

    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `${product.id}-${selectedVariant.id}`,
        title: `${product.title} - ${selectedVariant.name}`,
        price: selectedVariant.price / 100,
        image: product.images[0],
        variant: selectedVariant.name,
      })
    }

    // Show success feedback
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 3000)

    // Scroll to top to see cart update
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
              {product.isOnSale && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sale
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? 'border-primary-500'
                      : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold font-serif text-brown-900">
                ₹{(selectedVariant.price / 100).toLocaleString('en-IN')}
              </span>
              {product.compareAtCents && (
                <span className="text-2xl text-brown-400 line-through">
                  ₹{(product.compareAtCents / 100).toLocaleString('en-IN')}
                </span>
              )}
              {product.compareAtCents && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹{((product.compareAtCents - selectedVariant.price) / 100).toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                      selectedVariant.id === variant.id
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={product.isSoldOut || isAdded}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 ${
                  product.isSoldOut
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : isAdded
                    ? 'bg-green-600 text-white scale-105'
                    : 'bg-saffron hover:bg-saffron-dark text-white shadow-lg hover:shadow-xl hover:scale-105'
                }`}
              >
                {product.isSoldOut ? (
                  'Sold Out'
                ) : isAdded ? (
                  <>
                    <Check size={24} />
                    Added {quantity} to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={24} />
                    Add {quantity} to Cart
                  </>
                )}
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 py-2 px-4 border rounded-lg font-medium transition-colors ${
                    isWishlisted
                      ? 'border-red-300 bg-red-50 text-red-700'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Heart size={16} className="inline mr-2" />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </button>
                <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:border-gray-400 transition-colors">
                  <Share2 size={16} className="inline mr-2" />
                  Share
                </button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck size={16} />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield size={16} />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <RotateCcw size={16} />
                <span>Easy returns and exchanges</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-primary-500 text-primary-600 font-medium">
                Description
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
                Nutrition Facts
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
                Reviews
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
              
              <h4 className="text-md font-semibold text-gray-900 mb-3">Nutritional Information</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Calories</span>
                    <div className="font-medium">{product.nutrition.calories}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Protein</span>
                    <div className="font-medium">{product.nutrition.protein}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Carbs</span>
                    <div className="font-medium">{product.nutrition.carbs}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Fat</span>
                    <div className="font-medium">{product.nutrition.fat}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Fiber</span>
                    <div className="font-medium">{product.nutrition.fiber}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

