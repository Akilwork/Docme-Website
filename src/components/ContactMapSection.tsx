'use client'

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31576.39!2d76.8775!3d8.4575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bd3aa55e8651%3A0x3c2dd7c14d9cac71!2sThiruvallam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000'

export default function ContactMapSection() {
  return (
    <section className="w-full border-t border-gray-100">
      <div className="w-full" style={{ height: '650px' }}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Docme Office Location"
          className="w-full h-full block"
        />
      </div>
    </section>
  )
}
