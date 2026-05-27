'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Monitor, 
  Tablet, 
  ArrowRight,
  ExternalLink,
  Code,
  Play
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
      technologies: ['React Native', 'Node.js', 'AI/ML', 'WebRTC'],
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      deviceType: 'mobile',
      screenContent: {
        header: 'EduLearn',
        elements: [
          { type: 'progress', width: '75%', color: 'bg-orange-400' },
          { type: 'card', height: 'h-16', color: 'bg-purple-500/30' },
          { type: 'grid', items: 4, color: 'bg-pink-500/20' }
        ]
      }
    },
    {
      id: 2,
      title: 'Corporate Analytics Dashboard',
      category: 'Corporate',
      description: 'Advanced business intelligence platform with real-time data visualization and predictive analytics.',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      gradient: 'from-blue-600 via-cyan-500 to-teal-400',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      deviceType: 'tablet',
      screenContent: {
        header: 'Analytics Pro',
        elements: [
          { type: 'chart', width: '100%', color: 'bg-cyan-400/40' },
          { type: 'stats', items: 3, color: 'bg-blue-500/30' },
          { type: 'table', rows: 4, color: 'bg-teal-500/20' }
        ]
      }
    },
    {
      id: 3,
      title: 'SecureDoc Enterprise',
      category: 'Security Tech',
      description: 'Enterprise document management with blockchain verification and advanced encryption protocols.',
      technologies: ['Next.js', 'Blockchain', 'Encryption', 'Cloud'],
      gradient: 'from-emerald-600 via-blue-600 to-purple-600',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      deviceType: 'mobile',
      screenContent: {
        header: 'SecureDoc',
        elements: [
          { type: 'document', width: '90%', color: 'bg-emerald-400/30' },
          { type: 'security', items: 2, color: 'bg-blue-500/30' },
          { type: 'verification', color: 'bg-purple-500/20' }
        ]
      }
    }
  ]

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return Smartphone
      case 'tablet': return Tablet
      default: return Monitor
    }
  }

  const renderScreenContent = (content: any, gradient: string) => {
    return (
      <div className="w-full h-full relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full" />
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>
          <div className="text-xs text-white/60 font-medium">{content.header}</div>
          <div className="w-4 h-4" />
        </div>

        {/* Content Area */}
        <div className="p-4 space-y-3">
          {content.elements.map((element: any, index: number) => {
            switch (element.type) {
              case 'progress':
                return (
                  <div key={index} className="space-y-2">
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: element.width }}
                        transition={{ duration: 2, delay: index * 0.5 }}
                        className={`h-full ${element.color} rounded-full`}
                      />
                    </div>
                  </div>
                )
              case 'chart':
                return (
                  <div key={index} className={`${element.color} rounded-lg p-3 relative overflow-hidden`}>
                    <div className="flex items-end space-x-1 h-12">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.random() * 100}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="bg-white/40 rounded-sm flex-1"
                        />
                      ))}
                    </div>
                  </div>
                )
              case 'card':
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`${element.color} ${element.height} rounded-lg backdrop-blur-sm border border-white/10`}
                  />
                )
              case 'grid':
                return (
                  <div key={index} className="grid grid-cols-2 gap-2">
                    {[...Array(element.items)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className={`${element.color} h-8 rounded backdrop-blur-sm border border-white/5`}
                      />
                    ))}
                  </div>
                )
              case 'stats':
                return (
                  <div key={index} className="grid grid-cols-3 gap-2">
                    {[...Array(element.items)].map((_, i) => (
                      <div key={i} className={`${element.color} p-2 rounded text-center`}>
                        <div className="text-xs text-white/80 font-bold">
                          {['24K', '98%', '4.9'][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              case 'table':
                return (
                  <div key={index} className="space-y-1">
                    {[...Array(element.rows)].map((_, i) => (
                      <div key={i} className={`${element.color} h-3 rounded`} />
                    ))}
                  </div>
                )
              case 'document':
                return (
                  <div key={index} className="space-y-2">
                    <div className={`${element.color} h-6 rounded`} style={{ width: element.width }} />
                    <div className="space-y-1">
                      <div className="h-1 bg-white/20 rounded w-full" />
                      <div className="h-1 bg-white/20 rounded w-3/4" />
                      <div className="h-1 bg-white/20 rounded w-1/2" />
                    </div>
                  </div>
                )
              case 'security':
                return (
                  <div key={index} className="flex space-x-2">
                    {[...Array(element.items)].map((_, i) => (
                      <div key={i} className={`${element.color} flex-1 h-8 rounded flex items-center justify-center`}>
                        <div className="w-3 h-3 bg-white/60 rounded-full" />
                      </div>
                    ))}
                  </div>
                )
              case 'verification':
                return (
                  <div key={index} className={`${element.color} h-10 rounded flex items-center justify-center`}>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-4 h-4 bg-green-400 rounded-full"
                    />
                  </div>
                )
              default:
                return null
            }
          })}
        </div>

        {/* Floating particles */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-6 right-4 w-1 h-1 bg-white/60 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 left-6 w-1 h-1 bg-white/40 rounded-full"
        />
      </div>
    )
  }

  return (
    <section className="section-spacing relative overflow-hidden bg-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Our Digital Portfolio
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-1 bg-gray-900/50 backdrop-blur-sm rounded-full p-1 inline-flex">
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
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
              >
                {/* Card Background */}
                <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 h-[500px]">
                  
                  {/* Device Mockup Area - Full Height */}
                  <div className="relative h-full flex items-center justify-center p-8">
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{
                        background: `radial-gradient(circle at center, ${project.glowColor} 0%, transparent 70%)`
                      }}
                    />
                    
                    {/* Device Frame */}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ 
                          rotateY: 5,
                          rotateX: 5,
                          scale: 1.05
                        }}
                        transition={{ duration: 0.3 }}
                        className={`
                          relative bg-gray-800 rounded-3xl shadow-2xl
                          ${project.deviceType === 'mobile' ? 'w-48 h-80' : project.deviceType === 'tablet' ? 'w-64 h-48' : 'w-72 h-48'}
                        `}
                        style={{
                          boxShadow: `0 25px 50px -12px ${project.glowColor}, 0 0 0 1px rgba(255,255,255,0.05)`
                        }}
                      >
                        {/* Screen Bezel */}
                        <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                          {/* Screen Content */}
                          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} relative`}>
                            {renderScreenContent(project.screenContent, project.gradient)}
                          </div>
                        </div>
                        
                        {/* Device Details */}
                        {project.deviceType === 'mobile' && (
                          <>
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full" />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full" />
                          </>
                        )}
                      </motion.div>
                    </div>

                    {/* Hover Details Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col z-20">
                      
                      {/* Header Section */}
                      <div className="p-6 border-b border-white/10">
                        <motion.div 
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                              {project.category}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DeviceIcon className="w-5 h-5 text-white/60" />
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-6 flex flex-col justify-center">
                        {/* Title */}
                        <motion.h3 
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-2xl font-bold text-white mb-4 leading-tight"
                        >
                          {project.title}
                        </motion.h3>
                        
                        {/* Description */}
                        <motion.p 
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3"
                        >
                          {project.description}
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="grid grid-cols-3 gap-4 mb-6"
                        >
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">98%</div>
                            <div className="text-xs text-gray-400">Performance</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">24/7</div>
                            <div className="text-xs text-gray-400">Support</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">5★</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                        </motion.div>

                        {/* Technologies Pills */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="flex flex-wrap gap-2 mb-6"
                        >
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.1 }}
                              className="px-3 py-1.5 text-xs bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm font-medium hover:bg-white/20 transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1.5 text-xs bg-white/5 text-white/60 rounded-full border border-white/10">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </motion.div>
                      </div>

                      {/* Footer Actions */}
                      <div className="p-6 border-t border-white/10">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          className="flex space-x-3"
                        >
                          <button className="flex-1 px-4 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group/btn">
                            <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            <span>Live Demo</span>
                          </button>
                          <button className="px-4 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20 hover:border-white/40 transform hover:scale-[1.02] group/btn">
                            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                          </button>
                          <button className="px-4 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20 hover:border-white/40 transform hover:scale-[1.02]">
                            <Code className="w-4 h-4" />
                          </button>
                        </motion.div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 opacity-20">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-16 h-16 border border-white/20 rounded-full"
                        />
                      </div>
                      
                      <div className="absolute bottom-4 left-4 opacity-10">
                        <div className={`w-8 h-8 bg-gradient-to-r ${project.gradient} rounded-lg rotate-45`} />
                      </div>

                      {/* Gradient Accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                    </div>

                    {/* Simple Title (Always Visible) */}
                    <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">
                        {project.category}
                      </p>
                      
                      {/* Hover Hint */}
                      <div className="flex items-center text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-1 h-1 bg-gray-500 rounded-full mr-2 animate-pulse" />
                        Hover to view details
                      </div>
                    </div>

                    {/* Hover Hint Icon */}
                    <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ExternalLink className="w-4 h-4 text-white/80" />
                        </motion.div>
                      </div>
                    </div>
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
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto hover:bg-gray-100 transition-all duration-300 cursor-pointer"
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