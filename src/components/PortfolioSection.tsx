'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    slug: 'radiant-skincare-branding',
    title: 'Radiant skincare branding',
    description: 'Radiant skincare is offering a user-centric, ad-free platform.',
    tags: ['BRANDING', 'WEB DESIGN'],
    image:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'apex-clothing-rebrand',
    title: 'Apex clothing Co. rebrand',
    description: 'Bold new look for an eco-conscious apparel brand.',
    tags: ['BRANDING', 'DEVELOPMENT'],
    image:
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'vero-app-development',
    title: 'Vero app development',
    description:
      'Vero aimed to distinguish itself in a competitive social media landscape.',
    tags: ['BRANDING', 'DEVELOPMENT', 'WEB DESIGN'],
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    slug: 'stoyo-branding',
    title: 'Stoyo branding',
    description: 'Visual identity and packaging design for a Stoyo brand.',
    tags: ['BRANDING', 'SUPPORT'],
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    slug: 'fintech-dashboard-ui',
    title: 'Fintech Dashboard UI',
    description: 'Modern financial analytics interface with dark mode support.',
    tags: ['UI DESIGN', 'WEB DESIGN'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    slug: 'eco-friendly-packaging',
    title: 'Eco-Friendly Packaging',
    description: 'Sustainable product packaging design for organic brands.',
    tags: ['BRANDING', 'PRINT DESIGN'],
    image:
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop',
  },
];

const PortfolioSection = () => {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20 md:pb-24 lg:pb-32">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 mb-6 overflow-hidden rounded-[16px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Arrow icon on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                      boxShadow: '0 4px 14px rgba(99,102,241,0.40)',
                    }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom gradient fade on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[16px]"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(99,102,241,0.15) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Meta */}
              <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-[#6366f1] transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-[11px] font-bold tracking-wider rounded-full transition-all duration-200"
                    style={{
                      color: '#6366f1',
                      border: '1px solid rgba(99,102,241,0.25)',
                      background: 'rgba(99,102,241,0.08)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;