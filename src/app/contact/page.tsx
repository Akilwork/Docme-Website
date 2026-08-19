import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactHeader from '@/components/ContactHeader'
import ContactSection from '@/components/ContactSection'
import ContactMapSection from '@/components/ContactMapSection'
import ContactFAQSection from '@/components/ContactFAQSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — DOCME',
  description: 'Get in touch with DOCME. Tell us about your project and we\'ll confirm availability within 24 hours.',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <ContactHeader />
        <ContactSection />
        <ContactMapSection />
        <ContactFAQSection />
      </div>
      <Footer />
    </main>
  )
}
