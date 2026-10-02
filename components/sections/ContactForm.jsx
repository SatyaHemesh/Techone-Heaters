'use client';

import { useState } from 'react';
import { Send, CheckCircle, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [submitType, setSubmitType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gather all data from the form
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const company = formData.get('company');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const equipment = formData.get('equipment_type');
    const message = formData.get('message');

    // Highly Professional B2B Message Format
    const formattedMessage = `Hello Techone Heaters Team,

I am reaching out to request a formal quotation. Please find my contact details and technical requirements below:

*■ CLIENT INFORMATION*
• Name: ${name}
• Company: ${company}
• Email: ${email}
• Phone: ${phone}

*■ PROJECT SPECIFICATIONS*
• Equipment Required: ${equipment}
• Technical Details / Message:
${message}

I look forward to your prompt response.

Best regards,
${name}`;

    if (submitType === 'whatsapp') {
      // Direct to WhatsApp API with your specific sales number
      const whatsappNumber = '9177776501';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappUrl, '_blank');
    } else if (submitType === 'email') {
      // Direct to native Email client
      const emailAddress = 'satyahemesh2006@gmail.com';
      const subject = `Formal Quotation Request: ${company}`;
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedMessage)}`;
      window.location.href = mailtoUrl;
    }
    
    // Reset the form after sending
    e.target.reset();
  };

  return (
    <div className="bg-white dark:bg-industrial-700 border border-gray-200 dark:border-white/10 p-8 shadow-2xl relative overflow-hidden transition-colors duration-300">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-600 to-red-600"></div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wide transition-colors">Request a Quotation</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Full Name</label>
            <input required type="text" name="name" className="w-full bg-gray-50 dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Company Name</label>
            <input required type="text" name="company" className="w-full bg-gray-50 dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Heavy Industries Ltd." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Email Address</label>
            <input required type="email" name="email" className="w-full bg-gray-50 dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Phone / WhatsApp</label>
            <input required type="tel" name="phone" className="w-full bg-gray-50 dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="+91 00000 00000" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Equipment Type / Application</label>
          <select name="equipment_type" className="w-full bg-gray-50 dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none">
            <option value="Not Specified">Select Equipment Type...</option>
            <option value="Band / Strip Heaters">Band / Strip Heaters</option>
            <option value="Immersion / Tubular Heaters">Immersion / Tubular Heaters</option>
            <option value="Industrial Ovens & Furnaces">Industrial Ovens & Furnaces</option>
            <option value="Thermocouples & Sensors">Thermocouples & Sensors</option>
            <option value="Custom Engineering Solution">Custom Engineering Solution</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Technical Specifications / Message</label>
          <textarea required name="message" rows="4" className="w-full bg-gray-50 dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Please include required wattage, dimensions, maximum temperature, and target applications..."></textarea>
        </div>

        {/* Dual Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          
          <button 
            type="submit" 
            onClick={() => setSubmitType('whatsapp')}
            className="w-full group relative flex items-center justify-center gap-2 px-6 py-4 font-bold text-green-700 dark:text-green-400 hover:text-white uppercase tracking-wider bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/50 hover:bg-green-600 dark:hover:bg-green-600 hover:border-green-500 transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" /> 
            WhatsApp
          </button>

          <button 
            type="submit" 
            onClick={() => setSubmitType('email')}
            className="w-full group relative flex items-center justify-center gap-2 px-6 py-4 font-bold text-gray-700 dark:text-white hover:text-white uppercase tracking-wider bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 hover:bg-orange-600 dark:hover:bg-orange-600 hover:border-orange-500 transition-all duration-300"
          >
            <Mail className="w-4 h-4" /> 
            Email
          </button>
          
        </div>
      </form>
    </div>
  );
}