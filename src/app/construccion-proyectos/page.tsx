'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ProjectDetailProps {
  id: string;
  title: string;
  location: string;
  area: string;
  year: string;
  type: string;
  image: string;
  alt: string;
  description: string;
  features: string[];
  images: {url: string;alt: string;}[];
}

const ProjectDetailCard: React.FC<ProjectDetailProps> = ({
  title,
  location,
  area,
  year,
  type,
  image,
  alt,
  description,
  features,
  images
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group">
        <div className="relative h-72 overflow-hidden">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-[#1e3a5f] font-bold text-sm">{type}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a5f] transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </span>
            <span>•</span>
            <span>{area}</span>
            <span>•</span>
            <span>{year}</span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center text-[#1e3a5f] font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Ver detalles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen &&
      <div
        className="fixed inset-0 bg-black/80 z-50 overflow-y-auto"
        onClick={() => setIsModalOpen(false)}>
          <div className="min-h-screen px-4 py-8">
            <div
            className="bg-white rounded-2xl max-w-5xl mx-auto relative"
            onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button
              onClick={() => setIsModalOpen(false)}
              className="sticky top-4 float-right mr-4 mt-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 sm:p-8">
                {/* Image Slider */}
                <div className="relative h-64 sm:h-80 md:h-96 mb-6 rounded-xl overflow-hidden">
                  <AppImage
                  src={images[currentImageIndex]?.url || image}
                  alt={images[currentImageIndex]?.alt || alt}
                  className="w-full h-full object-cover" />

                  
                  {images.length > 1 &&
                <>
                      <button
                    onClick={() => setCurrentImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    aria-label="Previous image">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                    onClick={() => setCurrentImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    aria-label="Next image">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) =>
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'}`
                      }
                      aria-label={`Go to image ${index + 1}`} />

                    )}
                      </div>
                    </>
                }
                </div>

                {/* Project Details */}
                <div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-[#1e3a5f] px-4 py-1 rounded-full text-sm font-semibold">
                      {type}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-gray-600 mb-6 text-sm sm:text-base">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                      {area}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {year}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                    {description}
                  </p>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                      Características principales
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {features.map((feature, index) =>
                    <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>);

};

export default function ConstruccionProyectosPage() {
  const [filterType, setFilterType] = useState<string>('all');

  const projects: ProjectDetailProps[] = [
  {
    id: '1',
    title: 'Villa moderna sostenible',
    location: 'Madrid',
    area: '180m²',
    year: '2023',
    type: 'Vivienda unifamiliar',
    image: "https://images.unsplash.com/photo-1617052167777-f0f26b5c54f4",
    alt: 'Modern sustainable villa in Madrid featuring contemporary architecture with large windows and eco-friendly materials',
    description: 'Villa de lujo construida con sistemas industrializados. Integra tecnologías de última generación para maximizar la eficiencia energética y el confort. Diseño contemporáneo con amplios espacios luminosos y acabados premium.',
    features: [
    'Certificación energética A+',
    'Paneles solares integrados',
    'Sistema de aerotermia',
    'Ventanas de triple acristalamiento',
    'Aislamiento térmico superior',
    'Domótica avanzada',
    'Jardín bioclimático',
    'Piscina sostenible'],

    images: [
    { url: "https://images.unsplash.com/photo-1541345072515-eda4d1693820", alt: 'Exterior view of modern villa' },
    { url: "https://images.unsplash.com/photo-1715163794728-74b6a5c57bd4", alt: 'Living room interior with modern design' },
    { url: "https://images.unsplash.com/photo-1721742603176-a0edbf7abdc8", alt: 'Kitchen with state-of-the-art appliances' }]

  },
  {
    id: '2',
    title: 'Casa modular eficiente',
    location: 'Barcelona',
    area: '150m²',
    year: '2023',
    type: 'Vivienda modular',
    image: "https://images.unsplash.com/photo-1680847454169-9b5395ece6f2",
    alt: 'Efficient modular house in Barcelona with minimalist design and energy-efficient systems',
    description: 'Casa modular de diseño minimalista construida en tiempo récord. Sistema industrializado que garantiza máxima calidad y eficiencia. Perfecta integración con el entorno urbano.',
    features: [
    'Construcción en 4 meses',
    'Diseño modular flexible',
    'Materiales reciclables 100%',
    'Cero emisiones en construcción',
    'Sistema de recuperación de agua',
    'Iluminación LED inteligente',
    'Espacios multifuncionales',
    'Fachada ventilada'],

    images: [
    { url: "https://images.unsplash.com/photo-1679211934250-aa8512613468", alt: 'Exterior of modular home' },
    { url: "https://images.unsplash.com/photo-1723641300130-0523b0c082f2", alt: 'Open concept living area' },
    { url: "https://images.unsplash.com/photo-1728488445397-b51358d33396", alt: 'Modern bedroom design' }]

  },
  {
    id: '3',
    title: 'Residencia bioclimática',
    location: 'Valencia',
    area: '200m²',
    year: '2023',
    type: 'Vivienda bioclimática',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1951b74f2-1764631545000.png",
    alt: 'Bioclimatic residence in Valencia designed for optimal natural climate control and sustainability',
    description: 'Vivienda diseñada para aprovechar al máximo las condiciones climáticas naturales. Orientación óptima, ventilación cruzada y materiales térmicos de alta eficiencia.',
    features: [
    'Diseño bioclimático optimizado',
    'Ventilación natural cruzada',
    'Protección solar integrada',
    'Materiales de inercia térmica',
    'Cubierta verde',
    'Sistema de riego por goteo',
    'Captación de agua de lluvia',
    'Orientación solar perfecta'],

    images: [
    { url: "https://images.unsplash.com/photo-1601182948520-b34b8e963432", alt: 'Bioclimatic house exterior' },
    { url: "https://images.unsplash.com/photo-1602092713813-ea80a1850f1d", alt: 'Interior with natural lighting' },
    { url: "https://images.unsplash.com/photo-1717362752325-714f2890d247", alt: 'Sustainable features detail' }]

  },
  {
    id: '4',
    title: 'Vivienda pasiva premium',
    location: 'Sevilla',
    area: '165m²',
    year: '2022',
    type: 'Casa pasiva',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1950845-1764631547290.png",
    alt: 'Premium passive house in Sevilla with advanced insulation and renewable energy systems',
    description: 'Casa pasiva certificada con el máximo estándar de eficiencia energética. Consumo energético casi nulo gracias a un diseño y construcción ultra-eficientes.',
    features: [
    'Certificación Passivhaus',
    'Consumo energético <15 kWh/m²',
    'Hermeticidad perfecta',
    'Ventilación mecánica con recuperación',
    'Sin puentes térmicos',
    'Confort térmico constante',
    'Calidad del aire interior superior',
    'ROI en 7 años'],

    images: [
    { url: "https://images.unsplash.com/photo-1675747158929-c93d8b931c1d", alt: 'Passive house exterior view' },
    { url: "https://images.unsplash.com/photo-1627355079302-716e5e2843f7", alt: 'Energy-efficient interior' },
    { url: "https://images.unsplash.com/photo-1667143045646-b020a4a2ea82", alt: 'Advanced climate control system' }]

  },
  {
    id: '5',
    title: 'Casa unifamiliar eco',
    location: 'Bilbao',
    area: '140m²',
    year: '2022',
    type: 'Vivienda ecológica',
    image: "https://images.unsplash.com/photo-1588310255035-29b0cafa7fcf",
    alt: 'Eco-friendly single-family home in Bilbao built with sustainable materials and green technology',
    description: 'Vivienda familiar construida con materiales naturales y reciclados. Diseño funcional que prioriza la salud y el bienestar de sus ocupantes.',
    features: [
    'Madera certificada FSC',
    'Pinturas ecológicas sin VOCs',
    'Aislamiento natural (corcho, celulosa)',
    'Sistema de compostaje integrado',
    'Huerto urbano',
    'Electrodomésticos A+++',
    'Calefacción por suelo radiante',
    'Caldera de biomasa'],

    images: [
    { url: "https://images.unsplash.com/photo-1605665057517-daddfa4007fd", alt: 'Eco home with natural materials' },
    { url: "https://images.unsplash.com/photo-1640158615434-39387462eff2", alt: 'Sustainable living spaces' },
    { url: "https://images.unsplash.com/photo-1662079551343-d15666da8776", alt: 'Natural interior finishes' }]

  },
  {
    id: '6',
    title: 'Chalet industrializado',
    location: 'Málaga',
    area: '190m²',
    year: '2022',
    type: 'Chalet modular',
    image: "https://images.unsplash.com/photo-1639397504485-84ed00b67937",
    alt: 'Industrialized chalet in Málaga showcasing prefabricated construction efficiency and modern design',
    description: 'Chalet de lujo construido mediante sistema industrializado. Combina diseño mediterráneo con tecnología constructiva avanzada. Entregado en plazo récord.',
    features: [
    'Construcción en 5 meses',
    'Piscina infinity',
    'Porche de madera tecnológica',
    'Barbacoa exterior',
    'Sistema de seguridad integral',
    'Climatización por zonas',
    'Parking para 3 vehículos',
    'Vistas panorámicas'],

    images: [
    { url: "https://images.unsplash.com/photo-1725807627719-413f3e356a97", alt: 'Luxury chalet exterior' },
    { url: "https://images.unsplash.com/photo-1704615453212-e50f3bfe61f9", alt: 'Pool and outdoor area' },
    { url: "https://images.unsplash.com/photo-1631066567019-388a362e3880", alt: 'Premium interior design' }]

  }];


  const projectTypes = [
  'all',
  'Vivienda unifamiliar',
  'Vivienda modular',
  'Vivienda bioclimática',
  'Casa pasiva',
  'Vivienda ecológica',
  'Chalet modular'];


  const filteredProjects = filterType === 'all' ?
  projects :
  projects.filter((project) => project.type === filterType);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <AppImage
                src="/assets/images/buildnest-1764591131149.png"
                alt="Buildnest logo"
                className="h-10 w-10 object-contain" />

              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1e3a5f]">Buildnest</span>
                <span className="text-xs text-gray-500 tracking-wide uppercase hidden sm:block">Construcción Industrializada</span>
              </div>
            </Link>

            <Link
              href="/construccion"
              className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium">
              Volver
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://images.unsplash.com/photo-1636247498175-d2a8d052c2b0"
            alt="Construction projects portfolio showcasing various completed homes"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white"
            style={{ textShadow: '0 4px 12px rgba(0,0,0,0.7)' }}>
              Proyectos realizados
            </h1>
            <p className="text-lg sm:text-xl text-white"
            style={{ textShadow: '0 3px 8px rgba(0,0,0,0.8)' }}>
              Viviendas que transforman espacios y vidas
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {projectTypes.map((type) =>
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
              filterType === type ?
              'bg-[#1e3a5f] text-white shadow-lg' :
              'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
              }>
                {type === 'all' ? 'Todos los proyectos' : type}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) =>
            <ProjectDetailCard key={project.id} {...project} />
            )}
          </div>

          {filteredProjects.length === 0 &&
          <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No se encontraron proyectos de este tipo.</p>
            </div>
          }
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para tu proyecto?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Comienza tu vivienda industrializada hoy mismo
          </p>
          <Link
            href="/construccion#contacto"
            className="inline-block bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
            Solicita tu presupuesto
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">&copy; 2025 Buildnest. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>);

}