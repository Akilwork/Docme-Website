export default function Footer() {
  return (
    <footer className="relative bg-[#080808] pt-24 sm:pt-40 md:pt-64 lg:pt-80 xl:pt-[320px] pb-10 sm:pb-16 md:pb-24 overflow-hidden border-t border-white/5">
      {/* Large Faint Background Text */}
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none h-full">
        <span className="text-[22vw] font-black uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white/25 via-transparent to-transparent leading-none -mt-4">
          DOCME
        </span>
      </div>

      <div className="relative z-10 site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8">
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex items-center mb-6">
              <img
                src="/Docme Logo 1.png"
                alt="Docme Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Building intelligent digital ecosystems for education and enterprise.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4 text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Educational ERP</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Enterprise Software</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">AI Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Mobile Applications</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-base text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3 lg:pl-8">
            <h4 className="text-white text-lg font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-3 text-base text-gray-400">
          <p>&copy; 2026 DocMe. All rights reserved.</p>
          <span className="hidden sm:inline">.</span>
          <a href="#" className="hover:text-white transition-colors hidden sm:inline">Privacy Policy</a>
          <span className="hidden sm:inline">.</span>
          <a href="#" className="hover:text-white transition-colors hidden sm:inline">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  )
}
