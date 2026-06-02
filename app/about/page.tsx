import Navigation from '@/components/Navigation'
import AboutSection from '@/components/AboutSection'
import AboutVideoSection from '@/components/AboutVideoSection'
import ImpactSection from '@/components/ImpactSection'
import InsightSection from '@/components/InsightSection'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />
        <div className="pt-20">
          <AboutSection />
        </div>
        <AboutVideoSection />
        <ImpactSection />
        <InsightSection />
        
      <Footer />
    </main>
  )
}
