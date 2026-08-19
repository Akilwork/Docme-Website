'use client'

import { motion } from 'framer-motion'
import InfinityBrand from './ui/infinity-brand'

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
    <section className="py-20 relative overflow-hidden bg-black w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-site mx-auto"
        >
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            INNOVATIVE COMPANIES THAT TRUST US
          </h2>
        </motion.div>

        {/* Infinity Brand Animation - Full Width */}
        <InfinityBrand 
          brands={brands} 
          speed="slow" 
          pauseOnHover={false}
          className="w-full"
        />
      </div>
    </section>
  )
}

export default TrustedBrands