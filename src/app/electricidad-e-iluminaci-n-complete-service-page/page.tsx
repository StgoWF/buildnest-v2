'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ServiceBlockProps {
  image: string;
  alt: string;
  title: string;
  objective: string;
  activities: string[];
  materials: string;
}

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

interface ProjectProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface FAQProps {
  question: string;
  answer: string;
}

interface ServiceMenuItem {
  name: string;
  href: string;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ image, alt, title, objective, activities, materials }) =>
<div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
      <div className="relative h-64 lg:h-auto">
        <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
          <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wide mb-3">Objetivo</h4>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{objective}</p>
        </div>
        
        <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
          <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wide mb-3">Actividades</h4>
          <ul className="space-y-2">
            {activities.map((activity, index) =>
          <li key={index} className="text-gray-600 text-sm flex items-start">
                <span className="text-[#1e3a5f] mr-2 font-bold">•</span>
                <span>{activity}</span>
              </li>
          )}
          </ul>
        </div>
        
        <div className="p-6">
          <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wide mb-3">Materiales</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{materials}</p>
        </div>
      </div>
    </div>
  </div>;


const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) =>
<div className="flex flex-col items-center text-center p-6">
    <div className="w-16 h-16 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-2xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>;


const ProjectCard: React.FC<ProjectProps> = ({ image, alt, title, description }) =>
<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-56 w-full">
      <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>;


