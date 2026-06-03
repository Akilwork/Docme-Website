'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  client?: string;
  year?: string;
  role?: string;
  overview?: string;
}

interface PortfolioDetailHeaderProps {
  project: Project;
}

const PortfolioDetailHeader = ({ project }: PortfolioDetailHeaderProps) => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ── Hero area ── */}
      <div className="relative w-full min-h-[88vh] flex flex-col">

        {/* Background soft primary gradient wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(99,102,241,0.12) 0%, rgba(79,70,229,0.07) 40%, transparent 70%)',
          }}
        />


        {/* ── Main content grid ── */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left ─ Text block */}
          <div className="flex flex-col gap-6">

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[11px] font-bold tracking-widest uppercase rounded-full border"
                  style={{
                    color: '#6366f1',
                    borderColor: 'rgba(99,102,241,0.28)',
                    background: 'rgba(99,102,241,0.09)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              className="font-serif font-bold leading-[1.05] text-black"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)' }}
            >
              {project.title}
            </h1>

            {/* Divider */}
            <div
              className="w-16 h-[3px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #6366f1, #818cf8)' }}
            />

            {/* Description / overview */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              {project.overview ?? project.description}
            </p>

            {/* Meta row */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {[
                { label: 'Client', value: project.client ?? 'Radiant Co.' },
                { label: 'Year', value: project.year ?? '2024' },
                { label: 'Role', value: project.role ?? 'Brand Strategy' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-black">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  boxShadow: '0 4px 20px rgba(99,102,241,0.30)',
                }}
              >
                View Live Project
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right ─ Hero image */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            {/* Primary overlay tint */}
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-3xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, transparent 60%)',
              }}
            />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Bottom gradient fade ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to top, white, transparent)' }}
        />
      </div>
    </section>
  );
};

export default PortfolioDetailHeader;
