'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // UPDATED: Added "Product Gallery" to the navigation array
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Product Gallery', path: '/gallery' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 dark:bg-industrial-900/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPDATED: Removed fixed heights, changed to py-3 md:py-4 h-auto for a sleek, hugging fit */}
        <div className="flex items-center justify-between py-3 md:py-4 h-auto">
          
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              
              {/* UPDATED: Removed 'fill', changed w-12 h-12 to auto-width sizing to match Navbar and fix warnings */}
              <div className="relative transition-transform duration-300 group-hover:scale-105 flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Techone Heaters Logo" 
                  width={80}
                  height={80}
                  className="w-auto h-12 object-contain"
                />
              </div>

              {/* Company Text - Wrapped in the Syne font variable! */}
              <div className="hidden sm:flex flex-col justify-center font-['var(--font-syne)']">
                <span className="text-gray-900 dark:text-white font-extrabold text-lg sm:text-xl leading-none transition-colors">
                  TECHONE
                </span>
                <span className="text-orange-600 dark:text-orange-500 font-bold tracking-widest text-[10px] sm:text-xs mt-1 leading-none transition-colors">
                  HEATERS
                </span>
              </div>

            </Link>
          </div>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold tracking-wide uppercase text-xs xl:text-sm transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 xl:gap-6 border-l border-gray-200 dark:border-white/10 pl-4 xl:pl-6 transition-colors">
              <ThemeToggle />
              <div className="hidden xl:block text-right">
                <div className="text-[10px] text-gray-500 dark:text-gray-400 tracking-wider">DIRECT SALES</div>
                <a href="tel:+919177776501" className="block text-gray-900 dark:text-white font-bold text-sm transition-colors hover:text-orange-500 dark:hover:text-orange-500">
                  9177776501
                </a>
              </div>
              <Link 
                href="/contact" 
                className="flex items-center gap-2 border border-orange-500 text-orange-600 dark:text-orange-500 px-4 py-2 hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all font-bold tracking-wider text-xs uppercase group whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 group-hover:animate-pulse" />
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7 text-orange-500" /> : <Menu className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-50 dark:bg-industrial-900 border-b border-gray-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-4 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-industrial-800 border-b border-gray-200 dark:border-white/5 uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-6 px-4 py-4 bg-linear-to-r from-orange-600 to-red-600 text-white font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:scale-[1.02] transition-transform"
              >
                <PhoneCall className="w-4 h-4" />
                Get Quote
              </Link>
              
              <div className="text-center mt-6 text-gray-500 dark:text-gray-400 text-xs transition-colors">
                Direct Sales: <a href="tel:+919177776501" className="text-gray-900 dark:text-white font-bold ml-1 hover:text-orange-500 dark:hover:text-orange-500 transition-colors">9177776501</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}