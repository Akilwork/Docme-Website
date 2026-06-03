'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What services does Docme offer?',
    answer:
      'Docme specializes in building intelligent digital ecosystems — including ERP systems, AI-powered automation platforms, enterprise software, mobile applications, and custom digital transformation solutions tailored to educational and enterprise institutions.',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. A standard ERP implementation typically takes 3–6 months, while custom software projects may range from 4 weeks to 6+ months. We provide a detailed timeline after an initial discovery session.',
  },
  {
    id: 3,
    question: 'Do you offer post-launch support and maintenance?',
    answer:
      'Yes. All our projects come with a dedicated support period post-launch. We offer flexible maintenance plans — from bug fixes and performance monitoring to feature enhancements and 24/7 technical support contracts.',
  },
  {
    id: 4,
    question: 'Can Docme integrate with our existing systems?',
    answer:
      'Absolutely. Our solutions are designed with interoperability in mind. We have experience integrating with ERPs, CRMs, payment gateways, government databases, and third-party APIs across a wide range of industries.',
  },
  {
    id: 5,
    question: 'How do I get started with Docme?',
    answer:
      'Simply fill out the contact form above or reach us directly via email or phone. Our team will schedule a free discovery call to understand your requirements and propose a tailored solution within 24 hours.',
  },
  {
    id: 6,
    question: 'Is my data secure with Docme?',
    answer:
      'Security is at the core of everything we build. We follow industry best practices including end-to-end encryption, role-based access control, regular security audits, and compliance with data protection regulations.',
  },
]

export default function ContactFAQSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(faqs[0].id)

  return (
    <section className="w-full bg-black py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Frequently<br />Asked Questions
          </h2>
        </motion.div>

        {/* ── FAQ list ── */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = hoveredId === faq.id
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
                onMouseEnter={() => setHoveredId(faq.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`w-full rounded-2xl border cursor-pointer transition-all duration-300 ${
                  isOpen
                    ? 'bg-white/10 border-white/20 shadow-sm'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Question row */}
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <p className="text-base font-semibold text-white leading-snug">
                    {faq.question}
                  </p>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isOpen ? 'bg-white/20' : 'bg-white/10'
                    }`}
                  >
                    {isOpen ? (
                      <X className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>

                {/* Answer — expands on hover */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
