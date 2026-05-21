import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DOCME - Building Intelligent Digital Ecosystems',
  description: 'Scalable software platforms, AI-powered systems, and enterprise infrastructure solutions transforming modern institutions.',
  keywords: 'ERP, Educational Software, Enterprise Solutions, AI Automation, Digital Transformation',
  authors: [{ name: 'DOCME Team' }],
  openGraph: {
    title: 'DOCME - Building Intelligent Digital Ecosystems',
    description: 'Scalable software platforms, AI-powered systems, and enterprise infrastructure solutions transforming modern institutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOCME - Building Intelligent Digital Ecosystems',
    description: 'Scalable software platforms, AI-powered systems, and enterprise infrastructure solutions transforming modern institutions.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className={`${inter.className} antialiased bg-navy-900 text-white overflow-x-hidden`}>
        <div className="relative min-h-screen">
          {/* Background mesh gradient */}
          <div className="fixed inset-0 mesh-bg opacity-10 pointer-events-none" />
          
          {/* Floating particles */}
          <div className="particles">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
          
          {children}
        </div>
      </body>
    </html>
  )
}