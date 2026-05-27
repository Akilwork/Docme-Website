'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    id: 1,
    title: 'Educational ERP',
    subtitle: 'All-in-one school management',
    description:
      'A unified platform that streamlines every aspect of school administration — from admissions to academics, all in one place.',
    image: '/assets/Feature/dash.jpg',
    tag: 'ERP',
    features: ['Student Information System', 'Academic Planning', 'Grade Management'],
    accent: '#6366f1',
  },
  {
    id: 2,
    title: 'Smart Attendance',
    subtitle: 'Real-time tracking & analytics',
    description:
      'Automated attendance management with facial recognition, RFID, and real-time parent notifications.',
    image: '/assets/Feature/dash1.jpg',
    tag: 'Attendance',
    features: ['Biometric Integration', 'Parent Alerts', 'Analytics Dashboard'],
    accent: '#10b981',
  },
  {
    id: 3,
    title: 'School Canteen',
    subtitle: 'Cashless dining experience',
    description:
      'Digital canteen management with cashless payments, meal planning, and nutritional tracking for students.',
    image: '/assets/Feature/Canteen.jpg',
    tag: 'Canteen',
    features: ['Cashless Payments', 'Menu Planning', 'Nutritional Reports'],
    accent: '#f59e0b',
  },
  {
    id: 4,
    title: 'School Diary',
    subtitle: 'Parent-teacher collaboration',
    description:
      'A digital school diary that bridges the gap between home and school with instant communication and updates.',
    image: '/assets/Feature/School Dairy V2.1 1.jpg',
    tag: 'Communication',
    features: ['Instant Messaging', 'Homework Tracker', 'Event Calendar'],
    accent: '#ec4899',
  },
  {
    id: 5,
    title: 'Mobile Applications',
    subtitle: 'Campus life on your phone',
    description:
      'Purpose-built mobile apps for students, parents, and teachers — keeping everyone connected anywhere, anytime.',
    image: '/assets/Feature/10 (dark, light, color).jpg',
    tag: 'Mobile',
    features: ['Cross-platform', 'Push Notifications', 'Offline Mode'],
    accent: '#8b5cf6',
  },
  {
    id: 6,
    title: 'HR & Payroll',
    subtitle: 'Effortless staff management',
    description:
      'Comprehensive HR and payroll system built for educational institutions — automate salaries, leaves, and more.',
    image: '/assets/Feature/dash.jpg',
    tag: 'HR',
    features: ['Payroll Automation', 'Leave Management', 'Staff Directory'],
    accent: '#14b8a6',
  },
]

const SolutionsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Drag-to-scroll on desktop
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      el.style.cursor = 'grabbing'
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }
    const onMouseLeave = () => { isDown = false; el.style.cursor = 'grab' }
    const onMouseUp   = () => { isDown = false; el.style.cursor = 'grab' }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x    = e.pageX - el.offsetLeft
      const walk = (x - startX) * 1.2
      el.scrollLeft = scrollLeft - walk
    }

    el.addEventListener('mousedown',  onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup',    onMouseUp)
    el.addEventListener('mousemove',  onMouseMove)

    return () => {
      el.removeEventListener('mousedown',  onMouseDown)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mouseup',    onMouseUp)
      el.removeEventListener('mousemove',  onMouseMove)
    }
  }, [])

  return (
    <section className="bg-[#F6F6F6] py-16">
      {/* Section Header */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-black uppercase tracking-widest mb-3">
              What We Build
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Solutions &amp;{' '}
              <span className="text-black">
                Services
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:max-w-md text-gray-500 text-base leading-relaxed"
          >
            Comprehensive digital solutions designed to transform every aspect of
            institutional management and operational excellence.
          </motion.p>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 select-none"
        style={{
          paddingLeft: 'var(--container-px)',
          paddingRight: 'var(--container-px)',
          scrollbarWidth: 'none',        /* Firefox */
          msOverflowStyle: 'none',       /* IE/Edge */
          cursor: 'grab',
          scrollBehavior: 'smooth',
        }}
      >
        {/* Hide webkit scrollbar via inline style — className can't target pseudo-elements */}
        <style>{`.solutions-track::-webkit-scrollbar { display: none; }`}</style>

        {solutions.map((solution, index) => (
          <SolutionCard key={solution.id} solution={solution} index={index} />
        ))}
      </div>
    </section>
  )
}

interface SolutionType {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  tag: string
  features: string[]
  accent: string
}

const SolutionCard = ({
  solution,
  index,
}: {
  solution: SolutionType
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative flex-shrink-0 w-[340px] lg:w-[400px] rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image Area */}
      <div className="relative w-full h-[260px] lg:h-[290px] overflow-hidden bg-gray-100">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="400px"
          draggable={false}
        />
        {/* Tag badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-black backdrop-blur-sm bg-white"
        >
          {solution.tag}
        </div>
        {/* Gradient fade at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content Area */}
      <div className="px-6 pb-7 pt-3 flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-black transition-colors duration-200">
            {solution.title}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5 font-medium">{solution.subtitle}</p>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed">{solution.description}</p>

        <ul className="flex flex-col gap-1.5 mt-1">
          {solution.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#000000' }}
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex items-center gap-1 text-sm font-semibold text-black opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"
        style={{ backgroundColor: '#000000' }}
      />
    </motion.div>
  )
}

export default SolutionsSection