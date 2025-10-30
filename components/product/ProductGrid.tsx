'use client'

import { useState } from 'react'
import { ProductCard } from './ProductCard'
import { ChevronDown, Grid, List } from 'lucide-react'

// Mock data - in real app this would come from API
const products = [
  {
    id: '1',
    title: 'Raw Wildflower Honey',
    price: 24.99,
    compareAtPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 124,
    isOnSale: true,
    isSoldOut: false,
    slug: 'raw-wildflower-honey',
  },
  {
    id: '2',
    title: 'Pure Cow Ghee',
    price: 18.99,
    compareAtPrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 89,
    isOnSale: false,
    isSoldOut: false,
    slug: 'pure-cow-ghee',
  },
  {
    id: '3',
    title: 'Stone-Ground Wheat Flour',
    price: 12.99,
    compareAtPrice: 15.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 67,
    isOnSale: true,
    isSoldOut: false,
    slug: 'stone-ground-wheat-flour',
  },
  {
    id: '4',
    title: 'Organic Jaggery',
    price: 16.99,
    compareAtPrice: null,
    image: 'https://images.unsplash.com/photo-1609501676725-7186f3a4a0a8?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 43,
    isOnSale: false,
    isSoldOut: true,
    slug: 'organic-jaggery',
  },
  {
    id: '5',
    title: 'Cold-Pressed Coconut Oil',
    price: 22.99,
    compareAtPrice: null,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 56,
    isOnSale: false,
    isSoldOut: false,
    slug: 'cold-pressed-coconut-oil',
  },
  {
    id: '6',
    title: 'Raw Manuka Honey',
    price: 45.99,
    compareAtPrice: 52.99,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 78,
    isOnSale: true,
    isSoldOut: false,
    slug: 'raw-manuka-honey',
  },
  {
    id: '7',
    title: 'Buffalo Ghee',
    price: 21.99,
    compareAtPrice: null,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 34,
    isOnSale: false,
    isSoldOut: false,
    slug: 'buffalo-ghee',
  },
  {
    id: '8',
    title: 'Stone-Ground Rye Flour',
    price: 14.99,
    compareAtPrice: null,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 29,
    isOnSale: false,
    isSoldOut: false,
    slug: 'stone-ground-rye-flour',
  },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'newest', label: 'Newest' },
]

export function ProductGrid() {
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showSortMenu, setShowSortMenu] = useState(false)

  const handleSortChange = (value: string) => {
    setSortBy(value)
    setShowSortMenu(false)
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">
            Showing {products.length} products
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              aria-label="Grid view"
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              aria-label="List view"
            >
              <List size={16} />
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
            >
              Sort by: {sortOptions.find(opt => opt.value === sortBy)?.label}
              <ChevronDown size={16} />
            </button>

            {showSortMenu && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortChange(option.value)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                      sortBy === option.value ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <button className="px-3 py-2 text-sm bg-primary-600 text-white rounded">
            1
          </button>
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
            2
          </button>
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
            3
          </button>
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
