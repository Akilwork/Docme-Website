'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Globe, 
  Layers, 
  TrendingUp, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const WhyChooseSection = () => {
  const features = [
    {
      title: 'Enterprise Architecture',
      description: 'Built for scale with microservices architecture and cloud-native design',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      size: 'large',
      metrics: ['99.9% Uptime', 'Auto-scaling', 'Load Balancing'],
      visual: 'architecture'
    },
    {
      title: 'AI-Driven Automation',
      description: 'Intelligent workflows that adapt and optimize automatically',
      icon: Zap,
      color: 'from-violet-500 to-purple-500',
      size: 'large',
      metrics: ['70% Time Saved', 'Smart Predictions', 'Auto Reports'],
      visual: 'ai'
    },
    {
      title: 'Secure Cloud Systems',
      description: 'Enterprise-grade security with end-to-end encryption',
      icon: Shield,
      color: 'from-emerald-500 to-teal-500',
      size: 'medium',
      metrics: ['256-bit Encryption', 'SOC 2 Compliant', 'GDPR Ready']
    },
    {
      title: 'Cross-Platform Scale',
      description: 'Seamless experience across web, mobile, and desktop',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      size: 'medium',
      metrics: ['Multi-device Sync', 'Offline Support', 'PWA Ready']
    },
    {
      title: 'Real-time Sync',
      description: 'Instant data synchronization across all modules',
      icon: Clock,
      color: 'from-pink-500 to-rose-500',
      size: 'small',
      metrics: ['<100ms Latency']
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Grows with your institution from 100 to 100,000+ users',
      icon: TrendingUp,
      color: 'from-indigo-500 to-blue-500',
      size: 'small',
      metrics: ['Auto-scaling']
    }
  ]

  const metrics = [
    { value: '99.9%', label: 'System Uptime', icon: Shield },
    { value: '<100ms', label: 'Response Time', icon: Zap },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '100K+', label: 'Users Supported', icon: Users },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass-dark px-6 py-3 rounded-full mb-6"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-gray-300">Enterprise Excellence</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            Why Choose{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              DOCME
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built for the future with enterprise-grade architecture, AI-powered automation, 
            and uncompromising security standards.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Large Feature Cards */}
          {features.filter(f => f.size === 'large').map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="md:col-span-2 glass-dark rounded-3xl p-8 hover:glow-blue transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {feature.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className="px-3 py-1 glass text-xs text-gray-300 rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Visual Elements */}
                {feature.visual === 'architecture' && (
                  <div className="flex items-center space-x-2 opacity-60">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                        className="w-8 h-8 glass rounded-lg"
                      />
                    ))}
                  </div>
                )}

                {feature.visual === 'ai' && (
                  <div className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      className="w-16 h-16 border-2 border-violet-500/30 rounded-full relative"
                    >
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-violet-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 translate-y-1/2" />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Medium Feature Cards */}
          {features.filter(f => f.size === 'medium').map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="md:col-span-1 glass-dark rounded-3xl p-6 hover:glow-purple transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {feature.description}
              </p>
              
              <div className="space-y-1">
                {feature.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-xs text-gray-500 flex items-center">
                    <div className="w-1 h-1 bg-indigo-400 rounded-full mr-2" />
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Small Feature Cards */}
          {features.filter(f => f.size === 'small').map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-dark rounded-2xl p-4 hover:glow-cyan transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-xs mb-3">
                {feature.description}
              </p>
              
              <div className="text-xs text-gray-500">
                {feature.metrics[0]}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="text-center glass-dark rounded-2xl p-6 hover:glow-blue transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-center mb-3">
                <metric.icon className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-bold text-white mb-1 font-jakarta group-hover:text-gradient transition-colors">
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-semibold text-lg flex items-center space-x-2 mx-auto hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 cursor-pointer"
          >
            <span>Experience DOCME Enterprise</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseSection