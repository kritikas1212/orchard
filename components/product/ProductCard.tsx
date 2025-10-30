'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart, Check } from 'lucide-react'
import { useCartStore } from '@/lib/stores/cartStore'

interface Product {
  id: string
  title: string
  price: number
  compareAtPrice?: number | null
  image: string
  rating: number
  reviewCount: number
  isOnSale: boolean
  isSoldOut: boolean
  slug: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (product.isSoldOut) return

    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    })

    // Show success feedback
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
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
    <div className="group relative bg-white rounded-xl shadow-sm border-2 border-brown-100 overflow-hidden hover:shadow-xl hover:border-gold-300 transition-all duration-300">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-ivory">
          <Image
            src={product.image}
            alt={`${product.title} - Premium A2 Bilona ghee hand-churned from grass-fed Gir cows`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isOnSale && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                Sale
              </span>
            )}
            {product.isSoldOut && (
              <span className="bg-gray-500 text-white text-xs font-medium px-2 py-1 rounded">
                Sold Out
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={handleAddToCart}
              disabled={product.isSoldOut || isAdded}
              className={`opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                product.isSoldOut
                  ? 'bg-gray-400 cursor-not-allowed'
                  : isAdded
                  ? 'bg-green-600'
                  : 'bg-saffron hover:bg-saffron-dark hover:scale-110'
              } text-white p-3 rounded-full shadow-xl`}
              aria-label={`Add ${product.title} to cart`}
            >
              {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-500 ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-brown-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-brown-500 line-through">
                ₹{product.compareAtPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.isSoldOut || isAdded}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
              product.isSoldOut
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : isAdded
                ? 'bg-green-600 text-white'
                : 'bg-saffron hover:bg-saffron-dark text-white shadow-md hover:shadow-lg'
            }`}
          >
            {product.isSoldOut ? (
              'Sold Out'
            ) : isAdded ? (
              <>
                <Check size={18} />
                Added to Cart!
              </>
            ) : (
              <>
                <ShoppingCart size={18} />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </Link>
    </div>
  )
}
