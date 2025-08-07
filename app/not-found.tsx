import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-fade-in">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4 animate-scale-in">
            404
          </h1>
          
          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 animate-fade-in">
            Page Not Found
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto animate-fade-in">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-white font-semibold rounded-lg hover:from-[#e6c244] hover:to-[#d4af37] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Link>
          </div>
          
          {/* Search Suggestion */}
          <div className="mt-12 p-6 glass rounded-xl max-w-md mx-auto animate-fade-in">
            <div className="flex items-center mb-4">
              <Search className="w-5 h-5 text-[#d4af37] mr-2" />
              <h3 className="text-white font-semibold">Looking for something specific?</h3>
            </div>
            <div className="space-y-2 text-sm">
              <Link href="/features" className="block text-gray-300 hover:text-white transition-colors">
                → View our features
              </Link>
              <Link href="/how-it-works" className="block text-gray-300 hover:text-white transition-colors">
                → Learn how it works
              </Link>
              <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors">
                → Check our FAQ
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                → Contact support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 