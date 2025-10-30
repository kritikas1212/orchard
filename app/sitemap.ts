import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vedicpure.vercel.app'

  // Static pages
  const staticPages = [
    '',
    '/shop',
    '/process',
    '/packs',
    '/lab-reports',
    '/recipes',
    '/about',
    '/blog',
    '/collections',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Product pages (would be dynamic in real app)
  const productSlugs = [
    'a2-bilona-ghee-250g',
    'a2-bilona-ghee-500g',
    'a2-bilona-ghee-1l',
    'a2-ghee-luxury-gift-tin',
    'a2-ghee-sampler-set',
  ]

  const productPages = productSlugs.map((slug) => ({
    url: `${baseUrl}/product/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...productPages]
}
