import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ServiceDetailsContent from '@/components/ServiceDetailsContent'
import ImpactSection from '@/components/ImpactSection'

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#F5F5F7]">
      <Navigation />
      
      {/* Service Details Header/Hero */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden pt-20">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/80 z-10" />
          <img 
            src="/assets/Feature/dash1.jpg" 
            alt="Service Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Service
          </h1>
          


        </div>
      </section>

      {/* Service Details Main Content */}
      <ServiceDetailsContent />

      {/* Impact Section */}
      <ImpactSection />

      <Footer />
    </main>
  )
}
