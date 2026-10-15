'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onLoadingComplete?: () => void
  duration?: number
}

export default function LoadingScreen({
  onLoadingComplete,
  duration = 3400,
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (onLoadingComplete) onLoadingComplete()
      }}
    >
      {isVisible && (
        <motion.div
          key="docme-intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070913] text-white overflow-hidden select-none pointer-events-auto"
        >
          {/* Ambient Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.4, 0.2],
              scale: [0.8, 1.2, 1.4, 0.9],
            }}
            transition={{
              duration: 3.4,
              times: [0, 0.4, 0.7, 1],
              ease: 'easeInOut',
            }}
            className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/40 via-purple-600/30 to-cyan-500/40 rounded-full blur-[120px] pointer-events-none"
          />

          {/* Grid Background Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Center Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4">
            {/* Logo with Center (Immediate) -> Zoom Out -> Zoom In sequence */}
            <motion.div
              initial={{ scale: 1.0, opacity: 1 }}
              animate={{
                scale: [1.0, 1.0, 0.25, 0.25, 12.0],
                opacity: [1, 1, 1, 1, 0],
                filter: [
                  'drop-shadow(0 0 30px rgba(99, 102, 241, 0.6))',
                  'drop-shadow(0 0 30px rgba(99, 102, 241, 0.6))',
                  'drop-shadow(0 0 12px rgba(168, 85, 247, 0.4))',
                  'drop-shadow(0 0 60px rgba(6, 182, 212, 0.9))',
                  'drop-shadow(0 0 120px rgba(6, 182, 212, 1))',
                ],
              }}
              transition={{
                duration: 3.0,
                times: [0, 0.25, 0.55, 0.72, 1],
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src="/Docme Logo.png"
                alt="DOCME Logo"
                className="w-36 h-36 md:w-48 md:h-48 object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

