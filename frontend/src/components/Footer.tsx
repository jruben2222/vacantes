import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-azul-oscuro-ipl text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amarillo-ipl to-white rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-azul-oscuro-ipl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Instituto Politécnico Loyola</h3>
                <p className="text-white/80">Portal de Empleos</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Conectamos el talento formado en el IPL con las mejores oportunidades laborales del país, 
              fortaleciendo el desarrollo profesional de nuestros estudiantes y egresados.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amarillo-ipl hover:text-azul-oscuro-ipl transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amarillo-ipl hover:text-azul-oscuro-ipl transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amarillo-ipl hover:text-azul-oscuro-ipl transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                'Oportunidades Laborales',
                'Para Empresas',
                'Para Estudiantes',
                'Recursos Descargables',
                'Orientación Profesional',
                'Historias de Éxito'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-amarillo-ipl transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amarillo-ipl mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Ave. 27 de Febrero #476<br />
                    Santo Domingo, República Dominicana
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amarillo-ipl flex-shrink-0" />
                <p className="text-white/70 text-sm">(809) 566-7576</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amarillo-ipl flex-shrink-0" />
                <p className="text-white/70 text-sm">empleos@ipl.edu.do</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <h5 className="font-semibold mb-2 text-amarillo-ipl">Horario de Atención</h5>
              <p className="text-white/70 text-sm">
                Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                Sábados: 8:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Instituto Politécnico Loyola. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-white/60 hover:text-amarillo-ipl transition-colors duration-200 text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-amarillo-ipl transition-colors duration-200 text-sm">
                Términos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-amarillo-ipl transition-colors duration-200 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;