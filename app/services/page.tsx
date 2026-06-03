import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServiceDetailsContent from '@/components/ServiceDetailsContent'
import ImpactSection from '@/components/ImpactSection'

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#F5F5F7]">
      <Navigation />

      {/* Service Details Header — ContactHeader style */}
      <section className="w-full bg-white pt-32 pb-16 md:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Title */}
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold text-black leading-tight tracking-tight whitespace-nowrap">
              Services
            </h1>

            {/* Right: Subtitle */}
            <div className="md:pl-10 lg:pl-20">
              <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-sm">
                Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success.
              </p>
            </div>
          </div>
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
