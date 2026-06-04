'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageTransitionLoader() {
  const pathname = usePathname()
  const prevPathname = useRef<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // On first mount, don't show — ClientWrapper handles the initial home load
    if (prevPathname.current === null) {
      prevPathname.current = pathname
      return
    }

    // Only trigger when navigating TO home from another page
    if (pathname === '/' && prevPathname.current !== '/') {
      prevPathname.current = pathname
      return // Let ClientWrapper handle home page load on hard nav
    }

    // For all other page transitions, show the loader briefly
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1800)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-900"
          style={{ backgroundColor: '#0f172a' }}
        >
          {/* Background mesh */}
          <div className="fixed inset-0 mesh-bg opacity-10 pointer-events-none" />

          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-8"
            >
              <motion.img
                src="/Docme Logo.png"
                alt="DOCME Logo"
                className="w-32 h-32 object-contain mx-auto"
                animate={{
                  filter: [
                    'drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))',
                    'drop-shadow(0 0 40px rgba(99, 102, 241, 0.8))',
                    'drop-shadow(0 0 20px rgba(99, 102, 241, 0.4))',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex justify-center space-x-2"
            >
              {[0, 0.2, 0.4].map((delay, i) => (
                <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === 0 ? 'bg-indigo-500' : i === 1 ? 'bg-violet-500' : 'bg-cyan-500'
                  }`}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay }}
                />
              ))}
            </motion.div>
          </div>

          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-80 h-80 border border-indigo-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute w-64 h-64 border border-violet-500/20 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
