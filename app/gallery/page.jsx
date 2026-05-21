'use client';

import { useState } from 'react';
import Image from 'next/image';
// Brought in ChevronLeft and ChevronRight for image navigation!
import { ArrowRight, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShowcaseGallery() {
  const [activeItem, setActiveItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  // NEW: State to track which specific image of the product we are viewing
  const [imageIndex, setImageIndex] = useState(0);

  // UPDATED: Replaced 'src' with an 'images' array holding multiple photos
  const products = [
    { 
      name: 'Ceramic Band Heaters', 
      spec: 'Up to 600°C Max Temp',
      category: 'Injection Molding',
      images: ['/images/logo.png', '/images/logo.png', '/images/logo.png'] 
    },
    { 
      name: 'High-Density Cartridge', 
      spec: 'Precision Spot Heating',
      category: 'Die Casting',
      images: ['/images/logo.png', '/images/logo.png'] 
    },
    { 
      name: 'Muffle Furnaces', 
      spec: 'Laboratory Grade Built',
      category: 'Thermal Processing',
      images: ['/images/logo.png', '/images/logo.png', '/images/logo.png', '/images/logo.png'] 
    },
    { 
      name: 'K-Type Thermocouples', 
      spec: 'Accurate Heat Sensing',
      category: 'Measurement',
      images: ['/images/logo.png'] 
    }
  ];

  // Helper functions to change products or images cleanly
  const handleProductChange = (idx) => {
    setActiveItem(idx);
    setImageIndex(0); // Always reset to the first image when changing products
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % products[activeItem].images.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setImageIndex((prev) => (prev - 1 + products[activeItem].images.length) % products[activeItem].images.length);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative">
      
      {/* Left Side: Interactive Catalog List */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="mb-12 text-center lg:text-left">
          <h1 className="font-['var(--font-montserrat)'] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 text-gray-900 dark:text-white transition-colors">
            Thermal <span className="text-orange-600">Catalog</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Engineered for absolute precision and maximum durability.</p>
        </div>
        
        <div className="flex flex-col border-t border-gray-300 dark:border-white/10">
          {products.map((product, idx) => (
            <div 
              key={idx}
              onClick={() => handleProductChange(idx)} 
              className={`group relative py-8 border-b border-gray-300 dark:border-white/10 cursor-pointer flex justify-between items-center transition-all duration-300 overflow-hidden ${
                activeItem === idx 
                  ? 'bg-white dark:bg-industrial-800 shadow-md dark:shadow-none' 
                  : 'hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              <div 
                className={`absolute left-0 top-0 bottom-0 w-2 bg-orange-600 transition-transform duration-300 origin-left ${
                  activeItem === idx ? 'scale-x-100' : 'scale-x-0'
                }`} 
              />
              <div className={`transition-all duration-300 z-10 ${
                activeItem === idx ? 'pl-6 lg:pl-12' : 'pl-4 sm:pl-6'
              }`}>
                <p className="text-xs text-orange-600 mb-2 uppercase tracking-widest font-bold">
                  {product.category}
                </p>
                <h3 className={`font-['var(--font-montserrat)'] text-xl sm:text-2xl font-black uppercase tracking-wide transition-colors ${
                  activeItem === idx ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300'
                }`}>
                  {product.name}
                </h3>
                <p className={`text-sm mt-2 uppercase tracking-widest font-semibold transition-colors ${
                  activeItem === idx ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'
                }`}>
                  {product.spec}
                </p>
              </div>
              <div className={`transition-all duration-300 ${activeItem === idx ? 'pr-6 lg:pr-8' : 'pr-4 sm:pr-6'}`}>
                <ArrowRight className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ${
                  activeItem === idx 
                    ? 'text-orange-600 translate-x-0 opacity-100' 
                    : 'text-gray-300 dark:text-gray-600 -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Dynamic Massive Image Display */}
      <div className="w-full lg:w-1/2 aspect-square sm:aspect-4/5 bg-gray-200 dark:bg-industrial-900/50 rounded-sm border border-gray-300 dark:border-white/10 relative overflow-hidden transition-colors shadow-2xl group">
        <span className="text-[12rem] font-['var(--font-montserrat)'] font-black text-black/5 dark:text-white/5 absolute -top-10 right-4 select-none z-0 pointer-events-none transition-all duration-500">
          0{activeItem + 1}
        </span>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeItem}-${imageIndex}`} // Key updates when product OR image changes
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8"
          >
            <div className="relative w-full h-2/3 mb-4">
              <Image 
                src={products[activeItem].images[imageIndex]}
                alt={`${products[activeItem].name} - Image ${imageIndex + 1}`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* NEW: Mini Gallery Navigation Dots */}
            {products[activeItem].images.length > 1 && (
              <div className="flex gap-2 mb-6 z-20">
                {products[activeItem].images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setImageIndex(idx); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      imageIndex === idx ? 'bg-orange-600 w-6' : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
            
            <button 
              onClick={() => setIsOpen(true)}
              className="relative z-20 flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white transition-all duration-300 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
            >
              View Full Image
              <ZoomIn className="w-5 h-5" />
            </button>
          </motion.div>
        </AnimatePresence>

        {/* NEW: Left/Right Quick Arrows for the Preview Window */}
        {products[activeItem].images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 dark:bg-black/50 hover:bg-orange-600 text-gray-900 dark:text-white hover:text-white rounded-full transition-colors opacity-0 group-hover:opacity-100">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 dark:bg-black/50 hover:bg-orange-600 text-gray-900 dark:text-white hover:text-white rounded-full transition-colors opacity-0 group-hover:opacity-100">
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="absolute inset-0 z-20 pointer-events-none opacity-20 dark:opacity-40 bg-[radial-gradient(#9ca3af_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Close full screen image"
              className="absolute top-6 right-6 text-gray-400 hover:text-orange-500 transition-colors z-50"
            >
              <X className="w-10 h-10" />
            </button>

            {/* NEW: Lightbox Navigation Arrows */}
            {products[activeItem].images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            <motion.div 
              key={imageIndex} // Forces animation when clicking Next/Prev inside Lightbox
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="relative w-full max-w-6xl h-[80vh]"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image 
                src={products[activeItem].images[imageIndex]}
                alt={`${products[activeItem].name} - Image ${imageIndex + 1}`}
                fill
                className="object-contain"
              />
              
              {/* Photo Counter */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-400 tracking-widest uppercase text-sm font-bold">
                Image {imageIndex + 1} of {products[activeItem].images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}