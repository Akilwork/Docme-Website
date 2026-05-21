'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Building, 
  DollarSign, 
  Globe,
  Calendar,
  Target,
  Award
} from 'lucide-react'

const GrowthSection = () => {
  const metrics = [
    {
      value: '$2.4M',
      label: 'Annual Revenue',
      change: '+28%',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      value: '50+',
      label: 'Partner Institutions',
      change: '+15 this year',
      icon: Building,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: '100K+',
      label: 'Active Users',
      change: '+45% growth',
      icon: Users,
      color: 'from-violet-500 to-purple-500'
    },
    {
      value: '2',
      label: 'Countries',
      change: 'UAE & India',
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'DOCME founded with vision to transform educational technology',
      milestone: 'Company Launch',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2021',
      title: 'First Product',
      description: 'Launched comprehensive School ERP system with 5 pilot institutions',
      milestone: '5 Schools',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Expanded to 25 institutions and introduced mobile applications',
      milestone: '25 Institutions',
      color: 'from-violet-500 to-purple-500'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Launched AI-powered analytics and automation features',
      milestone: 'AI Platform',
      color: 'from-pink-500 to-rose-500'
    },
    {
      year: '2024',
      title: 'International Expansion',
      description: 'Established presence in UAE and India with 50+ institutions',
      milestone: '2 Countries',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Targeting 100+ institutions across Middle East and Asia',
      milestone: 'Global Scale',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const regions = [
    {
      name: 'United Arab Emirates',
      institutions: 25,
      users: '45K+',
      growth: '+35%',
      flag: '🇦🇪'
    },
    {
      name: 'India',
      institutions: 25,
      users: '55K+',
      growth: '+42%',
      flag: '🇮🇳'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-gray-300">Exponential Growth</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            A Growing Ecosystem Built on{' '}
            <span className="text-gradient bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Trust & Expansion
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From startup to scale-up, our journey reflects the trust institutions place in 
            our platform and our commitment to continuous innovation.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-dark rounded-2xl p-6 text-center hover:glow-blue transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="text-3xl font-bold text-white mb-2 font-jakarta group-hover:text-gradient transition-colors">
                {metric.value}
              </div>
              
              <div className="text-sm text-gray-400 mb-2">
                {metric.label}
              </div>
              
              <div className="text-xs text-emerald-400 font-medium">
                {metric.change}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regional Expansion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-dark rounded-3xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              International Presence
            </h3>
            <p className="text-gray-300">
              Serving educational institutions across two dynamic markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{region.flag}</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-gradient transition-colors">
                    {region.name}
                  </h4>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {region.institutions}
                    </div>
                    <div className="text-xs text-gray-400">Institutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {region.users}
                    </div>
                    <div className="text-xs text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">
                      {region.growth}
                    </div>
                    <div className="text-xs text-gray-400">Growth</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Timeline - Modern Stepped Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Growth Journey
            </h3>
            <p className="text-gray-300">
              Milestones that define our path to becoming a leading EdTech platform
            </p>
          </div>
          
          {/* Modern Stepped Timeline */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  className="relative group cursor-pointer"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Card Container */}
                  <div className="relative h-full">
                    {/* Year Badge - Floating */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                      className={`absolute -top-4 -right-4 z-20 w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}
                    >
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </motion.div>

                    {/* Main Card */}
                    <div className="glass-dark rounded-3xl p-8 h-full border border-white/10 group-hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                      {/* Background Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Calendar className="w-7 h-7 text-white" />
                        </div>

                        {/* Title */}
                        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                          {item.description}
                        </p>

                        {/* Milestone Badge */}
                        <div className="flex items-center justify-between">
                          <div className={`px-4 py-2 bg-gradient-to-r ${item.color} bg-opacity-20 rounded-xl border border-current`}>
                            <span className="text-xs font-semibold text-white">
                              {item.milestone}
                            </span>
                          </div>
                          
                          {/* Progress Indicator */}
                          <div className="flex space-x-1">
                            {[...Array(6)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i <= index 
                                    ? `bg-gradient-to-r ${item.color}` 
                                    : 'bg-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-lg" />
                    </div>

                    {/* Connection Line for Desktop */}
                    {index < timeline.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2 z-10" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.5 }}
              className="mt-12 h-1 bg-gradient-to-r from-blue-500 via-violet-500 via-emerald-500 to-yellow-500 rounded-full mx-auto max-w-4xl origin-left"
            />
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center glass-dark rounded-3xl p-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              Vision 2025: Global Educational Transformation
            </h3>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our roadmap includes expansion to 5 new countries, serving 100+ institutions, 
              and introducing next-generation AI capabilities that will redefine educational excellence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Globe, label: '5 Countries', desc: 'Global Expansion' },
                { icon: Building, label: '100+ Institutions', desc: 'Partner Network' },
                { icon: Award, label: 'AI Excellence', desc: 'Next-Gen Features' },
              ].map((goal, index) => (
                <motion.div
                  key={goal.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mx-auto mb-3 glow-yellow">
                    <goal.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{goal.label}</h4>
                  <p className="text-sm text-gray-400">{goal.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GrowthSection