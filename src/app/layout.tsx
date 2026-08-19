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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-navy-900 text-white overflow-x-clip`}>
        <div className="relative min-h-screen">
          {/* Background mesh gradient */}
          <div className="fixed inset-0 mesh-bg opacity-10 pointer-events-none" />
          
          {/* Floating particles — deterministic positions to avoid SSR hydration mismatch */}
          <div className="particles">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${((i * 47.3 + 13.7) % 97).toFixed(4)}%`,
                  animationDelay: `${((i * 1.3) % 8).toFixed(2)}s`,
                  animationDuration: `${(8 + (i * 0.7) % 4).toFixed(2)}s`,
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