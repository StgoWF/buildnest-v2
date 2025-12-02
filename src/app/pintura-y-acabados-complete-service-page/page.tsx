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

interface PaintingTypeProps {
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

interface ColorPsychology {
  color: string;
  name: string;
  emotion: string;
  bestFor: string;
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

const PaintingTypeCard: React.FC<PaintingTypeProps> = ({ image, alt, title, description }) =>
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


const ColorPsychologyCard: React.FC<ColorPsychology> = ({ color, name, emotion, bestFor }) =>
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="h-32" style={{ backgroundColor: color }}></div>
    <div className="p-5">
      <h4 className="text-lg font-bold text-gray-900 mb-2">{name}</h4>
      <p className="text-gray-600 text-sm mb-2"><strong>Emoción:</strong> {emotion}</p>
      <p className="text-gray-600 text-sm"><strong>Ideal para:</strong> {bestFor}</p>
    </div>
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

export default function PinturaAcabadosPage() {
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
  { title: 'Preparación de superficies', description: 'Lijado, masillado y imprimación profesional' },
  { title: 'Consultoría de color', description: 'Asesoramiento experto en selección de colores' },
  { title: 'Pinturas premium', description: 'Marcas de calidad ecológicas y duraderas' },
  { title: 'Técnicas decorativas', description: 'Estucados, efectos y acabados especiales' },
  { title: 'Control de humedad', description: 'Pinturas anti-humedad para Barcelona' },
  { title: 'Garantía de acabado', description: 'Garantía extendida en mano de obra' }];


  const servicePillars: ServicePillar[] = [
  {
    icon: '🎨',
    title: 'Consultoría de color',
    description: 'Te ayudamos a elegir los colores perfectos según iluminación, estilo y psicología del color. Muestras gratuitas en tu hogar.'
  },
  {
    icon: '🖌️',
    title: 'Pinturas premium',
    description: 'Trabajamos con marcas líderes: Bruguer, Sherwin-Williams, Jotun. Pinturas ecológicas sin VOC certificadas.'
  },
  {
    icon: '✨',
    title: 'Acabados profesionales',
    description: 'Estucados venecianos, efectos metálicos, murales artísticos. Técnicas tradicionales y contemporáneas.'
  },
  {
    icon: '💧',
    title: 'Soluciones anti-humedad',
    description: 'Pinturas especiales para clima húmedo de Barcelona. Tratamiento profesional de moho y condensación.'
  }];


  const paintingTypes: PaintingTypeProps[] = [
  {
    image: "https://images.unsplash.com/photo-1721743142503-5255654ec4b2",
    alt: 'Pintura de paredes interiores con acabado mate en colores neutros para salón moderno',
    title: 'Pintura de interiores',
    description: 'Paredes, techos y carpintería con acabados mate, satinados o brillantes. Preparación exhaustiva de superficies para resultados duraderos.'
  },
  {
    image: "https://images.unsplash.com/photo-1678300337827-912527c5f351",
    alt: 'Estucado veneciano decorativo con efecto marmolado en pared de dormitorio elegante',
    title: 'Estucados decorativos',
    description: 'Estucado veneciano, temple, efectos marmoleados. Técnicas artesanales que dan profundidad y elegancia a cualquier espacio.'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5a03954-1764608217600.png",
    alt: 'Pintura exterior de fachada con protección anti-humedad y acabado mate duradero',
    title: 'Pintura exterior',
    description: 'Fachadas, balcones y terrazas con pinturas resistentes al clima mediterráneo. Protección UV y anti-humedad garantizada.'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb52e6f2-1764608217799.png",
    alt: 'Lacado profesional de puertas y carpintería en color blanco satinado con acabado impecable',
    title: 'Lacado de carpintería',
    description: 'Puertas, armarios y rodapiés con lacado profesional. Acabados de fábrica en mate, satinado o alto brillo.'
  }];


