'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ServiceSelectionCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  href: string;
  accentColor: string;
}

const ServiceSelectionCard: React.FC<ServiceSelectionCardProps> = ({
  title,
  subtitle,
  description,
  features,
  image,
  alt,
  href,
  accentColor
}) =>
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative h-64 w-full">
      <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
      <div className={`absolute top-4 left-4 ${accentColor} text-white px-4 py-2 rounded-lg font-bold`}>
        {subtitle}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features?.map?.((feature, index) =>
      <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
      )}
      </ul>
      
      <Link
      href={href}
      className={`block w-full ${accentColor} text-white px-6 py-3 rounded-lg font-bold text-center hover:opacity-90 transition-opacity`}>

        Ver Sitio Completo
      </Link>
    </div>
  </div>;


export default function ServiciosSeleccion() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceOptions: ServiceSelectionCardProps[] = [
  {
    title: 'Construcción Industrializada',
    subtitle: 'Obra Nueva',
    description: 'Construcción modular de alta eficiencia energética con tecnología industrializada. Diseños personalizados que se adaptan a tu terreno y necesidades.',
    features: [
    'Construcción en 4-6 meses',
    'Hasta 50% más eficiente energéticamente',
    'Diseño arquitectónico personalizado',
    'Calidad garantizada y certificada',
    'Menor impacto ambiental',
    'Precio cerrado sin sorpresas'],

    image: "https://images.unsplash.com/photo-1668362861893-927307466f42",
    alt: 'Modern industrialized construction site showing modular building components and sustainable architecture',
    href: '#construccion',
    accentColor: 'bg-blue-600'
  },
  {
    title: 'Reformas Integrales',
    subtitle: 'Renovación Completa',
    description: 'Transformación completa de tu vivienda o local. Desde reformas parciales hasta rehabilitaciones integrales con gestión llave en mano.',
    features: [
    'Diseño interior personalizado',
    'Gestión integral del proyecto',
    'Reformas de cocinas y baños',
    'Carpintería a medida',
    'Instalaciones certificadas',
    'Garantía de 5 años'],

    image: "https://images.unsplash.com/photo-1616716502858-8ba81909a12c",
    alt: 'Elegant renovated interior space showing modern design with custom furniture and lighting',
    href: '/reformas',
    accentColor: 'bg-[#1e3a5f]'
  }];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/servicios-seleccion" className="flex items-center gap-3">
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
              <Link href="#construccion" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Construcción
              </Link>
              <Link href="/reformas-integrales-complete-service-page" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Reformas
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
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
              <Link
              href="#construccion"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Construcción
              </Link>
              <Link
              href="/reformas-integrales-complete-service-page"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>

                Reformas
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
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8f] to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <AppImage
            src="https://images.unsplash.com/photo-1632121484846-3d3e9069834d"
            alt="Modern construction and renovation background showing architectural blueprints and tools"
            className="w-full h-full object-cover" />

        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elige cómo podemos ayudarte
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed">
              Un mismo equipo, dos servicios complementarios: construcción industrializada de obra nueva y reformas para actualizar y revalorizar tu vivienda o local.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
              <span className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                +15 años de experiencia
              </span>
              <span className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Garantía extendida
              </span>
              <span className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Transparencia total
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection Cards */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Selecciona el servicio que necesitas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ya sea que estés pensando en construir tu nueva vivienda o renovar la actual, tenemos la experiencia y el equipo para hacer realidad tu proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {serviceOptions?.map?.((service, index) =>
            <ServiceSelectionCard key={index} {...service} />
            )}
          </div>
        </div>
      </section>

      {/* Why Buildnest Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Buildnest?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro compromiso con la excelencia nos distingue en cada proyecto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión Integral</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos encargamos de todo el proceso, desde el diseño hasta la entrega final con todas las certificaciones.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Calidad Certificada</h3>
              <p className="text-gray-600 leading-relaxed">
                Materiales premium y procesos certificados garantizan la máxima calidad en cada detalle.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cumplimiento de Plazos</h3>
              <p className="text-gray-600 leading-relaxed">
                Planificación realista y seguimiento continuo para entregar tu proyecto en tiempo y forma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Cuéntanos tu idea y te ayudaremos a hacerla realidad con un presupuesto sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contacto"
              className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">

              Solicitar Consulta Gratuita
            </Link>
            <Link
              href="tel:+34123456789"
              className="bg-[#2d5a8f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-colors border-2 border-white">

              Llamar Ahora
            </Link>
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
                Tu partner en construcción industrializada y reformas integrales en Barcelona.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#construccion" className="hover:text-white transition-colors">Construcción Industrializada</Link></li>
                <li><Link href="/reformas-integrales-complete-service-page" className="hover:text-white transition-colors">Reformas Integrales</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Cocinas y Baños</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Carpintería</Link></li>
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