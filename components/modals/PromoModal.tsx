'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenPromo = localStorage.getItem('promo-closed')
    if (!hasSeenPromo) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('promo-closed', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={handleClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome to Orchard Store!
              </h2>
              
              <p className="text-gray-600 mb-6">
                Get <strong>15% OFF</strong> your first order with our premium starter pack. 
                Discover the finest natural products for your kitchen.
              </p>
              
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-primary-800">
                  <strong>Starter Pack includes:</strong><br />
                  • Raw Honey (500g)<br />
                  • Pure Ghee (250g)<br />
                  • Stone-ground Flour (1kg)
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/packs"
                  className="btn-primary flex-1 text-center"
                  onClick={handleClose}
                >
                  Shop Starter Pack
                </Link>
                <button
                  onClick={handleClose}
                  className="btn-secondary flex-1"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
