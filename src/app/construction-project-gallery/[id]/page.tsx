'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';

interface ProjectDetail {
  id: string;
  title: string;
  location: string;
  area: string;
  year: string;
  category: string;
  method: string;
  budget: string;
  duration: string;
  mainImage: string;
  images: {src: string;alt: string;}[];
  description: string;
  features: string[];
  specifications: {label: string;value: string;}[];
  challenges: string[];
  solutions: string[];
}

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projectsData: {[key: string]: ProjectDetail;} = {
    'villa-moderna-sostenible': {
      id: 'villa-moderna-sostenible',
      title: 'Villa moderna sostenible',
      location: 'Madrid',
      area: '180m²',
      year: '2023',
      category: 'Residencial',
      method: 'Modular',
      budget: '350.000 €',
      duration: '4 meses',
      mainImage: "https://images.unsplash.com/photo-1676899799553-351c5df900de",
      images: [
      { src: "https://images.unsplash.com/photo-1656205303543-d66c9c23c48c", alt: 'Villa exterior view with solar panels' },
      { src: "https://images.unsplash.com/photo-1675325152993-b3a5fa7f0356", alt: 'Modern living room with floor-to-ceiling windows' },
      { src: "https://images.unsplash.com/photo-1623189183752-93426ab637fc", alt: 'Sustainable kitchen with energy-efficient appliances' },
      { src: "https://images.unsplash.com/photo-1721739232890-0f9eaa091211", alt: 'Bedroom with natural lighting and eco materials' }],

      description: 'Villa de diseño moderno construida con sistema modular industrializado. Maximiza la eficiencia energética mediante el uso de paneles solares, aislamiento de alta calidad y materiales sostenibles certificados. El proyecto incluye sistema de reciclaje de agua de lluvia y climatización geotérmica.',
      features: [
      'Certificación energética A+',
      'Paneles solares 8kW',
      'Sistema de reciclaje de agua pluvial',
      'Climatización geotérmica',
      'Aislamiento térmico reforzado',
      'Ventanas de triple acristalamiento',
      'Materiales ecológicos certificados',
      'Sistema domótico completo'],

      specifications: [
      { label: 'Superficie construida', value: '180 m²' },
      { label: 'Dormitorios', value: '4' },
      { label: 'Baños', value: '3' },
      { label: 'Parcela', value: '500 m²' },
      { label: 'Orientación', value: 'Sur' },
      { label: 'Año de construcción', value: '2023' }],

      challenges: [
      'Integración de sistemas sostenibles sin comprometer el diseño',
      'Optimización del consumo energético en clima mediterráneo',
      'Coordinación de múltiples tecnologías de eficiencia energética'],

      solutions: [
      'Diseño bioclimático aprovechando la orientación sur',
      'Combinación de energía solar y geotermia para máxima eficiencia',
      'Sistema de automatización integrado para gestión energética óptima']

    },
    'casa-modular-eficiente': {
      id: 'casa-modular-eficiente',
      title: 'Casa modular eficiente',
      location: 'Barcelona',
      area: '150m²',
      year: '2023',
      category: 'Residencial',
      method: 'Prefabricado',
      budget: '280.000 €',
      duration: '3 meses',
      mainImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8672998-1764631543195.png",
      images: [
      { src: "https://images.unsplash.com/photo-1679211934250-aa8512613468", alt: 'Modular house exterior with modern design' },
      { src: "https://images.unsplash.com/photo-1733413788526-9e11a079cbae", alt: 'Open-plan living space with modular furniture' },
      { src: "https://images.unsplash.com/photo-1721742603176-a0edbf7abdc8", alt: 'Efficient kitchen with smart appliances' }],

      description: 'Casa modular construida mediante sistema prefabricado que permite reducir tiempos de construcción en un 50%. Diseño flexible que se adapta a las necesidades del cliente con acabados de alta calidad y bajo consumo energético.',
      features: [
      'Construcción en tiempo récord',
      'Diseño personalizable',
      'Bajo consumo energético clase A',
      'Estructura modular ampliable',
      'Materiales de primera calidad',
      'Instalaciones pre-montadas'],

      specifications: [
      { label: 'Superficie construida', value: '150 m²' },
      { label: 'Dormitorios', value: '3' },
      { label: 'Baños', value: '2' },
      { label: 'Tiempo de construcción', value: '3 meses' },
      { label: 'Tipo de estructura', value: 'Prefabricada modular' }],

      challenges: [
      'Transporte e instalación de módulos en zona urbana',
      'Personalización manteniendo ventajas de prefabricación'],

      solutions: [
      'Planificación logística detallada con ayuntamiento',
      'Sistema modular flexible con opciones de personalización']

    },
    'residencia-bioclimatica': {
      id: 'residencia-bioclimatica',
      title: 'Residencia bioclimática',
      location: 'Valencia',
      area: '200m²',
      year: '2023',
      category: 'Residencial',
      method: 'Tradicional',
      budget: '420.000 €',
      duration: '6 meses',
      mainImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f56a7452-1764631544778.png",
      images: [
      { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1962cf600-1764631545191.png", alt: 'Bioclimatic residence with natural ventilation' },
      { src: "https://images.unsplash.com/photo-1616716502858-8ba81909a12c", alt: 'Interior with passive cooling design' },
      { src: "https://images.unsplash.com/photo-1723257131861-7acc17ed1330", alt: 'Natural light optimization throughout the house' }],

      description: 'Residencia diseñada con criterios bioclimáticos para aprovechar las condiciones naturales del entorno. Orientación óptima, ventilación cruzada y protecciones solares inteligentes minimizan la necesidad de climatización artificial.',
      features: [
      'Diseño pasivo bioclimático',
      'Ventilación natural cruzada',
      'Protecciones solares automatizadas',
      'Inercia térmica optimizada',
      'Aprovechamiento de luz natural',
      'Jardines verticales integrados'],

      specifications: [
      { label: 'Superficie construida', value: '200 m²' },
      { label: 'Dormitorios', value: '4' },
      { label: 'Baños', value: '3' },
      { label: 'Orientación principal', value: 'Sur-Este' },
      { label: 'Jardín', value: '300 m²' }],

      challenges: [
      'Optimización de ventilación natural en clima mediterráneo',
      'Balance entre apertura y privacidad'],

      solutions: [
      'Diseño de patios interiores para ventilación cruzada',
      'Celosías orientables para control de luz y privacidad']

    },
    'vivienda-pasiva-premium': {
      id: 'vivienda-pasiva-premium',
      title: 'Vivienda pasiva premium',
      location: 'Sevilla',
      area: '165m²',
      year: '2022',
      category: 'Residencial',
      method: 'Modular',
      budget: '380.000 €',
      duration: '4 meses',
      mainImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18e10d8da-1764631543203.png",
      images: [
      { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf07facf-1764631545847.png", alt: 'Passive house with superior insulation' },
      { src: "https://img.rocket.new/generatedImages/rocket_gen_img_1781ed852-1764631549745.png", alt: 'Triple-glazed windows for thermal efficiency' },
      { src: "https://img.rocket.new/generatedImages/rocket_gen_img_19f213c8d-1764631542382.png", alt: 'Heat recovery ventilation system' }],

      description: 'Vivienda certificada bajo el estándar Passivhaus, el más exigente en eficiencia energética. Incluye triple acristalamiento, recuperador de calor y construcción hermética que reduce el consumo energético en hasta un 90%.',
      features: [
      'Certificación Passivhaus',
      'Triple acristalamiento bajo emisivo',
      'Recuperador de calor VMC',
      'Construcción hermética',
      'Puente térmico eliminado',
      'Consumo casi nulo'],

      specifications: [
      { label: 'Superficie construida', value: '165 m²' },
      { label: 'Dormitorios', value: '3' },
      { label: 'Baños', value: '2' },
      { label: 'Certificación', value: 'Passivhaus Premium' },
      { label: 'Consumo anual', value: '< 15 kWh/m²' }],

      challenges: [
      'Cumplimiento estricto del estándar Passivhaus',
      'Construcción hermética en clima cálido'],

      solutions: [
      'Testing Blower Door y termografías continuas',
      'Sistema de ventilación mecánica con recuperación de calor']

    },
    'casa-unifamiliar-eco': {
      id: 'casa-unifamiliar-eco',
      title: 'Casa unifamiliar eco',
      location: 'Bilbao',
      area: '140m²',
      year: '2022',
      category: 'Residencial',
      method: 'Prefabricado',
      budget: '260.000 €',
      duration: '3.5 meses',
      mainImage: "https://images.unsplash.com/photo-1669065514428-b96035a3faf2",
      images: [
      { src: "https://images.unsplash.com/photo-1706658150388-166b4c6e87b9", alt: 'Eco-friendly house with recycled materials' },
      { src: "https://images.unsplash.com/photo-1598959237790-1590cc2776a6", alt: 'Vertical garden integrated into facade' },
      { src: "https://images.unsplash.com/photo-1503586885784-514814479045", alt: 'Rainwater harvesting system' }],

      description: 'Casa unifamiliar construida con criterios ecológicos estrictos. Uso de materiales reciclados, jardín vertical integrado y sistema completo de aprovechamiento de agua pluvial para riego y sanitarios.',
      features: [
      'Materiales reciclados certificados',
      'Jardín vertical vivo',
      'Captación de agua pluvial',
      'Compostaje integrado',
      'Pintura ecológica sin VOC',
      'Maderas certificadas FSC'],

      specifications: [
      { label: 'Superficie construida', value: '140 m²' },
      { label: 'Dormitorios', value: '3' },
      { label: 'Baños', value: '2' },
      { label: 'Jardín vertical', value: '45 m²' },
      { label: 'Depósito agua', value: '2000 L' }],

      challenges: [
      'Integración de jardín vertical en fachada',
      'Gestión de humedad en clima lluvioso'],

      solutions: [
      'Sistema de riego automatizado con sensores',
      'Barreras de vapor y drenajes optimizados']

    },
    'chalet-industrializado': {
      id: 'chalet-industrializado',
      title: 'Chalet industrializado',
      location: 'Málaga',
      area: '190m²',
      year: '2022',
      category: 'Residencial',
      method: 'Modular',
      budget: '340.000 €',
      duration: '3 meses',
      mainImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19a4124d2-1764631542707.png",
      images: [
      { src: "https://images.unsplash.com/photo-1644849806361-7b953733c88c", alt: 'Industrialized chalet with modern architecture' },
      { src: "https://images.unsplash.com/photo-1709883798472-cf0824b274e7", alt: 'Spacious interior with high ceilings' },
      { src: "https://images.unsplash.com/photo-1667141535054-8e249287ff93", alt: 'Pool area with covered terrace' }],

      description: 'Chalet construido mediante sistema industrializado modular que garantiza plazos de entrega cerrados y máxima calidad. Incluye piscina, terrazas cubiertas y acabados de lujo con 10 años de garantía.',
      features: [
      'Construcción en 3 meses',
      'Precio cerrado sin sorpresas',
      'Garantía estructural 10 años',
      'Piscina incluida',
      'Domótica completa',
      'Acabados premium'],

      specifications: [
      { label: 'Superficie construida', value: '190 m²' },
      { label: 'Dormitorios', value: '4' },
      { label: 'Baños', value: '3' },
      { label: 'Piscina', value: '8x4 m' },
      { label: 'Parcela', value: '600 m²' }],

      challenges: [
      'Cumplimiento de plazos en temporada alta',
      'Integración de piscina en proyecto modular'],

      solutions: [
      'Fabricación en paralelo con preparación de obra',
      'Coordinación estrecha entre equipos de construcción y piscina']

    }
  };

  const project = projectsData[projectId] || projectsData['villa-moderna-sostenible'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (project?.images?.length || 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + (project?.images?.length || 1)) % (project?.images?.length || 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <AppImage
                src="/assets/images/buildnest-1764591131149.png"
                alt="Buildnest logo featuring navy blue hexagonal house with protective elements"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />

              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold text-[#1e3a5f]">Buildnest</span>
                <span className="text-[10px] sm:text-xs text-gray-500 tracking-wide uppercase hidden xs:block">Detalle del Proyecto</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/construction-project-gallery" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                ← Volver a Galería
              </Link>
              <Link href="/construction-services-main-page" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Servicios
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Contacto
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu">

              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ?
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen &&
          <div className="md:hidden py-4 border-t border-gray-100">
              <Link
              href="/construction-project-gallery"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                ← Volver a Galería
              </Link>
              <Link
              href="/construction-services-main-page"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Servicios
              </Link>
              <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Contacto
              </Link>
            </div>
          }
        </div>
      </nav>

      {/* Project Hero */}
      <section className="bg-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/construction-project-gallery" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a la galería
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {project?.category}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                {project?.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{project?.location}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>{project?.area}</span>
                <span className="text-gray-400">•</span>
                <span>{project?.year}</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project?.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Presupuesto</div>
                <div className="text-xl font-bold text-gray-900">{project?.budget}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Duración</div>
                <div className="text-xl font-bold text-gray-900">{project?.duration}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Superficie</div>
                <div className="text-xl font-bold text-gray-900">{project?.area}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Método</div>
                <div className="text-xl font-bold text-gray-900">{project?.method}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 sm:py-10 md:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative h-96 sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
              <AppImage
                src={project?.images?.[currentImageIndex]?.src || ''}
                alt={project?.images?.[currentImageIndex]?.alt || ''}
                className="w-full h-full object-cover" />

              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Previous image">

                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                aria-label="Next image">

                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {project?.images?.length || 0}
              </div>
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {project?.images?.map?.((image, index) =>
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                index === currentImageIndex ? 'ring-4 ring-blue-600' : 'opacity-60 hover:opacity-100'}`
                }>

                  <AppImage src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Características destacadas
              </h2>
              <ul className="space-y-3">
                {project?.features?.map?.((feature, index) =>
                <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                )}
              </ul>
            </div>
            
            {/* Specifications */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Especificaciones técnicas
              </h2>
              <div className="space-y-4">
                {project?.specifications?.map?.((spec, index) =>
                <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Solutions */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Desafíos del proyecto
              </h2>
              <ul className="space-y-4">
                {project?.challenges?.map?.((challenge, index) =>
                <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                )}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Soluciones implementadas
              </h2>
              <ul className="space-y-4">
                {project?.solutions?.map?.((solution, index) =>
                <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Te gustaría un proyecto similar?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contacta con nosotros y te ayudaremos a hacer realidad tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/construction-services-main-page#contacto-construction"
              className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">

              Solicitar presupuesto
            </Link>
            <Link
              href="/construction-project-gallery"
              className="bg-[#2d5a8f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-colors border-2 border-white">

              Ver más proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm">
            <p>&copy; 2025 Buildnest. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>);

}