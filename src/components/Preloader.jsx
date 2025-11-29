import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulamos la carga del 0 al 100%
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          // Cuando llega a 100, esperamos un poquito y avisamos a la App que terminamos
          setTimeout(onComplete, 500); 
          return 100;
        }
        // Velocidad variable para que parezca real
        const jump = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }} // Se va hacia arriba suavemente
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center text-white"
    >
      <div className="relative">
        {/* Tu Logo palpitando */}
        <motion.img 
            src="/icon-logantech.png" 
            alt="Loading"
            className="w-24 h-24 object-contain mb-8 filter drop-shadow-[0_0_15px_rgba(0,119,182,0.5)]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Círculo giratorio decorativo */}
        <motion.div 
            className="absolute inset-0 -m-4 border-t-2 border-brand-blue rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Porcentaje */}
      <div className="font-mono text-4xl font-bold mb-2">
        {count}%
      </div>

      {/* Barra de progreso */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <motion.div 
          className="h-full bg-gradient-to-r from-brand-blue to-brand-green"
          initial={{ width: "0%" }}
          animate={{ width: `${count}%` }}
        />
      </div>

      {/* Texto de estado estilo consola */}
      <div className="mt-4 font-mono text-xs text-brand-green/80">
        {count < 30 && "> INITIALIZING CORE MODULES..."}
        {count >= 30 && count < 70 && "> LOADING ASSETS..."}
        {count >= 70 && count < 100 && "> ESTABLISHING CONNECTION..."}
        {count === 100 && "> SYSTEM READY."}
      </div>
    </motion.div>
  );
};

export default Preloader;