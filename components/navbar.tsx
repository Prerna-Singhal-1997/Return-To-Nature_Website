"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" onClick={scrollToTop} className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary-600">Return to Nature</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" onClick={scrollToTop} className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link
              href="/five-elements"
              onClick={scrollToTop}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Five Elements
            </Link>
            <Link
              href="/modern-living"
              onClick={scrollToTop}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Modern Living
            </Link>
            <Link
              href="/finding-balance"
              onClick={scrollToTop}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Finding Balance
            </Link>
            <Link
              href="/epilogue"
              onClick={scrollToTop}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Epilogue
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => {
                setIsMenuOpen(false)
                scrollToTop()
              }}
            >
              Home
            </Link>
            <Link
              href="/five-elements"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => {
                setIsMenuOpen(false)
                scrollToTop()
              }}
            >
              Five Elements
            </Link>
            <Link
              href="/modern-living"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => {
                setIsMenuOpen(false)
                scrollToTop()
              }}
            >
              Modern Living
            </Link>
            <Link
              href="/finding-balance"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => {
                setIsMenuOpen(false)
                scrollToTop()
              }}
            >
              Finding Balance
            </Link>
            <Link
              href="/epilogue"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              onClick={() => {
                setIsMenuOpen(false)
                scrollToTop()
              }}
            >
              Epilogue
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

