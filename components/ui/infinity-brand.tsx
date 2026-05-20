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
  pauseOnHover = true,
  className,
  itemClassName
}: InfinityBrandProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden py-8", className)}>
      {/* Gradient Masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling Container */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        {/* First set of logos */}
        <ul 
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          style={{ animation: 'infinite-scroll 30s linear infinite' }}
        >
          {brands.map((brand, index) => (
            <li key={`first-${index}`} className="flex-shrink-0">
              <div className={cn(
                "w-32 h-20 flex items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group",
                itemClassName
              )}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  priority={index < 5}
                />
              </div>
            </li>
          ))}
        </ul>
        
        {/* Duplicate set for seamless loop */}
        <ul 
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
          style={{ animation: 'infinite-scroll 30s linear infinite' }}
        >
          {brands.map((brand, index) => (
            <li key={`second-${index}`} className="flex-shrink-0">
              <div className={cn(
                "w-32 h-20 flex items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group",
                itemClassName
              )}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InfinityBrand