'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="bg-[#1a237e] text-white py-2 md:py-3">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between flex-wrap gap-2 md:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            <div className="flex items-baseline">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">EXP</span>
              {/* Globe Icon replacing O */}
              <div className="relative w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 inline-block">
                <Image
                  src="/images/globe.png"
                  alt="Globe"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold">RT</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-bold text-[#00bcd4] leading-tight">TRADE MART</span>
            </div>
          </Link>

          {/* Right side elements */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6 flex-wrap justify-end">
            {/* Google Partner Badge - Hide on very small screens */}
            <div className="hidden sm:flex items-center bg-white rounded border-l-4 border-l-[#e53935] px-2 md:px-3 py-1 md:py-1.5">
              <span className="text-xs font-bold text-[#e53935] mr-1 md:mr-2">PREMIER</span>
              <span className="text-xs text-gray-600 font-medium hidden md:inline">Google Partner</span>
            </div>

            {/* Phone Number - Hide on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <svg 
                className="w-4 h-4 md:w-5 md:h-5 text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                />
                <circle cx="12" cy="15" r="1" fill="currentColor"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-300">PHONE NUMBER</span>
                <span className="text-xs md:text-sm font-semibold text-gray-200">(044)-4287-4778</span>
              </div>
            </div>

            {/* Mobile Hamburger Menu Button - Moved to Header */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-[#00bcd4] transition-colors p-2"
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
  );
}
