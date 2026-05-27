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
      milestone: 'Company Launch'
    },
    {
      year: '2021',
      title: 'First Product',
      description: 'Launched comprehensive School ERP system with 5 pilot institutions',
      milestone: '5 Schools'
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Expanded to 25 institutions and introduced mobile applications',
      milestone: '25 Institutions'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Launched AI-powered analytics and automation features',
      milestone: 'AI Platform'
    },
    {
      year: '2024',
      title: 'International Expansion',
      description: 'Established presence in UAE and India with 50+ institutions',
      milestone: '2 Countries'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Targeting 100+ institutions across Middle East and Asia',
      milestone: 'Global Scale'
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-gray-300">Exponential Growth</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6 text-white">
            A Growing Ecosystem Built on{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
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
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="text-3xl font-bold text-white mb-2 font-jakarta">
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
          className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-16"
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:bg-gray-700 transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🇦🇪</span>
                <h4 className="text-xl font-bold text-white">
                  United Arab Emirates
                </h4>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">25</div>
                  <div className="text-xs text-gray-400">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">45K+</div>
                  <div className="text-xs text-gray-400">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">+35%</div>
                  <div className="text-xs text-gray-400">Growth</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:bg-gray-700 transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🇮🇳</span>
                <h4 className="text-xl font-bold text-white">
                  India
                </h4>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">25</div>
                  <div className="text-xs text-gray-400">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">55K+</div>
                  <div className="text-xs text-gray-400">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">+42%</div>
                  <div className="text-xs text-gray-400">Growth</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Growth Timeline */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1
                }}
                whileHover={{ y: -8 }}
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all duration-300 cursor-pointer group relative"
              >
                {/* Year Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Milestone Badge */}
                <div className="px-4 py-2 bg-blue-500/20 rounded-xl border border-blue-500/30">
                  <span className="text-xs font-semibold text-blue-400">
                    {item.milestone}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center bg-gray-900 border border-gray-800 rounded-3xl p-8"
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
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">5 Countries</h4>
                <p className="text-sm text-gray-400">Global Expansion</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">100+ Institutions</h4>
                <p className="text-sm text-gray-400">Partner Network</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">AI Excellence</h4>
                <p className="text-sm text-gray-400">Next-Gen Features</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GrowthSection