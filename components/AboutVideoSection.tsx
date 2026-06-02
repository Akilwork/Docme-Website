'use client'



import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

export default function AboutVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress within this container.
  // "start start": animation starts when the top of the container hits the top of the viewport.
  // "end end": animation completes when the bottom of the container hits the bottom of the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // We want a box that starts at 25% from all edges and expands to 0%.
  // Top and Left start at 25%, go to 0%.
  const clipStart = useTransform(scrollYProgress, [0, 1], [25, 0])
  // Right and Bottom start at 75% (100 - 25), go to 100%.
  const clipEnd = useTransform(scrollYProgress, [0, 1], [75, 100])

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`
  
  // Scale down the video slightly for a parallax effect as the box expands
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1])

  return (
    <section ref={containerRef} className="h-[150vh] bg-slate-900 relative">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        
        {/* We use motion.div here with both clipPath and WebkitClipPath for Safari support */}
        <motion.div 
          style={{ 
            clipPath, 
            WebkitClipPath: clipPath,
            willChange: "transform, clip-path" 
          }} 
          className="absolute inset-0 w-full h-full bg-black flex items-center justify-center"
        >
          {/* Subtle overlay for better visual quality */}
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
          
          <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
            <video
              src="/CloudyGraphics_pindown.io_1780315010.mp4"
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
