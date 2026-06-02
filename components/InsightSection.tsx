import React from 'react'

const INSIGHTS = [
  {
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Blog",
    readTime: "20min read",
    date: "November 30, 2023",
    description: "Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence."
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Blog",
    readTime: "20min read",
    date: "November 30, 2023",
    description: "Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence."
  },
  {
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Blog",
    readTime: "20min read",
    date: "November 30, 2023",
    description: "Comprehensive digital solutions designed to transform every aspect of institutional management and operational excellence."
  }
]

export default function InsightSection() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-20 text-center tracking-tight">
          Insight
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {INSIGHTS.map((insight, index) => (
            <div key={index} className="group cursor-pointer flex flex-col">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-slate-900 border border-white/10">
                <img
                  src={insight.image}
                  alt="Insight thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Meta row */}
              <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-5 px-1">
                <div>
                  <span className="text-white font-semibold">{insight.category}</span>
                  <span className="mx-2">.</span>
                  <span>{insight.readTime}</span>
                </div>
                <div>{insight.date}</div>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed font-serif px-1 pr-4">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
