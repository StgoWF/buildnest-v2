'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  alt: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
}

interface DifferentiatorProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, alt, href }) => (
  <Link href={href} className="group block relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
    <div className="absolute inset-0">
      <AppImage src={icon} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />
    </div>
    <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 transform group-hover:translate-y-[-8px] transition-transform duration-300">{title}</h3>
      <p className="text-sm sm:text-base text-gray-200 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{description}</p>
      <div className="mt-3 sm:mt-4 flex items-center text-blue-300 font-semibold text-sm sm:text-base opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        <span>Ver más</span>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </Link>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, image, alt }) =>
<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-48 w-full">
      <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </div>
  </div>;


const Testimonial: React.FC<TestimonialProps> = ({ name, location, text }) =>
<div className="bg-white rounded-lg shadow-md p-6">
    <div className="mb-4">
      <div className="flex text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) =>
      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
      )}
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
    </div>
    <div>
      <p className="font-bold text-gray-900">{name}</p>
      <p className="text-gray-600 text-sm">{location}</p>
    </div>
  </div>;


const DifferentiatorCard: React.FC<DifferentiatorProps> = ({ title, description, icon }) =>
<div className="flex flex-col items-center text-center p-6">
    <div className="w-12 h-12 mb-4 text-blue-600">
      <span className="text-4xl">{icon}</span>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>;


