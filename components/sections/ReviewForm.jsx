'use client';

import { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const company = formData.get('company');
    const review = formData.get('review');

    // Format for WhatsApp
    const message = `*New Customer Review!*

*Name:* ${name}
*Company:* ${company}
*Rating:* ${rating} out of 5 Stars

*Review:*
${review}`;

    // Directing to WhatsApp
    const whatsappUrl = `https://wa.me/918919095579?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    e.target.reset();
    setRating(0);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white dark:bg-industrial-900 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gray-50 dark:bg-industrial-700 border border-gray-200 dark:border-white/10 p-8 shadow-2xl relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 to-blue-600"></div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide transition-colors">Leave a Review</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 transition-colors">Help us improve by sharing your experience with Techone Heaters.</p>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Review Submitted!</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Thank you for your feedback. We appreciate your business.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Interactive Star Rating */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star 
                        className={`w-8 h-8 transition-colors duration-200 ${
                          star <= (hoveredRating || rating) 
                            ? 'text-orange-500 fill-orange-500' 
                            : 'text-gray-300 dark:text-gray-600'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
                {rating === 0 && <p className="text-xs text-red-500 mt-1">Please select a rating.</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Full Name</label>
                  <input required type="text" name="name" className="w-full bg-white dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:border-cyan-500 transition-colors" placeholder="e.g. Rahul Verma" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Company / Factory Name</label>
                  <input required type="text" name="company" className="w-full bg-white dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:border-cyan-500 transition-colors" placeholder="e.g. Heavy Industries Ltd." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">Your Review</label>
                <textarea required name="review" rows="4" className="w-full bg-white dark:bg-industrial-900 border border-gray-200 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:border-cyan-500 transition-colors resize-none" placeholder="Tell us about the product quality, engineering support, and delivery speed..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={rating === 0}
                className="w-full group relative flex items-center justify-center gap-2 px-8 py-4 font-bold text-gray-700 dark:text-white hover:text-white uppercase tracking-wider bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:border-cyan-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Review <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}