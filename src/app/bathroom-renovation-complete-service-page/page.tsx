'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ServicePillar {
  icon: string;
  title: string;
  description: string;
}

interface ServiceInclusion {
  title: string;
  description: string;
}

interface BathroomTypeProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface DetailedBlockProps {
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

interface BeforeAfterProject {
  id: string;
  title: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
}

interface ProjectProps {
  image: string;
  alt: string;
  title: string;
  style: string;
}

interface FAQProps {
  question: string;
  answer: string;
}

const BathroomTypeCard: React.FC<BathroomTypeProps> = ({ image, alt, title, description }) =>
<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-56 w-full">
      <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>;


const DetailedBlock: React.FC<DetailedBlockProps> = ({ title, objective, activities, materials }) =>
<div className="bg-white rounded-lg shadow-md p-8 mb-6">
    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 className="font-bold text-gray-900 mb-2 text-lg">Objetivo</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{objective}</p>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-2 text-lg">Actividades</h4>
        <ul className="space-y-1">
          {activities.map((activity, index) =>
        <li key={index} className="text-gray-600 text-sm flex items-start">
              <span className="text-[#1e3a5f] mr-2">•</span>
              <span>{activity}</span>
            </li>
        )}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-2 text-lg">Materiales</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{materials}</p>
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


const ProjectCard: React.FC<ProjectProps> = ({ image, alt, title, style }) =>
<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-56 w-full">
      <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">Estilo: {style}</p>
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
      {isOpen && <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>}
    </div>);

};

