'use client'

import { motion } from 'framer-motion'

const ContactHeader = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold text-black leading-tight tracking-tight whitespace-nowrap">
              Contact Us
            </h1>
          </motion.div>

          {/* Right Column: Subtitle */}
          <motion.div
            className="md:pl-10 lg:pl-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-sm">
              Tell us when and where you'd like to go and we'll confirm availability within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactHeader
