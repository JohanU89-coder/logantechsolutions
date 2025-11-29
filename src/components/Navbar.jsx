import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { NAV_ITEMS } from '../data/constants';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(20);

  // Lógica para determinar si el logo debe verse BLANCO o ORIGINAL
  // El logo debe ser blanco si:
  // 1. Estamos arriba del todo (fondo transparente sobre Hero oscuro).
  // 2. O si estamos en modo oscuro (fondo negro).
  const useWhiteLogo = !scrolled || isDark;

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-gray-200 dark:border-slate-800 py-3' 
          : 'bg-gradient-to-b from-black/50 to-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO INTELIGENTE */}
        <a href="#" className="flex items-center gap-4 group z-50 relative">
          <img 
            src="/logo-logantech.png" 
            alt="LoganTech Logo" 
            className={`h-14 w-auto object-contain transition-all duration-300 ${
              useWhiteLogo 
                ? 'brightness-0 invert drop-shadow-md' // Se vuelve blanco puro y añade sombrita para legibilidad
                : '' // Se ve original
            }`} 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`text-sm font-medium transition-colors ${
                !scrolled || isDark 
                  ? 'text-gray-200 hover:text-white' // Texto claro en fondo oscuro
                  : 'text-gray-600 hover:text-brand-blue' // Texto oscuro en fondo claro
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full transition-colors ${
               !scrolled || isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-brand-dark'
            }`}
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
          
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-brand-blue text-white rounded-full font-semibold shadow-lg hover:bg-sky-500 hover:scale-105 transition-all"
          >
            Cotizar
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50 relative">
          <button onClick={toggleTheme} className={!scrolled || isDark ? 'text-white' : 'text-brand-dark'}>
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={!scrolled || isDark ? 'text-white' : 'text-brand-dark'}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 top-0 left-0 w-full h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-brand-dark dark:text-white">
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;