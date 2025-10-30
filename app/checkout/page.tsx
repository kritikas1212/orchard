'use client'

import { useState } from 'react'
import { useCartStore } from '@/lib/stores/cartStore'
import { CheckoutForm } from '@/components/checkout/CheckoutForm'
import { OrderSummary } from '@/components/checkout/OrderSummary'
import { Lock, Shield, Truck } from 'lucide-react'

export default function CheckoutPage() {
  const { items, getTotalPrice, getTotalItems } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some items to your cart before checking out.</p>
          <a
            href="/shop"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    )
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">
            Complete your order securely
          </p>
        </div>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-6 mb-8 p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Lock size={16} className="text-green-600" />
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield size={16} className="text-green-600" />
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Truck size={16} className="text-green-600" />
            <span>Fast Delivery</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div>
            <CheckoutForm 
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
            />
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
