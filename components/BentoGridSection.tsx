'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/* ─── data ─────────────────────────────────────────────────────────────────── */
const cases = [
  {
    img: '/assets/Feature/10 (dark, light, color).jpg',
    alt: 'Class Control Mobile App',
    slug: 'class-control',
    title: 'Class Control',
    description: 'Manage attendance, timetable, and fees right from your pocket.',
  },
  {
    img: '/assets/Feature/School Dairy V2.1 1.jpg',
    alt: 'School Dairy Student Portal',
    slug: 'school-dairy',
    title: 'School Dairy',
    description: 'Learning, academics, and campus life unified in one student app.',
  },
  {
    img: '/assets/Feature/Canteen.jpg',
    alt: 'BM Canteen Management',
    slug: 'bm-canteen',
    title: 'BM Canteen',
    description: 'Real-time order tracking and smart sales management for school cafeterias.',
  },
  {
    img: '/assets/Feature/dash.jpg',
    alt: 'Smart Dashboard Analytics',
    slug: 'smart-dashboard',
    title: 'Smart Dashboard',
    description: 'Unified financial analytics and performance insights at a glance.',
  },
]

/* ─── animation helpers ─────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

/* ─── component ─────────────────────────────────────────────────────────────── */
const BentoGridSection = () => {
  return (
    <section className="bg-[#eeeff3] py-14 sm:py-16 md:py-20">
      <div className="site-container">

        {/* ── Header ── */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={styles.sectionTitle}>Case Study</h2>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6%' }}
        >
          {cases.map((item, i) => (
            <CaseCard key={i} {...item} />
          ))}
        </motion.div>

        {/* ── CTA Button ── */}
        <motion.div
          style={styles.ctaWrap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <Link href="/portfolio" style={styles.ctaBtn}>
            View All Projects
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ marginLeft: 8 }}>
              <path d="M1 12L12 1M12 1H4.5M12 1V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── card ──────────────────────────────────────────────────────────────────── */
interface CaseCardProps {
  img: string
  alt: string
  slug: string
  title: string
  description: string
}

const CaseCard = ({ img, alt, slug, title, description }: CaseCardProps) => {
  return (
    <motion.div variants={cardVariants}>
      <Link
        href={`/portfolio/${slug}`}
        className="group cursor-pointer flex flex-col"
        style={{ textDecoration: 'none' }}
      >
        {/* Image */}
        <div className="relative w-full aspect-[4/3] bg-gray-100 mb-6 overflow-hidden rounded-[16px]">
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Arrow icon — appears on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #818cf8, #6366f1)',
                boxShadow: '0 4px 14px rgba(99,102,241,0.40)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Gradient fade on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[16px]"
            style={{
              background: 'linear-gradient(to top, rgba(99,102,241,0.15) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Body */}
        <div style={styles.body}>
          <h3
            style={styles.title}
            className="group-hover:text-[#6366f1] transition-colors duration-200"
          >
            {title}
          </h3>
          <p style={styles.description}>{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

/* ─── styles ────────────────────────────────────────────────────────────────── */
const styles: Record<string, React.CSSProperties> = {
  section: {
    fontFamily: 'inherit',
  },

  container: {
    /* handled by .site-container CSS class */
  },

  header: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '3rem',
  },

  sectionTitle: {
    fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)',
    fontWeight: 700,
    letterSpacing: '-0.03em',
    color: '#111111',
    margin: 0,
    lineHeight: 1.1,
  },

  divider: {
    height: '1px',
    background: '#e5e5e5',
    marginBottom: '3.5rem',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '4rem 2rem',
  },

  /* ── card ── */
  card: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },

  imageWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '4 / 3',
    overflow: 'hidden',
    borderRadius: '16px',
    background: '#f0f0f0',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
  },

  cornerArrow: {
    position: 'absolute',
    top: '14px',
    right: '14px',
    width: '26px',
    height: '26px',
    background: 'rgba(255,255,255,0.92)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ── body ── */
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },

  title: {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#111111',
    margin: 0,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },

  description: {
    fontSize: '0.88rem',
    color: '#777777',
    margin: 0,
    lineHeight: 1.65,
    fontWeight: 400,
  },

  tags: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.45rem',
    marginTop: '0.5rem',
  },

  tag: {
    display: 'inline-block',
    padding: '0.28rem 0.75rem',
    border: '1px solid #d0d0d0',
    borderRadius: '999px',
    fontSize: '0.7rem',
    fontWeight: 600,
    color: '#555555',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    background: '#ffffff',
  },

  /* ── cta button ── */
  ctaWrap: {
    marginTop: '3.5rem',
    display: 'flex',
    justifyContent: 'center',
  },

  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.85rem 2.2rem',
    background: '#111111',
    color: '#ffffff',
    fontSize: '0.88rem',
    fontWeight: 600,
    letterSpacing: '0.02em',
    borderRadius: '999px',
    textDecoration: 'none',
    transition: 'background 0.25s ease',
  },
}

export default BentoGridSection