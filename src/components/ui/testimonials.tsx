'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "DOCME has revolutionized how we manage our institution. The AI-powered analytics have given us insights we never had before, and the seamless integration across all modules has improved our operational efficiency by 40%.",
    author: "Dr. Sarah Ahmed",
    role: "Principal, Al Noor International School",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "The technical excellence and scalability of DOCME is impressive. We migrated from three different systems to one unified platform, reducing our IT overhead and training costs significantly.",
    author: "Rajesh Kumar",
    role: "IT Director, Delhi Public School",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "The user experience is exceptional. Teachers love the intuitive interface and parents appreciate the real-time updates. It has truly bridged the communication gap in our academic community.",
    author: "Fatima Al Zahra",
    role: "Academic Coordinator, Al Yasmin School",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    quote: "The financial management module has streamlined our fee collection and budget planning significantly. What used to take weeks of manual reconciliation now happens automatically.",
    author: "Mohammed Hassan",
    role: "Finance Manager, Modern Academy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 5,
    quote: "Implementing DOCME was the best decision we made for our digital transformation journey. The support team was outstanding, and the custom reports are exactly what our board needed.",
    author: "Dr. Robert Chen",
    role: "Director of Education, Global Pathways",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 6,
    quote: "Our admissions process has become twice as fast, and the dashboard provides a clear picture of enrollment trends. Parents find the portal extremely user-friendly and convenient.",
    author: "Sarah Jenkins",
    role: "Head of Admissions, Oakridge International",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
  }
]

function TestimonialAvatar({ src, name }: { src: string; name: string }) {
  const [hasError, setHasError] = useState(false)
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-sans font-semibold text-sm select-none">
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setHasError(true)}
      className="w-full h-full object-cover"
    />
  )
}

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons()
      window.addEventListener('resize', checkScrollButtons)
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollButtons)
      }
      window.removeEventListener('resize', checkScrollButtons)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      // Scroll by roughly 80% of client width
      const scrollAmount = clientWidth * 0.8
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="section-spacing relative overflow-hidden bg-navy-800/50">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative site-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-sans mb-4 sm:mb-6">
            Trusted by{' '}
            <span className="text-white">
              Educational Leaders
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-serif leading-relaxed max-w-2xl mx-auto italic">
            Hear from the institutions that have transformed their operations with DOCME's 
            comprehensive digital ecosystem.
          </p>
        </div>

        {/* Navigation Arrows Row */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0d1017] hover:bg-slate-800 flex items-center justify-center text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed group"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0d1017] hover:bg-slate-800 flex items-center justify-center text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed group"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-6"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="snap-start snap-always flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#0B0E14] border border-white/[0.05] rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between hover:border-white/10 transition-all duration-300 group"
            >
              {/* Quote Text */}
              <p className="text-gray-300 font-serif text-base sm:text-lg leading-relaxed mb-8 select-none">
                {testimonial.quote}
              </p>

              {/* Author & Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/10 bg-[#1e293b]">
                  <TestimonialAvatar src={testimonial.avatar} name={testimonial.author} />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-sm sm:text-base tracking-wide">
                    {testimonial.author}
                  </h4>
                  <p className="text-slate-500 font-serif text-xs sm:text-sm mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}