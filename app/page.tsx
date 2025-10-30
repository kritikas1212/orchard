import { GheeHero } from '@/components/sections/GheeHero'
import { WhyA2 } from '@/components/sections/WhyA2'
import { OurProcess } from '@/components/sections/OurProcess'
import { VideoSection } from '@/components/sections/VideoSection'
import { BestSellers } from '@/components/sections/BestSellers'
import { Testimonials } from '@/components/sections/Testimonials'
import { NewsletterSignup } from '@/components/sections/NewsletterSignup'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <GheeHero />
      <WhyA2 />
      <OurProcess />
      <VideoSection />
      <BestSellers />
      <Testimonials />
      <NewsletterSignup />
    </div>
  )
}
