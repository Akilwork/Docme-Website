'use client'

import InfinityBrand from './infinity-brand'

const InfinityBrandDemo = () => {
  // Sample brands data
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
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
            TRUSTED BY LEADING COMPANIES
          </h2>
        </div>

        {/* Different Speed Examples */}
        <div className="space-y-12">
          {/* Normal Speed */}
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-4 text-center">Normal Speed</h3>
            <InfinityBrand brands={brands} speed="normal" />
          </div>

          {/* Slow Speed */}
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-4 text-center">Slow Speed</h3>
            <InfinityBrand brands={brands} speed="slow" />
          </div>

          {/* Fast Speed */}
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-4 text-center">Fast Speed</h3>
            <InfinityBrand brands={brands} speed="fast" />
          </div>

          {/* Right Direction */}
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-4 text-center">Right Direction</h3>
            <InfinityBrand brands={brands} direction="right" />
          </div>

          {/* Custom Styling */}
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-4 text-center">Custom Styling</h3>
            <InfinityBrand 
              brands={brands} 
              className="bg-slate-100 py-8 rounded-lg"
              itemClassName="bg-white rounded-lg shadow-sm hover:shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfinityBrandDemo