import SectionHeading from '../../components/ui/SectionHeading';
import { Shield, Zap, Target, Globe, PenTool, CheckCircle2 } from 'lucide-react';
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
      
      {/* 1. The Blueprint Leadership Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* The Outer Engineering Frame */}
        <div className="relative border border-gray-300 dark:border-white/10 bg-white dark:bg-industrial-900 shadow-2xl overflow-hidden group">
          
          {/* Engineering Grid Background */}
          <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none bg-[linear-gradient(#9ca3af_1px,transparent_1px),linear-gradient(90deg,#9ca3af_1px,transparent_1px)] dark:bg-[linear-gradient(#4b5563_1px,transparent_1px),linear-gradient(90deg,#4b5563_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}></div>
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-600 z-10"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-600 z-10"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-600 z-10"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-600 z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
            
            {/* Left Block: The Name & Title */}
            <div className="lg:col-span-4 bg-gray-100 dark:bg-industrial-800/80 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-300 dark:border-white/10 flex flex-col justify-center relative backdrop-blur-sm">
              {/* FIX 1: Removed absolute positioning so it flows naturally above the text */}
              <div className="text-gray-400 dark:text-gray-600 mb-6">
                <PenTool className="w-8 h-8" />
              </div>
              <p className="font-arimo text-orange-600 dark:text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Company Leadership
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter font-montserrat leading-none">
                K. Ram<br/>
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-600 to-transparent mt-6 mb-4"></div>
              <p className="text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-widest text-xs lg:text-sm">
                Proprietor of<br/>Techone Heaters
              </p>
            </div>

            {/* Right Block: The Manifesto */}
            <div className="lg:col-span-8 p-8 lg:p-16 flex flex-col justify-center bg-white/90 dark:bg-industrial-900/90 backdrop-blur-sm">
              
              <div className="flex items-start gap-4 sm:gap-6 mb-10">
                {/* FIX 2: Added shrink-0 so the quote mark never squishes the text */}
                <span className="text-6xl sm:text-8xl text-orange-600/30 dark:text-orange-500/30 font-serif leading-none mt-2 select-none shrink-0">"</span>
                <p className="font-montserrat text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 italic leading-snug">
                  Our commitment isn't just to manufacture heaters; it is to engineer the reliable thermal infrastructure that keeps our clients' factories running without interruption.
                </p>
              </div>

              {/* FIX 3: Changed sm:grid-cols-2 to md:grid-cols-2 so they stack neatly on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" /> The Vision
                  </h4>
                  <p>
                    K. Ram established TECHONE HEATERS with a singular vision: to engineer thermal processing solutions that outlast and outperform standard industry benchmarks. 
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" /> The Execution
                  </h4>
                  <p>
                    What started as a specialized heating element workshop in Hyderabad has evolved into a globally trusted manufacturing partner for heavy machinery sectors.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Company Legacy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 pt-12 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-orange-500"></div>
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
      <div className="bg-white dark:bg-industrial-900 py-16 sm:py-24 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="The Techone Advantage" subtitle="Why Industries Trust Us" align="center" />
          
          {/* 
            FIX 1: Changed grid-cols-1 to grid-cols-2 so it forces 2 columns on mobile. 
            Adjusted gap-8 to gap-3 sm:gap-8 so the cards fit nicely on small screens. 
          */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 mt-12 sm:mt-16">
            {pillars.map((pillar, idx) => (
              /* FIX 2: Reduced mobile padding (p-4) but kept desktop padding (sm:p-8) */
              <div key={idx} className="bg-gray-50 dark:bg-industrial-800 border border-gray-200 dark:border-white/10 p-4 sm:p-8 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors duration-500 shadow-sm dark:shadow-none flex flex-col h-full">
                
                {/* FIX 3: Used Tailwind to shrink the icons slightly on mobile */}
                <div className="mb-3 sm:mb-6 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                  {pillar.icon}
                </div>
                
                {/* FIX 4: Shrunk title to text-sm on mobile to prevent text wrapping awkwardly */}
                <h4 className="text-sm sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 uppercase tracking-wide sm:tracking-wider transition-colors duration-300">
                  {pillar.title}
                </h4>
                
                {/* FIX 5: Shrunk description to text-xs on mobile */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 flex-grow">
                  {pillar.desc}
                </p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}