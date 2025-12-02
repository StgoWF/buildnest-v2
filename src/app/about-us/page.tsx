'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

interface StatisticProps {
  value: string;
  label: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-l-4 border-blue-600">
      <div className="absolute -left-8 top-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2 ml-6">{title}</h4>
      <p className="text-gray-600 ml-6">{description}</p>
    </div>
  );
};

const Statistic: React.FC<StatisticProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-gray-700">{label}</div>
    </div>
  );
};

const AboutUsPage: React.FC = () => {
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
    { name: 'Climatización', href: '/climatizaci-n-complete-service-page', enabled: true }
  ];

  const values: ValueCardProps[] = [
    {
      title: 'Transparencia',
      description: 'Comunicación clara y presupuestos sin sorpresas',
      icon: '💎'
    },
    {
      title: 'Calidad',
      description: 'Materiales premium y acabados impecables',
      icon: '⭐'
    },
    {
      title: 'Eficiencia',
      description: 'Optimización de tiempos y recursos',
      icon: '⚡'
    },
    {
      title: 'Innovación',
      description: 'Incorporación de las últimas tendencias y tecnologías',
      icon: '🚀'
    },
    {
      title: 'Compromiso',
      description: 'Dedicación total hasta la satisfacción del cliente',
      icon: '🤝'
    }
  ];

  const processSteps: ProcessStepProps[] = [
    {
      number: '1',
      title: 'Consulta inicial',
      description: 'Análisis detallado de necesidades y posibilidades'
    },
    {
      number: '2',
      title: 'Diseño personalizado',
      description: 'Propuesta adaptada a tu estilo y presupuesto'
    },
    {
      number: '3',
      title: 'Planificación exhaustiva',
      description: 'Cronograma realista y gestión de permisos'
    },
    {
      number: '4',
      title: 'Ejecución controlada',
      description: 'Supervisión diaria y comunicación constante'
    },
    {
      number: '5',
      title: 'Entrega perfecta',
      description: 'Revisión final y garantía extendida'
    }
  ];

  const statistics: StatisticProps[] = [
    { value: '200+', label: 'Proyectos Completados' },
    { value: '98%', label: 'Satisfacción del Cliente' },
    { value: '5 años', label: 'Garantía Extendida' },
    { value: '15+', label: 'Años de Experiencia' }
  ];

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
                onMouseLeave={handleServicesLeave}
              >
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
                    onMouseLeave={handleServicesLeave}
                  >
                    <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      {serviceMenuItems.map((item, index) =>
                        item.enabled ? (
                          <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <div
                            key={index}
                            className="block px-4 py-2 text-gray-400 cursor-not-allowed"
                          >
                            {item.name}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/reformas#proyectos" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
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
              <Link href="/contact" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
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
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <Link
                href="/servicios-seleccion"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors flex items-center justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Servicios
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="bg-gray-50 py-2">
                    {serviceMenuItems.map((item, index) =>
                      item.enabled ? (
                        <Link
                          key={index}
                          href={item.href}
                          className="block pl-8 pr-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1e3a5f] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div
                          key={index}
                          className="block pl-8 pr-4 py-2 text-gray-400 cursor-not-allowed"
                        >
                          {item.name}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
              
              <Link
                href="/reformas#proyectos"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/portfolio-projects"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about-us"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Quiénes Somos</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Transformando espacios, construyendo sueños desde Barcelona
          </p>
        </div>
      </section>

      {/* Historia y Propósito */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Historia y Propósito</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Buildnest nace en Barcelona con la misión de revolucionar el sector de las reformas, 
                aportando transparencia, calidad y eficiencia a cada proyecto. Fundada por un equipo 
                de arquitectos e ingenieros con más de 15 años de experiencia, nuestra empresa se 
                especializa en transformar espacios residenciales con un enfoque integral y personalizado.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nuestro Propósito</h3>
                <p className="text-gray-700 leading-relaxed">
                  Creemos que cada hogar tiene el potencial de ser extraordinario. Nuestro propósito 
                  es hacer que el proceso de reforma sea una experiencia positiva y emocionante, 
                  eliminando el estrés y la incertidumbre que tradicionalmente acompañan a estos proyectos.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                {statistics?.map((stat, index) => (
                  <Statistic key={index} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Fundamentales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Valores Fundamentales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values?.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Cómo Trabajamos
          </h2>
          <div className="space-y-8 ml-8">
            {processSteps?.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Profesional */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Equipo Profesional
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Nuestro equipo multidisciplinar incluye arquitectos, ingenieros, diseñadores de interiores, 
            maestros de obra y especialistas en cada área de la construcción. Todos nuestros profesionales 
            están certificados y en formación continua para ofrecer siempre las mejores soluciones.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">👷</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Arquitectos</h3>
              <p className="text-gray-600">Diseño estructural y planificación espacial</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ingenieros</h3>
              <p className="text-gray-600">Soluciones técnicas y estructurales</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Diseñadores</h3>
              <p className="text-gray-600">Estética y funcionalidad interior</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Confiar en Nosotros */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Por Qué Confiar en Nosotros
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '✅', text: 'Más de 200 proyectos completados exitosamente' },
              { icon: '😊', text: 'Índice de satisfacción del cliente del 98%' },
              { icon: '🛡️', text: 'Garantía extendida de 5 años en todos los trabajos' },
              { icon: '📋', text: 'Seguros de responsabilidad civil y decenal' },
              { icon: '🎓', text: 'Certificaciones profesionales actualizadas' },
              { icon: '🌱', text: 'Compromiso con la sostenibilidad y eficiencia energética' }
            ]?.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl">{item.icon}</div>
                <p className="text-blue-50 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para Transformar tu Hogar?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Contáctanos hoy y descubre cómo podemos hacer realidad tu proyecto de reforma
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contactar Ahora
          </Link>
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
};

export default AboutUsPage;