import React from 'react'
import { Check } from 'lucide-react'

const ServiceDetailsContent = () => {
  const features = [
    {
      title: 'Business Audit',
      description: 'Est libero fringilla fermentum volutpat tincidunt tortor luctus nunc. Nisl amet at ullamcorper nibh sed. Habitant sapien tristique pulvinar molestie pretium.',
    },
    {
      title: 'Market Analysis',
      description: 'Est libero fringilla fermentum volutpat tincidunt tortor luctus nunc. Nisl amet at ullamcorper nibh sed. Habitant sapien tristique pulvinar molestie pretium.',
    },
    {
      title: 'Brand Positioning',
      description: 'Est libero fringilla fermentum volutpat tincidunt tortor luctus nunc. Nisl amet at ullamcorper nibh sed. Habitant sapien tristique pulvinar molestie pretium.',
    },
    {
      title: 'Strategic Roadmap',
      description: 'Est libero fringilla fermentum volutpat tincidunt tortor luctus nunc. Nisl amet at ullamcorper nibh sed. Habitant sapien tristique pulvinar molestie pretium.',
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Image and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          
          {/* Left Column: Image */}
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="/assets/Feature/dash.jpg" 
              alt="Business Strategy" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start">
            <span className="text-indigo-600 font-semibold mb-4 tracking-wide">
              Business Strategy
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Strategic Guidance to Grow Smarter
            </h2>
            
            <p className="text-gray-500 mb-8 leading-relaxed">
              Est libero fringilla fermentum volutpat tincidunt tortor luctus nunc. Nisl amet at ullamcorper nibh sed. Habitant sapien tristique pulvinar.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h3>
            
            <p className="text-gray-500 mb-6 leading-relaxed">
              Est libero fringilla fermentum volutpat tincidunt tortor luctus nunc. Nisl amet at ullamcorper nibh sed. Habitant sapien tristique pulvinar.
            </p>
            
            <p className="text-gray-500 mb-8 leading-relaxed">
              Egestas a vel urna sit blandit. Aliquet vestibulum est et orci quam varius in vulputate. Vel integer sem facilisis id odio amet tellus nisi non. Tempus egestas volutpat fusce et vulputate suspendisse aliquam. Quisque.
            </p>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200">
              Start Consultation
            </button>
          </div>
        </div>

        {/* Bottom Section: Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServiceDetailsContent
