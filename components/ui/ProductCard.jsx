import { Flame, ArrowRight, ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white dark:bg-industrial-700 border border-gray-200 dark:border-white/10 flex flex-col h-full hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg dark:shadow-none">
      
      {/* Product Image Header (Auto-scaling box) */}
      <div className="relative w-full h-auto bg-gray-100 dark:bg-industrial-900 border-b border-gray-200 dark:border-white/10 overflow-hidden shrink-0 transition-colors duration-300">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-102"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center text-gray-400 dark:text-gray-600">
            <ImageIcon className="w-8 h-8 opacity-20" />
          </div>
        )}
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-200/40 dark:from-industrial-700/40 to-transparent pointer-events-none transition-colors duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-white/10 pb-4 transition-colors duration-300">
          <div className="w-10 h-10 bg-gray-50 dark:bg-white/5 flex items-center justify-center text-orange-600 dark:text-orange-500 group-hover:scale-110 transition-all shrink-0 rounded-sm">
            <Flame className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest bg-gray-100 dark:bg-white/5 px-2 py-0.5 ml-2 text-right rounded-sm transition-colors duration-300">
            {product.category}
          </span>
        </div>

        {/* UPDATED: Added font-['var(--font-arimo)'] */}
        <h3 className="font-['var(--font-arimo)'] text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
          {product.name}
        </h3>
        
        {/* UPDATED: Removed line-clamp-3 so the full text always displays. (Automatically uses Poppins from layout) */}
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-6 leading-relaxed grow transition-colors duration-300">
          {product.description}
        </p>

        <Link href={`/products/${product.id}`} className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest group/link transition-colors duration-300">
          View Engineering Specs
          <ArrowRight className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
      
    </div>
  );
}