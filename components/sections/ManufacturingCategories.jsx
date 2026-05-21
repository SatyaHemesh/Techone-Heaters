'use client';

import { Settings2, Droplets, ThermometerSun, Box } from 'lucide-react';
import Link from 'next/link';

export default function ManufacturingCategories() {
  const categories = [
    {
      title: "Band & Strip Heaters",
      desc: "Mica and Ceramic insulated heaters engineered for plastic injection moulding and extrusion machinery.",
      icon: <Settings2 className="w-8 h-8 text-orange-600 dark:text-orange-500" />,
      link: "/products"
    },
    {
      title: "Tubular & Immersion",
      desc: "Heavy-duty liquid and chemical heating elements built with high-grade, corrosion-resistant outer sheaths.",
      icon: <Droplets className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
      link: "/products"
    },
    {
      title: "Ovens & Furnaces",
      desc: "Custom-built industrial ovens and high-temperature muffle furnaces reaching up to 1400°C.",
      icon: <Box className="w-8 h-8 text-orange-600 dark:text-orange-500" />,
      link: "/products"
    },
    {
      title: "Sensors & Controls",
      desc: "Precision Thermocouples (J, K, R, S, B type) and RTD sensors for highly accurate thermal regulation.",
      icon: <ThermometerSun className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
      link: "/products"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-industrial-800 border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-8 bg-cyan-500"></div>
            {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
            <span className="font-arimo text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-[0.15em] text-sm md:text-base transition-colors">Core Capabilities</span>
            <div className="h-0.5 w-8 bg-cyan-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight transition-colors font-montserrat">
            What We Manufacture
          </h2>
          <div className="mt-6 w-24 h-1 bg-linear-to-r from-orange-600 to-red-600"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="group bg-white dark:bg-industrial-900 border border-gray-200 dark:border-white/10 p-8 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none flex flex-col h-full">
              
              <div className="w-16 h-16 bg-gray-50 dark:bg-industrial-800 border border-gray-200 dark:border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 rounded-sm">
                {cat.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide transition-colors">{cat.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 grow transition-colors">
                {cat.desc}
              </p>

              <Link href={cat.link} className="mt-auto text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
                View Catalog &rarr;
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}