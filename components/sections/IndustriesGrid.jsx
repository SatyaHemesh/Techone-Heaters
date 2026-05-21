'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Layers, Package, Beaker, Wrench } from 'lucide-react';

export default function IndustriesGrid() {
  const industries = [
    { 
      name: "Plastic Moulding & Extrusion", 
      desc: "High-precision thermal regulation systems designed for modern plastic manufacturing. Thermocouples and RTD sensors provide precise temperature data.",
      icon: <Layers className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
    },
    { 
      name: "Packaging Systems", 
      desc: "Rapid-response heating solutions engineered for continuous assembly lines. High hot-air flow capabilities optimize high-speed packaging.",
      icon: <Package className="w-8 h-8 text-orange-600 dark:text-orange-500" />
    },
    { 
      name: "Chemical & Pharma", 
      desc: "Corrosion-proof engineering built to withstand highly volatile environments. Heavy-duty construction keeps operating bodies insulated.",
      icon: <Beaker className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
    },
    { 
      name: "Powder Coating & Curing", 
      desc: "Forced air circulation solutions optimized for paint, powder coating units, rubber processing, and industrial curing plants.",
      icon: <Wrench className="w-8 h-8 text-orange-600 dark:text-orange-500" />
    },
    { 
        name: "Food & Beverage", 
        desc: "Sanitary heating solutions designed for food processing and commercial kitchen environments.",
        icon: <Beaker className="w-8 h-8 text-cyan-500 dark:text-cyan-400" /> 
      },
      { 
        name: "Automotive Manufacturing", 
        desc: "Heavy-duty thermal engineering for automotive parts curing, rubber vulcanizing, and metal treating.",
        icon: <Wrench className="w-8 h-8 text-orange-600 dark:text-orange-500" /> 
      }
    ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-industrial-800 relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Industries We Power" subtitle="Global Applications" align="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white dark:bg-industrial-700 border border-gray-200 dark:border-white/10 p-10 flex flex-col sm:flex-row gap-8 items-start hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors duration-500 shadow-xl dark:shadow-2xl overflow-hidden"
            >
              {/* Decorative Blueprint Background - Light/Dark support */}
              <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none bg-[linear-gradient(#9ca3af_1px,transparent_1px),linear-gradient(90deg,#9ca3af_1px,transparent_1px)] dark:bg-[linear-gradient(#4b5563_1px,transparent_1px),linear-gradient(90deg,#4b5563_1px,transparent_1px)] transition-colors duration-300" style={{ backgroundSize: '20px 20px' }}></div>
              
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gray-50 dark:bg-industrial-900 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 relative z-10 rounded-sm">
                {ind.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <div className="h-0.5 w-12 bg-cyan-500 mb-4 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 transition-colors duration-300">
                  {ind.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}