const FAQItem: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left">

        <h3 className="text-lg font-bold text-gray-900 pr-4">{question}</h3>
        <svg
          className={`w-5 h-5 text-[#1e3a5f] transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen &&
      <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>
      }
    </div>);

};

export default function ElectricidadIluminacionPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  let servicesTimeout: NodeJS.Timeout | null = null;

  const handleServicesEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const services: ServiceMenuItem[] = [
  { name: 'Reformas integrales', href: '/reformas-integrales-complete-service-page' },
  { name: 'Cocinas', href: '/kitchen-renovation-complete-service-page' },
  { name: 'Baños', href: '/bathroom-renovation-complete-service-page' },
  { name: 'Carpintería a medida', href: '/carpinter-a-a-medida-complete-service-page' },
  { name: 'Pintura y acabados', href: '/pintura-y-acabados-complete-service-page' },
  { name: 'Electricidad e iluminación', href: '/electricidad-e-iluminaci-n-complete-service-page' },
  { name: 'Climatización', href: '/climatizaci-n-complete-service-page' }];


  const serviceBlocks: ServiceBlockProps[] = [
  {
    image: "https://images.unsplash.com/photo-1593612388901-098aa6b17cc1",
    alt: 'Cuadro eléctrico moderno con sistemas de protección y diferenciales en vivienda de Barcelona',
    title: 'Renovación de instalación eléctrica',
    objective: 'Actualizar completamente la instalación eléctrica según normativa REBT vigente garantizando seguridad y eficiencia',
    activities: [
    'Reemplazo de cableado antiguo',
    'Actualización de cuadro eléctrico',
    'Instalación de diferenciales y magnetotérmicos',
    'Tomas de corriente con toma tierra',
    'Certificación e inspección final'],

    materials: 'Cableado libre de halógenos H07Z1-K, cuadro eléctrico modular Schneider/ABB, diferenciales 30mA, magnetotérmicos curva C, mecanismos Simon 82/100'
  },
  {
    image: "https://images.unsplash.com/photo-1669301048918-6ca9a3cd39c1",
    alt: 'Sistema de iluminación LED moderna con control inteligente en salón contemporáneo de Barcelona',
    title: 'Iluminación LED y diseño luminotécnico',
    objective: 'Diseñar e implementar sistemas de iluminación LED eficientes con control de ambientes y ahorro energético superior al 70%',
    activities: [
    'Estudio luminotécnico por estancia',
    'Instalación de downlights LED',
    'Tiras LED para iluminación indirecta',
    'Reguladores y sistemas dimmer',
    'Programación de escenas lumínicas'],

    materials: 'Downlights LED empotrables 3000K-4000K regulables, tiras LED RGB+W IP20/IP65, drivers LED, reguladores táctiles, transformadores 12V/24V'
  },
  {
    image: "https://images.unsplash.com/photo-1707733260992-73ff6dbed163",
    alt: 'Sistema domótico de control inteligente del hogar con pantalla táctil y automatización de iluminación',
    title: 'Domótica y hogar inteligente',
    objetivo: 'Integrar sistemas domóticos para control centralizado de iluminación, persianas, climatización y seguridad desde smartphone',
    activities: [
    'Instalación de central domótica',
    'Sensores de presencia y luminosidad',
    'Control motorizado de persianas',
    'Integración con asistentes de voz',
    'Configuración de escenarios automáticos'],

    materials: 'Central KNX o sistema wireless Z-Wave, sensores inteligentes, actuadores para persianas, termostatos WiFi, cámaras IP, app móvil integrada'
  },
  {
    image: "https://images.unsplash.com/photo-1722434204765-b5aaf0dfcf12",
    alt: 'Instalación de puntos de luz exteriores y focos LED en jardín y terraza de vivienda en Barcelona',
    title: 'Iluminación exterior y seguridad',
    objetivo: 'Diseñar iluminación exterior funcional y decorativa con sistemas de seguridad integrados y detección de presencia',
    activities: [
    'Focos LED con detección de movimiento',
    'Iluminación de jardines y terrazas',
    'Balizas y guías de camino',
    'Proyectores para fachadas',
    'Sistemas de seguridad con luz disuasoria'],

    materials: 'Focos LED IP65 con sensor PIR, balizas LED empotrables IP67, proyectores LED 20W-50W, controladores temporizados, cableado subterráneo RZ1-K'
  },
  {
    image: "https://images.unsplash.com/photo-1508110590923-798676a6a021",
    alt: 'Instalación de puntos de recarga para vehículo eléctrico en garaje comunitario de Barcelona',
    title: 'Puntos de recarga vehículo eléctrico',
    objetivo: 'Instalar puntos de recarga para vehículos eléctricos en garajes particulares o comunitarios con gestión inteligente de carga',
    activities: [
    'Estudio de potencia disponible',
    'Instalación de wallbox',
    'Conexión a cuadro eléctrico',
    'Sistema de gestión de carga',
    'Certificación e inspección'],

    materials: 'Wallbox 7.4kW-22kW monofásico/trifásico, cable tipo 2, protecciones específicas para VE, magnetotérmico y diferencial tipo B, sistema de gestión WiFi'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc9bd74b-1764608219125.png",
    alt: 'Inspección y certificación de instalación eléctrica con equipos de medición profesionales',
    title: 'Certificaciones e inspecciones',
    objetivo: 'Realizar inspecciones reglamentarias y emitir certificados oficiales de instalaciones eléctricas según normativa vigente',
    activities: [
    'Inspección visual completa',
    'Mediciones de continuidad y aislamiento',
    'Pruebas de diferenciales',
    'Verificación de toma de tierra',
    'Emisión de boletín eléctrico'],

    materials: 'Testers digitales, medidores de continuidad y aislamiento, analizador de red, luxómetros, equipos certificados para mediciones reglamentarias'
  }];


  const processSteps: ProcessStepProps[] = [
  {
    number: 1,
    title: 'Inspección y diagnóstico',
    description: 'Evaluamos el estado de la instalación eléctrica actual e identificamos necesidades y mejoras'
  },
  {
    number: 2,
    title: 'Diseño y presupuesto',
    description: 'Elaboramos proyecto técnico con esquema unifilar, memoria y presupuesto detallado cerrado'
  },
  {
    number: 3,
    title: 'Instalación certificada',
    description: 'Ejecutamos los trabajos con electricistas certificados cumpliendo todos los estándares de seguridad'
  },
  {
    number: 4,
    title: 'Pruebas y certificación',
    description: 'Realizamos pruebas reglamentarias y emitimos boletín eléctrico oficial para legalización'
  },
  {
    number: 5,
    title: 'Garantía y soporte',
    description: 'Ofrecemos 5 años de garantía y servicio técnico para cualquier incidencia o modificación'
  }];


  const projects: ProjectProps[] = [
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17c05d5a5-1764608218801.png",
    alt: 'Renovación completa de instalación eléctrica en piso del Eixample con iluminación LED integrada',
    title: 'Renovación eléctrica Eixample',
    description: '95m² · Instalación completa + LED + domótica básica'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19883a4dc-1764608216680.png",
    alt: 'Proyecto de iluminación LED inteligente y sistema domótico en apartamento moderno de Gràcia',
    title: 'Iluminación inteligente Gràcia',
    description: '80m² · Sistema LED regulable + control por voz'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8055b1d-1764608218030.png",
    alt: 'Instalación de punto de recarga para vehículo eléctrico en garaje comunitario de Sant Cugat',
    title: 'Punto recarga VE Sant Cugat',
    description: 'Wallbox 11kW trifásico + gestión inteligente'
  }];


  const faqs: FAQProps[] = [
  {
    question: '¿Cada cuánto tiempo debo revisar la instalación eléctrica?',
    answer: 'Se recomienda una revisión profesional cada 10 años en viviendas, o cada 5 años en instalaciones antiguas. Si tu vivienda tiene más de 25 años sin actualizar, es prioritario hacer una inspección completa.'
  },
  {
    question: '¿Qué ahorro supone cambiar a iluminación LED?',
    answer: 'El cambio a LED puede reducir el consumo de iluminación entre 70-80%. En una vivienda media de Barcelona, el ahorro anual puede superar los 200€, con una amortización de la inversión en 2-3 años.'
  },
  {
    question: '¿Es obligatorio el boletín eléctrico?',
    answer: 'Sí, cualquier modificación sustancial de la instalación eléctrica requiere emitir un nuevo boletín. Es obligatorio para compraventa, alquileres y para dar de alta nuevos suministros eléctricos.'
  },
  {
    question: '¿Puedo instalar un wallbox en mi plaza de garaje?',
    answer: 'Sí, tanto en garajes particulares como comunitarios. En comunidades se requiere notificación previa, pero no pueden impedir la instalación según la Ley de Propiedad Horizontal modificada en 2019.'
  },
  {
    question: '¿Qué potencia eléctrica necesito para una vivienda?',
    answer: 'Para viviendas de 70-100m² con electrodomésticos habituales, se recomienda 5.75kW. Si tienes vitrocerámica, aire acondicionado o prevés instalar wallbox, es recomendable 9.2kW o superior.'
  },
  {
    question: '¿Ofrecen servicio de mantenimiento eléctrico?',
    answer: 'Sí, ofrecemos contratos de mantenimiento preventivo con revisiones programadas, atención prioritaria de averías y descuentos en reparaciones. Incluye revisión anual completa con informe técnico.'
  }];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <AppImage
                src="/assets/images/buildnest-1764591131149.png"
                alt="Buildnest logo featuring navy blue hexagonal house with protective elements"
                className="h-10 w-10 object-contain" />

              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1e3a5f]">Buildnest</span>
                <span className="text-xs text-gray-500 tracking-wide uppercase">Construcción & Reformas</span>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/servicios-seleccion" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Inicio
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Quiénes somos
              </Link>
              
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}>

                <button className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium flex items-center gap-1">
                  Servicios
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen &&
                <div
                  className="absolute left-0 pt-2 w-64"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}>

                    <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      {services.map((service, index) =>
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] transition-colors text-sm">

                          {service.name}
                        </Link>
                    )}
                    </div>
                  </div>
                }
              </div>

              <Link href="/portfolio-projects" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Galería de reformas
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Contacto
              </Link>
              <Link
                href="/contact"
                className="bg-[#1e3a5f] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#2d5a8f] transition-colors shadow-md">

                Pide tu presupuesto
              </Link>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ?
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

          {isMobileMenuOpen &&
          <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                <Link href="/servicios-seleccion" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Inicio
                </Link>
                <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium py-2">
                  Quiénes somos
                </Link>
                
                <div>
                  <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium py-2 flex items-center justify-between">

                    Servicios
                    <svg className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileServicesOpen &&
                <div className="pl-4 mt-2 space-y-2">
                      {services.map((service, index) =>
                  <Link
                    key={index}
                    href={service.href}
                    className="block text-gray-600 hover:text-[#1e3a5f] transition-colors py-2 text-sm">

                          {service.name}
                        </Link>
                  )}
                    </div>
                }
                </div>

                <Link href="/portfolio-projects" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium py-2">
                  Galería de reformas
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium py-2">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium py-2">
                  Contacto
                </Link>
                <Link
                href="/contact"
                className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2d5a8f] transition-colors text-center shadow-md mt-2">

                  Pide tu presupuesto
                </Link>
              </div>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_13004893e-1764608225902.png"
            alt="Instalación eléctrica moderna y sistema de iluminación LED eficiente en vivienda de Barcelona"
            className="w-full h-full object-cover pointer-events-none"
            style={{ animation: 'none', transition: 'none' }} />

        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gray-900/60 backdrop-blur-md px-8 py-6 rounded-3xl shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
              Electricidad e Iluminación
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md">
              Seguridad y eficiencia energética para tu hogar
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Instalaciones eléctricas seguras y eficientes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nuestro servicio de electricidad e iluminación cubre desde la renovación completa de instalaciones 
              eléctricas hasta el diseño de sistemas de iluminación LED inteligente. Garantizamos instalaciones 
              seguras según el Reglamento Electrotécnico de Baja Tensión (REBT), con materiales certificados y 
              emisión de boletines eléctricos oficiales.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Especializados en domótica, iluminación LED de bajo consumo, puntos de recarga para vehículo eléctrico 
              y sistemas de control inteligente. Todos nuestros proyectos incluyen certificación oficial y garantía 
              extendida de 5 años en instalación y materiales.
            </p>
          </div>
        </div>
      </section>

      {/* Service Blocks Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Servicios de electricidad e iluminación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones completas certificadas con garantía oficial y cumplimiento normativo REBT
            </p>
          </div>
          {serviceBlocks.map((block, index) =>
          <ServiceBlock key={index} {...block} />
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proceso de trabajo certificado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodología profesional con electricistas certificados y emisión de boletines oficiales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) =>
            <ProcessStep key={index} {...step} />
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proyectos de electricidad e iluminación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Instalaciones eléctricas certificadas y sistemas de iluminación LED en Barcelona
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) =>
            <ProjectCard key={index} {...project} />
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre electricidad e iluminación
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            {faqs.map((faq, index) =>
            <FAQItem key={index} {...faq} />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Necesitas renovar tu instalación eléctrica?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Solicita tu inspección gratuita y presupuesto sin compromiso
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1e3a5f] px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">

            Solicitar presupuesto de electricidad
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AppImage
                  src="/assets/images/buildnest-1764591131149.png"
                  alt="Buildnest logo"
                  className="h-8 w-8 object-contain" />

                <h3 className="text-white text-lg font-bold">Buildnest</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Especialistas en electricidad e iluminación en Barcelona con electricistas certificados.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/reformas-integrales-complete-service-page" className="hover:text-white transition-colors">Reformas Integrales</Link></li>
                <li><Link href="/kitchen-renovation-complete-service-page" className="hover:text-white transition-colors">Cocinas</Link></li>
                <li><Link href="/bathroom-renovation-complete-service-page" className="hover:text-white transition-colors">Baños</Link></li>
                <li><Link href="/electricidad-e-iluminaci-n-complete-service-page" className="hover:text-white transition-colors">Electricidad</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>Barcelona, España</li>
                <li>Tel: +34 123 456 789</li>
                <li>info@buildnest.es</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Horario</h4>
              <ul className="space-y-2 text-sm">
                <li>Lunes - Viernes: 9:00 - 18:00</li>
                <li>Sábado: 10:00 - 14:00</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Buildnest. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>);

}