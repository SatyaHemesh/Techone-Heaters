'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    // Added pt-32 to push it down below your fixed Navbar
    <main className="relative min-h-[80vh] flex items-center justify-center bg-gray-50 dark:bg-industrial-900 pt-32 pb-16 overflow-hidden transition-colors duration-300">
      
      {/* Blueprint Grid Background (Matching your Hero Section) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none bg-[linear-gradient(#9ca3af_1px,transparent_1px),linear-gradient(90deg,#9ca3af_1px,transparent_1px)] dark:bg-[linear-gradient(#4b5563_1px,transparent_1px),linear-gradient(90deg,#4b5563_1px,transparent_1px)] transition-colors duration-300" 
        style={{ backgroundSize: '40px 40px' }}
      ></div>

      {/* Subtle glowing center to mimic thermal heat */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-600/5 via-transparent to-transparent z-0"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        
        {/* Animated Warning Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center border border-red-200 dark:border-red-900/50">
            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Massive 404 Text */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-['var(--font-montserrat)'] text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-gray-900 to-gray-400 dark:from-white dark:to-gray-600 tracking-tighter mb-4"
        >
          404
        </motion.h1>

        {/* Industrial Subheading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-['var(--font-montserrat)'] text-xl sm:text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4 transition-colors"
        >
          System Error / Page Not Found
        </motion.h2>

        {/* Professional Copywriting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors"
        >
          The requested engineering schematic or product specification could not be located. The link may be broken, or the file has been re-routed in our system.
        </motion.p>

        {/* Recovery Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/" 
            className="font-['var(--font-montserrat)'] w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-orange-600 to-red-600 text-white font-bold uppercase tracking-wider text-sm transition-transform hover:scale-[1.02] shadow-[0_0_15px_rgba(234,88,12,0.3)] whitespace-nowrap"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
          
          <Link 
            href="/products" 
            className="font-['var(--font-montserrat)'] w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold uppercase tracking-wider text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition-colors whitespace-nowrap"
          >
            View Equipment Catalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}