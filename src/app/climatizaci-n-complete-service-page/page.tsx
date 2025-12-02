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

export default function ClimatizacionPage() {
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
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12453d8ac-1764608217596.png",
    alt: 'Instalación de aire acondicionado por conductos en vivienda moderna de Barcelona con sistema inverter eficiente',
    title: 'Aire acondicionado por conductos',
    objective: 'Climatizar toda la vivienda de forma uniforme mediante sistema centralizado con control individual por estancias',
    activities: [
    'Diseño de conductos ocultos',
    'Instalación de máquina exterior',
    'Rejillas de impulsión y retorno',
    'Control por zonas independientes',
    'Puesta en marcha y equilibrado'],

    materials: 'Sistema inverter A+++ Daikin/Mitsubishi, conductos flexibles aislados, rejillas metálicas motorizadas, termostatos WiFi por zona, válvulas de zona'
  },
  {
    image: "https://images.unsplash.com/photo-1730909352933-614f1673ac21",
    alt: 'Sistema de splits de aire acondicionado multi-split en salón contemporáneo con control inteligente',
    title: 'Splits y multi-splits',
    objetivo: 'Instalar sistemas de climatización individuales por habitaciones con máxima eficiencia energética y control independiente',
    activities: [
    'Evaluación de necesidades frigoríficas',
    'Instalación de unidades interiores',
    'Conexión a máquina exterior',
    'Ocultación de tuberías',
    'Configuración y programación'],

    materials: 'Splits inverter 2500-5000 frigorías, tubería frigorífica, gas refrigerante R32 ecológico, canaleta decorativa, mandos WiFi Smart Home'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9472deb-1764608217176.png",
    alt: 'Sistema de calefacción radiante por suelo en reforma integral con control termostático de alta eficiencia',
    title: 'Suelo radiante',
    objetivo: 'Implementar sistema de calefacción por suelo radiante para máximo confort térmico y eficiencia energética superior',
    activities: [
    'Instalación de colectores',
    'Tendido de tubería en serpentín',
    'Aislamiento térmico inferior',
    'Conexión a sistema de generación',
    'Pruebas de presión y funcionamiento'],

    materials: 'Tubería multicapa PE-Xc/Al/PE-Xc 16mm, aislamiento XPS, colectores con caudalímetros, bomba circuladora A, válvulas de zona motorizadas'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d248f3c2-1764608217608.png",
    alt: 'Instalación de sistema de aerotermia de alta eficiencia para climatización y ACS en vivienda unifamiliar',
    title: 'Aerotermia y bomba de calor',
    objetivo: 'Aprovechar energía del aire exterior para climatización y ACS con máxima eficiencia y mínimo consumo eléctrico',
    activities: [
    'Dimensionamiento del sistema',
    'Instalación de bomba de calor',
    'Depósito de ACS con estratificación',
    'Integración con radiadores o fancoils',
    'Control domótico y monitorización'],

    materials: 'Bomba de calor aerotérmica 8-16kW SCOP>4.5, depósito ACS 200-300L, kit solar opcional, válvulas mezcladoras, controlador WiFi integrado'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_135e50a60-1764608222361.png",
    alt: 'Sistema de ventilación mecánica con recuperación de calor para viviendas eficientes en Barcelona',
    title: 'Ventilación mecánica controlada',
    objetivo: 'Garantizar calidad del aire interior mediante ventilación continua con recuperación del calor y filtrado de partículas',
    activities: [
    'Diseño de red de conductos',
    'Instalación de recuperador de calor',
    'Bocas de extracción en húmedas',
    'Impulsión en dormitorios y salón',
    'Ajuste de caudales según CTE'],

    materials: 'Recuperador de calor >90% eficiencia, conductos rígidos y flexibles, filtros F7/F9, difusores regulables, by-pass automático verano'
  },
  {
    image: "https://images.unsplash.com/photo-1570900248397-fb9a00230613",
    alt: 'Sistema de control domótico de climatización con termostatos inteligentes y gestión por smartphone',
    title: 'Control inteligente de clima',
    objetivo: 'Optimizar confort y consumo mediante sistemas de control inteligente con aprendizaje automático y control remoto',
    activities: [
    'Instalación de termostatos inteligentes',
    'Integración con sistemas existentes',
    'Configuración de rutinas automáticas',
    'Sensores de presencia y ventanas',
    'Monitorización de consumos'],

    materials: 'Termostatos Nest/Tado/Netatmo, válvulas termostáticas inteligentes, sensores ambientales, gateway domótico, app móvil integrada'
  }];


  const processSteps: ProcessStepProps[] = [
  {
    number: 1,
    title: 'Estudio de necesidades',
    description: 'Analizamos características de la vivienda, orientación, aislamiento y necesidades de climatización'
  },
  {
    number: 2,
    title: 'Proyecto y presupuesto',
    description: 'Diseñamos el sistema óptimo con cálculos de cargas térmicas y presupuesto detallado cerrado'
  },
  {
    number: 3,
    title: 'Instalación certificada',
    description: 'Ejecutamos la instalación con frigoristas certificados cumpliendo normativa RITE vigente'
  },
  {
    number: 4,
    title: 'Puesta en marcha',
    description: 'Realizamos pruebas, equilibrado del sistema y configuración de parámetros óptimos'
  },
  {
    number: 5,
    title: 'Mantenimiento',
    description: 'Ofrecemos contrato de mantenimiento anual con revisiones preventivas y prioridad en averías'
  }];


  const projects: ProjectProps[] = [
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13166f0cf-1764608225894.png",
    alt: 'Instalación de aire acondicionado por conductos en piso del Eixample de 100m² con control domótico',
    title: 'Conductos Eixample',
    description: '100m² · Sistema centralizado + control WiFi por zonas'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1725abd95-1764608218052.png",
    alt: 'Sistema de aerotermia completo para calefacción, refrigeración y ACS en casa unifamiliar de Sant Cugat',
    title: 'Aerotermia Sant Cugat',
    description: '180m² · Bomba de calor + suelo radiante + ACS'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fb731b15-1764608220336.png",
    alt: 'Instalación de ventilación mecánica con recuperación de calor en vivienda de alta eficiencia',
    title: 'VMC con recuperación',
    description: '90m² · Ventilación + filtrado + recuperación 92%'
  }];


  const faqs: FAQProps[] = [
  {
    question: '¿Qué sistema de climatización es más eficiente?',
    answer: 'La aerotermia con suelo radiante es el sistema más eficiente (SCOP>4), pero requiere inversión inicial alta. Para reformas, el aire acondicionado inverter por conductos ofrece excelente relación eficiencia/coste. Los splits multi-split son ideales cuando no es posible ocultar conductos.'
  },
  {
    question: '¿Cuánto consume un aire acondicionado moderno?',
    answer: 'Un sistema inverter A+++ consume aproximadamente 0.3-0.5€/hora en funcionamiento, hasta 70% menos que modelos antiguos. Con buen aislamiento y uso responsable, el gasto mensual en verano puede ser de 40-80€ para un piso de 80m².'
  },
  {
    question: '¿Es obligatorio el mantenimiento del aire acondicionado?',
    answer: 'Sí, el RITE obliga a mantenimiento anual para sistemas >12kW. Aunque no sea obligatorio para sistemas pequeños, es muy recomendable: mejora eficiencia, previene averías y alarga la vida útil del equipo. Incluye limpieza de filtros, revisión de gas y comprobaciones eléctricas.'
  },
  {
    question: '¿Puedo instalar aire acondicionado en un piso de alquiler?',
    answer: 'Sí, con consentimiento del propietario. Los splits de pared son reversibles y no requieren obra mayor. Si instalas sistema por conductos, es recomendable incluir cláusula en el contrato sobre quién se queda con la instalación al finalizar el alquiler.'
  },
  {
    question: '¿Qué diferencia hay entre aerotermia y aire acondicionado?',
    answer: 'La aerotermia es un sistema de bomba de calor optimizado para calefacción (puede dar también frío) mediante radiadores o suelo radiante. El aire acondicionado es principalmente para refrigerar (puede dar calor) mediante splits o conductos. La aerotermia es más eficiente pero más cara.'
  },
  {
    question: '¿Incluyen los precios el certificado energético?',
    answer: 'Nuestras instalaciones incluyen certificado de instalación y boletín. El certificado energético de la vivienda es un documento aparte que puedes solicitar si mejoras significativamente la eficiencia tras nuestra instalación.'
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
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1a44e4726-1764608216701.png"
            alt="Sistema de climatización moderna con aire acondicionado eficiente en vivienda contemporánea de Barcelona"
            className="w-full h-full object-cover pointer-events-none"
            style={{ animation: 'none', transition: 'none' }} />

        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gray-900/60 backdrop-blur-md px-8 py-6 rounded-3xl shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
              Climatización
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md">
              Confort perfecto todo el año con máxima eficiencia
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sistemas de climatización avanzados
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ofrecemos soluciones completas de climatización adaptadas al clima mediterráneo de Barcelona: aire 
              acondicionado por conductos ocultos, splits inverter de alta eficiencia, aerotermia para máximo 
              ahorro, suelo radiante, y ventilación mecánica con recuperación de calor. Todos nuestros sistemas 
              cumplen RITE y están certificados para máxima eficiencia energética.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Trabajamos exclusivamente con equipos de primeras marcas (Daikin, Mitsubishi, Panasonic) con 
              clasificación energética A+++ y garantía extendida. Instaladores frigoristas certificados, 
              proyectos personalizados con cálculo de cargas térmicas, y contratos de mantenimiento preventivo 
              anuales para garantizar rendimiento óptimo y larga vida útil de tu instalación.
            </p>
          </div>
        </div>
      </section>

      {/* Service Blocks Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Servicios de climatización
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones certificadas de calefacción, refrigeración y ventilación con máxima eficiencia
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
              Proceso de instalación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodología profesional con frigoristas certificados y cumplimiento normativo RITE
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
              Proyectos de climatización
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Instalaciones certificadas de aire acondicionado y climatización en Barcelona
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
              Resolvemos las dudas más comunes sobre climatización
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
            ¿Necesitas climatizar tu vivienda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Solicita tu estudio térmico gratuito y presupuesto sin compromiso
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1e3a5f] px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">

            Solicitar presupuesto de climatización
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
                Especialistas en climatización en Barcelona con instaladores frigoristas certificados.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/reformas-integrales-complete-service-page" className="hover:text-white transition-colors">Reformas Integrales</Link></li>
                <li><Link href="/kitchen-renovation-complete-service-page" className="hover:text-white transition-colors">Cocinas</Link></li>
                <li><Link href="/bathroom-renovation-complete-service-page" className="hover:text-white transition-colors">Baños</Link></li>
                <li><Link href="/climatizaci-n-complete-service-page" className="hover:text-white transition-colors">Climatización</Link></li>
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