'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/navigation'

const services = [
  {
    id: 'education-institution',
    tag: 'Education & Institution',
    title: 'Education & Institution Solutions',
    description:
      'Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.',
    features: [
      'Student Information System',
      'Academic Planning',
      'Grade Management',
    ],
    image: '/assets/Feature/dash.jpg',
    hoverImage: '/assets/Feature/dash1.jpg',
  },
  {
    id: 'business-management',
    tag: 'Business Management',
    title: 'Business Management Solutions',
    description:
      'End-to-end enterprise tools to manage operations, automate workflows, and drive measurable growth across all business units.',
    features: [
      'Multi-branch ERP',
      'Inventory & Supply Chain',
      'CRM & Sales Automation',
    ],
    image: '/assets/Feature/BM One.jpg',
    hoverImage: '/assets/Feature/Canteen.jpg',
  },
  {
    id: 'cloud-digital',
    tag: 'Cloud & Digital',
    title: 'Cloud & Digital Solutions',
    description:
      'Scalable cloud-native platforms that enable seamless digital experiences, remote collaboration and operational continuity.',
    features: [
      'Cloud Migration & Hosting',
      'SaaS Platform Development',
      'API Integration Services',
    ],
    image: '/assets/Feature/dash1.jpg',
    hoverImage: '/assets/Feature/BM One.jpg',
  },
  {
    id: 'design-ux',
    tag: 'Design & User Experience',
    title: 'Design & User Experience',
    description:
      'Premium UI/UX design that puts users first — crafting interfaces that are intuitive, accessible, and visually exceptional.',
    features: [
      'UI/UX Research & Strategy',
      'Brand Identity & Systems',
      'Prototyping & Testing',
    ],
    image: '/assets/Feature/10 (dark, light, color).jpg',
    hoverImage: '/assets/Feature/dash.jpg',
  },
  {
    id: 'software-development',
    tag: 'Software Development',
    title: 'Software Development',
    description:
      'Custom software built for scale — from robust web applications and mobile apps to complex backend systems.',
    features: [
      'Web & Mobile App Development',
      'Custom API & Microservices',
      'QA & Performance Testing',
    ],
    image: '/assets/Feature/School Dairy V2.1 1.jpg',
    hoverImage: '/assets/Feature/dash1.jpg',
  },
  {
    id: 'data-analytics',
    tag: 'Data & Analytics',
    title: 'Data & Analytics',
    description:
      'Turn raw data into strategic advantage with AI-driven insights, predictive modelling, and real-time analytics dashboards.',
    features: [
      'Business Intelligence Dashboards',
      'Predictive Analytics & ML',
      'Data Pipeline Engineering',
    ],
    image: '/assets/Feature/Canteen.jpg',
    hoverImage: '/assets/Feature/BM One.jpg',
  },
  {
    id: 'it-infrastructure',
    tag: 'IT Infrastructure',
    title: 'IT Infrastructure Services',
    description:
      'Reliable, secure and high-performance infrastructure management that keeps your systems running at peak efficiency.',
    features: [
      'Network & Server Management',
      'Cybersecurity & Compliance',
      'DevOps & CI/CD Pipelines',
    ],
    image: '/assets/Feature/dash.jpg',
    hoverImage: '/assets/Feature/10 (dark, light, color).jpg',
  },
  {
    id: 'digital-transformation',
    tag: 'Digital Transformation',
    title: 'Digital Transformation',
    description:
      'Strategic consulting and execution that guides organisations through end-to-end digital transformation journeys.',
    features: [
      'Digital Strategy Consulting',
      'Process Re-engineering',
      'Change Management & Training',
    ],
    image: '/assets/Feature/dash1.jpg',
    hoverImage: '/assets/Feature/School Dairy V2.1 1.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const windowRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [cardWidth, setCardWidth] = useState<number>(0)
  const [scrollRange, setScrollRange] = useState<number>(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange])

  useEffect(() => {
    const GAP = 16
    const CARDS = 2.9
    const calc = () => {
      if (!windowRef.current) return
      const w = windowRef.current.clientWidth
      const cw = (w - GAP * (CARDS - 1)) / CARDS
      setCardWidth(cw)
      
      const totalWidth = 8 * cw + 7 * GAP
      setScrollRange(Math.max(0, totalWidth - w))
    }
    calc()
    const ro = new ResizeObserver(calc)
    if (windowRef.current) ro.observe(windowRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F5F5F7] relative w-full h-[110vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-0">
        <div className="site-container relative z-10 flex flex-col">

          {/* Section Header */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-16 gap-3 flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Services
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg text-left leading-snug">
              Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence.
            </p>
          </motion.div>

          {/* Card strip window */}
          <div ref={windowRef} className="relative w-full flex-1 min-h-0">
            <motion.div
              className="flex gap-4 w-max"
              style={{ x }}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service) => {
                const isHovered = hoveredId === service.id
                return (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => router.push('/services')}
                    style={{
                    width:    cardWidth ? `${cardWidth}px` : undefined,
                    minWidth: cardWidth ? `${cardWidth}px` : '300px',
                    height: '520px',
                    flex: '0 0 auto',
                    background: '#DADDE4',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="cursor-pointer select-none transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Default Image */}
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.4)',
                      zIndex: 0,
                    }}
                  />

                  {/* Hover image over entire card */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.img
                        key="hover-img"
                        src={service.hoverImage}
                        alt={service.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.35)',
                          zIndex: 1,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Content */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 10,
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    {/* White tag pill — top left */}
                    <div
                      style={{
                        alignSelf: 'flex-start',
                        background: '#ffffff',
                        borderRadius: '10px',
                        padding: '6px 14px',
                        fontWeight: 700,
                        fontSize: '13px',
                        color: '#111827',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                        marginBottom: 'auto',
                      }}
                    >
                      {service.tag}
                    </div>

                    {/* Text content */}
                    <div>
                      <p
                        style={{
                          fontSize: '13px',
                          color: isHovered ? '#ffffff' : '#d1d5db',
                          lineHeight: '1.6',
                          marginBottom: '14px',
                          transition: 'color 0.3s',
                        }}
                      >
                        {service.description}
                      </p>

                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {service.features.map((feat) => (
                          <li
                            key={feat}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '13px',
                              color: isHovered ? '#f3f4f6' : '#d1d5db',
                              marginBottom: '6px',
                              transition: 'color 0.3s',
                            }}
                          >
                            <span
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: isHovered ? '#ffffff' : '#9ca3af',
                                flexShrink: 0,
                                transition: 'background 0.3s',
                              }}
                            />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

      </div>
      </div>
    </section>
  )
}

export default ServicesSection
