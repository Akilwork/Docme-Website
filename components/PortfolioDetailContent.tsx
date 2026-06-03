'use client';

import React from 'react';
import { Monitor, Smartphone, Tablet, Globe } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────────
interface Feature {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

interface PortfolioDetailContentProps {
  overview: string;
  features: Feature[];
  screenshots: { src: string; alt: string }[];
  ctaTitle: string;
  ctaSubtitle?: string;
  ctaLink?: string;
  platforms?: string[];
}

// ── MockupFrame ─────────────────────────────────────────────────────────────
function MockupFrame({
  src,
  alt,
  size = 'lg',
}: {
  src: string;
  alt: string;
  size?: 'sm' | 'lg';
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-gray-50 shadow-[0_4px_32px_rgba(0,0,0,0.10)] border border-gray-100 ${
        size === 'sm' ? 'aspect-[4/3]' : 'aspect-[16/10]'
      }`}
    >
      {/* Top bar decoration */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-gray-100 flex items-center px-3 gap-1.5 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
        <div className="flex-1 mx-3 h-4 rounded-full bg-white/80 border border-gray-200" />
      </div>
      <div className="pt-7 w-full h-full">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

// ── Feature Row ──────────────────────────────────────────────────────────────
function FeatureRow({ feature }: { feature: Feature }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        feature.reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
      }`}
    >
      {/* Text */}
      <div className="flex flex-col gap-5">
        <h2
          className="font-bold text-black leading-tight"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
        >
          {feature.title}
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-md">
          {feature.description}
        </p>
      </div>

      {/* Mockup */}
      <MockupFrame src={feature.image} alt={feature.imageAlt} size="lg" />
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
const PortfolioDetailContent = ({
  overview,
  features,
  screenshots,
  ctaTitle,
  ctaSubtitle,
  ctaLink,
  platforms = ['Web', 'iOS', 'Android', 'Desktop'],
}: PortfolioDetailContentProps) => {
  const platformIcons: Record<string, React.ReactNode> = {
    Web: <Globe className="w-5 h-5" />,
    iOS: <Smartphone className="w-5 h-5" />,
    Android: <Smartphone className="w-5 h-5" />,
    Desktop: <Monitor className="w-5 h-5" />,
    Tablet: <Tablet className="w-5 h-5" />,
  };

  return (
    <div className="w-full bg-white">

      {/* ── Overview strip ─────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-16 text-center">
        <p className="text-gray-500 text-lg leading-relaxed">{overview}</p>
      </section>

      {/* ── Alternating Feature Rows ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24 pb-24">
        {features.map((feature, i) => (
          <FeatureRow key={i} feature={feature} />
        ))}
      </section>

      {/* ── Screenshots Grid ────────────────────────────────────────────── */}
      {screenshots.length > 0 && (
        <section className="bg-[#fafafa] py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* First big row: 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {screenshots.slice(0, 2).map((s, i) => (
                <MockupFrame key={i} src={s.src} alt={s.alt} size="lg" />
              ))}
            </div>
            {/* Second row: 3 cols */}
            {screenshots.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {screenshots.slice(2, 5).map((s, i) => (
                  <MockupFrame key={i} src={s.src} alt={s.alt} size="sm" />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── CTA / Conclusion ─────────────────────────────────────────────── */}
      <section className="w-full py-20 text-center bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-6">

          {/* Platform icons */}
          <div className="flex items-center gap-4">
            {platforms.map((p) => (
              <div
                key={p}
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500"
                title={p}
              >
                {platformIcons[p] ?? <Globe className="w-5 h-5" />}
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <div className="w-12 h-px bg-gray-200" />

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            {ctaTitle}
          </h2>

          {ctaSubtitle && (
            <p className="text-gray-500 text-base">{ctaSubtitle}</p>
          )}

          {/* Link */}
          {ctaLink && (
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 text-[#c85a3b] hover:text-[#a04530] transition-colors duration-200"
            >
              {ctaLink}
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetailContent;