export default function BathroomRenovationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
  { name: 'Reformas integrales', href: '/reformas-integrales-complete-service-page' },
  { name: 'Cocinas', href: '/individual-service-kitchen-renovation' },
  { name: 'Baños', href: '/bathroom-renovation-complete-service-page' },
  { name: 'Carpintería a medida', href: '/carpinter-a-a-medida-complete-service-page' },
  { name: 'Pintura y acabados', href: '/pintura-y-acabados-complete-service-page' },
  { name: 'Electricidad e iluminación', href: '/services-overview' },
  { name: 'Climatización', href: '/services-overview' }];


  const serviceInclusions: ServiceInclusion[] = [
  { title: 'Impermeabilización profesional', description: 'Sistemas avanzados contra filtraciones y humedades' },
  { title: 'Instalación de fontanería completa', description: 'Tuberías, sanitarios y grifería de calidad' },
  { title: 'Revestimientos premium', description: 'Azulejos, porcelánicos y acabados de lujo' },
  { title: 'Ventilación y extractores', description: 'Sistemas de renovación de aire certificados' },
  { title: 'Iluminación especializada', description: 'LED resistente a la humedad con múltiples niveles' },
  { title: 'Muebles y accesorios a medida', description: 'Diseño personalizado con almacenaje optimizado' }];


  const servicePillars: ServicePillar[] = [
  {
    icon: '💧',
    title: 'Impermeabilización experta',
    description: 'Especialistas en sistemas de impermeabilización avanzados. Garantizamos protección total contra filtraciones con materiales de última generación.'
  },
  {
    icon: '🛁',
    title: 'Instalaciones certificadas',
    description: 'Fontanería y electricidad según normativa vigente. Instalaciones profesionales con materiales premium y garantía extendida.'
  },
  {
    icon: '✨',
    title: 'Acabados de calidad',
    description: 'Revestimientos de alta gama, sanitarios premium y accesorios de diseño. Selección cuidada de materiales resistentes y elegantes.'
  },
  {
    icon: '🎯',
    title: 'Optimización de espacio',
    description: 'Aprovechamos cada centímetro con soluciones inteligentes. Diseños funcionales que maximizan almacenaje y comodidad.'
  }];


  const bathroomTypes: BathroomTypeProps[] = [
  {
    image: "https://images.unsplash.com/photo-1721824291421-1ba1dd2dc896",
    alt: 'Baño completo con ducha, sanitarios modernos y revestimientos elegantes en apartamento de Barcelona',
    title: 'Baños completos',
    description: 'Reforma integral con ducha, sanitarios, lavabo y almacenaje. Diseño funcional optimizado para el uso diario con acabados premium.'
  },
  {
    image: "https://images.unsplash.com/photo-1722604675813-1b547db666c9",
    alt: 'Baño pequeño optimizado con ducha, mampara de cristal y distribución inteligente en piso reducido',
    title: 'Baños pequeños',
    description: 'Soluciones inteligentes para espacios reducidos. Aprovechamiento vertical, sanitarios compactos y diseño que amplía visualmente.'
  },
  {
    image: "https://images.unsplash.com/photo-1631889477858-95b7aa36d727",
    alt: 'Baño principal de lujo con bañera exenta, doble lavabo y materiales premium de diseño',
    title: 'Baños principales',
    description: 'Suites de baño con bañera, doble lavabo y espacios amplios. Diseño elegante con materiales de alta gama y confort superior.'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1417b5736-1764606975225.png",
    alt: 'Baño accesible con barras de apoyo, ducha a ras de suelo y espacio amplio para movilidad',
    title: 'Baños accesibles',
    description: 'Adaptación para movilidad reducida. Duchas a ras de suelo, barras de apoyo y distribución que facilita el acceso seguro.'
  }];


  const detailedBlocks: DetailedBlockProps[] = [
  {
    title: 'Demolición e impermeabilización',
    objective: 'Preparar el espacio con sistema de impermeabilización profesional que garantice protección contra humedades',
    activities: [
    'Desmontaje de sanitarios y revestimientos',
    'Revisión de instalaciones existentes',
    'Aplicación de lámina impermeabilizante',
    'Sellado de juntas y esquinas críticas'],

    materials: 'Láminas asfálticas de alta densidad, selladores elásticos, morteros impermeabilizantes, telas asfálticas reforzadas'
  },
  {
    title: 'Fontanería y saneamiento',
    objective: 'Renovar completamente las instalaciones de agua y desagüe con materiales certificados y normativa actual',
    activities: [
    'Sustitución de tuberías de agua',
    'Instalación de desagües y sifones',
    'Conexión de sanitarios y grifería',
    'Pruebas de presión y estanqueidad'],

    materials: 'Tuberías PEX multicapa, desagües PVC silenciosos, llaves de paso certificadas, grifería termostática Grohe/Roca'
  },
  {
    title: 'Electricidad y ventilación',
    objetivo: 'Instalar sistema eléctrico seguro y ventilación adecuada para renovación de aire y control de humedad',
    activities: [
    'Cableado eléctrico estanco',
    'Instalación de puntos de luz LED',
    'Montaje de extractor de aire',
    'Conexión de espejo con iluminación'],

    materials: 'Cableado IP44 para zonas húmedas, downlights LED estancos, extractores de aire silenciosos, mecanismos Niessen/Simon'
  },
  {
    title: 'Revestimientos y acabados',
    objetivo: 'Aplicar revestimientos de calidad en suelo y paredes con diseño elegante y resistencia a la humedad',
    activities: [
    'Colocación de azulejos y porcelánico',
    'Instalación de plato de ducha o bañera',
    'Rejuntado con mortero antimoho',
    'Colocación de zócalos y perfiles'],

    materials: 'Porcelánico rectificado 60x60, azulejos hasta el techo, platos de ducha de resina, perfiles de acero inoxidable'
  },
  {
    title: 'Sanitarios y muebles',
    objetivo: 'Instalar sanitarios de diseño, muebles de baño y accesorios con acabado profesional',
    activities: [
    'Montaje de sanitarios suspendidos',
    'Instalación de mueble y lavabo',
    'Colocación de mamparas y espejos',
    'Instalación de accesorios y toalleros'],

    materials: 'Inodoro suspendido Roca/Geberit, lavabos sobre encimera, mamparas de cristal templado 8mm, accesorios cromados'
  }];


  const processSteps: ProcessStepProps[] = [
  {
    number: 1,
    title: 'Visita técnica',
    description: 'Evaluamos el estado actual, medimos el espacio y detectamos instalaciones antiguas o problemas de humedad'
  },
  {
    number: 2,
    title: 'Diseño 3D personalizado',
    description: 'Creamos diseño 3D del baño con distribución optimizada y seleccionas materiales, colores y acabados'
  },
  {
    number: 3,
    title: 'Presupuesto detallado',
    description: 'Presupuesto cerrado con todos los materiales especificados, plazos claros y sin sorpresas finales'
  },
  {
    number: 4,
    title: 'Reforma y construcción',
    description: 'Ejecutamos la obra con seguimiento diario, impermeabilización profesional y acabados de calidad'
  },
  {
    number: 5,
    title: 'Entrega con garantía',
    description: 'Baño completo y listo para usar con garantía de impermeabilización de 10 años incluida'
  }];


  const beforeAfterProjects: BeforeAfterProject[] = [
  {
    id: '1',
    title: 'Baño Moderno Barcelona',
    beforeImage: "https://images.unsplash.com/photo-1680605237049-bfd86e8ffcd1",
    beforeAlt: 'Baño antiguo con azulejos desgastados y sanitarios obsoletos antes de la reforma',
    afterImage: "https://images.unsplash.com/photo-1721396184868-62d7e9a2f868",
    afterAlt: 'Baño moderno renovado con ducha espaciosa, revestimientos elegantes y acabados premium'
  },
  {
    id: '2',
    title: 'Renovación Baño Eixample',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba2cc578-1764606975899.png",
    beforeAlt: 'Baño pequeño con distribución obsoleta y humedad visible antes de reformar',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd8d0298-1764606973198.png",
    afterAlt: 'Baño pequeño funcional con ducha optimizada y materiales de calidad después de la reforma'
  }];


  const projects: ProjectProps[] = [
  {
    image: "https://images.unsplash.com/photo-1597496886833-7efcf36d5c26",
    alt: 'Proyecto de baño con diseño nórdico minimalista en Barcelona, colores claros y madera natural',
    title: 'Baño nórdico en Eixample',
    style: 'Nórdico'
  },
  {
    image: "https://images.unsplash.com/photo-1585145868197-46c43674375b",
    alt: 'Baño contemporáneo con acabados oscuros en Gràcia, sanitarios suspendidos y grifería negra mate',
    title: 'Baño moderno en Gràcia',
    style: 'Contemporáneo'
  },
  {
    image: "https://images.unsplash.com/photo-1721523262912-a5f56e00fd2b",
    alt: 'Baño de estilo clásico renovado con detalles elegantes, mármol y accesorios dorados',
    title: 'Baño clásico renovado',
    style: 'Clásico'
  }];


  const faqs: FAQProps[] = [
  {
    question: '¿Cuánto tarda la reforma de un baño?',
    answer: 'Una reforma completa de baño típica dura entre 2 y 3 semanas. Si incluye trabajos de impermeabilización importantes o cambios estructurales, puede extenderse hasta 4 semanas. Te proporcionamos un cronograma detallado antes de comenzar la obra.'
  },
  {
    question: '¿Cómo garantizan la impermeabilización?',
    answer: 'Aplicamos sistemas de impermeabilización multicapa con láminas asfálticas, selladores elásticos y morteros específicos. Realizamos pruebas de estanqueidad antes de alicatar. Ofrecemos garantía de 10 años en impermeabilización contra filtraciones.'
  },
  {
    question: '¿Puedo elegir los materiales?',
    answer: 'Sí, completamente. Presentamos opciones en diferentes rangos: azulejos (porcelánico, cerámico, piedra natural), sanitarios (Roca, Ideal Standard, Duravit), grifería (Grohe, Roca, Hansgrohe) y mamparas. Tú decides según tu presupuesto y estilo preferido.'
  },
  {
    question: '¿Es posible cambiar bañera por ducha?',
    answer: 'Sí, es una de las reformas más solicitadas. Sustituimos la bañera por plato de ducha a ras de suelo o elevado, según preferencias. Incluye adaptación de fontanería, impermeabilización y acabados completos. Ideal para ganar espacio y accesibilidad.'
  }];


  return (
    <div className="min-h-screen bg-white">
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/servicios-seleccion" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Inicio
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Quiénes somos
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}>

                <button className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium flex items-center gap-1">
                  Servicios
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen &&
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    {services.map((service, index) =>
                  <Link
                    key={index}
                    href={service.href}
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] transition-colors text-sm">

                        {service.name}
                      </Link>
                  )}
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

            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            src="https://images.unsplash.com/photo-1648631478953-1334ce24a24c"
            alt="Baño moderno premium con ducha espaciosa, iluminación elegante, acabados de lujo y diseño sofisticado"
            className="w-full h-full object-cover pointer-events-none"
            style={{ animation: 'none', transition: 'none' }} />

        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gray-900/60 backdrop-blur-md px-8 py-6 rounded-3xl shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
              Baños que Transforman Tu Espacio Personal
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md">
              Diseño, funcionalidad y confort. Reformas de baño con impermeabilización garantizada y acabados premium.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              ¿Qué incluye una reforma de baño?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed max-w-3xl mx-auto">
              Nuestro servicio integral transforma tu baño en un espacio funcional, elegante y perfectamente adaptado 
              a tus necesidades. Garantizamos impermeabilización profesional y acabados de alta calidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceInclusions?.map((inclusion, index) =>
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">

                  <h3 className="font-bold text-xl mb-3 text-gray-800">
                    {inclusion?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {inclusion?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Service Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              ¿Por qué elegir Buildnest para tu baño?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePillars?.map((pillar, index) =>
              <div key={index} className="text-center group">
                  <div className="mb-6 text-6xl transform group-hover:scale-110 transition-transform duration-300">
                    {pillar?.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800">
                    {pillar?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bathroom Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipos de reformas de baño
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Adaptamos el diseño a tus necesidades específicas y al espacio disponible
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bathroomTypes.map((type, index) =>
              <BathroomTypeCard key={index} {...type} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Detailed Service Blocks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bloques detallados del servicio
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Desglose completo de cada fase de tu reforma de baño
              </p>
            </div>
            {detailedBlocks.map((block, index) =>
            <DetailedBlock key={index} {...block} />
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Work Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proceso de trabajo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Metodología clara de 5 pasos desde el diseño hasta la entrega con garantía
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) =>
              <ProcessStep key={index} {...step} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Before/After Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Antes y Después
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Transformaciones reales que hablan por sí mismas
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {beforeAfterProjects?.map((project) =>
              <div
                key={project?.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden">

                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative aspect-square">
                      <AppImage
                      src={project?.beforeImage || ''}
                      alt={project?.beforeAlt || ''}
                      className="w-full h-full object-cover" />

                      <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-semibold">
                        Antes
                      </div>
                    </div>

                    <div className="relative aspect-square">
                      <AppImage
                      src={project?.afterImage || ''}
                      alt={project?.afterAlt || ''}
                      className="w-full h-full object-cover" />

                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                        Después
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800">
                      {project?.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Galería de Proyectos Reales
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre algunas de nuestras últimas reformas de baño en Barcelona
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) =>
              <ProjectCard key={index} {...project} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre reformas de baños
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            {faqs.map((faq, index) =>
            <FAQItem key={index} {...faq} />
            )}
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transforma tu baño con profesionales
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Crea el baño que siempre has deseado. Contacta con nuestro equipo para una consulta 
              personalizada sin compromiso y presupuesto detallado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg inline-block">

                Solicitar Presupuesto
              </Link>
              <Link
                href="/portfolio-projects"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg inline-block">

                Ver Más Proyectos
              </Link>
            </div>
            <div className="mt-8 text-white/80">
              <p className="text-sm md:text-base">
                📞 +34 931 234 567 | 📧 info@buildnest.es
              </p>
            </div>
          </div>
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
                Especialistas en diseño y reforma de baños en Barcelona con más de 10 años de experiencia y garantía extendida.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/reformas-integrales-complete-service-page" className="hover:text-white transition-colors">Reformas Integrales</Link></li>
                <li><Link href="/individual-service-kitchen-renovation" className="hover:text-white transition-colors">Cocinas</Link></li>
                <li><Link href="/bathroom-renovation-complete-service-page" className="hover:text-white transition-colors">Baños</Link></li>
                <li><Link href="/carpinter-a-a-medida-complete-service-page" className="hover:text-white transition-colors">Carpintería</Link></li>
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