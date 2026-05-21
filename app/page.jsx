import HeroSection from '../components/sections/Hero';
import ClientLogos from '../components/sections/ClientLogos';
import ManufacturingCategories from '../components/sections/ManufacturingCategories';
import AboutPreview from '../components/sections/AboutPreview';
import ProductShowcase from '../components/sections/ProductShowcase';
import IndustriesGrid from '../components/sections/IndustriesGrid';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-industrial-800 transition-colors duration-300">
      <HeroSection />
      <ClientLogos /> 
      <ManufacturingCategories /> 
      <AboutPreview />
      <ProductShowcase />
      <IndustriesGrid />
      <Testimonials /> 
    </main>
  );
}