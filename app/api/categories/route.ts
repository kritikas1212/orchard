import { NextResponse } from 'next/server'

// Mock data - in real app this would come from database
const categories = [
  {
    id: 'honey',
    name: 'Honey Collection',
    slug: 'honey',
    description: 'Pure, raw honey from trusted beekeepers',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop',
    productCount: 3,
  },
  {
    id: 'ghee',
    name: 'Ghee Collection',
    slug: 'ghee',
    description: 'Traditional pure ghee for cooking & wellness',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    productCount: 2,
  },
  {
    id: 'flour',
    name: 'Stone-Ground Flours',
    slug: 'flour',
    description: 'Nutrient-rich flours ground the traditional way',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    productCount: 2,
  },
  {
    id: 'spices',
    name: 'Organic Spices',
    slug: 'spices',
    description: 'Premium spices for authentic flavors',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop',
    productCount: 2,
  },
  {
    id: 'oils',
    name: 'Cold-Pressed Oils',
    slug: 'oils',
    description: 'Pure oils extracted using traditional methods',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=400&fit=crop',
    productCount: 2,
  },
  {
    id: 'packs',
    name: 'Combo Packs',
    slug: 'packs',
    description: 'Curated bundles for the perfect pantry',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    productCount: 1,
  },
]

export async function GET() {
  return NextResponse.json({ categories })
}
