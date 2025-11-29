import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });

  // Manejo de inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // 1. OBTENER LAS VARIABLES DE ENTORNO REALES
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 2. ENVIAR EL CORREO REAL
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          // Éxito
          setStatus('success');
          setFormData({ user_name: '', user_email: '', message: '' }); // Limpiar campos
          setTimeout(() => setStatus('idle'), 5000); // Volver al estado inicial
      }, (error) => {
          // Error
          console.error("Error al enviar correo:", error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      
      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,119,182,0.05)_120deg,transparent_180deg,rgba(0,166,118,0.05)_300deg,transparent_360deg)] opacity-60 dark:opacity-30"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-brand-blue/20 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 w-24 h-24 border-2 border-brand-green/20 rounded-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16">
        
        {/* INFO CONTACTO */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-brand-dark dark:text-white leading-tight">
            Hablemos de tu próximo <span className="text-brand-blue">proyecto</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
            Estamos listos para escuchar tus ideas y convertirlas en realidad tecnológica.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-brand-blue/10 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark dark:text-white text-lg">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">contacto@logantech.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-brand-blue/10 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark dark:text-white text-lg">Teléfono</h4>
                <p className="text-gray-600 dark:text-gray-400">+51 970 551 046</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-brand-blue/10 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark dark:text-white text-lg">Ubicación</h4>
                <p className="text-gray-600 dark:text-gray-400">Ciudad de Lima, Perú</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORMULARIO */}
        <motion.div
           initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
           className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full pointer-events-none"></div>

          <AnimatePresence mode='wait'>
            {status === 'success' ? (
              <motion.div 
                key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="text-center py-12 flex flex-col items-center justify-center h-full"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600">
                   <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-500 dark:text-gray-400">Gracias por escribirnos. Te responderemos pronto.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div 
                key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <AlertCircle size={64} className="text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-dark dark:text-white">Algo salió mal</h3>
                <p className="text-gray-500 mt-2">Por favor intenta de nuevo más tarde.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 text-brand-blue font-bold hover:underline">Intentar de nuevo</button>
              </motion.div>
            ) : (
              <motion.form 
                ref={formRef} key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onSubmit={handleSubmit} className="space-y-6 relative z-10"
              >
                <div>
                  <label className="block text-sm font-semibold text-brand-dark dark:text-gray-300 mb-2">Nombre</label>
                  <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900/50 text-brand-dark dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                  />
                </div>
                <div>
                   <label className="block text-sm font-semibold text-brand-dark dark:text-gray-300 mb-2">Email</label>
                  <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required placeholder="ejemplo@correo.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900/50 text-brand-dark dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                  />
                </div>
                <div>
                   <label className="block text-sm font-semibold text-brand-dark dark:text-gray-300 mb-2">Mensaje</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} required placeholder="¿Cómo podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900/50 text-brand-dark dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" disabled={status === 'submitting'}
                  className="w-full py-4 bg-brand-green hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (<>Enviando... <Loader2 className="animate-spin" size={20} /></>) : (<>Enviar Mensaje <Send size={20} /></>)}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;