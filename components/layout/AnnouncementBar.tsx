'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDismissed = localStorage.getItem('announcement-dismissed')
    if (!isDismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('announcement-dismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="bg-brown-800 text-ivory py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-sm font-medium text-center">
          ✨ From our Gir cows to your kitchen — Lab-tested A2 Ghee | <span className="font-bold text-gold-400">Flat 10% OFF</span> — use code: <span className="font-bold">WELCOME10</span>
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-4 p-1 hover:bg-brown-700 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
