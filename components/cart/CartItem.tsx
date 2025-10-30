'use client'

import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCartStore } from '@/lib/stores/cartStore'
import { CartItem as CartItemType } from '@/lib/stores/cartStore'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  const handleRemove = () => {
    removeItem(item.id)
  }

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0">
      {/* Product Image */}
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">
          {item.title}
        </h3>
        {item.variant && (
          <p className="text-sm text-gray-500 mt-1">
            Variant: {item.variant}
          </p>
        )}
        <p className="text-lg font-bold text-brown-900 mt-1">
          ₹{item.price.toLocaleString('en-IN')}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 hover:bg-gray-100 rounded"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center font-medium">
          {item.quantity}
        </span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Total Price */}
      <div className="text-right">
        <p className="text-xl font-bold font-serif text-saffron">
          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"
        aria-label="Remove item"
      >
        <Trash2 size={16} />
      </button>
    </div>
  )
}
