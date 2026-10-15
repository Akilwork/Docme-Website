'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    slug: 'class-control',
    title: 'Teacher App',
    description: 'Manage attendance, timetable, and fees right from your pocket.',
    tags: ['MOBILE APP', 'MANAGEMENT'],
    image: '/assets/Teacher app/10 (dark, light, color).jpg',
  },
  {
    id: 2,
    slug: 'school-dairy',
    title: 'School Dairy',
    description: 'Learning, academics, and campus life unified in one student app.',
    tags: ['STUDENT PORTAL', 'WEB DESIGN'],
    image: '/assets/School dairy/School Dairy V2.1 1.jpg',
  },
  {
    id: 3,
    slug: 'bm-canteen',
    title: 'BM Canteen',
    description: 'Real-time order tracking and smart sales management for school cafeterias.',
    tags: ['MANAGEMENT', 'DEVELOPMENT'],
    image: '/assets/Canteen/Canteen.jpg',
  },
  {
    id: 4,
    slug: 'smart-dashboard',
    title: 'Smart Dashboard',
    description: 'Unified financial analytics and performance insights at a glance.',
    tags: ['ANALYTICS', 'WEB DESIGN'],
    image: '/assets/Feature/dash.jpg',
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
              <p className="text-gray-600">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;