'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '2,950+', label: 'Active Member' },
  { value: '25+',    label: 'Years of Experience' },
  { value: '2',      label: 'Branch Location' },
]

/* ─── animation helpers ──────────────────────────────────────────────────── */
const fade = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

export default function AboutStatsSection() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section ref={ref} style={styles.section}>

      {/* ════ VIDEO BACKGROUND — blurred, centered at top ════ */}
      <div style={styles.videoBg}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={styles.video}
        >
          <source src="/rosiau__pindown.io_1780476537.mp4" type="video/mp4" />
        </video>
        {/* dark overlay to keep text readable */}
        <div style={styles.overlay} />
      </div>

      {/* ════ CONTENT LAYER — sits in front of video ════ */}
      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={styles.contentRow}>

        {/* ── LEFT — editorial headline block ── */}
        <div style={styles.left}>
          <motion.h2
            style={styles.heading}
            {...fade(0.05)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            Astronomy Communities
            <br />
            For Everyone
          </motion.h2>

          <motion.p
            style={styles.body}
            {...fade(0.22)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          >
            Nulla eleifend ex vel elit blandit facilisis. In lobortis ipsum sed
            velit malesuada, non rutrum dui varius. Proin justo leo, vulputate
            non orci in, finibus varius lectus.
          </motion.p>
        </div>

        {/* ── RIGHT — vertically stacked oversized stats ── */}
        <div style={styles.right}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              style={styles.statRow}
              {...fade(0.12 + i * 0.14)}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            >
              <span style={styles.statValue}>{stat.value}</span>
              <span style={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        </div>
      </div>
    </section>
  )
}

/* ─── styles ─────────────────────────────────────────────────────────────── */
const styles: Record<string, React.CSSProperties> = {
  section: {
    position:       'relative',
    display:        'flex',
    alignItems:     'center',
    paddingTop:     '4rem',
    paddingBottom:  '4rem',
    background:     '#080808',
    color:          '#fff',
    fontFamily:     'inherit',
    minHeight:      '60vh',
    overflow:       'hidden',
  },

  /* ── video bg ── */
  videoBg: {
    position:       'absolute',
    top:            0,
    left:           '50%',
    transform:      'translateX(-50%)',
    width:          '60%',
    height:         '100%',
    pointerEvents:  'none',
  },

  video: {
    width:          '100%',
    height:         '100%',
    objectFit:      'cover',
    objectPosition: 'center top',
    filter:         'blur(28px) brightness(0.45)',
    transform:      'scale(1.08)', /* hide blur edges */
  },

  overlay: {
    position:       'absolute',
    inset:          0,
    background:     'linear-gradient(to right, #080808 12%, transparent 40%, transparent 60%, #080808 88%)',
  },

  /* ── content row sits above the video ── */
  contentRow: {
    position:       'relative',
    zIndex:         1,
    display:        'flex',
    flexWrap:       'wrap' as const,
    alignItems:     'flex-start',
    gap:            '3rem',
    width:          '100%',
  },

  /* ── left col ── */
  left: {
    flex:           '1 1 280px',
    minWidth:       0,
    display:        'flex',
    flexDirection:  'column',
    gap:            '2rem',
  },

  heading: {
    fontSize:       'clamp(1.5rem, 4vw, 3.6rem)',
    fontWeight:     700,
    lineHeight:     1.15,
    letterSpacing:  '-0.03em',
    color:          '#ffffff',
    margin:         0,
  },

  body: {
    fontSize:       '0.92rem',
    lineHeight:     1.85,
    color:          'rgba(255,255,255,0.42)',
    maxWidth:       '42ch',
    margin:         0,
    fontWeight:     400,
  },

  /* ── right col — stacked stat rows ── */
  right: {
    flex:           '1 1 240px',
    minWidth:       0,
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'flex-end',
  },

  statRow: {
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'flex-end',
    gap:            '0.5rem',
    padding:        '2.6rem 0',
    width:          '100%',
    textAlign:      'right',
  },

  statValue: {
    fontSize:       'clamp(2rem, 6vw, 6.5rem)',
    fontWeight:     300,
    letterSpacing:  '-0.04em',
    lineHeight:     1,
    color:          '#ffffff',
  },

  statLabel: {
    fontSize:       '0.95rem',
    fontWeight:     400,
    color:          'rgba(255,255,255,0.45)',
    letterSpacing:  '0.02em',
  },
}
