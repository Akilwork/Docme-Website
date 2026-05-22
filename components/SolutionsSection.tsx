'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { 
  GraduationCap, 
  Smartphone, 
  Users, 
  Truck, 
  DollarSign, 
  Brain, 
  Code, 
  Monitor
} from 'lucide-react'

const SolutionsSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

  const solutions = [
    {
      id: 1,
      title: 'Educational ERP',
      description: 'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
      icon: GraduationCap,
      features: ['Student Information System', 'Academic Planning', 'Grade Management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Smart Attendance',
      description: 'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
      icon: Monitor,
      features: ['Student Information System', 'Academic Planning', 'Grade Management'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Mobile Applications',
      description: 'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
      icon: Smartphone,
      features: ['Student Information System', 'Academic Planning', 'Grade Management'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 4,
      title: 'HR & Payroll',
      description: 'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
      icon: Users,
      features: ['Student Information System', 'Academic Planning', 'Grade Management'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'School Transport',
      description: 'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
      icon: Truck,
      features: ['Student Information System', 'Academic Planning', 'Grade Management'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      title: 'Financial Management',
      description: 'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
      icon: DollarSign,
      features: ['Student Information System', 'Academic Planning', 'Grade Management'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 7,
      title: 'AI Automation',
      description: 'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
      icon: Brain,
      features: ['Student Information System', 'Academic Planning', 'Grade Management'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 8,
      title: 'Custom Development',
      description: 'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
      icon: Code,
      features: ['Student Information System', 'Academic Planning', 'Grade Management'],
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Solutions & Services
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <p className="text-base text-gray-600 leading-relaxed">
              Comprehensive digital solutions designed to transform every aspect of institutional 
              management and operational excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  )
}

interface SolutionType {
  id: number;
  title: string;
  description: string;
  icon: any;
  features: string[];
  color: string;
}

const SolutionCard = ({ solution }: { solution: SolutionType }) => {
  const IconComponent = solution.icon;
  
  return (
    <div className="group relative h-[450px] w-[450px] flex-shrink-0 overflow-hidden bg-gray-50 rounded-2xl cursor-pointer">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative h-full p-8 flex flex-col">
        {/* Icon */}
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
          <IconComponent className="w-8 h-8 text-gray-700" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
          {solution.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">
          {solution.description}
        </p>
        
        {/* Features */}
        <div className="space-y-2">
          {solution.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-500">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>
    </div>
  )
}

export default SolutionsSection