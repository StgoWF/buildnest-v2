import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  label: string;
  icon: string;
  title: string;
  description: string;
  badges: string[];
  buttonText: string;
  buttonHref: string;
  isPrimary: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  label, 
  icon, 
  title, 
  description, 
  badges, 
  buttonText, 
  buttonHref, 
  isPrimary 
}) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col h-full border border-gray-100">
    <div className="mb-4">
      <span className="inline-block px-4 py-1 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full">
        {label}
      </span>
    </div>
    
    <div className="text-6xl mb-6">
      {icon}
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      {title}
    </h3>
    
    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {badges?.map?.((badge, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
        >
          {badge}
        </span>
      ))}
    </div>
    
    <Link
      href={buttonHref}
      className={`block text-center px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
        isPrimary 
          ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg' 
          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
      }`}
    >
      {buttonText}
    </Link>
  </div>
);

export default function LandingPage() {
  const services: ServiceCardProps[] = [
    {
      label: 'Obra nueva · Llave en mano',
      icon: '🏗️',
      title: 'Construcción industrializada',
      description: 'Viviendas eficientes diseñadas y ejecutadas con sistema industrializado, con plazos y costes controlados desde el primer día.',
      badges: [
        'Plazos más cortos',
        'Alta eficiencia energética',
        'Proyecto y ejecución coordinados'
      ],
      buttonText: 'Ver Sitio De Construcción',
      buttonHref: '/construccion',
      isPrimary: true
    },
    {
      label: 'Viviendas y locales',
      icon: '🛠️',
      title: 'Reformas',
      description: 'Reformamos y revalorizamos pisos, casas y locales: distribución, instalaciones, acabados y eficiencia, coordinado por un solo equipo.',
      badges: [
        'Reformas completas y parciales',
        'Cocinas y baños a medida',
        'Precio cerrado y seguimiento'
      ],
      buttonText: 'Ver Sitio De Reformas',
      buttonHref: '/reformas',
      isPrimary: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Image 
              src="/assets/images/buildnest-1764591131149.png"
              alt="Buildnest logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="flex items-baseline">
              <h1 className="text-3xl font-bold text-[#1e3a5f]">
                Buildnest
              </h1>
              <span className="ml-3 text-xs font-semibold text-[#1e3a5f] uppercase tracking-widest">
                Construcción & Reformas
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                Especialistas en vivienda y espacios a medida
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Elige cómo <span className="text-blue-600">podemos ayudarte</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Un mismo equipo, dos servicios complementarios: construcción industrializada de obra nueva y reformas para actualizar y revalorizar tu vivienda o local.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {services?.map?.((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600 text-sm leading-relaxed">
              ¿No tienes claro qué necesitas? Elige la opción que más se acerque a tu caso y definiremos juntos el alcance del proyecto.
            </p>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">
              © 2024 Buildnest. Construcción & Reformas.
            </p>
            <a 
              href="mailto:info@buildnest.es" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              info@buildnest.es
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}