import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/constants';

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors overflow-hidden">
      
      {/* =========================================
          FONDO ANIMADO (ATMÓSFERA TECH)
         ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. Grid Digital Sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* 2. Orbe Azul (Top Right) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]"
        />

        {/* 3. Orbe Verde (Bottom Left) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.2, 0.4, 0.2],
            y: [0, -50, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-green font-bold tracking-wider uppercase text-sm">
              Portafolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 text-brand-dark dark:text-white">
              Proyectos Destacados
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-8 hidden md:block"
          />
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-gray-100 dark:border-slate-700"
            >
              {/* Imagen de Fondo con Zoom suave */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay Oscuro (Gradiente) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Contenido (Texto) */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-green text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>
                
                {/* Botón Ver Más */}
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span>Ver detalles</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;