import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TrustedBrands from '@/components/TrustedBrands'
import BusinessModelSection from '@/components/BusinessModelSection'
import EcosystemSection from '@/components/EcosystemSection'
import BentoGridSection from '@/components/BentoGridSection'
import ServicesSection from '@/components/ServicesSection'

import ProductShowcase from '@/components/ProductShowcase'
import OurStorySection from '@/components/OurStorySection'
import TechnologySection from '@/components/TechnologySection'
import PortfolioSection from '@/components/PortfolioSection'
import GrowthSection from '@/components/GrowthSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <TrustedBrands />
      <BusinessModelSection />
      <EcosystemSection />
      <BentoGridSection />
      <OurStorySection />
      <ServicesSection />

      <ProductShowcase />
      {/* <TechnologySection /> */}
      {/* <PortfolioSection /> */}
      {/* <GrowthSection /> */}
      <TestimonialsSection />
      

      <Footer />
      </main>
  )
}