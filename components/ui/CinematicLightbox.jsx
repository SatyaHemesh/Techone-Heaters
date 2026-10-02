'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';
import Image from 'next/image';

export default function CinematicLightbox({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. The Thumbnail (What sits on the page) */}
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-sm border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none"
        onClick={() => setIsOpen(true)}
      >
        <motion.img
          layoutId={`lightbox-${src}`}
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
           <div className="bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-3 font-bold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(234,88,12,0.4)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <ZoomIn size={18} />
             <span>Click to Expand</span>
           </div>
        </div>
      </div>

      {/* 2. The Full-Screen Cinematic Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setIsOpen(false)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 text-gray-800 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 bg-gray-200/50 dark:bg-white/10 rounded-full backdrop-blur-md transition-colors z-110"
              onClick={() => setIsOpen(false)}
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* The Expanded Image */}
            <motion.img
              layoutId={`lightbox-${src}`}
              src={src}
              alt={alt}
              className="w-full max-w-6xl max-h-[90vh] object-contain rounded-md shadow-2xl ring-1 ring-gray-200 dark:ring-white/10 cursor-zoom-out"
              onClick={(e) => {
                e.stopPropagation(); // Prevents clicking the image from instantly closing it if you wanted to add inner buttons later
                setIsOpen(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}