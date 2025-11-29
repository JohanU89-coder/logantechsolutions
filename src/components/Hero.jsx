import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Code, Wrench } from 'lucide-react';

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [fgIndex, setFgIndex] = useState(0);

  // Imágenes de fondo
  const bgImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920",
  ];

  // Imágenes del carrusel pequeño
  const foregroundImages = [
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=800", 
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", 
  ];

  useEffect(() => {
    const timer = setInterval(() => setBgIndex((prev) => (prev + 1) % bgImages.length), 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setFgIndex((prev) => (prev + 1) % foregroundImages.length), 4000);
    return () => clearInterval(timer);
  }, []);

  // Variantes para el texto tipo máquina de escribir
  const typingContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const typingLetter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-900 min-h-screen flex items-center">
      
      {/* 1. Fondo Dinámico */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
          <motion.img
            key={bgIndex} src={bgImages[bgIndex]} alt=""
            initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-blue-900/40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,119,182,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,182,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- Columna Izquierda: Contenido --- */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 border border-brand-blue/30 text-brand-blue rounded text-sm font-mono mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span>SYSTEM_ONLINE: v3.0</span>
            </motion.div>

            {/* Efecto Typewriter Restaurado */}
            <motion.h1 
              variants={typingContainer} initial="hidden" animate="visible"
              className="text-4xl md:text-6xl font-bold font-heading leading-tight text-white mb-6"
            >
              {Array.from("Código e Innovación").map((char, i) => (
                <motion.span key={i} variants={typingLetter}>{char}</motion.span>
              ))}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                & Soporte Técnico
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
              className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg font-light border-l-4 border-brand-green pl-6"
            >
              Impulsamos tu negocio con desarrollo de software a medida, licenciamiento corporativo y mantenimiento experto de hardware.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="group relative px-8 py-4 bg-brand-blue text-white font-bold rounded overflow-hidden flex items-center justify-center gap-2">
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                <span>Solicitar Servicio</span> <ArrowRight size={18} />
              </a>
              <a href="#software" className="px-8 py-4 bg-transparent border border-gray-600 text-white hover:border-brand-green hover:text-brand-green transition-colors font-bold rounded flex items-center justify-center gap-2">
                <Terminal size={18} /> Ver Licencias
              </a>
            </motion.div>
          </div>

          {/* --- Columna Derecha: Visualización Tech Restaurada --- */}
          <div className="relative perspective-1000 hidden lg:block">
            
            {/* Elementos SVG de Circuito (Animados) */}
            <svg className="absolute -top-10 -right-10 w-full h-full z-0 opacity-40 pointer-events-none" viewBox="0 0 400 400">
               <motion.path 
                 d="M 50 200 L 150 200 L 180 250 L 350 250" fill="none" stroke="#00A676" strokeWidth="2"
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               />
               <motion.path 
                 d="M 300 50 L 300 150 L 250 180 L 50 180" fill="none" stroke="#0077B6" strokeWidth="2"
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
               />
            </svg>

            {/* Contenedor Principal de la Imagen 3D */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-10 w-full aspect-video rounded-xl overflow-hidden border border-gray-700 bg-gray-800 shadow-[0_0_40px_rgba(0,119,182,0.3)] group"
            >
              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900/90 backdrop-blur flex items-center px-4 border-b border-gray-700 z-20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono">logantech_sys_core.exe</div>
              </div>

              <AnimatePresence mode='wait'>
                <motion.img
                  key={fgIndex} src={foregroundImages[fgIndex]} alt=""
                  initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
              {/* Efecto Escáner */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-brand-green shadow-[0_0_10px_#00A676] z-20 opacity-70"
              />
            </motion.div>

            {/* Tarjetas Flotantes "Holográficas" Restauradas */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-20 bg-gray-900/80 backdrop-blur-md border border-brand-blue/50 p-3 rounded-lg shadow-lg z-30 max-w-[150px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Wrench size={16} className="text-brand-blue" />
                <span className="text-xs text-white font-bold">Soporte IT</span>
              </div>
              <p className="text-[10px] text-gray-400">Diagnóstico activo.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-10 bg-gray-900/80 backdrop-blur-md border border-brand-green/50 p-3 rounded-lg shadow-lg z-30 max-w-[150px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Code size={16} className="text-brand-green" />
                <span className="text-xs text-white font-bold">Dev Mode</span>
              </div>
              <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => (<div key={i} className={`w-1 h-3 rounded-sm ${i > 1 ? 'bg-brand-green' : 'bg-gray-600'}`}></div>))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;