# LoganTech Solutions - Sitio Web Corporativo

Este repositorio contiene el código fuente del sitio web oficial de **LoganTech Solutions**, una empresa dedicada al desarrollo de software, mantenimiento de hardware y consultoría tecnológica.

🔗 **Sitio en vivo:** [https://johancodex.org](https://johancodex.org)

![LoganTech Preview](public/og-image.jpg)

## 🚀 Características

- **Diseño Moderno:** Interfaz "Cyberpunk/Tech" con modo oscuro y claro.
- **Animaciones:** Efectos suaves de entrada, scroll y elementos flotantes usando _Framer Motion_.
- **Alto Rendimiento:** Construido con _Vite_ para una carga ultrarrápida.
- **Formulario Funcional:** Integración con _EmailJS_ para envío de correos sin backend.
- **SEO Optimizado:** Metaetiquetas configuradas para Google y Redes Sociales.

## 🛠️ Tecnologías Usadas

- [React](https://reactjs.org/) - Librería de UI
- [Vite](https://vitejs.dev/) - Entorno de desarrollo
- [Tailwind CSS](https://tailwindcss.com/) - Estilos y diseño responsivo
- [Framer Motion](https://www.framer.com/motion/) - Animaciones complejas
- [Lucide React](https://lucide.dev/) - Iconografía
- [EmailJS](https://www.emailjs.com/) - Servicio de envío de emails

## 📦 Instalación y Despliegue Local

Si quieres clonar y correr este proyecto en tu máquina:

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/TU_USUARIO/logantech-web.git](https://github.com/TU_USUARIO/logantech-web.git)
    cd logantech-web
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz y agrega tus credenciales de EmailJS:

    ```env
    VITE_EMAILJS_SERVICE_ID=tu_service_id
    VITE_EMAILJS_TEMPLATE_ID=tu_template_id
    VITE_EMAILJS_PUBLIC_KEY=tu_public_key
    ```

4.  **Correr el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 📄 Estructura del Proyecto

- `/src/components`: Componentes reutilizables (Navbar, Hero, etc.)
- `/src/hooks`: Lógica personalizada (useTheme, useScroll)
- `/src/data`: Datos estáticos (Textos, listas)
- `/public`: Archivos estáticos (Imágenes, favicon)

## 📝 Licencia

Este proyecto es propiedad de **LoganTech Solutions**.
