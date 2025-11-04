import React from 'react';
import { Briefcase, Building2, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logoIPL.png';

interface HeaderProps {
  activeSection: 'jobs' | 'companies' | 'students';
  setActiveSection: (section: 'jobs' | 'companies' | 'students') => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'jobs' as const, label: 'Oportunidades Laborales', icon: Briefcase },
    { id: 'companies' as const, label: 'Para Empresas', icon: Building2 },
    { id: 'students' as const, label: 'Para Estudiantes', icon: GraduationCap },
    
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-36">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-48 h-w-48 ">
              
               <img 
                src={logo} 
                alt="Logo de IPL" 
                className="h-w-32 sm:h-32 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-azul-oscuro-ipl leading-tight">Instituto Politécnico Loyola</h1>
              <p className="text-[18px] text-azul-ipl font-medium">Portal de Vacantes</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === id
                    ? 'bg-azul-ipl text-white shadow-lg transform scale-105'
                    : 'text-azul-oscuro-ipl hover:bg-azul-ipl hover:text-white hover:shadow-md hover:transform hover:scale-105'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl text-azul-oscuro-ipl hover:bg-gris-claro-ipl transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gris-claro-ipl animate-slide-up">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center space-x-3 ${
                    activeSection === id
                      ? 'bg-azul-ipl text-white shadow-md'
                      : 'text-azul-oscuro-ipl hover:bg-gris-claro-ipl'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;