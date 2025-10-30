/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Ignore build errors from missing env vars in CI
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. Remove this in production.
    ignoreDuringBuilds: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Required for Prisma in serverless
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
}

export default nextConfig
