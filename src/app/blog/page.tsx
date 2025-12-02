"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import ReformasFooter from '@/components/ReformasFooter';

interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    avatarAlt: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

interface FilterOptions {
  renovationType: string;
  budgetRange: string;
  neighborhood: string;
  complexity: string;
}

const BlogPage: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);
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
  { name: 'Reformas integrales', href: '/reformas-integrales-complete-service-page', enabled: true },
  { name: 'Cocinas', href: '/individual-service-kitchen-renovation', enabled: true },
  { name: 'Baños', href: '/bathroom-renovation-complete-service-page', enabled: true },
  { name: 'Carpintería a medida', href: '/carpinter-a-a-medida-complete-service-page', enabled: true },
  { name: 'Pintura y acabados', href: '/pintura-y-acabados-complete-service-page', enabled: true },
  { name: 'Electricidad e iluminación', href: '/electricidad-e-iluminaci-n-complete-service-page', enabled: true },
  { name: 'Climatización', href: '/climatizaci-n-complete-service-page', enabled: true }];


  const categories = [
  { id: 'all', name: 'Todos los Artículos', icon: '📚' },
  { id: 'design-trends', name: 'Tendencias de Diseño', icon: '🎨' },
  { id: 'renovation-tips', name: 'Consejos de Renovación', icon: '🔧' },
  { id: 'featured-projects', name: 'Proyectos Destacados', icon: '⭐' },
  { id: 'barcelona-regulations', name: 'Normativa Barcelona', icon: '📋' }];


  const articles: Article[] = [
  {
    id: '7',
    title: '¿Cuánto cuesta reformar una cocina en 2025? Guía definitiva para propietarios en Barcelona y España',
    category: 'renovation-tips',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e04e8095-1764613387296.png",
    alt: 'Modern kitchen renovation in Barcelona showcasing premium finishes, quartz countertops, and integrated appliances with detailed cost breakdown overlay',
    excerpt: 'Descubre los precios actualizados 2025 para reformar cocinas en Barcelona: desde reformas básicas (€7k-€10k) hasta integrales premium (€15k-€20k+). Incluye tabla comparativa, factores que afectan costos y consejos para optimizar tu presupuesto sin sacrificar calidad.',
    author: {
      name: 'David López',
      role: 'Especialista en Cocinas',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11b7da0a5-1763291827406.png",
      avatarAlt: 'Professional headshot of David López, kitchen renovation specialist with 10+ years of experience in Barcelona'
    },
    date: '2025-12-01',
    readTime: '12 min',
    tags: ['Cocinas', 'Presupuestos 2025', 'Guía Completa', 'Barcelona'],
    featured: true
  },
  {
    id: '8',
    title: '¿Cuánto cuesta reformar un baño en 2025? Guía completa por tamaños, calidades y barrios',
    category: 'renovation-tips',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d92baf67-1764614278160.png",
    alt: 'Modern bathroom renovation in Barcelona showcasing premium tiles, rainfall shower, and contemporary fixtures with detailed cost breakdown overlay',
    excerpt: 'Guía actualizada 2025 de costes para reformar baños en Barcelona: desde reformas básicas (€2k-€5k) hasta integrales premium (€10k-€15k+). Incluye rangos por m², factores que influyen en el precio y consejos para optimizar tu presupuesto sin sacrificar calidad.',
    author: {
      name: 'Carlos Ruiz',
      role: 'Diseñador de Interiores',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15ebdb31b-1763300068284.png",
      avatarAlt: 'Professional headshot of Carlos Ruiz, interior designer specializing in bathroom renovations in Barcelona'
    },
    date: '2025-12-01',
    readTime: '11 min',
    tags: ['Baños', 'Presupuestos 2025', 'Guía Completa', 'Barcelona'],
    featured: true
  },
  {
    id: '9',
    title: '¿Por qué vale la pena reformar un piso antes de vender o alquilar? Guía 2025 para maximizar tu ganancia',
    category: 'investment-tips',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a220e7a2-1764615120247.png",
    alt: 'Before and after comparison of Barcelona apartment renovation showing value increase and ROI for selling or renting property',
    excerpt: 'Cuando tienes un piso viejo o con desperfectos, piensa: "¿Reformar o vender directo?", o "¿Reforma básica o integral?". Esta decisión puede marcar la diferencia entre una venta/alquiler mediocre o un buen retorno de inversión. Descubre cuánto se revaloriza un piso con reforma (20-42% de incremento) y qué mejoras dan mejor retorno.',
    author: {
      name: 'María García',
      role: 'Arquitecta Principal',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a62c4bce-1763301484887.png",
      avatarAlt: 'Professional headshot of María García, lead architect and investment property specialist at Buildnest'
    },
    date: '2025-12-01',
    readTime: '10 min',
    tags: ['Inversión', 'ROI', 'Revalorización', 'Barcelona'],
    featured: true
  },
  {
    id: '10',
    title: '¿Cuánto cuesta una reforma integral en Barcelona en 2025? Precios reales, desglose por partidas y consejos',
    category: 'renovation-tips',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fed23f84-1764621202591.png",
    alt: 'Comprehensive Barcelona apartment integral renovation showing detailed cost breakdown by sections and quality levels with 2025 pricing',
    excerpt: 'Reformar un piso completo es una de las inversiones más importantes. Descubre precios reales 2025: desde calidad estándar (700-1.200 €/m²) hasta gama alta (1.800-2.200 €/m²). Incluye desglose detallado por partidas, ejemplos por tamaño de piso, y consejos para no pasarte del presupuesto.',
    author: {
      name: 'María García',
      role: 'Arquitecta Principal',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d075498-1763294632963.png",
      avatarAlt: 'Professional headshot of María García, lead architect specializing in comprehensive renovations at Buildnest'
    },
    date: '2025-12-01',
    readTime: '15 min',
    tags: ['Reforma Integral', 'Presupuestos 2025', 'Barcelona', 'Guía Completa'],
    featured: true
  },
  {
    id: '11',
    title: 'Qué reformas aumentan más el valor de tu vivienda en 2025 — Guía para maximizar la inversión',
    category: 'investment-tips',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_116a85a29-1764617876452.png",
    alt: 'Barcelona property renovation comparison showing value increase percentages and ROI with detailed breakdown of most valuable improvements',
    excerpt: 'Una vivienda reformada tiene de media un valor ~24% mayor que una sin reformar. En Barcelona, una reforma integral puede aumentar el valor hasta un 42%. Descubre qué reformas dan más retorno: cocina, baño, eficiencia energética, y cómo calcular tu ROI.',
    author: {
      name: 'María García',
      role: 'Arquitecta Principal',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18107e6ba-1763294286127.png",
      avatarAlt: 'Professional headshot of María García, lead architect and investment specialist at Buildnest Barcelona'
    },
    date: '2025-12-01',
    readTime: '13 min',
    tags: ['ROI', 'Revalorización', 'Inversión', 'Barcelona'],
    featured: true
  },
  {
    id: '12',
    title: 'Permisos para hacer una reforma interior en Barcelona en 2025: guía práctica para no tener problemas',
    category: 'barcelona-regulations',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18701c9eb-1764618876468.png",
    alt: 'Barcelona renovation permits documentation and architectural plans showing municipal approval process for interior reforms',
    excerpt: 'Si quieres reformar un piso en Barcelona (cocina, baño, tabiquería, instalaciones…), no basta con llamar a una cuadrilla y empezar a picar: el Ayuntamiento exige diferentes permisos de obra según el tipo de reforma. Descubre qué permiso corresponde a cada tipo de reforma, qué trámites hay y qué pasa si no lo haces bien.',
    author: {
      name: 'Laura Martínez',
      role: 'Gestora de Proyectos',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_149ca2bb7-1763295713867.png",
      avatarAlt: 'Professional headshot of Laura Martínez, project manager and Barcelona regulations expert at Buildnest'
    },
    date: '2025-12-01',
    readTime: '14 min',
    tags: ['Permisos', 'Normativa Barcelona', 'Guía Legal', 'Reformas 2025'],
    featured: true
  },
  {
    id: '13',
    title: '¿Cuánto tarda una reforma en 2025? Tiempos reales por tipo de obra, según estudios y empresas del sector',
    category: 'renovation-tips',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a87e96ea-1764621201508.png",
    alt: 'Timeline visualization of different renovation projects in Barcelona showing realistic durations for kitchens, bathrooms, and integral renovations with expert planning',
    excerpt: 'Saber cuánto dura una reforma es una de las preguntas más frecuentes entre propietarios, inquilinos e inversores. Planificar vacaciones, coordinar mudanzas, evitar conflictos con vecinos o simplemente minimizar el estrés… todo depende de tener tiempos reales. Descubre cuánto tarda reformar un baño (5-10 días), una cocina (2-5 semanas), o un piso completo (6-12 semanas).',
    author: {
      name: 'Laura Martínez',
      role: 'Gestora de Proyectos',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16260d990-1763296865510.png",
      avatarAlt: 'Professional headshot of Laura Martínez, project manager and planning specialist at Buildnest'
    },
    date: '2025-12-01',
    readTime: '12 min',
    tags: ['Plazos', 'Planificación', 'Timeline', 'Reformas 2025'],
    featured: true
  },
  {
    id: '14',
    title: 'Suelos para reformas en 2025: Porcelánico, vinílico, parquet/laminado — cuál elegir según tu hogar, presupuesto y uso',
    category: 'design-trends',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_149785849-1764628496250.png",
    alt: 'Comparison of modern flooring options including porcelain tiles, vinyl planks, and hardwood parquet in Barcelona renovation with detailed cost analysis overlay',
    excerpt: 'Elegir el suelo adecuado es una de las decisiones clave cuando se reforma una vivienda. No solo afecta el estilo y confort, sino también durabilidad, mantenimiento, costos y revalorización. En este artículo comparamos las opciones más populares hoy en España: suelos porcelánicos (gres / cerámica), suelos vinílicos / LVT / SPC, y suelos de madera o tarima (parquet o laminado).',
    author: {
      name: 'Carlos Ruiz',
      role: 'Diseñador de Interiores',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bac5e5f2-1763294890218.png",
      avatarAlt: 'Professional headshot of Carlos Ruiz, interior designer specializing in flooring materials and modern design'
    },
    date: '2025-12-01',
    readTime: '14 min',
    tags: ['Suelos', 'Materiales', 'Guía Completa', 'Tendencias 2025'],
    featured: true
  }];

  const filterOptions = {
    renovationType: ['all', 'Cocinas', 'Baños', 'Apartamentos', 'Integrales'],
    budgetRange: ['all', '< €20k', '€20k-€40k', '€40k-€60k', '> €60k'],
    neighborhood: ['all', 'Eixample', 'Gracia', 'Gótico', 'Born', 'Sarrià'],
    complexity: ['all', 'Básica', 'Media', 'Compleja', 'Integral']
  };

  const featuredArticles = articles.filter((article) => article.featured);
  const displayedArticles = showAllArticles ? featuredArticles : featuredArticles.slice(0, 3);
  const hasMoreArticles = featuredArticles.length > 3;

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
              
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}>

                <button className="text-gray-700 hover:text-[#1e3a5f] transition-colors flex items-center gap-1">
                  Servicios
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen &&
                <div
                  className="absolute top-full left-0 pt-2 w-64"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}>

                    <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      {serviceMenuItems.map((item, index) =>
                    item.enabled ?
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors">

                            {item.name}
                          </Link> :

                    <div
                      key={index}
                      className="block px-4 py-2 text-gray-400 cursor-not-allowed">

                            {item.name}
                          </div>

                    )}
                    </div>
                  </div>
                }
              </div>
              
              <Link href="/portfolio-projects" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Portfolio
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Nosotros
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Contacto
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
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
          
          {/* Mobile Menu */}
          {isMobileMenuOpen &&
          <div className="md:hidden py-4 border-t border-gray-100">
              <Link
              href="/servicios-seleccion"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Inicio
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors flex items-center justify-between"
                onClick={() => setIsServicesOpen(!isServicesOpen)}>

                  Servicios
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen &&
              <div className="bg-gray-50 py-2">
                    {serviceMenuItems.map((item, index) =>
                item.enabled ?
                <Link
                  key={index}
                  href={item.href}
                  className="block pl-8 pr-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1e3a5f] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}>

                          {item.name}
                        </Link> :

                <div
                  key={index}
                  className="block pl-8 pr-4 py-2 text-gray-400 cursor-not-allowed">

                          {item.name}
                        </div>

                )}
                  </div>
              }
              </div>
              
              <Link
              href="/portfolio-projects"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Portfolio
              </Link>
              <Link
              href="/about-us"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Nosotros
              </Link>
              <Link
              href="/blog"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Blog
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

      {/* Redesigned Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link href="/" className="text-[#1e3a5f] text-sm font-medium hover:text-[#2d5580] transition-colors">
                Inicio
              </Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-600 text-sm font-medium">Blog</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Guías Profesionales de{' '}
              <span className="text-[#1e3a5f]">Renovación</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Información experta y actualizada sobre costes, procesos y tendencias en reformas integrales para Barcelona y España
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-10">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-[#1e3a5f]">500+</div>
                <div className="text-sm text-gray-600 mt-1">Proyectos Completados</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-[#1e3a5f]">15+</div>
                <div className="text-sm text-gray-600 mt-1">Años de Experiencia</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-[#1e3a5f]">8</div>
                <div className="text-sm text-gray-600 mt-1">Guías Profesionales</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Articles */}
        {featuredArticles.length > 0 &&
        <section className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Guías Destacadas
                </h2>
                <p className="text-lg text-gray-600">
                  Información actualizada con precios reales de 2025
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {displayedArticles.map((article) =>
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-gray-100">

                  <div className="relative h-56 overflow-hidden">
                    <AppImage
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute top-4 left-4 bg-[#1e3a5f] text-white px-4 py-1.5 rounded-full font-semibold text-sm shadow-lg">
                      Actualizado 2025
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AppImage
                    src={article.author.avatar}
                    alt={article.author.avatarAlt}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-100" />

                      <div>
                        <p className="font-semibold text-sm text-gray-900">{article.author.name}</p>
                        <p className="text-xs text-gray-600">{article.author.role}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e3a5f] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, index) =>
                  <span key={index} className="bg-blue-50 text-[#1e3a5f] px-3 py-1 rounded-full text-xs font-semibold">
                          {tag}
                        </span>
                  )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
            )}
            </div>

            {/* Load More Button */}
            {hasMoreArticles && !showAllArticles &&
          <div className="flex justify-center mt-12">
                <button
              onClick={() => setShowAllArticles(true)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#1e3a5f] to-[#2d5580] hover:from-[#2d5580] hover:to-[#1e3a5f] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">

                  <span>Leer Más Guías</span>
                  <svg
                className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </div>
          }
          </section>
        }

        {/* Trust & Expertise Section */}
        <section className="mb-20 bg-gradient-to-r from-[#1e3a5f] to-[#2d5580] rounded-3xl p-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Información Verificada por Expertos
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Todas nuestras guías están basadas en datos reales de proyectos completados y validadas por nuestro equipo de arquitectos y especialistas en construcción
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
              { icon: '✓', text: 'Precios verificados 2025' },
              { icon: '✓', text: 'Casos reales documentados' },
              { icon: '✓', text: 'Consejos profesionales' }].

              map((item, index) =>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-semibold">{item.text}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Team Expertise Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Nuestro Equipo de Expertos
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Profesionales con más de 15 años de experiencia en reformas integrales en Barcelona
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
            {
              name: 'María García',
              role: 'Arquitecta Principal',
              specialty: 'Renovaciones Integrales',
              avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15fa68d8e-1763300113194.png",
              avatarAlt: 'María García, lead architect specializing in comprehensive renovations'
            },
            {
              name: 'Carlos Ruiz',
              role: 'Diseñador de Interiores',
              specialty: 'Espacios Modernos',
              avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bac5e5f2-1763294890218.png",
              avatarAlt: 'Carlos Ruiz, interior designer focused on modern space design'
            },
            {
              name: 'Laura Martínez',
              role: 'Gestora de Proyectos',
              specialty: 'Permisos y Normativa',
              avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1515e711f-1764508496970.png",
              avatarAlt: 'Laura Martínez, project manager expert in Barcelona permits and regulations'
            },
            {
              name: 'David López',
              role: 'Especialista en Cocinas',
              specialty: 'Cocinas Premium',
              avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe0cedc8-1763300703468.png",
              avatarAlt: 'David López, specialist in premium kitchen renovations'
            }].
            map((member, index) =>
            <div key={index} className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#1e3a5f]">
                <AppImage
                src={member.avatar}
                alt={member.avatarAlt}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100 group-hover:border-[#1e3a5f] transition-colors" />

                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-[#1e3a5f] font-semibold mb-2">{member.role}</p>
                <p className="text-xs text-gray-600 bg-gray-50 rounded-full px-3 py-1 inline-block">{member.specialty}</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para tu Proyecto de Renovación?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Obtén una consulta gratuita con nuestros expertos y un presupuesto personalizado sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#1e3a5f] hover:bg-[#2d5580] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">

                Solicitar Consulta Gratis
              </Link>
              <Link
                href="/portfolio-projects"
                className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-4 rounded-full font-bold transition-all">

                Ver Proyectos Completados
              </Link>
            </div>
            
            {/* Social Proof */}
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">4.9/5</span>
                <span>Valoración</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>
                <span className="font-semibold">500+</span> Proyectos
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>
                <span className="font-semibold">15+</span> Años
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Updated to use shared component */}
      <ReformasFooter />
    </div>);

};

export default BlogPage;