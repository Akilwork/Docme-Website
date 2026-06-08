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

// ── Feature Row ──────────────────────────────────────────────────────────────
function FeatureRow({ feature }: { feature: Feature }) {
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
      <div style={{ direction: 'ltr', ...styles.featureImgWrap }}>
        {/* browser bar decoration */}
        <div style={styles.browserBar}>
          <span style={styles.dot} />
          <span style={styles.dot} />
          <span style={styles.dot} />
          <div style={styles.urlBar} />
        </div>
        <img src={feature.image} alt={feature.imageAlt} style={styles.featureImg} />
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
const PortfolioDetailContent = ({
  features,
  screenshots,
  ctaTitle,
  ctaSubtitle,
  ctaLink,
  platforms = ['Web', 'iOS', 'Android', 'Desktop'],
}: PortfolioDetailContentProps) => {
  const platformIcons: Record<string, React.ReactNode> = {
    Web:     <Globe     className="w-5 h-5" />,
    iOS:     <Smartphone className="w-5 h-5" />,
    Android: <Smartphone className="w-5 h-5" />,
    Desktop: <Monitor    className="w-5 h-5" />,
    Tablet:  <Tablet     className="w-5 h-5" />,
  };

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

      {/* ── Screenshots ─────────────────────────────────────────────────── */}
      {screenshots.length > 0 && (
        <section style={styles.screenshotsSection}>
          <div className="site-container">

            {/* First row: 2 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {screenshots.slice(0, 2).map((s, i) => (
                <div key={i} style={styles.screenshotCard}>
                  <div style={styles.browserBar}>
                    <span style={styles.dot} /><span style={styles.dot} /><span style={styles.dot} />
                    <div style={styles.urlBar} />
                  </div>
                  <img src={s.src} alt={s.alt} style={styles.screenshotImg} />
                </div>
              ))}
            </div>

            {/* Second row: 3 cols */}
            {screenshots.length > 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {screenshots.slice(2, 5).map((s, i) => (
                  <div key={i} style={{ ...styles.screenshotCard, aspectRatio: '4/3' }}>
                    <div style={styles.browserBar}>
                      <span style={styles.dot} /><span style={styles.dot} /><span style={styles.dot} />
                      <div style={styles.urlBar} />
                    </div>
                    <img src={s.src} alt={s.alt} style={styles.screenshotImg} />
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaInner}>

          {/* Platform icons */}
          <div style={styles.platformRow}>
            {platforms.map((p) => (
              <div key={p} style={styles.platformIcon} title={p}>
                {platformIcons[p] ?? <Globe className="w-5 h-5" />}
              </div>
            ))}
          </div>

          {/* Thin rule */}
          <div style={styles.ctaDivider} />

          {/* Title */}
          <h2 style={styles.ctaTitle}>{ctaTitle}</h2>

          {ctaSubtitle && <p style={styles.ctaSubtitle}>{ctaSubtitle}</p>}

          {ctaLink && (
            <a
              href={`https://${ctaLink}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaLink}
            >
              {ctaLink}
            </a>
          )}
        </div>
      </section>

    </div>
  );
};

/* ─── styles ────────────────────────────────────────────────────────────────── */
const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 5%',
  },

  /* feature rows */
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

  featureImgWrap: {
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#f4f4f5',
    border: '1px solid #e5e5e5',
    boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
  },

  /* browser bar */
  browserBar: {
    height: '32px',
    background: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    gap: '6px',
    borderBottom: '1px solid #e5e5e5',
  },

  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#d5d5d5',
    display: 'inline-block',
  },

  urlBar: {
    flex: 1,
    height: '16px',
    borderRadius: '99px',
    background: '#ffffff',
    border: '1px solid #e5e5e5',
    marginLeft: '8px',
  },

  featureImg: {
    width: '100%',
    display: 'block',
    objectFit: 'cover',
  },

  /* screenshots */
  screenshotsSection: {
    background: '#fafafa',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    borderTop: '1px solid #eeeeee',
    borderBottom: '1px solid #eeeeee',
  },

  screenshotRow2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },

  screenshotRow3: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1.5rem',
  },

  screenshotCard: {
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#ffffff',
    border: '1px solid #e5e5e5',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
    aspectRatio: '16/10',
  },

  screenshotImg: {
    width: '100%',
    height: 'calc(100% - 32px)',
    objectFit: 'cover',
    display: 'block',
  },

  /* CTA */
  ctaSection: {
    paddingTop: '6rem',
    paddingBottom: '6rem',
    background: '#ffffff',
    textAlign: 'center' as const,
  },

  ctaInner: {
    maxWidth: '560px',
    margin: '0 auto',
    padding: '0 5%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1.5rem',
  },

  platformRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },

  platformIcon: {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    background: '#f4f4f5',
    border: '1px solid #e5e5e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555555',
  },

  ctaDivider: {
    width: '40px',
    height: '1px',
    background: '#dddddd',
  },

  ctaTitle: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
    fontWeight: 700,
    letterSpacing: '-0.025em',
    lineHeight: 1.15,
    color: '#111111',
    margin: 0,
  },

  ctaSubtitle: {
    fontSize: '0.9rem',
    color: '#888888',
    margin: 0,
    lineHeight: 1.7,
  },

  ctaLink: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#111111',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    letterSpacing: '0.01em',
  },
};

export default PortfolioDetailContent;
