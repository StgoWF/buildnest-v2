'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

interface IncludedServiceProps {
  icon: string;
  title: string;
  description: string;
}

interface DetailedBlockProps {
  title: string;
  objective: string;
  activities: string[];
  materials: string[];
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

interface ServiceBlockProps {
  image: string;
  alt: string;
  title: string;
  objective: string;
  activities: string[];
  materials: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) =>
<div className="flex flex-col items-center text-center p-6">
    <div className="w-16 h-16 mb-4 flex items-center justify-center text-5xl">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>;


const IncludedServiceCard: React.FC<IncludedServiceProps> = ({ icon, title, description }) =>
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
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

const ServiceBlock: React.FC<ServiceBlockProps> = ({ image, alt, title, objective, activities, materials }) =>
<div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
      {/* Image Column */}
      <div className="relative h-64 lg:h-auto">
        <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      
      {/* Content Columns */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-0">
        {/* Objetivo Column */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
          <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wide mb-3">Objetivo</h4>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{objective}</p>
        </div>
        
        {/* Actividades Column */}
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
        
        {/* Materiales Column */}
        <div className="p-6">
          <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-wide mb-3">Materiales</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{materials}</p>
        </div>
      </div>
    </div>
  </div>;


export default function ReformasIntegralesPage() {
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
  { name: 'Cocinas', href: '/individual-service-kitchen-renovation' },
  { name: 'Baños', href: '/bathroom-renovation-complete-service-page' },
  { name: 'Carpintería a medida', href: '/carpinter-a-a-medida-complete-service-page' },
  { name: 'Pintura y acabados', href: '/pintura-y-acabados-complete-service-page' },
  { name: 'Electricidad e iluminación', href: '/services-overview' },
  { name: 'Climatización', href: '/services-overview' }];


  const features: FeatureCardProps[] = [
  {
    icon: '🏗️',
    title: 'Gestión integral',
    description: 'Nos encargamos de todo el proceso: proyecto, licencias, obra y acabados'
  },
  {
    icon: '💎',
    title: 'Transparencia en presupuesto',
    description: 'Presupuesto cerrado sin sorpresas ni costes ocultos durante la obra'
  },
  {
    icon: '⏰',
    title: 'Cumplimiento de plazos',
    description: 'Planificación realista con seguimiento diario y compromiso de entrega'
  },
  {
    icon: '🛡️',
    title: 'Garantía extendida',
    description: '5 años de garantía en todos los trabajos realizados por nuestro equipo'
  },
  {
    icon: '👷',
    title: 'Equipo propio',
    description: 'Profesionales cualificados propios, sin subcontratas en servicios clave'
  },
  {
    icon: '📱',
    title: 'Comunicación directa',
    description: 'Contacto directo con el responsable del proyecto y seguimiento en tiempo real'
  }];


  const includedServices: IncludedServiceProps[] = [
  {
    icon: '📐',
    title: 'Distribución y proyecto de vivienda',
    description: 'Diseño arquitectónico completo, redistribución de espacios, proyecto técnico y gestión de licencias de obra'
  },
  {
    icon: '⚡',
    title: 'Actualización completa de instalaciones',
    description: 'Renovación de electricidad, fontanería, gas, telecomunicaciones y sistemas de climatización según normativa vigente'
  },
  {
    icon: '🍳',
    title: 'Cocina y baños a medida',
    description: 'Diseño personalizado de cocinas y baños con muebles, encimeras, electrodomésticos y sanitarios de calidad'
  },
  {
    icon: '🎨',
    title: 'Acabados y carpintería',
    description: 'Pavimentos, revestimientos, pintura, carpintería interior, armarios empotrados y puertas personalizadas'
  },
  {
    icon: '🌱',
    title: 'Mejoras de eficiencia y confort',
    description: 'Aislamiento térmico y acústico, ventanas eficientes, iluminación LED y sistemas de climatización eficientes'
  }];


  const detailedBlocks: DetailedBlockProps[] = [
  {
    title: 'Reforma integral de vivienda',
    objective: 'Transformar completamente el piso o casa actualizando distribución, instalaciones y acabados',
    activities: [
    'Demolición y preparación',
    'Redistribución de espacios',
    'Renovación completa instalaciones',
    'Nuevos acabados en toda la vivienda'],

    materials: 'Cerámicas de calidad, parquet, pintura ecológica, sanitarios eficientes, griferías de diseño, carpintería lacada'
  },
  {
    title: 'Reforma de cocina dentro de una integral',
    objective: 'Crear una cocina funcional, moderna y personalizada integrada en el proyecto general',
    activities: [
    'Diseño 3D personalizado',
    'Instalación de muebles a medida',
    'Encimera y electrodomésticos',
    'Iluminación específica y acabados'],

    materials: 'Muebles de cocina de alta calidad, encimera de cuarzo o granito, electrodomésticos A+++, grifería con sistema ahorro'
  },
  {
    title: 'Reforma de baños',
    objective: 'Modernizar baños con diseño actual, funcionalidad óptima y materiales de calidad',
    activities: [
    'Cambio completo de sanitarios',
    'Plato de ducha o bañera nueva',
    'Muebles de baño a medida',
    'Revestimientos y pavimentos'],

    materials: 'Sanitarios suspendidos de diseño, grifería termostática, mamparas de cristal, cerámicas porcelánicas antideslizantes'
  },
  {
    title: 'Mejoras de eficiencia energética',
    objetivo: 'Reducir consumo energético y mejorar confort térmico y acústico del hogar',
    activities: [
    'Aislamiento de fachada interior',
    'Ventanas de alta eficiencia',
    'Climatización eficiente',
    'Iluminación LED inteligente'],

    materials: 'Aislamiento térmico SATE, ventanas PVC con rotura puente térmico, aerotermia o bomba de calor, iluminación LED regulable'
  }];


  const processSteps: ProcessStepProps[] = [
  {
    number: 1,
    title: 'Visita y análisis del piso',
    description: 'Visitamos tu vivienda, analizamos necesidades y tomamos medidas detalladas'
  },
  {
    number: 2,
    title: 'Propuesta y presupuesto cerrado',
    description: 'Presentamos proyecto con renders 3D, memoria de calidades y presupuesto detallado'
  },
  {
    number: 3,
    title: 'Planificación y licencias',
    description: 'Tramitamos permisos necesarios y planificamos cronograma de obra realista'
  },
  {
    number: 4,
    title: 'Ejecución y seguimiento',
    description: 'Ejecutamos la reforma con seguimiento diario y comunicación constante'
  },
  {
    number: 5,
    title: 'Entrega y postventa',
    description: 'Entregamos vivienda lista para habitar con garantía extendida de 5 años'
  }];


  const projects: ProjectProps[] = [
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c22993f4-1764602589411.png",
    alt: 'Reforma integral de piso de 90m² en Barcelona Eixample mostrando salón luminoso con cocina abierta integrada',
    title: 'Reforma integral Eixample',
    description: '90m² · Distribución abierta con cocina integrada'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19af57496-1764602586638.png",
    alt: 'Reforma completa de apartamento moderno en Gràcia con diseño nórdico y espacios luminosos',
    title: 'Apartamento moderno en Gràcia',
    description: '75m² · Estilo nórdico con mucha luz natural'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b620e31d-1764602585789.png",
    alt: 'Reforma integral de casa adosada en Sant Cugat incluyendo cocina, baños y distribución completa',
    title: 'Casa adosada Sant Cugat',
    description: '140m² · Reforma completa con jardín'
  }];


  const faqs: FAQProps[] = [
  {
    question: '¿Cuánto tiempo dura una reforma integral?',
    answer: 'Una reforma integral típica de un piso de 70-90m² dura entre 2 y 3 meses. El plazo depende del alcance de la obra, si hay redistribución completa, y de la complejidad de las instalaciones. Presentamos un cronograma detallado antes de empezar.'
  },
  {
    question: '¿Cuánto cuesta una reforma integral en Barcelona?',
    answer: 'El coste medio está entre 600€ y 1.200€ por m², dependiendo de calidades, cambios estructurales y acabados elegidos. Tras la visita inicial, preparamos un presupuesto cerrado y detallado sin sorpresas.'
  },
  {
    question: '¿Necesito licencia de obra para una reforma integral?',
    answer: 'Sí, para reformas integrales es necesaria licencia de obra mayor del ayuntamiento. Nosotros gestionamos toda la tramitación: proyecto técnico, visado colegial y presentación en el ayuntamiento.'
  },
  {
    question: '¿Puedo vivir en casa durante la reforma?',
    answer: 'En reformas integrales no es recomendable vivir en la vivienda por temas de seguridad, ruido y polvo. Si la reforma es parcial (solo cocina o baño), sí es posible con algunas molestias controladas.'
  },
  {
    question: '¿Qué incluye exactamente una reforma integral?',
    answer: 'Incluye demolición, redistribución de espacios, renovación completa de instalaciones (electricidad, fontanería, climatización), nuevos pavimentos y revestimientos, cocina y baños completos, carpintería, pintura y acabados finales.'
  },
  {
    question: '¿Ofrecen garantía en los trabajos realizados?',
    answer: 'Sí, ofrecemos 5 años de garantía en todos nuestros trabajos. Además, todos los materiales instalados tienen sus propias garantías de fabricante que gestionamos directamente.'
  }];


  const serviceBlocks: ServiceBlockProps[] = [
  {
    image: "https://images.unsplash.com/photo-1721244653580-79577d2822a2",
    alt: 'Diseño arquitectónico de reforma integral con planos y distribución de espacios en vivienda moderna',
    title: 'Diseño y redistribución',
    objective: 'Optimizar el espacio de tu vivienda mediante un nuevo diseño arquitectónico que maximice funcionalidad y luminosidad',
    activities: [
    'Análisis de distribución actual',
    'Diseño de nueva distribución',
    'Renders 3D del proyecto',
    'Gestión de licencias de obra',
    'Proyecto técnico completo'],

    materials: 'Tabiques de yeso laminado, estructura metálica, aislamiento acústico, puertas correderas, ventanas de PVC con alta eficiencia energética'
  },
  {
    image: "https://images.unsplash.com/photo-1721824288192-99cc195384ca",
    alt: 'Cocina moderna integrada en reforma integral con muebles de diseño y electrodomésticos de última generación',
    title: 'Cocinas dentro de reformas integrales',
    objective: 'Crear una cocina funcional y estética perfectamente integrada en el diseño global de tu vivienda reformada',
    activities: [
    'Diseño 3D personalizado',
    'Muebles de cocina a medida',
    'Instalación de electrodomésticos',
    'Encimera de materiales premium',
    'Iluminación específica LED'],

    materials: 'Muebles de cocina lacados o madera natural, encimera de cuarzo Silestone o granito, electrodomésticos Siemens/Bosch, grifería Grohe con sistema ahorro'
  },
  {
    image: "https://images.unsplash.com/photo-1721824319683-3ec943df3394",
    alt: 'Baño moderno reformado con sanitarios suspendidos, ducha de obra y revestimientos porcelánicos de calidad',
    title: 'Baños dentro de reformas integrales',
    objective: 'Modernizar completamente los baños con diseño actual, funcionalidad óptima y materiales de alta durabilidad',
    activities: [
    'Demolición completa',
    'Nueva distribución si necesario',
    'Instalación sanitarios suspendidos',
    'Plato de ducha de obra',
    'Muebles de baño personalizados'],

    materials: 'Sanitarios Roca o Duravit suspendidos, grifería termostática Grohe, mamparas de cristal templado, porcelánico antideslizante, iluminación LED regulable'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_196dc9169-1764602585509.png",
    alt: 'Instalaciones eléctricas y de climatización modernas en reforma integral con sistemas eficientes',
    title: 'Instalaciones completas',
    objective: 'Renovar completamente las instalaciones de electricidad, fontanería, gas y climatización según normativa actual',
    activities: [
    'Electricidad según REBT',
    'Fontanería con tuberías ocultas',
    'Gas natural o butano',
    'Climatización por aerotermia',
    'Telecomunicaciones y domótica'],

    materials: 'Cableado libre halógenos, cuadro eléctrico actualizado, tubería multicapa, calderas de condensación, splits inverter A+++, centralita domótica'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2bfe74c-1764602587030.png",
    alt: 'Acabados finales de reforma integral con pavimentos de calidad, carpintería lacada y pintura profesional',
    title: 'Acabados y carpintería',
    objetivo: 'Aplicar acabados finales de alta calidad que den personalidad y calidez a todos los espacios reformados',
    activities: [
    'Pavimentos porcelánicos o parquet',
    'Pintura plástica o temples',
    'Carpintería de puertas',
    'Armarios empotrados a medida',
    'Rodapiés y molduras'],

    materials: 'Porcelánico efecto madera o mármol, parquet AC4/AC5, pintura ecológica Bruguer, puertas lacadas blancas, armarios melamina o lacado, iluminación LED'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_159991802-1764602585262.png",
    alt: 'Mejoras de eficiencia energética en reforma integral con aislamiento térmico y ventanas eficientes',
    title: 'Eficiencia y modernización',
    objetivo: 'Mejorar la eficiencia energética de la vivienda reduciendo consumos y aumentando el confort térmico y acústico',
    activities: [
    'Aislamiento térmico SATE',
    'Ventanas rotura puente térmico',
    'Aerotermia para climatización',
    'Iluminación LED inteligente',
    'Domótica básica o avanzada'],

    materials: 'Aislamiento EPS grafito o lana de roca, ventanas PVC Kommerling o aluminio, bomba de calor Daikin/Mitsubishi, sistema LED regulable, domótica KNX o similar'
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
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}>
                <button className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium flex items-center gap-1">
                  Servicios
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div
                    className="absolute left-0 pt-2 w-64"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}>
                    <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] transition-colors text-sm">
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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

