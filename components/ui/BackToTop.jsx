'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { Flame, ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // 1. TOP LEVEL HOOKS (Always run in the same order)
  const { scrollYProgress } = useScroll();
  
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const arrowOpacity = useTransform(scaleProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 flex flex-col items-center gap-2"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            className="text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-500 bg-white dark:bg-industrial-900 px-3 py-1 rounded-sm shadow-md border border-gray-200 dark:border-white/10 pointer-events-none"
          >
            Cool Down
          </motion.span>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Scroll to top"
            className="relative w-14 h-14 rounded-full bg-white dark:bg-industrial-800 shadow-xl border border-gray-200 dark:border-white/10 flex items-center justify-center group overflow-hidden"
          >
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" 
              viewBox="0 0 100 100"
            >
              <circle 
                cx="50" cy="50" r="44" 
                className="stroke-gray-200 dark:stroke-white/5 fill-none" 
                strokeWidth="6" 
              />
              <motion.circle
                cx="50" cy="50" r="44"
                className="stroke-orange-600 fill-none drop-shadow-[0_0_6px_rgba(234,88,12,0.6)]"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ pathLength: scaleProgress }}
              />
            </svg>

            <div className="relative z-10 w-10 h-10 rounded-full bg-gray-50 dark:bg-industrial-900 flex items-center justify-center transition-colors duration-300 group-hover:bg-orange-600">
              
              <motion.div
                style={{ opacity: scaleProgress }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Flame className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
              </motion.div>

              <motion.div
                style={{ opacity: arrowOpacity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <ArrowUp className="w-5 h-5 text-gray-900 dark:text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>

            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}