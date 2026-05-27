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
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Case Study
          </h2>
        </motion.div>

        {/* Bento Grid - First Row (3 Cards) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
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
            <div className="rounded-3xl aspect-[16/9] mb-6 overflow-hidden">
              <img
                src="/assets/Feature/10%20(dark,%20light,%20color).jpg"
                alt="Communication Platform Feature"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Mobile App</p>
            <h3 className="text-xl font-medium leading-snug text-black">
              Class Control: Manage attendance, timetable, and fees right from your pocket
            </h3>
          </motion.div>

          {/* Security & Compliance - Center Card */}
          <motion.div
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-3xl aspect-[16/9] mb-6 overflow-hidden">
              <img
                src="/assets/Feature/School%20Dairy%20V2.1%201.jpg"
                alt="Security & Compliance Feature"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Student Portal</p>
            <h3 className="text-xl font-medium leading-snug text-black">
              School Dairy: Learning, academics, and campus life unified in one student app
            </h3>
          </motion.div>

          {/* 24/7 Support - Right Card */}
          <motion.div
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-3xl aspect-[16/9] mb-6 overflow-hidden">
              <img
                src="/assets/Feature/Canteen.jpg"
                alt="24/7 Support Feature"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Canteen Management</p>
            <h3 className="text-xl font-medium leading-snug text-black">
              BM Canteen: Real-time order tracking and smart sales management for school cafeterias
            </h3>
          </motion.div>
        </motion.div>

        {/* Bento Grid - Second Row (2 Large Cards) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
            <div className="rounded-3xl aspect-[16/9] mb-6 overflow-hidden">
              <img
                src="/assets/Feature/dash.jpg"
                alt="Digital Library Feature"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Analytics</p>
            <h3 className="text-xl font-medium leading-snug text-black">
              Smart Dashboard: Unified financial analytics and performance insights at a glance
            </h3>
          </motion.div>

          {/* Assessment Tools - Right Card */}
          <motion.div
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-3xl aspect-[16/9] mb-6 overflow-hidden">
              <img
                src="/assets/Feature/dash1.jpg"
                alt="Assessment Tools Feature"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">School Management</p>
            <h3 className="text-xl font-medium leading-snug text-black">
              Central Command: Complete school oversight with data-driven insights and reports
            </h3>
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