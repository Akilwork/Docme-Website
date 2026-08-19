'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Brand {
  name: string
  logo: string
}

interface InfinityBrandProps {
  brands: Brand[]
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
  itemClassName?: string
}

const InfinityBrand = ({
  brands,
  speed = 'normal',
  direction = 'left',
  pauseOnHover = true,
  className,
  itemClassName
}: InfinityBrandProps) => {
  const speedMap = {
    slow: '40s',
    normal: '25s',
    fast: '15s'
  }

  const animationDirection = direction === 'left' ? 'scroll-left' : 'scroll-right'

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left ${speedMap[speed]} linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right ${speedMap[speed]} linear infinite;
        }
      `}</style>
      
      {/* Gradient Masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling Container */}
      <div className="flex overflow-hidden">
        {/* Continuous scrolling animation */}
        <div className={`flex whitespace-nowrap ${animationDirection === 'scroll-left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
          {/* Triple the brands for ultra-smooth animation */}
          {brands.concat(brands).concat(brands).concat(brands).map((brand, index) => (
            <div
              key={`brand-${index}`}
              className={cn(
                "flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32 brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300 cursor-pointer",
                itemClassName
              )}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div 
          className={`flex whitespace-nowrap ${animationDirection === 'scroll-left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
          aria-hidden="true"
        >
          {brands.concat(brands).concat(brands).concat(brands).map((brand, index) => (
            <div
              key={`brand-duplicate-${index}`}
              className={cn(
                "flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32 brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300 cursor-pointer",
                itemClassName
              )}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfinityBrand