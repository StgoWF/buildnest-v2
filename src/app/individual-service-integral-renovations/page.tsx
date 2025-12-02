'use client';

import React, { useState } from 'react';

import Image from 'next/image';

interface ProjectGalleryItem {
  id: number;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  title: string;
  specs: string[];
  duration: string;
  area: string;
}

interface TimelinePhase {
  phase: number;
  title: string;
  duration: string;
  description: string;
  icon: string;
}

interface PricingTier {
  size: string;
  complexity: string;
  priceRange: string;
  features: string[];
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const IntegralRenovationsPage = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState<'before' | 'after'>('before');

  const benefits: Benefit[] = [
  {
    icon: '📐',
    title: 'Optimización del Espacio',
    description: 'Maximizamos cada metro cuadrado con diseño inteligente y funcional'
  },
  {
    icon: '💰',
    title: 'Aumento del Valor',
    description: 'Incrementa el valor de tu propiedad hasta un 30% con renovaciones completas'
  },
  {
    icon: '⚡',
    title: 'Eficiencia Energética',
    description: 'Reducción de hasta 40% en consumo energético con materiales modernos'
  },
  {
    icon: '🏡',
    title: 'Estilo de Vida Mejorado',
    description: 'Transforma tu hogar en el espacio que siempre soñaste'
  }];


  const timelinePhases: TimelinePhase[] = [
  {
    phase: 1,
    title: 'Consulta y Diseño',
    duration: '1-2 semanas',
    description: 'Evaluación inicial, planificación arquitectónica y diseño 3D',
    icon: '📋'
  },
  {
    phase: 2,
    title: 'Permisos y Preparación',
    duration: '2-3 semanas',
    description: 'Gestión de licencias, preparación del espacio y logística',
    icon: '📝'
  },
  {
    phase: 3,
    title: 'Demolición y Estructura',
    duration: '2-3 semanas',
    description: 'Trabajos de demolición y modificaciones estructurales',
    icon: '🔨'
  },
  {
    phase: 4,
    title: 'Instalaciones',
    duration: '2-3 semanas',
    description: 'Fontanería, electricidad, climatización y sistemas',
    icon: '🔧'
  },
  {
    phase: 5,
    title: 'Acabados',
    duration: '2-3 semanas',
    description: 'Pavimentos, revestimientos, carpintería y pintura',
    icon: '🎨'
  },
  {
    phase: 6,
    title: 'Entrega Final',
    duration: '1 semana',
    description: 'Limpieza, inspección final y entrega de llaves',
    icon: '✅'
  }];


  const projectGallery: ProjectGalleryItem[] = [
  {
    id: 1,
    beforeImage: "https://images.unsplash.com/photo-1610285168196-6bcdfb1db0da",
    beforeAlt: 'Apartamento anticuado en Barcelona antes de renovación integral con muebles viejos y paredes deterioradas',
    afterImage: "https://images.unsplash.com/photo-1721613883249-6242e2effbf3",
    afterAlt: 'Apartamento moderno en Barcelona después de renovación integral con diseño minimalista y acabados de lujo',
    title: 'Apartamento Eixample',
    specs: ['120m²', 'Redistribución completa', 'Cocina americana', 'Baños renovados'],
    duration: '10 semanas',
    area: 'Barcelona, Eixample'
  },
  {
    id: 2,
    beforeImage: "https://images.unsplash.com/photo-1585833637124-b6aad481745d",
    beforeAlt: 'Interior oscuro de apartamento antiguo con distribución cerrada y mobiliario obsoleto',
    afterImage: "https://images.unsplash.com/photo-1722764371427-a5c3910ab2e3",
    afterAlt: 'Espacio abierto luminoso con cocina integrada y diseño contemporáneo tras renovación completa',
    title: 'Piso Gràcia',
    specs: ['95m²', 'Espacio abierto', 'Suelos radiantes', 'Domótica integrada'],
    duration: '8 semanas',
    area: 'Barcelona, Gràcia'
  },
  {
    id: 3,
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_17a9f4d30-1764508497150.png",
    beforeAlt: 'Vivienda tradicional con distribución antigua y acabados desgastados necesitando renovación',
    afterImage: "https://images.unsplash.com/photo-1616716502858-8ba81909a12c",
    afterAlt: 'Casa moderna con diseño abierto, iluminación natural y acabados premium después de reforma',
    title: 'Casa Sarrià',
    specs: ['180m²', 'Jardín interior', 'Cocina de diseño', 'Suite principal'],
    duration: '12 semanas',
    area: 'Barcelona, Sarrià'
  }];


