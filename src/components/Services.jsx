import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';
import { SERVICES_DATA } from '../data/constants';

// Variantes para la animación en cascada (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Retraso de 0.2s entre cada tarjeta
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      
      {/* --- Fondo Animado (Blobs) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-3xl filter mix-blend-multiply dark:mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-brand-green font-bold tracking-wider uppercase text-sm"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading mt-2 mb-6 text-brand-dark dark:text-white"
          >
            Soluciones integrales para<br className="hidden md:block" /> tu transformación digital
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-brand-blue mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Grid animado */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Empieza a animar 50px antes de entrar
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-slate-700 hover:-translate-y-2 relative"
            >
              {/* Área de Imagen y Icono */}
              <div className="relative h-48">
                {/* 1. Wrapper de la imagen (Recorta la imagen) */}
                <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/0 transition-colors z-10 duration-500"></div>
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                </div>

                {/* 2. Icono Flotante (Fuera del recorte para que se vea completo) */}
                <div className="absolute -bottom-7 left-8 z-30">
                  <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-brand-blue shadow-lg shadow-black/10 border border-gray-100 dark:border-slate-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors duration-300">
                    <Icon name={service.icon} size={28} />
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="pt-10 pb-8 px-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-brand-dark dark:text-white group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow text-sm">
                  {service.desc}
                </p>
                <a href="#contact" className="flex items-center text-brand-blue font-semibold text-sm group/link cursor-pointer hover:gap-2 transition-all">
                  <span>Más información</span>
                  <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;