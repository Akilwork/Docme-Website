'use client'

import Image from 'next/image'

export const InfinityBrand = () => {
  // Company logos from your assets folder
  const brands = [
    { name: 'Company 1', logo: '/assets/companies/1.png' },
    { name: 'Company 2', logo: '/assets/companies/2.png' },
    { name: 'Company 3', logo: '/assets/companies/3.png' },
    { name: 'Company 4', logo: '/assets/companies/4.png' },
    { name: 'Company 5', logo: '/assets/companies/5.png' },
    { name: 'Company 7', logo: '/assets/companies/7.png' },
    { name: 'Company 8', logo: '/assets/companies/8.png' },
    { name: 'Company 9', logo: '/assets/companies/9.png' },
    { name: 'Company 10', logo: '/assets/companies/10.png' },
    { name: 'Docme Partner', logo: '/assets/companies/image 711.png' },
  ]

  return (
    <>
      <style jsx>{`
        @keyframes infinite-scroll {
          from { 
            transform: translateX(0); 
          }
          to { 
            transform: translateX(-100%); 
          }
        }
      `}</style>
      
      <div className='w-full py-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
        {/* First set of logos */}
        <ul 
          className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
          style={{ animation: 'infinite-scroll 25s linear infinite' }}
        >
          {brands.map((brand, index) => (
            <li key={`first-${index}`} className="flex-shrink-0">
              <div className='w-32 h-20 flex items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group'>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className='max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100'
                />
              </div>
            </li>
          ))}
        </ul>
        
        {/* Duplicate set for seamless loop */}
        <ul 
          className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
          aria-hidden='true'
          style={{ animation: 'infinite-scroll 25s linear infinite' }}
        >
          {brands.map((brand, index) => (
            <li key={`second-${index}`} className="flex-shrink-0">
              <div className='w-32 h-20 flex items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group'>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className='max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100'
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}