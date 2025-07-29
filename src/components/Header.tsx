import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <Image 
                src="/NOUVEAU LOGO RECOVER (1).png" 
                alt="RECOVER" 
                width={180}
                height={48}
                className="w-[180px] h-[48px] md:w-[280px] md:h-[75px] lg:w-[350px] lg:h-[93px] object-contain -ml-20"
                style={{ transform: "scale(1.8)" }}
                priority
                quality={100}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <Link href="/" className="text-blue-900 hover:text-blue-700 font-medium px-2 py-2 text-sm transition-colors">
              ACCUEIL
            </Link>
            <Link href="/#about" className="text-blue-900 hover:text-blue-700 font-medium px-2 py-2 text-sm transition-colors">
              RECOVER
            </Link>
            <Link href="/nos-services" className="text-blue-900 hover:text-blue-700 font-medium px-2 py-2 text-sm transition-colors">
              NOS SERVICES
            </Link>
            <Link href="/#references" className="text-blue-900 hover:text-blue-700 font-medium px-2 py-2 text-sm transition-colors">
              RÉFÉRENCES
            </Link>
            <Link href="/#contact" className="text-blue-900 hover:text-blue-700 font-medium px-2 py-2 text-sm transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Recherche"
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-40 lg:w-48"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-900 hover:text-blue-700 p-2 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-blue-900 hover:text-blue-700 font-medium px-3 py-2 text-sm border-b border-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ACCUEIL
              </Link>
              <Link 
                href="/#about" 
                className="text-blue-900 hover:text-blue-700 font-medium px-3 py-2 text-sm border-b border-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                RECOVER
              </Link>
              <Link 
                href="/nos-services" 
                className="text-blue-900 hover:text-blue-700 font-medium px-3 py-2 text-sm border-b border-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                NOS SERVICES
              </Link>
              <Link 
                href="/#references" 
                className="text-blue-900 hover:text-blue-700 font-medium px-3 py-2 text-sm border-b border-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                RÉFÉRENCES
              </Link>
              <Link 
                href="/#contact" 
                className="text-blue-900 hover:text-blue-700 font-medium px-3 py-2 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
            
            {/* Mobile Search */}
            <div className="mt-4 px-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Recherche"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
