"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  surface: string;
  duration: string;
  description: string;
  result: string;
  materials: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  neighborhood: string;
  projectType: string;
  budgetRange: string;
}

interface FilterOptions {
  neighborhood: string;
  projectType: string;
  sizeRange: string;
  budgetRange: string;
}

export default function PortfolioProjectsPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    neighborhood: 'all',
    projectType: 'all',
    sizeRange: 'all',
    budgetRange: 'all'
  });
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
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

  const serviceMenuItems = [
  { name: 'Reformas integrales', href: '/reformas-integrales-complete-service-page' },
  { name: 'Cocinas', href: '/individual-service-kitchen-renovation' },
  { name: 'Baños', href: '/bathroom-renovation-complete-service-page' },
  { name: 'Carpintería a medida', href: '/carpinter-a-a-medida-complete-service-page' },
  { name: 'Pintura y acabados', href: '/pintura-y-acabados-complete-service-page' },
  { name: 'Electricidad e iluminación', href: '/electricidad-e-iluminaci-n-complete-service-page' },
  { name: 'Climatización', href: '/climatizaci-n-complete-service-page' }];


  const projects: ProjectDetail[] = [
  {
    id: '1',
    title: 'Reforma Integral en Eixample',
    subtitle: 'Piso Modernista Renovado',
    location: 'Carrer de Mallorca, Eixample',
    surface: '95m²',
    duration: '8 semanas',
    description: 'Transformación completa de un piso modernista de 1920, respetando los elementos arquitectónicos originales mientras se incorporaban todas las comodidades modernas. Se redistribuyó el espacio para crear una cocina abierta al salón, se renovaron completamente las instalaciones y se restauraron los techos altos y molduras originales.',
    result: 'Un hogar que combina el encanto histórico con la funcionalidad contemporánea.',
    materials: 'Parquet de roble, mármol Carrara, carpintería lacada en blanco',
    beforeImage: "/assets/images/ChatGPT_Image_1_dic_2025_11_46_32_p.m.-1764629396099.png",
    beforeAlt: 'Piso modernista antiguo con distribución original y elementos deteriorados',
    afterImage: "/assets/images/ChatGPT_Image_1_dic_2025_11_40_18_p.m.-1764629198792.png",
    afterAlt: 'Salón modernista renovado con paredes blancas limpias, suelo de madera moderna, iluminación empotrada, puertas francesas modernas con acceso a balcón y vista a cocina blanca actualizada',
    neighborhood: 'Eixample',
    projectType: 'Reforma Integral',
    budgetRange: '60000-80000'
  },
  {
    id: '2',
    title: 'Cocina Nórdica en Gràcia',
    subtitle: 'Diseño Minimalista',
    location: 'Carrer de Verdi, Gràcia',
    surface: '12m²',
    duration: '3 semanas',
    description: 'Transformación completa de una cocina pequeña en un espacio luminoso y funcional con estética nórdica. Mobiliario a medida en tonos claros, electrodomésticos integrados de última generación y máximo aprovechamiento del espacio vertical. Iluminación LED regulable y encimera de cuarzo compacto.',
    result: 'Una cocina que maximiza la funcionalidad sin sacrificar el estilo escandinavo.',
    materials: 'Madera de roble blanqueada, cuarzo compacto blanco, grifería negra mate',
    beforeImage: "https://images.unsplash.com/photo-1609065846409-23d1cb30a5d6",
    beforeAlt: 'Cocina antigua con muebles oscuros y distribución ineficiente',
    afterImage: "https://images.unsplash.com/photo-1676088933950-bae87cf34fee",
    afterAlt: 'Cocina nórdica moderna con muebles claros y diseño funcional',
    neighborhood: 'Gràcia',
    projectType: 'Cocina',
    budgetRange: '15000-25000'
  },
  {
    id: '3',
    title: 'Baño Spa en Poblenou',
    subtitle: 'Lujo Contemporáneo',
    location: 'Rambla del Poblenou',
    surface: '8m²',
    duration: '4 semanas',
    description: 'Conversión de un baño estándar en un spa privado con ducha de efecto lluvia, bañera exenta, doble lavabo suspendido y sanitarios de diseño. Revestimiento completo en porcelánico de gran formato que imita piedra natural, sistema de calefacción por suelo radiante y espejo retroiluminado con desempañador.',
    result: 'Un oasis de relajación que eleva la experiencia diaria.',
    materials: 'Porcelánico efecto piedra, grifería cromada premium, mampara vidrio templado',
    beforeImage: "https://images.unsplash.com/photo-1722153151359-d6d4ffdcd22c",
    beforeAlt: 'Baño tradicional con azulejos antiguos y distribución básica',
    afterImage: "https://images.unsplash.com/photo-1711059949530-a3057eac6f1c",
    afterAlt: 'Baño spa moderno con acabados de lujo y diseño contemporáneo',
    neighborhood: 'Poblenou',
    projectType: 'Baño',
    budgetRange: '25000-35000'
  },
  {
    id: '4',
    title: 'Loft Industrial en El Born',
    subtitle: 'Espacios Diáfanos',
    location: 'Carrer del Rec, El Born',
    surface: '120m²',
    duration: '10 semanas',
    description: 'Rehabilitación de un antiguo local comercial en un loft de estética industrial conservando elementos originales como vigas de madera y paredes de ladrillo visto. Creación de un espacio abierto con cocina integrada, zona de estar y dormitorio con cerramiento de cristal. Instalación de ventanales de hierro estilo industrial y pavimento continuo de microcemento.',
    result: 'Un espacio único que respeta el carácter industrial del barrio.',
    materials: 'Microcemento gris, acero negro, madera recuperada, ladrillo visto',
    beforeImage: "https://images.unsplash.com/photo-1638166364942-2d1304a1c3bc",
    beforeAlt: 'Local comercial vacío con estructura industrial original',
    afterImage: "https://images.unsplash.com/photo-1582181441283-b8c3fc9c251e",
    afterAlt: 'Loft industrial moderno con espacios abiertos y elementos originales conservados',
    neighborhood: 'El Born',
    projectType: 'Reforma Integral',
    budgetRange: '80000-100000'
  },
  {
    id: '5',
    title: 'Reforma Familiar en Sarrià',
    subtitle: 'Funcionalidad y Elegancia',
    location: 'Carrer Major de Sarrià',
    surface: '140m²',
    duration: '12 semanas',
    description: 'Adaptación de una vivienda tradicional a las necesidades de una familia moderna. Apertura de espacios comunes, creación de zona de estudio para niños, renovación completa de cocina con isla central, actualización de tres baños y mejora del aislamiento térmico y acústico. Carpintería exterior de aluminio con rotura de puente térmico.',
    result: 'Un hogar familiar que combina elegancia clásica con funcionalidad moderna.',
    materials: 'Parquet de nogal, mármol crema marfil, carpintería en madera lacada',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_188b57e29-1764609538299.png",
    beforeAlt: 'Vivienda familiar con distribución tradicional y necesidad de actualización',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_196fb22e0-1764629526233.png",
    afterAlt: 'Vivienda familiar renovada con espacios optimizados y diseño elegante',
    neighborhood: 'Sarrià',
    projectType: 'Reforma Integral',
    budgetRange: '100000-120000'
  },
  {
    id: '6',
    title: 'Estudio Creativo en Poble Sec',
    subtitle: 'Máximo Aprovechamiento',
    location: 'Carrer Blai, Poble Sec',
    surface: '35m²',
    duration: '5 semanas',
    description: 'Optimización total de un estudio pequeño mediante soluciones inteligentes: cama abatible integrada en armario, cocina compacta con electrodomésticos de tamaño reducido, baño completo con plato de ducha extraplano y almacenamiento vertical hasta el techo. Tonos claros y espejos estratégicos para ampliar visualmente el espacio.',
    result: 'Un estudio funcional que aprovecha cada centímetro disponible.',
    materials: 'Melamina blanca mate, cuarzo compacto, sanitarios suspendidos, espejo XXL',
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_141c16952-1764609539019.png",
    beforeAlt: 'Estudio pequeño con distribución poco eficiente y falta de almacenamiento',
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_19d97975f-1764609538327.png",
    afterAlt: 'Estudio optimizado con soluciones multifuncionales y diseño inteligente',
    neighborhood: 'Poble Sec',
    projectType: 'Estudio',
    budgetRange: '25000-35000'
  }];


  const neighborhoods = ['all', 'Eixample', 'Gràcia', 'Poblenou', 'El Born', 'Sarrià', 'Poble Sec'];
  const projectTypes = ['all', 'Reforma Integral', 'Cocina', 'Baño', 'Estudio'];
  const sizeRanges = ['all', '0-50m²', '50-100m²', '100-150m²'];
  const budgetRanges = ['all', '15000-25000', '25000-35000', '35000-60000', '60000-80000', '80000-100000', '100000-120000'];

  const filteredProjects = projects?.filter((project) => {
    if (filters.neighborhood !== 'all' && project?.neighborhood !== filters.neighborhood) return false;
    if (filters.projectType !== 'all' && project?.projectType !== filters.projectType) return false;
    if (filters.budgetRange !== 'all' && project?.budgetRange !== filters.budgetRange) return false;
    if (filters.sizeRange !== 'all') {
      const surface = parseInt(project?.surface || '0');
      const [min, max] = filters.sizeRange.split('-').map((s) => parseInt(s.replace('m²', '')));
      if (surface < min || surface > max) return false;
    }
    return true;
  });

  const handleFilterChange = (filterType: keyof FilterOptions, value: string) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const openProjectModal = (project: ProjectDetail) => {
    setSelectedProject(project);
    setShowModal(true);
    setSliderPosition(50);
  };

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
                
                {isServicesOpen &&
                <div
                  className="absolute left-0 pt-2 w-64"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}>

                    <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      {serviceMenuItems.map((item, index) =>
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] transition-colors text-sm">

                          {item.name}
                        </Link>
                    )}
                    </div>
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
                      {serviceMenuItems.map((item, index) =>
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-gray-600 hover:text-[#1e3a5f] transition-colors py-2 text-sm">

                          {item.name}
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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Proyectos: Antes y Después que Inspiran
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              En Buildnest, cada proyecto cuenta una historia de transformación. Descubre cómo hemos 
              convertido espacios ordinarios en hogares extraordinarios a lo largo de Barcelona, 
              siempre respetando la personalidad de cada cliente y las características únicas de cada vivienda.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Barrio</label>
                <select
                  value={filters.neighborhood}
                  onChange={(e) => handleFilterChange('neighborhood', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">

                  {neighborhoods?.map((neighborhood) =>
                  <option key={neighborhood} value={neighborhood}>
                      {neighborhood === 'all' ? 'Todos los barrios' : neighborhood}
                    </option>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tipo de Proyecto</label>
                <select
                  value={filters.projectType}
                  onChange={(e) => handleFilterChange('projectType', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">

                  {projectTypes?.map((type) =>
                  <option key={type} value={type}>
                      {type === 'all' ? 'Todos los tipos' : type}
                    </option>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tamaño</label>
                <select
                  value={filters.sizeRange}
                  onChange={(e) => handleFilterChange('sizeRange', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">

                  {sizeRanges?.map((range) =>
                  <option key={range} value={range}>
                      {range === 'all' ? 'Todos los tamaños' : range}
                    </option>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Presupuesto</label>
                <select
                  value={filters.budgetRange}
                  onChange={(e) => handleFilterChange('budgetRange', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">

                  {budgetRanges?.map((range) =>
                  <option key={range} value={range}>
                      {range === 'all' ? 'Todos los presupuestos' : `${range.split('-')[0]}€ - ${range.split('-')[1]}€`}
                    </option>
                  )}
                </select>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              Mostrando {filteredProjects?.length} de {projects?.length} proyectos
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects?.map((project) =>
              <div
                key={project?.id}
                onClick={() => openProjectModal(project)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">

                  {/* Before/After Images */}
                  <div className="relative h-80">
                    <div className="grid grid-cols-2 h-full">
                      <div className="relative">
                        <AppImage
                        src={project?.beforeImage || ''}
                        alt={project?.beforeAlt || ''}
                        className="w-full h-full object-cover" />

                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg font-semibold">
                          Antes
                        </div>
                      </div>
                      <div className="relative">
                        <AppImage
                        src={project?.afterImage || ''}
                        alt={project?.afterAlt || ''}
                        className="w-full h-full object-cover" />

                        <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                          Después
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                        {project?.projectType}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                        {project?.neighborhood}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project?.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{project?.subtitle}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Ubicación</div>
                        <div className="font-semibold text-sm">{project?.location}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Superficie</div>
                        <div className="font-semibold text-sm">{project?.surface}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Duración</div>
                        <div className="font-semibold text-sm">{project?.duration}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {project?.description}
                    </p>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Ver Detalles Completos
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para Transformar tu Espacio?
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Cada proyecto es único. Descubre cómo podemos hacer realidad tus ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg">
                Solicitar Presupuesto
              </button>
              <Link
                href="/individual-service-kitchen-renovation"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">

                Explorar Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {showModal && selectedProject &&
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto my-4">
            <div className="sticky top-0 bg-white z-10 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex justify-between items-center rounded-t-xl sm:rounded-t-2xl">
              <div className="flex-1 pr-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                    {selectedProject?.projectType}
                  </span>
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                    {selectedProject?.neighborhood}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-1">{selectedProject?.title}</h2>
                <p className="text-sm sm:text-base text-blue-600 font-semibold">{selectedProject?.subtitle}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors text-2xl sm:text-3xl font-bold">
                ×
              </button>
            </div>

            <div className="p-4 sm:p-6">
              {/* Interactive Before/After Slider */}
              <div className="relative h-48 sm:h-64 md:h-80 mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <AppImage
                  src={selectedProject?.beforeImage || ''}
                  alt={selectedProject?.beforeAlt || ''}
                  className="w-full h-full object-cover" />

                </div>
                <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>

                  <AppImage
                  src={selectedProject?.afterImage || ''}
                  alt={selectedProject?.afterAlt || ''}
                  className="w-full h-full object-cover" />

                </div>
                <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const parentElement = e.currentTarget.parentElement;
                  if (!parentElement) return;

                  const rect = parentElement.getBoundingClientRect();

                  const onMouseMove = (moveEvent: MouseEvent) => {
                    const x = moveEvent.clientX - rect.left;
                    const percentage = x / rect.width * 100;
                    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
                  };

                  const onMouseUp = () => {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                  };

                  document.addEventListener('mousemove', onMouseMove);
                  document.addEventListener('mouseup', onMouseUp);
                }}
                onTouchStart={(e) => {
                  const parentElement = e.currentTarget.parentElement;
                  if (!parentElement) return;

                  const rect = parentElement.getBoundingClientRect();

                  const onTouchMove = (moveEvent: TouchEvent) => {
                    const touch = moveEvent.touches[0];
                    const x = touch.clientX - rect.left;
                    const percentage = x / rect.width * 100;
                    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
                  };

                  const onTouchEnd = () => {
                    document.removeEventListener('touchmove', onTouchMove);
                    document.removeEventListener('touchend', onTouchEnd);
                  };

                  document.addEventListener('touchmove', onTouchMove);
                  document.addEventListener('touchend', onTouchEnd);
                }}>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-lg">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base">
                      ⇔
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-black bg-opacity-70 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-semibold">
                  Antes
                </div>
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-semibold">
                  Después
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <div className="text-xs text-gray-500 mb-1">📍 Ubicación</div>
                  <div className="font-bold text-xs sm:text-sm">{selectedProject?.location}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <div className="text-xs text-gray-500 mb-1">📐 Superficie</div>
                  <div className="font-bold text-xs sm:text-sm">{selectedProject?.surface}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <div className="text-xs text-gray-500 mb-1">⏱️ Duración</div>
                  <div className="font-bold text-xs sm:text-sm">{selectedProject?.duration}</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4 sm:mb-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Descripción del Proyecto</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {selectedProject?.description}
                </p>
              </div>

              {/* Result */}
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5">
                <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 text-blue-800">Resultado</h3>
                <p className="text-gray-700 text-sm sm:text-base">{selectedProject?.result}</p>
              </div>

              {/* Materials */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Materiales Destacados</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject?.materials?.split(',')?.map((material, index) =>
                <span
                  key={index}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-100 rounded-full text-gray-700 font-medium text-xs sm:text-sm">

                      {material?.trim()}
                    </span>
                )}
                </div>
              </div>

            </div>
          </div>
        </div>
      }
    </div>);

}