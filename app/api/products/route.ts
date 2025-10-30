import { NextResponse } from 'next/server'

// Mock data - in real app this would come from database
const products = [
  {
    id: '1',
    title: 'Raw Wildflower Honey',
    slug: 'raw-wildflower-honey',
    description: 'Pure, unfiltered wildflower honey collected from diverse floral sources.',
    priceCents: 2499,
    compareAtCents: 2999,
    sku: 'HNY-WF-500',
    images: [
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    ],
    inventory: 50,
    rating: 4.8,
    reviewCount: 124,
    isOnSale: true,
    isSoldOut: false,
    categories: ['honey'],
  },
  {
    id: '2',
    title: 'Pure Cow Ghee',
    slug: 'pure-cow-ghee',
    description: 'Traditional pure ghee made from grass-fed cow milk using ancient methods.',
    priceCents: 1899,
    compareAtCents: null,
    sku: 'GHEE-CW-250',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    ],
    inventory: 30,
    rating: 4.9,
    reviewCount: 89,
    isOnSale: false,
    isSoldOut: false,
    categories: ['ghee'],
  },
  {
    id: '3',
    title: 'Stone-Ground Wheat Flour',
    slug: 'stone-ground-wheat-flour',
    description: 'Nutrient-rich whole wheat flour ground using traditional stone mills.',
    priceCents: 1299,
    compareAtCents: 1599,
    sku: 'FLR-WH-1KG',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    ],
    inventory: 75,
    rating: 4.7,
    reviewCount: 67,
    isOnSale: true,
    isSoldOut: false,
    categories: ['flour'],
  },
  {
    id: '4',
    title: 'Organic Jaggery',
    slug: 'organic-jaggery',
    description: 'Pure organic jaggery made from sugarcane juice without chemical processing.',
    priceCents: 1699,
    compareAtCents: null,
    sku: 'JAG-ORG-500',
    images: [
      'https://images.unsplash.com/photo-1609501676725-7186f3a4a0a8?w=400&h=400&fit=crop',
    ],
    inventory: 0,
    rating: 4.6,
    reviewCount: 43,
    isOnSale: false,
    isSoldOut: true,
    categories: ['spices'],
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('q')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '12')

  let filteredProducts = products

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(product =>
      product.categories.includes(category)
    )
  }

  // Filter by search query
  if (search) {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    )
  }

  // Pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  return NextResponse.json({
    products: paginatedProducts,
    pagination: {
      page,
      limit,
      total: filteredProducts.length,
      pages: Math.ceil(filteredProducts.length / limit),
    },
  })
}
