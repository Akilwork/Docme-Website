'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { MagicText } from './ui/magic-text'

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Hero Section.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-end min-h-screen pb-32">
            {/* Left Content */}
            <div className="text-left">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl xl:text-5xl font-semibold text-white leading-tight mb-6"
              >
                Next-Generation Digital Solutions for <span style={{ color: '#6366F1' }}>Education & Business</span>
              </motion.h1>
    
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                DocMe delivers innovative software, smart automation, and enterprise technology services that simplify operations, enhance productivity, and accelerate digital transformation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-semibold text-lg flex items-center space-x-3 transition-all duration-300 cursor-pointer shadow-xl"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 cursor-pointer flex items-center space-x-3"
                >
                  <Play className="w-5 h-5" />
                  <span>Book Demo</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Side - Empty for video focus */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Magic Text Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black pt-2 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <MagicText
              text="DocMe is a next-generation digital solutions company delivering innovative software, smart automation, and enterprise technology services for educational institutions and businesses. We build scalable, secure, and user-focused platforms that simplify operations, enhance productivity, and accelerate digital transformation across industries."
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection