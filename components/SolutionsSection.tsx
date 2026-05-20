'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Smartphone, 
  Users, 
  Truck, 
  DollarSign, 
  Brain, 
  Code, 
  Cog,
  ArrowRight,
  Monitor,
  Database,
  Shield
} from 'lucide-react'

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Educational ERP',
      description: 'Complete academic management system with student records, curriculum planning, and grade management.',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      features: ['Student Information System', 'Academic Planning', 'Grade Management', 'Parent Portal'],
      preview: 'dashboard',
      size: 'large'
    },
    {
      title: 'Smart Attendance',
      description: 'AI-powered attendance tracking with facial recognition and real-time monitoring.',
      icon: Monitor,
      color: 'from-emerald-500 to-teal-500',
      features: ['Facial Recognition', 'Real-time Tracking', 'Automated Reports', 'Mobile Integration'],
      preview: 'attendance',
      size: 'medium'
    },
    {
      title: 'Mobile Applications',
      description: 'Cross-platform mobile solutions for students, parents, and teachers.',
      icon: Smartphone,
      color: 'from-violet-500 to-purple-500',
      features: ['Student App', 'Parent Portal', 'Teacher Dashboard', 'Offline Support'],
      preview: 'mobile',
      size: 'medium'
    },
    {
      title: 'HR & Payroll',
      description: 'Comprehensive human resource management with automated payroll processing.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      features: ['Employee Management', 'Payroll Automation', 'Performance Tracking', 'Leave Management'],
      preview: 'hr',
      size: 'large'
    },
    {
      title: 'School Transport',
      description: 'Fleet management system with GPS tracking and route optimization.',
      icon: Truck,
      color: 'from-pink-500 to-rose-500',
      features: ['GPS Tracking', 'Route Optimization', 'Safety Monitoring', 'Parent Notifications'],
      preview: 'transport',
      size: 'medium'
    },
    {
      title: 'Financial Management',
      description: 'Complete financial system with fee collection and budget planning.',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      features: ['Fee Collection', 'Budget Planning', 'Financial Reports', 'Payment Gateway'],
      preview: 'finance',
      size: 'medium'
    },
    {
      title: 'Software Consultancy',
      description: 'Expert consultation for digital transformation and system integration.',
      icon: Code,
      color: 'from-indigo-500 to-blue-500',
      features: ['System Analysis', 'Architecture Design', 'Integration Planning', 'Training'],
      preview: 'consultancy',
      size: 'small'
    },
    {
      title: 'Enterprise Automation',
      description: 'AI-powered workflow automation for enhanced operational efficiency.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Workflow Automation', 'AI Integration', 'Process Optimization', 'Custom Solutions'],
      preview: 'automation',
      size: 'small'
    }
  ]

  const PreviewComponent = ({ type, color }: { type: string, color: string }) => {
    switch (type) {
      case 'dashboard':
        return (
          <div className="space-y-2">
            <div className={`h-2 bg-gradient-to-r ${color} rounded-full w-3/4`} />
            <div className="h-1 bg-white/20 rounded-full w-1/2" />
            <div className="h-1 bg-white/20 rounded-full w-2/3" />
            <div className="grid grid-cols-3 gap-1 mt-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-4 bg-white/10 rounded" />
              ))}
            </div>
          </div>
        )
      case 'mobile':
        return (
          <div className="flex space-x-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-6 h-10 bg-white/10 rounded-lg flex flex-col justify-between p-1">
                <div className={`h-1 bg-gradient-to-r ${color} rounded-full`} />
                <div className="space-y-0.5">
                  <div className="h-0.5 bg-white/20 rounded-full" />
                  <div className="h-0.5 bg-white/20 rounded-full w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )
      case 'attendance':
        return (
          <div className="relative">
            <div className="w-8 h-6 bg-white/10 rounded border-2 border-white/20 mb-1" />
            <div className={`absolute top-1 left-1 w-2 h-2 bg-gradient-to-r ${color} rounded-full animate-pulse`} />
            <div className="flex space-x-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-1 h-3 bg-white/20 rounded-full" />
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-1">
            <div className={`h-1 bg-gradient-to-r ${color} rounded-full w-full`} />
            <div className="h-1 bg-white/20 rounded-full w-2/3" />
            <div className="h-1 bg-white/20 rounded-full w-1/2" />
          </div>
        )
    }
  }

  return (
    <section className="py-24 relative overflow-hidden bg-navy-800/50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
            <Cog className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">Complete Solutions</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            Solutions &{' '}
            <span className="text-gradient bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform every aspect of institutional 
            management and operational excellence.
          </p>
        </motion.div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const isLarge = solution.size === 'large'
            const isMedium = solution.size === 'medium'
            
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`
                  glass-dark rounded-3xl p-6 hover:glow-blue transition-all duration-300 cursor-pointer group relative overflow-hidden
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isMedium ? 'md:col-span-1 md:row-span-1' : ''}
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
                
                <div className="relative h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {isLarge && (
                      <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                        <PreviewComponent type={solution.preview} color={solution.color} />
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`font-bold text-white mb-3 group-hover:text-gradient transition-colors ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                      {solution.title}
                    </h3>
                    
                    <p className={`text-gray-400 mb-4 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {solution.features.slice(0, isLarge ? 4 : 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                          <div className={`w-1 h-1 bg-gradient-to-r ${solution.color} rounded-full mr-2`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  {/* Preview for medium/small cards */}
                  {!isLarge && (
                    <div className="absolute bottom-4 right-4 opacity-40 group-hover:opacity-80 transition-opacity">
                      <PreviewComponent type={solution.preview} color={solution.color} />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-dark rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Integrated Solutions, Seamless Experience
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: 'Unified Data',
                  description: 'All solutions share a common database for consistent information across modules'
                },
                {
                  icon: Shield,
                  title: 'Single Security',
                  description: 'One authentication system provides secure access to all integrated solutions'
                },
                {
                  icon: Monitor,
                  title: 'Central Dashboard',
                  description: 'Monitor all systems from a single, comprehensive administrative interface'
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
                  <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-4 glow-cyan">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg flex items-center space-x-2 mx-auto hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 cursor-pointer"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsSection