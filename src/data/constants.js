// Aquí definimos los datos estáticos
export const NAV_ITEMS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Software', href: '#software' },
  { label: 'Nosotros', href: '#why-us' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export const SERVICES_DATA = [
  { id: 1, title: 'Mantenimiento Hardware', desc: 'Diagnóstico experto y reparación de equipos.', icon: 'laptop', img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Desarrollo Web', desc: 'Sitios corporativos y e-commerce optimizados.', icon: 'globe', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Apps Móviles', desc: 'Aplicaciones nativas para iOS y Android.', icon: 'smartphone', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Consultoría Digital', desc: 'Digitalización de procesos operativos.', icon: 'chart', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Soporte Remoto', desc: 'Resolución inmediata de incidencias.', icon: 'wrench', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Ciberseguridad', desc: 'Protección integral de datos y redes.', icon: 'shieldCheck', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600' },
];

// ... (NAV_ITEMS y SERVICES_DATA se quedan igual)

// En src/data/constants.js

export const SOFTWARE_DATA = [
  { 
    id: 1, 
    name: 'Microsoft 365 Business', 
    cat: 'Productividad', 
    desc: 'La suite completa: Word, Excel, Teams y herramientas de colaboración en la nube.', 
    // Imagen nueva: Entorno de oficina moderno con laptops
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 2, 
    name: 'Adobe Creative Cloud', 
    cat: 'Diseño y Creatividad', 
    desc: 'Potencia tu equipo creativo con Photoshop, Illustrator, Premiere Pro y más.', 
    // Imagen nueva: Mesa de diseñador gráfico con tableta y bocetos
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 3, 
    name: 'AutoDesk AutoCAD', 
    cat: 'Ingeniería y Arquitectura', 
    desc: 'Software líder mundial para diseño CAD 2D y modelado 3D preciso.', 
    // Imagen nueva: Planos de arquitectura y herramientas de medición
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 4, 
    name: 'Soluciones de Ciberseguridad', 
    cat: 'Seguridad Corporativa', 
    desc: 'Licencias empresariales de ESET, Kaspersky o Bitdefender para proteger tu red.', 
    // Imagen nueva: Código binario y candado digital
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
];

// ... al final del archivo constants.js

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'E-commerce Moda Urbana',
    category: 'Desarrollo Web',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 2,
    title: 'App de Gestión Logística',
    category: 'Aplicación Móvil',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 3,
    title: 'Dashboard Financiero',
    category: 'Software a Medida',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    link: '#'
  }
];