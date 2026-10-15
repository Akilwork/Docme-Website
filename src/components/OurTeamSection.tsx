'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TeamMember {
  id: string
  name: string
  tagline: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'YOUR NAME HERE',
    tagline: 'TAG LINE HERE',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'YOUR NAME HERE',
    tagline: 'TAG LINE HERE',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'YOUR NAME HERE',
    tagline: 'TAG LINE HERE',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
]

export default function OurTeamSection() {
  return (
    <section id="our-team" className="relative py-24 bg-[#f8f9fa] overflow-hidden">

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 tracking-tight">
            Our Team
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto pt-2">
            Meet the innovators, engineers, and strategists behind Docme dedicated to building intelligent digital ecosystems and empowering organizations worldwide.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col items-center pt-24 group"
            >
              {/* Circular Avatar placed at the top */}
              <div className="absolute top-0 z-20 w-44 h-44 sm:w-48 sm:h-48 rounded-full border-[7px] border-[#081125] bg-[#081125] p-0.5 shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* 
                Card Body:
                Geometric styling replicating the exact reference:
                - top-left: large curve (rounded-tl-[85px])
                - top-right: stepped shoulder (rounded-tr-[14px])
                - bottom-left: sharp square 90-degree corner (rounded-bl-none)
                - bottom-right: large sweeping curve (rounded-br-[85px])
              */}
              <div className="w-full bg-[#081125] text-white pt-28 pb-10 px-7 sm:px-8 flex flex-col items-center text-center shadow-xl rounded-tl-[85px] rounded-tr-[14px] rounded-bl-none rounded-br-[85px] transition-all duration-300 group-hover:shadow-2xl">
                <h3 className="font-bold text-base sm:text-[17px] tracking-wider uppercase text-white mt-1">
                  {member.name}
                </h3>

                <p className="text-slate-300 text-xs font-semibold tracking-widest uppercase mt-1">
                  {member.tagline}
                </p>

                <p className="text-slate-300/80 text-xs sm:text-[13px] leading-relaxed mt-4 max-w-[270px]">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
