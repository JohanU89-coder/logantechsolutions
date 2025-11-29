import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "CEO, TechFlow",
    content: "La implementación de las licencias fue inmediata. El soporte técnico nos salvó de un parón crítico en la operación. 100% recomendados.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Ana Lucía Vega",
    role: "Gerente de Operaciones",
    content: "LoganTech transformó nuestra infraestructura de red. Ahora el equipo trabaja sin interrupciones y la velocidad es increíble.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Roberto Campos",
    role: "Arquitecto Senior",
    content: "Excelente servicio de consultoría para nuestro software de diseño. Entienden perfectamente las necesidades del sector creativo.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors border-t border-gray-200 dark:border-slate-800 overflow-hidden">
      
      {/* =========================================
          FONDO ANIMADO (ATMÓSFERA TECH)
         ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. Grid Digital Sutil (Funciona en claro y oscuro) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* 2. Orbe Azul (Respirando) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[100px]"
        />

        {/* 3. Orbe Verde (Respirando) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-heading text-brand-dark dark:text-white mb-4"
          >
            Lo que dicen nuestros <span className="text-brand-blue">clientes</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-brand-blue to-brand-green mx-auto rounded-full"></div>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 relative hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Comilla decorativa */}
              <div className="absolute top-6 right-8 text-brand-blue/10 group-hover:text-brand-blue/30 transition-colors">
                <Quote size={40} />
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed text-sm">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/20" 
                />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark dark:text-white">{item.name}</h4>
                  <p className="text-xs text-brand-blue font-semibold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;