export default function Footer() {
  return (
    <footer className="py-16 bg-navy-900 border-t border-white/10">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold font-jakarta text-gradient">DOCME</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building intelligent digital ecosystems for education and enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Educational ERP</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Enterprise Software</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">AI Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Mobile Applications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 DocMe. All rights reserved. Building the future of digital education.</p>
        </div>
      </div>
    </footer>
  )
}
