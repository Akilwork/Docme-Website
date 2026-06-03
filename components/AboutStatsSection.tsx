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
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay },
})

export default function AboutStatsSection() {
  const ref   = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section ref={ref} style={styles.section}>

      {/* ════ LEFT ════ */}
      <div style={styles.left}>
        {/* eyebrow */}
        <motion.span
          style={styles.eyebrow}
          {...fade(0.05)}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        >
          About Us
        </motion.span>

        {/* heading */}
        <motion.h2
          style={styles.heading}
          {...fade(0.15)}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        >
          Astronomy<br />
          Communities For<br />
          Everyone
        </motion.h2>

        {/* body */}
        <motion.p
          style={styles.body}
          {...fade(0.28)}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        >
          Nulla eleifend ex vel elit blandit facilisis. In lobortis ipsum sed velit
          malesuada, non rutrum dui varius. Proin justo leo, vulputate non orci in,
          finibus varius lectus.
        </motion.p>
      </div>

      {/* ════ RIGHT — 2×2 stat grid ════ */}
      <div style={styles.grid}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            style={{
              ...styles.cell,
              /* hairline borders — only where needed */
              /* right border only when there's an item to the right */
              borderRight:  (i % 2 === 0 && i + 1 < stats.length) ? '1px solid rgba(255,255,255,0.08)' : 'none',
              /* bottom border only for items in the first row */
              borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}
            {...fade(0.18 + i * 0.1)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          >
            <span style={styles.statValue}>{stat.value}</span>
            <span style={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── styles ─────────────────────────────────────────────────────────────── */
const styles: Record<string, React.CSSProperties> = {
  section: {
    display:         'flex',
    alignItems:      'center',
    gap:             '6rem',
    padding:         '7rem 7%',
    background:      '#080808',
    color:           '#fff',
    fontFamily:      'inherit',
  },

  /* ── left col ── */
  left: {
    flex:            '0 0 42%',
    display:         'flex',
    flexDirection:   'column',
    gap:             '1.6rem',
    maxWidth:        '480px',
  },

  eyebrow: {
    fontSize:        '0.82rem',
    fontWeight:      400,
    letterSpacing:   '0.04em',
    color:           '#888',
  },

  heading: {
    fontSize:        'clamp(2.4rem, 3.8vw, 3.6rem)',
    fontWeight:      700,
    lineHeight:      1.08,
    letterSpacing:   '-0.025em',
    color:           '#ffffff',
    margin:          0,
  },

  body: {
    fontSize:        '0.9rem',
    lineHeight:      1.8,
    color:           '#666',
    maxWidth:        '40ch',
    margin:          0,
  },

  /* ── right 2×2 grid ── */
  grid: {
    flex:            1,
    display:         'grid',
    gridTemplateColumns: '1fr 1fr',
    /* no explicit gap — borders + padding create the visual separation */
  },

  cell: {
    display:         'flex',
    flexDirection:   'column',
    gap:             '0.5rem',
    padding:         '2.5rem 2.8rem 2.5rem 2.8rem',
  },

  statValue: {
    fontSize:        'clamp(3rem, 5.5vw, 5rem)',
    fontWeight:      700,
    letterSpacing:   '-0.04em',
    lineHeight:      1,
    color:           '#ffffff',
  },

  statLabel: {
    fontSize:        '0.84rem',
    fontWeight:      400,
    color:           '#666',
    letterSpacing:   '0.01em',
  },
}
