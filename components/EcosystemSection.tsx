'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Smartphone, 
  Users, 
  Brain, 
  Truck, 
  BarChart3, 
  Cloud, 
  DollarSign,
  Zap,
  Shield
} from 'lucide-react'

const EcosystemSection = () => {
  const modules = [
    {
      name: 'School ERP',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Complete academic management',
      features: ['Student Records', 'Curriculum Planning', 'Grade Management']
    },
    {
      name: 'Mobile Apps',
      icon: Smartphone,
      color: 'from-violet-500 to-purple-500',
      description: 'Cross-platform solutions',
      features: ['Parent Portal', 'Student App', 'Teacher Dashboard']
    },
    {
      name: 'HR Systems',
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
      description: 'Human resource management',
      features: ['Payroll', 'Attendance', 'Performance']
    },
    {
      name: 'AI Automation',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      description: 'Intelligent workflows',
      features: ['Smart Scheduling', 'Predictive Analytics', 'Auto Reports']
    },
    {
      name: 'Transport',
      icon: Truck,
      color: 'from-pink-500 to-rose-500',
      description: 'Fleet management system',
      features: ['Route Optimization', 'GPS Tracking', 'Safety Monitoring']
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      color: 'from-indigo-500 to-blue-500',
      description: 'Data-driven insights',
      features: ['Real-time Dashboards', 'Custom Reports', 'KPI Tracking']
    },
    {
      name: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      description: 'Scalable hosting solutions',
      features: ['Auto Scaling', 'Backup Systems', 'Security']
    },
    {
      name: 'Financial Systems',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      description: 'Complete financial management',
      features: ['Fee Collection', 'Accounting', 'Budget Planning']
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
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
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300">Integrated Ecosystem</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            The Complete{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              DOCME
            </span>{' '}
            Ecosystem
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A unified platform connecting every aspect of institutional management through intelligent, 
            interconnected modules that work seamlessly together.
          </p>
        </motion.div>

        {/* Interactive Ecosystem Visualization */}
        <div className="relative">
          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-80 h-80 mx-auto mb-16"
          >
            {/* Core Platform */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-40 h-40 glass-dark rounded-3xl flex items-center justify-center glow-blue cursor-pointer group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-2xl">D</span>
                  </div>
                  <div className="text-lg font-bold text-white">DOCME</div>
                  <div className="text-sm text-gray-400">Core Platform</div>
                </div>
              </motion.div>
            </div>

            {/* Orbiting Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
                  <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
                  <stop offset="100%" stopColor="rgba(34, 211, 238, 0.4)" />
                </linearGradient>
              </defs>
              
              {modules.map((_, index) => (
                <motion.circle
                  key={index}
                  cx="50%"
                  cy="50%"
                  r="140"
                  fill="none"
                  stroke="url(#orbitGradient)"
                  strokeWidth="1"
                  strokeDasharray="10,10"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: 1,
                    rotate: 360 
                  }}
                  transition={{ 
                    pathLength: { duration: 2, delay: index * 0.1 },
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                  }}
                  style={{ transformOrigin: '50% 50%' }}
                />
              ))}
            </svg>

            {/* Orbiting Module Icons */}
            {modules.slice(0, 8).map((module, index) => {
              const angle = (index * 45) * Math.PI / 180
              const radius = 140
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={module.name}
                  className="absolute w-16 h-16"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${x - 32}px, ${y - 32}px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  <div className={`w-full h-full glass-dark rounded-2xl flex items-center justify-center bg-gradient-to-br ${module.color} bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 cursor-pointer group`}>
                    <module.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="glass-dark px-3 py-1 rounded-lg text-xs text-white whitespace-nowrap">
                      {module.name}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Module Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-dark rounded-2xl p-6 hover:glow-blue transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                  {module.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {module.description}
                </p>
                
                <ul className="space-y-1">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-500 flex items-center">
                      <div className="w-1 h-1 bg-indigo-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Integration Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Unified Security',
                  description: 'Single sign-on and centralized security across all modules'
                },
                {
                  icon: Zap,
                  title: 'Real-time Sync',
                  description: 'Instant data synchronization between all connected systems'
                },
                {
                  icon: BarChart3,
                  title: 'Comprehensive Analytics',
                  description: 'Cross-module insights and intelligent reporting'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 glass-dark rounded-2xl flex items-center justify-center mx-auto mb-4 glow-purple">
                    <benefit.icon className="w-8 h-8 text-violet-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection