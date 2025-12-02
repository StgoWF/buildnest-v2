import React from 'react';
import Link from 'next/link';
import AppImage from './ui/AppImage';

const ReformasFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AppImage
                src="/assets/images/buildnest-1764591131149.png"
                alt="Buildnest logo"
                className="h-8 w-8 object-contain"
              />
              <h3 className="text-white text-lg font-bold">Buildnest</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Especialistas en reformas integrales en Barcelona con más de 10 años de experiencia.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/reformas-integrales-complete-service-page" className="hover:text-white transition-colors">
                  Reformas Integrales
                </Link>
              </li>
              <li>
                <Link href="/individual-service-kitchen-renovation" className="hover:text-white transition-colors">
                  Cocinas
                </Link>
              </li>
              <li>
                <Link href="/bathroom-renovation-complete-service-page" className="hover:text-white transition-colors">
                  Baños
                </Link>
              </li>
              <li>
                <Link href="/carpinter-a-a-medida-complete-service-page" className="hover:text-white transition-colors">
                  Carpintería
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>Barcelona, España</li>
              <li>Tel: +34 123 456 789</li>
              <li>info@buildnest.es</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-bold mb-4">Horario</h4>
            <ul className="space-y-2 text-sm">
              <li>Lunes - Viernes: 9:00 - 18:00</li>
              <li>Sábado: 10:00 - 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Buildnest. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default ReformasFooter;