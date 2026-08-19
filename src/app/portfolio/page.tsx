import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PortfolioHeader from '@/components/PortfolioHeader'
import PortfolioSection from '@/components/PortfolioSection'

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <PortfolioHeader />
      </div>
      <PortfolioSection />
      <Footer />
    </main>
  )
}
