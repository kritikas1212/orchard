'use client'

import { useCartStore } from '@/lib/stores/cartStore'
import Link from 'next/link'
import { CreditCard, Truck, Shield } from 'lucide-react'

export function CartSummary() {
  const { items, getTotalPrice, getTotalItems } = useCartStore()
  
  const subtotal = getTotalPrice()
  const shipping = subtotal > 999 ? 0 : 99 // Free shipping over ₹999
  const tax = subtotal * 0.18 // 18% GST
  const total = subtotal + shipping + tax

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      {/* Order Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-brown-600">Subtotal ({getTotalItems()} items)</span>
          <span className="font-semibold text-brown-900">₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-brown-600">Shipping</span>
          <span className="font-semibold text-brown-900">
            {shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping.toLocaleString('en-IN')}`}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-brown-600">GST (18%)</span>
          <span className="font-semibold text-brown-900">₹{tax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
        </div>
        
        <div className="border-t-2 border-gold-200 pt-4 mt-4">
          <div className="flex justify-between text-xl font-bold font-serif">
            <span className="text-brown-900">Total</span>
            <span className="text-saffron">₹{total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
          </div>
        </div>
      </div>

      {/* Free Shipping Progress */}
      {subtotal < 999 && subtotal > 0 && (
        <div className="mb-6 p-4 bg-gold-50 border-2 border-gold-200 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <Truck size={18} className="text-gold-600" />
            <span className="text-sm font-semibold text-gold-900">
              Free shipping on orders over ₹999
            </span>
          </div>
          <div className="w-full bg-gold-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-gold-500 to-gold-600 h-3 rounded-full transition-all duration-300 shadow-sm"
              style={{ width: `${Math.min((subtotal / 999) * 100, 100)}%` }}
            />
          </div>
          <p className="text-xs text-gold-700 mt-2 font-medium">
            Add ₹{(999 - subtotal).toLocaleString('en-IN')} more for FREE shipping! 🎉
          </p>
        </div>
      )}
      
      {subtotal >= 999 && (
        <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
          <div className="flex items-center gap-2 text-green-800">
            <Truck size={18} className="text-green-600" />
            <span className="text-sm font-semibold">
              🎉 You qualify for FREE shipping!
            </span>
          </div>
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
