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
  Shield,
  Sparkles,
  TrendingUp,
  Zap
} from 'lucide-react'

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Educational ERP',
      description: 'Complete academic management system with student records, curriculum planning, and grade management.',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      features: ['Student Information System', 'Academic Planning', 'Grade Management', 'Parent Portal'],
      stats: '500+ Schools',
      gridArea: 'span-2-rows',
      size: 'large'
    },
    {
      title: 'Smart Attendance',
      description: 'AI-powered attendance tracking with facial recognition and real-time monitoring.',
      icon: Monitor,
      color: 'from-emerald-500 to-teal-500',
      features: ['Facial Recognition', 'Real-time Tracking', 'Automated Reports'],
      stats: '99.9% Accuracy',
      gridArea: 'normal',
      size: 'medium'
    },
    {
      title: 'Mobile Applications',
      description: 'Cross-platform mobile solutions for students, parents, and teachers.',
      icon: Smartphone,
      color: 'from-violet-500 to-purple-500',
      features: ['Student App', 'Parent Portal', 'Teacher Dashboard'],
      stats: '1M+ Downloads',
      gridArea: 'normal',
      size: 'medium'
    },
    {
      title: 'HR & Payroll',
      description: 'Comprehensive human resource management with automated payroll processing.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      features: ['Employee Management', 'Payroll Automation', 'Performance Tracking'],
      stats: '10K+ Employees',
      gridArea: 'span-2-cols',
      size: 'large'
    },
    {
      title: 'School Transport',
      description: 'Fleet management system with GPS tracking and route optimization.',
      icon: Truck,
      color: 'from-pink-500 to-rose-500',
      features: ['GPS Tracking', 'Route Optimization', 'Safety Monitoring'],
      stats: '2K+ Vehicles',
      gridArea: 'normal',
      size: 'medium'
    },
    {
      title: 'Financial Management',
      description: 'Complete financial system with fee collection and budget planning.',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      features: ['Fee Collection', 'Budget Planning', 'Financial Reports'],
      stats: '$50M+ Processed',
      gridArea: 'normal',
      size: 'medium'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent workflow automation powered by advanced AI algorithms.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Smart Workflows', 'Predictive Analytics', 'Auto-optimization'],
      stats: '80% Time Saved',
      gridArea: 'span-2-rows',
      size: 'large'
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your unique requirements.',
      icon: Code,
      color: 'from-indigo-500 to-blue-500',
      features: ['Custom Solutions', 'API Integration', 'Scalable Architecture'],
      stats: '200+ Projects',
      gridArea: 'span-2-cols',
      size: 'large'
    }
  ]

  const PreviewComponent = ({ solution }: { solution: typeof solutions[0] }) => {
    const { color, stats } = solution
    
    return (
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-3xl" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className={`h-1 bg-gradient-to-r ${color} rounded-full mb-2`} />
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/80">{stats}</span>
            <Sparkles className="w-4 h-4 text-white/60" />
          </div>
        </div>
      </div>
    )
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
            className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 py-2 mb-6"
          >
            <Cog className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">Complete Solutions</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            Solutions &{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform every aspect of institutional 
            management and operational excellence.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {solutions.map((solution, index) => {
            const getGridClasses = () => {
              switch (solution.gridArea) {
                case 'span-2-rows':
                  return 'md:row-span-2'
                case 'span-2-cols':
                  return 'md:col-span-2'
                default:
                  return 'md:col-span-1'
              }
            }
            
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
                  ${getGridClasses()}
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
                
                {/* Hover Preview */}
                <PreviewComponent solution={solution} />
                
                <div className="relative h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">Performance</div>
                      <div className="text-sm font-semibold text-gray-300">{solution.stats}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`font-bold text-white mb-3 group-hover:text-gradient transition-colors ${
                      solution.size === 'large' ? 'text-xl' : 'text-lg'
                    }`}>
                      {solution.title}
                    </h3>
                    
                    <p className={`text-gray-400 mb-4 leading-relaxed ${
                      solution.size === 'large' ? 'text-sm' : 'text-xs'
                    }`}>
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-1 mb-4">
                      {solution.features.slice(0, solution.size === 'large' ? 3 : 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                          <div className={`w-1 h-1 bg-gradient-to-r ${solution.color} rounded-full mr-2 flex-shrink-0`} />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-400">Explore</span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-gray-500" />
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass-dark rounded-3xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 py-2 mb-6"
                >
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">Seamless Integration</span>
                </motion.div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  One Platform, Infinite Possibilities
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Experience the power of unified solutions working in perfect harmony
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Database,
                    title: 'Unified Data Hub',
                    description: 'Single source of truth with real-time synchronization across all modules',
                    metric: '99.9% Uptime'
                  },
                  {
                    icon: Shield,
                    title: 'Enterprise Security',
                    description: 'Military-grade encryption with role-based access control',
                    metric: 'ISO 27001 Certified'
                  },
                  {
                    icon: Monitor,
                    title: 'Smart Analytics',
                    description: 'AI-powered insights and predictive analytics dashboard',
                    metric: '10x Faster Decisions'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mx-auto glow-cyan group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-10 h-10 text-cyan-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">{benefit.description}</p>
                    <div className="inline-flex items-center space-x-1 text-xs text-cyan-400 font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      <span>{benefit.metric}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default SolutionsSection