'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2 } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  location: string
  country: string
  image: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Lions Binkert Trial',
    location: 'Vancouver BC',
    country: 'Canada',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
    description: 'An iconic alpine trek with breathtaking summit views overlooking British Columbia panoramic fjords and majestic peaks.',
  },
  {
    id: 2,
    title: 'Pragser Wildsee',
    location: 'Italy',
    country: 'Dolomites',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85',
    description: 'The emerald jewel of the Dolomites, surrounded by towering pine forests and traditional wooden rowboats reflecting crystal clear waters.',
  },
  {
    id: 3,
    title: 'Iguazu Falls',
    location: 'Argentina',
    country: 'South America',
    image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1400&q=85',
    description: 'One of the wonders of the natural world, cascading thunderously through lush subtropical rainforests with perpetual rainbow mists.',
  },
  {
    id: 4,
    title: 'Multnomah Falls',
    location: 'Portland',
    country: 'Oregon, USA',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=85',
    description: 'A 620-foot roaring double-tier cascade framed by the historic stone Benson Bridge in the scenic Columbia River Gorge.',
  },
  {
    id: 5,
    title: 'Mount Fuji',
    location: 'Honshu',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1400&q=85',
    description: 'The revered sacred volcano of Japan, mirrored across mist-shrouded lakes and surrounded by tranquil autumn landscapes.',
  },
  {
    id: 6,
    title: 'Moraine Lake',
    location: 'Banff National Park',
    country: 'Canada',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
    description: 'Glacial-fed sapphire waters set against the dramatic amphitheatre of the Valley of the Ten Peaks in the Canadian Rockies.',
  },
  {
    id: 7,
    title: 'Lofoten Archipelago',
    location: 'Nordland',
    country: 'Norway',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85',
    description: 'Dramatically steep peaks piercing the Norwegian Sea, dotted with crimson rorbuer fishermen huts and Arctic auroras.',
  },
  {
    id: 8,
    title: 'Hallstatt Lakeside',
    location: 'Salzkammergut',
    country: 'Austria',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85',
    description: 'A storybook 16th-century Alpine hamlet nestled peacefully between sheer limestone cliffs and glassy lake waters.',
  },
]

export default function GallerySection() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null)
  const [isAllGridOpen, setIsAllGridOpen] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Drag-to-scroll state
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftStartRef = useRef(0)
  const hasMovedRef = useRef(false)

  // Mouse wheel horizontal scrolling
  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return

    const handleWheel = (e: WheelEvent) => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth
      if (maxScrollLeft <= 0) return

      // Allow natural vertical page scroll at boundaries
      const isAtStart = el.scrollLeft <= 4 && e.deltaY < 0
      const isAtEnd = el.scrollLeft >= maxScrollLeft - 4 && e.deltaY > 0
      if (isAtStart || isAtEnd) return

      e.preventDefault()
      el.scrollBy({
        left: e.deltaY * 1.35,
        behavior: 'auto',
      })
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  // Keyboard navigation for popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return
      if (e.key === 'ArrowRight') {
        setActiveItemIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0))
      } else if (e.key === 'ArrowLeft') {
        setActiveItemIndex((prev) =>
          prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0
        )
      } else if (e.key === 'Escape') {
        setActiveItemIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeItemIndex])

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current
    if (!el) return
    isDraggingRef.current = true
    hasMovedRef.current = false
    startXRef.current = e.pageX - el.offsetLeft
    scrollLeftStartRef.current = el.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return
    const el = scrollContainerRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startXRef.current) * 1.4
    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true
    }
    el.scrollLeft = scrollLeftStartRef.current - walk
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const handleCardClick = (index: number) => {
    if (hasMovedRef.current) return
    setActiveItemIndex(index)
  }

  const activeItem = activeItemIndex !== null ? galleryItems[activeItemIndex] : null

  const handlePrev = useCallback(() => {
    setActiveItemIndex((prev) =>
      prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0
    )
  }, [])

  const handleNext = useCallback(() => {
    setActiveItemIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0))
  }, [])

  return (
    <section
      id="gallery-section"
      className="relative w-full py-16 sm:py-24 bg-[#f8f9fa] overflow-hidden select-none"
    >
      {/* ── Fluid Container with reduced left-side offset ── */}
      <div className="w-full pl-4 sm:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-8 relative z-10">
        {/* ── Horizontal Scrollable Row (Mouse Wheel & Drag to Scroll) ── */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide py-2 px-1 cursor-grab active:cursor-grabbing scroll-smooth"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: 0.05 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              onClick={() => handleCardClick(index)}
              className="group relative shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-500 w-[220px] sm:w-[250px] md:w-[270px] lg:w-[280px]"
              style={{
                aspectRatio: '3 / 4.15',
                minHeight: '340px',
              }}
            >
              {/* Background Photo with Zoom on Hover */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                draggable={false}
              />

              {/* Subtle hover overlay for depth and full view indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}

          {/* ── Last Card: View More Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.05 * galleryItems.length,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
            onClick={() => setIsAllGridOpen(true)}
            className="group relative shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-[#081125] text-white shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center text-center p-6 sm:p-7 w-[220px] sm:w-[250px] md:w-[270px] lg:w-[280px] border border-white/10"
            style={{
              aspectRatio: '3 / 4.15',
              minHeight: '340px',
            }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-amber-500/10 pointer-events-none group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-[#F1BE48] transition-colors">
                View More
              </h3>

              <p className="text-xs sm:text-sm text-slate-300/80 font-medium tracking-wide max-w-[200px] leading-relaxed">
                Explore all {galleryItems.length} destinations
              </p>

              <div className="mt-6 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white tracking-wider uppercase transition-colors">
                Open Gallery
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Fullscreen Overlay Popup Lightbox on Click ── */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItemIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-6"
          >
            {/* Top Close Button */}
            <button
              onClick={() => setActiveItemIndex(null)}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 z-30 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Close full view"
            >
              <X size={24} />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Centered Modal Content */}
            <motion.div
              key={activeItem.id}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center"
            >
              <div className="relative w-full max-h-[78vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[78vh] w-auto max-w-full object-contain rounded-2xl select-none"
                />
              </div>

              {/* Bottom Subtle Location Caption & Counter */}
              <div className="mt-4 flex items-center justify-between w-full px-2 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#F1BE48]" />
                  <span className="font-semibold text-white">{activeItem.title}</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white/70">{activeItem.location}, {activeItem.country}</span>
                </div>
                <div className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80">
                  {activeItemIndex! + 1} / {galleryItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── View More Full Grid Modal ── */}
      <AnimatePresence>
        {isAllGridOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAllGridOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Explore Gallery
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Showing all {galleryItems.length} curated destinations
                  </p>
                </div>
                <button
                  onClick={() => setIsAllGridOpen(false)}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="Close grid"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Grid Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-120px)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {galleryItems.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setIsAllGridOpen(false)
                      setActiveItemIndex(idx)
                    }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 shadow-md hover:shadow-xl transition-all aspect-[3/4]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
