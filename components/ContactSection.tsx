'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@docme.io',
    href: 'mailto:hello@docme.io',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Thiruvallam, Kerala, India',
    href: '#',
  },
]

const services = [
  'ERP Implementation',
  'AI Automation',
  'Enterprise Software',
  'Digital Transformation',
  'Custom Development',
  'Other',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="w-full bg-[#F5F5F7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* ── Left Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-12">
            {/* Intro text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-500 mb-4">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-6">
                Let's build something<br />
                <span className="text-indigo-500">extraordinary</span> together.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Whether you have a project in mind or just want to explore possibilities,
                our team is ready to help you create a solution that drives real impact.
              </p>
            </motion.div>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              {contactDetails.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-50 transition-colors duration-200">
                    <item.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-black group-hover:text-indigo-500 transition-colors duration-200">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>


          </div>

          {/* ── Right: Form ── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                    <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">
                      Thank you for reaching out. We'll confirm availability and get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' }) }}
                    className="mt-2 text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">Send us a message</h3>
                    <p className="text-sm text-gray-400">Fill in your details and we'll be in touch shortly.</p>
                  </div>

                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="firstName" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-transparent focus:border-indigo-400 focus:bg-white focus:outline-none text-sm text-black placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lastName" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-transparent focus:border-indigo-400 focus:bg-white focus:outline-none text-sm text-black placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-transparent focus:border-indigo-400 focus:bg-white focus:outline-none text-sm text-black placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-transparent focus:border-indigo-400 focus:bg-white focus:outline-none text-sm text-black placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Company + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-transparent focus:border-indigo-400 focus:bg-white focus:outline-none text-sm text-black placeholder-gray-400 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-transparent focus:border-indigo-400 focus:bg-white focus:outline-none text-sm text-black transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border border-transparent focus:border-indigo-400 focus:bg-white focus:outline-none text-sm text-black placeholder-gray-400 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-black text-white font-semibold text-sm rounded-xl hover:bg-indigo-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
