'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

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

const BlogConstruccionPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const constructionNavItems = [
  { name: 'Quiénes somos', href: '/about-us' },
  { name: 'Sistemas constructivos', href: '/construccion#metodo' },
  { name: 'Galería', href: '/construccion#proyectos' },
  { name: 'Portafolio', href: '/construccion-proyectos' },
  { name: 'Blog Industrial', href: '/blog-construccion' },
  { name: 'Contacto', href: '/construccion#contacto' }];


  const articles: Article[] = [
  {
    id: '1',
    title: 'Construcción Modular vs Tradicional: Análisis Comparativo 2025 de Costes, Tiempos y Calidad',
    category: 'construction-innovation',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16ef077d6-1764637735364.png",
    alt: 'Comparative analysis showing modular construction factory assembly versus traditional on-site building methods with cost and time metrics overlay',
    excerpt: 'Análisis técnico completo comparando construcción industrializada modular con métodos tradicionales. Datos reales sobre reducción de costes (15-20%), tiempos de ejecución (40-50% más rápido), control de calidad, impacto ambiental y certificaciones de eficiencia energética. Incluye casos de estudio con ROI documentado.',
    author: {
      name: 'Ing. Roberto Sánchez',
      role: 'Director Técnico',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_188ef88e9-1763292931296.png",
      avatarAlt: 'Professional headshot of Roberto Sánchez, technical director and construction engineering expert'
    },
    date: '2025-12-01',
    readTime: '15 min',
    tags: ['Innovación', 'Análisis Técnico', 'ROI', 'Construcción Modular'],
    featured: true
  },
  {
    id: '2',
    title: 'Sistemas de Construcción Prefabricada: Tecnologías, Materiales y Procesos de Fabricación Industrial',
    category: 'technical-insights',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fc6ea3a0-1764637737143.png",
    alt: 'Industrial prefabrication facility showing advanced manufacturing processes for building components with quality control systems',
    excerpt: 'Guía técnica profesional sobre sistemas prefabricados modernos: paneles CLT (Cross-Laminated Timber), estructuras de acero galvanizado, hormigón prefabricado, y sistemas híbridos. Detalles de procesos de fabricación, control de tolerancias milimétricas, certificaciones de materiales y protocolos de montaje en obra.',
    author: {
      name: 'Arq. Elena Martín',
      role: 'Jefa de Proyectos Industriales',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15fa68d8e-1763300113194.png",
      avatarAlt: 'Professional headshot of Elena Martín, chief industrial projects architect specializing in prefab systems'
    },
    date: '2025-11-28',
    readTime: '18 min',
    tags: ['Prefabricación', 'Materiales', 'Procesos', 'Tecnología'],
    featured: true
  },
  {
    id: '3',
    title: 'Sostenibilidad en Construcción Industrial: Certificaciones LEED, BREEAM y Estrategias de Economía Circular',
    category: 'sustainable-building',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11853a588-1764637735977.png",
    alt: 'Sustainable industrial construction project showcasing green building certifications, renewable materials, and circular economy practices',
    excerpt: 'Análisis exhaustivo de certificaciones de sostenibilidad en construcción industrial. Estrategias para obtener LEED Gold/Platinum y BREEAM Excellent. Implementación de economía circular: reducción de residuos (hasta 90%), reutilización de materiales, eficiencia energética clase A+, y selección de materiales de bajo impacto ambiental.',
    author: {
      name: 'Ing. Carmen Vega',
      role: 'Especialista en Sostenibilidad',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_139f5335d-1763297606369.png",
      avatarAlt: 'Professional headshot of Carmen Vega, sustainability specialist in industrial construction projects'
    },
    date: '2025-11-25',
    readTime: '16 min',
    tags: ['Sostenibilidad', 'LEED', 'BREEAM', 'Economía Circular'],
    featured: true
  },
  {
    id: '4',
    title: 'Gestión de Proyectos de Construcción Industrial: Metodologías Lean, BIM y Control de Calidad Total',
    category: 'project-management',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3ab426d-1764637736369.png",
    alt: 'Industrial construction project management dashboard showing BIM integration, lean methodologies, and quality control metrics',
    excerpt: 'Metodologías avanzadas para gestión de proyectos industriales: Lean Construction para eliminación de desperdicios, integración BIM (Building Information Modeling) desde diseño hasta mantenimiento, sistemas de control de calidad ISO 9001, gestión de cadena de suministro, y protocolos de seguridad OHSAS 18001.',
    author: {
      name: 'Miguel Ángel Torres',
      role: 'Director de Operaciones',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_198ff94f7-1763291827000.png",
      avatarAlt: 'Professional headshot of Miguel Ángel Torres, operations director and project management expert'
    },
    date: '2025-11-22',
    readTime: '14 min',
    tags: ['BIM', 'Lean Construction', 'Calidad', 'Gestión'],
    featured: true
  },
  {
    id: '5',
    title: 'Innovaciones Tecnológicas en Construcción: IoT, Automatización y Construcción 4.0',
    category: 'construction-innovation',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12f33c014-1764637738788.png",
    alt: 'Smart construction site showcasing IoT sensors, automation systems, and Industry 4.0 technologies in industrial building',
    excerpt: 'Exploramos las tecnologías disruptivas transformando la construcción industrial: sensores IoT para monitoreo en tiempo real, robótica en fabricación y montaje, impresión 3D de componentes estructurales, drones para inspección y topografía, realidad aumentada en diseño, y sistemas de gestión basados en IA para optimización de recursos.',
    author: {
      name: 'Dr. Pablo Jiménez',
      role: 'Investigador en Innovación',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1307205a3-1763292938931.png",
      avatarAlt: 'Professional headshot of Dr. Pablo Jiménez, innovation researcher in construction technology'
    },
    date: '2025-11-19',
    readTime: '17 min',
    tags: ['IoT', 'Automatización', 'Industria 4.0', 'Innovación'],
    featured: true
  },
  {
    id: '6',
    title: 'Normativa y Regulaciones en Construcción Industrial: CTE, Eurocódigos y Certificaciones Técnicas',
    category: 'industry-standards',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5c134c8-1764637735329.png",
    alt: 'Construction regulatory documentation showing CTE compliance, Eurocodes, and technical certifications for industrial buildings',
    excerpt: 'Guía completa sobre marco normativo en construcción industrial en España: Código Técnico de la Edificación (CTE), aplicación de Eurocódigos estructurales, certificaciones de materiales, normativa de seguridad y salud (RD 1627/1997), inspecciones técnicas obligatorias, y requisitos de eficiencia energética según normativa europea.',
    author: {
      name: 'Abg. Ana Rodríguez',
      role: 'Asesora Legal y Normativa',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12672b149-1763294392419.png",
      avatarAlt: 'Professional headshot of Ana Rodríguez, legal advisor and regulatory compliance specialist'
    },
    date: '2025-11-16',
    readTime: '13 min',
    tags: ['Normativa', 'CTE', 'Eurocódigos', 'Certificaciones'],
    featured: true
  }];


  const categories = [
  { id: 'all', name: 'Todos los Artículos', icon: '📚' },
  { id: 'construction-innovation', name: 'Innovación Constructiva', icon: '💡' },
  { id: 'sustainable-building', name: 'Construcción Sostenible', icon: '🌱' },
  { id: 'technical-insights', name: 'Análisis Técnicos', icon: '⚙️' },
  { id: 'industry-standards', name: 'Normativa Industrial', icon: '📋' },
  { id: 'project-management', name: 'Gestión de Proyectos', icon: '📊' }];


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
                <span className="text-xs text-gray-500 tracking-wide uppercase hidden sm:block">Construcción Industrializada</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 items-center">
              {constructionNavItems.map((item, index) =>
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-[#1e3a5f] transition-colors text-sm font-medium">

                  {item.name}
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu">

              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ?
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen &&
          <div className="lg:hidden py-4 border-t border-gray-100">
              {constructionNavItems.map((item, index) =>
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMenuOpen(false)}>

                  {item.name}
                </Link>
            )}
            </div>
          }
        </div>
      </nav>

      {/* Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link href="/" className="text-blue-200 text-sm font-medium hover:text-white transition-colors">
                Inicio
              </Link>
              <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/construccion" className="text-blue-200 text-sm font-medium hover:text-white transition-colors">
                Construcción
              </Link>
              <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white text-sm font-medium">Blog Industrial</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Blog de Construcción{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Industrializada
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Análisis técnicos, innovaciones y tendencias en construcción modular, sostenibilidad y eficiencia industrial
            </p>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.slice(1, 4).map((category) =>
              <div key={category.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm font-semibold flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </div>
              )}
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-blue-100 mt-1">Años de Experiencia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-blue-100 mt-1">Proyectos Industriales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm text-blue-100 mt-1">Artículos Técnicos</div>
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
                  Artículos Destacados
                </h2>
                <p className="text-lg text-gray-600">
                  Contenido técnico especializado en construcción industrial
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {displayedArticles.map((article) =>
            <div
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100">

                  <div className="relative h-56 overflow-hidden">
                    <AppImage
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] text-white px-4 py-1.5 rounded-full font-semibold text-sm shadow-lg">
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

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>

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
                </div>
            )}
            </div>

            {/* Load More Button */}
            {hasMoreArticles && !showAllArticles &&
          <div className="flex justify-center mt-12">
                <button
              onClick={() => setShowAllArticles(true)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] hover:from-[#2d5a8f] hover:to-[#1e3a5f] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">

                  <span>Ver Más Artículos</span>
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

        {/* Expertise Section */}
        <section className="mb-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contenido Técnico Verificado
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Todos nuestros artículos están escritos por ingenieros y arquitectos con amplia experiencia en construcción industrial
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
              { icon: '✓', text: 'Datos técnicos verificados' },
              { icon: '✓', text: 'Casos reales documentados' },
              { icon: '✓', text: 'Análisis de expertos' }].
              map((item, index) =>
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="text-4xl mb-2 text-green-600">{item.icon}</div>
                  <div className="font-semibold text-gray-900">{item.text}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Nuestro Equipo de Expertos
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Profesionales especializados en construcción industrializada con más de 15 años de experiencia
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
              name: 'Ing. Roberto Sánchez',
              role: 'Director Técnico',
              specialty: 'Sistemas Prefabricados',
              avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16c1293ce-1764637736694.png",
              avatarAlt: 'Roberto Sánchez, technical director specializing in prefab construction systems'
            },
            {
              name: 'Arq. Elena Martín',
              role: 'Jefa de Proyectos',
              specialty: 'Construcción Modular',
              avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1928d73cb-1763299589734.png",
              avatarAlt: 'Elena Martín, chief projects architect expert in modular construction'
            },
            {
              name: 'Ing. Carmen Vega',
              role: 'Especialista Sostenibilidad',
              specialty: 'Certificaciones LEED',
              avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec91ebef-1763301008266.png",
              avatarAlt: 'Carmen Vega, sustainability specialist and LEED certification expert'
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
        <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-3xl p-10 text-white shadow-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              ¿Tienes un Proyecto de Construcción Industrial?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Consulta técnica gratuita con nuestros ingenieros especializados. Análisis de viabilidad y presupuesto sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/construccion#contacto"
                className="bg-white text-[#1e3a5f] hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">

                Solicitar Consulta Técnica
              </Link>
              <Link
                href="/construccion-proyectos"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-4 rounded-full font-bold transition-all">

                Ver Portfolio Industrial
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">4.9/5</span>
                <span className="text-blue-100">Valoración</span>
              </div>
              <div className="h-4 w-px bg-blue-300"></div>
              <div className="text-blue-100">
                <span className="font-semibold text-white">500+</span> Proyectos
              </div>
              <div className="h-4 w-px bg-blue-300"></div>
              <div className="text-blue-100">
                <span className="font-semibold text-white">15+</span> Años
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AppImage
                  src="/assets/images/buildnest-1764591131149.png"
                  alt="Buildnest logo"
                  className="h-8 w-8 object-contain" />

                <h3 className="text-white text-lg font-bold">Buildnest</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Construcción industrializada de viviendas sostenibles y eficientes.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/construccion#metodo" className="hover:text-white transition-colors">Diseño & Fabricación</Link></li>
                <li><Link href="/construccion#metodo" className="hover:text-white transition-colors">Construcción</Link></li>
                <li><Link href="/construccion#metodo" className="hover:text-white transition-colors">Entrega Llave en Mano</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog-construccion" className="hover:text-white transition-colors">Blog Industrial</Link></li>
                <li><Link href="/construccion-proyectos" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/about-us" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>España</li>
                <li>Tel: +34 123 456 789</li>
                <li>info@buildnest.es</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Buildnest. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default BlogConstruccionPage;