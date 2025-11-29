import React from 'react';
import { Monitor, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NAV_ITEMS } from '../data/constants'; // Reutilizamos los enlaces del menú

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* --- Grid Principal de 3 Columnas (Logo, Enlaces, Redes) --- */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca y Descripción (Ocupa 2 espacios en escritorio) */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="text-brand-blue" size={28} />
              <span className="text-2xl font-bold font-heading">
                Logan<span className="text-brand-blue">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Impulsamos el futuro de tu empresa con soluciones tecnológicas a medida. Calidad, innovación y soporte continuo garantizado.
            </p>
          </div>
          
          {/* Columna 2: Enlaces Rápidos (Dinámicos) */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Síguenos</h4>
            <div className="flex gap-4">
              {/* Botones Sociales con Aria-Label para accesibilidad */}
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all hover:-translate-y-1">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* --- Barra Inferior (Copyright y Legales) --- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LoganTech Solutions. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;