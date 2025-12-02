"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ServiceItem {
  name: string;
  href: string;
}

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  alt: string;
  href?: string;
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ServiceDetailCard: React.FC<ServiceDetailProps> = ({ title, description, features, icon, alt, href }) =>
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-start mb-4">
      <div className="w-16 h-16 mr-4 flex-shrink-0">
        <AppImage src={icon} alt={alt} className="w-full h-full object-contain" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
    <ul className="space-y-2 mt-4">
      {features?.map?.((feature, index) =>
    <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-[#1e3a5f] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">{feature}</span>
        </li>
    )}
    </ul>
    <div className="mt-6">
      <Link
      href={href || "#contacto"}
      className="inline-block bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2d5a8f] transition-colors">
        {href ? 'Ver Sitio Completo' : 'Solicitar información'}
      </Link>
    </div>
  </div>;


const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) =>
<div className="flex items-start">
    <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>;


export default function ServicesOverview() {
  const navigationServices: ServiceItem[] = [
  { name: 'Reformas integrales', href: '/reformas-integrales-complete-service-page' },
  { name: 'Cocinas', href: '/kitchen-renovation-complete-service-page' },
  { name: 'Baños', href: '/bathroom-renovation-complete-service-page' },
  { name: 'Carpintería a Medida', href: '/carpinter-a-a-medida-complete-service-page' },
  { name: 'Pintura y Acabados', href: '/pintura-y-acabados-complete-service-page' },
  { name: 'Electricidad e Iluminación', href: '/electricidad-e-iluminaci-n-complete-service-page' },
  { name: 'Climatización', href: '/climatizaci-n-complete-service-page' }];


  const serviceDetails: ServiceDetailProps[] = [
  {
    title: 'Reformas Integrales',
    description: 'Transformación completa de tu hogar con gestión integral del proyecto desde el diseño hasta la entrega final.',
    features: [
    'Diseño personalizado y planificación completa',
    'Gestión de licencias y permisos',
    'Coordinación de todos los gremios',
    'Garantía de 5 años en todos los trabajos'],

    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7ff728f-1764609869104.png",
    alt: 'Icono de reforma integral mostrando planos de arquitectura',
    href: '/reformas-integrales-complete-service-page'
  },
  {
    title: 'Reforma de Cocinas',
    description: 'Diseño y construcción de cocinas modernas y funcionales adaptadas a tu estilo de vida.',
    features: [
    'Diseño 3D personalizado',
    'Mobiliario a medida',
    'Electrodomésticos de última generación',
    'Optimización de espacios'],

    icon: "https://images.unsplash.com/photo-1721742603176-a0edbf7abdc8",
    alt: 'Icono de cocina moderna con electrodomésticos',
    href: '/kitchen-renovation-complete-service-page'
  },
  {
    title: 'Reforma de Baños',
    description: 'Baños elegantes y funcionales con las mejores calidades y acabados del mercado.',
    features: [
    'Diseño personalizado',
    'Sanitarios de alta gama',
    'Sistemas de ahorro de agua',
    'Soluciones antihumedad'],

    icon: "https://images.unsplash.com/photo-1722247482758-ac59d2587c08",
    alt: 'Icono de baño moderno con ducha y lavabo',
    href: '/bathroom-renovation-complete-service-page'
  },
  {
    title: 'Carpintería a Medida',
    description: 'Muebles y elementos de carpintería personalizados que se adaptan perfectamente a tu espacio.',
    features: [
    'Diseño 3D previo',
    'Maderas nobles y materiales sostenibles',
    'Armarios empotrados',
    'Puertas y acabados personalizados'],

    icon: "https://img.rocket.new/generatedImages/rocket_gen_img_1d99f9323-1764609863852.png",
    alt: 'Icono de carpintería mostrando herramientas de trabajo en madera',
    href: '/carpinter-a-a-medida-complete-service-page'
  },
  {
    title: 'Pintura y Acabados',
    description: 'Acabados profesionales que transforman completamente el aspecto de tu hogar.',
    features: [
    'Asesoramiento en colores',
    'Pinturas ecológicas',
    'Técnicas decorativas',
    'Preparación perfecta de superficies'],

    icon: "https://images.unsplash.com/photo-1622250544703-997d69d856e3",
    alt: 'Icono de pintura mostrando rodillo y brocha',
    href: '/pintura-y-acabados-complete-service-page'
  },
  {
    title: 'Electricidad e Iluminación',
    description: 'Instalaciones eléctricas seguras y sistemas de iluminación eficientes y modernos.',
    features: [
    'Certificación eléctrica',
    'Domótica y automatización',
    'Iluminación LED eficiente',
    'Sistemas de seguridad'],

    icon: "https://images.unsplash.com/photo-1608715518942-76dc383e147b",
    alt: 'Icono de electricidad mostrando interruptores e iluminación',
    href: '/electricidad-e-iluminaci-n-complete-service-page'
  },
  {
    title: 'Climatización',
    description: 'Sistemas de climatización eficientes para mantener tu hogar confortable todo el año.',
    features: [
    'Aire acondicionado y calefacción',
    'Sistemas de alta eficiencia energética',
    'Instalación profesional',
    'Mantenimiento y garantía'],

    icon: "https://images.unsplash.com/photo-1672999849788-cacb9ed1c5c6",
    alt: 'Icono de climatización mostrando sistema de aire acondicionado',
    href: '/climatizaci-n-complete-service-page'
  }];


  const processSteps: ProcessStepProps[] = [
  {
    number: '1',
    title: 'Estudio de viabilidad y diseño personalizado',
    description: 'Evaluamos tu espacio, escuchamos tus necesidades y creamos un diseño personalizado que se adapta a tu estilo de vida y presupuesto.'
  },
  {
    number: '2',
    title: 'Tramitación de licencias y permisos',
    description: 'Nos encargamos de toda la gestión burocrática ante el ayuntamiento y comunidad de vecinos para que no tengas que preocuparte de nada.'
  },
  {
    number: '3',
    title: 'Coordinación de todos los gremios profesionales',
    description: 'Gestionamos y coordinamos a todos los profesionales necesarios: albañiles, electricistas, fontaneros, pintores y carpinteros.'
  },
  {
    number: '4',
    title: 'Suministro y gestión de materiales',
    description: 'Seleccionamos los mejores materiales según tu presupuesto y gestionamos su compra y entrega en el momento adecuado.'
  },
  {
    number: '5',
    title: 'Control de calidad en cada fase',
    description: 'Supervisamos cada etapa del proyecto para asegurar que todo se realiza según lo planificado y con los más altos estándares.'
  },
  {
    number: '6',
    title: 'Limpieza final y entrega',
    description: 'Realizamos una limpieza profesional exhaustiva y te entregamos tu hogar completamente terminado y listo para disfrutar.'
  }];


  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <AppImage
                src="/assets/images/buildnest-1764591131149.png"
                alt="Buildnest logo with text"
                className="h-10 w-10 object-contain" />

              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1e3a5f]">Buildnest</span>
                <span className="text-xs text-gray-500 tracking-wide uppercase">Construcción & Reformas</span>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/reformas" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Inicio
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}>

                <button className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium flex items-center gap-1">
                  Servicios
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen &&
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100">

                    {navigationServices.map((service, index) =>
                  <Link
                    key={index}
                    href={service.href}
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] transition-colors text-sm">

                        {service.name}
                      </Link>
                  )}
                  </div>
                }
              </div>
              <Link href="/portfolio-projects" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Proyectos
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
                Contacto
              </Link>
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="py-4 px-4">
            <Link
            href="/reformas"
            className="block py-2 text-gray-700 hover:text-[#1e3a5f] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}>

              Inicio
            </Link>
            <button
            className="w-full text-left py-2 text-gray-700 hover:text-[#1e3a5f] transition-colors flex items-center justify-between"
            onClick={() => setIsServicesOpen(!isServicesOpen)}>

              Servicios
              <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesOpen &&
          <div className="pl-4 mt-2 space-y-2">
                {navigationServices.map((service, index) =>
            <Link
              key={index}
              href={service.href}
              className="block py-2 text-sm text-gray-600 hover:text-[#1e3a5f] transition-colors"
              onClick={() => {
                setIsServicesOpen(false);
                setIsMobileMenuOpen(false);
              }}>

                    {service.name}
                  </Link>
            )}
              </div>
          }
            <Link
            href="/portfolio-projects"
            className="block py-2 text-gray-700 hover:text-[#1e3a5f] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}>

              Proyectos
            </Link>
            <Link
            href="/contact"
            className="block py-2 text-gray-700 hover:text-[#1e3a5f] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}>

              Contacto
            </Link>
          </div>
        </div>
      }

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Reformas Llave en Mano en Barcelona
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              En Buildnest entendemos que una reforma no es solo cambiar materiales, sino transformar la forma en que vives tu hogar. Por eso ofrecemos un servicio integral que abarca desde el diseño inicial hasta el último detalle de los acabados.
            </p>
          </div>
        </div>
      </section>

      {/* Process Management Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Gestión Completa de Todas las Etapas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nos encargamos de todo para que tú solo tengas que disfrutar del resultado final
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {processSteps?.map?.((step, index) =>
            <ProcessStep key={index} {...step} />
            )}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Principales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones completas para todo tipo de proyectos de reforma y construcción, adaptándonos a las necesidades específicas de cada cliente y espacio.
            </p>
          </div>
          <div className="space-y-8">
            {serviceDetails?.map?.((service, index) =>
            <ServiceDetailCard key={index} {...service} />
            )}
          </div>
        </div>
      </section>

      {/* Barcelona Specialization */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Especialización en Barcelona
              </h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Conocemos a fondo las características arquitectónicas de Barcelona, desde los pisos modernistas del Eixample hasta las viviendas contemporáneas de los nuevos desarrollos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Esta experiencia local nos permite optimizar cada proyecto según las particularidades del edificio y la normativa municipal, asegurando que tu reforma se realice de forma eficiente y cumpliendo todos los requisitos legales.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-[#1e3a5f] mb-2">200+</div>
                <div className="text-gray-700">Proyectos completados</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-[#1e3a5f] mb-2">10+</div>
                <div className="text-gray-700">Años de experiencia</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-[#1e3a5f] mb-2">98%</div>
                <div className="text-gray-700">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Qué Incluye Cada Servicio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparencia total en lo que ofrecemos
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-4 font-bold text-gray-900">Características</th>
                  <th className="py-4 px-4 text-center font-bold text-gray-900">Reforma Integral</th>
                  <th className="py-4 px-4 text-center font-bold text-gray-900">Reforma Parcial</th>
                  <th className="py-4 px-4 text-center font-bold text-gray-900">Solo Diseño</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Diseño personalizado</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Tramitación de licencias</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                  <td className="py-4 px-4 text-center text-gray-300">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Obra y ejecución</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                  <td className="py-4 px-4 text-center text-gray-300">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Suministro de materiales</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">✓</td>
                  <td className="py-4 px-4 text-center text-gray-300">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-700">Garantía extendida</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">5 años</td>
                  <td className="py-4 px-4 text-center text-[#1e3a5f]">3 años</td>
                  <td className="py-4 px-4 text-center text-gray-300">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Cuéntanos tu idea y te ayudaremos a hacerla realidad con un presupuesto personalizado sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Solicitar presupuesto gratuito
            </Link>
            <Link
              href="/homepage"
              className="bg-[#2d5a8f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1e3a5f] transition-colors border-2 border-white">
              Ver proyectos realizados
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
                Especialistas en reformas integrales en Barcelona con más de 10 años de experiencia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Reformas Integrales</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Cocinas</Link></li>
                <li><Link href="/services-overview" className="hover:text-white transition-colors">Baños</Link></li>
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