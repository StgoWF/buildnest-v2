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

interface CarpentryTypeProps {
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

const CarpentryTypeCard: React.FC<CarpentryTypeProps> = ({ image, alt, title, description }) =>
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

export default function CarpinteriaMedidaPage() {
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
  { title: 'Diseño personalizado 3D', description: 'Visualización realista antes de fabricar' },
  { title: 'Muebles a medida', description: 'Adaptados al milímetro a tus espacios' },
  { title: 'Maderas premium', description: 'Roble, nogal, pino y opciones sostenibles' },
  { title: 'Acabados profesionales', description: 'Lacados, barnizados y tintes de calidad' },
  { title: 'Instalación experta', description: 'Montaje preciso sin dañar paredes ni suelos' },
  { title: 'Garantía extendida', description: 'Garantía de fabricación e instalación' }];


  const servicePillars: ServicePillar[] = [
  {
    icon: '🪵',
    title: 'Maderas seleccionadas',
    description: 'Trabajamos con las mejores maderas naturales y sostenibles. Roble, nogal, pino y opciones eco-friendly con certificación FSC.'
  },
  {
    icon: '📐',
    title: 'Diseño personalizado',
    description: 'Cada pieza se diseña específicamente para tu espacio. Renders 3D realistas para que veas el resultado antes de fabricar.'
  },
  {
    icon: '🔨',
    title: 'Fabricación artesanal',
    description: 'Carpinteros especializados con décadas de experiencia. Técnicas tradicionales combinadas con tecnología moderna de corte y ensamblaje.'
  },
  {
    icon: '✨',
    title: 'Acabados impecables',
    description: 'Lijado fino, barnizados de alta calidad y lacados profesionales. Opciones en mate, satinado o brillo según tus preferencias.'
  }];


  const carpentryTypes: CarpentryTypeProps[] = [
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_133355642-1764608226029.png",
    alt: 'Armario empotrado a medida de suelo a techo con puertas correderas y distribución interior optimizada',
    title: 'Armarios empotrados',
    description: 'Armarios de suelo a techo aprovechando cada centímetro. Puertas correderas, abatibles o plegables con interiores completamente personalizables.'
  },
  {
    image: "https://images.unsplash.com/photo-1673098224986-993e9913891e",
    alt: 'Estanterías flotantes de madera maciza montadas en salón moderno con libros y decoración',
    title: 'Estanterías y baldas',
    description: 'Estanterías a medida para salones, despachos y dormitorios. Baldas flotantes, librerías modulares y soluciones de almacenaje visible.'
  },
  {
    image: "https://images.unsplash.com/photo-1697457813057-05032c7a7cf0",
    alt: 'Mueble de televisión de madera a medida con compartimentos de almacenaje y acabado moderno',
    title: 'Muebles de salón',
    description: 'Muebles de TV, aparadores y vitrinas diseñados específicamente para tu salón. Integración perfecta con la distribución y estilo de tu hogar.'
  },
  {
    image: "https://images.unsplash.com/photo-1723641278225-3a3bbabc1218",
    alt: 'Vestidor moderno con zapatero, cajones y barras de colgar ropa en madera clara',
    title: 'Vestidores completos',
    description: 'Vestidores con distribución optimizada: barras de colgar, cajones, zapateros y espejos. Iluminación LED integrada opcional.'
  }];


  const detailedBlocks: DetailedBlockProps[] = [
  {
    title: 'Diseño y planificación',
    objective: 'Crear diseño 3D personalizado que maximice funcionalidad y estética adaptándose perfectamente a tu espacio',
    activities: [
    'Medición precisa del espacio',
    'Diseño 3D con múltiples opciones',
    'Selección de maderas y acabados',
    'Presupuesto detallado y cerrado'],

    materials: 'Software de diseño 3D profesional, medidores láser, catálogos de maderas, muestras de acabados y herrajes'
  },
  {
    title: 'Fabricación artesanal',
    objective: 'Fabricar cada pieza con precisión milimétrica utilizando técnicas artesanales y tecnología de corte CNC',
    activities: [
    'Corte preciso de piezas',
    'Ensamblaje con técnicas tradicionales',
    'Lijado fino de superficies',
    'Aplicación de acabados profesionales'],

    materials: 'Maderas certificadas FSC, herrajes de alta calidad Blum/Hettich, barnices ecológicos, colas especiales para madera'
  },
  {
    title: 'Instalación y montaje',
    objetivo: 'Instalar los muebles con precisión sin dañar paredes, suelos o techos, garantizando estabilidad y nivelación perfecta',
    activities: [
    'Protección de espacios',
    'Nivelación y anclaje seguro',
    'Montaje de herrajes y accesorios',
    'Ajuste final de puertas y cajones'],

    materials: 'Herramientas de precisión, anclajes químicos para paredes, niveladores láser, protecciones de suelo y paredes'
  },
  {
    title: 'Acabados finales',
    objetivo: 'Aplicar acabados finales que protejan la madera y realcen su belleza natural con duración garantizada',
    activities: [
    'Limpieza de superficies',
    'Aplicación de ceras o aceites',
    'Instalación de tiradores y pomos',
    'Revisión completa de funcionamiento'],

    materials: 'Ceras naturales Osmo, aceites de linaza, tiradores de diseño, sistemas de cierre suave, iluminación LED opcional'
  }];


  const processSteps: ProcessStepProps[] = [
  {
    number: 1,
    title: 'Consulta y medición',
    description: 'Visitamos tu hogar, medimos con precisión y entendemos tus necesidades de almacenaje y estilo'
  },
  {
    number: 2,
    title: 'Diseño 3D',
    description: 'Creamos diseños 3D realistas para que visualices exactamente cómo quedará el mueble en tu espacio'
  },
  {
    number: 3,
    title: 'Selección de materiales',
    description: 'Eliges maderas, acabados, herrajes y accesorios de nuestro catálogo de materiales premium'
  },
  {
    number: 4,
    title: 'Fabricación a medida',
    description: 'Fabricamos cada pieza en nuestro taller con control de calidad riguroso en cada fase del proceso'
  },
  {
    number: 5,
    title: 'Instalación profesional',
    description: 'Instalamos los muebles con garantía de ajuste perfecto y acabado impecable'
  }];


  const projects: ProjectProps[] = [
  {
    image: "https://images.unsplash.com/photo-1562266690-04ad3f3bcfd1",
    alt: 'Proyecto de armario empotrado de roble natural con puertas correderas en dormitorio de Barcelona',
    title: 'Armario empotrado Eixample',
    style: 'Moderno'
  },
  {
    image: "https://images.unsplash.com/photo-1720766767456-e21294e08a02",
    alt: 'Librería a medida de nogal con iluminación LED en salón contemporáneo de Gràcia',
    title: 'Librería a medida Gràcia',
    style: 'Contemporáneo'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16461bed7-1764608224707.png",
    alt: 'Vestidor completo con acabado lacado blanco y distribución optimizada en Sant Cugat',
    title: 'Vestidor completo Sant Cugat',
    style: 'Minimalista'
  }];


  const faqs: FAQProps[] = [
  {
    question: '¿Qué tipos de madera ofrecen?',
    answer: 'Trabajamos con maderas naturales de calidad: roble, nogal, pino, haya y cerezo. También ofrecemos opciones sostenibles con certificación FSC y tableros de aglomerado de alta densidad con chapa natural. Cada madera tiene características únicas de veta, color y durabilidad que te mostramos con muestras físicas.'
  },
  {
    question: '¿Cuánto tarda la fabricación e instalación?',
    answer: 'El proceso completo desde diseño hasta instalación toma entre 3 y 5 semanas. El diseño 3D está listo en 3-5 días, la fabricación requiere 2-3 semanas, y la instalación se completa en 1-2 días según complejidad. Te damos un cronograma detallado al aceptar el presupuesto.'
  },
  {
    question: '¿Incluyen el diseño 3D en el presupuesto?',
    answer: 'Sí, el diseño 3D personalizado está incluido sin coste adicional. Creamos renders fotorrealistas que te permiten ver exactamente cómo quedará el mueble en tu espacio, con opciones de cambiar colores, acabados y distribución hasta que estés completamente satisfecho.'
  },
  {
    question: '¿Qué garantía ofrecen en los muebles?',
    answer: 'Ofrecemos garantía de 5 años en fabricación y materiales, y 2 años en herrajes y accesorios. La garantía cubre defectos de fabricación, problemas estructurales y fallos en acabados. Los herrajes Blum/Hettich que utilizamos tienen garantía del fabricante adicional.'
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
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1addde8fe-1764608217519.png"
            alt="Carpintería a medida de alta calidad con muebles de madera artesanales y diseño personalizado en Barcelona"
            className="w-full h-full object-cover pointer-events-none"
            style={{ animation: 'none', transition: 'none' }} />

        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gray-900/60 backdrop-blur-md px-8 py-6 rounded-3xl shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
              Carpintería a Medida: Muebles Únicos para Tu Hogar
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md">
              Diseño, fabricación e instalación de muebles personalizados con maderas premium y acabados profesionales
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              ¿Qué incluye el servicio de carpintería a medida?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed max-w-3xl mx-auto">
              Creamos muebles únicos diseñados específicamente para tu espacio y necesidades. Cada pieza es 
              fabricada artesanalmente con maderas seleccionadas y acabados profesionales que garantizan durabilidad y belleza.
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
              ¿Por qué elegir nuestra carpintería?
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

      {/* Section 3: Carpentry Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipos de carpintería a medida
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluciones personalizadas para cada espacio y necesidad de tu hogar
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {carpentryTypes.map((type, index) =>
              <CarpentryTypeCard key={index} {...type} />
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
                Proceso de trabajo detallado
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Desde el diseño inicial hasta la instalación final con garantía de calidad
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
                5 fases desde diseño hasta instalación con visualización 3D
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

      {/* Section 6: Project Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre algunos de nuestros trabajos más recientes de carpintería a medida
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
              Resolvemos las dudas más comunes sobre carpintería a medida
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
              Crea los muebles perfectos para tu hogar
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Solicita tu diseño 3D gratuito y descubre cómo podemos transformar tus ideas en muebles únicos y funcionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg inline-block">

                Solicitar Diseño 3D Gratuito
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
                Especialistas en carpintería a medida en Barcelona con más de 10 años de experiencia y garantía extendida.
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