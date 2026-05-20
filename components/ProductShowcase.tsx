'use client'

import { motion } from 'framer-motion'
import { 
  Monitor, 
  Smartphone, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Play,
  Star
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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Laptop Mockup */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gray-800 rounded-t-2xl p-2 shadow-2xl"
              >
                {/* Laptop Screen */}
                <div className="bg-navy-900 rounded-lg overflow-hidden aspect-video relative">
                  {/* Browser Chrome */}
                  <div className="flex items-center space-x-2 p-3 bg-gray-700">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex-1 bg-gray-600 rounded px-3 py-1 text-xs text-gray-300">
                      docme.app/dashboard
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded w-32 mb-2" />
                        <div className="h-2 bg-gray-600 rounded w-24" />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg" />
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                          className="glass-dark rounded p-2"
                        >
                          <div className="h-1 bg-cyan-400 rounded w-full mb-1" />
                          <div className="h-2 bg-gray-600 rounded w-3/4" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Chart Area */}
                    <div className="glass-dark rounded-lg p-3">
                      <div className="flex items-end space-x-1 h-16">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ height: [8, Math.random() * 40 + 8, 8] }}
                            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
                            className="bg-gradient-to-t from-indigo-500 to-violet-500 rounded-sm flex-1"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Laptop Base */}
              <div className="h-4 bg-gray-700 rounded-b-2xl shadow-lg" />
            </div>

            {/* Floating Mobile Preview */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-8 -bottom-8 w-24 h-48 bg-gray-800 rounded-3xl p-2 shadow-2xl"
            >
              <div className="bg-navy-900 rounded-2xl h-full p-2">
                <div className="space-y-2">
                  <div className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded w-full" />
                  <div className="h-1 bg-gray-600 rounded w-3/4" />
                  <div className="space-y-1 mt-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <div className="h-1 bg-gray-600 rounded flex-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Dashboard Cards */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-12 top-8 glass-dark rounded-2xl p-4 w-32"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4 text-indigo-400" />
                <span className="text-xs text-gray-300">Students</span>
              </div>
              <div className="text-lg font-bold text-white">2,847</div>
              <div className="text-xs text-emerald-400">+12% this month</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 glass-dark px-4 py-2 rounded-full"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Award-Winning Platform</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold font-jakarta leading-tight"
            >
              Next Generation{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                School Management
              </span>{' '}
              Platform
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Experience the future of educational management with our comprehensive platform 
              that seamlessly integrates every aspect of institutional operations into one 
              intelligent ecosystem.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 glass rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-gradient transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 cursor-pointer"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 glass-dark text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              {[
                { value: '50+', label: 'Schools Using' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1 font-jakarta">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase