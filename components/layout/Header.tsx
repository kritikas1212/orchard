'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react'
import { useCartStore } from '@/lib/stores/cartStore'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCartStore()
  
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Ghee', href: '/shop' },
    { name: 'Process', href: '/process' },
    { name: 'Shop', href: '/shop' },
    { name: 'Bundles', href: '/packs' },
    { name: 'Lab Reports', href: '/lab-reports' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-brown-200' 
        : 'bg-white shadow-sm border-b border-gray-200'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <span className="text-white font-bold text-xl font-serif">V</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-serif text-brown-800 leading-tight tracking-tight">VedicPure</span>
                  <span className="text-[10px] text-gold-700 font-medium tracking-wider uppercase">Premium A2 Ghee</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* User Account */}
            <Link
              href="/account"
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
