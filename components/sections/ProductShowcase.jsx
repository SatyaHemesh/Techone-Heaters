'use client';

import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-gray-50 dark:bg-industrial-800 relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      
      {/* Background industrial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-cyan-900/5 dark:bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Premium Heating Systems" subtitle="Our Product Range" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-industrial-700 border border-gray-200 dark:border-white/10 p-8 flex flex-col h-full overflow-hidden hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors duration-500 shadow-sm hover:shadow-xl dark:shadow-none"
            >
              <div className="absolute inset-0 bg-linear-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-white/10 group-hover:bg-linear-to-r group-hover:from-orange-500 group-hover:to-red-600 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 grow">
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Flame className="w-6 h-6 text-orange-600 dark:text-orange-500 group-hover:text-red-500 transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide transition-colors duration-300">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3 transition-colors duration-300">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <span className="text-cyan-600 dark:text-cyan-500 mr-2">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="relative z-10 mt-auto pt-6 border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
                <a href={`/products/${product.id}`} className="inline-flex items-center text-sm font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 uppercase tracking-wider group/link transition-colors duration-300">
                  View Specifications 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}