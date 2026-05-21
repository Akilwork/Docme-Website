'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Monitor, 
  Tablet, 
  ArrowRight,
  ExternalLink,
  Code,
  Palette,
  Zap
} from 'lucide-react'

const PortfolioSection = () => {
  const portfolioCategories = [
    { name: 'All Projects', active: true },
    { name: 'Education', active: false },
    { name: 'Corporate', active: false },
    { name: 'Security Tech', active: false }
  ]

  const projects = [
    {
      id: 1,
      title: 'EduTech Mobile Platform',
      category: 'Education',
      description: 'Comprehensive learning management system with AI-powered personalization and real-time collaboration tools.',
      image: '/api/placeholder/400/600', // Placeholder for mobile mockup
      technologies: ['React Native', 'Node.js', 'AI/ML', 'WebRTC'],
      metrics: ['50K+ Students', '99.9% Uptime', '4.8★ Rating'],
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      deviceType: 'mobile',
      features: ['Offline Learning', 'Live Classes', 'Progress Tracking']
    },
    {
      id: 2,
      title: 'Corporate Analytics Dashboard',
      category: 'Corporate',
      description: 'Advanced business intelligence platform with real-time data visualization and predictive analytics.',
      image: '/api/placeholder/600/400', // Placeholder for tablet mockup
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      metrics: ['1M+ Data Points', 'Real-time Sync', '40% Efficiency Gain'],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      deviceType: 'tablet',
      features: ['Custom Reports', 'AI Insights', 'Team Collaboration']
    },
    {
      id: 3,
      title: 'SecureDoc Enterprise',
      category: 'Security Tech',
      description: 'Enterprise document management with blockchain verification and advanced encryption protocols.',
      image: '/api/placeholder/400/600', // Placeholder for mobile mockup
      technologies: ['Next.js', 'Blockchain', 'Encryption', 'Cloud'],
      metrics: ['Bank-grade Security', 'ISO 27001', '256-bit Encryption'],
      gradient: 'from-emerald-500 via-blue-500 to-purple-500',
      deviceType: 'mobile',
      features: ['Blockchain Verify', 'E-signatures', 'Audit Trail']
    }
  ]

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return Smartphone
      case 'tablet': return Tablet
      default: return Monitor
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
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
            <Code className="w-5 h-5 text-indigo-400" />
            <span className="text-gray-300">Our Work</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            Our Digital{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Showcasing innovative solutions across education, corporate, and security technology sectors.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  category.active
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg'
                    : 'glass-dark text-gray-300 hover:text-white hover:glow-blue'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const DeviceIcon = getDeviceIcon(project.deviceType)
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group glass-dark rounded-3xl overflow-hidden hover:glow-blue transition-all duration-500 cursor-pointer"
              >
                {/* Project Image/Mockup */}
                <div className="relative h-80 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  
                  {/* Device Frame */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative">
                      {/* Device Mockup */}
                      <div className={`
                        relative bg-gray-900 rounded-3xl p-2 shadow-2xl
                        ${project.deviceType === 'mobile' ? 'w-48 h-72' : 'w-64 h-48'}
                      `}>
                        {/* Screen */}
                        <div className={`
                          w-full h-full bg-gradient-to-br ${project.gradient} rounded-2xl p-4 relative overflow-hidden
                        `}>
                          {/* Screen Content Simulation */}
                          <div className="space-y-2">
                            <div className="h-2 bg-white/30 rounded w-3/4" />
                            <div className="h-2 bg-white/20 rounded w-1/2" />
                            <div className="h-8 bg-white/10 rounded mt-4" />
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div className="h-6 bg-white/20 rounded" />
                              <div className="h-6 bg-white/20 rounded" />
                            </div>
                          </div>
                          
                          {/* Floating Elements */}
                          <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-4 right-4 w-4 h-4 bg-white/40 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-8 left-4 w-3 h-3 bg-white/30 rounded-full"
                          />
                        </div>
                        
                        {/* Device Details */}
                        {project.deviceType === 'mobile' && (
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-full" />
                        )}
                      </div>
                      
                      {/* Device Icon */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <DeviceIcon className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="flex space-x-4"
                    >
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Palette className="w-4 h-4 text-gray-400" />
                      <Zap className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-indigo-400 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-xs text-gray-400 flex items-center">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

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
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection