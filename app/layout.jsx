import '../app/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ThemeProvider } from '../components/providers/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import BackToTop from '../components/ui/BackToTop'; 

// 1. UPDATED: Added Great_Vibes to the import list
import { Poppins, Montserrat, Arimo, Great_Vibes } from 'next/font/google';

// Configure Poppins (Default for all body text/descriptions)
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

// Configure Montserrat (For Hero Headings)
const montserrat = Montserrat({ 
  weight: ['500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Configure Arimo (For Product Headings)
const arimo = Arimo({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-arimo',
  display: 'swap',
});

// 2. UPDATED: Configured Great Vibes (It only needs weight 400!)
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

// Advanced SEO Metadata Injection
export const metadata = {
  title: {
    default: 'TECHONE HEATERS | Premium Industrial Heating Solutions',
    template: '%s | TECHONE HEATERS',
  },
  description: 'Leading manufacturers and exporters of custom industrial electrical heaters, industrial ovens, furnaces, and highly accurate thermocouples based in Hyderabad, India.',
  keywords: [
    'Industrial Heaters', 
    'Heating Elements Manufacturer', 
    'Band Heaters', 
    'Cartridge Heaters', 
    'Thermocouples', 
    'Muffle Furnaces', 
    'Industrial Ovens Hyderabad',
    'Techone Heaters Jeedimetla',
    'Custom Thermal Engineering'
  ],
  openGraph: {
    title: 'TECHONE HEATERS | Industrial Heating Solutions',
    description: 'Export-quality thermal engineering, manufacturing, and supply based in Jeedimetla.',
    url: 'https://techoneheaters.com', 
    siteName: 'Techone Heaters',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      
      {/* 3. UPDATED: Injected ${greatVibes.variable} into the class list! */}
      <body className={`${poppins.className} ${montserrat.variable} ${arimo.variable} ${greatVibes.variable} bg-gray-50 text-gray-900 dark:bg-industrial-800 dark:text-gray-300 antialiased overflow-x-hidden max-w-full transition-colors duration-300`}>
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen w-full overflow-x-hidden relative">
            <Navbar />
            <main className="grow w-full">
              {children}
            </main>
            <Footer />
          </div>
          
          <Analytics /> 
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}