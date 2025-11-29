import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

const WhyChooseUs = () => {
  // Datos de características
  const features = [
    { icon: 'zap', title: 'Rapidez Garantizada', desc: 'Tiempos de respuesta optimizados para no detener tu operación.' },
    { icon: 'shield', title: 'Máxima Seguridad', desc: 'Altos estándares de protección de datos en cada proyecto.' },
    { icon: 'clock', title: 'Soporte 24/7', desc: 'Equipo técnico disponible en cualquier momento.' },
    { icon: 'award', title: 'Calidad Profesional', desc: 'Expertos certificados comprometidos con la excelencia.' },
  ];

  return (
    <section id="why-us" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      
      {/* =========================================
          FONDO ANIMADO (ATMÓSFERA TECH)
         ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. Grid Digital Sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* 2. Orbe Azul (Respirando) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px]"
        />

        {/* 3. Orbe Verde (Respirando) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Texto y Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            ¿Por qué elegir <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              LoganTech
            </span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            No solo escribimos código; construimos soluciones que escalan. Combinamos experiencia técnica con una visión de negocio centrada en resultados reales.
          </p>
          
          {/* Estadísticas */}
          <div className="flex gap-8 border-t border-white/10 pt-8">
            <div>
              <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-4xl font-bold text-brand-green block mb-1"
              >
                98%
              </motion.span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Clientes Felices</span>
            </div>
            <div className="w-px bg-white/10 h-12"></div>
            <div>
              <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-4xl font-bold text-brand-blue block mb-1"
              >
                +5
              </motion.span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Años Exp.</span>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha: Tarjetas Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-brand-blue/30 transition-all group hover:-translate-y-1"
            >
              <div className="mb-4 text-brand-green group-hover:text-brand-blue transition-colors group-hover:scale-110 transform origin-left duration-300">
                <Icon name={f.icon} size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-blue transition-colors">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;