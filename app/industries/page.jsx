import { industries } from '../../data/industries';
import SectionHeading from '../../components/ui/SectionHeading';
import { Layers, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Industries Powered | TECHONE HEATERS',
  description: 'Discover how our electrical heaters, ovens, and custom thermocouples support packaging, plastics, chemical processing, and laboratories globally.',
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-industrial-800 pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Sectors We Infrastructure" 
          subtitle="Industrial Applications" 
          align="center" 
        />

        <div className="space-y-12 mt-16">
          {industries.map((ind, idx) => (
            <div key={ind.id} className="bg-white dark:bg-industrial-900 border border-gray-200 dark:border-white/10 p-8 lg:p-12 flex flex-col lg:flex-row gap-12 relative overflow-hidden group shadow-md dark:shadow-none transition-colors duration-300">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-cyan-500/10 dark:from-cyan-500/10 to-transparent pointer-events-none transition-colors duration-300"></div>
              
              {/* Icon & Title block */}
              <div className="lg:w-1/3 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center mb-6 text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300 font-montserrat">{ind.name}</h3>
                  <div className="text-xs font-mono text-cyan-700 dark:text-cyan-500 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900 px-3 py-1.5 inline-block transition-colors duration-300">
                    {ind.specs}
                  </div>
                </div>
              </div>

              {/* Specification Details */}
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between transition-colors duration-300">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-8 transition-colors duration-300">
                  {ind.description}
                </p>

                <div>
                  {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
                  <h4 className="font-arimo text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em] mb-4 transition-colors duration-300">Deployed Solutions:</h4>
                  <div className="flex flex-wrap gap-3">
                    {ind.featuredProducts.map((prod, pIdx) => (
                      <span key={pIdx} className="flex items-center gap-2 bg-gray-100 dark:bg-industrial-700 border border-gray-300 dark:border-white/5 px-4 py-2 text-sm text-gray-800 dark:text-gray-300 font-semibold transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}