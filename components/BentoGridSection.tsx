'use client'

import { motion } from 'framer-motion'

const BentoGridSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            DOCME Features
          </h2>
        </motion.div>

        {/* Bento Grid - First Row (3 Cards) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Communication Platform - Left Card */}
          <motion.div 
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-200 rounded-3xl aspect-[4/3] mb-6 group-hover:bg-gray-300 transition-colors duration-300"></div>
            <p className="text-gray-800 text-base leading-relaxed">
              Integrated communication platform with messaging, video conferencing, 
              discussion forums, and announcement systems fostering collaboration 
              between students, teachers, and parents.
            </p>
          </motion.div>

          {/* Security & Compliance - Center Card */}
          <motion.div 
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-200 rounded-3xl aspect-[4/3] mb-6 group-hover:bg-gray-300 transition-colors duration-300"></div>
            <p className="text-gray-800 text-base leading-relaxed">
              Bank-grade security with end-to-end encryption, multi-factor 
              authentication, and full compliance with educational data privacy 
              regulations including FERPA and GDPR standards.
            </p>
          </motion.div>

          {/* 24/7 Support - Right Card */}
          <motion.div 
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-200 rounded-3xl aspect-[4/3] mb-6 group-hover:bg-gray-300 transition-colors duration-300"></div>
            <p className="text-gray-800 text-base leading-relaxed">
              Round-the-clock expert support with dedicated account managers, 
              comprehensive training programs, and extensive documentation 
              ensuring smooth implementation and ongoing success.
            </p>
          </motion.div>
        </motion.div>

        {/* Bento Grid - Second Row (2 Large Cards) */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Digital Library - Left Card */}
          <motion.div 
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-200 rounded-3xl aspect-[4/3] mb-6 group-hover:bg-gray-300 transition-colors duration-300"></div>
            <p className="text-gray-800 text-base leading-relaxed">
              Comprehensive digital library with over 10,000 educational resources, 
              interactive content, multimedia materials, and advanced search 
              capabilities for enhanced learning experiences.
            </p>
          </motion.div>

          {/* Assessment Tools - Right Card */}
          <motion.div 
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-200 rounded-3xl aspect-[4/3] mb-6 group-hover:bg-gray-300 transition-colors duration-300"></div>
            <p className="text-gray-800 text-base leading-relaxed">
              Advanced assessment and evaluation tools featuring automated grading, 
              plagiarism detection, customizable rubrics, and detailed performance 
              analytics to streamline the evaluation process and ensure academic integrity.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BentoGridSection