  const pricingTiers: PricingTier[] = [
  {
    size: 'Hasta 80m²',
    complexity: 'Estándar',
    priceRange: '25.000€ - 40.000€',
    features: [
    'Diseño arquitectónico básico',
    'Renovación completa',
    'Materiales calidad media-alta',
    'Gestión de permisos incluida']

  },
  {
    size: '80-120m²',
    complexity: 'Media',
    priceRange: '40.000€ - 65.000€',
    features: [
    'Diseño arquitectónico completo',
    'Redistribución espacios',
    'Materiales premium',
    'Domótica básica',
    'Garantía extendida 5 años']

  },
  {
    size: 'Más de 120m²',
    complexity: 'Alta',
    priceRange: '65.000€ - 120.000€+',
    features: [
    'Diseño arquitectónico exclusivo',
    'Reforma integral completa',
    'Materiales de lujo',
    'Domótica avanzada',
    'Gestión de proyecto dedicada',
    'Garantía 10 años']

  }];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ Reformas Completas en Barcelona
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Reformas Integrales: Tu Hogar, Completamente Renovado
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Gestión total desde el diseño hasta la entrega. Transformamos tu propiedad con planificación arquitectónica, permisos gestionados y acabados de primera calidad.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Consulta Gratuita
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Ver Proyectos
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1581023847563-21fc0dc6eb79"
                alt="Sala de estar moderna con diseño integral completo mostrando acabados de lujo y distribución optimizada"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl relative z-10" />

            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir una Reforma Integral?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformamos completamente tu espacio con beneficios tangibles y duraderos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) =>
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Proceso de Renovación Completo
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Planificación Arquitectónica</h3>
                    <p className="text-gray-600">Diseño 3D personalizado con optimización de espacios y distribución inteligente</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gestión de Permisos</h3>
                    <p className="text-gray-600">Tramitación completa de licencias municipales y autorizaciones necesarias</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Modificaciones Estructurales</h3>
                    <p className="text-gray-600">Redistribución de espacios con ingeniería estructural certificada</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Integración de Diseño Interior</h3>
                    <p className="text-gray-600">Acabados premium y personalización completa según tu estilo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_19670fc3a-1764508499851.png"
                alt="Equipo de arquitectos revisando planos y diseños 3D para proyecto de reforma integral"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl" />

            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Línea Temporal del Proyecto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proceso típico de 8-12 semanas con hitos de entrega claramente definidos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timelinePhases.map((phase) =>
            <div key={phase.phase} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{phase.icon}</div>
                  <div>
                    <div className="text-sm text-primary font-semibold">Fase {phase.phase}</div>
                    <div className="text-sm text-gray-500">{phase.duration}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transformaciones Antes y Después
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proyectos reales en Barcelona con especificaciones detalladas
            </p>
          </div>
          
          {/* Project Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectGallery.map((project, index) =>
            <button
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedProject === index ?
              'bg-primary text-white shadow-lg' :
              'bg-secondary hover:bg-secondary-dark text-gray-700'}`
              }>

                {project.title}
              </button>
            )}
          </div>

          {/* Before/After Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setShowBeforeAfter('before')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              showBeforeAfter === 'before' ?
              'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
              }>

              Antes
            </button>
            <button
              onClick={() => setShowBeforeAfter('after')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              showBeforeAfter === 'after' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
              }>

              Después
            </button>
          </div>

          {/* Selected Project Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <Image
                  src={showBeforeAfter === 'before' ?
                  projectGallery[selectedProject].beforeImage :
                  projectGallery[selectedProject].afterImage}
                  alt={showBeforeAfter === 'before' ?
                  projectGallery[selectedProject].beforeAlt :
                  projectGallery[selectedProject].afterAlt}
                  fill
                  className="object-cover" />

              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {projectGallery[selectedProject].title}
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-2xl">📍</span>
                    <span>{projectGallery[selectedProject].area}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-2xl">⏱️</span>
                    <span>Duración: {projectGallery[selectedProject].duration}</span>
                  </div>
                </div>
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Especificaciones:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {projectGallery[selectedProject].specs.map((spec, index) =>
                    <div key={index} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-secondary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Precios Transparentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rangos de costes por tamaño de propiedad y nivel de complejidad
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) =>
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6">
                  <div className="text-sm font-semibold mb-2">Complejidad {tier.complexity}</div>
                  <div className="text-3xl font-bold mb-2">{tier.size}</div>
                  <div className="text-2xl font-bold">{tier.priceRange}</div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) =>
                  <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary text-xl flex-shrink-0">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                  )}
                  </ul>
                  <button className="w-full mt-8 bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300">
                    Solicitar Presupuesto
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ingenieros Certificados</h3>
              <p className="text-gray-600">Equipo de ingenieros estructurales colegiados para garantía técnica</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gestión de Permisos</h3>
              <p className="text-gray-600">Tramitación completa de licencias municipales y autorizaciones</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Seguro Integral</h3>
              <p className="text-gray-600">Cobertura completa de responsabilidad civil y garantía decenal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Transformar Tu Hogar?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Agenda una consulta gratuita con visualización 3D de tu proyecto
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-10 py-4 rounded-lg font-semibold hover:bg-secondary-light transition-all duration-300 shadow-lg">
              Agendar Consulta Gratuita
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Llamar Ahora
            </button>
          </div>
        </div>
      </section>
    </div>);

};

export default IntegralRenovationsPage;