import Link from 'next/link'
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react'

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We've sent a confirmation email with your order details.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Package className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-900">Order #12345</span>
            </div>
            <p className="text-xs text-gray-500">
              Estimated delivery: 3-5 business days
            </p>
          </div>

          {/* Next Steps */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Mail className="w-4 h-4 text-primary-600" />
              <span>Check your email for order confirmation</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Package className="w-4 h-4 text-primary-600" />
              <span>We'll notify you when your order ships</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/account"
              className="w-full btn-primary text-center py-2 inline-flex items-center justify-center"
            >
              View Order Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/shop"
              className="w-full btn-secondary text-center py-2 inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
