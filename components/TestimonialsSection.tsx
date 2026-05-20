'use client'

import { motion } from 'framer-motion'
import { 
  Star, 
  Quote, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  Building,
  MapPin,
  Users
} from 'lucide-react'
import { useState } from 'react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Dr. Sarah Ahmed',
      position: 'Principal',
      institution: 'Al Noor International School',
      location: 'Dubai, UAE',
      avatar: 'SA',
      rating: 5,
      quote: 'DOCME has revolutionized how we manage our institution. The AI-powered analytics have given us insights we never had before, and the seamless integration across all modules has improved our operational efficiency by 40%.',
      metrics: {
        efficiency: '+40%',
        satisfaction: '98%',
        timesSaved: '15hrs/week'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Rajesh Kumar',
      position: 'IT Director',
      institution: 'Delhi Public School',
      location: 'Mumbai, India',
      avatar: 'RK',
      rating: 5,
      quote: 'The technical excellence and scalability of DOCME is impressive. We migrated from three different systems to one unified platform. The real-time synchronization and mobile apps have transformed our parent engagement.',
      metrics: {
        systems: '3→1',
        engagement: '+65%',
        uptime: '99.9%'
      },
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Fatima Al Zahra',
      position: 'Academic Coordinator',
      institution: 'Emirates International Academy',
      location: 'Abu Dhabi, UAE',
      avatar: 'FZ',
      rating: 5,
      quote: 'The user experience is exceptional. Teachers love the intuitive interface, parents appreciate the real-time updates, and administrators benefit from comprehensive reporting. DOCME truly understands educational workflows.',
      metrics: {
        userSatisfaction: '96%',
        adoption: '100%',
        support: '24/7'
      },
      color: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Mohammed Hassan',
      position: 'Finance Manager',
      institution: 'International School of Sharjah',
      location: 'Sharjah, UAE',
      avatar: 'MH',
      rating: 5,
      quote: 'The financial management module has streamlined our fee collection and budget planning. Automated invoicing and payment tracking have reduced our administrative workload significantly while improving accuracy.',
      metrics: {
        accuracy: '+99%',
        processing: '50% faster',
        errors: '-95%'
      },
      color: 'from-orange-500 to-red-500'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const stats = [
    { value: '4.9/5', label: 'Average Rating', icon: Star },
    { value: '98%', label: 'Customer Satisfaction', icon: Users },
    { value: '50+', label: 'Success Stories', icon: Building },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-navy-800/50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
            <Quote className="w-5 h-5 text-violet-400" />
            <span className="text-gray-300">Client Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            Trusted by{' '}
            <span className="text-gradient bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Educational Leaders
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from the institutions that have transformed their operations with DOCME's 
            comprehensive digital ecosystem.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center glass-dark rounded-2xl p-6 hover:glow-violet transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-violet-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 font-jakarta group-hover:text-gradient transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:glow-violet transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:glow-violet transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Testimonial Card */}
          <div className="glass-dark rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            
            <div className="relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-3 gap-8 items-center"
              >
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  {/* Quote Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentTestimonial].color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 font-light">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentTestimonial].color} rounded-2xl flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {testimonials[currentTestimonial].avatar}
                      </span>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentTestimonial].position}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Building className="w-4 h-4" />
                        <span>{testimonials[currentTestimonial].institution}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{testimonials[currentTestimonial].location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-white mb-4">Impact Metrics</h4>
                  
                  {Object.entries(testimonials[currentTestimonial].metrics).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="glass rounded-xl p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="text-2xl font-bold text-white mb-1 font-jakarta">
                        {value}
                      </div>
                      <div className="text-sm text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Video Testimonial Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center space-x-2 glass-dark p-4 rounded-xl hover:glow-violet transition-all duration-300 cursor-pointer group"
                  >
                    <Play className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium">Watch Video Testimonial</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial 
                    ? 'bg-violet-400 shadow-lg shadow-violet-400/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setCurrentTestimonial(index)}
              className={`glass-dark rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                index === currentTestimonial ? 'ring-2 ring-violet-400 glow-violet' : 'hover:glow-blue'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xs text-gray-400 line-clamp-3">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection