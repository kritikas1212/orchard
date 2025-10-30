'use client'

import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Products', count: 12 },
  { id: 'honey', name: 'Honey Collection', count: 3 },
  { id: 'ghee', name: 'Ghee Collection', count: 2 },
  { id: 'flour', name: 'Stone-Ground Flours', count: 2 },
  { id: 'spices', name: 'Organic Spices', count: 2 },
  { id: 'oils', name: 'Cold-Pressed Oils', count: 2 },
  { id: 'packs', name: 'Combo Packs', count: 1 },
]

const priceRanges = [
  { id: '0-20', label: 'Under $20', min: 0, max: 2000 },
  { id: '20-30', label: '$20 - $30', min: 2000, max: 3000 },
  { id: '30-50', label: '$30 - $50', min: 3000, max: 5000 },
  { id: '50+', label: 'Over $50', min: 5000, max: null },
]

const ratings = [
  { id: '5', label: '5 Stars', value: 5 },
  { id: '4', label: '4 Stars & Up', value: 4 },
  { id: '3', label: '3 Stars & Up', value: 3 },
]

export function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [selectedRating, setSelectedRating] = useState<string | null>(null)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handlePriceRangeChange = (rangeId: string) => {
    setSelectedPriceRange(selectedPriceRange === rangeId ? null : rangeId)
  }

  const handleRatingChange = (ratingId: string) => {
    setSelectedRating(selectedRating === ratingId ? null : ratingId)
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPriceRange(null)
    setSelectedRating(null)
  }

  const hasActiveFilters = selectedCategory !== 'all' || !!selectedPriceRange || !!selectedRating

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="w-full flex items-center justify-between p-3 bg-white border border-gray-300 rounded-lg"
        >
          <span className="font-medium">Filters</span>
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Mobile Filter Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <FilterContent
                selectedCategory={selectedCategory}
                selectedPriceRange={selectedPriceRange}
                selectedRating={selectedRating}
                onCategoryChange={handleCategoryChange}
                onPriceRangeChange={handlePriceRangeChange}
                onRatingChange={handleRatingChange}
                onClearFilters={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <FilterContent
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
          selectedRating={selectedRating}
          onCategoryChange={handleCategoryChange}
          onPriceRangeChange={handlePriceRangeChange}
          onRatingChange={handleRatingChange}
          onClearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>
    </>
  )
}

interface FilterContentProps {
  selectedCategory: string
  selectedPriceRange: string | null
  selectedRating: string | null
  onCategoryChange: (categoryId: string) => void
  onPriceRangeChange: (rangeId: string) => void
  onRatingChange: (ratingId: string) => void
  onClearFilters: () => void
  hasActiveFilters: boolean
}

function FilterContent({
  selectedCategory,
  selectedPriceRange,
  selectedRating,
  onCategoryChange,
  onPriceRangeChange,
  onRatingChange,
  onClearFilters,
  hasActiveFilters,
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="w-full text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Clear all filters
        </button>
      )}

      {/* Categories */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={() => onCategoryChange(category.id)}
                className="mr-3 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700 flex-1">
                {category.name}
              </span>
              <span className="text-xs text-gray-500">
                ({category.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                value={range.id}
                checked={selectedPriceRange === range.id}
                onChange={() => onPriceRangeChange(range.id)}
                className="mr-3 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Customer Rating</h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label key={rating.id} className="flex items-center">
              <input
                type="radio"
                name="rating"
                value={rating.id}
                checked={selectedRating === rating.id}
                onChange={() => onRatingChange(rating.id)}
                className="mr-3 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">
                {rating.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
