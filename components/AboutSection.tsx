'use client'

import { ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 tracking-tight">
              Pioneering the Future<br />of Digital Ecosystems
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed pt-2">
              At Docme, we are dedicated to revolutionizing how institutions and enterprises operate. By uniting academics, administration, and operations into one seamless intelligent platform, we empower organizations to streamline their workflows, enhance collaboration, and drive scalable growth. Our mission is to build future-ready solutions that simplify complexity and elevate the digital experience.
            </p>
          </div>

          {/* Right Content - Image and Badge */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Team collaborating"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Circular Badge */}
            <div className="absolute -left-6 -bottom-6 sm:-left-16 sm:-bottom-12 w-36 h-36 sm:w-56 sm:h-56 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating Text SVG */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]">
                  <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
                  <text className="text-[10px] font-bold uppercase tracking-[0.25em] fill-slate-800">
                    <textPath href="#circlePath" startOffset="0%" textLength="213">
                      * Docme * Docme * Docme *
                    </textPath>
                  </text>
                </svg>
                
                {/* Center Button */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F1BE48] rounded-full flex items-center justify-center text-slate-900 z-10 transition-transform duration-300 hover:scale-110 cursor-pointer shadow-md">
                  <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.5]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
