'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface ConstructionServiceCardProps {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

interface ConstructionMethodStepProps {
  number: string;
  title: string;
  description: string;
}

interface ConstructionAdvantageProps {
  icon: string;
  title: string;
  description: string;
}

interface ConstructionProjectProps {
  title: string;
  location: string;
  image: string;
  alt: string;
  slug: string;
}

interface ConstructionTestimonialProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}

interface SustainabilityFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const ConstructionServiceCard: React.FC<ConstructionServiceCardProps> = ({ title, description, icon, alt }) =>
<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>;


const ConstructionMethodStep: React.FC<ConstructionMethodStepProps> = ({ number, title, description }) =>
<div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>;


const ConstructionAdvantage: React.FC<ConstructionAdvantageProps> = ({ icon, title, description }) =>
<div className="bg-white rounded-xl p-6 shadow-md">
    <div className="text-4xl mb-3">{icon}</div>
    <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>;


const ConstructionProject: React.FC<ConstructionProjectProps> = ({ title, location, image, alt, slug }) =>
<Link href={`/construction-project-gallery/${slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
    <div className="relative h-64 overflow-hidden">
      <AppImage src={image} alt={alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-4">
      <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-gray-600 text-sm">{location}</p>
    </div>
  </Link>;


const ConstructionTestimonial: React.FC<ConstructionTestimonialProps> = ({ name, location, text, rating }) =>
<div className="bg-white rounded-xl p-6 shadow-md">
    <div className="flex text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) =>
    <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    )}
    </div>
    <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{text}&rdquo;</p>
    <div>
      <p className="font-bold text-gray-900">{name}</p>
      <p className="text-gray-600 text-sm">{location}</p>
    </div>
  </div>;


const SustainabilityFeature: React.FC<SustainabilityFeatureProps> = ({ icon, title, description }) =>
<div className="flex flex-col items-center text-center">
    <div className="text-5xl mb-3">{icon}</div>
    <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>;


export default function ConstructionServicesPage() {
  const [isConstructionNavOpen, setIsConstructionNavOpen] = useState(false);
  const [isMobileConstructionMenuOpen, setIsMobileConstructionMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: '',
    hasLand: '',
    budget: '',
    squareMeters: '',
    needsFinancing: '',
    projectDetails: ''
  });

  const constructionServices: ConstructionServiceCardProps[] = [
  {
    title: 'Diseño & fabricación',
    description: 'Desarrollamos planos personalizados y fabricamos todos los componentes en nuestras instalaciones con control de calidad industrial. Cada pieza se produce con precisión milimétrica.',
    icon: '📐',
    alt: 'Design and fabrication icon representing architectural planning and manufacturing'
  },
  {
    title: 'Construcción',
    description: 'Montaje rápido y eficiente en obra. Nuestro sistema industrializado reduce los tiempos de construcción hasta un 50%, minimizando imprevistos y garantizando plazos de entrega.',
    icon: '🏗️',
    alt: 'Construction icon showing building and assembly process'
  },
  {
    title: 'Entrega & garantía',
    description: 'Entrega llave en mano con garantía completa. Nos encargamos de todo el proceso hasta que puedas disfrutar de tu vivienda, con servicio postventa y mantenimiento incluido.',
    icon: '🔑',
    alt: 'Turnkey delivery icon with keys and warranty symbol'
  }];


  const methodSteps: ConstructionMethodStepProps[] = [
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


  const advantages: ConstructionAdvantageProps[] = [
  {
    icon: '⚡',
    title: '50% menos tiempo',
    description: 'Reducimos los plazos de construcción a la mitad gracias a la fabricación en paralelo y al montaje optimizado.'
  },
  {
    icon: '✓',
    title: 'Calidad industrializada',
    description: 'Control exhaustivo en cada fase. Cada componente pasa rigurosas pruebas de calidad.'
  },
  {
    icon: '🌱',
    title: 'Sostenibilidad',
    description: 'Materiales ecológicos certificados y procesos que minimizan residuos y emisiones de CO₂.'
  },
  {
    icon: '💰',
    title: 'Precio cerrado',
    description: 'Presupuesto transparente sin sorpresas. Sabes exactamente cuánto vas a invertir desde el inicio.'
  }];


  const projects: ConstructionProjectProps[] = [
  {
    title: 'Villa moderna sostenible',
    location: 'Madrid • 180m² • 2023',
    image: "https://images.unsplash.com/photo-1696197017975-271900172317",
    alt: 'Modern sustainable villa in Madrid featuring contemporary architecture and eco-friendly design',
    slug: 'villa-moderna-sostenible'
  },
  {
    title: 'Casa modular eficiente',
    location: 'Barcelona • 150m² • 2023',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_193bae734-1764631545047.png",
    alt: 'Efficient modular house in Barcelona with industrialized construction methods',
    slug: 'casa-modular-eficiente'
  },
  {
    title: 'Residencia bioclimática',
    location: 'Valencia • 200m² • 2023',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c6457d7-1764631543167.png",
    alt: 'Bioclimatic residence in Valencia optimized for energy efficiency',
    slug: 'residencia-bioclimatica'
  },
  {
    title: 'Vivienda pasiva premium',
    location: 'Sevilla • 165m² • 2022',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae9abfe7-1764631544809.png",
    alt: 'Premium passive house in Sevilla with superior insulation and energy systems',
    slug: 'vivienda-pasiva-premium'
  },
  {
    title: 'Casa unifamiliar eco',
    location: 'Bilbao • 140m² • 2022',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14cd5dc8a-1764631544986.png",
    alt: 'Eco-friendly single-family house in Bilbao built with sustainable materials',
    slug: 'casa-unifamiliar-eco'
  },
  {
    title: 'Chalet industrializado',
    location: 'Málaga • 190m² • 2022',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4cd910b-1764631543144.png",
    alt: 'Industrialized chalet in Malaga showcasing prefabricated construction efficiency',
    slug: 'chalet-industrializado'
  }];


  const testimonials: ConstructionTestimonialProps[] = [
  {
    name: 'Ana Martínez',
    location: 'Madrid',
    text: 'Buildnest construyó nuestra casa en la mitad del tiempo prometido. La calidad es excepcional y el proceso fue transparente desde el primer día. Totalmente recomendable.',
    rating: 5
  },
  {
    name: 'Roberto Sánchez',
    location: 'Barcelona',
    text: 'La construcción industrializada superó todas nuestras expectativas. Casa moderna, eficiente energéticamente y con acabados de lujo. El equipo fue profesional en todo momento.',
    rating: 5
  },
  {
    name: 'Carmen López',
    location: 'Valencia',
    text: 'Elegimos Buildnest por su compromiso con la sostenibilidad. Nuestra vivienda es autosuficiente energéticamente y tiene certificación A+. Estamos encantados con el resultado.',
    rating: 5
  }];


  const sustainabilityFeatures: SustainabilityFeatureProps[] = [
  {
    icon: '🌍',
    title: 'Materiales certificados',
    description: '100% sostenibles y reciclables.'
  },
  {
    icon: '⚡',
    title: 'Ahorro energético',
    description: 'Hasta 70% menos consumo.'
  },
  {
    icon: '♻️',
    title: 'Cero residuos',
    description: 'Proceso de fabricación limpio.'
  },
  {
    icon: '🏆',
    title: 'Certificación A+',
    description: 'Máxima eficiencia energética.'
  }];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Construction Specific */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <AppImage
                src="/assets/images/buildnest-1764591131149.png"
                alt="Buildnest logo featuring navy blue hexagonal house with protective elements"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />

              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold text-[#1e3a5f]">Buildnest</span>
                <span className="text-[10px] sm:text-xs text-gray-500 tracking-wide uppercase hidden xs:block">Construcción Industrializada</span>
              </div>
            </Link>
            
            {/* Desktop Navigation - Construction Menu Items */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/about-us" className="text-gray-700 hover:text-[#1e3a5f] transition-colors construction-nav-item">
                Quiénes somos
              </Link>
              <Link href="#sistemas" className="text-gray-700 hover:text-[#1e3a5f] transition-colors construction-nav-item">
                Sistemas constructivos
              </Link>
              <Link href="/construction-project-gallery" className="text-gray-700 hover:text-[#1e3a5f] transition-colors construction-nav-item">
                Galería
              </Link>
              <Link href="/portfolio-projects" className="text-gray-700 hover:text-[#1e3a5f] transition-colors construction-nav-item">
                Portafolio
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#1e3a5f] transition-colors construction-nav-item">
                Blog
              </Link>
              <Link href="#contacto-construction" className="text-gray-700 hover:text-[#1e3a5f] transition-colors construction-nav-item">
                Contacto
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileConstructionMenuOpen(!isMobileConstructionMenuOpen)}
              aria-label="Toggle construction menu">

              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileConstructionMenuOpen ?
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu - Construction */}
          {isMobileConstructionMenuOpen &&
          <div className="md:hidden py-4 border-t border-gray-100">
              <Link
              href="/about-us"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors construction-nav-item-mobile"
              onClick={() => setIsMobileConstructionMenuOpen(false)}>

                Quiénes somos
              </Link>
              <Link
              href="#sistemas"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors construction-nav-item-mobile"
              onClick={() => setIsMobileConstructionMenuOpen(false)}>

                Sistemas constructivos
              </Link>
              <Link
              href="/construction-project-gallery"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors construction-nav-item-mobile"
              onClick={() => setIsMobileConstructionMenuOpen(false)}>

                Galería
              </Link>
              <Link
              href="/portfolio-projects"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors construction-nav-item-mobile"
              onClick={() => setIsMobileConstructionMenuOpen(false)}>

                Portafolio
              </Link>
              <Link
              href="/blog"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors construction-nav-item-mobile"
              onClick={() => setIsMobileConstructionMenuOpen(false)}>

                Blog
              </Link>
              <Link
              href="#contacto-construction"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f] transition-colors construction-nav-item-mobile"
              onClick={() => setIsMobileConstructionMenuOpen(false)}>

                Contacto
              </Link>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[550px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://images.unsplash.com/photo-1563717134631-61b25b23b2d1"
            alt="Modern industrialized construction site showing efficient building methods"
            className="w-full h-full object-cover brightness-90" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 sm:from-black/60 sm:via-black/40 sm:to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 text-white"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)'
            }}>
              Construcción industrializada llave en mano
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-5 sm:mb-6 md:mb-8 leading-relaxed font-light"
            style={{
              textShadow: '0 3px 8px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)'
            }}>
              Diseñamos, fabricamos y entregamos viviendas eficientes y sostenibles en la mitad de tiempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#proyectos-construction"
                className="bg-white text-[#1e3a5f] px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300 text-center shadow-2xl hover:shadow-3xl transform hover:scale-105">
                Ver proyectos
              </Link>
              <Link
                href="#contacto-construction"
                className="bg-white/10 backdrop-blur-md text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 transition-all duration-300 text-center border-2 border-white/80 shadow-lg">
                Solicita presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Nuestros servicios
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Soluciones integrales para tu proyecto de construcción
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {constructionServices?.map?.((service, index) =>
            <ConstructionServiceCard key={index} {...service} />
            )}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="sistemas" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Método Buildnest
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Un proceso optimizado de principio a fin
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {methodSteps?.map?.((step, index) =>
            <ConstructionMethodStep key={index} {...step} />
            )}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Ventajas competitivas
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Por qué elegir construcción industrializada
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {advantages?.map?.((advantage, index) =>
            <ConstructionAdvantage key={index} {...advantage} />
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos-construction" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Proyectos realizados
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Viviendas que transforman espacios y vidas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {projects?.map?.((project, index) =>
            <ConstructionProject key={index} {...project} />
            )}
          </div>
          <div className="text-center">
            <Link
              href="/construction-project-gallery"
              className="inline-block bg-[#1e3a5f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-[#2d5a8f] transition-colors shadow-lg">
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Eficiencia y sostenibilidad
              </h2>
              <h3 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
                Construimos el futuro hoy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nuestro compromiso con el medio ambiente va más allá de las palabras. Cada vivienda Buildnest está diseñada para minimizar su huella ecológica y maximizar la eficiencia energética.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos materiales certificados, sistemas de aislamiento de última generación y tecnologías que reducen el consumo energético hasta un 70% comparado con construcciones tradicionales.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <AppImage
                src="https://images.unsplash.com/photo-1663416971412-0fccfef67142"
                alt="Sustainable construction with eco-friendly materials and solar panels"
                className="w-full h-full object-cover" />

            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {sustainabilityFeatures?.map?.((feature, index) =>
            <SustainabilityFeature key={index} {...feature} />
            )}
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
              Testimonios reales de familias satisfechas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials?.map?.((testimonial, index) =>
            <ConstructionTestimonial key={index} {...testimonial} />
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto-construction" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2">
              Cuéntanos tu proyecto
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Te enviaremos una propuesta personalizada en menos de 48 horas
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  required />

              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    required />

                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    required />

                </div>
              </div>
              
              <div>
                <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿En qué provincia quieres construir?
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  required />

              </div>
              
              <div>
                <label htmlFor="hasLand" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Eres propietario del terreno donde construirás?
                </label>
                <select
                  id="hasLand"
                  name="hasLand"
                  value={formData.hasLand}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  required>

                  <option value="">Selecciona una opción</option>
                  <option value="si">Sí, ya tengo el terreno</option>
                  <option value="buscando">Estoy buscando terreno</option>
                  <option value="no">No tengo terreno</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Cuál es tu presupuesto disponible?
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  required>

                  <option value="">Selecciona un rango</option>
                  <option value="hasta-150k">Hasta 150.000 €</option>
                  <option value="150k-250k">150.000 € – 250.000 €</option>
                  <option value="250k-350k">250.000 € – 350.000 €</option>
                  <option value="mas-350k">Más de 350.000 €</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="squareMeters" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Cuántos m² quieres para tu casa?
                </label>
                <input
                  type="number"
                  id="squareMeters"
                  name="squareMeters"
                  value={formData.squareMeters}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  required />

              </div>
              
              <div>
                <label htmlFor="needsFinancing" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Necesitas financiación?
                </label>
                <select
                  id="needsFinancing"
                  name="needsFinancing"
                  value={formData.needsFinancing}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  required>

                  <option value="">Selecciona una opción</option>
                  <option value="si">Sí</option>
                  <option value="no">No</option>
                  <option value="evaluando">Parcial / Estoy evaluándolo</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                  required />

              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1e3a5f] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#2d5a8f] transition-colors shadow-lg hover:shadow-xl">

                Enviar solicitud
              </button>
            </div>
          </form>
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
                  className="h-8 w-8 object-contain" />

                <h3 className="text-white text-base sm:text-lg font-bold">Buildnest</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                Especialistas en construcción industrializada con más de 10 años de experiencia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Servicios</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="#sistemas" className="hover:text-white transition-colors">Diseño & Fabricación</Link></li>
                <li><Link href="#sistemas" className="hover:text-white transition-colors">Construcción</Link></li>
                <li><Link href="#sistemas" className="hover:text-white transition-colors">Entrega Llave en Mano</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>Barcelona, España</li>
                <li>Tel: +34 123 456 789</li>
                <li>construccion@buildnest.es</li>
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
    </div>);

}