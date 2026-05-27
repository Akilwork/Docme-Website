'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Monitor, 
  Smartphone, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react'

const ProductShowcase = () => {
  const features = [
    {
      icon: Users,
      title: 'Attendance Automation',
      description: 'AI-powered facial recognition with real-time tracking'
    },
    {
      icon: Smartphone,
      title: 'Parent App',
      description: 'Real-time updates and communication portal'
    },
    {
      icon: BarChart3,
      title: 'Exam Management',
      description: 'Comprehensive assessment and grading system'
    },
    {
      icon: Monitor,
      title: 'Fees Tracking',
      description: 'Automated billing and payment processing'
    },
    {
      icon: CheckCircle,
      title: 'Transport Monitoring',
      description: 'GPS tracking with safety notifications'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and performance metrics'
    }
  ]

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8">



        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-20 items-start">

          {/* ── Left Column: Title · Stats · CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 space-y-10"
          >
            {/* Headline */}
            <div className="space-y-5">
              <h2 className="text-5xl xl:text-[3.6rem] font-bold font-jakarta leading-[1.1] tracking-tight text-white">
                Next Generation
                <br />
                School Management
                <br />
                Platform
              </h2>
              <p className="text-base text-gray-400 leading-relaxed max-w-[26rem]">
                Experience the future of educational management with our comprehensive
                platform that seamlessly integrates every aspect of institutional
                operations into one intelligent ecosystem.
              </p>
            </div>

            {/* Stats — Glass Cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '50+',   label: 'Schools Using' },
                { value: '99.9%', label: 'Uptime SLA'    },
                { value: '24/7',  label: 'Support'        },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-4 text-center
                             backdrop-blur-sm overflow-hidden group
                             hover:border-indigo-500/30 transition-colors duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-2xl font-bold text-white mb-1 font-jakarta">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(99, 102, 241, 0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5
                         bg-indigo-600 text-white rounded-xl font-semibold
                         hover:bg-indigo-500 transition-all duration-300 cursor-pointer"
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* ── Right Column: Product Image · Features Grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-5"
          >
            {/* Product Image */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Bottom fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

              <Image
                src="/assets/Feature/BM One.jpg"
                alt="BM One Dashboard"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />


            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="group flex items-start gap-3 p-3.5 rounded-xl
                             border border-white/5 bg-white/[0.03]
                             hover:border-indigo-500/25 hover:bg-white/[0.07]
                             transition-all duration-300 cursor-pointer"
                >
                  <div className="w-7 h-7 bg-indigo-600/80 rounded-lg flex items-center
                                  justify-center flex-shrink-0 mt-0.5
                                  group-hover:bg-indigo-500 transition-colors duration-300">
                    <feature.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5 leading-snug">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-snug">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ProductShowcase