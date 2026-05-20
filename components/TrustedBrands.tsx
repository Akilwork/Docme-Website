'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TrustedBrands = () => {
  // Company logos from your assets folder
  const brands = [
    { name: 'Company 1', logo: '/assets/companies/1.png' },
    { name: 'Company 2', logo: '/assets/companies/2.png' },
    { name: 'Company 3', logo: '/assets/companies/3.png' },
    { name: 'Company 4', logo: '/assets/companies/4.png' },
    { name: 'Company 5', logo: '/assets/companies/5.png' },
    { name: 'Company 7', logo: '/assets/companies/7.png' },
    { name: 'Company 8', logo: '/assets/companies/8.png' },
    { name: 'Company 9', logo: '/assets/companies/9.png' },
    { name: 'Company 10', logo: '/assets/companies/10.png' },
    { name: 'Docme Partner', logo: '/assets/companies/image 711.png' },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-gray-400 mb-4">
            Innovative Companies That Trust Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Scrolling Brand Logos */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10" />
          
          {/* Infinity Scrolling Container */}
          <div className="overflow-hidden">
            <style jsx>{`
              @keyframes infinite-scroll {
                from { 
                  transform: translateX(0); 
                }
                to { 
                  transform: translateX(-100%); 
                }
              }
            `}</style>
            
            <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
              {/* First set of logos */}
              <ul 
                className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none'
                style={{ animation: 'infinite-scroll 30s linear infinite' }}
              >
                {brands.map((brand, index) => (
                  <li key={`first-${index}`} className="flex-shrink-0">
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        filter: 'brightness(1.2)',
                      }}
                      className='w-32 h-20 flex items-center justify-center p-4 rounded-xl glass-dark hover:glow-blue transition-all duration-300 cursor-pointer group'
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={120}
                        height={60}
                        className='max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300'
                      />
                    </motion.div>
                  </li>
                ))}
              </ul>
              
              {/* Duplicate set for seamless loop */}
              <ul 
                className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none'
                aria-hidden='true'
                style={{ animation: 'infinite-scroll 30s linear infinite' }}
              >
                {brands.map((brand, index) => (
                  <li key={`second-${index}`} className="flex-shrink-0">
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        filter: 'brightness(1.2)',
                      }}
                      className='w-32 h-20 flex items-center justify-center p-4 rounded-xl glass-dark hover:glow-blue transition-all duration-300 cursor-pointer group'
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={120}
                        height={60}
                        className='max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300'
                      />
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: '50+', label: 'Educational Institutions', icon: '🏫' },
            { value: '100K+', label: 'Active Users Daily', icon: '👥' },
            { value: '99.9%', label: 'System Uptime', icon: '⚡' },
            { value: '2', label: 'Countries & Growing', icon: '🌍' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1 font-jakarta">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Join the growing ecosystem of institutions transforming education with DOCME
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass-dark text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBrands