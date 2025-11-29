import React, { useState } from 'react'; // <--- IMPORTANTE: Importar useState
import { AnimatePresence } from 'framer-motion'; // <--- Importar AnimatePresence

// ... tus otros imports (Navbar, Hero, etc...)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SoftwareCatalog from './components/SoftwareCatalog';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader'; // <--- IMPORTAR EL PRELOADER NUEVO

import { useTheme } from './hooks/useTheme';

const App = () => {
  const { isDark, toggleTheme } = useTheme();
  // Estado para controlar si seguimos cargando
  const [loading, setLoading] = useState(true); 

  return (
    <>
      {/* Sistema de Preloader */}
      <AnimatePresence mode='wait'>
        {loading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Contenido de la Web (Solo se ve cuando termina de cargar, o se revela debajo) */}
      {!loading && (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col">
          <ScrollProgress />
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          
          <main className="flex-grow">
            <Hero />
            <Services />
            <SoftwareCatalog />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
          </main>
          
          <Footer />
          <FloatingWhatsApp />
          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default App;