'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart } from 'lucide-react'
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
    <div className="group relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
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
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
            <button
              onClick={handleAddToCart}
              disabled={product.isSoldOut}
              className={`opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                product.isSoldOut
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700'
              } text-white p-2 rounded-full shadow-lg`}
              aria-label={`Add ${product.title} to cart`}
            >
              <ShoppingCart size={20} />
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
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.isSoldOut}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
              product.isSoldOut
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700 text-white'
            }`}
          >
            {product.isSoldOut ? 'Sold Out' : 'Add to Cart'}
          </button>
        </div>
      </Link>
    </div>
  )
}
