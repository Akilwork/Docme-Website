'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SimpleLoadingScreenProps {
  onLoadingComplete: () => void
}

export default function SimpleLoadingScreen({ onLoadingComplete }: SimpleLoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onLoadingComplete()
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900 loading-screen"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="mesh-bg" />
        </div>

        <div className="relative z-10 text-center">
          {/* DOCME Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex flex-col items-center justify-center mb-4">
              <motion.img
                src="/Docme Logo.png"
                alt="DOCME Logo"
                className="w-16 h-16 object-contain mb-3"
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))",
                    "drop-shadow(0 0 20px rgba(99, 102, 241, 0.6))",
                    "drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Simple Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="w-full h-1 bg-navy-800 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 text-sm"
            >
              Loading Experience
            </motion.p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}