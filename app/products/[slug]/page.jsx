import { products } from '../../../data/products';
import { notFound } from 'next/navigation';
import { ChevronRight, ShieldAlert, Cpu, ImageIcon, Send } from 'lucide-react';
import Link from 'next/link';
import DownloadPdfButton from '../../../components/ui/DownloadPdfButton';
import CinematicLightbox from '../../../components/ui/CinematicLightbox';

// Generate static routes for all products to ensure ultra-fast loading
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.name} | TECHONE HEATERS`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  // Await the params object in Next.js 14/15
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-industrial-900 pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-widest mb-12">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Catalog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-white transition-colors">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Real Product Image Showcase (Auto-scaling) */}
          <div className="relative w-full h-auto bg-white dark:bg-industrial-800 border border-gray-200 dark:border-white/10 overflow-hidden rounded-sm shadow-xl dark:shadow-2xl group transition-colors duration-300">
            
            {/* Grid background shifted to Tailwind classes for Light/Dark support */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none bg-[linear-gradient(#9ca3af_1px,transparent_1px),linear-gradient(90deg,#9ca3af_1px,transparent_1px)] dark:bg-[linear-gradient(#374151_1px,transparent_1px),linear-gradient(90deg,#374151_1px,transparent_1px)] transition-colors duration-300" style={{ backgroundSize: '20px 20px' }}></div>
            
            {product.image ? (
                <div className="relative z-10">
                  <CinematicLightbox 
                    src={product.image} 
                    alt={`${product.name} High Resolution Specification`} 
                  />
                </div>
              ) : (
                <div className="w-full h-96 flex flex-col items-center justify-center text-gray-400 dark:text-gray-600 gap-3 relative z-10">
                  <ImageIcon className="w-12 h-12 opacity-30 dark:opacity-20 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-bold opacity-60 dark:opacity-40">Image Pending Upload</span>
                </div>
              )}

            {/* Corner technical design accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-500/40 m-4 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-500/40 m-4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-cyan-500/40 m-4 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan-500/40 m-4 pointer-events-none"></div>
          </div>

          {/* Right Column: Specifications & Data */}
          <div>
            <div className="mb-8 border-b border-gray-200 dark:border-white/10 pb-8 transition-colors duration-300">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm mb-2 block transition-colors">
                Category: {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight mb-6 transition-colors">
                {product.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors">
                {product.description}
              </p>
            </div>

            {/* Features List */}
            <div className="mb-12">
              <h3 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-6 flex items-center gap-2 transition-colors">
                <Cpu className="w-5 h-5 text-orange-500" /> Core Engineering Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="bg-white dark:bg-industrial-800 border border-gray-200 dark:border-white/5 p-4 flex items-start gap-3 transition-colors duration-300 shadow-sm dark:shadow-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industrial Trust Badges */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900/50 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300">
                <ShieldAlert className="w-4 h-4" /> ISO Certified
              </div>
              <div className="flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-900/50 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300">
                Export Quality
              </div>
            </div>

            {/* Action Buttons (Perfectly Synced Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              
              {/* Primary Action: Request Quote */}
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 px-6 py-4 font-bold text-white uppercase tracking-widest text-sm bg-orange-600 hover:bg-orange-700 transition-all duration-300 rounded-sm shadow-md hover:shadow-orange-600/30 group h-full"
              >
                <Send className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Request Quote
              </Link>
              
              {/* Secondary Action: Download PDF */}
              <div className="h-full">
                <DownloadPdfButton product={product} />
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}