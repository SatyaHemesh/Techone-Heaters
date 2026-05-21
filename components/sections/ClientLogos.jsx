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
        
        {/* UPDATED: Bigger, Bolder Heading with an underline accent */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-wider transition-colors duration-300">
            Trusted by Industry Leaders
          </h2>
          <div className="mt-4 w-16 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        {/* UPDATED: Full color immediately, larger size, smooth scale on hover */}
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
          {clients.map((client, idx) => (
            <div key={idx} className="relative w-48 h-24 hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <Image 
                src={client.logo} 
                alt={`${client.name} Logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}