import Testimonials from '../../components/sections/Testimonials';
import ReviewForm from '../../components/sections/ReviewForm';

export const metadata = {
  title: 'Client Reviews | Techone Heaters',
  description: 'Read what our industrial clients have to say about our heating solutions, or leave your own feedback.',
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-industrial-800 transition-colors duration-300 pt-20">
      {/* Page Header */}
      <div className="py-16 bg-white dark:bg-industrial-900 border-b border-gray-200 dark:border-white/5 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight mb-4 transition-colors">
          Client Feedback
        </h1>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 transition-colors">
          We pride ourselves on delivering export-quality thermal engineering. Read what our partners have to say about our products and services.
        </p>
      </div>

      {/* The Components we already built! */}
      <Testimonials />
      <ReviewForm />
    </main>
  );
}