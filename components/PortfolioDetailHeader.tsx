'use client';

import React from 'react';

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
    <section style={styles.section} className="pt-20 sm:pt-24 lg:pt-28">
      <div className="site-container">

        {/* ── Top row: title left, description right ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pb-6 md:pb-10 items-end">
          <h1 style={styles.title}>{project.title}</h1>
          <p style={styles.description}>
            {project.overview ?? project.description}
          </p>
        </div>

        {/* ── Thin divider ── */}
        <div style={styles.divider} />

        {/* ── Hero image ── */}
        <div style={styles.heroWrap}>
          <img
            src={project.image}
            alt={project.title}
            style={styles.heroImg}
          />
        </div>

        {/* ── Meta row ── */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-12 pb-6 md:pb-10 border-b border-gray-200">
          {[
            { label: 'Client', value: project.client ?? 'Docme' },
            { label: 'Year',   value: project.year   ?? '2024'  },
            { label: 'Role',   value: project.role   ?? 'Design & Dev' },
          ].map(({ label, value }) => (
            <div key={label} style={styles.metaItem}>
              <span style={styles.metaLabel}>{label}</span>
              <span style={styles.metaValue}>{value}</span>
            </div>
          ))}

          {/* Tags on the right */}
          <div className="flex flex-wrap gap-2 ml-auto">
            {project.tags.map((tag, i) => (
              <span key={i} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

/* ─── styles ────────────────────────────────────────────────────────────────── */
const styles: Record<string, React.CSSProperties> = {
  section: {
    background: '#ffffff',
    paddingBottom: '0',
    fontFamily: 'inherit',
  },

  container: {
    maxWidth: '1180px',
    margin: '0 auto',
    padding: '0 5%',
  },

  /* top two-column row */
  topRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'flex-end',
    paddingBottom: '2.5rem',
  },

  title: {
    fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    color: '#111111',
    margin: 0,
  },

  description: {
    fontSize: '0.95rem',
    lineHeight: 1.75,
    color: '#777777',
    margin: 0,
    maxWidth: '48ch',
    alignSelf: 'flex-end',
  },

  divider: {
    height: '1px',
    background: '#e5e5e5',
    marginBottom: '2.5rem',
  },

  /* hero image */
  heroWrap: {
    width: '100%',
    aspectRatio: '16 / 8',
    overflow: 'hidden',
    borderRadius: '16px',
    background: '#f0f0f0',
    marginBottom: '2rem',
  },

  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  /* meta strip */
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
    paddingBottom: '2.5rem',
    borderBottom: '1px solid #e5e5e5',
  },

  metaItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.25rem',
  },

  metaLabel: {
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#aaaaaa',
  },

  metaValue: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#111111',
  },

  tags: {
    display: 'flex',
    gap: '0.5rem',
    marginLeft: 'auto',
  },

  tag: {
    display: 'inline-block',
    padding: '0.3rem 0.85rem',
    border: '1px solid #d0d0d0',
    borderRadius: '999px',
    fontSize: '0.68rem',
    fontWeight: 700,
    color: '#555555',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  },
};

export default PortfolioDetailHeader;
