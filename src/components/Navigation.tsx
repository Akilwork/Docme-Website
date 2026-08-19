'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let lastY = typeof window !== 'undefined' ? window.scrollY : 0

    const handleScroll = () => {
      const currentY = window.scrollY

      setScrolled(currentY > 20)

      if (currentY <= 10) {
        setVisible(true)
        lastY = currentY
      } else if (currentY > lastY + 10) {
        setVisible(false)
        lastY = currentY
      } else if (currentY < lastY - 2) {
        setVisible(true)
        lastY = currentY
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' 
          : 'bg-slate-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => { window.location.href = '/' }}
          >
            <div className="flex items-center space-x-2">
              {/* Logo Image */}
              <img 
                src="/Docme Logo.png" 
                alt="Docme Logo" 
                className="h-8 w-auto"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.name === 'Home' ? (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium"
                  onClick={(e) => { e.preventDefault(); window.location.href = '/' }}
                >
                  {item.name}
                </motion.a>
              ) : (
                <Link key={item.name} href={item.href} passHref legacyBehavior>
                  <motion.a
                    whileHover={{ y: -2 }}
                    className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer font-medium"
                  >
                    {item.name}
                  </motion.a>
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) =>
                item.name === 'Home' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 cursor-pointer"
                    onClick={(e) => { e.preventDefault(); window.location.href = '/' }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation