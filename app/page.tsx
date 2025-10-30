import { HeroSlider } from '@/components/sections/HeroSlider'
import { BestSellers } from '@/components/sections/BestSellers'
import { CategoriesGrid } from '@/components/sections/CategoriesGrid'
import { Testimonials } from '@/components/sections/Testimonials'
import { NewsletterSignup } from '@/components/sections/NewsletterSignup'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <BestSellers />
      <CategoriesGrid />
      <Testimonials />
      <NewsletterSignup />
    </div>
  )
}
