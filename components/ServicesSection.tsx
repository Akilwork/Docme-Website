'use client'

import { useRouter } from 'next/navigation'

const services = [
  {
    id: 'education-institution',
    tag: 'Education',
    title: 'Education & Institution Solutions',
    description:
      'Empower educational institutions with smart digital solutions that streamline operations, enhance engagement, and improve learning experiences',
    features: [
      'Student Information System',
      'Academic Planning',
      'Grade Management',
    ],
    image: '/assets/Feature/School Dairy V2.1 1.jpg',
  },
  {
    id: 'business-management',
    tag: 'Business',
    title: 'Administration & Operations',
    description:
      'Streamline operations with a centralized platform that enhances productivity, automates workflows, and enables smarter decision-making.',
    features: [
      'Multi-branch ERP',
      'Inventory & Supply Chain',
      'CRM & Sales Automation',
    ],
    image: '/assets/Feature/BM One.jpg',
  },
  {
    id: 'cloud-digital',
    tag: 'Cloud',
    title: 'Cloud & Digital Solutions',
    description:
      'Accelerate digital transformation with secure, scalable cloud solutions that enhance efficiency, collaboration, and business growth..',
    features: [
      'Cloud Migration & Hosting',
      'SaaS Platform Development',
      'API Integration Services',
    ],
    image: '/assets/Feature/dash.jpg',
  },
]

const ServicesSection = () => {
  const router = useRouter()

  return (
    <section className="bg-[#F5F5F7] relative w-full py-16 sm:py-20 lg:py-24">
      <div className="site-container">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-4 sm:mb-6 tracking-tight">
            Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Docme delivers smart digital and cloud solutions that drive efficiency, innovation, and business growth.
          </p>
        </div>

        {/* Responsive 3-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => router.push('/services')}
              className="group bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-2 sm:p-2.5 cursor-pointer transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image — aspect-ratio based, no fixed height */}
              <div className="relative w-full aspect-[4/3] rounded-[16px] sm:rounded-[20px] overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-4 sm:p-5 lg:p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2">
                  {service.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mt-auto">
                  {service.features.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <button
            onClick={() => router.push('/services')}
            className="group px-6 sm:px-8 py-3 sm:py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 text-sm sm:text-base"
          >
            View more services
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
