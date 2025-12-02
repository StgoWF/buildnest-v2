'use client';

import React, { useState } from 'react';

import Image from 'next/image';

interface MaterialOption {
  id: number;
  category: string;
  name: string;
  image: string;
  alt: string;
  priceRange: string;
  features: string[];
}

interface ConfiguratorOption {
  layout: string[];
  materials: string[];
  fixtures: string[];
}

interface ProcessPhase {
  week: string;
  title: string;
  tasks: string[];
  icon: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  projectImage: string;
  projectAlt: string;
  beforeImage: string;
  beforeAlt: string;
}

interface Challenge {
  icon: string;
  title: string;
  description: string;
  solution: string;
}

const BathroomRenovationPage = () => {
  const [selectedLayout, setSelectedLayout] = useState<string>('standard');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('porcelain');
  const [selectedFixture, setSelectedFixture] = useState<string>('modern');
  const [bathroomSize, setBathroomSize] = useState<number>(5);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number>(0);

  const layoutOptions = [
  { id: 'standard', name: 'Diseño Estándar', description: 'Distribución clásica funcional' },
  { id: 'open', name: 'Concepto Abierto', description: 'Espacios amplios y luminosos' },
  { id: 'compact', name: 'Optimizado', description: 'Máximo aprovechamiento de espacio' }];


  const materialShowcase: MaterialOption[] = [
  {
    id: 1,
    category: 'Piedra Natural',
    name: 'Mármol Carrara',
    image: "https://images.unsplash.com/photo-1706629503586-2731f65587ae",
    alt: 'Baño de lujo con revestimiento de mármol Carrara blanco y vetas grises',
    priceRange: '120€-180€/m²',
    features: ['Elegancia atemporal', 'Resistente al agua', 'Fácil mantenimiento']
  },
  {
    id: 2,
    category: 'Porcelánico',
    name: 'Gres Porcelánico Premium',
    image: "https://images.unsplash.com/photo-1656646523653-fffffc75b0e5",
    alt: 'Baño moderno con azulejos porcelánicos de gran formato en tonos neutros',
    priceRange: '45€-85€/m²',
    features: ['Gran formato', 'Antideslizante', 'Variedad de diseños']
  },
  {
    id: 3,
    category: 'Diseño',
    name: 'Mosaicos Artísticos',
    image: "https://images.unsplash.com/photo-1641932523502-09707810232e",
    alt: 'Baño contemporáneo con mosaicos decorativos y patrones geométricos en la pared',
    priceRange: '80€-150€/m²',
    features: ['Personalización única', 'Detalles artísticos', 'Acabado premium']
  },
  {
    id: 4,
    category: 'Tecnología',
    name: 'Sistema Smart',
    image: "https://images.unsplash.com/photo-1499037249395-fffe70798aaa",
    alt: 'Baño inteligente con espejo LED, grifería automática y controles digitales',
    priceRange: '200€-400€/unidad',
    features: ['Grifería digital', 'Iluminación LED', 'Control por voz']
  }];


  const processTimeline: ProcessPhase[] = [
  {
    week: 'Semana 1',
    title: 'Diseño y Planificación',
    tasks: [
    'Consulta inicial y mediciones',
    'Diseño 3D personalizado',
    'Selección de materiales',
    'Presupuesto detallado'],

    icon: '📐'
  },
  {
    week: 'Semana 2',
    title: 'Demolición y Preparación',
    tasks: [
    'Protección de áreas adyacentes',
    'Demolición controlada',
    'Evacuación de escombros',
    'Inspección de instalaciones existentes'],

    icon: '🔨'
  },
  {
    week: 'Semana 3',
    title: 'Instalaciones Base',
    tasks: [
    'Renovación fontanería',
    'Sistema eléctrico nuevo',
    'Impermeabilización profesional',
    'Sistema de ventilación'],

    icon: '🔧'
  },
  {
    week: 'Semana 4',
    title: 'Revestimientos',
    tasks: [
    'Colocación de azulejos',
    'Instalación de pavimentos',
    'Acabados de paredes',
    'Detalles decorativos'],

    icon: '🎨'
  },
  {
    week: 'Semana 5',
    title: 'Instalación de Fixtures',
    tasks: [
    'Montaje de sanitarios',
    'Instalación de grifería',
    'Mampara y accesorios',
    'Iluminación LED'],

    icon: '💡'
  },
  {
    week: 'Semana 6',
    title: 'Finalización',
    tasks: [
    'Limpieza profunda',
    'Inspección de calidad',
    'Pruebas de funcionamiento',
    'Entrega y garantía'],

    icon: '✅'
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    location: 'Eixample, Barcelona',
    rating: 5,
    comment: 'Transformaron nuestro baño antiguo en un spa moderno. La gestión fue impecable y cumplieron todos los plazos. El sistema de ventilación resolvió completamente los problemas de humedad.',
    projectImage: "https://images.unsplash.com/photo-1619439677617-d1496b4d24f0",
    projectAlt: 'Baño renovado en Eixample con ducha de lluvia, mampara de cristal y azulejos modernos',
    beforeImage: "https://images.unsplash.com/photo-1680605237049-bfd86e8ffcd1",
    beforeAlt: 'Baño antiguo con azulejos desgastados y sanitarios obsoletos antes de renovación'
  },
  {
    id: 2,
    name: 'Carlos Fernández',
    location: 'Gràcia, Barcelona',
    rating: 5,
    comment: 'El equipo resolvió el desafío del espacio reducido con un diseño ingenioso. Ahora tenemos un baño funcional y elegante. La impermeabilización es perfecta, sin filtraciones.',
    projectImage: "https://images.unsplash.com/photo-1721274506081-4cf0555338e3",
    projectAlt: 'Baño compacto optimizado con almacenamiento inteligente y acabados contemporáneos',
    beforeImage: "https://images.unsplash.com/photo-1650566854582-bc6c8ce3aa67",
    beforeAlt: 'Baño pequeño antiguo con distribución ineficiente y azulejos viejos'
  },
  {
    id: 3,
    name: 'Laura Martínez',
    location: 'Sarrià, Barcelona',
    rating: 5,
    comment: 'La renovación incluyó actualización completa de fontanería y electricidad. Los materiales de alta gama que recomendaron han superado nuestras expectativas. Trabajo profesional de principio a fin.',
    projectImage: "https://images.unsplash.com/photo-1651065207820-0ffcdf46c6c6",
    projectAlt: 'Baño de lujo con mármol natural, bañera exenta y accesorios premium',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_154f2822f-1764508495968.png",
    beforeAlt: 'Baño tradicional con instalaciones antiguas necesitando actualización completa'
  }];


  const barcelonaChallenges: Challenge[] = [
  {
    icon: '📏',
    title: 'Espacios Reducidos',
    description: 'Baños típicos de 3-5m² en pisos antiguos',
    solution: 'Diseño optimizado con sanitarios suspendidos y almacenamiento vertical integrado'
  },
  {
    icon: '🚰',
    title: 'Fontanería Antigua',
    description: 'Tuberías de plomo y sistemas obsoletos',
    solution: 'Renovación completa con materiales modernos y normativa actualizada'
  },
  {
    icon: '📋',
    title: 'Normativa Municipal',
    description: 'Requisitos específicos en edificios protegidos',
    solution: 'Gestión completa de permisos y cumplimiento normativo garantizado'
  },
  {
    icon: '💧',
    title: 'Problemas de Humedad',
    description: 'Filtraciones y ventilación deficiente',
    solution: 'Impermeabilización profesional y sistemas de ventilación mecánica'
  }];


  const calculateEstimate = () => {
    const basePrice = bathroomSize * 1200;
    const materialMultiplier = selectedMaterial === 'marble' ? 1.5 : selectedMaterial === 'porcelain' ? 1.2 : 1;
    const fixtureMultiplier = selectedFixture === 'luxury' ? 1.4 : selectedFixture === 'modern' ? 1.2 : 1;

    const total = basePrice * materialMultiplier * fixtureMultiplier;
    return {
      min: Math.round(total * 0.85),
      max: Math.round(total * 1.15)
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚿 Especialistas en Baños Barcelona
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Baños que Combinan Diseño y Funcionalidad
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Transformación completa de tu baño con fontanería actualizada, impermeabilización profesional y acabados premium. Especialistas en pisos antiguos de Barcelona.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Consulta de Urgencia
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Ver Galería
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1722152750007-3e4647a5414d"
                alt="Baño moderno de diseño con ducha de lluvia, mamparas de cristal y iluminación LED ambiental"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl relative z-10" />

            </div>
          </div>
        </div>
      </section>

      {/* Service Breakdown Section */}
      <section className="py-20 px-4 bg-secondary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Alcance Completo de la Renovación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicio integral que cubre todos los aspectos de tu baño nuevo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            { icon: '🚰', title: 'Fontanería Completa', desc: 'Renovación total de tuberías, desagües y sistemas de agua' },
            { icon: '⚡', title: 'Instalación Eléctrica', desc: 'Circuito dedicado con protección IP67 y iluminación LED' },
            { icon: '💧', title: 'Impermeabilización', desc: 'Sistema profesional contra filtraciones y humedades' },
            { icon: '🎨', title: 'Alicatado Premium', desc: 'Colocación experta de azulejos y revestimientos' },
            { icon: '🚿', title: 'Sanitarios y Grifería', desc: 'Instalación de fixtures de alta calidad y diseño' },
            { icon: '💨', title: 'Ventilación Mecánica', desc: 'Sistema de extracción para control de humedad' }].
            map((service, index) =>
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Bathroom Configurator */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Configurador Interactivo de Baño
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora opciones de diseño con vista previa 3D en tiempo real
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Layout Selection */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-4">Distribución</label>
                <div className="space-y-3">
                  {layoutOptions.map((option) =>
                  <button
                    key={option.id}
                    onClick={() => setSelectedLayout(option.id)}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                    selectedLayout === option.id ?
                    'bg-primary text-white shadow-lg' :
                    'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200'}`
                    }>

                      <div className="font-semibold mb-1">{option.name}</div>
                      <div className={`text-sm ${selectedLayout === option.id ? 'text-white/80' : 'text-gray-500'}`}>
                        {option.description}
                      </div>
                    </button>
                  )}
                </div>
              </div>

              {/* Material Selection */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-4">Material</label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">

                  <option value="porcelain">Gres Porcelánico</option>
                  <option value="marble">Piedra Natural</option>
                  <option value="mosaic">Mosaicos Diseño</option>
                </select>
              </div>

              {/* Fixture Selection */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-4">Gama de Fixtures</label>
                <select
                  value={selectedFixture}
                  onChange={(e) => setSelectedFixture(e.target.value)}
                  className="w-full p-4 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">

                  <option value="standard">Estándar</option>
                  <option value="modern">Moderno</option>
                  <option value="luxury">Lujo</option>
                </select>
              </div>
            </div>

            {/* Size Slider */}
            <div className="mb-8">
              <label className="block text-lg font-bold text-gray-900 mb-4">
                Tamaño del Baño: {bathroomSize}m²
              </label>
              <input
                type="range"
                min="3"
                max="15"
                value={bathroomSize}
                onChange={(e) => setBathroomSize(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>3m²</span>
                <span>15m²</span>
              </div>
            </div>

            {/* Estimate Display */}
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-xl">
              <div className="text-center">
                <div className="text-sm font-semibold mb-2">Presupuesto Estimado</div>
                <div className="text-4xl font-bold mb-4">
                  {estimate.min.toLocaleString()}€ - {estimate.max.toLocaleString()}€
                </div>
                <p className="text-white/80 mb-6">
                  Incluye materiales, mano de obra, gestión de residuos y garantía
                </p>
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Solicitar Presupuesto Detallado
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barcelona Challenges Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Desafíos Típicos en Barcelona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones especializadas para pisos antiguos y normativa local
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {barcelonaChallenges.map((challenge, index) =>
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{challenge.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                      <div className="text-sm font-semibold text-primary mb-2">✓ Nuestra Solución</div>
                      <p className="text-gray-700">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Material Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Materiales Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selección curada de acabados de alta calidad y tecnología inteligente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialShowcase.map((material) =>
            <div key={material.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                  src={material.image}
                  alt={material.alt}
                  fill
                  className="object-cover" />

                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                    {material.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{material.name}</h3>
                  <div className="text-primary font-bold text-lg mb-4">{material.priceRange}</div>
                  <ul className="space-y-2">
                    {material.features.map((feature, idx) =>
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-primary">✓</span>
                        <span>{feature}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 bg-secondary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proceso de Renovación: 4-6 Semanas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fases detalladas con actualizaciones diarias de progreso
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processTimeline.map((phase, index) =>
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{phase.icon}</div>
                  <div>
                    <div className="text-sm text-primary font-semibold">{phase.week}</div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {phase.tasks.map((task, idx) =>
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{task}</span>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Client Testimonials with Before/After */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Testimonios de Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proyectos reales de baños en Barcelona con resultados verificados
            </p>
          </div>

          {/* Testimonial Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {testimonials.map((testimonial, index) =>
            <button
              key={testimonial.id}
              onClick={() => setSelectedTestimonial(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedTestimonial === index ?
              'bg-primary text-white shadow-lg' :
              'bg-secondary hover:bg-secondary-dark text-gray-700'}`
              }>

                {testimonial.name}
              </button>
            )}
          </div>

          {/* Selected Testimonial Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <Image
                  src={testimonials[selectedTestimonial].projectImage}
                  alt={testimonials[selectedTestimonial].projectAlt}
                  fill
                  className="object-cover" />

              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {testimonials[selectedTestimonial].name}
                    </h3>
                    <p className="text-gray-600">{testimonials[selectedTestimonial].location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[selectedTestimonial].rating)].map((_, i) =>
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                  )}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[selectedTestimonial].comment}"
                </p>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={testimonials[selectedTestimonial].beforeImage}
                    alt={testimonials[selectedTestimonial].beforeAlt}
                    fill
                    className="object-cover" />

                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                    Antes de la Renovación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">🚨</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Urgencia con tu Baño?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Servicio de consulta urgente disponible para filtraciones y reparaciones críticas
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-red-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Llamar Ahora: 900 123 456
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              WhatsApp Urgente
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforma Tu Baño Hoy
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Visualización 3D gratuita de tu proyecto + presupuesto sin compromiso
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-secondary-light transition-all duration-300 shadow-lg">
              Agendar Consulta Gratuita
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Calcular Presupuesto
            </button>
          </div>
        </div>
      </section>
    </div>);

};

export default BathroomRenovationPage;