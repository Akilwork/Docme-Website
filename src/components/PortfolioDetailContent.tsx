'use client';

import React from 'react';

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

// ── Feature Row ──────────────────────────────────────────────────────────────
function FeatureRow({ feature }: { feature: Feature }) {
  const isMobileMockup =
    feature.image.includes('/School dairy/') ||
    feature.image.includes('/Teacher app/') ||
    feature.image.toLowerCase().includes('mobile');

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ${
        feature.reverse ? 'md:[direction:rtl]' : ''
      }`}
    >
      {/* Text — always reset to ltr inside */}
      <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
        <h2 style={styles.featureTitle}>{feature.title}</h2>
        <p style={styles.featureBody}>{feature.description}</p>
      </div>

      {/* Image */}
      <div
        className="flex items-center justify-center w-full"
        style={{ direction: 'ltr' }}
      >
        <img
          src={feature.image}
          alt={feature.imageAlt}
          className={`w-auto h-auto object-contain mx-auto drop-shadow-xl transition-transform duration-500 hover:scale-[1.02] ${
            isMobileMockup
              ? 'max-h-[320px] sm:max-h-[360px] md:max-h-[400px] max-w-[240px] sm:max-w-[280px] md:max-w-[320px]'
              : 'max-h-[400px] sm:max-h-[460px] md:max-h-[500px] max-w-full'
          }`}
        />
      </div>
    </div>
  );
}

// ── Screenshot Card ──────────────────────────────────────────────────────────
function ScreenshotCard({
  src,
  alt,
  title,
  description,
  wide = false,
}: {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  wide?: boolean;
}) {
  const isPng = src.toLowerCase().endsWith('.png');

  return (
    <div style={{ ...styles.card, ...(wide ? styles.cardWide : {}) }}>
      {/* Image area */}
      <div
        style={{
          ...styles.cardImgWrap,
          padding: isPng ? '32px 24px 0 24px' : '24px 24px 0 24px',
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            ...styles.cardImg,
            objectFit: isPng ? 'contain' : 'cover',
            objectPosition: isPng ? 'bottom center' : 'top center',
            borderRadius: isPng ? '0' : '10px 10px 0 0',
            maxHeight: isPng ? '92%' : '100%',
          }}
        />
      </div>
      {/* Text area */}
      {(title || description) && (
        <div style={styles.cardBody}>
          {title && (
            <p style={styles.cardText}>
              <strong style={styles.cardTitle}>{title}</strong>
              {description && <> {description}</>}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
const PortfolioDetailContent = ({
  features,
  screenshots,
}: PortfolioDetailContentProps) => {
  return (
    <div style={{ background: '#ffffff', fontFamily: 'inherit' }}>

      {/* ── Alternating feature rows ────────────────────────────────────── */}
      <section style={styles.featuresSection}>
        <div className="site-container">
          {features.map((feature, i) => (
            <div key={i} className={i < features.length - 1 ? 'mb-12 sm:mb-16 md:mb-20 lg:mb-32' : ''}>
              <FeatureRow feature={feature} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Screenshots — 2x2 grid layout ─────────────────── */}
      {screenshots.length > 0 && (
        <section id="screenshots-section" style={styles.screenshotsSection}>
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {screenshots.map((s, i) => (
                <ScreenshotCard
                  key={i}
                  src={s.src}
                  alt={s.alt}
                />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

/* ─── styles ────────────────────────────────────────────────────────────────── */
const styles: Record<string, React.CSSProperties> = {

  /* ── feature rows ── */
  featuresSection: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },

  featureTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
    color: '#111111',
    margin: 0,
  },

  featureBody: {
    fontSize: '0.92rem',
    lineHeight: 1.8,
    color: '#777777',
    margin: 0,
    maxWidth: '44ch',
  },

  featureImg: {
    width: '100%',
    display: 'block',
    objectFit: 'cover',
  },

  /* ── screenshots section ── */
  screenshotsSection: {
    background: '#f2f3f5',
    paddingTop: '5rem',
    paddingBottom: '5rem',
  },

  /* top row — 2 equal columns */
  topRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '20px',
  },

  /* bottom row — left-aligned half-width card */
  bottomRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },

  /* ── card ── */
  card: {
    background: '#ffffff',
    borderRadius: '20px',
    border: '1px solid #e8e8e8',
    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
  },

  cardWide: {
    gridColumn: '1 / 2',
  },

  cardImgWrap: {
    width: '100%',
    aspectRatio: '16/10',
    overflow: 'hidden',
    background: '#f7f7f7',
    padding: '24px 24px 0 24px',
    boxSizing: 'border-box' as const,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    display: 'block',
    borderRadius: '10px 10px 0 0',
  },

  cardBody: {
    padding: '18px 22px 20px',
  },

  cardText: {
    margin: 0,
    fontSize: '0.875rem',
    lineHeight: 1.65,
    color: '#555555',
  },

  cardTitle: {
    fontWeight: 700,
    color: '#111111',
    fontSize: '0.875rem',
  },
};

export default PortfolioDetailContent;