      {/* Section 1 - Shorter Hero for Service Page */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Full Background Image - NO EFFECTS */}
        <div className="absolute inset-0">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1908afa4d-1764602590140.png"
            alt="Reforma integral completa de vivienda en Barcelona con espacios modernos y luminosos"
            className="w-full h-full object-cover pointer-events-none" 
            style={{ animation: 'none', transition: 'none' }} />
        </div>
        
        {/* Centered Text with Glassmorphism Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gray-900/60 backdrop-blur-md px-8 py-6 rounded-3xl shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
              Reformas Integrales
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md">
              Renovamos tu vivienda por completo con un servicio llave en mano
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Introduction to Reforma Integral */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              ¿Qué es una reforma integral?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Una reforma integral es la renovación completa de tu vivienda, desde la distribución de espacios hasta los acabados finales. 
              Incluye diseño arquitectónico, redistribución si es necesario, actualización de todas las instalaciones (electricidad, 
              fontanería, climatización), nuevos pavimentos y revestimientos, reforma completa de cocina y baños, carpintería, 
              pintura y gestión integral del proyecto.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro servicio llave en mano significa que nos encargamos de todo: desde el proyecto técnico y las licencias 
              hasta la entrega final de tu vivienda lista para habitar. Gestionamos cada detalle para que tú solo tengas 
              que disfrutar del resultado.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Service Breakdown Blocks (Horizontal Format) */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Servicios incluidos en tu reforma integral
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desglose técnico y detallado de cada área de trabajo en tu proyecto de reforma completa
            </p>
          </div>
          {serviceBlocks.map((block, index) =>
          <ServiceBlock key={index} {...block} />
          )}
        </div>
      </section>

      {/* Section 4 - Work Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proceso de trabajo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodología clara y transparente desde el primer contacto hasta la entrega final
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) =>
            <ProcessStep key={index} {...step} />
            )}
          </div>
        </div>
      </section>

      {/* Section 5 - Projects */}
      <section id="proyectos" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proyectos de reformas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre algunas de nuestras últimas reformas integrales en Barcelona
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) =>
            <ProjectCard key={index} {...project} />
            )}
          </div>
        </div>
      </section>

      {/* Section 6 - FAQs */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre reformas integrales
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            {faqs.map((faq, index) =>
            <FAQItem key={index} {...faq} />
            )}
          </div>
        </div>
      </section>

      {/* Section 7 - Specific CTA for Reforma Integral */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para tu reforma integral?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Solicita tu presupuesto personalizado sin compromiso
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1e3a5f] px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">

            Solicitar presupuesto para Reforma Integral
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
                Especialistas en reformas integrales en Barcelona con más de 10 años de experiencia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/reformas-integrales-complete-service-page" className="hover:text-white transition-colors">Reformas Integrales</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Cocinas</Link></li>
                <li><Link href="/bathroom-renovation-complete-service-page" className="hover:text-white transition-colors">Baños</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Carpintería</Link></li>
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