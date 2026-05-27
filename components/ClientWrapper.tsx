'use client'

import { useState, useEffect } from 'react'
import { LoadingScreen, LOADING_CONFIG } from './LoadingConfig'
import PreloadManager from './PreloadManager'

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [preloadComplete, setPreloadComplete] = useState(false)
  const [minTimeComplete, setMinTimeComplete] = useState(false)

  const handleLoadingComplete = () => {
    // Only complete loading when both preload and minimum time are done
    if (preloadComplete && minTimeComplete) {
      setIsLoading(false)
      setTimeout(() => {
        setShowContent(true)
      }, 100)
    }
  }

  const handlePreloadComplete = () => {
    setPreloadComplete(true)
  }

  useEffect(() => {
    // Ensure minimum loading time for better UX
    const minLoadTimer = setTimeout(() => {
      setMinTimeComplete(true)
    }, LOADING_CONFIG.minLoadTime)

    return () => clearTimeout(minLoadTimer)
  }, [])

  // Check if loading should complete
  useEffect(() => {
    if (preloadComplete && minTimeComplete) {
      handleLoadingComplete()
    }
  }, [preloadComplete, minTimeComplete])

  // Fallback: Show content after maximum wait time to prevent infinite loading
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!showContent) {
        setIsLoading(false)
        setShowContent(true)
      }
    }, 5000) // Show content after 5 seconds maximum

    return () => clearTimeout(fallbackTimer)
  }, [showContent])

  return (
    <>
      <PreloadManager onPreloadComplete={handlePreloadComplete} />
      {isLoading && <LoadingScreen onLoadingComplete={() => {}} />}
      {showContent && (
        <div className="animate-fade-in">
          {children}
        </div>
      )}
    </>
  )
}