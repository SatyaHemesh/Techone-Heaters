import { products } from '../../data/products';
import SectionHeading from '../../components/ui/SectionHeading';
import { Flame, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Industrial Heaters & Furnaces | TECHONE HEATERS',
  description: 'Explore our complete catalog of industrial heating solutions including Band Heaters, Tubular Heaters, and Muffle Furnaces.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-industrial-800 pt-32 pb-24 relative transition-colors duration-300">
      
      {/* Background Texture - Updated for Light/Dark */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-5 pointer-events-none bg-[linear-gradient(#9ca3af_1px,transparent_1px),linear-gradient(90deg,#9ca3af_1px,transparent_1px)] dark:bg-[linear-gradient(#4b5563_1px,transparent_1px),linear-gradient(90deg,#4b5563_1px,transparent_1px)] transition-colors duration-300" style={{ backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Industrial Catalog" subtitle="Precision Thermal Equipment" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white dark:bg-industrial-700 border border-gray-200 dark:border-white/10 p-8 flex flex-col h-full hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-colors duration-500 shadow-sm hover:shadow-xl dark:shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-white/10 pb-4 transition-colors duration-300">
                <div className="w-12 h-12 bg-gray-50 dark:bg-industrial-900 border border-gray-200 dark:border-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors duration-300 rounded-sm">
                  <Flame className="w-6 h-6 text-cyan-600 dark:text-cyan-500" />
                </div>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-sm transition-colors duration-300">
                  {product.category}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide transition-colors duration-300">{product.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed grow transition-colors duration-300">
                {product.description}
              </p>

              {/* Action */}
              <Link href={`/products/${product.id}`} className="mt-auto relative inline-flex items-center justify-center px-6 py-3 font-bold text-gray-800 dark:text-white hover:text-white uppercase tracking-wider bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:border-cyan-500 transition-all duration-300 group/btn">
                <span className="flex items-center gap-2">
                  View Specs <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}