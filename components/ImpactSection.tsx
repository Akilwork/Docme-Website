import { ArrowRight } from "lucide-react"

export default function ImpactSection() {
  return (
    <section className="py-32 flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-5xl md:text-6xl font-medium text-slate-900 mb-8 tracking-tight">
          Our Impact
        </h2>
        
        <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-24 font-light">
          Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives and build ecosystems that foster progress.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
          {/* Stat 1 */}
          <div className="space-y-4">
            <h3 className="text-7xl md:text-[80px] font-light text-slate-800 tracking-tight leading-none">
              700+
            </h3>
            <p className="text-slate-500 text-sm md:text-sm max-w-[220px] mx-auto leading-relaxed">
              Projects launched successfully across the globe
            </p>
          </div>
          
          {/* Stat 2 */}
          <div className="space-y-4">
            <h3 className="text-7xl md:text-[80px] font-light text-slate-800 tracking-tight leading-none">
              10M
            </h3>
            <p className="text-slate-500 text-sm md:text-sm max-w-[220px] mx-auto leading-relaxed">
              Daily customer engagement through our projects
            </p>
          </div>
          
          {/* Stat 3 */}
          <div className="space-y-4">
            <h3 className="text-7xl md:text-[80px] font-light text-slate-800 tracking-tight leading-none">
              100+
            </h3>
            <p className="text-slate-500 text-sm md:text-sm max-w-[220px] mx-auto leading-relaxed">
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