  const detailedBlocks: DetailedBlockProps[] = [
  {
    title: 'Preparación de superficies',
    objective: 'Preparar paredes y techos para garantizar adherencia perfecta y acabado profesional sin imperfecciones',
    activities: [
    'Protección de muebles y suelos',
    'Lijado y reparación de grietas',
    'Masillado de imperfecciones',
    'Aplicación de imprimación selladora'],

    materials: 'Masillas acrílicas, lijas de grano fino, imprimaciones al agua, cintas de enmascarar profesionales, plásticos protectores'
  },
  {
    title: 'Consultoría de color',
    objetivo: 'Asesorar en selección de colores considerando iluminación natural, estilo decorativo y psicología del color',
    activities: [
    'Análisis de iluminación del espacio',
    'Propuesta de paleta de colores',
    'Muestras físicas en paredes',
    'Visualización en diferentes momentos del día'],

    materials: 'Cartas de colores Bruguer/Sherwin-Williams, muestras físicas de 500ml, iluminación de análisis, software de visualización'
  },
  {
    title: 'Aplicación de pintura',
    objetivo: 'Aplicar pintura con técnica profesional garantizando cobertura uniforme y acabado impecable sin marcas',
    activities: [
    'Primera capa de pintura base',
    'Segunda capa para cobertura completa',
    'Acabados en esquinas y zócalos',
    'Revisión de uniformidad'],

    materials: 'Pinturas plásticas Bruguer Premium, rodillos de microfibra, brochas de precisión, perfiles para cantos perfectos'
  },
  {
    title: 'Acabados especiales',
    objetivo: 'Aplicar técnicas decorativas y efectos especiales que den personalidad única a los espacios',
    activities: [
    'Estucados venecianos a mano',
    'Efectos metálicos o perlados',
    'Técnicas de pintura artística',
    'Sellado protector final'],

    materials: 'Estuco veneciano natural, pinturas metalizadas, espátulas profesionales, ceras protectoras, barnices al agua'
  }];


  const processSteps: ProcessStepProps[] = [
  {
    number: 1,
    title: 'Visita y consultoría',
    description: 'Visitamos tu hogar, analizamos superficies, iluminación y te asesoramos en selección de colores'
  },
  {
    number: 2,
    title: 'Presupuesto personalizado',
    description: 'Presupuesto detallado con tipos de pintura, técnicas y plazos de ejecución claros'
  },
  {
    number: 3,
    title: 'Preparación exhaustiva',
    description: 'Protegemos espacios, reparamos superficies y aplicamos imprimaciones de calidad'
  },
  {
    number: 4,
    title: 'Aplicación profesional',
    description: 'Pintamos con técnicas profesionales garantizando acabado uniforme y duradero'
  },
  {
    number: 5,
    title: 'Entrega impecable',
    description: 'Revisión final, limpieza completa y entrega con garantía de satisfacción'
  }];


  const colorPsychology: ColorPsychology[] = [
  { color: '#E8F4F8', name: 'Azul claro', emotion: 'Tranquilidad y calma', bestFor: 'Dormitorios y baños' },
  { color: '#F5E6D3', name: 'Beige cálido', emotion: 'Confort y acogida', bestFor: 'Salones y comedores' },
  { color: '#E8F5E9', name: 'Verde suave', emotion: 'Equilibrio y naturaleza', bestFor: 'Despachos y estudios' },
  { color: '#FFF9E6', name: 'Amarillo pálido', emotion: 'Energía y optimismo', bestFor: 'Cocinas y áreas sociales' }];


  const projects: ProjectProps[] = [
  {
    image: "https://images.unsplash.com/photo-1722942116453-55198a24aa1b",
    alt: 'Proyecto de pintura completa en salón de Eixample con colores neutros y acabado profesional',
    title: 'Pintura integral Eixample',
    style: 'Moderno neutro'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17704750d-1764608217581.png",
    alt: 'Estucado veneciano en dormitorio principal de Gràcia con efecto marmolado elegante',
    title: 'Estucado veneciano Gràcia',
    style: 'Clásico elegante'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf53d27c-1764608220043.png",
    alt: 'Lacado de puertas y carpintería en apartamento de Poblenou con acabado satinado',
    title: 'Lacado completo Poblenou',
    style: 'Contemporáneo'
  }];


