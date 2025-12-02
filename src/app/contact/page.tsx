'use client';

import React, { useState } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  budget: string;
  description: string;
  startDate: string;
  contactPreference: string;
}

interface ContactMethodProps {
  icon: string;
  title: string;
  value: string;
  subtitle?: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, title, value, subtitle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-blue-600 font-semibold mb-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    location: '',
    budget: '',
    description: '',
    startDate: '',
    contactPreference: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('¡Gracias por contactarnos! Nos pondremos en contacto contigo en menos de 24 horas.');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectType: '',
        location: '',
        budget: '',
        description: '',
        startDate: '',
        contactPreference: ''
      });
    }, 1500);
  };

  const contactMethods: ContactMethodProps[] = [
    {
      icon: '📞',
      title: 'Teléfono',
      value: '93 XXX XX XX',
      subtitle: 'Horario comercial'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '6XX XXX XXX',
      subtitle: 'Respuesta inmediata'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'info@buildnest.es',
      subtitle: 'Respuesta en 24h'
    },
    {
      icon: '📍',
      title: 'Oficina',
      value: 'Carrer de Balmes, 123',
      subtitle: '08008 Barcelona'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Hablemos de tu Proyecto de Reforma</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            En Buildnest creemos que cada gran proyecto comienza con una buena conversación. 
            Cuéntanos tu idea, tus necesidades y tus sueños, y nosotros te ayudaremos a 
            convertirlos en realidad con un plan claro, un presupuesto transparente y la 
            garantía de calidad que nos caracteriza.
          </p>
        </div>
      </section>

      {/* Formas de Contacto */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Formas de Contacto
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods?.map((method, index) => (
              <ContactMethod
                key={index}
                icon={method.icon}
                title={method.title}
                value={method.value}
                subtitle={method.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Consulta */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Formulario de Consulta
          </h2>
          
          {submitMessage && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-700">{submitMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono de contacto *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="6XX XXX XXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de proyecto *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="reforma-integral">Reforma Integral</option>
                  <option value="reforma-cocina">Reforma de Cocina</option>
                  <option value="reforma-bano">Reforma de Baño</option>
                  <option value="ampliacion">Ampliación</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ubicación de la reforma *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Barcelona, Madrid, etc."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Presupuesto aproximado *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="menos-20k">Menos de 20.000€</option>
                  <option value="20k-50k">20.000€ - 50.000€</option>
                  <option value="50k-100k">50.000€ - 100.000€</option>
                  <option value="mas-100k">Más de 100.000€</option>
                </select>
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Cuándo te gustaría empezar? *
                </label>
                <select
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="inmediatamente">Inmediatamente</option>
                  <option value="1-3-meses">En 1-3 meses</option>
                  <option value="3-6-meses">En 3-6 meses</option>
                  <option value="mas-6-meses">Más de 6 meses</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Descripción del proyecto *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Cuéntanos más sobre tu proyecto de reforma..."
              />
            </div>

            <div>
              <label htmlFor="contactPreference" className="block text-sm font-semibold text-gray-700 mb-2">
                Preferencia de contacto *
              </label>
              <select
                id="contactPreference"
                name="contactPreference"
                value={formData.contactPreference}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Selecciona una opción</option>
                <option value="telefono">Teléfono</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Horarios y Compromiso */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Horarios de Atención</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Lunes a Viernes</span>
                  <span className="text-blue-600">9:00 - 18:00h</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Sábados</span>
                  <span className="text-blue-600">10:00 - 14:00h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">Domingos</span>
                  <span className="text-gray-500">Cerrado</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">* Sábados solo con cita previa</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Compromiso de Respuesta</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-blue-100">Respuesta en menos de 2 horas</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">Respuesta en menos de 24 horas</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📞</div>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-blue-100">Atención directa en horario comercial</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🏠</div>
                  <div>
                    <div className="font-semibold">Visita técnica</div>
                    <div className="text-blue-100">Programada en menos de 48 horas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tu proyecto de reforma comienza con una simple llamada
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            ¡Contacta con nosotros hoy mismo!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:93XXXXXXX"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              📞 Llamar Ahora
            </a>
            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;