'use client';

import { Star, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Link from 'next/link';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Vikram Desai",
      role: "Operations Director",
      company: "Prime Thermoplastics",
      rating: 5,
      text: "The custom band heaters from Techone completely eliminated the uneven heating issues on our main extrusion line. Fantastic build quality and rapid delivery."
    },
    {
      id: 2,
      name: "Anita Reddy",
      role: "Quality Assurance Lead",
      company: "Stellar Pharma Packaging",
      rating: 5,
      text: "We require incredibly strict temperature tolerances for our pharmaceutical packaging seals. Techone's tubular heaters hit the mark perfectly. Their ISO standards really show."
    },
    {
      id: 3,
      name: "Mohammed Tariq",
      role: "Chief Metallurgist",
      company: "Ironclad Forging",
      rating: 4,
      text: "Sourced a heavy-duty muffle furnace for our heat treatment lab. It reaches 1400°C effortlessly and the thermal insulation holds up great. Very solid engineering."
    },
    {
      id: 4,
      name: "Prakash Iyer",
      role: "Chief Procurement Officer",
      company: "AeroDynamics India",
      rating: 5,
      text: "The high-density cartridge heaters we procured for our aerospace component molding process have exceeded our expectations. Consistent heat distribution and excellent durability."
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Facility Manager",
      company: "Naturals Food Processing",
      rating: 4,
      text: "We upgraded our industrial baking lines with Techone's finned tubular heaters. The thermal efficiency improved our production speed by 15%. Great support team as well."
    },
    {
      id: 6,
      name: "Dr. Arvind Swamy",
      role: "Head of Material Science",
      company: "National Research Institute",
      rating: 5,
      text: "Sourcing custom thermocouples for our high-vacuum chambers has always been a challenge until we partnered with Techone. The sensor accuracy and response time are phenomenal."
    },
    {
      id: 7,
      name: "Sunil Patel",
      role: "Maintenance Engineer",
      company: "FlexiPack Solutions",
      rating: 5,
      text: "Their ceramic band heaters are built like tanks. We run our machines 24/7, and the lifespan of these heaters is significantly longer than our previous suppliers."
    },
    {
      id: 8,
      name: "Arun Menon",
      role: "Production Head",
      company: "Titan Heavy Engineering",
      rating: 4,
      text: "Solid industrial ovens. We use them for curing industrial coatings on heavy machinery parts. Uniform heating, and the digital control panels are very intuitive for our operators."
    },
    {
      id: 9,
      name: "Meera Krishnan",
      role: "Plant Superintendent",
      company: "Vardhman Textiles & Dyes",
      rating: 5,
      text: "Our chemical dye baths require rapid and sustained heating. The immersion heaters provided by Techone are incredibly corrosion-resistant and highly efficient. Zero complaints."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-industrial-800 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading title="Client Testimonials" subtitle="Proven Industry Performance" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white dark:bg-industrial-900 border border-gray-200 dark:border-white/10 p-8 relative flex flex-col h-full shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 group">
              
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-100 dark:text-white/5 group-hover:text-cyan-50 dark:group-hover:text-cyan-900/30 transition-colors duration-300" />
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300 dark:text-gray-600'}`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 grow relative z-10 transition-colors duration-300">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-100 dark:border-white/10 pt-6 mt-auto relative z-10 transition-colors duration-300">
                <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm transition-colors duration-300">{review.name}</h4>
                <p className="text-xs text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-widest mt-1 transition-colors duration-300">{review.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 transition-colors duration-300">{review.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 text-center">
          <Link href="/reviews" className="inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-wider bg-cyan-600 hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-xl">
            Read All & Write a Review
          </Link>
        </div>

      </div>
    </section>
  );
}