  const faqs: FAQProps[] = [
  {
    question: '¿Cuánto tarda el trabajo de pintura?',
    answer: 'Una vivienda de 70-80m² típicamente requiere 4-6 días de trabajo. Esto incluye preparación de superficies (1-2 días), aplicación de 2 capas de pintura (2-3 días) y acabados finales (1 día). Espacios más grandes o con acabados especiales pueden requerir más tiempo.'
  },
  {
    question: '¿Qué tipos de pintura son mejores para Barcelona?',
    answer: 'Para el clima húmedo de Barcelona recomendamos pinturas plásticas lavables con propiedades anti-moho. Bruguer Montó, Titan o Sherwin-Williams ofrecen excelentes opciones. Para baños y cocinas, pinturas específicas resistentes a la humedad. Todas nuestras pinturas son ecológicas sin VOC.'
  },
  {
    question: '¿Incluye el servicio reparación de grietas?',
    answer: 'Sí, la preparación de superficies incluye reparación de grietas pequeñas, masillado de imperfecciones y lijado completo. Para grietas estructurales importantes o problemas de humedad severos, realizamos un diagnóstico previo y presupuesto específico de reparación.'
  },
  {
    question: '¿Cómo me ayudan a elegir colores?',
    answer: 'Ofrecemos consultoría profesional de color sin coste adicional. Analizamos la iluminación natural de cada espacio, te mostramos cartas de colores, proporcionamos muestras físicas que puedes probar en tus paredes y te asesoramos según el estilo que buscas y la psicología del color.'
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
            src="https://images.unsplash.com/photo-1616559650862-ae8484c6c0b2"
            alt="Servicio profesional de pintura y acabados decorativos con colores vibrantes transformando interiores en Barcelona"
            className="w-full h-full object-cover pointer-events-none"
            style={{ animation: 'none', transition: 'none' }} />

        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gray-900/60 backdrop-blur-md px-8 py-6 rounded-3xl shadow-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-md">
              Pintura y Acabados: Color y Vida para Tu Hogar
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md">
              Transformamos espacios con acabados profesionales, colores expertos y técnicas decorativas de alta calidad
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              ¿Qué incluye el servicio de pintura y acabados?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed max-w-3xl mx-auto">
              Transformamos tu hogar con servicios completos de pintura y acabados decorativos. Desde la preparación 
              exhaustiva de superficies hasta los acabados finales, garantizamos resultados profesionales y duraderos.
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
              ¿Por qué elegir nuestro servicio de pintura?
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

      {/* Section 3: Painting Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipos de servicios de pintura
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluciones completas para cada necesidad y espacio de tu hogar
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {paintingTypes.map((type, index) =>
              <PaintingTypeCard key={index} {...type} />
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
                Cada fase del proceso garantiza acabados profesionales y duraderos
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
                5 fases desde consultoría de color hasta entrega con garantía
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

      {/* Section 6: Color Psychology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Psicología del color
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Elige colores según las emociones que quieres transmitir en cada espacio
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {colorPsychology.map((color, index) =>
              <ColorPsychologyCard key={index} {...color} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proyectos destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre algunos de nuestros trabajos recientes de pintura y acabados
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

      {/* Section 8: FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre pintura y acabados
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            {faqs.map((faq, index) =>
            <FAQItem key={index} {...faq} />
            )}
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transforma tu hogar con color profesional
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Solicita tu consulta de color gratuita y descubre cómo podemos darle nueva vida a tus espacios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg inline-block">

                Solicitar Consulta Gratuita
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
                Especialistas en pintura y acabados decorativos en Barcelona con más de 10 años de experiencia.
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