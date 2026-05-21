'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Cpu, Wrench } from 'lucide-react';

export default function AboutPreview() {
  const stats = [
    { icon: <Globe2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />, value: "Global", label: "Export Quality" },
    { icon: <ShieldCheck className="w-8 h-8 text-orange-600 dark:text-orange-500" />, value: "ISO", label: "Certified Safety" },
    { icon: <Wrench className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />, value: "1400°C", label: "Max Temp Capacity" },
    { icon: <Cpu className="w-8 h-8 text-orange-600 dark:text-orange-500" />, value: "Custom", label: "Engineering" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-industrial-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-5 pointer-events-none bg-[linear-gradient(#9ca3af_1px,transparent_1px),linear-gradient(90deg,#9ca3af_1px,transparent_1px)] dark:bg-[linear-gradient(#4b5563_1px,transparent_1px),linear-gradient(90deg,#4b5563_1px,transparent_1px)] transition-colors duration-300" style={{ backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-orange-500"></div>
              {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
              <span className="font-arimo text-orange-600 dark:text-orange-500 font-bold uppercase tracking-[0.15em] text-sm md:text-base transition-colors duration-300">Manufacturing Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight mb-6 transition-colors duration-300 font-montserrat">
              Built for the <br/> Heaviest Industries.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 transition-colors duration-300">
              TECHONE HEATERS is a premier manufacturer and exporter of electrical heaters, industrial ovens, and advanced thermal systems. We deliver rugged, precision-engineered solutions designed to withstand highly reactive environments and extreme temperatures.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 px-8 py-4 text-gray-800 dark:text-white hover:text-white hover:bg-cyan-600 dark:hover:bg-cyan-600/20 hover:border-cyan-500 transition-all text-sm font-bold tracking-wider uppercase">
              Tour Our Facility
            </a>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-industrial-800 border border-gray-200 dark:border-white/10 p-8 flex flex-col items-center justify-center text-center group hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none">
                <div className="mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1 transition-colors duration-300">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}