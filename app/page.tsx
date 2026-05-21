import ClientWrapper from '@/components/ClientWrapper'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TrustedBrands from '@/components/TrustedBrands'
import BusinessModelSection from '@/components/BusinessModelSection'
import EcosystemSection from '@/components/EcosystemSection'
import BentoGridSection from '@/components/BentoGridSection'

import SolutionsSection from '@/components/SolutionsSection'
import ProductShowcase from '@/components/ProductShowcase'
import TechnologySection from '@/components/TechnologySection'
import PortfolioSection from '@/components/PortfolioSection'
import GrowthSection from '@/components/GrowthSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProcessSection from '@/components/ProcessSection'

export default function Home() {
  return (
    <ClientWrapper>
      <main className="relative">
      <Navigation />
      <HeroSection />
      <TrustedBrands />
      <BusinessModelSection />
      <EcosystemSection />
      <BentoGridSection />

      <SolutionsSection />
      <ProductShowcase />
      <TechnologySection />
      <PortfolioSection />
      <GrowthSection />
      <TestimonialsSection />
      <ProcessSection />
      
      {/* Final CTA Section */}
      
      <section className="py-24 text-center bg-gradient-to-r from-indigo-900/50 to-violet-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Build the Future With DOCME?</h2>
          <p className="text-xl text-gray-300 mb-8">Transform your institution with intelligent digital infrastructure and scalable enterprise systems.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-semibold text-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 cursor-pointer">
              Book Consultation
            </button>
            <button className="px-8 py-4 glass-dark text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 cursor-pointer">
              Contact Team
            </button>
          </div>
        </div>
      </section>
      
      <footer className="py-16 bg-navy-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-bold font-jakarta text-gradient">DOCME</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building intelligent digital ecosystems for education and enterprise.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Educational ERP</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Enterprise Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">AI Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Mobile Applications</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 DOCME. All rights reserved. Building the future of digital education.</p>
          </div>
        </div>
      </footer>
      </main>
    </ClientWrapper>
  )
}