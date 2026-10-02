'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-industrial-900 border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group w-max">
              <div className="relative transition-transform duration-300 group-hover:scale-105 flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Techone Heaters Logo" 
                  width={100}
                  height={100}
                  className="w-auto h-16 md:h-20 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center font-montserrat">
                <span className="text-gray-900 dark:text-white font-extrabold tracking-wider text-xl leading-none transition-colors">
                  TECHONE
                </span>
                <span className="text-orange-600 dark:text-orange-500 font-bold tracking-[0.25em] text-xs mt-1 leading-none transition-colors">
                  HEATERS
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
              Reliable Manufacturers, Exporters and Suppliers of Electrical Heaters, Heating Elements, Industrial Ovens, Furnaces, Thermocouples and Sensors.
            </p>
          </div>

          {/* Quick Links (Equipment) */}
          <div>
            <h4 className="font-arimo text-gray-900 dark:text-white font-bold uppercase tracking-[0.15em] mb-6 transition-colors">Equipment</h4>
            {/* 2-column grid on mobile */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-2">
              <li><Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors">Band Heaters</Link></li>
              <li><Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors">Immersion Heaters</Link></li>
              <li><Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors">Muffle Furnaces</Link></li>
              <li><Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors">Thermocouples</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-2">
            <h4 className="font-arimo text-gray-900 dark:text-white font-bold uppercase tracking-[0.15em] mb-6 transition-colors">Manufacturing Unit & Office</h4>
            {/* Forced 2-column grid on mobile with a subtle divider line between them */}
            <div className="bg-white dark:bg-industrial-800 border border-gray-200 dark:border-white/10 p-5 sm:p-6 grid grid-cols-2 gap-4 shadow-sm dark:shadow-none transition-colors duration-300">
              
              <div className="flex flex-col pr-2">
                <p className="font-arimo text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-2 font-bold uppercase tracking-[0.15em] transition-colors">Address</p>
                {/* Adjusted text-xs on mobile to prevent wrapping issues */}
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors">#506/P, 7-920, Subash Nagar,<br/>Quthbullapur Mandal, Jeedimetla,<br/>Hyderabad, Telangana, India - 500055</p>
              </div>

              <div className="flex flex-col border-l border-gray-200 dark:border-white/10 pl-4">
                <p className="font-arimo text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-2 font-bold uppercase tracking-[0.15em] transition-colors">Contact</p>
                <a href="tel:+919177776501" className="text-xs sm:text-sm text-gray-900 dark:text-white font-bold mb-1 transition-colors hover:underline hover:decoration-orange-600 hover:underline-offset-4 block">
                  Cell: +91 91777 76501
                </a>
                <a href="tel:+919700541138" className="text-xs sm:text-sm text-gray-900 dark:text-white font-bold mb-3 transition-colors hover:underline hover:decoration-orange-600 hover:underline-offset-4 block">
                  Cell: +91 97005 41138
                </a> 
                <a href="mailto:techoneheaters@gmail.com" className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 hover:underline break-all transition-colors block">techoneheaters@gmail.com</a>
              </div>

            </div>
          </div>
        </div>

        {/* Clean, Centered Copyright */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 pb-2 flex justify-center text-center transition-colors duration-300">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium font-montserrat transition-colors">
            © {new Date().getFullYear()} TECHONE HEATERS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}