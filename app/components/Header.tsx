'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { contactConfig } from "../../config/contact";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/plans', label: 'Our Plans' },
    { href: '/channel', label: 'Our Channel' },
    { href: '/contact', label: 'Contact' }
  ];

  const solutionsLinks = [
    { href: '/services', label: 'Fruits and Vegetables' },
    { href: '/services', label: 'Readymade Garments' },
    { href: '/services', label: 'Gems and Jewellery' },
    { href: '/services', label: 'Chemical Products' },
    { href: '/services', label: 'Pharmaceutical Products' },
    { href: '/services', label: 'Organic Products' },
    { href: '/services', label: 'Engineering Products' },
    { href: '/services', label: 'Plastic Products' },
    { href: '/services', label: 'Spices Products' },
    { href: '/services', label: 'Textile Products' }
  ];

  // Listen for menu state changes from Navigation (when closed from Navigation)
  useEffect(() => {
    const handleMenuStateChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsMenuOpen(customEvent.detail);
    };

    window.addEventListener('menuStateChange', handleMenuStateChange);
    return () => window.removeEventListener('menuStateChange', handleMenuStateChange);
  }, []);

  // Dispatch menu state to Navigation component when changed from Header
  useEffect(() => {
    const event = new CustomEvent('menuStateChange', { detail: isMenuOpen });
    window.dispatchEvent(event);
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Information Bar */}
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${contactConfig.phone.formatted}`} className="hover:underline">
                  {contactConfig.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@happilytrade.com</span>
              </div>
            </div>
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-md font-medium transition-colors text-xs sm:text-sm whitespace-nowrap">
              Get a Free Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between flex-wrap gap-2 md:gap-4 py-4 md:py-6">
            {/* Logo - Extreme Left */}
            <Link href="/" className="flex items-center gap-1 md:gap-2 flex-shrink-0">
              <div className="flex items-baseline">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">EXP</span>
                {/* Globe Icon replacing O */}
                <div className="relative w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 inline-block">
                  <Image
                    src="/images/globe.png"
                    alt="Globe"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">RT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-bold text-[#00bcd4] leading-tight">TRADE MART</span>
              </div>
            </Link>

            {/* Center Navigation Tabs - Desktop Only */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`font-semibold transition-colors text-sm md:text-base whitespace-nowrap ${
                    isActive(link.href) 
                      ? 'text-blue-600' 
                      : 'text-black hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className={`font-semibold transition-colors text-sm md:text-base whitespace-nowrap flex items-center gap-1 ${
                    solutionsOpen || solutionsLinks.some(link => isActive(link.href))
                      ? 'text-blue-600'
                      : 'text-black hover:text-blue-600'
                  }`}
                >
                  Solutions
                  <svg 
                    className={`w-3 h-3 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {solutionsOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[200px] z-50">
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right side elements */}
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6 flex-wrap justify-end">
              {/* Sign Up Button - Extreme Right - Desktop Only */}
              <Link 
                href="/contact"
                className="hidden md:block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base whitespace-nowrap"
              >
                Sign Up
              </Link>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-900 hover:text-blue-600 transition-colors p-2"
                aria-label="Toggle menu"
              >
                <svg 
                  className="w-6 h-6 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
