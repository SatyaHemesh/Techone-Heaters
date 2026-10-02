import SectionHeading from '../../components/ui/SectionHeading';
import ContactForm from '../../components/sections/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | TECHONE HEATERS',
  description: 'Request a quotation or contact our engineering team for custom industrial heating solutions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-industrial-900 pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Global Support & Sales" 
          subtitle="Get in Touch" 
          align="center" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight mb-8 transition-colors duration-300 font-montserrat">
              Engineering Support <br/>
              <span className="text-cyan-600 dark:text-cyan-400">&</span> Custom Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12 transition-colors duration-300">
              Whether you need standard catalog replacements or custom-engineered thermal systems for highly reactive environments, our technical sales team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center shrink-0 transition-colors duration-300 rounded-sm">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-500" />
                </div>
                <div>
                  {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
                  <h4 className="font-arimo text-sm text-gray-900 dark:text-white font-bold uppercase tracking-[0.15em] mb-1 transition-colors duration-300">Manufacturing Facility</h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">#506/P, 7-920, Subash Nagar,<br/>Quthbullapur Mandal, Jeedimetla,<br/>Hyderabad, Telangana, India - 500 055</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center shrink-0 transition-colors duration-300 rounded-sm">
                  <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-500" />
                </div>
                <div>
                  {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
                  <h4 className="font-arimo text-sm text-gray-900 dark:text-white font-bold uppercase tracking-[0.15em] mb-1 transition-colors duration-300">Direct Lines</h4>
                  <a href="tel:+919177776501" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">+91 91777 76501</a>
                  <a href="tel:+919700541138" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">+91 97005 41138</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center shrink-0 transition-colors duration-300 rounded-sm">
                  <Mail className="w-6 h-6 text-orange-600 dark:text-orange-500" />
                </div>
                <div>
                  {/* UPDATED: font-arimo and tracking-[0.15em] applied */}
                  <h4 className="font-arimo text-sm text-gray-900 dark:text-white font-bold uppercase tracking-[0.15em] mb-1 transition-colors duration-300">Digital Inquiries</h4>
                  <a href="mailto:techoneheaters@gmail.com" className="text-cyan-700 dark:text-cyan-400 hover:underline transition-colors duration-300">techoneheaters@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: RFQ Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}