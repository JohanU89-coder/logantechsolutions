import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { SOFTWARE_DATA } from '../data/constants';

// Variantes para la animación en cascada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const SoftwareCatalog = () => {
  return (
    <section id="software" className="relative py-24 bg-white dark:bg-slate-900 border-t dark:border-slate-800 transition-colors overflow-hidden">
      
      {/* =========================================
          FONDO ANIMADO TECH
         ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. Patrón de Cuadrícula (Grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* 2. Orbe Azul (Animado) */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0], 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]"
        />

        {/* 3. Orbe Verde (Animado) */}
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0], 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px]"
        />
      </div>

      {/* =========================================
          CONTENIDO
         ========================================= */}
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark dark:text-white">
              Catálogo de <span className="text-brand-blue">Software</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg max-w-xl">
              Ofrecemos licencias originales y gestión para potenciar la productividad de tu empresa.
            </p>
          </motion.div>
        </div>

        {/* Grid de Productos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SOFTWARE_DATA.map((product) => (
            <motion.div 
              key={product.id}
              variants={cardVariants}
              className="group bg-gray-50/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden hover:-translate-y-2 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 duration-500"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider shadow-sm">
                  {product.cat}
                </div>
              </div>
              
              {/* Info y Botón */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
                    {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {product.desc}
                    </p>
                </div>
                
                <a href="#contact" className="w-full h-12 flex items-center justify-center gap-2 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl text-sm font-bold text-brand-dark dark:text-white hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all group/btn">
                  <Download size={18} className="group-hover/btn:-translate-y-0.5 transition-transform" /> 
                  <span>Solicitar Cotización</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareCatalog;