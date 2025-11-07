'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import TypingAnimation from './TypingAnimation';

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Clear any existing storage that might prevent popup from showing
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('videoPopupSeen');
      localStorage.removeItem('videoPopupSeen');
    }
    
    // Show popup every time on page load after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasSeenPopup(true);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!isOpen || hasSeenPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden">
      {/* Translucent Faded Overlay - No blur, just faded */}
      <div 
        className="absolute inset-0 bg-black/20 transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal Container - 60% width, 50% height */}
      <div className="relative z-10 w-[90%] sm:w-[75%] md:w-[65%] lg:w-[70%] h-[90%] sm:h-[80%] md:h-[70%] lg:h-[70%] max-w-6xl max-h-[600px] flex items-center justify-center">
        {/* Rectangular Container with White Border */}
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black p-3 md:p-6 rounded-lg shadow-2xl border-4 border-white w-full h-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-[#00bcd4] transition-colors z-20 bg-black/70 rounded-full p-2 hover:bg-black/90"
            aria-label="Close"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* Animated Glowing Triangle Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-full h-full max-w-md max-h-md"
              viewBox="0 0 400 350"
            >
              {/* Base Triangle (dim) - Always visible with subtle neon */}
              <path
                d="M200 50 L350 300 L50 300 Z"
                fill="none"
                stroke="#00bcd4"
                strokeWidth="4"
                strokeOpacity="0.3"
                className="triangle-base"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(0, 188, 212, 0.6)) drop-shadow(0 0 15px rgba(0, 188, 212, 0.4))'
                }}
              />
              
              {/* Neon Glow Layer 1 - Outer glow */}
              <path
                d="M200 50 L350 300 L50 300 Z"
                fill="none"
                stroke="#00bcd4"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="50 850"
                className="triangle-glow"
                style={{
                  strokeDashoffset: '900',
                  animation: 'glowTravel 4s linear infinite',
                  opacity: '0.6',
                  filter: 'blur(8px) drop-shadow(0 0 20px rgba(0, 188, 212, 1))'
                }}
              />
              
              {/* Neon Glow Layer 2 - Middle glow */}
              <path
                d="M200 50 L350 300 L50 300 Z"
                fill="none"
                stroke="#00bcd4"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="50 850"
                className="triangle-glow"
                style={{
                  strokeDashoffset: '900',
                  animation: 'glowTravel 4s linear infinite',
                  opacity: '0.8',
                  filter: 'blur(4px) drop-shadow(0 0 15px rgba(0, 188, 212, 1))'
                }}
              />
              
              {/* Neon Glow Layer 3 - Inner bright line */}
              <path
                d="M200 50 L350 300 L50 300 Z"
                fill="none"
                stroke="#00ffff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="50 850"
                className="triangle-glow"
                style={{
                  strokeDashoffset: '900',
                  animation: 'glowTravel 4s linear infinite',
                  filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 1)) drop-shadow(0 0 20px rgba(0, 188, 212, 1)) drop-shadow(0 0 30px rgba(0, 188, 212, 0.8))'
                }}
              />
              
              {/* Glowing Dot (Running Man) with neon effect */}
              <circle
                r="12"
                fill="#00ffff"
                className="running-dot"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 1)) drop-shadow(0 0 25px rgba(0, 188, 212, 1)) drop-shadow(0 0 40px rgba(0, 188, 212, 0.9)) blur(2px)'
                }}
              >
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M200 50 L350 300 L50 300 Z"
                />
              </circle>
              
              {/* Outer glow ring for dot */}
              <circle
                r="18"
                fill="none"
                stroke="#00bcd4"
                strokeWidth="2"
                strokeOpacity="0.5"
                className="running-dot"
                style={{
                  filter: 'blur(6px) drop-shadow(0 0 30px rgba(0, 188, 212, 0.8))',
                  animation: 'pulseGlow 1.5s ease-in-out infinite'
                }}
              >
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M200 50 L350 300 L50 300 Z"
                />
              </circle>
            </svg>
          </div>

          {/* Logo and Text Section */}
          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-3">
              <span 
                className="text-xl md:text-3xl lg:text-4xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00bcd4 0%, #00acc1 50%, #0097a7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                IMPEX
              </span>
              {/* Globe Icon */}
              <div className="relative w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12">
                <Image
                  src="/images/globe.png"
                  alt="IMPEX DOOR"
                  fill
                  className="object-contain"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(0, 188, 212, 0.8))' }}
                />
              </div>
              <span 
                className="text-xl md:text-3xl lg:text-4xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00bcd4 0%, #00acc1 50%, #0097a7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                DOOR
              </span>
            </div>
            <div 
              className="text-base md:text-xl lg:text-2xl font-bold mb-3 md:mb-4"
              style={{ 
                color: '#00bcd4',
              }}
            >
              LLP
            </div>
            
            {/* Typing Animation Text Box */}
            <div className="bg-black/60 border-2 border-[#00bcd4]/50 rounded-lg px-4 py-2 md:px-5 md:py-2.5 backdrop-blur-sm">
              <TypingAnimation 
                text="Get Instant Business Deals Here"
                speed={70}
                className="text-[#ffffff] text-xs md:text-sm font-medium tracking-wide"
              />
            </div>
          </div>

          {/* Loading/Progress Indicator */}
          <div className="absolute bottom-4 flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
