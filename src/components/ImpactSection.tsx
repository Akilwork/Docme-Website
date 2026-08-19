import { ArrowRight } from "lucide-react"

export default function ImpactSection() {
  return (
    <section className="section-spacing bg-white flex flex-col items-center justify-center">
      <div className="site-container text-center">
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-slate-900 mb-6 sm:mb-8 tracking-tight">
          Our Impact
        </h2>
        
        <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16 md:mb-24 font-light">
          Docme empowers organizations with innovative digital solutions that simplify operations, enhance efficiency, and drive sustainable growth. We help businesses and institutions achieve smarter outcomes through technology-driven innovation.

        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {/* Stat 1 */}
          <div className="space-y-4">
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-light text-slate-800 tracking-tight leading-none">
              700+
            </h3>
            <p className="text-slate-500 text-sm max-w-[220px] mx-auto leading-relaxed">
              Projects launched successfully across the globe
            </p>
          </div>
          
          {/* Stat 2 */}
          <div className="space-y-4">
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-light text-slate-800 tracking-tight leading-none">
              10M
            </h3>
            <p className="text-slate-500 text-sm max-w-[220px] mx-auto leading-relaxed">
              Daily customer engagement through our projects
            </p>
          </div>
          
          {/* Stat 3 */}
          <div className="space-y-4">
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-light text-slate-800 tracking-tight leading-none">
              100+
            </h3>
            <p className="text-slate-500 text-sm max-w-[220px] mx-auto leading-relaxed">
              Digital transformation stories that made a difference
            </p>
          </div>
        </div>
        
        {/* 
        <button className="inline-flex items-center space-x-3 bg-[#0044FF] hover:bg-blue-700 text-white px-8 py-4 text-sm font-medium transition-colors duration-300">
          <span>Our Impact</span>
          <ArrowRight className="w-4 h-4" />
        </button> 
        */}
        
      </div>
    </section>
  )
}
