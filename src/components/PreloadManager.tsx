'use client'

import { useEffect, useState } from 'react'

interface PreloadManagerProps {
  onPreloadComplete: () => void
}

export default function PreloadManager({ onPreloadComplete }: PreloadManagerProps) {
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = async () => {
      try {
        // Preload hero video if it exists
        const video = document.createElement('video')
        video.src = '/Hero Section.mp4'
        video.preload = 'metadata'
        
        // Preload critical images
        const criticalImages = [
          '/Docme Logo.png',
          // Add other critical images here
        ]

        const imagePromises = criticalImages.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = resolve
            img.onerror = reject
            img.src = src
          })
        })

        await Promise.allSettled(imagePromises)
        setAssetsLoaded(true)
      } catch (error) {
        console.warn('Some assets failed to preload:', error)
        setAssetsLoaded(true) // Continue anyway
      }
    }

    // Check if fonts are loaded
    const checkFonts = async () => {
      try {
        await document.fonts.ready
        setFontsLoaded(true)
      } catch (error) {
        console.warn('Font loading check failed:', error)
        setFontsLoaded(true) // Continue anyway
      }
    }

    preloadAssets()
    checkFonts()
  }, [])

  useEffect(() => {
    if (assetsLoaded && fontsLoaded) {
      // Small delay to ensure everything is ready
      setTimeout(() => {
        onPreloadComplete()
      }, 300)
    }
  }, [assetsLoaded, fontsLoaded, onPreloadComplete])

  return null // This component doesn't render anything
}