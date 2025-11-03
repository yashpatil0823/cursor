'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT-US' },
    { href: '/services', label: 'WHAT WE DO' },
    { href: '/services', label: 'OUR SERVICES' },
    { href: '/partner', label: 'PARTNER WITH US' },
    { href: '/contact', label: 'CONTACT' }
  ];

  // Listen for menu state changes from Header
  useEffect(() => {
    const handleMenuStateChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsOpen(customEvent.detail);
    };

    window.addEventListener('menuStateChange', handleMenuStateChange);
    return () => window.removeEventListener('menuStateChange', handleMenuStateChange);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    // Notify Header to update its state
    const event = new CustomEvent('menuStateChange', { detail: false });
    window.dispatchEvent(event);
  }, [pathname]);

  // Dispatch menu state changes to Header
  useEffect(() => {
    const event = new CustomEvent('menuStateChange', { detail: isOpen });
    window.dispatchEvent(event);
  }, [isOpen]);

  return (
    <>
      <nav className="bg-[#1a237e] border-t border-[#283593]">
        <div className="container mx-auto px-3 md:px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 py-3 md:py-4 flex-wrap justify-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`font-semibold uppercase transition-colors text-xs md:text-sm ${
                  isActive(link.href) 
                    ? 'text-[#00bcd4]' 
                    : 'text-white hover:text-[#00bcd4]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Side Navigation Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          setIsOpen(false);
          const event = new CustomEvent('menuStateChange', { detail: false });
          window.dispatchEvent(event);
        }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Side Menu */}
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-[#1a237e] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-[#283593]">
            <span className="text-white font-bold text-lg">Menu</span>
            <button
              onClick={() => {
                setIsOpen(false);
                const event = new CustomEvent('menuStateChange', { detail: false });
                window.dispatchEvent(event);
              }}
              className="text-white hover:text-[#00bcd4] transition-colors p-2"
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  const event = new CustomEvent('menuStateChange', { detail: false });
                  window.dispatchEvent(event);
                }}
                className={`block font-semibold uppercase transition-all duration-200 text-sm py-3 px-4 rounded-lg ${
                  isActive(link.href)
                    ? 'text-[#00bcd4] bg-[#283593] border-l-4 border-[#00bcd4]'
                    : 'text-white hover:text-[#00bcd4] hover:bg-[#283593]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
