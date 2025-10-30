'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

interface SubscriptionToggleProps {
  available: boolean
  intervals: string[]
  discount: number
  basePrice: number
  onSelect: (selected: boolean, interval: string | null) => void
}

export function SubscriptionToggle({
  available,
  intervals,
  discount,
  basePrice,
  onSelect,
}: SubscriptionToggleProps) {
  const [isSubscription, setIsSubscription] = useState(false)
  const [selectedInterval, setSelectedInterval] = useState(intervals[0] || 'monthly')

  if (!available) return null

  const subscriptionPrice = basePrice * (1 - discount / 100)
  const savings = basePrice - subscriptionPrice

  const handleToggle = (subscribe: boolean) => {
    setIsSubscription(subscribe)
    onSelect(subscribe, subscribe ? selectedInterval : null)
  }

  const handleIntervalChange = (interval: string) => {
    setSelectedInterval(interval)
    if (isSubscription) {
      onSelect(true, interval)
    }
  }

  const intervalLabels: Record<string, string> = {
    monthly: 'Monthly',
    quarterly: 'Every 3 Months',
    biannual: 'Every 6 Months',
  }

  return (
    <div className="bg-gold-50 border-2 border-gold-200 rounded-lg p-4 space-y-4">
      <div className="flex items-start gap-3">
        <button
          onClick={() => handleToggle(!isSubscription)}
          className={`mt-0.5 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
            isSubscription
              ? 'bg-gold-600 border-gold-600'
              : 'bg-white border-brown-300'
          }`}
          aria-label={isSubscription ? 'Subscription selected' : 'Select subscription'}
        >
          {isSubscription && <Check size={16} className="text-white" />}
        </button>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-brown-900">Subscribe & Save {discount}%</h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gold-600 text-white">
              Save ₹{savings.toFixed(0)}
            </span>
          </div>
          
          <p className="text-sm text-brown-600 mb-3">
            Never run out! Get automatic deliveries and save on every order.
          </p>

          {isSubscription && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-brown-800">
                Delivery Frequency:
              </label>
              <div className="flex flex-wrap gap-2">
                {intervals.map((interval) => (
                  <button
                    key={interval}
                    onClick={() => handleIntervalChange(interval)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedInterval === interval
                        ? 'bg-gold-600 text-white'
                        : 'bg-white text-brown-700 border border-brown-300 hover:border-gold-400'
                    }`}
                  >
                    {intervalLabels[interval]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isSubscription && (
            <div className="mt-3 pt-3 border-t border-gold-300">
              <div className="flex items-center justify-between text-sm">
                <span className="text-brown-600">Subscription Price:</span>
                <span className="font-semibold text-gold-800 text-lg">
                  ₹{subscriptionPrice.toFixed(0)}/{selectedInterval === 'monthly' ? 'mo' : 'delivery'}
                </span>
              </div>
            </div>
          )}

          <div className="mt-3 flex items-start gap-2 text-xs text-brown-600">
            <Check size={12} className="text-gold-600 mt-0.5 flex-shrink-0" />
            <span>Cancel anytime • Skip or modify deliveries • No commitments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