export default function ReformasPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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


  const services: ServiceCardProps[] = [
  {
    title: 'Reformas Integrales',
    description: 'Transformación completa de tu vivienda con diseño personalizado y gestión integral del proyecto',
    icon: "https://images.unsplash.com/photo-1638890929831-7782f3bcd84e",
    alt: 'Icon representing complete home renovation services with tools and design elements',
    href: '/reformas-integrales-complete-service-page'
  },
  {
    title: 'Cocinas',
    description: 'Diseño y reforma de cocinas modernas y funcionales adaptadas a tu estilo de vida',
    icon: "https://images.unsplash.com/photo-1535695706100-eedfb1c25264",
    alt: 'Modern kitchen design icon showing contemporary kitchen layout and appliances',
    href: '/individual-service-kitchen-renovation'
  },
  {
    title: 'Baños',
    description: 'Renovación completa de baños con las últimas tendencias en diseño y funcionalidad',
    icon: "https://images.unsplash.com/photo-1499037249395-fffe70798aaa",
    alt: 'Bathroom renovation icon displaying modern bathroom fixtures and design',
    href: '/bathroom-renovation-complete-service-page'
  },
  {
    title: 'Carpintería a Medida',
    description: 'Muebles personalizados, armarios empotrados y soluciones de almacenamiento únicas',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_1ab45b055-1764601968088.png",
    alt: 'Custom carpentry icon showing woodworking tools and custom furniture design',
    href: '/carpinter-a-a-medida-complete-service-page'
  },
  {
    title: 'Pintura y Acabados',
    description: 'Acabados profesionales que dan vida y personalidad a todos los espacios',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_142c5fde0-1764601968668.png",
    alt: 'Painting services icon with paint brushes and color palette',
    href: '/pintura-y-acabados-complete-service-page'
  },
  {
    title: 'Instalaciones',
    description: 'Electricidad, fontanería y climatización con las mejores garantías del mercado',
    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_11cf09540-1764601969931.png",
    alt: 'Electrical and plumbing installations icon showing technical equipment and tools',
    href: '#'
  }];


  const projects: ProjectCardProps[] = [
  {
    title: 'Reforma integral en Eixample',
    subtitle: '85m²',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_117fc55cb-1764508498376.png",
    alt: 'Complete renovation of 85 square meter apartment in Barcelona Eixample district showing modern interior design'
  },
  {
    title: 'Cocina moderna en Gràcia',
    subtitle: 'Estilo nórdico',
    image: "https://images.unsplash.com/photo-1722649934384-42f6c7c811bf",
    alt: 'Modern Nordic style kitchen renovation in Gracia neighborhood with minimalist white cabinets and wooden accents'
  },
  {
    title: 'Baño completo en Poblenou',
    subtitle: 'Diseño contemporáneo',
    image: "https://images.unsplash.com/photo-1621420621125-c63db35851cb",
    alt: 'Contemporary bathroom design in Poblenou featuring modern fixtures and clean geometric lines'
  }];


  const testimonials: TestimonialProps[] = [
  {
    name: 'María González',
    location: 'Sarrià',
    text: 'Buildnest transformó completamente nuestro piso en Sarrià. Cumplieron todos los plazos y el resultado superó nuestras expectativas. Muy recomendable.'
  },
  {
    name: 'Carlos Martín',
    location: 'Eixample',
    text: 'Profesionales de principio a fin. La comunicación fue excelente y no hubo sorpresas en el presupuesto. Repetiríamos sin dudarlo.'
  }];


  const differentiators: DifferentiatorProps[] = [
  {
    title: 'Gestión Integral',
    description: 'Nos encargamos de todo: permisos, materiales, coordinación y acabados',
    icon: '🏗️'
  },
  {
    title: 'Transparencia Total',
    description: 'Presupuesto detallado sin letra pequeña ni costes ocultos',
    icon: '💎'
  },
  {
    title: 'Cumplimiento de Plazos',
    description: 'Planificación realista y seguimiento diario del proyecto',
    icon: '⏰'
  },
  {
    title: 'Equipo Propio',
    description: 'Profesionales cualificados, no subcontratamos servicios clave',
    icon: '👷'
  },
  {
    title: 'Comunicación Directa',
    description: 'Seguimiento en tiempo real y contacto directo con el responsable',
    icon: '📱'
  }];


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
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain" 
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold text-[#1e3a5f]">Buildnest</span>
                <span className="text-[10px] sm:text-xs text-gray-500 tracking-wide uppercase hidden xs:block">Construcción & Reformas</span>
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
                
                {isServicesOpen && (
                  <div
                    className="absolute top-full left-0 pt-2 w-64"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}>
                    <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      {serviceMenuItems.map((item, index) =>
                        item.enabled ? (
                          <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors">
                            {item.name}
                          </Link>
                        ) : (
                          <div
                            key={index}
                            className="block px-4 py-2 text-gray-400 cursor-not-allowed">
                            {item.name}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="#proyectos" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Proyectos
              </Link>
              <Link href="/portfolio-projects" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Portfolio
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Nosotros
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Blog
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Contacto
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
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
              href="#proyectos"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Proyectos
              </Link>
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
              href="#contacto"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Contacto
              </Link>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[650px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <AppImage
            src="/assets/images/ChatGPT_Image_1_dic_2025_05_07_25_p.m.-1764605251608.png"
            alt="Professional modern home renovation showcasing elegant interior design with natural lighting"
            className="w-full h-full object-cover brightness-110"
          />
          {/* Enhanced Overlay for Better Text Visibility on Mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 sm:from-black/50 sm:via-black/35 sm:to-transparent" />
        </div>
        
        {/* Content Container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 text-white"
                style={{
                  textShadow: '0 4px 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)'
                }}>
              Rediseñamos tu hogar para que refleje tu estilo de vida
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-5 sm:mb-6 md:mb-8 leading-relaxed font-light"
               style={{
                 textShadow: '0 3px 8px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)'
               }}>
              Actualizamos tu vivienda con soluciones de diseño, materiales de calidad y una ejecución profesional orientada a resultados duraderos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6">
              <Link
                href="#contacto"
                className="bg-white text-[#1e3a5f] px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300 text-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                Solicita tu presupuesto gratuito
              </Link>
              <Link
                href="/services-overview"
                className="bg-white/10 backdrop-blur-md text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 transition-all duration-300 text-center border-2 border-white/80 shadow-lg">
                Ver servicios
              </Link>
            </div>
            <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
              <span className="flex items-center text-white font-medium bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Más de 200 proyectos completados
              </span>
              <span className="flex items-center text-white font-medium bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Presupuesto sin sorpresas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Buildnest */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Por qué elegir Buildnest
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Nuestro compromiso con la excelencia y la satisfacción del cliente nos diferencia
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {differentiators?.map?.((item, index) => (
              <DifferentiatorCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Nuestros Servicios
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Soluciones completas para cada necesidad de tu hogar
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
            {services?.map?.((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services-overview"
              className="inline-block bg-[#1e3a5f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#2d5a8f] transition-colors shadow-lg">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="proyectos" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Proyectos Recientes
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Descubre algunas de nuestras últimas reformas en Barcelona
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects?.map?.((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {testimonials?.map?.((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
            ¿Listo para transformar tu hogar?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-5 sm:mb-6 md:mb-8 leading-relaxed px-4">
            Solicita tu consulta gratuita y descubre cómo podemos hacer realidad tu proyecto de reforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link
              href="#contacto"
              className="bg-white text-[#1e3a5f] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Solicitar presupuesto gratuito
            </Link>
            <Link
              href="tel:+34123456789"
              className="bg-[#2d5a8f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#1e3a5f] transition-colors border-2 border-white">
              Llamar ahora
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
                  className="h-8 w-8 object-contain" 
                />
                <h3 className="text-white text-base sm:text-lg font-bold">Buildnest</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                Especialistas en reformas integrales en Barcelona con más de 10 años de experiencia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Servicios</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Reformas Integrales</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Cocinas</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Baños</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Carpintería</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>Barcelona, España</li>
                <li>Tel: +34 123 456 789</li>
                <li>info@buildnest.es</li>
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
    </div>
  );
}