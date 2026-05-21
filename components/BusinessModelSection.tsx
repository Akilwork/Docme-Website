'use client'

import { motion } from 'framer-motion'

const BusinessModelSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Define the strategy",
      description: "A clear and well-defined strategy is essential for achieving success in your business, outlines goals, and provides a roadmap for achieving them."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Re-structure business model",
      description: "Re-structuring can help you streamline operations, improve efficiency, and drive growth. A strategic re-structure can be a powerful tool for success."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Improve Performance",
      description: "Improving performance is key to achieving success and enhancing the skills of your business, there are many strategies that can use to drive improvement."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Testing and evaluation",
      description: "This results in a higher quality outcome, increased customer satisfaction and the ability to compete in a demanding of the market."
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Abstract Patterns */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900" />
        
        {/* Abstract geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          {/* Large flowing curves */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z" fill="url(#gradient1)" />
            <path d="M0,600 Q400,300 800,500 T1200,600 L1200,800 L0,800 Z" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Abstract geometric shapes */}
        <div className="absolute inset-0 opacity-10">
          {/* Floating geometric elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-violet-400/20 rounded-2xl rotate-45" />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white/20 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full" />
          <div className="absolute bottom-20 right-10 w-28 h-28 border border-white/20 rounded-2xl rotate-12" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Radial gradient overlays */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-indigo-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-violet-500/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-jakarta leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            They like how we structure{' '}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              their business models
            </span>
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-300"
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold text-white mb-4 font-jakarta group-hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default BusinessModelSection