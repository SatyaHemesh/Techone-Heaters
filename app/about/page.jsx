import SectionHeading from '../../components/ui/SectionHeading';
import { Shield, Zap, Target, Globe } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | TECHONE HEATERS',
  description: 'Learn about our industrial manufacturing facility, engineering standards, and commitment to thermal excellence.',
};

export default function AboutPage() {
  const pillars = [
    { icon: <Shield className="w-8 h-8 text-orange-600 dark:text-orange-500" />, title: "Rugged Durability", desc: "Our heaters are designed for shock, vibration, and highly corrosive environments like acid and salt." },
    { icon: <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />, title: "Thermal Efficiency", desc: "Engineered to minimize heat loss, with insulated designs that save up to 10% on power consumption." },
    { icon: <Target className="w-8 h-8 text-orange-600 dark:text-orange-500" />, title: "Precision Engineering", desc: "Custom designs built to exact tolerances for plastic moulding, packaging, and chemical processing." },
    { icon: <Globe className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />, title: "Export Quality", desc: "Trusted by factories globally, adhering to strict international manufacturing and safety standards." }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-industrial-800 pt-32 transition-colors duration-300">
      
      {/* 1. Founder / Leadership Section (Now First) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Founder Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-orange-600/20 dark:bg-orange-600/10 transform rotate-3 rounded-sm transition-transform duration-500 group-hover:rotate-6"></div>
            
            <div className="relative aspect-3/4 bg-white dark:bg-industrial-900 rounded-sm overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl z-10 flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="K. Ram - Founder of Techone Heaters" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Founder Details */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-orange-500"></div>
              {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
              <span className="font-arimo text-orange-600 dark:text-orange-500 font-bold uppercase tracking-[0.15em] text-sm md:text-base">Company Leadership</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight font-montserrat">
              K. Ram
            </h1>
            {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
            <p className="font-arimo text-sm md:text-base text-cyan-700 dark:text-cyan-500 font-bold uppercase tracking-[0.15em] mb-8">
              Founder & Managing Director
            </p>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                K. Ram established TECHONE HEATERS with a singular vision: to engineer thermal processing solutions that outlast and outperform standard industry benchmarks. With decades of hands-on experience in industrial manufacturing, the company was built on the uncompromising principles of rugged durability and absolute precision.
              </p>
              <p>
                Under his leadership, what started as a specialized heating element workshop in Hyderabad has evolved into a globally trusted manufacturing partner for the plastic moulding, packaging, chemical, and heavy machinery sectors.
              </p>
            </div>

            {/* Quote Block */}
            <div className="mt-10 p-6 sm:p-8 bg-white dark:bg-industrial-900 border-l-4 border-orange-600 shadow-sm dark:shadow-none relative">
              <span className="absolute -top-4 -left-3 text-6xl text-orange-600/20 dark:text-orange-500/20 font-serif leading-none select-none">"</span>
              <p className="font-montserrat text-xl font-bold text-gray-900 dark:text-gray-200 italic leading-snug relative z-10">
                "Our commitment isn't just to manufacture heaters; it is to engineer the reliable thermal infrastructure that keeps our clients' factories running without interruption."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Company Legacy Section (Now Second) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-12 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-orange-500"></div>
              {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
              <span className="font-arimo text-orange-600 dark:text-orange-500 font-bold uppercase tracking-[0.15em] text-sm md:text-base transition-colors duration-300">Our Legacy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight mb-8 leading-tight transition-colors duration-300 font-montserrat">
              Mastering <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-600 transition-colors duration-300">
                Thermal Energy
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6 transition-colors duration-300">
              Based in Hyderabad, India, TECHONE HEATERS has established itself as a premier manufacturer, exporter, and supplier of advanced industrial heating systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300">
              We specialize in providing high-performance electrical heaters, ovens, furnaces, and sensors that drive efficiency in heavy industries worldwide. From standard mica band heaters to custom-built muffle furnaces reaching 1400°C, our equipment is built to last.
            </p>
          </div>
          
          <div className="relative h-112 bg-white dark:bg-industrial-900 border border-gray-200 dark:border-white/10 flex items-center justify-center p-8 group shadow-xl dark:shadow-none transition-colors duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-cyan-900/5 to-orange-900/5 dark:from-cyan-900/10 dark:to-orange-900/10 group-hover:scale-105 transition-all duration-700"></div>
            <div className="absolute inset-0 opacity-10 dark:opacity-10 pointer-events-none bg-[linear-gradient(#9ca3af_1px,transparent_1px),linear-gradient(90deg,#9ca3af_1px,transparent_1px)] dark:bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}></div>
          
            <h3 className="text-6xl font-black text-gray-100 dark:text-white/5 uppercase transform -rotate-45 whitespace-nowrap absolute transition-colors duration-300 font-montserrat">Techone Heaters</h3>
            <div className="relative z-10 text-center">
               <div className="w-32 h-32 border-4 border-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse bg-white/50 dark:bg-transparent backdrop-blur-xs">
                 <span className="text-cyan-700 dark:text-cyan-500 font-bold uppercase tracking-widest text-xs transition-colors duration-300">Facility<br/>Active</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Pillars */}
      <div className="bg-white dark:bg-industrial-900 py-24 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The Techone Advantage" subtitle="Why Industries Trust Us" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-industrial-800 border border-gray-200 dark:border-white/10 p-8 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors duration-500 shadow-sm dark:shadow-none">
                <div className="mb-6">{pillar.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide transition-colors duration-300">{pillar.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}