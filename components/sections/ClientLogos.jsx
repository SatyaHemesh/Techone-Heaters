'use client';

import Image from 'next/image';

export default function ClientLogos() {
  const clients = [
    { 
      name: "Olectra Greentech Limited", 
      logo: "/clients/olectra.png" 
    },
    { 
      name: "Kuvag India Private Limited", 
      logo: "/clients/kuvag.png"
    },
    {
      name: "Deccan Enterprises Private Limited",
      logo: "/clients/deccan.png",
    },
    // Add more companies here later!
  ];

  return (
    <section className="py-16 bg-white dark:bg-industrial-900 border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bigger, Bolder Heading with an underline accent */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-wider transition-colors duration-300">
            Trusted by Industry Leaders
          </h2>
          <div className="mt-4 w-16 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Logo Images */}
          {clients.map((client, idx) => (
            <div key={idx} className="relative w-40 md:w-48 h-20 md:h-24 hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <Image 
                src={client.logo} 
                alt={`${client.name} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}

          {/* NEW: The Sleek Pill Badge Design */}
          <div className="flex items-center justify-center py-4">
            <div className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-50 dark:bg-industrial-800/50 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-orange-500/50 transition-all duration-300 group cursor-default">
              
              {/* Modern "More Entities" Overlapping Circles Indicator */}
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-industrial-900"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-industrial-900"></div>
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 border-2 border-white dark:border-industrial-900 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                  <span className="text-orange-600 dark:text-orange-500 group-hover:text-white font-bold text-sm leading-none">+</span>
                </div>
              </div>

              {/* Text */}
              <p className="font-montserrat font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider sm:tracking-widest text-[10px] sm:text-xs">
                & Many Other <br className="sm:hidden" />
                <span className="text-orange-600 dark:text-orange-500">Industry Leaders</span>
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}