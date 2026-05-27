'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Simple timer for loading duration
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 2500) // 2.5 seconds

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900"
      >
        {/* Background mesh gradient */}
        <div className="fixed inset-0 mesh-bg opacity-10 pointer-events-none" />
        
        {/* Animated particles — positions are deterministic (index-based) to avoid SSR hydration mismatch */}
        <div className="particles">
          {Array.from({ length: 15 }).map((_, i) => {
            // Deterministic pseudo-random using golden-ratio spread — same on server & client
            const left = ((i * 47.3 + 13.7) % 97).toFixed(4)
            const top  = ((i * 61.8 + 29.1) % 93).toFixed(4)
            return (
              <motion.div
                key={i}
                className="particle"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
              />
            )
          })}
        </div>

        <div className="relative z-10 text-center">
          {/* DOCME Logo with animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6"
              >
                <motion.img
                  src="/Docme Logo.png"
                  alt="DOCME Logo"
                  className="w-40 h-40 object-contain"
                  animate={{ 
                    filter: [
                      "drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))",
                      "drop-shadow(0 0 40px rgba(99, 102, 241, 0.8))",
                      "drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-400 text-xl"
              >
                Building Intelligent Digital Ecosystems
              </motion.p>
            </div>
          </motion.div>

          {/* Simple loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-2"
          >
            <motion.div
              className="w-3 h-3 bg-indigo-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-3 h-3 bg-violet-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-cyan-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>
        </div>

        {/* Orbital rings animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-96 h-96 border border-indigo-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-80 h-80 border border-violet-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 border border-cyan-500/20 rounded-full"
          />
        </div>

        {/* Bottom branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-gray-500 text-sm">
            Powered by Advanced Technology
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}