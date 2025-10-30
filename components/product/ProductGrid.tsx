'use client'

import { useState } from 'react'
import { ProductCard } from './ProductCard'
import { ChevronDown, Grid, List } from 'lucide-react'

// VedicPure A2 Ghee Products
const products = [
  {
    id: '1',
    title: 'Premium A2 Bilona Ghee - 500g',
    price: 1099,
    compareAtPrice: 1299,
    image: 'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 247,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-bilona-ghee-500g',
  },
  {
    id: '2',
    title: 'Premium A2 Bilona Ghee - 250g',
    price: 599,
    compareAtPrice: 699,
    image: 'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 189,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-bilona-ghee-250g',
  },
  {
    id: '3',
    title: 'Premium A2 Bilona Ghee - 1L',
    price: 2099,
    compareAtPrice: 2499,
    image: 'https://images.unsplash.com/photo-1628408708959-60c0c3a710e7?w=400&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 156,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-bilona-ghee-1l',
  },
  {
    id: '4',
    title: 'A2 Ghee Sampler Set (3x100g)',
    price: 699,
    compareAtPrice: 849,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 98,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-ghee-sampler-set',
  },
  {
    id: '5',
    title: 'Luxury A2 Ghee Gift Tin - 500g',
    price: 1499,
    compareAtPrice: 1799,
    image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 76,
    isOnSale: true,
    isSoldOut: false,
    slug: 'a2-ghee-luxury-gift-tin',
  },
  {
    id: '6',
    title: 'Organic Khapli Wheat Flour - 1kg',
    price: 249,
    compareAtPrice: 299,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 87,
    isOnSale: true,
    isSoldOut: false,
    slug: 'organic-khapli-wheat-flour',
  },
  {
    id: '7',
    title: 'Cold-Pressed Mustard Oil - 500ml',
    price: 329,
    compareAtPrice: 399,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 64,
    isOnSale: true,
    isSoldOut: false,
    slug: 'cold-pressed-mustard-oil',
  },
  {
    id: '8',
    title: 'Organic Turmeric Powder - 100g',
    price: 149,
    compareAtPrice: 189,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 112,
    isOnSale: true,
    isSoldOut: false,
    slug: 'organic-turmeric-powder',
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
