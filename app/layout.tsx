import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { PromoModal } from '@/components/modals/PromoModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orchard Store - Premium Natural Products',
  description: 'Discover our collection of premium natural products including honey, ghee, and stone-ground flours. Quality you can trust.',
  keywords: 'natural products, honey, ghee, organic, premium quality',
  authors: [{ name: 'Orchard Store' }],
  openGraph: {
    title: 'Orchard Store - Premium Natural Products',
    description: 'Discover our collection of premium natural products including honey, ghee, and stone-ground flours.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AnnouncementBar />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <PromoModal />
        </Providers>
      </body>
    </html>
  )
}
