'use client'

import { motion } from 'framer-motion'
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Code, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react'

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      subtitle: 'Understanding Your Needs',
      description: 'We begin with comprehensive analysis of your institution\'s requirements, existing systems, and growth objectives.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      duration: '1-2 weeks',
      deliverables: ['Requirements Analysis', 'System Audit', 'Project Roadmap']
    },
    {
      number: '02',
      title: 'Strategy',
      subtitle: 'Crafting the Perfect Solution',
      description: 'Our experts design a tailored digital transformation strategy aligned with your institutional goals.',
      icon: Lightbulb,
      color: 'from-emerald-500 to-teal-500',
      duration: '1 week',
      deliverables: ['Architecture Design', 'Integration Plan', 'Timeline & Milestones']
    },
    {
      number: '03',
      title: 'UI/UX Design',
      subtitle: 'Creating Intuitive Experiences',
      description: 'User-centered design process ensuring seamless experiences for students, teachers, and administrators.',
      icon: Palette,
      color: 'from-violet-500 to-purple-500',
      duration: '2-3 weeks',
      deliverables: ['User Research', 'Wireframes', 'Interactive Prototypes']
    },
    {
      number: '04',
      title: 'Development',
      subtitle: 'Building Your Digital Ecosystem',
      description: 'Agile development with regular updates, ensuring quality and adherence to specifications.',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      duration: '6-12 weeks',
      deliverables: ['Core Platform', 'Module Integration', 'Quality Assurance']
    },
    {
      number: '05',
      title: 'Deployment',
      subtitle: 'Going Live Seamlessly',
      description: 'Careful deployment with data migration, staff training, and comprehensive support during transition.',
      icon: Rocket,
      color: 'from-pink-500 to-rose-500',
      duration: '1-2 weeks',
      deliverables: ['System Deployment', 'Data Migration', 'Staff Training']
    },
    {
      number: '06',
      title: 'Scaling',
      subtitle: 'Continuous Growth & Optimization',
      description: 'Ongoing support, feature enhancements, and scaling to meet your evolving institutional needs.',
      icon: TrendingUp,
      color: 'from-indigo-500 to-blue-500',
      duration: 'Ongoing',
      deliverables: ['Performance Monitoring', 'Feature Updates', '24/7 Support']
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Methodology',
      description: 'Battle-tested process refined through 50+ successful implementations'
    },
    {
      icon: Clock,
      title: 'Predictable Timeline',
      description: 'Clear milestones and deliverables with transparent progress tracking'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Expert project managers and developers assigned to your success'
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
            <Rocket className="w-5 h-5 text-indigo-400" />
            <span className="text-gray-300">Our Proven Process</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            From Vision to{' '}
            <span className="text-gradient bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures successful digital transformation with 
            predictable outcomes and measurable results.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-violet-500 to-indigo-500 rounded-full" />
          
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-dark rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
                    role="article"
                    aria-labelledby={`step-${step.number}-title`}
                  >
                    {/* Step Number */}
                    <div className={`inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r ${step.color} rounded-full text-white font-bold mb-6`}>
                      <span className="text-lg" aria-label={`Step ${step.number}`}>{step.number}</span>
                      <div className={`w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center`}>
                        <step.icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 
                      id={`step-${step.number}-title`}
                      className="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                    >
                      {step.title}
                    </h3>
                    
                    <h4 className="text-lg text-gray-300 mb-4 font-medium">
                      {step.subtitle}
                    </h4>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Duration */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Clock className="w-4 h-4 text-gray-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">Duration: {step.duration}</span>
                    </div>
                    
                    {/* Deliverables */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-white">Key Deliverables:</h5>
                      <ul className="space-y-1" role="list">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-sm text-gray-400">
                            <div className={`w-1 h-1 bg-gradient-to-r ${step.color} rounded-full mr-2 flex-shrink-0`} aria-hidden="true" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
                
                {/* Timeline Node */}
                <div className="hidden lg:block relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full border-4 border-slate-900 shadow-lg cursor-pointer`}
                    aria-label={`Timeline marker for step ${step.number}`}
                  />
                </div>
                
                {/* Spacer */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-dark rounded-3xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Our Process Works
            </h3>
            <p className="text-gray-300">
              Proven methodology that delivers results consistently
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 glass-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{benefit.title}</h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { value: '50+', label: 'Projects Delivered', color: 'text-blue-400' },
              { value: '98%', label: 'On-Time Delivery', color: 'text-emerald-400' },
              { value: '100%', label: 'Client Satisfaction', color: 'text-violet-400' },
              { value: '24/7', label: 'Support Available', color: 'text-orange-400' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 font-jakarta ${metric.color} group-hover:scale-110 transition-transform`}>
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-semibold text-base md:text-lg flex items-center space-x-2 mx-auto hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Start your digital transformation project"
          >
            <span>Start Your Digital Transformation</span>
            <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection