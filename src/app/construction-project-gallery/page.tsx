'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface GalleryProject {
  id: string;
  title: string;
  location: string;
  area: string;
  year: string;
  category: string;
  method: string;
  image: string;
  alt: string;
  features: string[];
  description: string;
}

const FilterButton: React.FC<{active: boolean;onClick: () => void;children: React.ReactNode;}> = ({ active, onClick, children }) =>
<button
  onClick={onClick}
  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
  active ?
  'bg-blue-600 text-white shadow-md' :
  'bg-white text-gray-700 hover:bg-gray-100'}`
  }>

    {children}
  </button>;


export default function ConstructionProjectGalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMethod, setActiveMethod] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects: GalleryProject[] = [
  {
    id: 'villa-moderna-sostenible',
    title: 'Villa moderna sostenible',
    location: 'Madrid',
    area: '180m²',
    year: '2023',
    category: 'residential',
    method: 'modular',
    image: "https://images.unsplash.com/photo-1560149769-d443e1bfa85d",
    alt: 'Modern sustainable villa in Madrid with contemporary architecture and solar panels',
    features: ['Certificación A+', 'Paneles solares', 'Sistema de reciclaje de agua'],
    description: 'Villa de diseño moderno con máxima eficiencia energética y materiales sostenibles.'
  },
  {
    id: 'casa-modular-eficiente',
    title: 'Casa modular eficiente',
    location: 'Barcelona',
    area: '150m²',
    year: '2023',
    category: 'residential',
    method: 'prefabricated',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a6bd7f1-1764631544722.png",
    alt: 'Efficient modular house in Barcelona built with prefabricated components',
    features: ['Construcción rápida', 'Diseño flexible', 'Bajo consumo energético'],
    description: 'Casa modular construida en tiempo récord con componentes prefabricados de alta calidad.'
  },
  {
    id: 'residencia-bioclimatica',
    title: 'Residencia bioclimática',
    location: 'Valencia',
    area: '200m²',
    year: '2023',
    category: 'residential',
    method: 'traditional',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18a31da63-1764631544966.png",
    alt: 'Bioclimatic residence in Valencia designed for natural temperature regulation',
    features: ['Diseño pasivo', 'Ventilación natural', 'Orientación óptima'],
    description: 'Residencia diseñada para aprovechar las condiciones climáticas naturales y minimizar el consumo energético.'
  },
  {
    id: 'vivienda-pasiva-premium',
    title: 'Vivienda pasiva premium',
    location: 'Sevilla',
    area: '165m²',
    year: '2022',
    category: 'residential',
    method: 'modular',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_100a806c3-1764631547021.png",
    alt: 'Premium passive house in Sevilla with superior insulation',
    features: ['Estándar Passivhaus', 'Triple acristalamiento', 'Recuperador de calor'],
    description: 'Vivienda certificada Passivhaus con el más alto estándar de eficiencia energética.'
  },
  {
    id: 'casa-unifamiliar-eco',
    title: 'Casa unifamiliar eco',
    location: 'Bilbao',
    area: '140m²',
    year: '2022',
    category: 'residential',
    method: 'prefabricated',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16e50758a-1764631544872.png",
    alt: 'Eco-friendly single-family house in Bilbao with sustainable materials',
    features: ['Materiales reciclados', 'Jardín vertical', 'Captación de agua pluvial'],
    description: 'Casa unifamiliar construida con criterios ecológicos y materiales sostenibles.'
  },
  {
    id: 'chalet-industrializado',
    title: 'Chalet industrializado',
    location: 'Málaga',
    area: '190m²',
    year: '2022',
    category: 'residential',
    method: 'modular',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1677b12e5-1764631543204.png",
    alt: 'Industrialized chalet in Malaga built with modular construction methods',
    features: ['Construcción en 3 meses', 'Precio cerrado', 'Garantía 10 años'],
    description: 'Chalet construido mediante sistema industrializado con plazos garantizados.'
  },
  {
    id: 'edificio-oficinas-sostenible',
    title: 'Edificio de oficinas sostenible',
    location: 'Madrid',
    area: '500m²',
    year: '2023',
    category: 'commercial',
    method: 'traditional',
    image: "https://images.unsplash.com/photo-1613694438123-c920cce041d9",
    alt: 'Sustainable office building in Madrid with modern glass facade',
    features: ['LEED Gold', 'Iluminación LED', 'Sistema de climatización eficiente'],
    description: 'Edificio de oficinas con certificación LEED y diseño sostenible.'
  },
  {
    id: 'nave-industrial-modular',
    title: 'Nave industrial modular',
    location: 'Zaragoza',
    area: '800m²',
    year: '2023',
    category: 'industrial',
    method: 'prefabricated',
    image: "https://images.unsplash.com/photo-1689752784205-05109681c803",
    alt: 'Modular industrial warehouse in Zaragoza with steel frame structure',
    features: ['Montaje en 2 semanas', 'Estructura metálica', 'Ampliable'],
    description: 'Nave industrial prefabricada de montaje rápido y diseño versátil.'
  },
  {
    id: 'complejo-residencial-eco',
    title: 'Complejo residencial eco',
    location: 'Barcelona',
    area: '1200m²',
    year: '2022',
    category: 'residential',
    method: 'modular',
    image: "https://images.unsplash.com/photo-1659858358968-2b588aa315ef",
    alt: 'Eco-friendly residential complex in Barcelona with green roofs',
    features: ['12 viviendas', 'Zonas comunes verdes', 'Placas solares compartidas'],
    description: 'Complejo residencial sostenible con espacios verdes y energía compartida.'
  }];


  const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'residential', label: 'Residencial' },
  { id: 'commercial', label: 'Comercial' },
  { id: 'industrial', label: 'Industrial' }];


  const methods = [
  { id: 'all', label: 'Todos' },
  { id: 'traditional', label: 'Tradicional' },
  { id: 'modular', label: 'Modular' },
  { id: 'prefabricated', label: 'Prefabricado' }];


  const filteredProjects = projects?.filter?.((project) => {
    const categoryMatch = activeCategory === 'all' || project.category === activeCategory;
    const methodMatch = activeMethod === 'all' || project.method === activeMethod;
    return categoryMatch && methodMatch;
  });

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
                <span className="text-[10px] sm:text-xs text-gray-500 tracking-wide uppercase hidden xs:block">Galería de Proyectos</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/construction-services-main-page" className="text-gray-700 hover:text-[#1e3a5f] transition-colors gallery-nav-item">
                Servicios
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors gallery-nav-item">
                Quiénes somos
              </Link>
              <Link href="/portfolio-projects" className="text-gray-700 hover:text-[#1e3a5f] transition-colors gallery-nav-item">
                Portafolio
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#1e3a5f] transition-colors gallery-nav-item">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors gallery-nav-item">
                Contacto
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle gallery menu">

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
              href="/construction-services-main-page"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors gallery-nav-item-mobile"
              onClick={() => setIsMobileMenuOpen(false)}>

                Servicios
              </Link>
              <Link
              href="/about-us"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors gallery-nav-item-mobile"
              onClick={() => setIsMobileMenuOpen(false)}>

                Quiénes somos
              </Link>
              <Link
              href="/portfolio-projects"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors gallery-nav-item-mobile"
              onClick={() => setIsMobileMenuOpen(false)}>

                Portafolio
              </Link>
              <Link
              href="/blog"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors gallery-nav-item-mobile"
              onClick={() => setIsMobileMenuOpen(false)}>

                Blog
              </Link>
              <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors gallery-nav-item-mobile"
              onClick={() => setIsMobileMenuOpen(false)}>

                Contacto
              </Link>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://images.unsplash.com/photo-1564138376024-22ff13d6735b"
            alt="Gallery of construction projects showcasing modern architecture"
            className="w-full h-full object-cover brightness-75" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 text-white"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)'
            }}>
              Galería de Proyectos
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl"
            style={{
              textShadow: '0 3px 8px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)'
            }}>
              Explora nuestra colección de proyectos de construcción industrializada
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-14 sm:top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Tipo de Proyecto</h3>
              <div className="flex flex-wrap gap-2">
                {categories?.map?.((category) =>
                <FilterButton
                  key={category.id}
                  active={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}>

                    {category.label}
                  </FilterButton>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Método de Construcción</h3>
              <div className="flex flex-wrap gap-2">
                {methods?.map?.((method) =>
                <FilterButton
                  key={method.id}
                  active={activeMethod === method.id}
                  onClick={() => setActiveMethod(method.id)}>

                    {method.label}
                  </FilterButton>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {filteredProjects?.length || 0} de {projects?.length || 0} proyectos
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects?.map?.((project) =>
            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <AppImage
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}</span>
                    <span className="text-gray-400">•</span>
                    <span>{project.area}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features?.slice?.(0, 2)?.map?.((feature, index) =>
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {feature}
                      </span>
                  )}
                  </div>
                  
                  <Link
                  href={`/construction-project-gallery/${project.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">

                    Ver detalles
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
            ¿Listo para tu proyecto?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-5 sm:mb-6 md:mb-8 leading-relaxed px-4">
            Contacta con nosotros y te ayudaremos a hacer realidad tu proyecto de construcción
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link
              href="/construction-services-main-page#contacto-construction"
              className="bg-white text-[#1e3a5f] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-colors shadow-lg">

              Solicitar presupuesto
            </Link>
            <Link
              href="/construction-services-main-page"
              className="bg-[#2d5a8f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#1e3a5f] transition-colors border-2 border-white">

              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <AppImage
                  src="/assets/images/buildnest-1764591131149.png"
                  alt="Buildnest logo"
                  className="h-8 w-8 object-contain" />

                <h3 className="text-white text-base sm:text-lg font-bold">Buildnest</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                Especialistas en construcción industrializada con más de 10 años de experiencia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/construction-services-main-page" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link href="/about-us" className="hover:text-white transition-colors">Nosotros</Link></li>
                <li><Link href="/portfolio-projects" className="hover:text-white transition-colors">Portafolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>Barcelona, España</li>
                <li>Tel: +34 123 456 789</li>
                <li>construccion@buildnest.es</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Horario</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>Lunes - Viernes: 9:00 - 18:00</li>
                <li>Sábado: 10:00 - 14:00</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
            <p>&copy; 2025 Buildnest. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>);

}