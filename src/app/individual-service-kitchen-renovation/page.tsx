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

interface KitchenTypeProps {
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

const KitchenTypeCard: React.FC<KitchenTypeProps> = ({ image, alt, title, description }) =>
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

export default function KitchenRenovationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
  { name: 'Reformas integrales', href: '/reformas-integrales-complete-service-page' },
  { name: 'Cocinas', href: '/individual-service-kitchen-renovation' },
  { name: 'Baños', href: '/services-overview' },
  { name: 'Carpintería a medida', href: '/services-overview' },
  { name: 'Pintura y acabados', href: '/services-overview' },
  { name: 'Electricidad e iluminación', href: '/services-overview' },
  { name: 'Climatización', href: '/services-overview' },
  { name: 'Gestión llave en mano', href: '/services-overview' }];


  const serviceInclusions: ServiceInclusion[] = [
  { title: 'Diseño de distribución', description: 'Optimización del espacio y flujo de trabajo' },
  { title: 'Mobiliario a medida', description: 'Fabricación personalizada según tus necesidades' },
  { title: 'Encimeras y acabados premium', description: 'Materiales de alta calidad y durabilidad' },
  { title: 'Electricidad, fontanería e iluminación', description: 'Instalaciones certificadas y seguras' },
  { title: 'Optimización del almacenamiento', description: 'Soluciones inteligentes de organización' },
  { title: 'Montaje e instalación llave en mano', description: 'Gestión completa del proyecto' }];


  const servicePillars: ServicePillar[] = [
  {
    icon: '🎨',
    title: 'Diseño personalizado',
    description: 'Cada cocina es única. Creamos espacios que reflejan tu estilo de vida y maximizan la funcionalidad según tus necesidades específicas.'
  },
  {
    icon: '💎',
    title: 'Calidad en materiales',
    description: 'Seleccionamos los mejores materiales del mercado: encimeras de cuarzo, granito o mármol, acabados premium y electrodomésticos de primeras marcas.'
  },
  {
    icon: '🔧',
    title: 'Ejecución profesional',
    description: 'Equipo especializado con años de experiencia. Trabajo certificado, instalaciones garantizadas y cumplimiento de normativas vigentes.'
  },
  {
    icon: '🏠',
    title: 'Entrega llave en mano',
    description: 'Nos encargamos de todo el proceso: desde el diseño inicial hasta la instalación final. Tu cocina lista para usar sin preocupaciones.'
  }];


  const kitchenTypes: KitchenTypeProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1721395289170-d409b859d90d',
    alt: 'Cocina abierta al salón con isla central en apartamento moderno de Barcelona con diseño contemporáneo',
    title: 'Cocinas abiertas al salón',
    description: 'Integración perfecta con el espacio de vida. Derribos controlados, continuidad visual y diseño funcional que conecta cocina y salón.'
  },
  {
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_175199c9a-1764599451746.png',
    alt: 'Cocina cerrada compacta con distribución optimizada y almacenaje inteligente en piso de Barcelona',
    title: 'Cocinas cerradas',
    description: 'Aprovechamiento máximo del espacio disponible con distribución optimizada y soluciones de almacenaje vertical e inteligente.'
  },
  {
    image: 'https://images.unsplash.com/photo-1687816042378-66374f99500b',
    alt: 'Cocina pequeña funcional con electrodomésticos integrados y muebles a medida para pisos reducidos',
    title: 'Cocinas pequeñas',
    description: 'Soluciones funcionales para espacios reducidos. Almacenaje inteligente, electrodomésticos integrados y muebles a medida.'
  },
  {
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_168963869-1764599453737.png',
    alt: 'Cocina premium de lujo con materiales de alta gama, iluminación LED avanzada y electrodomésticos de última generación',
    title: 'Cocinas premium',
    description: 'Materiales de alta gama, electrodomésticos de última generación, iluminación LED avanzada y acabados exclusivos.'
  }];


  const detailedBlocks: DetailedBlockProps[] = [
  {
    title: 'Diseño y distribución',
    objective: 'Crear un diseño funcional y personalizado que optimice el espacio y se adapte a tu estilo de vida',
    activities: [
    'Plano técnico y diseño 3D',
    'Selección de distribución óptima',
    'Planificación de zonas de trabajo',
    'Renders realistas del resultado final'],

    materials: 'Software de diseño 3D profesional, mediciones láser precisas, catálogos de materiales y acabados'
  },
  {
    title: 'Instalación eléctrica y de fontanería',
    objective: 'Actualizar todas las instalaciones según normativa con puntos para electrodomésticos y tomas necesarias',
    activities: [
    'Renovación de cableado eléctrico',
    'Instalación de puntos específicos',
    'Actualización de fontanería',
    'Conexiones para electrodomésticos'],

    materials: 'Cableado certificado de última generación, tuberías PEX o cobre, mecanismos Schneider/Simon, protecciones diferenciales'
  },
  {
    title: 'Mobiliario y encimeras',
    objective: 'Instalar muebles de cocina a medida con encimera de calidad y sistema de almacenaje optimizado',
    activities: [
    'Fabricación de muebles a medida',
    'Instalación de encimera',
    'Montaje de sistemas de almacenaje',
    'Integración de electrodomésticos'],

    materials: 'Muebles lacados o melamina alta calidad, encimeras de cuarzo/granito/Silestone, herrajes Blum, frentes sin tiradores'
  },
  {
    title: 'Iluminación y eficiencia',
    objective: 'Crear un sistema de iluminación funcional y eficiente con diferentes capas de luz',
    activities: [
    'Iluminación general LED',
    'Iluminación de trabajo puntual',
    'Instalación de reguladores',
    'Optimización energética'],

    materials: 'Downlights LED empotrables, tiras LED bajo muebles altos, reguladores inteligentes, temperatura de color 4000K'
  },
  {
    title: 'Acabados y detalles finales',
    objetivo: 'Completar la cocina con revestimientos, pavimentos y detalles que unifiquen el diseño',
    activities: [
    'Colocación de pavimento',
    'Instalación de revestimiento',
    'Montaje de zócalos y perfiles',
    'Limpieza y puesta a punto'],

    materials: 'Pavimento porcelánico antideslizante, azulejos hasta el techo, perfiles de aluminio, silicona antimoho de calidad'
  }];


  const processSteps: ProcessStepProps[] = [
  {
    number: 1,
    title: 'Visita y análisis',
    description: 'Visitamos tu cocina actual, tomamos medidas precisas y analizamos necesidades específicas'
  },
  {
    number: 2,
    title: 'Diseño de cocina y selección de materiales',
    description: 'Creamos diseño 3D personalizado y seleccionas acabados, colores y electrodomésticos'
  },
  {
    number: 3,
    title: 'Presupuesto cerrado',
    description: 'Presentamos presupuesto detallado sin sorpresas con todos los materiales especificados'
  },
  {
    number: 4,
    title: 'Ejecución',
    description: 'Ejecutamos la reforma con seguimiento diario y comunicación constante del avance'
  },
  {
    number: 5,
    title: 'Entrega final con garantía',
    description: 'Entregamos cocina completa y lista para usar con garantía extendida de 5 años'
  }];


  const beforeAfterProjects: BeforeAfterProject[] = [
  {
    id: '1',
    title: 'Cocina Moderna Barcelona',
    beforeImage: 'https://images.unsplash.com/photo-1591528287513-7b9d06d69934',
    beforeAlt: 'Cocina antigua con muebles desgastados antes de la reforma',
    afterImage: 'https://images.unsplash.com/photo-1640792087548-1af5386e6e9f',
    afterAlt: 'Cocina moderna renovada con isla central y acabados premium'
  },
  {
    id: '2',
    title: 'Renovación Cocina Eixample',
    beforeImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1381e0689-1764603193936.png',
    beforeAlt: 'Cocina pequeña con distribución obsoleta antes de reformar',
    afterImage: 'https://images.unsplash.com/photo-1620981210809-acfaf1ed6dd6',
    afterAlt: 'Cocina nórdica funcional con madera clara después de la reforma'
  }];


  const projects: ProjectProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1721743166754-33647aec4a99',
    alt: 'Proyecto de cocina con diseño nórdico minimalista en Barcelona, muebles blancos mate y encimera de madera',
    title: 'Cocina nórdica en Eixample',
    style: 'Nórdico'
  },
  {
    image: 'https://images.unsplash.com/photo-1630699144429-c9912507ef53',
    alt: 'Cocina contemporánea con isla central en Gràcia, acabados en gris antracita y electrodomésticos integrados',
    title: 'Cocina moderna en Gràcia',
    style: 'Contemporáneo'
  },
  {
    image: 'https://images.unsplash.com/photo-1598899772716-7f8fcbefa8c4',
    alt: 'Cocina de estilo industrial en loft de Barcelona con materiales metálicos, ladrillo visto y iluminación colgante',
    title: 'Loft industrial Poblenou',
    style: 'Industrial'
  }];


  const faqs: FAQProps[] = [
  {
    question: '¿Cuánto tarda la reforma de una cocina?',
    answer: 'Una reforma completa de cocina típica dura entre 3 y 5 semanas, dependiendo del tamaño y complejidad. Si hay cambios de distribución o instalaciones importantes, puede extenderse hasta 6 semanas. Te daremos un cronograma detallado antes de empezar.'
  },
  {
    question: '¿Qué incluye el presupuesto?',
    answer: 'El presupuesto incluye: desmontaje y demolición, nuevas instalaciones de fontanería y electricidad, muebles de cocina a medida, encimera, electrodomésticos (si los contratas con nosotros), revestimientos, pavimento, mano de obra, gestión de residuos y garantía. Todo especificado sin sorpresas.'
  },
  {
    question: '¿Puedo elegir materiales?',
    answer: 'Sí, completamente. Te presentamos opciones en diferentes rangos de calidad y precio: muebles (lacados, melamina, madera), encimeras (cuarzo, granito, Silestone), electrodomésticos (Bosch, Siemens, Balay) y revestimientos. Tú decides según tu presupuesto y estilo.'
  },
  {
    question: '¿Es posible cambiar distribución?',
    answer: 'Sí, podemos cambiar la distribución siempre que sea técnicamente viable. Analizamos las instalaciones existentes (agua, desagües, ventilación) y proponemos la mejor distribución. Los cambios de ubicación de fregadero o cocina requieren modificar fontanería, lo cual incluimos en el presupuesto.'
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
        {/* Full Background Image - NO EFFECTS */}
        <div className="absolute inset-0">
          <AppImage
            src="https://images.unsplash.com/photo-1723470915155-621e10d20dfa"
            alt="Cocina moderna premium con isla central, iluminación profesional, acabados de lujo y diseño elegante"
            className="w-full h-full object-cover pointer-events-none"
            style={{ animation: 'none', transition: 'none' }} />
        </div>
        
        {/* Centered Text with Glassmorphism Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gray-900/60 backdrop-blur-md px-8 py-6 rounded-3xl shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
              Reformas de Cocinas en Barcelona
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md">
              Diseñamos y renovamos tu cocina con soluciones personalizadas, funcionales y materiales de alta calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              ¿Qué incluye una reforma de cocina?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed max-w-3xl mx-auto">
              Nuestro servicio integral transforma tu cocina en un espacio funcional, moderno y adaptado a tu estilo de vida. 
              Nos ocupamos de cada detalle para garantizar un resultado excepcional.
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
              Nuestros Pilares de Servicio
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

      {/* Section 3: Kitchen Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipos de reformas de cocina
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Adaptamos el diseño a tus necesidades específicas y al espacio disponible
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {kitchenTypes.map((type, index) =>
              <KitchenTypeCard key={index} {...type} />
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
                Desglose completo de cada fase de tu reforma de cocina
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
                Descubre algunas de nuestras últimas reformas de cocina en Barcelona
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
              Resolvemos las dudas más comunes sobre reformas de cocinas
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
              Empieza tu proyecto de cocina con nosotros
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Transforma tu cocina en el espacio que siempre has soñado. Contacta con nuestro equipo 
              para una consulta personalizada sin compromiso.
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
                Especialistas en diseño y reforma de cocinas en Barcelona con más de 10 años de experiencia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/reformas-integrales-complete-service-page" className="hover:text-white transition-colors">Reformas Integrales</Link></li>
                <li><Link href="/individual-service-kitchen-renovation" className="hover:text-white transition-colors">Cocinas</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Baños</Link></li>
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