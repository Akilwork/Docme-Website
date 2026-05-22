'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain, 
  Shield,
  Zap,
  Globe,
  Cpu,
  Network
} from 'lucide-react'

const TechnologySection = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      items: ['Node.js', 'Python', 'PostgreSQL', 'Redis']
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-violet-500 to-purple-500',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      items: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      category: 'AI & ML',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      items: ['TensorFlow', 'OpenAI', 'Computer Vision', 'NLP']
    },
    {
      category: 'Security',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      items: ['OAuth 2.0', 'JWT', 'Encryption', 'GDPR']
    }
  ]

  const innovations = [
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms provide predictive insights and automated decision making',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Real-time Synchronization',
      description: 'Instant data updates across all devices and platforms with WebSocket technology',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Global Infrastructure',
      description: 'Multi-region deployment with edge computing for optimal performance worldwide',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Microservices Architecture',
      description: 'Scalable, maintainable system design with independent service deployment',
      icon: Network,
      color: 'from-emerald-500 to-teal-500'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-navy-900">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
            <Cpu className="w-5 h-5 text-indigo-400" />
            <span className="text-gray-300">Cutting-Edge Technology</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            Innovation &{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built on modern architecture with cutting-edge technologies, delivering 
            unparalleled performance, security, and scalability.
          </p>
        </motion.div>

        {/* Technology Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-dark rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {tech.category}
              </h3>
              
              <div className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <div className={`w-1 h-1 bg-gradient-to-r ${tech.color} rounded-full mr-2`} />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-dark rounded-3xl p-8 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
              </div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${innovation.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <innovation.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* API & Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-dark rounded-3xl p-8 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Enterprise-Grade API & Integration
            </h3>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              RESTful APIs, GraphQL endpoints, and webhook integrations enable seamless 
              connectivity with existing systems and third-party applications.
            </p>
            
            {/* API Features */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: 'Secure Authentication', desc: 'OAuth 2.0 & JWT' },
                { icon: Zap, label: 'High Performance', desc: 'Sub-100ms Response' },
                { icon: Globe, label: 'Global CDN', desc: 'Worldwide Availability' },
                { icon: Database, label: 'Real-time Data', desc: 'WebSocket Support' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-cyan-500/20">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{feature.label}</h4>
                  <p className="text-xs text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection