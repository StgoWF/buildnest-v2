'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

interface MethodStepProps {
  number: string;
  title: string;
  description: string;
}

interface AdvantageProps {
  title: string;
  description: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  location: string;
  area: string;
  year: string;
  image: string;
  alt: string;
}

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface SustainabilityFeatureProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) =>
<div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
    <div className="text-5xl sm:text-6xl mb-4">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
  </div>;


const MethodStep: React.FC<MethodStepProps> = ({ number, title, description }) =>
<div className="relative">
    <div className="flex items-start gap-4 sm:gap-6">
      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg">
        {number}
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </div>
  </div>;


const AdvantageCard: React.FC<AdvantageProps> = ({ title, description, icon }) =>
<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-4xl sm:text-5xl mb-3">{icon}</div>
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>;


const ProjectCard: React.FC<ProjectCardProps> = ({ title, location, area, year, image, alt }) =>
<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
    <div className="relative h-64 overflow-hidden">
      <AppImage
      src={image}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </span>
        <span>•</span>
        <span>{area}</span>
        <span>•</span>
        <span>{year}</span>
      </div>
    </div>
  </div>;


const Testimonial: React.FC<TestimonialProps> = ({ name, location, text, rating }) =>
<div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(rating)].map((_, i) =>
    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    )}
    </div>
    <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{text}&rdquo;</p>
    <div>
      <p className="font-bold text-gray-900 text-lg">{name}</p>
      <p className="text-gray-600 text-sm">{location}</p>
    </div>
  </div>;


const SustainabilityFeature: React.FC<SustainabilityFeatureProps> = ({ title, description, icon }) =>
<div className="flex flex-col items-center text-center p-4">
    <div className="text-4xl sm:text-5xl mb-3">{icon}</div>
    <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>;


export default function ConstruccionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    provincia: '',
    terreno: '',
    presupuesto: '',
    metros: '',
    financiacion: '',
    proyecto: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Gracias por tu interés. Te contactaremos en menos de 48 horas.');
  };

  const constructionNavItems = [
  { name: 'Quiénes somos', href: '/about-us', id: 'construccion-nav-about' },
  { name: 'Sistemas constructivos', href: '#metodo', id: 'construccion-nav-systems' },
  { name: 'Galería', href: '#proyectos', id: 'construccion-nav-gallery' },
  { name: 'Portafolio', href: '/construccion-proyectos', id: 'construccion-nav-portfolio' },
  { name: 'Blog Industrial', href: '/blog-construccion', id: 'construccion-nav-blog-industrial' },
  { name: 'Contacto', href: '#contacto', id: 'construccion-nav-contact' }];


  const services: ServiceCardProps[] = [
  {
    title: 'Diseño & fabricación',
    description: 'Desarrollamos planos personalizados y fabricamos todos los componentes en nuestras instalaciones con control de calidad industrial. Cada pieza se produce con precisión milimétrica.',
    icon: '📐'
  },
  {
    title: 'Construcción',
    description: 'Montaje rápido y eficiente en obra. Nuestro sistema industrializado reduce los tiempos de construcción hasta un 50%, minimizando imprevistos y garantizando plazos de entrega.',
    icon: '🏗️'
  },
  {
    title: 'Entrega & garantía',
    description: 'Entrega llave en mano con garantía completa. Nos encargamos de todo el proceso hasta que puedas disfrutar de tu vivienda, con servicio postventa y mantenimiento incluido.',
    icon: '🔑'
  }];


  const methodSteps: MethodStepProps[] = [
  {
    number: '1',
    title: 'Diseño',
    description: 'Creamos el proyecto arquitectónico adaptado a tus necesidades y presupuesto.'
  },
  {
    number: '2',
    title: 'Fabricación',
    description: 'Producimos todos los componentes en fábrica con un control de calidad exhaustivo.'
  },
  {
    number: '3',
    title: 'Montaje',
    description: 'Ensamblamos la vivienda en tiempo récord con mínimo impacto en el entorno.'
  },
  {
    number: '4',
    title: 'Entrega',
    description: 'Recibe tu vivienda lista para habitar con todas las garantías.'
  }];


  const advantages: AdvantageProps[] = [
  {
    title: '50% menos tiempo',
    description: 'Reducimos los plazos de construcción a la mitad gracias a la fabricación en paralelo y al montaje optimizado.',
    icon: '⚡'
  },
  {
    title: 'Calidad industrializada',
    description: 'Control exhaustivo en cada fase. Cada componente pasa rigurosas pruebas de calidad.',
    icon: '✓'
  },
  {
    title: 'Sostenibilidad',
    description: 'Materiales ecológicos certificados y procesos que minimizan residuos y emisiones de CO₂.',
    icon: '🌱'
  },
  {
    title: 'Precio cerrado',
    description: 'Presupuesto transparente sin sorpresas. Sabes exactamente cuánto vas a invertir desde el inicio.',
    icon: '💰'
  }];


  const projects: ProjectCardProps[] = [
  {
    title: 'Villa moderna sostenible',
    location: 'Madrid',
    area: '180m²',
    year: '2023',
    image: "https://images.unsplash.com/photo-1617052167777-f0f26b5c54f4",
    alt: 'Modern sustainable villa in Madrid featuring contemporary architecture with large windows and eco-friendly materials'
  },
  {
    title: 'Casa modular eficiente',
    location: 'Barcelona',
    area: '150m²',
    year: '2023',
    image: "https://images.unsplash.com/photo-1680847454169-9b5395ece6f2",
    alt: 'Efficient modular house in Barcelona with minimalist design and energy-efficient systems'
  },
  {
    title: 'Residencia bioclimática',
    location: 'Valencia',
    area: '200m²',
    year: '2023',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1951b74f2-1764631545000.png",
    alt: 'Bioclimatic residence in Valencia designed for optimal natural climate control and sustainability'
  },
  {
    title: 'Vivienda pasiva premium',
    location: 'Sevilla',
    area: '165m²',
    year: '2022',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1950845-1764631547290.png",
    alt: 'Premium passive house in Sevilla with advanced insulation and renewable energy systems'
  },
  {
    title: 'Casa unifamiliar eco',
    location: 'Bilbao',
    area: '140m²',
    year: '2022',
    image: "https://images.unsplash.com/photo-1588310255035-29b0cafa7fcf",
    alt: 'Eco-friendly single-family home in Bilbao built with sustainable materials and green technology'
  },
  {
    title: 'Chalet industrializado',
    location: 'Málaga',
    area: '190m²',
    year: '2022',
    image: "https://images.unsplash.com/photo-1639397504485-84ed00b67937",
    alt: 'Industrialized chalet in Málaga showcasing prefabricated construction efficiency and modern design'
  }];


  const testimonials: TestimonialProps[] = [
  {
    name: 'Laura Sánchez',
    location: 'Madrid',
    text: 'Buildnest construyó nuestra casa en tiempo récord. La calidad de los acabados es excepcional y el proceso fue transparente desde el primer día. Muy recomendable.',
    rating: 5
  },
  {
    name: 'Miguel Ángel Torres',
    location: 'Barcelona',
    text: 'El sistema industrializado nos permitió tener nuestra casa lista en 6 meses. Profesionales, eficientes y comprometidos con la sostenibilidad.',
    rating: 5
  }];


  const sustainabilityFeatures: SustainabilityFeatureProps[] = [
  {
    title: 'Materiales certificados',
    description: '100% sostenibles y reciclables.',
    icon: '🌍'
  },
  {
    title: 'Ahorro energético',
    description: 'Hasta 70% menos consumo.',
    icon: '⚡'
  },
  {
    title: 'Cero residuos',
    description: 'Proceso de fabricación limpio.',
    icon: '♻️'
  },
  {
    title: 'Certificación A+',
    description: 'Máxima eficiencia energética.',
    icon: '🏆'
  }];


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
              {constructionNavItems.map((item) =>
              <Link
                key={item.id}
                href={item.href}
                id={item.id}
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
              {constructionNavItems.map((item) =>
            <Link
              key={item.id}
              href={item.href}
              id={item.id}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors"
              onClick={() => setIsMenuOpen(false)}>

                  {item.name}
                </Link>
            )}
            </div>
          }
        </div>
      </nav>

      {/* Enhanced Hero Section with Professional Stats Overlay */}
      <section className="relative h-[700px] sm:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://images.unsplash.com/photo-1588545552010-e2a0ec4ad042"
            alt="Modern industrialized construction site showcasing efficient building methods and sustainable architecture"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          
          {/* Professional Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-4xl">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 mb-6">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold text-sm">Certificados ISO 9001 | 14001</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
              Construcción Industrial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                del Futuro
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 leading-relaxed max-w-3xl"
            style={{ textShadow: '0 3px 12px rgba(0,0,0,0.9)' }}>
              Sistemas prefabricados de alta eficiencia. Entrega garantizada en 50% menos tiempo.
            </p>

            {/* Professional Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl">
              {[
                { value: '50%', label: 'Más Rápido', icon: '⚡' },
                { value: '500+', label: 'Proyectos', icon: '🏗️' },
                { value: 'A+', label: 'Eficiencia', icon: '🌱' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#proyectos"
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 text-center shadow-2xl transform hover:scale-105">
                <span>Ver Portfolio Industrial</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#contacto"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-center border-2 border-white/30 shadow-2xl transform hover:scale-105">
                Consulta Técnica Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales para tu proyecto de construcción
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <ServiceCard key={index} {...service} />
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Trust & Certifications Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 to-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Certificaciones & Garantías Profesionales
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Cumplimos con los más altos estándares internacionales de calidad y sostenibilidad
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { icon: '✓', title: 'ISO 9001:2015', desc: 'Gestión de Calidad' },
              { icon: '✓', title: 'ISO 14001', desc: 'Gestión Ambiental' },
              { icon: '✓', title: 'OHSAS 18001', desc: 'Seguridad Laboral' },
              { icon: '✓', title: 'Certificación A+', desc: 'Eficiencia Energética' }
            ].map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                <p className="text-sm text-blue-100">{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Garantía de 10 años en estructura y 5 años en instalaciones</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Seguro de Construcción</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Garantía Estructural</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Mantenimiento Post-Entrega</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Método Buildnest
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un proceso optimizado de principio a fin
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {methodSteps.map((step, index) =>
            <MethodStep key={index} {...step} />
            )}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ventajas competitivas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Por qué elegir construcción industrializada
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) =>
            <AdvantageCard key={index} {...advantage} />
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proyectos realizados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Viviendas que transforman espacios y vidas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {projects.map((project, index) =>
            <ProjectCard key={index} {...project} />
            )}
          </div>
          <div className="text-center">
            <Link
              href="/construccion-proyectos"
              className="inline-block bg-[#1e3a5f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2d5a8f] transition-colors shadow-lg">
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Eficiencia y sostenibilidad
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Construimos el futuro hoy
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nuestro compromiso con el medio ambiente va más allá de las palabras. Cada vivienda Buildnest está diseñada para minimizar su huella ecológica y maximizar la eficiencia energética.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos materiales certificados, sistemas de aislamiento de última generación y tecnologías que reducen el consumo energético hasta un 70% comparado con construcciones tradicionales.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {sustainabilityFeatures.map((feature, index) =>
              <SustainabilityFeature key={index} {...feature} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Testimonios reales de familias satisfechas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) =>
            <Testimonial key={index} {...testimonial} />
            )}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cuéntanos tu proyecto
            </h2>
            <p className="text-lg text-gray-600">
              Te enviaremos una propuesta personalizada en menos de 48 horas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all"
                  placeholder="Tu nombre" />

              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all"
                  placeholder="tu@email.com" />

              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all"
                  placeholder="+34 600 000 000" />

              </div>

              <div>
                <label htmlFor="provincia" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿En qué provincia quieres construir?
                </label>
                <input
                  type="text"
                  id="provincia"
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all"
                  placeholder="Provincia" />

              </div>
            </div>

            <div>
              <label htmlFor="terreno" className="block text-sm font-medium text-gray-700 mb-2">
                ¿Eres propietario del terreno donde construirás?
              </label>
              <select
                id="terreno"
                name="terreno"
                value={formData.terreno}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all">

                <option value="">Selecciona una opción</option>
                <option value="si">Sí, ya tengo el terreno</option>
                <option value="buscando">Estoy buscando terreno</option>
                <option value="no">No tengo terreno</option>
              </select>
            </div>

            <div>
              <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-700 mb-2">
                ¿Cuál es tu presupuesto disponible?
              </label>
              <select
                id="presupuesto"
                name="presupuesto"
                value={formData.presupuesto}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all">

                <option value="">Selecciona un rango</option>
                <option value="hasta-150k">Hasta 150.000 €</option>
                <option value="150k-250k">150.000 € – 250.000 €</option>
                <option value="250k-350k">250.000 € – 350.000 €</option>
                <option value="mas-350k">Más de 350.000 €</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="metros" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Cuántos m² quieres para tu casa?
                </label>
                <input
                  type="number"
                  id="metros"
                  name="metros"
                  value={formData.metros}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all"
                  placeholder="ej. 150" />

              </div>

              <div>
                <label htmlFor="financiacion" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Necesitas financiación?
                </label>
                <select
                  id="financiacion"
                  name="financiacion"
                  value={formData.financiacion}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all">

                  <option value="">Selecciona una opción</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                  <option value="evaluando">Parcial / Estoy evaluándolo</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="proyecto" className="block text-sm font-medium text-gray-700 mb-2">
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="proyecto"
                name="proyecto"
                value={formData.proyecto}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all resize-none"
                placeholder="Describe tu proyecto, necesidades especiales, plazos..." />

            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a5f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2d5a8f] transition-colors shadow-lg">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

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
                <li><Link href="#metodo" className="hover:text-white transition-colors">Diseño & Fabricación</Link></li>
                <li><Link href="#metodo" className="hover:text-white transition-colors">Construcción</Link></li>
                <li><Link href="#metodo" className="hover:text-white transition-colors">Entrega Llave en Mano</Link></li>
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