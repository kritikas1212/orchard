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
  title: 'VedicPure - Premium A2 Bilona Ghee | Hand-Churned From Gir Cows',
  description: 'Buy premium A2 Vedic Ghee from grass-fed Gir cows. Hand-churned using traditional Bilona method, lab-tested & preservative-free. Subscribe and save 10%.',
  keywords: 'A2 ghee, Bilona ghee, Gir cow ghee, pure desi ghee, organic ghee, hand-churned ghee, grass-fed ghee, A2 milk ghee, traditional ghee, Vedic ghee',
  authors: [{ name: 'VedicPure' }],
  openGraph: {
    title: 'VedicPure - Premium A2 Bilona Ghee | Hand-Churned From Gir Cows',
    description: 'Buy premium A2 Vedic Ghee from grass-fed Gir cows. Hand-churned using traditional Bilona method, lab-tested & preservative-free.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'VedicPure',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VedicPure - Premium A2 Bilona Ghee',
    description: 'Hand-churned A2 ghee from grass-fed Gir cows. Lab-tested purity.',
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
