'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    // Added light mode background (bg-gray-50) and smooth transition
    <section className="relative w-full min-h-dvh flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-industrial-800 pt-20 md:pt-0 transition-colors duration-300">
      
      {/* Background Video / Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-gray-50/80 via-gray-50/60 to-gray-50 dark:from-industrial-800/80 dark:via-industrial-800/60 dark:to-industrial-800 transition-colors duration-300"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent"></div>
      </div>

      {/* Blueprint/Grid Overlay - Converted to Tailwind classes to support Light/Dark shifting */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none bg-[linear-gradient(#9ca3af_1px,transparent_1px),linear-gradient(90deg,#9ca3af_1px,transparent_1px)] dark:bg-[linear-gradient(#4b5563_1px,transparent_1px),linear-gradient(90deg,#4b5563_1px,transparent_1px)] transition-colors duration-300" 
           style={{ backgroundSize: '40px 40px' }}>
      </div>

     {/* Main Content Container - Changed z-10 to z-20 so it sits ABOVE the bottom fade! */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Small animated badge - Pushed downwards with mt-16 md:mt-24 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 md:mt-24 flex items-center space-x-2 bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md mb-6 sm:mb-8 transition-colors duration-300"
        >
          <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400 animate-spin-slow shrink-0" />
          <span className="text-[10px] sm:text-sm font-bold tracking-widest text-gray-700 dark:text-gray-300 uppercase">Export-Quality Thermal Engineering</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* UPDATED: Added font-['var(--font-montserrat)'] right here! */}
          <h1 className="font-['var(--font-montserrat)'] text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight uppercase leading-tight drop-shadow-2xl transition-colors duration-300">
            Industrial Heating <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-600 border-b-2 sm:border-b-4 border-orange-500 inline-block pb-1 sm:pb-2 mt-2 sm:mt-0">
              Engineered for Maximum Performance
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed px-2 sm:px-0 transition-colors duration-300"
        >
          Reliable Manufacturers, Exporters & Suppliers of Industrial Heating Systems, Ovens, Furnaces, Thermocouples, and Thermal Components. Trusted by factories worldwide.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          {/* Primary CTA (Explore Products) */}
          {/* UPDATED: Added Montserrat font to button */}
          <Link href="/products" className="font-['var(--font-montserrat)'] relative group flex items-center justify-center w-full sm:w-auto px-6 py-4 sm:px-8 font-bold text-cyan-700 dark:text-white uppercase tracking-wider bg-transparent border border-cyan-500 overflow-hidden transition-all duration-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-500 rounded-full group-hover:w-full group-hover:h-56 opacity-10 pointer-events-none"></span>
            <span className="relative flex items-center gap-2 text-sm sm:text-base">
              Explore Products <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 border border-cyan-400 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 animate-pulse pointer-events-none"></div>
          </Link>

          {/* Secondary CTA (Request Quotation) */}
          {/* UPDATED: Added Montserrat font to button */}
          <Link href="/contact" className="font-['var(--font-montserrat)'] relative group flex items-center justify-center w-full sm:w-auto px-6 py-4 sm:px-8 font-bold text-white uppercase tracking-wider bg-linear-to-r from-orange-600 to-red-600 shadow-[0_0_20px_rgba(234,88,12,0.3)] dark:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] dark:hover:shadow-[0_0_30px_rgba(234,88,12,0.8)] hover:scale-[1.02]">
            <span className="relative text-sm sm:text-base">Request Quotation</span>
          </Link>
        </motion.div>

      </div>

      {/* Bottom gradient fade - Shifts to match the page background */}
      <div className="absolute bottom-0 w-full h-24 sm:h-32 bg-linear-to-t from-gray-50 dark:from-industrial-900 to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
    </section>
  );
}