'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ServiceItem {
  name: string;
  href: string;
}

export default function NavigationMenuComponent() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services: ServiceItem[] = [
    { name: 'Reformas integrales', href: '/reformas-integrales-complete-service-page' },
    { name: 'Cocinas', href: '/individual-service-kitchen-renovation' },
    { name: 'Baños', href: '/services-overview' },
    { name: 'Carpintería a medida', href: '/services-overview' },
    { name: 'Pintura y acabados', href: '/services-overview' },
    { name: 'Electricidad e iluminación', href: '/services-overview' },
    { name: 'Climatización', href: '/services-overview' },
    { name: 'Gestión llave en mano', href: '/services-overview' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-3">
            <AppImage 
              src="/assets/images/buildnest-1764591131149.png" 
              alt="Buildnest logo featuring navy blue hexagonal house with protective elements"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#1e3a5f]">Buildnest</span>
              <span className="text-xs text-gray-500 tracking-wide uppercase">Construcción & Reformas</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/homepage" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium">
              Quiénes somos
            </Link>
            
            {/* Services Dropdown - Desktop */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium flex items-center gap-1">
                Servicios
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a5f] transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/portfolio-projects" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium">
              Galería de reformas
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium">
              Contacto
            </Link>
            <Link 
              href="/contact" 
              className="bg-[#1e3a5f] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#2d5a8f] transition-colors shadow-md"
            >
              Pide tu presupuesto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link href="/homepage" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium py-2">
                Inicio
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium py-2">
                Quiénes somos
              </Link>
              
              {/* Services - Mobile */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium py-2 flex items-center justify-between"
                >
                  Servicios
                  <svg className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block text-gray-600 hover:text-[#1e3a5f] transition-colors py-2 text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
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
                className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2d5a8f] transition-colors text-center shadow-md mt-2"
              >
                Pide tu presupuesto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}