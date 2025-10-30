'use client'

import { useCartStore } from '@/lib/stores/cartStore'
import Link from 'next/link'
import { CreditCard, Truck, Shield } from 'lucide-react'

export function CartSummary() {
  const { items, getTotalPrice, getTotalItems } = useCartStore()
  
  const subtotal = getTotalPrice()
  const shipping = subtotal > 50 ? 0 : 9.99 // Free shipping over $50
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      {/* Order Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Free Shipping Progress */}
      {subtotal < 50 && (
        <div className="mb-6 p-3 bg-primary-50 border border-primary-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Truck size={16} className="text-primary-600" />
            <span className="text-sm font-medium text-primary-900">
              Free shipping on orders over $50
            </span>
          </div>
          <div className="w-full bg-primary-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(subtotal / 50) * 100}%` }}
            />
          </div>
          <p className="text-xs text-primary-700 mt-1">
            Add ${(50 - subtotal).toFixed(2)} more for free shipping
          </p>
        </div>
      )}

      {/* Checkout Button */}
      <Link
        href="/checkout"
        className="w-full btn-primary text-center text-lg py-3 mb-4 inline-block"
      >
        Proceed to Checkout
      </Link>

      {/* Security Badges */}
      <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Shield size={14} />
          <span>Secure Checkout</span>
        </div>
        <div className="flex items-center gap-1">
          <CreditCard size={14} />
          <span>Multiple Payment Options</span>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/shop"
          className="w-full btn-secondary text-center py-2 inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
