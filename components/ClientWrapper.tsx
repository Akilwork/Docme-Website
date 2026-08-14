'use client'

import { useState, useEffect, useLayoutEffect } from 'react'
import { LoadingScreen, LOADING_CONFIG } from './LoadingConfig'
import PreloadManager from './PreloadManager'

// Marks that the loading screen has already been shown in this browser session.
// Using sessionStorage means: first mount shows the loader, every subsequent
// refresh (same tab) skips it. A brand-new tab/session shows it again.
const SESSION_KEY = 'docme_has_loaded'

// useLayoutEffect on the client (runs before paint, so no loader flash on
// refresh), but fall back to useEffect during SSR to avoid the React warning.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

interface ClientWrapperProps {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const [preloadComplete, setPreloadComplete] = useState(false)
  const [minTimeComplete, setMinTimeComplete] = useState(false)

  const handleLoadingComplete = () => {
    // Only complete loading when both preload and minimum time are done
    if (preloadComplete && minTimeComplete) {
      setIsLoading(false)
      setShowContent(true)
    }
  }

  const handlePreloadComplete = () => {
    setPreloadComplete(true)
  }

  // Skip the loader on refreshes within the same session.
  useIsomorphicLayoutEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setIsLoading(false)
      setShowContent(true)
      setPreloadComplete(true)
      setMinTimeComplete(true)
      return
    }
    // First mount of this session: remember it so refreshes skip the loader.
    sessionStorage.setItem(SESSION_KEY, 'true')
    setIsLoading(true)
  }, [])

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