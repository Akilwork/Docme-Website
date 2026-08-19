'use client'

import React from 'react'
import { motion } from 'framer-motion'

const detailedServices = [
  {
    title: 'Academic Management',
    description: 'Digitize the complete academic lifecycle—from admissions and attendance to examinations, assessments, and performance tracking.',
    features: [
      'Student Information Management',
      'Attendance Tracking',
      'Examination & Assessment Management',
      'Report Cards & Analytics',
      'Learning Management Integration',
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Administration & Operations',
    description: 'Streamline daily operations with automated workflows, centralized records, and efficient process management.',
    features: [
      'Workflow Automation',
      'Document Management',
      'Resource Allocation',
      'Task & Activity Tracking',
      'Operational Reporting',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Human Resource Management',
    description: 'Manage your workforce efficiently with tools for employee records, attendance, payroll, recruitment, and performance evaluation.',
    features: [
      'Employee Database',
      'Attendance & Leave Management',
      'Payroll Processing',
      'Recruitment Workflow',
      'Performance Reviews',
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Finance & Accounting',
    description: 'Gain complete visibility and control over financial operations through intelligent accounting and payment solutions.',
    features: [
      'Fee & Payment Management',
      'Invoicing & Billing',
      'Expense Tracking',
      'Budget Planning',
      'Financial Reporting',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Transport & Fleet Management',
    description: 'Monitor vehicles, optimize routes, and improve transportation efficiency through real-time tracking and management.',
    features: [
      'GPS Vehicle Tracking',
      'Route Optimization',
      'Driver Management',
      'Transport Analytics',
      'Safety Monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Communication & Engagement',
    description: 'Strengthen collaboration with seamless communication tools that connect teams, customers, students, parents, and stakeholders.',
    features: [
      'Instant Notifications',
      'Email & SMS Integration',
      'Announcements & Alerts',
      'Group Communications',
      'Engagement Tracking',
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Analytics & Business Intelligence',
    description: 'Transform operational data into actionable insights through real-time dashboards and advanced reporting.',
    features: [
      'Interactive Dashboards',
      'Custom Reports',
      'KPI Monitoring',
      'Predictive Analytics',
      'Data-Driven Decision Making',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cloud & Digital Transformation',
    description: 'Modernize your organization with secure, scalable, and future-ready digital infrastructure.',
    features: [
      'Cloud Migration',
      'System Integration',
      'Data Security',
      'Scalability & Reliability',
      'Technology Consulting',
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
]

const ServiceDetailsContent = () => {
  return (
    <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 w-full">
      <div className="site-container">
        {detailedServices.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 lg:gap-24 items-center mb-16 md:mb-28 last:mb-0`}>
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full md:w-1/2"
              >
                <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-100">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 font-serif mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-800 font-serif text-lg md:text-xl">
                      <span className="mr-4 text-black leading-tight">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ServiceDetailsContent
