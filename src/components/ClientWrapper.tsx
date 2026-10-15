'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from './LoadingScreen'

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  // Show loader only on the very first visit of the browser session.
  // Once the loader completes, we write a flag to sessionStorage so it
  // is skipped on every subsequent page load within the same session.
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (window.location.search.includes('skipLoader') || sessionStorage.getItem('docme_loaded') === 'true') {
      setIsLoading(false)
      return
    }
    setIsLoading(true)

    // Safety timeout: ensure loader never blocks the page longer than 4.2s
    const safetyTimer = setTimeout(() => {
      sessionStorage.setItem('docme_loaded', 'true')
      setIsLoading(false)
    }, 4200)

    return () => clearTimeout(safetyTimer)
  }, [])

  const handleLoadingComplete = () => {
    sessionStorage.setItem('docme_loaded', 'true')
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      <div className={isLoading ? 'fixed inset-0 overflow-hidden' : ''}>
        {children}
      </div>
    </>
  )
}
