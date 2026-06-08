import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServiceDetailsContent from '@/components/ServiceDetailsContent'
import ImpactSection from '@/components/ImpactSection'

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#F5F5F7]">
      <Navigation />

      {/* Service Details Header — ContactHeader style */}
      <section className="w-full bg-white pt-24 sm:pt-28 md:pt-32 pb-4 md:pb-8">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Title */}
            <div>
              <h1
                className="font-serif font-bold text-black leading-tight tracking-tight"
                style={{ fontSize: 'clamp(3rem, 12vw, 8rem)' }}
              >
                Services
              </h1>
            </div>

            {/* Right: Subtitle */}
            <div className="md:pl-10 lg:pl-20">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
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
